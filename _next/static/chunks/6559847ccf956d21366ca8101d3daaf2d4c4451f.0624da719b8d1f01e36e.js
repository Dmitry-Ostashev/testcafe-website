(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"1OyB":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},"4b23":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));let r=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce(((e,t)=>e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"),"")},H82b:function(e,t){},JUPW:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r="https://services.devexpress.com/Survey/api/Survey/";function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",r+"GetCompletionStatus?surveyId="+e+"&clientId="+t),o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.onload=o.onerror=function(){var e=JSON.parse(o.response);n(200===o.status,e,o.response)},o.send()}function i(e,t,n,o){var i=new XMLHttpRequest;i.open("POST",r+"SaveResult"),i.setRequestHeader("Content-Type","application/json; charset=utf-8");var a={SurveyId:e,ClientId:t,SurveyResult:JSON.stringify(n),IsPartialCompleted:o},c=JSON.stringify(a);i.send(c)}},KQm4:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,"a",(function(){return o}))},exZ4:function(e,t,n){"use strict";function r(e,t,n){for(var r=e.target;!r.classList.contains(t);)r=r.parentNode;r&&(r.classList.toggle("s-visible"),n())}function o(e,t){for(var n=document.querySelectorAll(e.captionSelector),o=0;o<n.length;o++)n[o].addEventListener("click",(function(n){return r(n,e.classname,t)}))}n.d(t,"a",(function(){return o}))},g4pe:function(e,t,n){e.exports=n("8Kt/")},sieU:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),i=n("g4pe"),a=n.n(i),c=n("+Oug"),l=n("KQm4"),u=n("ehK1"),s=o.a.createElement,f=["Framework","Resources"];var d=function(e){var t=e.breadcrumbsNav,n=Object(l.a)(t).filter((function(e){return-1===f.indexOf(e.name)&&e.id&&e.url}));if(n.length<=1)return null;var o=n.map((function(e,t,n){return function(e,t){return s(r.Fragment,{key:e.name},!t&&s(u.a,{force:!0,tocItem:e},s("a",{dangerouslySetInnerHTML:{__html:e.name}})),t&&s("span",{"aria-current":"location",className:"text-black"},e.name),!t&&s("span",{"aria-hidden":"true",className:"text-black px-1"},"\u2192"))}(e,t===n.length-1)}));return s("nav",{"aria-label":"breadcrumbs",className:"breadcrumbs"},o)},p=n("MTo2");function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}o.a.createElement;var m=n("p46w"),b=n.n(m),h=o.a.createElement,y=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1],o="".concat("scroll-button"," ").concat(t?"":"scroll-invisible"),i=function(){var e=document.body.scrollTop>20||document.documentElement.scrollTop>20;n(e)},a=function(){i()};return Object(r.useEffect)((function(){return window.addEventListener("scroll",a),i(),function(){return window.removeEventListener("scroll",a)}}),[a]),h("button",{id:"back-to-top",className:o,onClick:function(){window.scrollTo(0,0)}},h("svg",{xmlns:"http://www.w3.org/2000/svg",width:"44",height:"44",fill:"none"},h("path",{fill:"#fff",fillRule:"evenodd",d:"m12.1 18.92 8.91-8.91a1.4 1.4 0 0 1 1.98 0l8.91 8.91a1.4 1.4 0 0 1-1.98 1.98l-6.42-6.52V33h-3V14.38l-6.42 6.52a1.4 1.4 0 0 1-1.98-1.98Z",clipRule:"evenodd"})))},w=(o.a.createElement,n("4b23")),g=(n("JUPW"),o.a.createElement);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S,N={topic:"",isPageHelpful:!1,howToImprove:""};!function(e){e.None="none",e.AskForFeedback="ask-for-feedback",e.ShowFeedbackInput="show-feedback-input",e.FeedbackSent="feedback-sent",e.SuggestionSent="suggestion-sent"}(S||(S={}));var j=function(){var e=Object(r.useState)(S.AskForFeedback),t=e[0],n=e[1],o=Object(r.useState)(N),i=o[0],a=o[1],c=(Object(r.useRef)(null),Object(w.a)(),function(e){"Escape"===(null===e||void 0===e?void 0:e.key)&&n(S.None)});if(Object(r.useEffect)((function(){var e,t,r=null===(e=window)||void 0===e||null===(t=e.location)||void 0===t?void 0:t.pathname;if(i.topic!==r){a(O(O({},N),{},{topic:r}));var o=window.innerWidth>768?S.AskForFeedback:S.None;n(o)}})),Object(r.useEffect)((function(){return document.addEventListener("keyup",c),function(){return document.removeEventListener("keyup",c)}}),[c]),!b.a.get("cookie_message_accepted"))return null;"flex ".concat(t===S.ShowFeedbackInput?"flex-row-reverse":"flex-row"),"feedback-element-content ".concat(t===S.AskForFeedback||t===S.FeedbackSent?"w-56":"w-72");return g("div",{className:"feedback-element"},!1,g(y,null))},E=n("ORh2"),I=n("4kkf"),C=o.a.createElement,x=function(e){var t=e.headers.map((function(e){return C("li",{key:e.id},C("a",{href:"#".concat(e.id),className:"scrollspy-link"},e.title))}));return C("nav",{className:"scrollspy"},C("span",{className:"scrollspy-title"},"On this page"),C("ul",null,t))},L=n("1OyB"),A=n("vuIU");function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function P(e,t){return(P=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e){return(_="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function R(e,t){return!t||"object"!==_(t)&&"function"!==typeof t?M(e):t}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n("H82b");var T=o.a.createElement;function F(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return H(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function V(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=D(e);if(t){var o=D(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return R(this,n)}}var U=T("svg",{width:"36",height:"36",xmlns:"http://www.w3.org/2000/svg"},T("path",{d:"M11 12h14v2H11zM11 17h14v2H11zM11 22h14v2H11z"})),z=T("svg",{width:"36",height:"36",xmlns:"http://www.w3.org/2000/svg"},T("path",{d:"M12 22l9.9-9.9 1.414 1.415-9.9 9.9z"}),T("path",{d:"M13.414 12l9.9 9.9-1.415 1.414-9.9-9.9z"}));function J(e){return!e||0===e.length}var q=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&P(e,t)}(n,e);var t=V(n);function n(e){var r;return Object(L.a)(this,n),v(M(r=t.call(this,e)),"menuItemClicked",void 0),v(M(r),"renderChildren",(function(e,t){if(J(e))return null;var n=e.map((function(e){return t(e)}));return T("ul",null,n)})),v(M(r),"lvl1",(function(e){var t,o=!J(e.items),i="What's New"===(null===(t=r.props.root)||void 0===t?void 0:t.name);if((!o||i)&&e.id){var a="l-2 root-lvl";return n.isActive(r.props,e)&&(a+=" active"),T("li",{key:e.name,className:a},T("div",null,T(u.a,{tocItem:e},T("a",{onClick:function(){return r.click3lvl()}},e.name))))}return o&&!i?T("li",{key:e.name,className:"l-1"},T("span",null,e.name),r.renderChildren(e.items,r.lvl2)):null})),v(M(r),"lvl2",(function(e){var t=null,o="l-2";return n.isActive(r.props,e)&&(o+=" active"),e.opened&&r.props.showLeafs&&(o+=" opened"),!J(e.items)&&r.props.showLeafs&&(t=function(e){return T("svg",{onClick:e.onClick,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",viewBox:"0 0 20 20"},T("path",{d:"M4.7 10l1.13-1.13 5.3 5.3L10 15.3z"}),T("path",{d:"M15.3 10l-1.13-1.13-5.3 5.3L10 15.3z"}))}({onClick:function(){return r.toggleMenuItem(e)}})),T("li",{key:e.name,className:o},T("div",{className:"flex"},T(u.a,{tocItem:e,force:!0},T("a",{onClick:function(){return r.click2lvl(e)}},e.name)),t),e.opened&&r.props.showLeafs&&r.renderChildren(e.items,r.lvl3))})),v(M(r),"lvl3",(function(e){var t="l-3";return n.isActive(r.props,e)&&(t+=" active"),T("li",{key:e.name,className:t},T(u.a,{tocItem:e},T("a",{onClick:function(){return r.click3lvl()}},e.name)))})),r.menuItemClicked=!1,r.state=n.createState(e,!1),r}return Object(A.a)(n,[{key:"shouldComponentUpdate",value:function(){return!this.menuItemClicked||(this.menuItemClicked=!1,!1)}},{key:"render",value:function(){var e=this,t="sidebar ",n=U;return t+=this.props.isDocumentation?"sidebar-documentation ":" ",this.state.mobile&&(t+="mobile-opened",n=z),T("nav",{className:t},T("div",{className:"title"},T("button",{"aria-label":"Navigation bar toggle",onClick:function(){return e.toggleMobileView()}},n),T("span",null,this.props.activeItems.length?this.props.activeItems[0].name:"")),this.renderChildren(this.state.items,this.lvl1))}},{key:"toggleMenuItem",value:function(e){e.opened=!e.opened,this.setState(this.state)}},{key:"toggleMobileView",value:function(){var e=!this.state.mobile;this.setMobileView(e)}},{key:"setMobileView",value:function(e){this.setState(Object.assign({},this.state,{mobile:e}))}},{key:"hideMobileView",value:function(){this.setMobileView(!1)}},{key:"click2lvl",value:function(e){e.opened=!0,e.url&&(this.menuItemClicked=!0),this.hideMobileView()}},{key:"click3lvl",value:function(){this.menuItemClicked=!0,this.hideMobileView()}}],[{key:"createState",value:function(e,t){var r,o=(r=e.items,JSON.parse(JSON.stringify(r)));return n.walk(o,(function(t){t.opened=n.isActive(e,t)})),{items:o,mobile:t,root:e.root}}},{key:"walk",value:function(e,t){var r,o=F(e);try{for(o.s();!(r=o.n()).done;){var i=r.value;t(i),i.items&&n.walk(i.items,t)}}catch(a){o.e(a)}finally{o.f()}}},{key:"getDerivedStateFromProps",value:function(e,t){return(t.root&&t.root.id)!==(e.root&&e.root.id)?n.createState(e,!!t.mobile):null}},{key:"isActive",value:function(e,t){return!!e.activeItems.find((function(e){return e.id===t.id}))}}]),n}(o.a.Component),B=n("DnWk"),W=n("4Qw9"),K=n("o0o1"),Q=n.n(K);function Z(e,t,n,r,o,i,a){try{var c=e[i](a),l=c.value}catch(u){return void n(u)}c.done?t(l):Promise.resolve(l).then(r,o)}function G(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){Z(i,r,o,a,c,"next",e)}function c(e){Z(i,r,o,a,c,"throw",e)}a(void 0)}))}}var X=[],$=[];function Y(){return document.body.scrollTop+document.documentElement.scrollTop}function ee(){return te.apply(this,arguments)}function te(){return(te=G(Q.a.mark((function e(){var t;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Object(l.a)(document.querySelectorAll("img")).filter((function(e){return!e.complete})).map((function(e){return new Promise((function(t){e.addEventListener("load",t),e.addEventListener("error",t)}))})),e.next=3,Promise.all(t);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ne(){return re.apply(this,arguments)}function re(){return(re=G(Q.a.mark((function e(){var t;return Q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(X&&0!==X.length){e.next=2;break}return e.abrupt("return");case 2:e.next=4;break;case 4:return e.next=6,ee();case 6:t=X.map((function(e){return document.getElementById(e.id)})).filter((function(e){return!!e})),($=t.map((function(e){return{y:e.getBoundingClientRect().top+Y(),id:e.id,link:document.querySelector('.scrollspy-link[href="#'+e.id+'"]').parentNode}}))).length&&($[0].y=0),$.reverse(),oe();case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function oe(){var e=$.find((function(e){var t=e.y;return Y()>=Math.floor(t)-1}));e&&($.forEach((function(e){var t=e.link;t.className=t.className.replace(" scrollspy-active","")})),e.link.className+=" scrollspy-active")}var ie=n("exZ4"),ae=n("c+yx"),ce=o.a.createElement,le=function(e){var t=Object(r.useState)(!Object(ae.c)()),n=t[0],o=t[1],i=e.content.headers.length>0,a=e.sidebarNav.items.length>0,l=["left",a?"with-sidebar":""];return Object(r.useEffect)((function(){var t=function(){!function(e){window.removeEventListener("resize",ne),window.removeEventListener("load",ne),window.removeEventListener("scroll",oe),e&&0!==e.length&&(X=e,ne(),window.addEventListener("resize",ne),window.addEventListener("load",ne),window.addEventListener("scroll",oe))}(e.content.headers)};Object(ie.a)({classname:"spoiler",captionSelector:".spoiler .spoiler-caption"},t),Object(B.a)(),Object(c.d)(e.publishDates),Object(c.b)(e.publishDates),t(),Object(W.a)()})),ce("div",null,ce(I.a,{isDocumentation:!1,activeItems:e.headerNav.activeItems,items:e.headerNav.items}),ce("div",{className:"middle"},ce("main",null,ce("div",{className:l.join(" ")},a&&ce(q,{isDocumentation:e.isDocumentation,showLeafs:e.sidebarNav.showLeafs,root:e.sidebarNav.root,items:e.sidebarNav.items,activeItems:e.sidebarNav.activeItems})),ce("div",{className:"content sm:px-12"},ce(d,{breadcrumbsNav:e.breadcrumbsNav}),e.children),ce("div",{className:i?"right":"right right-no-scrollspy"},i&&ce(x,{headers:e.content.headers})))),ce(E.a,null),ce(p.a,{onAcceptCookie:function(){return o(!0)}}),n&&ce(j,null))},ue=o.a.createElement;t.a=function(e){var t=e.content,n=e.headerNav,r=e.sidebarNav,i=e.breadcrumbsNav,c=e.isDocumentation,l=e.publishDates,u=ue(o.a.Fragment,null);return u=e.children?ue("div",null,e.children):ue("div",{dangerouslySetInnerHTML:{__html:t.html}}),ue(le,{isDocumentation:c,headerNav:n,sidebarNav:r,breadcrumbsNav:i,content:t,publishDates:l},function(e,t){var n=e.map((function(e){return e.name})).reverse().join(" | "),r=e[e.length-1].url,o=null===t||void 0===t?void 0:t.schema,i=(null===t||void 0===t?void 0:t.description)||"";return ue(a.a,null,ue("meta",{property:"og:url",content:r}),ue("meta",{property:"og:title",content:n}),ue("meta",{name:"description",content:i}),ue("link",{rel:"canonical",href:ae.a+r}),ue("title",null,n),o&&ue("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:o}}))}(i,t),u)}},vuIU:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))}}]);