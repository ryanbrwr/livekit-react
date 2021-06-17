import {
  connect,
  ConnectOptions,
  LocalParticipant,
  Participant,
  Room,
  RoomEvent,
} from "livekit-client";
import { useCallback, useState } from "react";

export interface RoomState {
  connect: (
    url: string,
    token: string,
    options?: ConnectOptions
  ) => Promise<Room | undefined>;
  isConnecting: boolean;
  room?: Room;
  participants: Participant[];
  error?: Error;
}

export function useRoom(): RoomState {
  const [room, setRoom] = useState<Room>();
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<Error>();
  const [participants, setParticipants] = useState<Participant[]>([]);

  const connectFn = useCallback(
    async (url: string, token: string, options?: ConnectOptions) => {
      setIsConnecting(true);
      try {
        const newRoom = await connect(url, token, options);
        setRoom(newRoom);
        const disconnect = () => newRoom.disconnect();
        const onParticipantsChanged = () => {
          const remotes = Array.from(newRoom.participants.values());
          const participants: Participant[] = [newRoom.localParticipant];
          participants.push(...remotes);
          sortParticipants(participants, newRoom.localParticipant);
          setParticipants(participants);
        };

        newRoom.once(RoomEvent.Disconnected, () => {
          setTimeout(() => setRoom(undefined));
          window.removeEventListener("beforeunload", disconnect);

          newRoom.off(RoomEvent.ParticipantConnected, onParticipantsChanged);
          newRoom.off(RoomEvent.ParticipantDisconnected, onParticipantsChanged);
          newRoom.off(RoomEvent.ActiveSpeakersChanged, onParticipantsChanged);
          newRoom.off(RoomEvent.TrackSubscribed, onParticipantsChanged);
          newRoom.off(RoomEvent.TrackUnsubscribed, onParticipantsChanged);
        });
        newRoom.on(RoomEvent.ParticipantConnected, onParticipantsChanged);
        newRoom.on(RoomEvent.ParticipantDisconnected, onParticipantsChanged);
        newRoom.on(RoomEvent.ActiveSpeakersChanged, onParticipantsChanged);
        newRoom.on(RoomEvent.TrackSubscribed, onParticipantsChanged);
        newRoom.on(RoomEvent.TrackUnsubscribed, onParticipantsChanged);

        setIsConnecting(false);
        onParticipantsChanged();

        window.addEventListener("beforeunload", disconnect);

        return newRoom;
      } catch (error) {
        setIsConnecting(false);
        setError(error);

        return undefined;
      }
    },
    []
  );

  return {
    connect: connectFn,
    isConnecting,
    room,
    error,
    participants,
  };
}

/**
 * Default sort for participants, it'll order participants by:
 * 1. dominant speaker (speaker with the loudest audio level)
 * 2. local participant
 * 3. other speakers that are recently active
 * 4. participants with video on
 * 5. by joinedAt
 */
export function sortParticipants(
  participants: Participant[],
  localParticipant?: LocalParticipant
) {
  participants.sort((a, b) => {
    // loudest speaker first
    if (a.isSpeaking && b.isSpeaking) {
      return b.audioLevel - a.audioLevel;
    }

    // speaker goes first
    if (a.isSpeaking !== b.isSpeaking) {
      if (a.isSpeaking) {
        return -1;
      } else {
        return 1;
      }
    }

    // last active speaker first
    if (a.lastSpokeAt !== b.lastSpokeAt) {
      const aLast = a.lastSpokeAt?.getTime() ?? 0;
      const bLast = b.lastSpokeAt?.getTime() ?? 0;
      return bLast - aLast;
    }

    // video on
    const aVideo = a.videoTracks.size > 0;
    const bVideo = b.videoTracks.size > 0;
    if (aVideo !== bVideo) {
      if (aVideo) {
        return -1;
      } else {
        return 1;
      }
    }

    // joinedAt
    return (a.joinedAt?.getTime() ?? 0) - (b.joinedAt?.getTime() ?? 0);
  });

  if (localParticipant) {
    const localIdx = participants.indexOf(localParticipant);
    if (localIdx >= 0) {
      participants.splice(localIdx, 1);
      if (participants.length > 0) {
        participants.splice(1, 0, localParticipant);
      } else {
        participants.push(localParticipant);
      }
    }
  }
}