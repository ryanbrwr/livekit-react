(this["webpackJsonplivekit-react-example"]=this["webpackJsonplivekit-react-example"]||[]).push([[0],{130:function(e,t,n){"use strict";n.r(t);n(75);var a=n(0),c=n.n(a),i=n(46),r=n.n(i),o=(n(80),n(33)),l=n(3),u=n(17),s=n(72),d=n(1),m=n(14),f=n(47),v=n(66),b=n(69),E=n.n(b),k=(n(120),n(68)),p=n(67),h=function(e){var t=e.track,n=e.isLocal,c=Object(a.useRef)();return Object(a.useEffect)((function(){if(!n)return c.current=t.attach(),t.sid&&c.current.setAttribute("data-audio-track-id",t.sid),function(){return t.detach().forEach((function(e){return e.remove()}))}}),[t,n]),null},g="_2WNzJ",S="_34YL4",O="_30KSQ",j="_1k1qr",P="_2kKks",T="_3w3nM",y="_hRq5k",C="_1Nxni",N="_Rt0RH",L="_3Lz0y",M="_3Bgvz",w="_1VLMM",R="_3XXS4",I="_dKNN7",V=function(e){var t=e.label,n=e.disabled,i=e.onClick,r=e.icon,o=e.className,l=e.menuItems,u=e.onMenuItemClick,s=Object(a.useState)(!1),d=s[0],b=s[1],E=y;o&&(E+=" "+o);var k,p=c.a.createElement("div",null);return l&&l.length>0&&(E+=" "+M,k=c.a.createElement("button",{disabled:n,className:y+" "+L,onClick:function(){return b(!d)}},c.a.createElement("div",{className:w}),c.a.createElement(f.a,{height:32,icon:m.a})),p=c.a.createElement("div",{className:R},c.a.createElement("ul",{className:I},null===l||void 0===l?void 0:l.map((function(e,t){return c.a.createElement("li",{key:t,onClick:function(){return function(e){u&&u(e),b(!1)}(e)}},e.label)}))))),c.a.createElement(v.Popover,{isOpen:d,positions:["top"],content:p},c.a.createElement("div",{className:T},c.a.createElement("button",{disabled:n,className:E,onClick:i},r&&c.a.createElement(f.a,{className:C,height:32,icon:r}),t),k))},_=function(e){var t=e.isMuted,n=e.onClick,i=e.onSourceSelected,r=Object(a.useState)([]),o=r[0],l=r[1],u=Object(a.useState)([]),s=u[0],d=u[1];Object(a.useEffect)((function(){navigator.mediaDevices.enumerateDevices().then((function(e){var t=e.filter((function(e){return"audioinput"===e.kind&&e.deviceId}));l(t),d(t.map((function(e){return{label:e.label}})))}))}),[t]);return c.a.createElement(V,{label:t?"Unmute":"Mute",icon:t?m.d:m.c,onClick:n,menuItems:s,onMenuItemClick:function(e){var t=o.find((function(t){return t.label===e.label}));t&&i&&i(t)}})};"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function x(e,t){try{var n=e()}catch(a){return t(a)}return n&&n.then?n.then(void 0,t):n}function A(e){var t=Object(a.useState)(!1),n=t[0],c=t[1],i=Object(a.useState)(!1),r=i[0],o=i[1],l=Object(a.useState)(),u=l[0],s=l[1],m=Object(a.useState)([]),f=m[0],v=m[1],b=Object(a.useState)([]),E=b[0],k=b[1],p=function(){v(Array.from(e.tracks.values())),k(Array.from(e.tracks.values()).filter((function(e){return void 0!==e.track})))};return Object(a.useEffect)((function(){var t=function(e){e.kind===d.Track.Kind.Audio&&c(!0)},n=function(e){e.kind===d.Track.Kind.Audio&&c(!1)},a=function(){e.metadata&&s(e.metadata)},i=function(){o(e.isSpeaking)};return e.on(d.ParticipantEvent.TrackMuted,t),e.on(d.ParticipantEvent.TrackUnmuted,n),e.on(d.ParticipantEvent.MetadataChanged,a),e.on(d.ParticipantEvent.IsSpeakingChanged,i),e.on(d.ParticipantEvent.TrackPublished,p),e.on(d.ParticipantEvent.TrackUnpublished,p),e.on(d.ParticipantEvent.TrackSubscribed,p),e.on(d.ParticipantEvent.TrackUnsubscribed,p),e.on("localtrackchanged",p),a(),i(),p(),e.audioTracks.forEach((function(e){c(e.isMuted)})),function(){e.off(d.ParticipantEvent.TrackMuted,t),e.off(d.ParticipantEvent.TrackUnmuted,n),e.off(d.ParticipantEvent.MetadataChanged,a),e.off(d.ParticipantEvent.IsSpeakingChanged,i),e.off(d.ParticipantEvent.TrackPublished,p),e.off(d.ParticipantEvent.TrackUnpublished,p),e.off(d.ParticipantEvent.TrackSubscribed,p),e.off(d.ParticipantEvent.TrackUnsubscribed,p),e.off("localtrackchanged",p)}}),[]),{isLocal:e instanceof d.LocalParticipant,isSpeaking:r,isMuted:n,publications:f,subscribedTracks:E,metadata:u,unpublishTrack:function(t){try{if(!(e instanceof d.LocalParticipant))throw new Error("could not unpublish, not a local participant");return e.unpublishTrack(t),e.emit("localtrackchanged"),Promise.resolve()}catch(n){return Promise.reject(n)}}}}var D=function(e){var t,n,a,i=e.room,r=e.onLeave,o=A(i.localParticipant),l=o.publications,u=o.isMuted,s=o.unpublishTrack,f=l.find((function(e){return e.kind===d.Track.Kind.Audio})),v=l.find((function(e){return e.kind===d.Track.Kind.Video&&"screen"!==e.trackName})),b=l.find((function(e){return e.kind===d.Track.Kind.Video&&"screen"===e.trackName}));return t=!f||u?c.a.createElement(V,{label:"Unmute",icon:m.d,onClick:function(){try{var e=function(){if(!f)return Promise.resolve(Object(d.createLocalAudioTrack)()).then((function(e){i.localParticipant.publishTrack(e)}));f.unmute()}();return Promise.resolve(e&&e.then?e.then((function(){})):void 0)}catch(t){return Promise.reject(t)}}}):c.a.createElement(V,{label:"Mute",icon:m.c,onClick:function(){return f.mute()}}),n=null!==v&&void 0!==v&&v.track?c.a.createElement(V,{label:"Stop video",icon:m.f,onClick:function(){return s(v.track)}}):c.a.createElement(V,{label:"Start video",icon:m.g,onClick:function(){try{return Promise.resolve(Object(d.createLocalVideoTrack)()).then((function(e){i.localParticipant.publishTrack(e)}))}catch(e){return Promise.reject(e)}}}),a=null!==b&&void 0!==b&&b.track?c.a.createElement(V,{label:"Stop sharing",icon:m.e,onClick:function(){return s(b.track)}}):c.a.createElement(V,{label:"Share screen",icon:m.b,onClick:function(){try{var e=x((function(){return Promise.resolve(navigator.mediaDevices.getDisplayMedia({video:{width:d.VideoPresets.fhd.resolution.width,height:d.VideoPresets.fhd.resolution.height}})).then((function(e){i.localParticipant.publishTrack(e.getTracks()[0],{name:"screen",videoEncoding:{maxBitrate:3e6,maxFramerate:30}})}))}),(function(){}));return Promise.resolve(e&&e.then?e.then((function(){})):void 0)}catch(t){return Promise.reject(t)}}}),c.a.createElement("div",{className:P},t,n,a,c.a.createElement(V,{label:"End",className:N,onClick:function(){i.disconnect(),r&&r(i)}}))},K=function(e){var t,n=e.track,i=e.isLocal,r=e.objectFit,o=e.className,l=e.width,u=e.height,s=Object(a.useRef)(null);Object(a.useEffect)((function(){var e=s.current;if(e)return e.muted=!0,n.attach(e),function(){n.detach(e)}}),[n,s]);var d="environment"!==(null===(t=n.mediaStreamTrack)||void 0===t?void 0:t.getSettings().facingMode),m={transform:i&&d?"rotateY(180deg)":"",width:l,height:u};return r&&(m.objectFit=r),c.a.createElement("video",{ref:s,className:null!=o?o:g,style:m})},U=function(e){var t,n,i,r=e.participant,o=e.width,l=e.height,u=e.aspectWidth,s=e.aspectHeight,m=e.displayName,f=e.showOverlay,v=e.onMouseOver,b=e.onMouseOut,p=e.onClick,g=e.disableHiddenVideo,P=A(r),T=P.isLocal,y=P.subscribedTracks,C=Object(k.a)(),N=C.ref,L=C.inView;Object(a.useEffect)((function(){g&&i instanceof d.RemoteTrackPublication&&L!==i.isEnabled&&i.setEnabled(L)}),[L,g]),y.forEach((function(e){e.kind!==d.Track.Kind.Audio||n||(n=e.track),e.kind!==d.Track.Kind.Video||i||(i=e)}));var M,w={width:o,height:l},R="contain";return u&&s&&null!==(t=i)&&void 0!==t&&t.dimensions&&(u-s)*(i.dimensions.width-i.dimensions.height)>0&&(R="cover"),m||(m=r.identity,T&&(m+=" (You)")),M=i?c.a.createElement(K,{track:i.track,isLocal:T,objectFit:R,width:"100%",height:"100%"}):c.a.createElement("div",{className:O}),c.a.createElement("div",{ref:N,className:S,style:w,onMouseOver:v,onMouseOut:b,onClick:p},n&&c.a.createElement(h,{track:n,isLocal:T}),u&&s&&c.a.createElement(E.a,{ratio:u/s},M),(!u||!s)&&M,f&&c.a.createElement("div",{className:j},m))},H="_2sm4e",z="_2VE66",F="_2kKDi",q="_gA0MQ",B="_1smc2",J=function(e){var t=e.roomState,n=e.participantRenderer,i=e.controlRenderer,r=e.onLeave,o=e.disableHiddenVideo,l=t.isConnecting,u=t.error,s=t.participants,m=t.room,f=Object(a.useState)(!1),v=f[0],b=f[1];if(u)return c.a.createElement("div",null,"error ",u.message);if(l)return c.a.createElement("div",null,"connecting");if(!m)return c.a.createElement("div",null,"room closed");if(0===s.length)return c.a.createElement("div",null,"no one is in the room");var E,k,p,h=null!=n?n:U,g=null!=i?i:D;return s.forEach((function(e){e instanceof d.LocalParticipant||e.videoTracks.forEach((function(e){"screen"===e.trackName&&e.track&&(E=e.track)}))})),E?(k=s,p=c.a.createElement(K,{track:E,isLocal:!1,height:"100%"})):(k=s.slice(1),p=c.a.createElement(h,{key:s[0].identity,participant:s[0],showOverlay:v,onMouseOver:function(){return b(!0)},onMouseOut:function(){return b(!1)},disableHiddenVideo:o})),c.a.createElement("div",{className:H},c.a.createElement("div",{className:z},c.a.createElement("div",{className:F},p),c.a.createElement("div",{className:q},k.map((function(e){return c.a.createElement(h,{key:e.identity,participant:e,width:"100%",aspectWidth:16,aspectHeight:9,showOverlay:v,onMouseOver:function(){return b(!0)},onMouseOut:function(){return b(!1)},disableHiddenVideo:o})})))),c.a.createElement("div",{className:B},c.a.createElement(g,{room:m,onLeave:r})))},Q="_2zM8F",W="_9PXrI",X="_3MB5b",Y=function(e){var t=e.roomState,n=e.participantRenderer,i=e.controlRenderer,r=e.onLeave,o=e.disableHiddenVideo,l=t.isConnecting,u=t.error,s=t.participants,m=t.room,f=Object(a.useState)(!1),v=f[0],b=f[1];if(u)return c.a.createElement("div",null,"error ",u.message);if(l)return c.a.createElement("div",null,"connecting");if(!m)return c.a.createElement("div",null,"room closed");if(0===s.length)return c.a.createElement("div",null,"no one is in the room");var E,k,p=null!=n?n:U,h=null!=i?i:D;return s.forEach((function(e){e instanceof d.LocalParticipant||e.videoTracks.forEach((function(e){"screen"===e.trackName&&e.track&&(E=e.track)}))})),k=E?c.a.createElement(K,{track:E,isLocal:!1,height:"100%"}):c.a.createElement(p,{key:s[0].identity,participant:s[0],showOverlay:v,width:"100%",height:"100%",onMouseOver:function(){return b(!0)},onMouseOut:function(){return b(!1)},disableHiddenVideo:o}),c.a.createElement("div",{className:Q},c.a.createElement("div",{className:W},k),c.a.createElement("div",{className:X},c.a.createElement(h,{room:m,onLeave:r})))},G=function(e){return Object(p.useMediaQuery)({query:"(max-width: 800px)"})?c.a.createElement(Y,Object.assign({},e)):c.a.createElement(J,Object.assign({},e))},Z=function(e){var t=e.isEnabled,n=e.onClick,i=e.onSourceSelected,r=Object(a.useState)([]),o=r[0],l=r[1],u=Object(a.useState)([]),s=u[0],d=u[1];Object(a.useEffect)((function(){navigator.mediaDevices.enumerateDevices().then((function(e){var t=e.filter((function(e){return"videoinput"===e.kind&&e.deviceId}));l(t),d(t.map((function(e){return{label:e.label}})))}))}),[t]);return c.a.createElement(V,{label:t?"Disable Video":"Enable Video",icon:t?m.f:m.g,onClick:n,menuItems:s,onMenuItemClick:function(e){var t=o.find((function(t){return t.label===e.label}));t&&i&&i(t)}})};var $=function(e){var t=e.url,n=e.token,c=e.connectOptions,i=e.stageRenderer,r=e.participantRenderer,o=e.controlRenderer,l=e.onConnected,u=e.onLeave,s=e.disableHiddenVideo,m=function(){var e=Object(a.useState)(),t=e[0],n=e[1],c=Object(a.useState)(!1),i=c[0],r=c[1],o=Object(a.useState)(),l=o[0],u=o[1],s=Object(a.useState)([]),m=s[0],f=s[1];return{connect:Object(a.useCallback)((function(e,t,a){try{return r(!0),Promise.resolve(x((function(){return Promise.resolve(Object(d.connect)(e,t,a)).then((function(e){n(e);var t=function(){return e.disconnect()},a=function(){var t=Array.from(e.participants.values()),n=[e.localParticipant];n.push.apply(n,t),function(e,t){if(e.sort((function(e,t){var n,a,c,i;if(e.isSpeaking&&t.isSpeaking)return t.audioLevel-e.audioLevel;if(e.isSpeaking!==t.isSpeaking)return e.isSpeaking?-1:1;if(e.lastSpokeAt!==t.lastSpokeAt){var r,o,l,u,s=null!=(r=null===(o=e.lastSpokeAt)||void 0===o?void 0:o.getTime())?r:0;return(null!=(l=null===(u=t.lastSpokeAt)||void 0===u?void 0:u.getTime())?l:0)-s}var d=e.videoTracks.size>0;return d!==t.videoTracks.size>0?d?-1:1:(null!=(n=null===(a=e.joinedAt)||void 0===a?void 0:a.getTime())?n:0)-(null!=(c=null===(i=t.joinedAt)||void 0===i?void 0:i.getTime())?c:0)})),t){var n=e.indexOf(t);n>=0&&(e.splice(n,1),e.length>0?e.splice(1,0,t):e.push(t))}}(n,e.localParticipant),f(n)};return e.once(d.RoomEvent.Disconnected,(function(){setTimeout((function(){return n(void 0)})),window.removeEventListener("beforeunload",t),e.off(d.RoomEvent.ParticipantConnected,a),e.off(d.RoomEvent.ParticipantDisconnected,a),e.off(d.RoomEvent.ActiveSpeakersChanged,a),e.off(d.RoomEvent.TrackSubscribed,a),e.off(d.RoomEvent.TrackUnsubscribed,a)})),e.on(d.RoomEvent.ParticipantConnected,a),e.on(d.RoomEvent.ParticipantDisconnected,a),e.on(d.RoomEvent.ActiveSpeakersChanged,a),e.on(d.RoomEvent.TrackSubscribed,a),e.on(d.RoomEvent.TrackUnsubscribed,a),r(!1),a(),window.addEventListener("beforeunload",t),e}))}),(function(e){r(!1),u(e)})))}catch(c){return Promise.reject(c)}}),[]),isConnecting:i,room:t,error:l,participants:m}}();return Object(a.useEffect)((function(){m.connect(t,n,c).then((function(e){e&&l&&l(e)}))}),[]),(null!=i?i:G)({roomState:m,participantRenderer:r,controlRenderer:o,onLeave:u,disableHiddenVideo:s})},ee=n(71),te=n.n(ee),ne=function(){var e=Object(a.useState)("ws://localhost:7880"),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(""),o=Object(u.a)(r,2),m=o[0],f=o[1],v=Object(a.useState)(!0),b=Object(u.a)(v,2),E=b[0],k=b[1],p=Object(a.useState)(!1),h=Object(u.a)(p,2),g=h[0],S=h[1],O=Object(a.useState)(!0),j=Object(u.a)(O,2),P=j[0],T=j[1],y=Object(a.useState)(!0),C=Object(u.a)(y,2),N=C[0],L=C[1],M=Object(a.useRef)(null),w=Object(a.useState)(),R=Object(u.a)(w,2),I=R[0],x=R[1],A=Object(a.useState)(),D=Object(u.a)(A,2),U=D[0],H=D[1],z=Object(a.useState)(),F=Object(u.a)(z,2),q=F[0],B=F[1],J=Object(l.f)();Object(a.useEffect)((function(){if(M.current&&I){var e=M.current;return I.attach(e),function(){I.detach(e),I.stop()}}}),[I,M]),Object(a.useEffect)((function(){L(!m||!n)}),[m,n]);var Q=function(){if(I)I.stop(),S(!1),x(void 0);else{var e={};q&&(e.deviceId=q.deviceId),Object(d.createLocalVideoTrack)(e).then((function(e){S(!0),x(e)}))}};Object(a.useEffect)((function(){Object(d.createLocalVideoTrack)().then((function(e){S(!0),x(e)}))}),[]);var W;return W=I?c.a.createElement(K,{track:I,isLocal:!0}):c.a.createElement("div",{className:"placeholder"}),c.a.createElement("div",{className:"prejoin"},c.a.createElement("main",null,c.a.createElement("h2",null,"LiveKit Video"),c.a.createElement("hr",null),c.a.createElement("div",{className:"entrySection"},c.a.createElement("div",null,c.a.createElement("div",{className:"label"},"LiveKit URL"),c.a.createElement("div",null,c.a.createElement("input",{type:"text",name:"url",value:n,onChange:function(e){return i(e.target.value)}}))),c.a.createElement("div",null,c.a.createElement("div",{className:"label"},"Token"),c.a.createElement("div",null,c.a.createElement("input",{type:"text",name:"token",value:m,onChange:function(e){return f(e.target.value)}}))),c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",name:"simulcast",checked:E,onChange:function(e){return k(e.target.checked)}}),c.a.createElement("label",null,"Simulcast"))),c.a.createElement("div",{className:"videoSection"},c.a.createElement(te.a,{ratio:16/9},W)),c.a.createElement("div",{className:"controlSection"},c.a.createElement("div",null,c.a.createElement(_,{isMuted:!P,onClick:function(){T(!P)},onSourceSelected:H}),c.a.createElement(Z,{isEnabled:void 0!==I,onClick:Q,onSourceSelected:function(e){if(B(e),I){if(I.mediaStreamTrack.getSettings().deviceId===e.deviceId)return;Q()}Q()}})),c.a.createElement("div",{className:"right"},c.a.createElement(V,{label:"Connect",disabled:N,icon:s.a,onClick:function(){var e={url:n,token:m,videoEnabled:g?"1":"0",audioEnabled:P?"1":"0",simulcast:E?"1":"0"};U&&(e.audioDeviceId=U.deviceId),q&&(e.videoDeviceId=q.deviceId),J.push({pathname:"/room",search:"?"+new URLSearchParams(e).toString()})}})))))},ae=n(12),ce=n.n(ae),ie=n(73),re=function(){var e=Object(l.f)(),t=new URLSearchParams(Object(l.g)().search),n=t.get("url"),a=t.get("token");if(!n||!a)return c.a.createElement("div",null,"url and token are required");return c.a.createElement("div",{className:"roomContainer"},c.a.createElement("h2",null,"LiveKit Video"),c.a.createElement($,{url:n,token:a,onConnected:function(e){return function(e,t){return oe.apply(this,arguments)}(e,t)},onLeave:function(){e.push({pathname:"/"})},disableHiddenVideo:!0}))};function oe(){return(oe=Object(ie.a)(ce.a.mark((function e(t,n){var a,c,i,r,o,l,u;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!le(n,"audioEnabled")){e.next=9;break}return a={},(c=n.get("audioDeviceId"))&&(a.deviceId=c),e.next=6,Object(d.createLocalAudioTrack)(a);case 6:return i=e.sent,e.next=9,t.localParticipant.publishTrack(i);case 9:if(!le(n,"videoEnabled")){e.next=20;break}return r=n.get("videoDeviceId"),o={},r&&(o.deviceId=r),e.next=15,Object(d.createLocalVideoTrack)(o);case 15:return l=e.sent,u={name:"camera"},le(n,"simulcast")&&(u.simulcast=!0),e.next=20,t.localParticipant.publishTrack(l,u);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function le(e,t){return"1"===e.get(t)||"true"===e.get(t)}var ue=function(){return c.a.createElement("div",{className:"container"},c.a.createElement(o.a,null,c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/room"},c.a.createElement(re,null)),c.a.createElement(l.a,{path:"/"},c.a.createElement(ne,null)))))};r.a.render(c.a.createElement(ue,null),document.getElementById("root"))},74:function(e,t,n){e.exports=n(130)},75:function(e,t,n){},80:function(e,t,n){}},[[74,1,2]]]);
//# sourceMappingURL=main.5d907bbe.chunk.js.map