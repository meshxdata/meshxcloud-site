(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[910],{2598:function(e,t,n){"use strict";var r,a,o=n(4410);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}t.Z=function(e){return o.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),r||(r=o.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),a||(a=o.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20z"})))}},3303:function(e,t,n){"use strict";var r,a,o=n(4410);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}t.Z=function(e){return o.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),r||(r=o.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),a||(a=o.createElement("path",{d:"m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"})))}},9387:function(e,t,n){Promise.resolve().then(n.bind(n,2351)),Promise.resolve().then(n.bind(n,1638))},8630:function(e,t,n){"use strict";var r,a,o,s,i,l,c,u,d,h;n.d(t,{$u:function(){return r},Bg:function(){return o},Bn:function(){return s},qb:function(){return a}}),n(2265),(l=r||(r={})).XS="xs",l.S="s",l.M="m",l.L="l",l.XL="xl",(c=a||(a={})).Error="error",c.Warning="warning",c.Success="success",c.None="none",(u=o||(o={})).Primary="primary",u.Accent="accent",u.Success="success",u.Danger="danger",u.Secondary="secondary",u.Outline="outline",u.Ghost="ghost",(d=s||(s={})).Normal="normal",d.None="none",(h=i||(i={})).TOP="top",h.TOP_LEFT="top-left",h.TOP_RIGHT="top-right",h.BOTTOM="bottom",h.BOTTOM_LEFT="bottom-left",h.BOTTOM_RIGHT="bottom-right",h.RIGHT="right",h.LEFT="left",h.AUTO="auto"},7830:function(e,t){"use strict";var n=Symbol.for("react.element"),r=(Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.memo"),Symbol.for("react.lazy"),{isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}}),a=Object.assign,o={};function s(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||r}function i(){}function l(e,t,n){this.props=e,this.context=t,this.refs=o,this.updater=n||r}s.prototype.isReactComponent={},s.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},s.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},i.prototype=s.prototype;var c=l.prototype=new i;c.constructor=l,a(c,s.prototype),c.isPureReactComponent=!0;var u=Object.prototype.hasOwnProperty,d={key:!0,ref:!0,__self:!0,__source:!0};t.createElement=function(e,t,r){var a,o={},s=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)u.call(t,a)&&!d.hasOwnProperty(a)&&(o[a]=t[a]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var c=Array(l),h=0;h<l;h++)c[h]=arguments[h+2];o.children=c}if(e&&e.defaultProps)for(a in l=e.defaultProps)void 0===o[a]&&(o[a]=l[a]);return{$$typeof:n,type:e,key:s,ref:i,props:o,_owner:null}}},4410:function(e,t,n){"use strict";e.exports=n(7830)},738:function(e,t,n){"use strict";n.d(t,{cn:function(){return o}});var r=n(4839),a=n(6164);function o(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,a.m6)((0,r.W)(t))}},1590:function(e,t,n){"use strict";n.d(t,{z:function(){return l}});var r=n(7437),a=n(2265),o=n(8630),s=n(738);let i=e=>{let{sz:t=o.$u.M,className:n}=e;return(0,r.jsx)("div",{className:(0,s.cn)("loader",[!!t,"sz-".concat(t)],"w-full h-full flex justify-center items-center",n),children:"loading..."})},l=e=>{let{sz:t=o.$u.M,bg:n=o.Bg.Primary,out:l=o.Bn.Normal,className:c,children:u,type:d,icon:h,iconRight:f,round:m=!1,onClick:p,disabled:v=!1,loading:x=!1,wide:g=!1,color:b,...w}=e,y=!u&&!!h,j=(0,a.useMemo)(()=>{switch(n){case o.Bg.Primary:case o.Bg.Accent:return"bg-accent text-white fill-white";case o.Bg.Secondary:return"text-accent fill-accent hover:bg-accent hover:text-white hover:fill-white";case o.Bg.Ghost:return"text-ink-2 fill-accent  hover:bg-accent hover:text-white hover:fill-white"}return""},[n]),E=(0,a.useMemo)(()=>{switch(t){case o.$u.XS:return"h-4";case o.$u.S:return"h-8";case o.$u.L:return"h-11 text-xl";default:return"h-10 text-base"}},[t]),N=(0,a.useMemo)(()=>{if(y)return"px-2";switch(t){case o.$u.XS:case o.$u.S:return"px-4";case o.$u.L:return"px-8";default:return h?"px-6":"px-8"}},[t,n,y]),S=(0,s.cn)("button-ico","text-xs [&_svg]:size-6",x&&"opacity-0"),O=(0,s.cn)("button-children flex-auto",h&&"text-left",x&&"opacity-0"),A=(0,s.cn)("button group/button font-brown","sz-".concat(t),"out-".concat(l),m?"rounded-full":"rounded-md",(x||v)&&"opacity-50",g&&"w-full",!!h&&!u&&"icon-only",!!h&&!!u&&"icon-left",!!f&&!!u&&"icon-right","box-border leading-5 flex items-center gap-2",x&&"relative",j,E,N,c);return(0,r.jsxs)("button",{type:null!=d?d:"button",onClick:e=>{v||x||!p||(e.stopPropagation(),p(e))},disabled:v,...w,className:A,children:[!!h&&(0,r.jsx)("div",{className:S,children:h}),x&&(0,r.jsx)("div",{className:"absolute",children:(0,r.jsx)(i,{sz:t})}),!!u&&(0,r.jsx)("div",{className:O,children:u}),f&&(0,r.jsx)("div",{className:S,children:f})]})}},1821:function(e,t,n){"use strict";n.d(t,{l:function(){return l}});var r=n(7437),a=n(2265),o=n(738),s=n(2598),i=n(3303);let l=e=>{let{className:t,children:n}=e,l=(0,a.useRef)(null),c=(0,a.useRef)(!1),u=(0,a.useRef)(0),d=(0,a.useRef)(0),[h,f]=(0,a.useState)(!1),[m,p]=(0,a.useState)(!0);(0,a.useEffect)(()=>{if(null==l?void 0:l.current){var e,t;let n=l.current.clientWidth,r=null!==(t=null===(e=l.current.parentElement)||void 0===e?void 0:e.clientWidth)&&void 0!==t?t:0;if(n<=r){l.current.style.left="".concat((r-n)/2,"px"),p(!0),f(!0);return}let a=l.current;return a.addEventListener("mousedown",x),a.addEventListener("mouseleave",b),a.addEventListener("mouseup",w),a.addEventListener("mousemove",j),a.addEventListener("touchstart",g,{passive:!0}),a.addEventListener("touchmove",E,{passive:!0}),a.addEventListener("touchend",y,{passive:!0}),()=>{a.removeEventListener("mousedown",x),a.removeEventListener("mouseleave",b),a.removeEventListener("mouseup",w),a.removeEventListener("mousemove",j),a.removeEventListener("touchstart",g),a.removeEventListener("touchmove",E),a.removeEventListener("touchend",y)}}},[]);let v=()=>{l.current&&(d.current=l.current.style.left?Number(l.current.style.left.replace("px","")):0)},x=e=>{l.current&&(l.current.style.transition="",c.current=!0,u.current=e.pageX,v())},g=e=>{l.current&&(l.current.style.transition="",c.current=!0,u.current=e.touches[0].pageX,v())};function b(){c.current=!1}function w(){c.current=!1}let y=e=>{c.current=!1};function j(e){c.current&&(e.preventDefault(),N(e.pageX-u.current))}function E(e){c.current&&N(e.touches[0].pageX-u.current)}let N=e=>{if(l.current){var t,n;let r=(null!==(n=null===(t=l.current.parentElement)||void 0===t?void 0:t.clientWidth)&&void 0!==n?n:0)-l.current.clientWidth,a=d.current+e;a>=0?(p(!0),a=0):p(!1),a<=r?(f(!0),a=r):f(!1),l.current.style.left="".concat(a,"px")}},S=e=>{l.current&&(l.current.style.transition="left 0.5s",v(),N(e))},O=(0,o.cn)("overflow-hidden select-none",t);return(0,r.jsx)("div",{className:O,children:(0,r.jsx)("div",{className:"cont overflow-visible h-full",children:(0,r.jsxs)("div",{className:"relative h-full",children:[(0,r.jsx)("div",{className:"grid grid-rows-1 grid-flow-col gap-4 absolute h-full",ref:l,style:{left:0},children:n}),(0,r.jsx)("div",{className:(0,o.cn)("absolute left-0 p-2.5 bg-white rounded-full cursor-pointer shadow-lg absolute-center-y hidden ",!m&&"md:block"),onClick:()=>S(580),children:(0,r.jsx)(s.Z,{className:"size-6"})}),(0,r.jsx)("div",{className:(0,o.cn)("absolute right-0 p-2.5 bg-white rounded-full cursor-pointer shadow-lg absolute-center-y hidden ",!h&&"md:block"),onClick:()=>S(-580),children:(0,r.jsx)(i.Z,{className:"size-6"})})]})})})}},2351:function(e,t,n){"use strict";n.d(t,{Block1:function(){return h}});var r,a,o,s,i=n(7437);n(2265);var l=n(4410);function c(){return(c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var u=function(e){return l.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",width:263,height:44,fill:"none"},e),r||(r=l.createElement("path",{fill:"#1C1D1E",fillRule:"evenodd",d:"M14.667 2.667a1 1 0 0 1 1 1v2.666h12.666V3.667a1 1 0 1 1 2 0v2.666h4.5A4.667 4.667 0 0 1 39.5 11v25.667a4.667 4.667 0 0 1-4.667 4.666H9.167A4.667 4.667 0 0 1 4.5 36.667V11a4.667 4.667 0 0 1 4.667-4.667h4.5V3.667a1 1 0 0 1 1-1m-5.5 5.666A2.667 2.667 0 0 0 6.5 11v25.667a2.667 2.667 0 0 0 2.667 2.666h25.666a2.667 2.667 0 0 0 2.667-2.666V11a2.667 2.667 0 0 0-2.667-2.667zM22 15.667A2.667 2.667 0 1 0 22 21a2.667 2.667 0 0 0 0-5.333m-4.667 2.666a4.667 4.667 0 1 1 9.334 0 4.667 4.667 0 0 1-9.334 0M13.2 29.7a4.67 4.67 0 0 1 3.3-1.367h11A4.667 4.667 0 0 1 32.167 33a1 1 0 0 1-2 0 2.667 2.667 0 0 0-2.667-2.667h-11A2.667 2.667 0 0 0 13.833 33a1 1 0 0 1-2 0c0-1.238.492-2.425 1.367-3.3",clipRule:"evenodd"})),a||(a=l.createElement("path",{fill:"#B73312",fillRule:"evenodd",d:"M87.667 2.667a1 1 0 0 1 1 1v2.666h12.666V3.667a1 1 0 0 1 2 0v2.666h4.5A4.667 4.667 0 0 1 112.5 11v25.667a4.667 4.667 0 0 1-4.667 4.666H82.167a4.667 4.667 0 0 1-4.667-4.666V11a4.667 4.667 0 0 1 4.667-4.667h4.5V3.667a1 1 0 0 1 1-1m-5.5 5.666A2.667 2.667 0 0 0 79.5 11v25.667a2.667 2.667 0 0 0 2.667 2.666h25.666a2.667 2.667 0 0 0 2.667-2.666V11a2.667 2.667 0 0 0-2.667-2.667zM95 15.667A2.667 2.667 0 1 0 95 21a2.667 2.667 0 0 0 0-5.333m-4.667 2.666a4.667 4.667 0 1 1 9.334 0 4.667 4.667 0 0 1-9.334 0M86.2 29.7a4.67 4.67 0 0 1 3.3-1.367h11A4.666 4.666 0 0 1 105.167 33a1 1 0 0 1-2 0 2.667 2.667 0 0 0-2.667-2.667h-11A2.667 2.667 0 0 0 86.833 33a1 1 0 0 1-2 0c0-1.238.492-2.425 1.367-3.3",clipRule:"evenodd"})),o||(o=l.createElement("path",{fill:"#FF301A",fillRule:"evenodd",d:"M160.667 2.667a1 1 0 0 1 1 1v2.666h12.666V3.667a1 1 0 0 1 2 0v2.666h4.5A4.667 4.667 0 0 1 185.5 11v25.667a4.667 4.667 0 0 1-4.667 4.666h-25.666a4.667 4.667 0 0 1-4.667-4.666V11a4.667 4.667 0 0 1 4.667-4.667h4.5V3.667a1 1 0 0 1 1-1m-5.5 5.666A2.667 2.667 0 0 0 152.5 11v25.667a2.667 2.667 0 0 0 2.667 2.666h25.666a2.667 2.667 0 0 0 2.667-2.666V11a2.667 2.667 0 0 0-2.667-2.667zM168 15.667A2.667 2.667 0 1 0 168 21a2.667 2.667 0 0 0 0-5.333m-4.667 2.666a4.667 4.667 0 1 1 9.334.001 4.667 4.667 0 0 1-9.334 0M159.2 29.7a4.67 4.67 0 0 1 3.3-1.367h11A4.666 4.666 0 0 1 178.167 33a1 1 0 0 1-2 0 2.667 2.667 0 0 0-2.667-2.667h-11A2.67 2.67 0 0 0 159.833 33a1 1 0 1 1-2 0c0-1.238.492-2.425 1.367-3.3",clipRule:"evenodd"})),s||(s=l.createElement("path",{fill:"#000",fillOpacity:.6,fillRule:"evenodd",d:"M233.667 2.667a1 1 0 0 1 1 1v2.666h12.666V3.667a1 1 0 0 1 2 0v2.666h4.5A4.667 4.667 0 0 1 258.5 11v25.667a4.667 4.667 0 0 1-4.667 4.666h-25.666a4.667 4.667 0 0 1-4.667-4.666V11a4.667 4.667 0 0 1 4.667-4.667h4.5V3.667a1 1 0 0 1 1-1m-5.5 5.666A2.667 2.667 0 0 0 225.5 11v25.667a2.667 2.667 0 0 0 2.667 2.666h25.666a2.667 2.667 0 0 0 2.667-2.666V11a2.667 2.667 0 0 0-2.667-2.667zM241 15.667A2.667 2.667 0 1 0 241 21a2.667 2.667 0 0 0 0-5.333m-4.667 2.666a4.667 4.667 0 1 1 9.334.001 4.667 4.667 0 0 1-9.334 0M232.2 29.7a4.67 4.67 0 0 1 3.3-1.367h11A4.666 4.666 0 0 1 251.167 33a1 1 0 0 1-2 0 2.667 2.667 0 0 0-2.667-2.667h-11A2.67 2.67 0 0 0 232.833 33a1 1 0 1 1-2 0c0-1.238.492-2.425 1.367-3.3",clipRule:"evenodd"})))},d=n(1821);let h=()=>(0,i.jsxs)("div",{className:"pt-[130px] md:pt-[237px]",children:[(0,i.jsxs)("div",{className:"flex flex-col items-center text-center max-w-[973px] mx-auto px-5",children:[(0,i.jsx)(u,{className:""}),(0,i.jsx)("h1",{className:"mt-[30px]",children:"We are a small team on a big mission: to redefine enterprise data management for the modern age. Together, we’re building innovative solutions that empower organizations to unlock the full potential of their data."}),(0,i.jsx)("p",{className:"mt-[30px] text-lg",children:"Our mission is to lead the evolution of data architecture by providing innovative data mesh solutions that break down data silos and promote a decentralized approach to data management. We aim to help organizations harness the full potential of their data, driving better decision-making and fostering a culture of data-driven innovation."})]}),(0,i.jsxs)("div",{className:"mt-16 md:mt-32",children:[(0,i.jsx)("h3",{className:"text-center",children:"We have:"}),(0,i.jsxs)(d.l,{className:"mt-10 h-[432px]",children:[(0,i.jsx)(f,{title:"Global Industry Experience",text:"Team members with diverse backgrounds in leading companies (Microsoft, Skype, Vodafone, Novo\xa0Banco, Raytheon) "}),(0,i.jsx)(f,{title:"Deep Expertise in Data and\xa0AI",text:"Seasoned data engineers, architects, and AI specialists with extensive experience in building and scaling data-intensive platforms"}),(0,i.jsx)(f,{title:"Enterprise-Grade Software Development",text:"Experienced product managers and engineers with backgrounds in developing and delivering complex enterprise software solutions"}),(0,i.jsx)(f,{title:"Cloud and Platform Architecture Masters",text:"Cloud and platform architects with deep knowledge of cloud infrastructure and distributed systems"})]})]})]}),f=e=>{let{title:t,text:n}=e;return(0,i.jsxs)("div",{className:"p-10 bg-white border-b border-accent h-[432px] min-w-[358px]",children:[(0,i.jsx)("h4",{className:"text-lg text-ink",children:t}),(0,i.jsx)("p",{className:"mt-2.5",children:n})]})}},1638:function(e,t,n){"use strict";n.d(t,{Block2:function(){return d}});var r,a,o=n(7437);n(2265);var s=n(4410);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}var l=function(e){return s.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"#e8eaed"},e),r||(r=s.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})),a||(a=s.createElement("path",{d:"M14 6V4h-4v2zM4 8v11h16V8zm16-2c1.11 0 2 .89 2 2v11c0 1.11-.89 2-2 2H4c-1.11 0-2-.89-2-2l.01-11c0-1.11.88-2 1.99-2h4V4c0-1.11.89-2 2-2h4c1.11 0 2 .89 2 2v2z"})))},c=n(1590),u=n(7138);let d=()=>(0,o.jsx)("div",{className:"py-[90px] md:py-[180px]",children:(0,o.jsxs)("div",{className:"flex flex-col items-center text-center max-w-[926px] mx-auto px-5",children:[(0,o.jsx)("h3",{className:"",children:"Our team is composed of industry experts, software engineers, and data scientists who are passionate about data and technology. We bring together a diverse range of skills and experiences to create innovative solutions that drive success for our clients."}),(0,o.jsx)("img",{src:"/img/logos.png",className:"mt-11",width:331}),(0,o.jsx)("div",{className:"mt-[90px] md:mt-[180px] w-[25px] h-[3px] bg-accent"}),(0,o.jsx)("h1",{className:"mt-5",children:"Join us!"}),(0,o.jsx)("p",{className:"mt-6",children:"We are always hiring the great and the talented, hungry people full of energy and ready to take over the world! Haha! Did I say it with the straight face? Ahaha! Come here, low energy nerds and basement dwellers! We know who you are and we like you just as you are."}),(0,o.jsx)(u.default,{href:"/careers",children:(0,o.jsx)(c.z,{icon:(0,o.jsx)(l,{}),className:"mt-7",children:"Careers"})})]})})}},function(e){e.O(0,[868,138,971,23,744],function(){return e(e.s=9387)}),_N_E=e.O()}]);