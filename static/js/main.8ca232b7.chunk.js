(this["webpackJsonplivekit-react-example"]=this["webpackJsonplivekit-react-example"]||[]).push([[0],{132:function(e,t,n){"use strict";n.r(t);n(78);var a=n(0),c=n.n(a),r=n(49),i=n.n(r),o=(n(83),n(34)),l=n(4),u=n(15),s=n(35),d=n(1),m=n(10),f=n(36),v=n(69),p=n(20),b=n(72),E=n.n(b),h=(n(122),n(71)),k=n(70),g=function(e){var t=e.track,n=e.isLocal,c=Object(a.useRef)();return Object(a.useEffect)((function(){if(!n)return c.current=t.attach(),t.sid&&c.current.setAttribute("data-audio-track-id",t.sid),function(){return t.detach().forEach((function(e){return e.remove()}))}}),[t,n]),null},S={video:"_2WNzJ",participant:"_34YL4",placeholder:"_30KSQ",participantBar:"_2LCHl",screenShare:"_1FIqv",iconRed:"_3LzZj",controlsWrapper:"_2kKks",buttonWrapper:"_3w3nM",button:"_hRq5k",icon:"_1Nxni",dangerButton:"_Rt0RH",dropdown:"_3Lz0y",hasDropdown:"_3Bgvz",separator:"_1VLMM",popoverMenu:"_3XXS4",list:"_dKNN7"},j=function(e){var t=e.label,n=e.disabled,r=e.onClick,i=e.icon,o=e.className,l=e.menuItems,u=e.onMenuItemClick,s=Object(a.useState)(!1),d=s[0],p=s[1],b=S.button;o&&(b+=" "+o);var E,h=c.a.createElement("div",null);return l&&l.length>0&&(b+=" "+S.hasDropdown,E=c.a.createElement("button",{disabled:n,className:S.button+" "+S.dropdown,onClick:function(){return p(!d)}},c.a.createElement("div",{className:S.separator}),c.a.createElement(f.a,{height:32,icon:m.a})),h=c.a.createElement("div",{className:S.popoverMenu},c.a.createElement("ul",{className:S.list},null===l||void 0===l?void 0:l.map((function(e,t){return c.a.createElement("li",{key:t,onClick:function(){return function(e){u&&u(e),p(!1)}(e)}},e.label)}))))),c.a.createElement(v.Popover,{isOpen:d,positions:["top"],content:h},c.a.createElement("div",{className:S.buttonWrapper},c.a.createElement("button",{disabled:n,className:b,onClick:r},i&&c.a.createElement(f.a,{className:S.icon,height:32,icon:i}),t),E))},O=function(e){var t=e.isMuted,n=e.onClick,r=e.onSourceSelected,i=Object(a.useState)([]),o=i[0],l=i[1],u=Object(a.useState)([]),s=u[0],d=u[1];Object(a.useEffect)((function(){navigator.mediaDevices.enumerateDevices().then((function(e){var t=e.filter((function(e){return"audioinput"===e.kind&&e.deviceId}));l(t),d(t.map((function(e){return{label:e.label}})))}))}),[t]);return c.a.createElement(j,{label:t?"Unmute":"Mute",icon:t?m.d:m.c,onClick:n,menuItems:s,onMenuItemClick:function(e){var t=o.find((function(t){return t.label===e.label}));t&&r&&r(t)}})};"undefined"!==typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!==typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));function T(e,t){try{var n=e()}catch(a){return t(a)}return n&&n.then?n.then(void 0,t):n}function y(e){var t,n=Object(a.useState)(!1),c=n[0],r=n[1],i=Object(a.useState)(!1),o=i[0],l=i[1],u=Object(a.useState)(),s=u[0],m=u[1],f=Object(a.useState)([]),v=f[0],p=f[1],b=Object(a.useState)([]),E=b[0],h=b[1],k=function(){p(Array.from(e.tracks.values())),h(Array.from(e.tracks.values()).filter((function(e){return void 0!==e.track})))};return Object(a.useEffect)((function(){var t=function(e){e.kind===d.Track.Kind.Audio&&r(!0)},n=function(e){e.kind===d.Track.Kind.Audio&&r(!1)},a=function(){e.metadata&&m(e.metadata)},c=function(){l(e.isSpeaking)};return e.on(d.ParticipantEvent.TrackMuted,t),e.on(d.ParticipantEvent.TrackUnmuted,n),e.on(d.ParticipantEvent.MetadataChanged,a),e.on(d.ParticipantEvent.IsSpeakingChanged,c),e.on(d.ParticipantEvent.TrackPublished,k),e.on(d.ParticipantEvent.TrackUnpublished,k),e.on(d.ParticipantEvent.TrackSubscribed,k),e.on(d.ParticipantEvent.TrackUnsubscribed,k),e.on("localtrackchanged",k),a(),c(),k(),function(){e.off(d.ParticipantEvent.TrackMuted,t),e.off(d.ParticipantEvent.TrackUnmuted,n),e.off(d.ParticipantEvent.MetadataChanged,a),e.off(d.ParticipantEvent.IsSpeakingChanged,c),e.off(d.ParticipantEvent.TrackPublished,k),e.off(d.ParticipantEvent.TrackUnpublished,k),e.off(d.ParticipantEvent.TrackSubscribed,k),e.off(d.ParticipantEvent.TrackUnsubscribed,k),e.off("localtrackchanged",k)}}),[e]),e.audioTracks.forEach((function(e){t=e.isMuted})),void 0===t&&(t=!0),c!==t&&r(t),{isLocal:e instanceof d.LocalParticipant,isSpeaking:o,isMuted:c,publications:v,subscribedTracks:E,metadata:s,unpublishTrack:function(t){try{if(!(e instanceof d.LocalParticipant))throw new Error("could not unpublish, not a local participant");return e.unpublishTrack(t),e.emit("localtrackchanged"),Promise.resolve()}catch(n){return Promise.reject(n)}}}}var P=function(e){var t,n,a,r=e.room,i=e.onLeave,o=y(r.localParticipant),l=o.publications,u=o.isMuted,s=o.unpublishTrack,f=l.find((function(e){return e.kind===d.Track.Kind.Audio})),v=l.find((function(e){return e.kind===d.Track.Kind.Video&&"screen"!==e.trackName})),p=l.find((function(e){return e.kind===d.Track.Kind.Video&&"screen"===e.trackName}));return t=!f||u?c.a.createElement(j,{label:"Unmute",icon:m.d,onClick:function(){try{var e=function(){if(!f)return Promise.resolve(Object(d.createLocalAudioTrack)()).then((function(e){r.localParticipant.publishTrack(e)}));f.unmute()}();return Promise.resolve(e&&e.then?e.then((function(){})):void 0)}catch(t){return Promise.reject(t)}}}):c.a.createElement(j,{label:"Mute",icon:m.c,onClick:function(){return f.mute()}}),n=null!==v&&void 0!==v&&v.track?c.a.createElement(j,{label:"Stop video",icon:m.f,onClick:function(){return s(v.track)}}):c.a.createElement(j,{label:"Start video",icon:m.g,onClick:function(){try{return Promise.resolve(Object(d.createLocalVideoTrack)()).then((function(e){r.localParticipant.publishTrack(e)}))}catch(e){return Promise.reject(e)}}}),a=null!==p&&void 0!==p&&p.track?c.a.createElement(j,{label:"Stop sharing",icon:m.e,onClick:function(){return s(p.track)}}):c.a.createElement(j,{label:"Share screen",icon:m.b,onClick:function(){try{var e=T((function(){return Promise.resolve(navigator.mediaDevices.getDisplayMedia({video:{width:d.VideoPresets.fhd.resolution.width,height:d.VideoPresets.fhd.resolution.height}})).then((function(e){r.localParticipant.publishTrack(e.getTracks()[0],{name:"screen",videoEncoding:{maxBitrate:3e6,maxFramerate:30}})}))}),(function(){}));return Promise.resolve(e&&e.then?e.then((function(){})):void 0)}catch(t){return Promise.reject(t)}}}),c.a.createElement("div",{className:S.controlsWrapper},t,n,a,c.a.createElement(j,{label:"End",className:S.dangerButton,onClick:function(){r.disconnect(),i&&i(r)}}))},N=function(e){var t,n=e.track,r=e.isLocal,i=e.objectFit,o=e.className,l=e.width,u=e.height,s=Object(a.useRef)(null);Object(a.useEffect)((function(){var e=s.current;if(e)return e.muted=!0,n.attach(e),function(){n.detach(e)}}),[n,s]);var d="environment"!==(null===(t=n.mediaStreamTrack)||void 0===t?void 0:t.getSettings().facingMode),m={transform:r&&d?"rotateY(180deg)":"",width:l,height:u};return i&&(m.objectFit=i),c.a.createElement("video",{ref:s,className:null!=o?o:S.video,style:m})},C=function(e){var t=e.participant,n=e.width,r=e.height,i=e.aspectWidth,o=e.aspectHeight,l=e.displayName,u=e.showOverlay,s=e.quality,v=e.adaptiveVideo,b=e.onMouseEnter,k=e.onMouseLeave,g=e.onClick,j=y(t),O=j.isLocal,T=j.isMuted,P=j.subscribedTracks,C=Object(h.a)(),L=C.ref,M=C.inView,w=Object(a.useState)(),R=w[0],I=w[1],V=Object(a.useState)(!0),_=V[0],A=V[1],x=Object(a.useState)(),D=x[0],K=x[1];Object(a.useEffect)((function(){if(L&&R instanceof d.RemoteTrackPublication){var e=M;v||(e=!0),_!==e&&A(!0)}}),[M,v]),Object(a.useEffect)((function(){var e;P.forEach((function(t){t.isSubscribed&&t.kind===d.Track.Kind.Video&&"screen"!==t.trackName&&!e&&(e=t)})),I(e)}),[P]),Object(a.useEffect)((function(){if(D&&(clearTimeout(D),K(void 0)),R instanceof d.RemoteTrackPublication)return _&&R.setEnabled(!0),K(setTimeout((function(){R.setEnabled(_),_&&(R.videoQuality=null!=s?s:p.VideoQuality.HIGH)}),3e3)),function(){D&&(clearTimeout(D),K(void 0))}}),[s,_,R]);var U,B={width:n,height:r},z="contain";return i&&o&&null!==R&&void 0!==R&&R.dimensions&&(i-o)*(R.dimensions.width-R.dimensions.height)>0&&(z="cover"),l||(l=t.identity,O&&(l+=" (You)")),U=null!==R&&void 0!==R&&R.track?c.a.createElement(N,{track:R.track,isLocal:O,objectFit:z,width:"100%",height:"100%"}):c.a.createElement("div",{className:S.placeholder}),c.a.createElement("div",{ref:L,className:S.participant,style:B,onMouseEnter:b,onMouseLeave:k,onClick:g},i&&o&&c.a.createElement(E.a,{ratio:i/o},U),(!i||!o)&&U,u&&c.a.createElement("div",{className:S.participantBar},c.a.createElement("div",null,l),c.a.createElement("div",null,c.a.createElement(f.a,{icon:T?m.d:m.c,height:24,className:T?S.iconRed:S.iconNormal}))))},L=function(e){var t=e.track,n=e.width,a=e.height;return c.a.createElement("div",{className:S.screenShare},c.a.createElement(N,{track:t,isLocal:!1,width:n,height:a}))},M="_2sm4e",w="_2VE66",R="_2kKDi",I="_gA0MQ",V="_1smc2",_=function(e){var t=e.roomState,n=e.participantRenderer,r=e.controlRenderer,i=e.onLeave,o=e.adaptiveVideo,l=t.isConnecting,u=t.error,s=t.participants,m=t.room,f=Object(a.useState)(!1),v=f[0],b=f[1];if(u)return c.a.createElement("div",null,"error ",u.message);if(l)return c.a.createElement("div",null,"connecting");if(!m)return c.a.createElement("div",null,"room closed");if(0===s.length)return c.a.createElement("div",null,"no one is in the room");var E,h,k,g=null!=n?n:C,S=null!=r?r:P;return s.forEach((function(e){e instanceof d.LocalParticipant||e.videoTracks.forEach((function(e){"screen"===e.trackName&&e.track&&(E=e.track)}))})),E?(h=s,k=c.a.createElement(L,{track:E,height:"100%",width:"100%"})):(h=s.slice(1),k=c.a.createElement(g,{key:s[0].identity,participant:s[0],height:"100%",showOverlay:v,quality:p.VideoQuality.HIGH,onMouseEnter:function(){return b(!0)},onMouseLeave:function(){return b(!1)}})),c.a.createElement("div",{className:M},c.a.createElement("div",{className:w},c.a.createElement("div",{className:R},k),c.a.createElement("div",{className:I},h.map((function(e){return c.a.createElement(g,{key:e.identity,participant:e,width:"100%",aspectWidth:16,aspectHeight:9,showOverlay:v,quality:p.VideoQuality.MEDIUM,onMouseEnter:function(){return b(!0)},onMouseLeave:function(){return b(!1)},adaptiveVideo:o})})))),c.a.createElement("div",{className:V},c.a.createElement(S,{room:m,onLeave:i})))},A="_2zM8F",x="_9PXrI",D="_3MB5b",K=function(e){var t=e.roomState,n=e.participantRenderer,r=e.controlRenderer,i=e.onLeave,o=e.adaptiveVideo,l=t.isConnecting,u=t.error,s=t.participants,m=t.room,f=Object(a.useState)(!1),v=f[0],p=f[1];if(u)return c.a.createElement("div",null,"error ",u.message);if(l)return c.a.createElement("div",null,"connecting");if(!m)return c.a.createElement("div",null,"room closed");if(0===s.length)return c.a.createElement("div",null,"no one is in the room");var b,E,h=null!=n?n:C,k=null!=r?r:P;return s.forEach((function(e){e instanceof d.LocalParticipant||e.videoTracks.forEach((function(e){"screen"===e.trackName&&e.track&&(b=e.track)}))})),E=b?c.a.createElement(L,{track:b,height:"100%",width:"100%"}):c.a.createElement(h,{key:s[0].identity,participant:s[0],showOverlay:v,width:"100%",height:"100%",onMouseEnter:function(){return p(!0)},onMouseLeave:function(){return p(!1)},adaptiveVideo:o}),c.a.createElement("div",{className:A},c.a.createElement("div",{className:x},E),c.a.createElement("div",{className:D},c.a.createElement(k,{room:m,onLeave:i})))},U=function(e){var t;return t=Object(k.useMediaQuery)({query:"(max-width: 800px)"})?c.a.createElement(K,Object.assign({},e)):c.a.createElement(_,Object.assign({},e)),c.a.createElement(c.a.Fragment,null,t,e.roomState.audioTracks.map((function(e){return c.a.createElement(g,{key:e.sid,track:e,isLocal:!1})})))},B=function(e){var t=e.isEnabled,n=e.onClick,r=e.onSourceSelected,i=Object(a.useState)([]),o=i[0],l=i[1],u=Object(a.useState)([]),s=u[0],d=u[1];Object(a.useEffect)((function(){navigator.mediaDevices.enumerateDevices().then((function(e){var t=e.filter((function(e){return"videoinput"===e.kind&&e.deviceId}));l(t),d(t.map((function(e){return{label:e.label}})))}))}),[t]);return c.a.createElement(j,{label:t?"Disable Video":"Enable Video",icon:t?m.f:m.g,onClick:n,menuItems:s,onMenuItemClick:function(e){var t=o.find((function(t){return t.label===e.label}));t&&r&&r(t)}})};var z=function(e){var t=e.url,n=e.token,c=e.connectOptions,r=e.stageRenderer,i=e.participantRenderer,o=e.controlRenderer,l=e.onConnected,u=e.onLeave,s=e.adaptiveVideo,m=function(){var e=Object(a.useState)(),t=e[0],n=e[1],c=Object(a.useState)(!1),r=c[0],i=c[1],o=Object(a.useState)(),l=o[0],u=o[1],s=Object(a.useState)([]),m=s[0],f=s[1],v=Object(a.useState)([]),p=v[0],b=v[1];return{connect:Object(a.useCallback)((function(e,t,a){try{return i(!0),Promise.resolve(T((function(){return Promise.resolve(Object(d.connect)(e,t,a)).then((function(e){n(e);var t=function(){var t=Array.from(e.participants.values()),n=[e.localParticipant];n.push.apply(n,t),function(e,t){if(e.sort((function(e,t){var n,a,c,r;if(e.isSpeaking&&t.isSpeaking)return t.audioLevel-e.audioLevel;if(e.isSpeaking!==t.isSpeaking)return e.isSpeaking?-1:1;if(e.lastSpokeAt!==t.lastSpokeAt){var i,o,l,u,s=null!=(i=null===(o=e.lastSpokeAt)||void 0===o?void 0:o.getTime())?i:0;return(null!=(l=null===(u=t.lastSpokeAt)||void 0===u?void 0:u.getTime())?l:0)-s}var d=e.videoTracks.size>0;return d!==t.videoTracks.size>0?d?-1:1:(null!=(n=null===(a=e.joinedAt)||void 0===a?void 0:a.getTime())?n:0)-(null!=(c=null===(r=t.joinedAt)||void 0===r?void 0:r.getTime())?c:0)})),t){var n=e.indexOf(t);n>=0&&(e.splice(n,1),e.length>0?e.splice(1,0,t):e.push(t))}}(n,e.localParticipant),f(n)},a=function(n){if(t(),!n||n.kind===d.Track.Kind.Audio){var a=[];e.participants.forEach((function(e){e.audioTracks.forEach((function(e){e.track&&e.kind===d.Track.Kind.Audio&&a.push(e.track)}))})),b(a)}};return e.once(d.RoomEvent.Disconnected,(function(){setTimeout((function(){return n(void 0)})),e.off(d.RoomEvent.ParticipantConnected,t),e.off(d.RoomEvent.ParticipantDisconnected,t),e.off(d.RoomEvent.ActiveSpeakersChanged,t),e.off(d.RoomEvent.TrackSubscribed,a),e.off(d.RoomEvent.TrackUnsubscribed,a)})),e.on(d.RoomEvent.ParticipantConnected,t),e.on(d.RoomEvent.ParticipantDisconnected,t),e.on(d.RoomEvent.ActiveSpeakersChanged,t),e.on(d.RoomEvent.TrackSubscribed,a),e.on(d.RoomEvent.TrackUnsubscribed,a),i(!1),a(),e}))}),(function(e){i(!1),u(e)})))}catch(c){return Promise.reject(c)}}),[]),isConnecting:r,room:t,error:l,participants:m,audioTracks:p}}();return Object(a.useEffect)((function(){m.connect(t,n,c).then((function(e){if(e)return l&&l(e),function(){e.disconnect()}}))}),[]),(null!=r?r:U)({roomState:m,participantRenderer:i,controlRenderer:o,onLeave:u,adaptiveVideo:s})},H=n(74),q=n.n(H),F=function(){var e=Object(a.useState)("ws://localhost:7880"),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(""),o=Object(u.a)(i,2),m=o[0],f=o[1],v=Object(a.useState)(!0),p=Object(u.a)(v,2),b=p[0],E=p[1],h=Object(a.useState)(!1),k=Object(u.a)(h,2),g=k[0],S=k[1],T=Object(a.useState)(!0),y=Object(u.a)(T,2),P=y[0],C=y[1],L=Object(a.useState)(!0),M=Object(u.a)(L,2),w=M[0],R=M[1],I=Object(a.useRef)(null),V=Object(a.useState)(),_=Object(u.a)(V,2),A=_[0],x=_[1],D=Object(a.useState)(),K=Object(u.a)(D,2),U=K[0],z=K[1],H=Object(a.useState)(),F=Object(u.a)(H,2),Q=F[0],W=F[1],J=Object(l.f)();Object(a.useEffect)((function(){if(I.current&&A){var e=I.current;return A.attach(e),function(){A.detach(e),A.stop()}}}),[A,I]),Object(a.useEffect)((function(){R(!m||!n)}),[m,n]);var X=function(){if(A)A.stop(),S(!1),x(void 0);else{var e={};Q&&(e.deviceId=Q.deviceId),Object(d.createLocalVideoTrack)(e).then((function(e){S(!0),x(e)}))}};Object(a.useEffect)((function(){Object(d.createLocalVideoTrack)().then((function(e){S(!0),x(e)}))}),[]);var Y;return Y=A?c.a.createElement(N,{track:A,isLocal:!0}):c.a.createElement("div",{className:"placeholder"}),c.a.createElement("div",{className:"prejoin"},c.a.createElement("main",null,c.a.createElement("h2",null,"LiveKit Video"),c.a.createElement("hr",null),c.a.createElement("div",{className:"entrySection"},c.a.createElement("div",null,c.a.createElement("div",{className:"label"},"LiveKit URL"),c.a.createElement("div",null,c.a.createElement("input",{type:"text",name:"url",value:n,onChange:function(e){return r(e.target.value)}}))),c.a.createElement("div",null,c.a.createElement("div",{className:"label"},"Token"),c.a.createElement("div",null,c.a.createElement("input",{type:"text",name:"token",value:m,onChange:function(e){return f(e.target.value)}}))),c.a.createElement("div",null,c.a.createElement("input",{type:"checkbox",name:"simulcast",checked:b,onChange:function(e){return E(e.target.checked)}}),c.a.createElement("label",null,"Simulcast"))),c.a.createElement("div",{className:"videoSection"},c.a.createElement(q.a,{ratio:16/9},Y)),c.a.createElement("div",{className:"controlSection"},c.a.createElement("div",null,c.a.createElement(O,{isMuted:!P,onClick:function(){C(!P)},onSourceSelected:z}),c.a.createElement(B,{isEnabled:void 0!==A,onClick:X,onSourceSelected:function(e){if(W(e),A){if(A.mediaStreamTrack.getSettings().deviceId===e.deviceId)return;X()}X()}})),c.a.createElement("div",{className:"right"},c.a.createElement(j,{label:"Connect",disabled:w,icon:s.a,onClick:function(){var e={url:n,token:m,videoEnabled:g?"1":"0",audioEnabled:P?"1":"0",simulcast:b?"1":"0"};U&&(e.audioDeviceId=U.deviceId),Q&&(e.videoDeviceId=Q.deviceId),J.push({pathname:"/room",search:"?"+new URLSearchParams(e).toString()})}})))))},Q=n(11),W=n.n(Q),J=n(75),X=n(76),Y=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],r=t[1],i=Object(l.f)(),o=new URLSearchParams(Object(l.g)().search),m=o.get("url"),f=o.get("token");if(!m||!f)return c.a.createElement("div",null,"url and token are required");var v=function(e){r(e.participants.size+1)};return c.a.createElement("div",{className:"roomContainer"},c.a.createElement("div",{className:"topBar"},c.a.createElement("h2",null,"LiveKit Video"),c.a.createElement("div",{className:"participantCount"},c.a.createElement(X.a,{icon:s.b}),c.a.createElement("span",null,n))),c.a.createElement(z,{url:m,token:f,onConnected:function(e){!function(e,t){G.apply(this,arguments)}(e,o),e.on(d.RoomEvent.ParticipantConnected,(function(){return v(e)})),e.on(d.RoomEvent.ParticipantDisconnected,(function(){return v(e)})),v(e)},onLeave:function(){i.push({pathname:"/"})},adaptiveVideo:!0}))};function G(){return(G=Object(J.a)(W.a.mark((function e(t,n){var a,c,r,i,o,l,u;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(window.currentRoom=t,!Z(n,"audioEnabled")){e.next=10;break}return a={},(c=n.get("audioDeviceId"))&&(a.deviceId=c),e.next=7,Object(d.createLocalAudioTrack)(a);case 7:return r=e.sent,e.next=10,t.localParticipant.publishTrack(r);case 10:if(!Z(n,"videoEnabled")){e.next=21;break}return i=n.get("videoDeviceId"),o={},i&&(o.deviceId=i),e.next=16,Object(d.createLocalVideoTrack)(o);case 16:return l=e.sent,u={name:"camera"},Z(n,"simulcast")&&(u.simulcast=!0),e.next=21,t.localParticipant.publishTrack(l,u);case 21:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e,t){return"1"===e.get(t)||"true"===e.get(t)}var $=function(){return c.a.createElement("div",{className:"container"},c.a.createElement(o.a,null,c.a.createElement(l.c,null,c.a.createElement(l.a,{path:"/room"},c.a.createElement(Y,null)),c.a.createElement(l.a,{path:"/"},c.a.createElement(F,null)))))};i.a.render(c.a.createElement($,null),document.getElementById("root"))},77:function(e,t,n){e.exports=n(132)},78:function(e,t,n){},83:function(e,t,n){}},[[77,1,2]]]);
//# sourceMappingURL=main.8ca232b7.chunk.js.map