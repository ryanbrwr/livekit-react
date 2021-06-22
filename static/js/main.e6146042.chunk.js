(this["webpackJsonplivekit-react-example"]=this["webpackJsonplivekit-react-example"]||[]).push([[0],{132:function(e,t,n){"use strict";n.r(t);n(78);var a=n(0),c=n.n(a),i=n(49),r=n.n(i),o=(n(83),n(34)),l=n(4),u=n(15),s=n(35),d=n(1),m=n(10),f=n(36),v=n(69),p=n(20),b=n(72),E=n.n(b),k=(n(122),n(71)),h=n(70),g=function(e){var t=e.track,n=e.isLocal,c=Object(a.useRef)();return Object(a.useEffect)((function(){if(!n)return c.current=t.attach(),t.sid&&c.current.setAttribute("data-audio-track-id",t.sid),function(){return t.detach().forEach((function(e){return e.remove()}))}}),[t,n]),null},S={video:"_2WNzJ",participant:"_34YL4",placeholder:"_30KSQ",participantBar:"_2LCHl",iconRed:"_3LzZj",controlsWrapper:"_2kKks",buttonWrapper:"_3w3nM",button:"_hRq5k",icon:"_1Nxni",dangerButton:"_Rt0RH",dropdown:"_3Lz0y",hasDropdown:"_3Bgvz",separator:"_1VLMM",popoverMenu:"_3XXS4",list:"_dKNN7"},j=function(e){var t=e.label,n=e.disabled,i=e.onClick,r=e.icon,o=e.className,l=e.menuItems,u=e.onMenuItemClick,s=Object(a.useState)(!1),d=s[0],p=s[1],b=S.button;o&&(b+=" "+o);var E,k=c.a.createElement("div",null);return l&&l.length>0&&(b+=" "+S.hasDropdown,E=c.a.createElement("button",{disabled:n,className:S.button+" "+S.dropdown,onClick:function(){return p(!d)}},c.a.createElement("div",{className:S.separator}),c.a.createElement(f.a,{height:32,icon:m.a})),k=c.a.createElement("div",{className:S.popoverMenu},c.a.createElement("ul",{className:S.list},null===l||void 0===l?void 0:l.map((function(e,t){return c.a.createElement("li",{key:t,onClick:function(){return function(e){u&&u(e),p(!1)}(e)}},e.label)}))))),c.a.createElement(v.Popover,{isOpen:d,positions:["top"],content:k},c.a.createElement("div",{className:S.buttonWrapper},c.a.createElement("button",{disabled:n,className:b,onClick:i},r&&c.a.createElement(f.a,{className:S.icon,height:32,icon:r}),t),E))},O=function(e){var t=e.isMuted,n=e.onClick,i=e.onSourceSelected,r=Object(a.useState)([]),o=r[0],l=r[1],u=Object(a.useState)([]),s=u[0],d=u[1];Object(a.useEffect)((function(){navigator.mediaDevices.enumerateDevices().then((function(e){var t=e.filter((function(e){return"audioinput"===e.kind&&e.deviceId}));l(t),d(t.map((function(e){return{label:e.label}})))}))}),[t]);return c.a.createElement(j,{label:t?"Unmute":"Mute",icon:t?m.d:m.c,onClick:n,menuItems:s,onMenuItemClick:function(e){var t=o.find((function(t){return t.label===e.label}));t&&i&&i(t)}})};"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function y(e,t){try{var n=e()}catch(a){return t(a)}return n&&n.then?n.then(void 0,t):n}function T(e){var t=Object(a.useState)(!1),n=t[0],c=t[1],i=Object(a.useState)(!1),r=i[0],o=i[1],l=Object(a.useState)(),u=l[0],s=l[1],m=Object(a.useState)([]),f=m[0],v=m[1],p=Object(a.useState)([]),b=p[0],E=p[1],k=function(){v(Array.from(e.tracks.values())),E(Array.from(e.tracks.values()).filter((function(e){return void 0!==e.track})))};return Object(a.useEffect)((function(){var t=function(e){e.kind===d.Track.Kind.Audio&&c(!0)},n=function(e){e.kind===d.Track.Kind.Audio&&c(!1)},a=function(){e.metadata&&s(e.metadata)},i=function(){o(e.isSpeaking)};return e.on(d.ParticipantEvent.TrackMuted,t),e.on(d.ParticipantEvent.TrackUnmuted,n),e.on(d.ParticipantEvent.MetadataChanged,a),e.on(d.ParticipantEvent.IsSpeakingChanged,i),e.on(d.ParticipantEvent.TrackPublished,k),e.on(d.ParticipantEvent.TrackUnpublished,k),e.on(d.ParticipantEvent.TrackSubscribed,k),e.on(d.ParticipantEvent.TrackUnsubscribed,k),e.on("localtrackchanged",k),a(),i(),k(),e.audioTracks.forEach((function(e){c(e.isMuted)})),function(){e.off(d.ParticipantEvent.TrackMuted,t),e.off(d.ParticipantEvent.TrackUnmuted,n),e.off(d.ParticipantEvent.MetadataChanged,a),e.off(d.ParticipantEvent.IsSpeakingChanged,i),e.off(d.ParticipantEvent.TrackPublished,k),e.off(d.ParticipantEvent.TrackUnpublished,k),e.off(d.ParticipantEvent.TrackSubscribed,k),e.off(d.ParticipantEvent.TrackUnsubscribed,k),e.off("localtrackchanged",k)}}),[e]),{isLocal:e instanceof d.LocalParticipant,isSpeaking:r,isMuted:n,publications:f,subscribedTracks:b,metadata:u,unpublishTrack:function(t){try{if(!(e instanceof d.LocalParticipant))throw new Error("could not unpublish, not a local participant");return e.unpublishTrack(t),e.emit("localtrackchanged"),Promise.resolve()}catch(n){return Promise.reject(n)}}}}var P=function(e){var t,n,a,i=e.room,r=e.onLeave,o=T(i.localParticipant),l=o.publications,u=o.isMuted,s=o.unpublishTrack,f=l.find((function(e){return e.kind===d.Track.Kind.Audio})),v=l.find((function(e){return e.kind===d.Track.Kind.Video&&"screen"!==e.trackName})),p=l.find((function(e){return e.kind===d.Track.Kind.Video&&"screen"===e.trackName}));return t=!f||u?c.a.createElement(j,{label:"Unmute",icon:m.d,onClick:function(){try{var e=function(){if(!f)return Promise.resolve(Object(d.createLocalAudioTrack)()).then((function(e){i.localParticipant.publishTrack(e)}));f.unmute()}();return Promise.resolve(e&&e.then?e.then((function(){})):void 0)}catch(t){return Promise.reject(t)}}}):c.a.createElement(j,{label:"Mute",icon:m.c,onClick:function(){return f.mute()}}),n=null!==v&&void 0!==v&&v.track?c.a.createElement(j,{label:"Stop video",icon:m.f,onClick:function(){return s(v.track)}}):c.a.createElement(j,{label:"Start video",icon:m.g,onClick:function(){try{return Promise.resolve(Object(d.createLocalVideoTrack)()).then((function(e){i.localParticipant.publishTrack(e)}))}catch(e){return Promise.reject(e)}}}),a=null!==p&&void 0!==p&&p.track?c.a.createElement(j,{label:"Stop sharing",icon:m.e,onClick:function(){return s(p.track)}}):c.a.createElement(j,{label:"Share screen",icon:m.b,onClick:function(){try{var e=y((function(){return Promise.resolve(navigator.mediaDevices.getDisplayMedia({video:{width:d.VideoPresets.fhd.resolution.width,height:d.VideoPresets.fhd.resolution.height}})).then((function(e){i.localParticipant.publishTrack(e.getTracks()[0],{name:"screen",videoEncoding:{maxBitrate:3e6,maxFramerate:30}})}))}),(function(){}));return Promise.resolve(e&&e.then?e.then((function(){})):void 0)}catch(t){return Promise.reject(t)}}}),c.a.createElement("div",{className:S.controlsWrapper},t,n,a,c.a.createElement(j,{label:"End",className:S.dangerButton,onClick:function(){i.disconnect(),r&&r(i)}}))},L=function(e){var t,n=e.track,i=e.isLocal,r=e.objectFit,o=e.className,l=e.width,u=e.height,s=Object(a.useRef)(null);Object(a.useEffect)((function(){var e=s.current;if(e)return e.muted=!0,n.attach(e),function(){n.detach(e)}}),[n,s]);var d="environment"!==(null===(t=n.mediaStreamTrack)||void 0===t?void 0:t.getSettings().facingMode),m={transform:i&&d?"rotateY(180deg)":"",width:l,height:u};return r&&(m.objectFit=r),c.a.createElement("video",{ref:s,className:null!=o?o:S.video,style:m})},N=function(e){var t=e.participant,n=e.width,i=e.height,r=e.aspectWidth,o=e.aspectHeight,l=e.displayName,u=e.showOverlay,s=e.quality,v=e.disableHiddenVideo,b=e.onMouseEnter,h=e.onMouseLeave,g=e.onClick,j=T(t),O=j.isLocal,y=j.isMuted,P=j.subscribedTracks,N=Object(k.a)(),C=N.ref,M=N.inView,R=Object(a.useState)(),w=R[0],I=R[1];Object(a.useEffect)((function(){v&&w instanceof d.RemoteTrackPublication&&M!==w.isEnabled&&w.setEnabled(M)}),[w,M,v]),Object(a.useEffect)((function(){w instanceof d.RemoteTrackPublication&&w.setVideoQuality(null!=s?s:p.VideoQuality.HIGH)}),[w,s]),Object(a.useEffect)((function(){P.forEach((function(e){e.kind!==d.Track.Kind.Video||w||I(e)}))}),[P]);var V,_={width:n,height:i},A="contain";return r&&o&&null!==w&&void 0!==w&&w.dimensions&&(r-o)*(w.dimensions.width-w.dimensions.height)>0&&(A="cover"),l||(l=t.identity,O&&(l+=" (You)")),V=w?c.a.createElement(L,{track:w.track,isLocal:O,objectFit:A,width:"100%",height:"100%"}):c.a.createElement("div",{className:S.placeholder}),c.a.createElement("div",{ref:C,className:S.participant,style:_,onMouseEnter:b,onMouseLeave:h,onClick:g},r&&o&&c.a.createElement(E.a,{ratio:r/o},V),(!r||!o)&&V,u&&c.a.createElement("div",{className:S.participantBar},c.a.createElement("div",null,l),c.a.createElement("div",null,c.a.createElement(f.a,{icon:y?m.d:m.c,height:24,className:y?S.iconRed:S.iconNormal}))))},C="_2sm4e",M="_2VE66",R="_2kKDi",w="_gA0MQ",I="_1smc2",V=function(e){var t=e.roomState,n=e.participantRenderer,i=e.controlRenderer,r=e.onLeave,o=e.disableHiddenVideo,l=t.isConnecting,u=t.error,s=t.participants,m=t.room,f=Object(a.useState)(!1),v=f[0],b=f[1];if(u)return c.a.createElement("div",null,"error ",u.message);if(l)return c.a.createElement("div",null,"connecting");if(!m)return c.a.createElement("div",null,"room closed");if(0===s.length)return c.a.createElement("div",null,"no one is in the room");var E,k,h,g=null!=n?n:N,S=null!=i?i:P;return s.forEach((function(e){e instanceof d.LocalParticipant||e.videoTracks.forEach((function(e){"screen"===e.trackName&&e.track&&(E=e.track)}))})),E?(k=s,h=c.a.createElement(L,{track:E,isLocal:!1,height:"100%"})):(k=s.slice(1),h=c.a.createElement(g,{key:s[0].identity,participant:s[0],showOverlay:v,quality:p.VideoQuality.HIGH,onMouseEnter:function(){return b(!0)},onMouseLeave:function(){return b(!1)},disableHiddenVideo:o})),c.a.createElement("div",{className:C},c.a.createElement("div",{className:M},c.a.createElement("div",{className:R},h),c.a.createElement("div",{className:w},k.map((function(e){return c.a.createElement(g,{key:e.identity,participant:e,width:"100%",aspectWidth:16,aspectHeight:9,showOverlay:v,quality:p.VideoQuality.MEDIUM,onMouseEnter:function(){return b(!0)},onMouseLeave:function(){return b(!1)},disableHiddenVideo:o})})))),c.a.createElement("div",{className:I},c.a.createElement(S,{room:m,onLeave:r})))},_="_2zM8F",A="_9PXrI",x="_3MB5b",D=function(e){var t=e.roomState,n=e.participantRenderer,i=e.controlRenderer,r=e.onLeave,o=e.disableHiddenVideo,l=t.isConnecting,u=t.error,s=t.participants,m=t.room,f=Object(a.useState)(!1),v=f[0],p=f[1];if(u)return c.a.createElement("div",null,"error ",u.message);if(l)return c.a.createElement("div",null,"connecting");if(!m)return c.a.createElement("div",null,"room closed");if(0===s.length)return c.a.createElement("div",null,"no one is in the room");var b,E,k=null!=n?n:N,h=null!=i?i:P;return s.forEach((function(e){e instanceof d.LocalParticipant||e.videoTracks.forEach((function(e){"screen"===e.trackName&&e.track&&(b=e.track)}))})),E=b?c.a.createElement(L,{track:b,isLocal:!1,height:"100%"}):c.a.createElement(k,{key:s[0].identity,participant:s[0],showOverlay:v,width:"100%",height:"100%",onMouseEnter:function(){return p(!0)},onMouseLeave:function(){return p(!1)},disableHiddenVideo:o}),c.a.createElement("div",{className:_},c.a.createElement("div",{className:A},E),c.a.createElement("div",{className:x},c.a.createElement(h,{room:m,onLeave:r})))},H=function(e){var t;return t=Object(h.useMediaQuery)({query:"(max-width: 800px)"})?c.a.createElement(D,Object.assign({},e)):c.a.createElement(V,Object.assign({},e)),c.a.createElement(c.a.Fragment,null,t,e.roomState.audioTracks.map((function(e){return c.a.createElement(g,{key:e.sid,track:e,isLocal:!1})})))},K=function(e){var t=e.isEnabled,n=e.onClick,i=e.onSourceSelected,r=Object(a.useState)([]),o=r[0],l=r[1],u=Object(a.useState)([]),s=u[0],d=u[1];Object(a.useEffect)((function(){navigator.mediaDevices.enumerateDevices().then((function(e){var t=e.filter((function(e){return"videoinput"===e.kind&&e.deviceId}));l(t),d(t.map((function(e){return{label:e.label}})))}))}),[t]);return c.a.createElement(j,{label:t?"Disable Video":"Enable Video",icon:t?m.f:m.g,onClick:n,menuItems:s,onMenuItemClick:function(e){var t=o.find((function(t){return t.label===e.label}));t&&i&&i(t)}})};var U=function(e){var t=e.url,n=e.token,c=e.connectOptions,i=e.stageRenderer,r=e.participantRenderer,o=e.controlRenderer,l=e.onConnected,u=e.onLeave,s=e.disableHiddenVideo,m=function(){var e=Object(a.useState)(),t=e[0],n=e[1],c=Object(a.useState)(!1),i=c[0],r=c[1],o=Object(a.useState)(),l=o[0],u=o[1],s=Object(a.useState)([]),m=s[0],f=s[1],v=Object(a.useState)([]),p=v[0],b=v[1];return{connect:Object(a.useCallback)((function(e,t,a){try{return r(!0),Promise.resolve(y((function(){return Promise.resolve(Object(d.connect)(e,t,a)).then((function(e){n(e);var t=function(){return e.disconnect()},a=function(){var t=Array.from(e.participants.values()),n=[e.localParticipant];n.push.apply(n,t),function(e,t){if(e.sort((function(e,t){var n,a,c,i;if(e.isSpeaking&&t.isSpeaking)return t.audioLevel-e.audioLevel;if(e.isSpeaking!==t.isSpeaking)return e.isSpeaking?-1:1;if(e.lastSpokeAt!==t.lastSpokeAt){var r,o,l,u,s=null!=(r=null===(o=e.lastSpokeAt)||void 0===o?void 0:o.getTime())?r:0;return(null!=(l=null===(u=t.lastSpokeAt)||void 0===u?void 0:u.getTime())?l:0)-s}var d=e.videoTracks.size>0;return d!==t.videoTracks.size>0?d?-1:1:(null!=(n=null===(a=e.joinedAt)||void 0===a?void 0:a.getTime())?n:0)-(null!=(c=null===(i=t.joinedAt)||void 0===i?void 0:i.getTime())?c:0)})),t){var n=e.indexOf(t);n>=0&&(e.splice(n,1),e.length>0?e.splice(1,0,t):e.push(t))}}(n,e.localParticipant),f(n)},c=function(t){if(a(),!t||t.kind===d.Track.Kind.Audio){var n=[];e.participants.forEach((function(e){e.audioTracks.forEach((function(e){e.track&&e.kind===d.Track.Kind.Audio&&n.push(e.track)}))})),b(n)}};return e.once(d.RoomEvent.Disconnected,(function(){setTimeout((function(){return n(void 0)})),window.removeEventListener("beforeunload",t),e.off(d.RoomEvent.ParticipantConnected,a),e.off(d.RoomEvent.ParticipantDisconnected,a),e.off(d.RoomEvent.ActiveSpeakersChanged,a),e.off(d.RoomEvent.TrackSubscribed,c),e.off(d.RoomEvent.TrackUnsubscribed,c)})),e.on(d.RoomEvent.ParticipantConnected,a),e.on(d.RoomEvent.ParticipantDisconnected,a),e.on(d.RoomEvent.ActiveSpeakersChanged,a),e.on(d.RoomEvent.TrackSubscribed,c),e.on(d.RoomEvent.TrackUnsubscribed,c),r(!1),c(),window.addEventListener("beforeunload",t),e}))}),(function(e){r(!1),u(e)})))}catch(c){return Promise.reject(c)}}),[]),isConnecting:i,room:t,error:l,participants:m,audioTracks:p}}();return Object(a.useEffect)((function(){m.connect(t,n,c).then((function(e){e&&l&&l(e)}))}),[]),(null!=i?i:H)({roomState:m,participantRenderer:r,controlRenderer:o,onLeave:u,disableHiddenVideo:s})},B=n(74),z=n.n(B),Q=function(){var e=Object(a.useState)("ws://localhost:7880"),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(""),o=Object(u.a)(r,2),m=o[0],f=o[1],v=Object(a.useState)(!0),p=Object(u.a)(v,2),b=p[0],E=p[1],k=Object(a.useState)(!1),h=Object(u.a)(k,2),g=h[0],S=h[1],y=Object(a.useState)(!0),T=Object(u.a)(y,2),P=T[0],N=T[1],C=Object(a.useState)(!0),M=Object(u.a)(C,2),R=M[0],w=M[1],I=Object(a.useRef)(null),V=Object(a.useState)(),_=Object(u.a)(V,2),A=_[0],x=_[1],D=Object(a.useState)(),H=Object(u.a)(D,2),U=H[0],B=H[1],Q=Object(a.useState)(),W=Object(u.a)(Q,2),q=W[0],F=W[1],J=Object(l.f)();Object(a.useEffect)((function(){if(I.current&&A){var e=I.current;return A.attach(e),function(){A.detach(e),A.stop()}}}),[A,I]),Object(a.useEffect)((function(){w(!m||!n)}),[m,n]);var X=function(){if(A)A.stop(),S(!1),x(void 0);else{var e={};q&&(e.deviceId=q.deviceId),Object(d.createLocalVideoTrack)(e).then((function(e){S(!0),x(e)}))}};Object(a.useEffect)((function(){Object(d.createLocalVideoTrack)().then((function(e){S(!0),x(e)}))}),[]);var Y;return Y=A?c.a.createElement(L,{track:A,isLocal:!0}):c.a.createElement("div",{className:"placeholder"}),c.a.createElement("div",{className:"prejoin"},c.a.createElement("main",null,c.a.createElement("h2",null,"LiveKit Video"),c.a.createElement("hr",null),c.a.createElement("div",{className:"entrySection"},c.a.createElement("div",null,c.a.createElement("div",{className:"label"},"LiveKit URL"),c.a.createElement("div",null,c.a.createElement("input",{type:"text",name:"url",value:n,onChange:function(e){return i(e.target.value)}}))),c.a.createElement("div",null,c.a.createElement("div",{className:"label"},"Token"),c.a.createElement("div",null,c.a.createElement("input",{type:"text",name:"token",value:m,onChange:function(e){return f(e.target.value)}}))),c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",name:"simulcast",checked:b,onChange:function(e){return E(e.target.checked)}}),c.a.createElement("label",null,"Simulcast"))),c.a.createElement("div",{className:"videoSection"},c.a.createElement(z.a,{ratio:16/9},Y)),c.a.createElement("div",{className:"controlSection"},c.a.createElement("div",null,c.a.createElement(O,{isMuted:!P,onClick:function(){N(!P)},onSourceSelected:B}),c.a.createElement(K,{isEnabled:void 0!==A,onClick:X,onSourceSelected:function(e){if(F(e),A){if(A.mediaStreamTrack.getSettings().deviceId===e.deviceId)return;X()}X()}})),c.a.createElement("div",{className:"right"},c.a.createElement(j,{label:"Connect",disabled:R,icon:s.a,onClick:function(){var e={url:n,token:m,videoEnabled:g?"1":"0",audioEnabled:P?"1":"0",simulcast:b?"1":"0"};U&&(e.audioDeviceId=U.deviceId),q&&(e.videoDeviceId=q.deviceId),J.push({pathname:"/room",search:"?"+new URLSearchParams(e).toString()})}})))))},W=n(14),q=n.n(W),F=n(75),J=n(76),X=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(l.f)(),o=new URLSearchParams(Object(l.g)().search),m=o.get("url"),f=o.get("token");if(!m||!f)return c.a.createElement("div",null,"url and token are required");var v=function(e){i(e.participants.size+1)};return c.a.createElement("div",{className:"roomContainer"},c.a.createElement("div",{className:"topBar"},c.a.createElement("h2",null,"LiveKit Video"),c.a.createElement("div",{className:"participantCount"},c.a.createElement(J.a,{icon:s.b}),c.a.createElement("span",null,n))),c.a.createElement(U,{url:m,token:f,onConnected:function(e){!function(e,t){Y.apply(this,arguments)}(e,o),e.on(d.RoomEvent.ParticipantConnected,(function(){return v(e)})),e.on(d.RoomEvent.ParticipantDisconnected,(function(){return v(e)})),v(e)},onLeave:function(){r.push({pathname:"/"})},disableHiddenVideo:!0}))};function Y(){return(Y=Object(F.a)(q.a.mark((function e(t,n){var a,c,i,r,o,l,u;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!G(n,"audioEnabled")){e.next=9;break}return a={},(c=n.get("audioDeviceId"))&&(a.deviceId=c),e.next=6,Object(d.createLocalAudioTrack)(a);case 6:return i=e.sent,e.next=9,t.localParticipant.publishTrack(i);case 9:if(!G(n,"videoEnabled")){e.next=20;break}return r=n.get("videoDeviceId"),o={},r&&(o.deviceId=r),e.next=15,Object(d.createLocalVideoTrack)(o);case 15:return l=e.sent,u={name:"camera"},G(n,"simulcast")&&(u.simulcast=!0),e.next=20,t.localParticipant.publishTrack(l,u);case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e,t){return"1"===e.get(t)||"true"===e.get(t)}var Z=function(){return c.a.createElement("div",{className:"container"},c.a.createElement(o.a,null,c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/room"},c.a.createElement(X,null)),c.a.createElement(l.a,{path:"/"},c.a.createElement(Q,null)))))};r.a.render(c.a.createElement(Z,null),document.getElementById("root"))},77:function(e,t,n){e.exports=n(132)},78:function(e,t,n){},83:function(e,t,n){}},[[77,1,2]]]);
//# sourceMappingURL=main.e6146042.chunk.js.map