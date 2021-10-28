(this["webpackJsonpassignment-1"]=this["webpackJsonpassignment-1"]||[]).push([[0],{42:function(t,e,n){},60:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var s=n(47),o=n(54),r=n(37),i=function(){};i.firebase=Object(s.a)({apiKey:"AIzaSyDjgDxXJD6LdX2xNvRe2jEml6hjWhbLQ1M",authDomain:"cs39harvard.firebaseapp.com",projectId:"cs39harvard",storageBucket:"cs39harvard.appspot.com",messagingSenderId:"479314369399",appId:"1:479314369399:web:cf9023977e0124275d1f72",measurementId:"G-ND61GXC9L1"},"CSCI39-Harvard-Fitness-App"),i.analytics=Object(o.a)(i.firebase),i.database=Object(r.getDatabase)(i.firebase),e.default=i},73:function(t,e,n){},74:function(t,e,n){},75:function(t,e,n){},77:function(t,e,n){"use strict";n.r(e);var s,o,r,i,a,c,u,d,l=n(4),m=n.n(l),j=n(43),h=n.n(j),b=(n(60),n(22)),p=n(10),f=n(11),O=n(2),v=n(3),S=n(7),T=n(8),x=n(1),g=f.a.div(s||(s=Object(p.a)(["\n  border: 1px solid #121212;\n  margin: 20px 0px;\n"]))),k=f.a.div(o||(o=Object(p.a)(["\n  padding: 20px;\n  display: flex;\n  justify-content: space-between;\n"]))),y=f.a.div(r||(r=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 20px;\n  font-size: 1.3rem;\n"]))),C=f.a.div(i||(i=Object(p.a)(["\n  padding: 25px;\n  display: flex;\n  align-items: center;\n"]))),w=f.a.table(a||(a=Object(p.a)([""]))),N=function(t){Object(S.a)(n,t);var e=Object(T.a)(n);function n(){return Object(O.a)(this,n),e.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(g,{children:[Object(x.jsx)(y,{children:this.props.title}),Object(x.jsxs)(k,{children:[Object(x.jsx)(C,{children:this.props.component}),Object(x.jsxs)(w,{children:[Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"Prop"}),Object(x.jsx)("th",{children:"Description"}),Object(x.jsx)("th",{children:"Type"}),Object(x.jsx)("th",{children:"Default value"})]}),this.props.propDocs.map((function(t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:t.prop}),Object(x.jsx)("td",{children:t.description}),Object(x.jsx)("td",{children:t.type}),Object(x.jsx)("td",{children:Object(x.jsx)("code",{children:t.defaultValue})})]})}))]})]})]})}}]),n}(m.a.Component),D=N,I={small:10,medium:14,large:20},P=f.a.div(c||(c=Object(p.a)(["\n  animation: spin 1.5s linear infinite;\n\n  @-moz-keyframes spin {\n    100% {\n      -moz-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @keyframes spin {\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n"]))),z=f.a.span(u||(u=Object(p.a)(["\n  display: block;\n  width: ","px;\n  height: ","px;\n  background-color: ",";\n  border-radius: 100%;\n  transform: scale(0.75);\n  transform-origin: 50% 50%;\n  opacity: 0.3;\n  animation: wobble 1s ease-in-out infinite;\n\n  @keyframes wobble {\n    0% {\n      border-radius: 25%;\n    }\n    100% {\n      border-radius: 100%;\n    }\n  }\n"])),(function(t){return t.size}),(function(t){return t.size}),(function(t){return t.color})),L=f.a.div(d||(d=Object(p.a)(["\n  display: flex;\n"]))),B=function(t){Object(S.a)(n,t);var e=Object(T.a)(n);function n(){return Object(O.a)(this,n),e.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){var t=I[this.props.size],e=this.props.color;return Object(x.jsxs)(P,{children:[Object(x.jsxs)(L,{children:[Object(x.jsx)(z,{size:t,color:e}),Object(x.jsx)(z,{size:t,color:e})]}),Object(x.jsxs)(L,{children:[Object(x.jsx)(z,{size:t,color:e}),Object(x.jsx)(z,{size:t,color:e})]})]})}}]),n}(m.a.Component);B.defaultProps={size:"medium",color:"#ffa2bf"};var A,H,M=B,W=f.a.div(A||(A=Object(p.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]))),R=f.a.div(H||(H=Object(p.a)(["\n  font-size: 2rem;\n"]))),G=function(t){Object(S.a)(n,t);var e=Object(T.a)(n);function n(){return Object(O.a)(this,n),e.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return Object(x.jsx)(W,{children:Object(x.jsxs)("div",{children:[Object(x.jsx)(R,{children:"Documentation"}),Object(x.jsx)(D,{title:"Loading spinner ",component:Object(x.jsx)(M,{}),propDocs:[{prop:"size",description:"Changes the size of the loading spinner",type:"string",defaultValue:"medium"}]})]})})}}]),n}(m.a.Component),J=G,U=n(14),E=n(5),F=n.n(E),q=n(9),V=n(66).default,X=n(37),K=X.ref,Q=X.set,Y=function(t){return"color:white; background: ".concat(t,"; font-weight: bold; padding:5px; border-radius:5px")},Z=function(){};Z.api=function(){},Z.sys=function(){},Z.db=function(){},Z.ui=function(){};var $={USER:null,LOGIN:{status:"uninitialized"},VERSION:"1.0.1",BUILD:"Development"};Z.sys.warn=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return console.warn("%c".concat(JSON.stringify({code:201,message:t,caller:e})),Y("orange"))},Z.sys.error=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return console.error("%c".concat(JSON.stringify({code:501,message:t,caller:e})),Y("red"))},Z.sys.info=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return console.log("%c".concat(JSON.stringify({code:200,message:t,caller:e})),Y("gray"))},Z.sys.getDate=function(){return(new Date).toISOString().slice(0,19).replace("T"," ")},Z.sys.getGlobals=function(){return $},Z.api.getJSON=function(t){var e=t.endpoint,n=t.options,s=(t.callback,new Promise((function(t,o){fetch(e,n||{}).then((function(n){try{t(n.json())}catch(s){Z.sys.warn("api call to [".concat(e,"] has been rejected due to the following exception: ").concat(s),null),o({error:201})}})),s.then()})))},Z.sys.getUserData=function(){return"active"===$.LOGIN.status?$:null},Z.sys.isLoggedIn=function(){return!(!$.LOGIN||"active"!==$.LOGIN.status)&&(console.log($.LOGIN),!0)},Z.sys.getLogin=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Z.sys.isLoggedIn())return!0;var n=new Promise(function(){var n=Object(q.a)(F.a.mark((function n(s,o){var r;return F.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return $.LOGIN={status:"unauthorized"},t||o([]),n.next=4,Z.db.get({refId:"appUsers/".concat(t)}).then();case 4:r=n.sent,$.USER=t,console.log("%c System is trying to log you in as [".concat($.USER,"]"),Y("black")),r?(r.status="active",$.LOGIN=r,console.log("%c System requirs authentication (mocked) [".concat(JSON.stringify(r),"]"),Y("green")),e&&e($.LOGIN),s([])):(console.log("%c Authentication failed (mocked) [".concat(JSON.stringify(r),"]"),Y("green")),o([]));case 8:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}());n.then((function(t){null!=e&&e(t)}))},Z.db.push=function(t){var e=t.refId,n=t.cols;t.callback;if(!e||!n)return Z.sys.warn("Object reference error occured while parsing data to Firebase. This query will not be executed :(");var s=new Promise(function(){var t=Object(q.a)(F.a.mark((function t(s,o){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q(K(V.database,"".concat(e,"/")),n);case 2:s('{action: "set", refId: "'.concat(e,'""}'));case 3:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}());s.then((function(t){Z.sys.info(t)}))},Z.db.get=function(){var t=Object(q.a)(F.a.mark((function t(e){var n;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.refId,t.abrupt("return",new Promise(function(){var t=Object(q.a)(F.a.mark((function t(e,s){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n){t.next=2;break}return t.abrupt("return",Z.sys.warn("Object reference error occured while parsing data to Firebase. This query will not be executed :("));case 2:return t.next=4,fetch("https://cs39harvard-default-rtdb.firebaseio.com/".concat(n,".json")).then((function(t){return t.json()})).then((function(t){return e(t)})).catch((function(t){s([{error:500,message:t}])}));case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Z.sys.debugClickEvent=function(t){return function(){return console.log("Action Button Called",t)}},Z.ui.getDynamicTabs=function(){var t=Object(q.a)(F.a.mark((function t(e,n){return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise(function(){var t=Object(q.a)(F.a.mark((function t(s,o){var r;return F.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z.db.get({refId:e,cols:n});case 2:(r=t.sent)?(Z.sys.warn(r),r.forEach((function(t,e){e<n.length&&(t.renderComp=n[e])})),s(r)):o([]);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()));case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}();var _,tt,et,nt,st,ot,rt,it,at,ct,ut,dt=Z,lt=function(t){return t||(dt.sys.info("Hmm, you are missing a title on a button."),"Untitled :)")},mt=function(t){Object(S.a)(n,t);var e=Object(T.a)(n);function n(){return Object(O.a)(this,n),e.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return Object(x.jsx)("button",{onClick:this.props.onClick,className:(t=this.props.theme,t||"Default-Anchor-Button"),children:lt(this.props.name)});var t}}]),n}(m.a.Component),jt=mt,ht=(n(42),function(t){Object(S.a)(n,t);var e=Object(T.a)(n);function n(){return Object(O.a)(this,n),e.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){var t=this;return Object(x.jsxs)("div",{className:"Option-Wraper",children:[Object(x.jsx)("label",{children:this.props.name}),Object(x.jsx)("select",{onChange:function(e){t.props.onChange(e.target.value)},className:this.props.className?this.props.className:"Default-select",children:(this.props.options?this.props.options:["Nothing found"]).map((function(t,e){return Object(x.jsx)("option",{value:t,children:t})}))})]})}}]),n}(l.Component)),bt=ht,pt=f.a.div(_||(_=Object(p.a)(["\nbackground: #bb0092;\nborder-radius: 30px;\nfont-size: 60px;\ntext-align: center;\ncolor: white;\n"]))),ft=function(t){Object(S.a)(n,t);var e=Object(T.a)(n);function n(t){var s;return Object(O.a)(this,n),(s=e.call(this,t)).state={status:"inactive",date:dt.sys.getDate(),currentTime:"",hours:0,minutes:0,seconds:0,entry:"new",score:-1},s}return Object(v.a)(n,[{key:"render",value:function(){var t=this;return console.log(this.state),this.onConvertToSeconds=function(){return 60*t.state.hours*60+60*t.state.minutes+t.state.seconds},this.onConvertToTime=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;console.log(t.onConvertToSeconds(),"Time Calc");var n=new Date(null);return n.setSeconds(e||t.onConvertToSeconds()),n.toISOString().substr(11,8)},this.onStartTimer=function(){t.setState({status:"active"})},this.onStartTimer=function(){t.setState({status:"active"})},this.onStopTimer=function(){t.setState({status:"inactive",currentTime:0})},this.onPauseTimmer=function(){t.setState({status:"paused"})},this.onStartTimming=function(){t.setState({status:"timming",currentTime:0}),t.timmerTickTock(!0)},this.onSetHours=function(e){t.setState({hours:e})},this.onSetMinutes=function(e){t.setState({minutes:e})},this.onSetSeconds=function(e){t.setState({seconds:e})},this.timmerTickTock=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];("timming"===t.state.status||e)&&setTimeout((function(){var e=t.state.currentTime+1;if(!(t.onConvertToSeconds()<e)){var n=t.onConvertToTime(e);t.setState({currentTime:e,formatedTime:n}),t.timmerTickTock()}}),1e3)},this.renderState=function(){return"inactive"===t.state.status?Object(x.jsx)(jt,{name:"Start Now",onClick:t.onStartTimer}):"active"===t.state.status?Object(x.jsxs)(pt,{children:[Object(x.jsxs)("div",{className:"StopWatch",children:[Object(x.jsx)(bt,{options:Object(U.a)(Array(24).keys()),onChange:t.onSetHours,name:"Hours"}),Object(x.jsx)(bt,{options:Object(U.a)(Array(60).keys()),onChange:t.onSetMinutes,name:"Minutes"}),Object(x.jsx)(bt,{options:Object(U.a)(Array(60).keys()),onChange:t.onSetSeconds,name:"Seconds"})]}),Object(x.jsx)("div",{className:"Preview",children:t.onConvertToTime()}),Object(x.jsx)(jt,{name:"Start Timming",onClick:t.onStartTimming}),Object(x.jsx)(jt,{name:"Close Timer",onClick:t.onStopTimer})]}):"timming"===t.state.status?Object(x.jsxs)(pt,{children:[Object(x.jsx)("div",{className:"StopWatch",children:t.state.formatedTime}),Object(x.jsx)(jt,{name:"Pause",onClick:t.onPauseTimmer})]}):"paused"===t.state.status?Object(x.jsxs)(pt,{children:[Object(x.jsx)("div",{className:"StopWatch",children:t.state.formatedTime}),Object(x.jsx)(jt,{name:"Start Timming",onClick:t.onStartTimming}),Object(x.jsx)(jt,{name:"Stop Timming",onClick:t.onStopTimer})]}):void 0},Object(x.jsx)("div",{className:this.props.theme?this.props.theme:"Default-Pink-Theme",children:this.renderState()})}}]),n}(m.a.Component),Ot=ft,vt=f.a.div(tt||(tt=Object(p.a)(["\nbackground: #bb0092;\nborder-radius: 30px;\nfont-size: 60px;\ntext-align: center;\ncolor: white;\n"]))),St=function(t){Object(S.a)(n,t);var e=Object(T.a)(n);function n(t){var s;return Object(O.a)(this,n),(s=e.call(this,t)).state={status:"inactive",date:dt.sys.getDate(),currentTime:"",hours:0,minutes:0,seconds:0,entry:"new",score:-1},s}return Object(v.a)(n,[{key:"render",value:function(){var t=this;return console.log(this.state),this.onConvertToSeconds=function(){return 60*t.state.hours*60+60*t.state.minutes+t.state.seconds},this.onConvertToTime=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;console.log(t.onConvertToSeconds(),"Time Calc");var n=new Date(null);return n.setSeconds(e||t.onConvertToSeconds()),n.toISOString().substr(11,8)},this.onStartTimer=function(){t.setState({status:"active"})},this.onStartTimer=function(){t.setState({status:"active"})},this.onStopTimer=function(){t.setState({status:"inactive",currentTime:0})},this.onPauseTimmer=function(){t.setState({status:"paused"})},this.onStartTimming=function(){var e=t.onConvertToSeconds();t.setState({status:"timming",currentTime:e}),t.timmerTickTock(!0)},this.onSetHours=function(e){t.setState({hours:e})},this.onSetMinutes=function(e){t.setState({minutes:e})},this.onSetSeconds=function(e){t.setState({seconds:e})},this.timmerTickTock=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];("timming"===t.state.status||e)&&setTimeout((function(){var e=t.state.currentTime-1;if(!(e<0)){var n=t.onConvertToTime(e);t.setState({currentTime:e,formatedTime:n}),t.timmerTickTock()}}),1e3)},this.renderState=function(){return"inactive"===t.state.status?Object(x.jsx)(jt,{name:"Start Now",onClick:t.onStartTimer}):"active"===t.state.status?Object(x.jsxs)(vt,{children:[Object(x.jsxs)("div",{className:"StopWatch",children:[Object(x.jsx)(bt,{options:Object(U.a)(Array(24).keys()),onChange:t.onSetHours,name:"Hours"}),Object(x.jsx)(bt,{options:Object(U.a)(Array(60).keys()),onChange:t.onSetMinutes,name:"Minutes"}),Object(x.jsx)(bt,{options:Object(U.a)(Array(60).keys()),onChange:t.onSetSeconds,name:"Seconds"})]}),Object(x.jsx)("div",{className:"Preview",children:t.onConvertToTime()}),Object(x.jsx)(jt,{name:"Start Timming",onClick:t.onStartTimming}),Object(x.jsx)(jt,{name:"Close Timer",onClick:t.onStopTimer})]}):"timming"===t.state.status?Object(x.jsxs)(vt,{children:[Object(x.jsx)("div",{className:"StopWatch",children:t.state.formatedTime}),Object(x.jsx)(jt,{name:"Pause",onClick:t.onPauseTimmer})]}):"paused"===t.state.status?Object(x.jsxs)(vt,{children:[Object(x.jsxs)("div",{className:"StopWatch",children:[t.state.formatedTime," s"]}),Object(x.jsx)(jt,{name:"Start Timming",onClick:t.onStartTimming}),Object(x.jsx)(jt,{name:"Stop Timming",onClick:t.onStopTimer})]}):void 0},Object(x.jsx)("div",{className:this.props.theme?this.props.theme:"Default-Pink-Theme",children:this.renderState()})}}]),n}(m.a.Component),Tt=St,xt=function(t){Object(S.a)(n,t);var e=Object(T.a)(n);function n(){return Object(O.a)(this,n),e.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){var t=this;return Object(x.jsx)("input",{onChange:function(e){t.props.onChange(e.target.value)},className:"Default-input",placeholder:this.props.placeholder})}}]),n}(l.Component),gt=xt,kt=n(49),yt=n.n(kt),Ct=function(t){Object(S.a)(n,t);var e=Object(T.a)(n);function n(){return Object(O.a)(this,n),e.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return Object(x.jsx)(yt.a,{volume:"0.4",loop:!1,autoplay:!1,src:"https://assets.mixkit.co/sfx/download/mixkit-completion-of-a-level-2063.wav",playing:this.props.isPlaying})}}]),n}(m.a.Component),wt=Ct,Nt=f.a.div(et||(et=Object(p.a)(["\nbackground: #bb0092;\nborder-radius: 30px;\nfont-size: 60px;\ntext-align: center;\ncolor: white;\n"]))),Dt=function(t){Object(S.a)(n,t);var e=Object(T.a)(n);function n(t){var s;return Object(O.a)(this,n),(s=e.call(this,t)).state={status:"inactive",date:dt.sys.getDate(),formatedTime:"",currentTime:"",hours:0,minutes:0,seconds:0,entry:"new",rounds:1,enableSound:!1},s}return Object(v.a)(n,[{key:"render",value:function(){var t=this;return console.log(this.state),this.onConvertToSeconds=function(){return 60*t.state.hours*60+60*t.state.minutes+t.state.seconds},this.onConvertToTime=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;console.log(t.onConvertToSeconds(),"Time Calc");var n=new Date(null);return n.setSeconds(e||t.onConvertToSeconds()),n.toISOString().substr(11,8)},this.onStartTimer=function(){t.setState({status:"active"})},this.onStartTimer=function(){t.setState({status:"active"})},this.onStopTimer=function(){t.setState({status:"inactive",currentTime:0})},this.onPauseTimmer=function(){t.setState({status:"paused"})},this.onStartTimming=function(){t.setState({status:"timming",currentTime:0}),t.timmerTickTock(!0)},this.onSetHours=function(e){t.setState({hours:e})},this.onSetRounds=function(e){t.setState({rounds:e})},this.onSetMinutes=function(e){t.setState({minutes:e})},this.onSetSeconds=function(e){t.setState({seconds:e})},this.timmerTickTock=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];("timming"===t.state.status||e)&&setTimeout((function(){var e=t.state.currentTime+1,n=t.onConvertToTime(e);if(t.onConvertToSeconds()<=e&&(console.log(t.onConvertToSeconds(),e),t.state.rounds>0)){var s=t.state.rounds-1;e=0,t.setState({rounds:s})}t.setState({currentTime:e,formatedTime:n}),(t.state.rounds>0||t.onConvertToSeconds()>e)&&t.timmerTickTock()}),1e3)},this.onTriggerSound=function(){var e=t.state.currentTime;return!(!t.state.enableSound&&t.state.rounds>0||t.onConvertToSeconds()>e)},this.renderState=function(){return"inactive"===t.state.status?Object(x.jsx)(jt,{name:"Start Now",onClick:t.onStartTimer}):"active"===t.state.status?Object(x.jsxs)(Nt,{children:[Object(x.jsxs)("div",{className:"StopWatch",children:[Object(x.jsx)(bt,{options:Object(U.a)(Array(24).keys()),onChange:t.onSetHours,name:"Hours"}),Object(x.jsx)(bt,{options:Object(U.a)(Array(60).keys()),onChange:t.onSetMinutes,name:"Minutes"}),Object(x.jsx)(bt,{options:Object(U.a)(Array(60).keys()),onChange:t.onSetSeconds,name:"Seconds"})]}),Object(x.jsx)("div",{className:"Preview",children:Object(x.jsx)(gt,{onChange:t.onSetRounds,placeholder:"Number of Rounds"})}),Object(x.jsx)("div",{className:"Preview",children:t.onConvertToTime()}),Object(x.jsx)(jt,{name:"Start Timming",onClick:t.onStartTimming}),Object(x.jsx)(jt,{name:"Close Timer",onClick:t.onStopTimer})]}):"timming"===t.state.status?Object(x.jsxs)(Nt,{children:[Object(x.jsx)("div",{className:"StopWatchLabels",children:t.state.rounds}),Object(x.jsxs)("div",{className:"StopWatch",children:[t.state.formatedTime,Object(x.jsx)(wt,{isPlaying:t.onTriggerSound()})]}),Object(x.jsx)(jt,{name:"Pause",onClick:t.onPauseTimmer})]}):"paused"===t.state.status?Object(x.jsxs)(Nt,{children:[Object(x.jsx)("div",{className:"StopWatch",children:t.state.formatedTime}),Object(x.jsx)(jt,{name:"Start Timming",onClick:t.onStartTimming}),Object(x.jsx)(jt,{name:"Stop Timming",onClick:t.onStopTimer})]}):void 0},Object(x.jsx)("div",{className:this.props.theme?this.props.theme:"Default-Pink-Theme",children:this.renderState()})}}]),n}(m.a.Component),It=Dt,Pt=f.a.div(nt||(nt=Object(p.a)(["\nfont-size: 30px;\n"]))),zt=function(t){Object(S.a)(n,t);var e=Object(T.a)(n);function n(){return Object(O.a)(this,n),e.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(Pt,{children:this.props.name}),Object(x.jsxs)("div",{className:"StopWatch",children:[Object(x.jsx)(bt,{options:Object(U.a)(Array(24).keys()),onChange:this.props.onSetHours,name:"Hours"}),Object(x.jsx)(bt,{options:Object(U.a)(Array(60).keys()),onChange:this.props.onSetMinutes,name:"Minutes"}),Object(x.jsx)(bt,{options:Object(U.a)(Array(60).keys()),onChange:this.props.onSetSeconds,name:"Seconds"})]}),Object(x.jsx)("div",{className:"Preview",children:Object(x.jsx)(gt,{onChange:this.props.onSetRounds,placeholder:"Number of Rounds"})}),Object(x.jsx)("div",{className:"Preview",children:this.props.onConvertToTime()}),Object(x.jsx)(jt,{name:"Start Timming",onClick:this.props.onStartTimming}),Object(x.jsx)(jt,{name:"Close Timer",onClick:this.props.onStopTimer})]})}}]),n}(m.a.Component),Lt=zt,Bt=f.a.div(st||(st=Object(p.a)(["\nfont-size: 30px;\n"]))),At=function(t){Object(S.a)(n,t);var e=Object(T.a)(n);function n(){return Object(O.a)(this,n),e.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(Bt,{children:this.props.name}),Object(x.jsxs)("div",{className:"StopWatch",children:[Object(x.jsx)(bt,{options:Object(U.a)(Array(24).keys()),onChange:this.props.onSetHours,name:"Hours"}),Object(x.jsx)(bt,{options:Object(U.a)(Array(60).keys()),onChange:this.props.onSetMinutes,name:"Minutes"}),Object(x.jsx)(bt,{options:Object(U.a)(Array(60).keys()),onChange:this.props.onSetSeconds,name:"Seconds"})]}),Object(x.jsx)("div",{className:"Preview",children:this.props.onConvertToTime()})]})}}]),n}(m.a.Component),Ht=At,Mt=f.a.div(ot||(ot=Object(p.a)(["\nbackground: #bb0092;\nborder-radius: 30px;\nfont-size: 60px;\ntext-align: center;\ncolor: white;\n"]))),Wt=f.a.div(rt||(rt=Object(p.a)(["\nfont-size: 20px;\nfont-weight: 100;\n"]))),Rt=function(t){Object(S.a)(n,t);var e=Object(T.a)(n);function n(t){var s;return Object(O.a)(this,n),(s=e.call(this,t)).state={workflow:"Workout Timmer",status:"inactive",date:dt.sys.getDate(),formatedTime:"",currentTime:"",hours:0,minutes:0,seconds:0,break:{formatedTime:"",currentTime:"",hours:0,minutes:0,seconds:0},entry:"new",rounds:1,enableSound:!1},s}return Object(v.a)(n,[{key:"render",value:function(){var t=this;return console.log(this.state),this.onConvertToSeconds=function(){return 60*t.state.hours*60+60*t.state.minutes+t.state.seconds},this.onConvertToBreakSeconds=function(){return 60*t.state.break.hours*60+60*t.state.break.minutes+t.state.break.seconds},this.onConvertToTime=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;console.log(t.onConvertToSeconds(),"Time Calc");var n=new Date(null);return n.setSeconds(e||t.onConvertToSeconds()),n.toISOString().substr(11,8)},this.onConvertToBreakTime=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;console.log(t.onConvertToBreakSeconds(),"Time Calc");var n=new Date(null);return n.setSeconds(e||t.onConvertToBreakSeconds()),n.toISOString().substr(11,8)},this.onStartTimer=function(){t.setState({status:"active"})},this.onStartTimer=function(){t.setState({status:"active"})},this.onStopTimer=function(){var e=t.state.break;e.currentTime=0,t.setState({status:"inactive",currentTime:0,break:e})},this.onPauseTimmer=function(){t.setState({status:"paused"})},this.onStartTimming=function(){var e=t.state.break;e.currentTime=0,t.setState({status:"timming",currentTime:0,break:e}),t.timmerTickTock(!0)},this.onSetHours=function(e){t.setState({hours:e})},this.onSetMinutes=function(e){t.setState({minutes:e})},this.onSetSeconds=function(e){t.setState({seconds:e})},this.onSetBreakHours=function(e){var n=t.state.break;n.hours=e,t.setState({break:n})},this.onSetBreakMinutes=function(e){var n=t.state.break;n.minutes=e,t.setState({break:n})},this.onSetBreakSeconds=function(e){var n=t.state.break.hours,s=t.state.break.minutes,o=e;t.setState({break:{hours:n,minutes:s,seconds:o}})},this.onSetRounds=function(e){t.setState({rounds:e})},this.timmerTickTock=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];("timming"===t.state.status||e)&&setTimeout((function(){var e=t.state.currentTime+1,n=t.onConvertToTime(e);if(t.onConvertToSeconds()<=e&&t.state.rounds>0)return t.setState({workflow:"Break Timmer"}),void t.timmerBreakTickTock();t.setState({currentTime:e,formatedTime:n}),(t.state.rounds>0||t.onConvertToSeconds()>e)&&t.timmerTickTock()}),1e3)},this.timmerBreakTickTock=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];("timming"===t.state.status||e)&&setTimeout((function(){var e=t.state.break,n=e.currentTime+1,s=t.onConvertToBreakTime(n);if(e.currentTime=n,e.formatedTime=s,t.setState({break:e}),t.onConvertToBreakSeconds()>n)t.timmerBreakTickTock();else{e.currentTime=0;var o=t.state.rounds-1;n=0,t.setState({workflow:"Workout Timmer",rounds:o,currentTime:n,formatedTime:s,break:e}),t.timmerTickTock()}}),1e3)},this.onTriggerSound=function(){var e=t.state.currentTime;return!(!t.state.enableSound&&t.state.rounds>0||t.onConvertToSeconds()>e)},this.renderState=function(){return"inactive"===t.state.status?Object(x.jsx)(jt,{name:"Start Now",onClick:t.onStartTimer}):"active"===t.state.status?Object(x.jsxs)(Mt,{children:[Object(x.jsx)(Lt,{onSetHours:t.onSetHours,onSetMinutes:t.onSetMinutes,onSetSeconds:t.onSetSeconds,onSetRounds:t.onSetRounds,onConvertToTime:t.onConvertToTime,onStartTimming:t.onStartTimming,onStopTimer:t.onStopTimer}),Object(x.jsx)(Ht,{onSetHours:t.onSetBreakHours,onSetMinutes:t.onSetBreakMinutes,onSetSeconds:t.onSetBreakSeconds,onSetRounds:t.onSetRounds,onConvertToTime:t.onConvertToBreakTime,onStartTimming:t.onStartBreakTimming,onStopTimer:t.onStopTimer})]}):"timming"===t.state.status?Object(x.jsxs)(Mt,{children:[Object(x.jsx)(Wt,{children:t.state.workflow}),Object(x.jsx)("div",{className:"StopWatchLabels",children:t.state.rounds}),Object(x.jsxs)("div",{className:"StopWatch",children:["Workout Timmer"===t.state.workflow?t.state.formatedTime:t.state.break.formatedTime,Object(x.jsx)(wt,{isPlaying:t.onTriggerSound()})]}),Object(x.jsx)(jt,{name:"Pause",onClick:t.onPauseTimmer})]}):"paused"===t.state.status?Object(x.jsxs)(Mt,{children:[Object(x.jsx)("div",{className:"StopWatch",children:t.state.formatedTime}),Object(x.jsx)(jt,{name:"Start Timming",onClick:t.onStartTimming}),Object(x.jsx)(jt,{name:"Stop Timming",onClick:t.onStopTimer})]}):void 0},Object(x.jsx)("div",{className:this.props.theme?this.props.theme:"Default-Pink-Theme",children:this.renderState()})}}]),n}(m.a.Component),Gt=Rt,Jt=f.a.div(it||(it=Object(p.a)(["\nalign-items: center;\nwidth: auto;\nheight: 100%;\noverflow-y: scroll;\ndisplay: inline-block;\n"]))),Ut=f.a.div(at||(at=Object(p.a)(["\nfont-size: 2.0rem;\npadding: 2%;\nbackground: #2b003cc7;\nmargin: 50px 5.5% 50px 5.5%;\nwidth: 35%;\nmin-height: 250px;\nborder-radius: 50px;\ndisplay: inline-table;\nbox-shadow: 10px 30px 40px 5px #00000069;\ncolor: #ffffff;\ntext-align: center;\nfont-weight: bold;\n-webkit-backdrop-filter: blur(10px);\n-webkit-backdrop-filter: blur(10px);\nbackdrop-filter: blur(10px);\n"]))),Et=f.a.div(ct||(ct=Object(p.a)(["\nfont-size: 1.5rem;\n"]))),Ft=f.a.div(ut||(ut=Object(p.a)(["\ndisplay: -webkit-box;\ndisplay: -webkit-flex;\ndisplay: -ms-flexbox;\ndisplay: flex;\nfont-size: 15px;\npadding: 50px;\nfont-weight: 400;\npadding-top: 15px;\n"])));var qt,Vt=function(){var t=[{title:"Time your training with a stop watch.",subTitle:"Let's get you started with a normal timed session. Time your workout and get feedback from the app in realtime.",C:Object(x.jsx)(Ot,{})},{title:"Set a timed goal, and track your progress.",subTitle:"Be proactive! Let's prepare your training session by setting timed goals.",C:Object(x.jsx)(Tt,{recId:1})},{title:"Goal driven session, with rounds.",subTitle:"Awesome, now let's take this a step further. Set timed goals with multiple rounds.",C:Object(x.jsx)(It,{})},{title:"Now, we need to pace your training.",subTitle:"Take a training session with breaks across measurable intervals.",C:Object(x.jsx)(Gt,{})}];return Object(x.jsx)(Jt,{children:t.map((function(t){return Object(x.jsxs)(Ut,{children:[Object(x.jsx)(Et,{children:t.title}),Object(x.jsx)(Ft,{children:t.subTitle}),t.C]})}))})},Xt=(n(73),function(t){Object(S.a)(n,t);var e=Object(T.a)(n);function n(){return Object(O.a)(this,n),e.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return Object(x.jsx)("button",{className:"Default-button ".concat(this.props.current?"current":""),onClick:this.props.onClick,children:this.props.text})}}]),n}(l.Component)),Kt=Xt,Qt=(n(74),function(t){Object(S.a)(n,t);var e=Object(T.a)(n);function n(){return Object(O.a)(this,n),e.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return Object(x.jsx)("div",{className:"Default-panel",children:this.props.children})}}]),n}(l.Component)),Yt=Qt,Zt=(n(75),function(t){Object(S.a)(n,t);var e=Object(T.a)(n);function n(){return Object(O.a)(this,n),e.apply(this,arguments)}return Object(v.a)(n,[{key:"render",value:function(){return Object(x.jsxs)(Yt,{children:[Object(x.jsx)("div",{children:Object(x.jsx)(gt,{placeholder:"Username",onChange:function(t){console.log("LoginForm - changed username to",t)}})}),Object(x.jsx)("div",{children:Object(x.jsx)(gt,{placeholder:"Password",type:"password",onChange:function(t){console.log("LoginForm - changed password to",t)}})}),Object(x.jsx)("div",{style:{padding:6},children:Object(x.jsx)(Kt,{text:"Log In",onClick:function(){console.log("LoginForm - clicked log in")}})})]})}}]),n}(l.Component)),$t=Zt,_t=n(32),te=n(15),ee=n(50),ne=f.a.div(qt||(qt=Object(p.a)(["\nbackground: #0172bdc2;\nheight: 100vh;\ndisplay: block;\noverflow: hidden;\n"])));var se=function(){var t=Object(l.useState)(null),e=Object(b.a)(t,1)[0],n=function(t){return e&&dt.sys.isLoggedIn()||(e=dt.sys.getUserData()),t};return Object(x.jsxs)(ne,{children:[Object(x.jsx)(ee.a,{children:Object(x.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"})}),Object(x.jsxs)(_t.a,{children:[Object(x.jsx)("nav",{children:Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)(_t.b,{to:"/",children:"Timers"})}),Object(x.jsx)("li",{children:Object(x.jsx)(_t.b,{to:"/docs",children:"Documentation"})}),Object(x.jsx)("li",{children:Object(x.jsx)(_t.b,{to:"/login",children:dt.sys.isLoggedIn()?"Sign out":"Sign in"})})]})}),Object(x.jsxs)(te.c,{children:[Object(x.jsx)(te.a,{exact:!0,path:"/login",children:Object(x.jsx)("div",{children:Object(x.jsx)($t,{})})}),Object(x.jsx)(te.a,{exact:!0,path:"/docs",children:n(Object(x.jsx)(J,{}))}),Object(x.jsx)(te.a,{exact:!0,path:"/",children:n(Object(x.jsx)(Vt,{}))})]})]})]})};h.a.render(Object(x.jsx)(m.a.StrictMode,{children:Object(x.jsx)(se,{})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.25bbb783.chunk.js.map