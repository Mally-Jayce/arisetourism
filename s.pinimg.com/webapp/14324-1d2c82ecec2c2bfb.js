"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[14324,20673],{41162:function(e,n,t){t.d(n,{E:function(){return o},S:function(){return i}});var r=(0,t(583592).Z)("pwtSurfaceContext"),i=r.Provider,o=r.useMaybeHook},938790:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(574155),i=function(){var e;return!(null===(e=window.performance)||void 0===e||!e.timing)},o=t(622200);function a(e){return!("desktop"===e&&!i())&&(!!o.Z&&(0,r.v)())}},93501:function(e,n,t){t.d(n,{KJ:function(){return l},Rp:function(){return s}});var r={id:14,name:"own_profile"},i={id:15,name:"other_profile"},o={initial_app_load:{unauth:{board:{id:114,name:"board_page_interactive"},pin_closeup:{id:113,name:"pin_page_interactive"},other_profile:{id:115,name:"user_page_interactive"},topic:{id:119,name:"topic_page_interactive"},sterling_signup:{id:201,name:"sterling_signup_main_pageload"},sterling_login:{id:202,name:"sterling_login_main_pageload"}},auth:{bizhub:{id:607,name:"bizhub_pinteractive"},homefeed:{id:19,name:"home_feed_pinteractive"},sterling_reporting_overview:{id:219,name:"sterling_reporting_overview_pageload"},sterling_ads_create:{id:221,name:"sterling_adscreate_main_pageload"},sterling_ads_duplicate:{id:206,name:"sterling_adsduplication_main_pageload"},sterling_ads_edit:{id:204,name:"sterling_adsedit_main_pageload"},sterling_billing_profile:{id:203,name:"sterling_billingprofile_main_pageload"},sterling_bulk_editor:{id:205,name:"sterling_bulkeditor_main_pageload"},sterling_pin_builder:{id:222,name:"sterling_adscreate_pinbuilder_pageload"},sterling_recommendations:{id:223,name:"sterling_recommendations_pageload"},sterling_reporting_details:{id:218,name:"sterling_reporting_details_pageload"}}},client_route_push:{unauth:{},auth:{bizhub:{id:608,name:"bizhub_page_render"},homefeed:{id:2,name:"home_feed_render"},search:{id:3,name:"search_feed_render"},search_tab:{id:25,name:"search_tab_render"},pin_closeup:{id:13,name:"pin_closeup_details"},sterling_audiences:{id:224,name:"sterling_audiences_page_user_nav"},sterling_ads_edit:{id:225,name:"sterling_edit_flow_user_nav"},sterling_reporting_overview:{id:226,name:"sterling_reporting_overview_user_nav"},sterling_reporting_details:{id:227,name:"sterling_reporting_details_user_nav"},own_profile:r,other_profile:i}},client_route_replace:{unauth:{},auth:{own_profile:r,other_profile:i,sterling_reporting_overview:{id:226,name:"sterling_reporting_overview_user_nav"},sterling_ads_edit:{id:225,name:"sterling_edit_flow_user_nav"}}}},a={initial_app_load:{auth:{pin_closeup:{product_detail_page:{id:120,name:"product_details_interactive"},product_detail_page_plus:{id:121,name:"product_details_plus_interactive"}}}},client_route_push:{auth:{pin_closeup:{story_pin:{id:700,name:"story_pin_closeup"},product_detail_page:{id:37,name:"product_details_render"},product_detail_page_plus:{id:38,name:"product_details_plus_render"}}}},client_route_replace:{auth:{pin_closeup:{product_detail_page:{id:37,name:"product_details_render"},product_detail_page_plus:{id:38,name:"product_details_plus_render"}}}}},u={board_picker:16,grid_bottom_spinner:12,facebook_autologin:500,google_autologin:501,story_pin_step:701},c=function(e){var n,t,r=e.navigationType,i=e.isAuthenticated,u=e.segment,c=e.surface,s=i?"auth":"unauth",l=null===(n=a[r])||void 0===n||null===(t=n[s])||void 0===t?void 0:t[c];return u&&l&&l[u]||o[r][s][c]},s=function(e){if("stopwatch"===e.type)return u[e.name]||null;var n=c(e);return n?n.id:null},l=function(e){if("stopwatch"===e.type)return e.name;var n=e.navigationType,t=e.isAuthenticated,r=e.segment,i=e.surface,o=t?"auth":"unauth",a=c(e);return a?a.name:"".concat(n,"_").concat(o,"_").concat(i).concat(r?"_"+r:"")}},30482:function(e,n,t){t.d(n,{Ex:function(){return a},XV:function(){return o},v5:function(){return i}});var r=t(39008),i=function(e,n){r.DQ&&(e.style.outline="10px solid ".concat(n),e.style.outlineOffset="-30px")},o=function(e){return function(n){if(r.DQ){for(var t,i=arguments.length,o=new Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];(t=console).log.apply(t,["string"==typeof n?"[PWT:".concat(e,"] ").concat(n):n].concat(o))}}},a=function(e){return function(n){r.jn&&console.log("[CWV:".concat(e,"] ").concat(String(n)))}}},361905:function(e,n,t){t.d(n,{F9:function(){return d},LM:function(){return l},VZ:function(){return u},cQ:function(){return p},rZ:function(){return c}});var r=t(520636),i=t(763795);function o(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var u=function(){return"number"==typeof window.innerHeight&&"number"==typeof window.pageYOffset&&!!document.querySelector&&!!document.querySelectorAll},c=function(e){return e instanceof HTMLDivElement||e instanceof HTMLVideoElement?e.getBoundingClientRect():e.parentElement instanceof HTMLElement?e.parentElement.getBoundingClientRect():null},s=function(e){if(e instanceof HTMLImageElement)return e.src;if(e instanceof HTMLVideoElement)return e.attributes.poster.value;var n=((e.style||{}).backgroundImage||"").match(/^url\(["'](.*)["']\)$/);return n&&n[1]||null},l=function(){return document.querySelector?document.querySelectorAll(r.wc).length:((0,i.H)("missing_document_query_selector"),0)},f=function(e,n){var t=c(e);if(!t)return(0,i.H)("missing_client_rect"),!1;if(t.width<100&&t.height<100){if(e instanceof HTMLImageElement)return!1;var r=s(e);if(null!=r&&r.endsWith("svg"))return!1}return function(e,n){var t=e.top,r=e.height,i=n.foldY,o=t+n.pageYOffset;if(o>=i)return!1;var a=Math.min(r,i-o);return a>.5*r||a>.2*i}(t,n)},d=function(){var e=function(){if(!document.querySelector)return(0,i.H)("missing_document_query_selector"),null;var e=document.querySelectorAll(r.wc);return e[e.length-1]||null}();if(!e)return!1;var n=window.innerHeight||0,t=window.pageYOffset||0;return e.getBoundingClientRect().top+t>=n},p=function(e,n,t){if(!document.querySelector)return(0,i.H)("missing_document_query_selector"),[];var a={foldY:window.innerHeight||0,pageYOffset:window.pageYOffset||0},u=[r.Wf].concat(o(e?[r.fF]:[]),o(n?[r.$N]:[])).join(","),c=o(document.querySelectorAll(u));if(t){var l=o(document.querySelectorAll('div[data-test-id="board-section"]')),d=function e(n){var t=o(n.children);!t.length&&n.style.backgroundImage?c.push(n):t.length&&t.forEach((function(n){e(n)}))};l.forEach((function(e){d(e)}))}return c.reduce((function(e,t){if((t instanceof HTMLImageElement||t instanceof HTMLDivElement||t instanceof HTMLVideoElement&&n)&&f(t,a)){var r=s(t);if(r){var i=(r||"").replace(/.*\//,"");return e.concat([{element:t,fileName:i}])}}return e}),[])}},520636:function(e,n,t){t.d(n,{$N:function(){return c},Kb:function(){return r},Wf:function(){return a},fF:function(){return u},wc:function(){return o}});var r="pwt-grid-item",i=['div[data-grid-item="true"]',"div.Grid__Item",'div[data-test-id="'.concat(r,'"]')],o=i.join(","),a=i.map((function(e){return"".concat(e," img")})).join(","),u=i.map((function(e){return"".concat(e," div[style*=background-image]")})).join(","),c=i.map((function(e){return"".concat(e," video")})).join(",")},574155:function(e,n,t){t.d(n,{Z:function(){return j},v:function(){return O}});var r=t(658379),i=t(93501),o=t(30482),a=t(361905),u=t(763795),c=t(39983),s=t(41162),l=t(353335),f=t(456453);function d(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?d(Object(t),!0).forEach((function(n){m(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function g(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,i,o=[],a=!0,u=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(c){u=!0,i=c}finally{try{a||null==t.return||t.return()}finally{if(u)throw i}}return o}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return v(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return v(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var y=500,_=100,b=6e4,w=6e4,h=(0,o.XV)("GridProfiler"),O=function(){return!!window.addEventListener&&!!window.removeEventListener&&(0,a.VZ)()},S=function(e){return"LAYOUT"===e.status&&y||"TIMING"===e.status&&_||null},T=function(e,n){if(!n){var t=(0,a.LM)();if(t===e)return h("No new items, so skip the viewport-fill check."),{complete:!1,numOfItemsChecked:e};if(!(0,a.F9)())return h("Viewport may not be filled yet."),{complete:!1,numOfItemsChecked:t}}return{complete:!0}},A=function(e,n){var t=0,r=0,i=0,o=0,a=0;return e=e.filter((function(e){return"pin"===e.type})),n.forEach((function(n,u){var c,s,l,f,d,p,m,g=n.fileName.split(".")[0];m=e[u],g!==(null===(c=m)||void 0===c?void 0:c.image_signature)&&(m=e.find((function(e){return g===(null==e?void 0:e.image_signature)}))),void 0===m?a+=1:m.is_promoted||"PROMOTED_PIN"===(null===(s=m.recommendation_reason)||void 0===s?void 0:s.reason)||null!==(l=m)&&void 0!==l&&null!==(f=l.promoter)&&void 0!==f&&f.length?i+=1:null!==m.story_pin_data_id&&void 0!==m.story_pin_data_id?t+=1:null!==(d=m)&&void 0!==d&&null!==(p=d.videos)&&void 0!==p&&p.video_list?r+=1:o+=1})),{storyPinCount:t,videoCount:r,adCount:i,imageCount:o,unknownCount:a}},E=function(e,n){var t=function t(){window.removeEventListener(e,t),n()};return window.addEventListener(e,t),function(){return window.removeEventListener(e,t)}};function j(e){var n=e.isAtEndOfFeed,t=e.pinData,d=e.includeBackgroundImages,m=e.includeVideos,v=void 0!==m&&m,O=e.includeSections,j=(0,s.E)(),C=null==j?void 0:j.getId(),P=null==j?void 0:j.setVisuallyCompleteResult,k=g((0,r.useState)({status:"DISABLED"}),2),I=k[0],D=k[1];(0,r.useEffect)((function(){D(P?{status:"LAYOUT",failedCount:0,numOfItemsChecked:0}:{status:"DISABLED"})}),[C,P]),(0,r.useEffect)((function(){if("DISABLED"!==I.status&&(0,c.ZP)("GridVisuallyCompleteProfiler_".concat(I.status)),h("new status",I),"LAYOUT"===I.status){var e=E("scroll",(function(){(0,c.ZP)("scrollDuringLayout")}));return function(){e()}}return function(){}}),[I.status]),(0,f.Z)((function(){if(j&&P){var e=j.abort,r=(0,j.getMetricId)();switch(I.status){case"LAYOUT":var c=T(I.numOfItemsChecked,n);c.complete?D({status:"TIMING",failedCount:0,pinElements:(0,a.cQ)(d,v,O)}):I.failedCount*y>b?((0,u.A9)("images.".concat((0,i.KJ)(r),".visuallyComplete.maxLayoutAttempt")),e("visuallyComplete_layoutTimeout"),D({status:"DISABLED"})):D(p(p({},I),{},{failedCount:I.failedCount+1,numOfItemsChecked:c.numOfItemsChecked}));break;case"TIMING":var s=(0,l.Cg)(),f=I.pinElements.length,m=[],S=0,E=0,C=0;if(I.pinElements.forEach((function(e){var n=e.element,t=e.fileName,r=s.find((function(e){return e.name.endsWith(t)}));r?r.responseEnd?(m.push(r),(0,o.v5)(n,"green")):(C+=1,(0,o.v5)(n,"blue")):n instanceof HTMLImageElement&&n.complete?(E+=1,(0,o.v5)(n,"red")):(S+=1,(0,o.v5)(n,"greenyellow"))})),S||C)I.failedCount*_>w?((0,u.A9)("images.".concat((0,i.KJ)(r),".visuallyComplete.maxAttempt"),{tags:{totalImageCount:f,incompleteCount:S,noTimingCount:E,noTimingResponseEndCount:C}}),e("visuallyComplete_timingTimeout"),D({status:"DISABLED"})):D(p(p({},I),{},{failedCount:I.failedCount+1}));else{if(h("All ".concat(m.length," images are fetched")),t&&t.length){var k=A(t,I.pinElements);Object.entries(k).forEach((function(e){var n=g(e,2),t=n[0],r=n[1];j.addBinaryAnnotation(t,r,"I16")})),(0,u.A9)("".concat((0,i.KJ)(r),".pinTypes"),{tags:k})}P({imageTimings:m}),D({status:"DISABLED"}),(0,u.A9)("images.".concat((0,i.KJ)(r),".visuallyComplete.complete"),{tags:{totalImageCount:f,noTimingCount:E}})}}}}),S(I))}},763795:function(e,n,t){t.d(n,{A9:function(){return g},DG:function(){return p},H:function(){return v},S$:function(){return y},iF:function(){return m}});var r=t(40660),i=t(39008),o=t(30482),a=t(549201);function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var l=(0,o.XV)("logPwtStats"),f=null,d=!0;function p(e){f={browserName:e.userAgent.browserName,browserVersion:e.userAgent.browserVersion,deviceType:(0,a.Mq)(e),isAuthenticated:e.isAuthenticated,isBot:e.isBot,isSocialBot:e.isSocialBot}}var m=function(e){f&&(f.historyAction=e)},g=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{sampleRate:1},t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=i.DQ?1:n.sampleRate;if(!f)return l("pwt.metrics_quality.no_context"),void r.Z.increment("pwt.metrics_quality.no_context",o,{eventName:e});var a=f,u=a.browserName,s=a.browserVersion,d=a.deviceType,p=a.isBot,m=a.isSocialBot,g="pwt.".concat((m?"socialBot":p&&"bot")||"nonbot",".metrics_quality.").concat(d,".").concat(e),v=c(c({},n.tags||{}),{},{browserName:u,browserVersion:(null==s?void 0:s.split(".")[0])||"0"}),y=n.count;t&&(l("".concat(g,": ").concat("number"==typeof y?y:1)),n.tags&&l(Object.entries(n.tags))),i.is||r.Z.count(g,"number"==typeof y?y:1,o,v)},v=function(e,n){return g("ERROR.".concat(null!=n&&n.action?n.action+".":"").concat(e),{tags:n})},y=function(e,n){var t=e.appLoadName,i=e.clientNavName;if(f){var o="APP_VOLUME.";d?(g(o.concat(t),{tags:{browserSupportsPwtProfiler:!!n}}),d=!1):"PUSH"===f.historyAction&&g(o.concat(i),{tags:{browserSupportsPwtProfiler:!!n}})}else r.Z.increment("pwt.metrics_quality.no_context",1,{eventName:t.concat(".".concat(i))})}},39983:function(e,n,t){t.d(n,{Ao:function(){return c},BA:function(){return s},L8:function(){return f},at:function(){return i},gQ:function(){return u},tl:function(){return l}});var r=t(622200),i="masonryPagination",o={},a=function(e){return"📌 ".concat(e)},u=function(){var e={};return Object.keys(o).forEach((function(n){(o[n]||[]).slice(0,3).forEach((function(t,r){var i=r?"".concat(n,"_").concat(r+1):n;e[i]=t}))})),e},c=function(e,n){return(o[e]||[]).filter((function(e){return e<n})).length},s=function(e,n){return c(e,n)>0},l=function(){r.Z&&Object.keys(o).forEach((function(e){return function(e,n){var t=a(n);e.clearMarks(t),e.clearMeasures(t)}(r.Z,e)})),o={}},f=function(e){r.Z&&(o[e]=(o[e]||[]).concat([r.Z.now()]),function(e,n,t,r){var i=a(n);e.measure(i,t,r)}(r.Z,e))};n.ZP=function(e){r.Z&&(o[e]=(o[e]||[]).concat([r.Z.now()]),function(e,n){var t=a(n);e.mark(t)}(r.Z,e))}},486986:function(e,n,t){t.d(n,{cC:function(){return o},jy:function(){return i},qr:function(){return u},sk:function(){return a}});var r=function(e){return"number"==typeof e?Math.round(e):e},i=function(e){return{type:"I16",value:r(e)}},o=function(e){return{type:"I32",value:r(e)}},a=function(e){return{type:"STRING",value:e}},u=function(e){return{type:"BOOL",value:e}}},372453:function(e,n,t){t.d(n,{ng:function(){return w},rA:function(){return h}});var r=t(93501),i=t(39983),o=t(486986),a=t(335741),u=t(353335),c=t(910673);function s(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return l(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var m=function(e,n){return(e||[]).reduce((function(e,t){return d(d({},e),{},p({},"experiment.".concat(t),(0,o.sk)(n(t))))}),{})},g=function(e,n){return"number"==typeof n?e(n):null},v=function(e){return e.reduce((function(e,n){return e+n}),0)},y=function(e,n){return Object.keys(n).reduce((function(t,r){return d(d({},t),{},p({},"".concat(e).concat(r),n[r]))}),{})},_=function(e){var n=e.filter((function(e){return!!e.responseEnd}));return d(d({},e.length?d(d({},function(e){if(!e.length)return{};var n,t=e.map((function(e){var n=e.startTime,t=e.requestStart||n;return{startTime:n,requestStart:t,responseStart:e.responseStart||t,responseEnd:e.responseEnd}})),r=v(t.map((function(e){return e.requestStart-e.startTime}))),i=v(t.map((function(e){return e.responseStart-e.requestStart}))),a=v(t.map((function(e){return e.responseEnd-e.responseStart}))),u=r+i+a,c=v(e.map((function(e){return e.decodedBodySize||0})));return{decodedBodySize:(0,o.cC)((n=c,Number(Number(n/1024).toFixed(3)))),"duration.all":(0,o.cC)(u),"duration.requestStartToResponseStart":(0,o.cC)(i),"duration.responseStartToResponseEnd":(0,o.cC)(a),"duration.startToRequestStart":(0,o.cC)(r)}}(n)),{},{"count.completed":(0,o.cC)(n.length)}):{}),{},{"count.all":(0,o.cC)(e.length)})},b=function(e,n,t){var i,a,s=window,l=s.devicePixelRatio,f=s.navigator,p=s.innerWidth,m=s.innerHeight,v=s.performance,y=f.deviceMemory,_=f.hardwareConcurrency,b=f.platform,w=f.userAgent,h=f.connection,O=v.memory,S=n.appType,T=n.appVersion,A=n.browserName,E=n.browserVersion,j=n.deviceType,C=n.isAppShell,P=n.isAuthenticated,k=n.isBot,I=n.isSocialBot,D=n.locale,L=n.osName,M=n.stageName,Z="desktop"===j?S||5:S||6,B=e.navigationType,x=null;if("initial_app_load"===B){var q;a=1;var N=null===(q=(0,c.Z)("navigation")[0])||void 0===q?void 0:q.transferSize;x=N?parseFloat((.001*N).toFixed(1)):null}else a=4;return d(d({"app.type":(0,o.jy)(Z),"app.version":(0,o.sk)(T),"browser.name":(0,o.sk)(A),"browser.version":(0,o.sk)(E),"cpu.speed":(0,o.jy)(_),"device.memory":(0,o.jy)(y),"device.type":(0,o.jy)(0),"device.typeName":(0,o.sk)(j),"device.version":(0,o.sk)("unknown"),"pwt.cause":(0,o.jy)(a),"net.effectiveType":(0,o.sk)((null==h?void 0:h.effectiveType)||null),"net.downlink":(0,o.cC)(g((function(e){return 10*Math.round(e/10)}),null==h?void 0:h.downlink)),"net.downlinkMax":(0,o.cC)(g((function(e){return 10*Math.round(e/10)}),null==h?void 0:h.downlinkMax)),"net.rtt":(0,o.cC)(g((function(e){return 10*Math.round(e/10)}),null==h?void 0:h.rtt)),"net.speed":(0,o.cC)((0,u.Hv)(t,!1)),"pwt.result":(0,o.jy)(1),"view.type":(0,o.cC)(0),"viewport.height":(0,o.cC)(m||0),"viewport.width":(0,o.cC)(p||0),devicePixelRatio:(0,o.cC)(l||0),isAppShell:(0,o.qr)(C),isAuthenticated:(0,o.qr)(P),isBot:(0,o.qr)(k),isSocialBot:(0,o.qr)(I),locale:(0,o.sk)(D),osName:(0,o.sk)(L)},null!==x&&{htmlResponseSize:(0,o.cC)(x)}),{},{nextHopProtocol:(0,o.sk)((null===(i=(0,c.Z)("navigation")[0])||void 0===i?void 0:i.nextHopProtocol)||null),platform:(0,o.sk)(b||null),profilerVersion:(0,o.sk)("3"),pwtActionName:(0,o.jy)((0,r.Rp)(e)),stageName:(0,o.sk)(M),userAgent:(0,o.sk)(w),usedJSHeapSize:(0,o.cC)((null==O?void 0:O.usedJSHeapSize)||0),totalJSHeapSize:(0,o.cC)((null==O?void 0:O.totalJSHeapSize)||0),jsHeapSizeLimit:(0,o.cC)((null==O?void 0:O.jsHeapSizeLimit)||0)})},w=function(e){var n=e.annotateExperiments,t=e.metricId,r=e.pwtStaticContext,i=e.binaryAnnotations,a=void 0===i?{}:i,u=e.performanceResourceTimings,c=void 0===u?[]:u;return d(d(d(d({},m(n,r.getExperimentGroup)),b(t,r,c)),a),{},{stopwatchVersion:(0,o.jy)(1)})},h=function(e){var n=e.annotateExperiments,t=e.binaryAnnotations,r=void 0===t?{}:t,u=e.entries,c=e.metricId,l=e.performanceResources,f=e.pwtEndTime,g=e.pwtStaticContext;return d(d(d(d(d({},r),function(e){var n=["timeSecond1","timeSecond2","timeSecond3"],t={timeSecond1:{start:0,end:0,count:0},timeSecond2:{start:0,end:0,count:0},timeSecond3:{start:0,end:0,count:0}},r={script_deferred:[],external:[],visually_complete:[],script:[],css:[],video:[],image:[],xmlhttprequest:[],other:[]};if(e.length){var i=e[0].timing,a=i.requestStart,u=i.startTime,c=a||u;t.timeSecond1.start=c,t.timeSecond1.end=c+1e3,t.timeSecond2.start=c+1e3,t.timeSecond2.end=c+2e3,t.timeSecond3.start=c+2e3,t.timeSecond3.end=c+3e3,e.forEach((function(e){var i=e.timing;r[e.category]=r[e.category].concat([i]),e.isDeferred&&(r.script_deferred=r.script_deferred.concat([i])),e.isExternal&&(r.external=r.external.concat([i])),e.isVisuallyCompleteRequired&&(r.visually_complete=r.visually_complete.concat([i]));var o=i.requestStart,a=i.startTime,u=i.responseEnd,c=o||a;n.forEach((function(e){var n=t[e],r=n.start,i=n.end;(c>=r&&c<i||c<r&&u>r)&&(t[e].count+=1)}))}))}var s=d({},y("concurrentRequests.",Object.keys(t).reduce((function(e,n){return d(d({},e),{},p({},n,(0,o.cC)(t[n].count)))}),{})));return d({},Object.keys(r).reduce((function(e,n){return d(d({},e),y("resource.".concat(n,"."),_(r[n])))}),s))}(l)),m(n,g.getExperimentGroup)),b(c,g,u)),function(e,n){var t,r=window.navigator.serviceWorker,u=e.surface,c=e.navigationType,l=e.isAuthenticated,f=(0,a.v2)(),p=f.cumulativeLayoutShiftScore,m=f.longTaskDurations;return d(d({},m.length?{"longTask.count":(0,o.cC)(m.length),"longTask.maxDuration":(0,o.cC)(Math.max.apply(Math,s(m))),"longTask.totalDuration":(0,o.cC)(v(m))}:{}),{},{cumulativeLayoutShiftScore:(0,o.cC)(100*p),"masonry.paginationMarkCount":(0,o.cC)((0,i.Ao)(i.at,n)),"metricId.isAuthenticated":(0,o.qr)(l),"metricId.navigationType":(0,o.sk)(c),"metricId.surface":(0,o.sk)(u),resourceBufferClearedCount:(0,o.jy)((0,i.Ao)("resourceBufferCleared",n)),scrollDuringLayout:(0,o.qr)((0,i.BA)("scrollDuringLayout",n)),serviceWorker:(0,o.qr)(r?!!r.controller:null),serviceWorkerState:(0,o.sk)((null==r||null===(t=r.controller)||void 0===t?void 0:t.state)||null)})}(c,f))}},363959:function(e,n,t){var r=t(622200);function i(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,i,o=[],a=!0,u=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(c){u=!0,i=c}finally{try{a||null==t.return||t.return()}finally{if(u)throw i}}return o}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return o(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}n.Z=function(){return i(r.Z?r.Z.getEntriesByType("navigation"):[],1)[0]}},324e3:function(e,n,t){t.d(n,{i:function(){return r},p:function(){return a}});var r=function(e){var n=e.name;switch(e.initiatorType){case"xmlhttprequest":return"xmlhttprequest";case"img":return"image";case"video":return"video";default:var t=n.split("."),r=(t.length>1&&t.pop()||"").toLowerCase();return["js","mjs"].includes(r)?"script":"css"===r?"css":["mp4","m4v","mov","ts","m3u8"].includes(r)?"video":["bmp","gif","jpg","jpeg","png","tiff","webp","svg"].includes(r)?"image":"other"}},i=function(e){var n=e.replace(new RegExp("^".concat(window.location.origin||"")),""),t=document&&document.querySelector("script[src='".concat(n,"']"));return!!t&&t.hasAttribute("defer")},o=function(e){return["pinimg","pinterest","pinterdev"].every((function(n){return!e.includes("".concat(n))}))},a=function(e,n){var t=r(e),a=e.name;return{category:t,isDeferred:"script"===t&&i(a),isExternal:o(a),isVisuallyCompleteRequired:"image"===t&&n.includes(a),timing:e}}},591614:function(e,n,t){t.d(n,{Z:function(){return k}});var r=t(334130),i=t(39008),o=t(93501),a=t(30482),u=t(763795),c=null,s=function(e,n){return(c=c||{results:[],context:n}).results.push(e),c},l=t(486986),f=t(363959),d=t(769916),p=t(910673);function m(e){return function(e){if(Array.isArray(e))return g(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return g(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return g(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function v(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?v(Object(t),!0).forEach((function(n){_(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function _(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var b=function(e,n){return Object.keys(e).reduce((function(t,r){var i=e[r];return i?y(y({},t),{},_({},r,{timestamp:n+i})):t}),{})},w=function(e){var n,t=e.span,r=e.timeOrigin;return{id:t.id,parent_id:t.parentId||null,result:1,name:t.name,timestamp:r+t.startTime,duration:t.endTime-t.startTime,annotations:b(t.annotationMap,r),binary_annotations:(n=t.binaryAnnotationMap,Object.keys(n).reduce((function(e,t){var r=n[t];if(!r)return e;var i=r.value,o=r.type;return null==i?e:e.concat({name:t,value:i,annotation_type:o})}),[]))}},h=function(e,n){var t=n.startTime,r=n.endTime,i=n.annotationMap,o=n.binaryAnnotationMap,a=n.parentId,u=n.traceId;return{name:"pwt/".concat(e),startTime:t,endTime:r,annotationMap:i,binaryAnnotationMap:o,parentId:a,id:u}},O=function(e,n){return y(y({},e),{},{annotations:y(y({},(t=n,t.annotations.reduce((function(e,n){var t=n.key,r=n.timestamp;return y(y({},e),{},_({},"server_".concat(t),{timestamp:r}))}),{}))),e.annotations),binary_annotations:[].concat(m(n.binary_annotations),m(e.binary_annotations))});var t},S=function(e){var n=e.traceId,t=e.actionName,r=e.result,i=e.timeOrigin,o=e.serverDataToJoin,a=w({span:h(t,r),timeOrigin:i}),u=null;return o&&(a=O(a,o),u=function(e,n,t){var r,i=(0,f.Z)();return(null==i?void 0:i.responseEnd)?O(w({span:{name:"html",startTime:0,endTime:(null==i?void 0:i.responseEnd)||1,annotationMap:{},binaryAnnotationMap:{nextHopProtocol:(0,l.sk)((null===(r=(0,p.Z)("navigation")[0])||void 0===r?void 0:r.nextHopProtocol)||null)},id:e.server_span_id||(0,d.Z)(),parentId:n},timeOrigin:t}),e):null}(o,n,i)),{trace_id:n,spans:[a].concat(m(u?[u]:[]),m(r.spans.map((function(e){return w({span:e,timeOrigin:i})}))))}},T=function(e){return{debugTrace:i.eD,locale:e.locale,stageName:e.stageName}};function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(Object(t),!0).forEach((function(n){j(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function j(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var C=(0,a.XV)("reportResult"),P=function(){var e;return null!==(e=window.performance)&&void 0!==e&&e.now?Date.now()-window.performance.now():"unknown"};function k(e){var n=e.metricId,t=e.pwtStaticContext,a=e.result,c=e.isAuth,l=t.serverData,f=(0,o.KJ)(n),d="".concat(a.type,".").concat(f),p="".concat(a.type,".sampled.").concat(f),m=void 0!==c&&{tags:{isAuth:c}}||void 0;if((0,u.A9)(a.reason?d.concat(".".concat(a.reason)):d,m),(0,u.A9)(a.reason?p.concat(".".concat(a.reason)):p,E(E({},m),{},{sampleRate:.5})),"COMPLETE"===a.type){var g=P();if("unknown"===g)return C("Unable to convert to absolute times for ".concat(f," due to missing time origin")),void(0,u.A9)("missingTimeOrigin.".concat(f),m);if(i.is&&(window.PWT_LAB_DATA=s(a,t)),a.spans.length&&(a.spans=a.spans.map((function(e){return e.parentId||e.id===a.traceId||"network_resources"===e.name||(e.parentId=a.traceId),e}))),!i.is){var v=n.navigationType&&"initial_app_load"===n.navigationType,y=a.traceId,_=S({traceId:y,actionName:f,result:a,timeOrigin:g,serverDataToJoin:v&&l||null});(0,r.Z)({type:"POST",url:"/_/_/trace/trace/",data:{report_data:JSON.stringify(_),report_context:JSON.stringify(T(t))}}),C("PinTrace ".concat(f," will be available shortly: https://pintrace.pinadmin.com/zipkin/traces/").concat(y.toString(16)),{duration:a.endTime-a.startTime,result:a,pwtStaticContext:t})}}else C("Abort metric ".concat(f),a)}},335741:function(e,n,t){t.d(n,{Af:function(){return v},Bn:function(){return g},Kj:function(){return m},PJ:function(){return l},UQ:function(){return y},Ux:function(){return f},on:function(){return c},v2:function(){return d}});var r,i,o=t(545225),a=t(55941),u={cumulativeLayoutShiftScore:0,firstInputDelay:null,longTaskDurations:[],largestContentfulPaint:null,elementTimings:[]},c=function(){u.longTaskDurations=[]},s=(0,o.Z)((function(){return u.elementTimings})),l=function(){return s.get()},f=function(e){e&&s.save(),u.elementTimings=[]},d=function(){return u},p=0,m=function(){return p},g=function(){return r},v=function(){return i},y=function(){(0,a.Z)({type:"element",buffered:!0},(function(e){u.elementTimings=u.elementTimings.concat(e.getEntries().reduce((function(e,n){var t=n.identifier,r=n.loadTime,i=n.renderTime;return e.concat("string"==typeof t&&"number"==typeof r&&"number"==typeof i?[{identifier:t,loadTime:r,renderTime:i}]:[])}),[]))})),(0,a.Z)({entryTypes:["longtask"]},(function(e){e.getEntries().map((function(e){return u.longTaskDurations.push(e.duration)}))}),(function(){return c()})),(0,a.Z)({type:"first-input",buffered:!0},(function(e,n){var t=e.getEntries()[0];t&&t.startTime&&t.processingStart&&(u.firstInputDelay={startTime:t.startTime,endTime:t.processingStart},i=u.firstInputDelay.startTime),n.disconnect()}),(function(){u.firstInputDelay=null})),(0,a.Z)({type:"largest-contentful-paint",buffered:!0},(function(e){var n=e.getEntries(),t=n.length,i=n[t-1];i&&(p=t,u.largestContentfulPaint=i.renderTime||i.loadTime||null,r=i.renderTime||i.loadTime||null)})),(0,a.Z)({type:"layout-shift",buffered:!0},(function(e){e.getEntries().forEach((function(e){e.hadRecentInput||(u.cumulativeLayoutShiftScore+=e.value)}))}))}},545225:function(e,n){n.Z=function(e){var n=null;return{get:function(){return n||e()},save:function(){n=e()}}}},55941:function(e,n){n.Z=function(e,n,t){if(!window.PerformanceObserver)return null;try{var r=new window.PerformanceObserver(n);return r.observe(e),window.addEventListener("beforeunload",(function(){r.disconnect()})),t&&window.addEventListener("popstate",(function(){t()})),r}catch(i){return null}}},769916:function(e,n,t){function r(){for(var e="",n=0;n<15;n+=1){e+="0123456789"[Math.floor(10*Math.random())]}return Number(e)}t.d(n,{Z:function(){return r}})},353335:function(e,n,t){t.d(n,{Cg:function(){return g},Eg:function(){return y},Hv:function(){return b},LH:function(){return _},MM:function(){return w},X_:function(){return d},y0:function(){return v}});var r,i=t(39008),o=t(763795),a=t(39983),u=t(324e3),c=t(545225),s=t(55941),l=t(910673);function f(){window.performance&&window.performance.clearResourceTimings&&((0,a.ZP)("resourceBufferCleared"),i.DQ&&console.info("Warning: Clearing resource timings in default buffer."),(0,o.A9)("resourceBufferSize",{count:(0,l.Z)("resource").length}),window.performance.clearResourceTimings())}var d=function(e){var n=e.size;if(window.performance){window.PerformanceObserver?(r=(0,l.Z)("resource"),(0,s.Z)({entryTypes:["resource"]},(function(e){(r=(r||[]).concat(e.getEntries())).length>n&&(r=r.slice(-n))}))):(window.addEventListener("popstate",(function(){(0,l.Z)("resource").length>n&&f()})),window.performance.setResourceTimingBufferSize&&window.performance.setResourceTimingBufferSize(n));try{window.performance.onresourcetimingbufferfull=function(){r||f()}}catch(t){}}},p=function(){return r||(0,l.Z)("resource")},m=(0,c.Z)(p),g=p,v=function(){return m.get()},y=function(e){e&&m.save(),r&&((0,o.A9)("customBufferSize",{count:r.length}),r=[]),f()},_=function(){return{customBufferSize:r?r.length:0,defaultBufferSize:(0,l.Z)("resource").length}},b=function(e){var n,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=0,i=0,a=(n=e.filter((function(e){return t?!("image"!==(0,u.i)(e)||(e.responseEnd||(r+=1),e.transferSize||(i+=1),!e.responseEnd||!e.transferSize)):!!e.responseEnd&&!!e.transferSize})).map((function(e){return 8*(e.transferSize||0)/((e.responseEnd-e.responseStart)/1e3)/1e3}))).length?n.reduce((function(e,n){return e+n}),0)/n.length:null;return t&&(r>0&&(0,o.A9)("images.downloadSpeed.noResponseEnd",{tags:{count:r}},!1),i>0&&(0,o.A9)("images.downloadSpeed.transferSize",{tags:{count:i}},!1)),a},w=function(e){if(!e)return"unknown";var n=Math.floor(e/1e3);return n<1?"0-1":n<5?"1-5":n<10?"5-10":n<20?"10-20":n<40?"20-40":n<80?"40-80":"80_or_above"}},910673:function(e,n,t){function r(e){var n,t;return(null===(n=window)||void 0===n||null===(t=n.performance)||void 0===t?void 0:t.getEntriesByType)&&window.performance.getEntriesByType(e)||[]}t.d(n,{Z:function(){return r}})},622200:function(e,n){var t;n.Z=(t=window.performance)&&t.clearMarks&&t.clearMeasures&&t.clearResourceTimings&&t.getEntries&&t.getEntriesByName&&t.getEntriesByType&&t.mark&&t.measure&&t.now&&t.setResourceTimingBufferSize?t:null},456453:function(e,n,t){var r=t(658379);n.Z=function(e,n){var t=(0,r.useRef)((function(){}));(0,r.useEffect)((function(){t.current=e}),[e]),(0,r.useEffect)((function(){if(null===n)return function(){};var e=setInterval((function(){return t.current()}),n);return function(){return clearInterval(e)}}),[n])}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/14324-1d2c82ecec2c2bfb.js.map