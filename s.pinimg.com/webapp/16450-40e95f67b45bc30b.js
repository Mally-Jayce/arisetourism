(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[16450],{363378:function(e){e.exports="https://s.pinimg.com/webapp/empty-state-ad-accounts-2x-c8d3b98e.png"},642447:function(e,t,n){"use strict";n.d(t,{Z:function(){return i},k:function(){return r}});var r={LONG:"long",YEAR:"year",WEEKDAY_DATE:"weekday_date",WEEKDAY_DATE_TIME_TIMEZONE:"weekday_date_time_timezone",SHORT_WEEKDAY_DATE:"short_weekday_date",LONG_MONTH_YEAR:"long_month_year",NUMERIC:"numeric",MONTH_DAY:"month_day",SHORT_MONTH:"short_month",SHORT_MONTH_DAY:"short_month_day",DAY:"day",YEAR_SHORT_MONTH_DAY:"year_short_month_day",YEAR_SHORT_MONTH_DAY_HOUR:"year_short_month_day_hour",TIME:"time",TIME_TIMEZONE:"time_timezone",HOUR:"hour",TWO_DIGIT:"two_digit"},o=function(e){switch(e){case r.YEAR:return{year:"numeric"};case r.LONG:return{year:"numeric",month:"long",day:"numeric"};case r.NUMERIC:return{year:"numeric",month:"numeric",day:"numeric"};case r.TWO_DIGIT:return{year:"numeric",month:"2-digit",day:"2-digit"};case r.WEEKDAY_DATE:return{weekday:"long",month:"long",day:"numeric",year:"numeric"};case r.SHORT_WEEKDAY_DATE:return{weekday:"short",month:"numeric",day:"numeric"};case r.WEEKDAY_DATE_TIME_TIMEZONE:return{weekday:"short",month:"numeric",day:"numeric",hour:"numeric",minute:"2-digit",timeZoneName:"short"};case r.MONTH_DAY:return{month:"long",day:"numeric"};case r.SHORT_MONTH:return{month:"short"};case r.SHORT_MONTH_DAY:return{month:"short",day:"numeric"};case r.DAY:return{day:"numeric"};case r.LONG_MONTH_YEAR:return{month:"long",year:"numeric"};case r.YEAR_SHORT_MONTH_DAY:return{year:"numeric",month:"short",day:"numeric"};case r.YEAR_SHORT_MONTH_DAY_HOUR:return{month:"short",year:"numeric",day:"numeric",hour:"numeric"};case r.TIME:return{hour:"numeric",minute:"2-digit"};case r.TIME_TIMEZONE:return{hour:"numeric",minute:"2-digit",timeZoneName:"short"};case r.HOUR:return{hour:"numeric"};default:throw new Error('invalid dateFormatType "'+e+'"')}};function i(e,t,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=o(n);return r&&(i.timeZone="UTC"),new Intl.DateTimeFormat(e,i).format(t)}},788739:function(e,t,n){"use strict";n.d(t,{h:function(){return w},Z:function(){return j}});var r=n(658379),o=n(261783),i=n(249444),a=n(311229),l=n(536042),c=n(389282);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=function(e){var t=e.label,n=e.description,o=e.initialState,a=e.onChangeCallBack,l=e.id,s=u((0,r.useState)(o),2),d=s[0],f=s[1];return(0,c.jsx)(i.XZ,{label:t,name:t,onChange:function(){f(!d),a()},helperText:n,id:l,size:"md",checked:d})},f=n(382328),h=n(380609),m=n(533101),_=n(923917),y=n(589665);function p(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||A(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}(e,t)||A(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var T=new i.Ry(y.fe),E=new i.H3([T]),w={MULTISELECT:"MULTISELECT"};var j=function(e){var t=e.pageType,n=e.columnDefs,u=e.searchPlaceholder,s=e.emptyState,y=e.fetchData,g=e.data,v=e.isLoading,A=e.searchTermSelector,S=e.currentPageSelector,T=e.totalCountSelector,j=e.pageSizeSelector,O=e.onRowClick,C=e.filters,D=e.filtersError,P=(0,l.ZP)(),I=(0,_.YZ)(),z=x((0,r.useState)(""),2),L=z[0],M=z[1],R=x((0,r.useState)(!1),2),H=R[0],k=R[1],Y=x((0,r.useState)({}),2),N=Y[0],Z=Y[1],U=x((0,r.useState)({}),2),B=U[0],W=U[1],F=x((0,r.useState)(null),2),K=F[0],G=F[1],X=x((0,r.useState)(""),2),$=X[0],q=X[1],V=(0,o.useSelector)(null!=A?A:function(){}),J=(0,h.Z)(!0),Q=(0,r.useCallback)((function(e,t,n,r){var o=b({},"TEMP"===r?B:N);n===w.MULTISELECT&&(o[e]?o[e].includes(t)?o[e]=o[e].filter((function(e){return e!==t})):o[e]=[].concat(p(o[e]),[t]):o[e]=[t],o[e].length<1&&delete o[e]),"TEMP"===r?W(o):Z(o)}),[B,N]),ee=(0,r.useCallback)((function(e,t,n){Q(e,t,n,"PERM")}),[Q]),te=(0,r.useCallback)((function(){return C?Object.keys(N).map((function(e){var t=C.find((function(t){return t.name===e}));return t?(0,c.jsxs)(i.xu,{marginBottom:2,display:"flex",direction:"row",children:[(0,c.jsx)(i.xu,{marginEnd:3,paddingY:2,children:(0,c.jsxs)(i.xv,{inline:!0,size:"100",children:[t.label,":"]})}),(0,c.jsx)(i.kC,{direction:"row",gap:2,children:t.responseType===w.MULTISELECT&&N[e]&&N[e].map((function(n){var r,o=null===(r=t.options)||void 0===r?void 0:r.find((function(e){return e.value===n}));return o?(0,c.jsx)(i.xu,{children:(0,c.jsx)(i.Vp,{onRemove:function(){ee(e,n,w.MULTISELECT)},text:o.label})},"".concat(t.label,"-").concat(n)):null}))})]},"filter-".concat(t.label)):null})):null}),[N,C,ee]),ne=(0,r.useCallback)((function(){var e=Object.keys(N).length>0?JSON.stringify(N):"";$!==e&&(G(te()),W(N),y({filtersPayload:N}),q(e))}),[N,$,y,te]);if((0,r.useEffect)((function(){ne()}),[N,ne]),(0,f.Z)((function(){y({searchTerm:L})}),m.I.debounceTimeOut,[L]),I)return(0,c.jsx)(i.$j,{show:!0,delay:!1,accessibilityLabel:P._('Loading data table info', '[m10n]DataTable.loading', 'message shown when loading data')});if(!v&&!g.length&&!V&&0===Object.keys(N).length)return s;var re=P._('Filters', '[m10n]DataTable.accessibility.overlay.filter', 'button to open filter overlay data table'),oe=P._('Filter', '[m10n]DataTable.overlay.title', 'Title for filter overlay'),ie=P._('Sorry, something went wrong', '[m10n]DataTable.overlay.error', 'Error message header for overlay'),ae=J&&C&&C.length>0;return(0,c.jsxs)(i.kC,{direction:"column",children:[(0,c.jsxs)(i.xu,{marginBottom:2,display:"flex",direction:"row",children:[u&&!v&&(0,c.jsx)(i.sg,{span:ae?11:12,children:(0,c.jsx)(i.Um,{id:"data-table-search",accessibilityLabel:u,onChange:function(e){var t=e.value;M(t)},placeholder:u,value:L})}),ae&&(0,c.jsx)(i.sg,{span:1,children:(0,c.jsx)(i.xu,{marginStart:3,children:(0,c.jsx)(i.hU,{accessibilityLabel:re,accessibilityExpanded:H,accessibilityHaspopup:!0,icon:"filter",onClick:function(){return k((function(e){return!e}))},selected:H,tooltip:{text:re,idealDirection:"up"},size:"md"})})})]}),K,(0,c.jsx)(m.Z,{id:"data-table",pageType:t,isLoading:v,rowData:g,columnDefs:n,onSortChange:function(e,t){return y({sortBy:e,sortDirection:t})},onRowCountChange:function(e){return y({limit:e})},onPageChange:function(e){return y({page:e})},currentPageSelector:S,totalCountSelector:T,pageSizeSelector:j,isPaginationOptional:!0,onRowClick:O}),H&&(0,c.jsx)(i.mh,{zIndex:E,children:(0,c.jsx)(i.To,{accessibilityDismissButtonLabel:P._('Close filter overlay', '[m10n]DataTable.accessibility.closefilteroverlay', 'button for closing filter overlay'),accessibilityLabel:D?ie:oe,heading:D?ie:oe,onDismiss:function(){return k(!1)},footer:!D&&(0,c.jsx)(i.kC,{alignItems:"center",justifyContent:"end",children:(0,c.jsx)(i.zx,{color:"red",text:P._('Apply', '[m10n]DataTable.filters.apply', 'Button to apply filter'),onClick:function(){Z(B),k(!1)}})}),size:"md",children:D?(0,c.jsx)(i.kC,{justifyContent:"center",children:(0,c.jsx)(i.xv,{inline:!0,size:"400",children:(0,a.sQ)(P)})}):(0,c.jsx)(i.kC,{direction:"column",gap:{row:0,column:12},children:C&&C.map((function(e){return(0,c.jsxs)(i.kC,{direction:"column",gap:{row:1,column:4},children:[(0,c.jsx)(i.xu,{children:(0,c.jsx)(i.xv,{inline:!0,weight:"bold",size:"400",children:e.label})}),(0,c.jsx)(i.xv,{children:e.description}),(0,c.jsx)(i.pg,{legend:e.description,legendDisplay:"hidden",children:(0,c.jsx)(i.kC,{direction:"column",gap:{row:0,column:3},children:e.responseType===w.MULTISELECT&&e.options&&e.options.map((function(t){return(0,c.jsx)(d,{label:t.label,onChangeCallBack:function(){Q(e.name,t.value,w.MULTISELECT,"TEMP")},description:t.description,id:"".concat(e.name,"-option-").concat(t.value),initialState:!!N[e.name]&&N[e.name].includes(t.value)},"".concat(e.name,"-option-").concat(t.value))}))})})]},"filterLine-".concat(e.label))}))})})})]})}},11739:function(e,t,n){"use strict";var r=n(249444),o=n(389282);t.Z=function(e){var t=e.image,n=e.header,i=e.description;return(0,o.jsx)(r.xu,{justifyContent:"center",display:"flex",borderStyle:"shadow",rounding:4,children:(0,o.jsxs)(r.xu,{margin:9,children:[(0,o.jsx)(r.xu,{marginTop:9,children:t}),(0,o.jsx)(r.xu,{marginTop:4,marginBottom:1,children:(0,o.jsx)(r.xv,{size:"300",align:"center",children:n})}),(0,o.jsx)(r.xu,{marginBottom:9,children:(0,o.jsx)(r.xv,{size:"200",color:"subtle",align:"center",children:i})})]})})}},526537:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(658379),o=n(249444),i=n(389282);function a(e){var t=e.items;return(0,i.jsx)(o.xu,{borderStyle:"sm",rounding:4,display:"flex",direction:"column",dangerouslySetInlineStyle:{__style:{borderColor:"#e9e9e9"}},children:t.map((function(e,n){return n<t.length-1?(0,i.jsxs)(r.Fragment,{children:[e,(0,i.jsx)(o.xu,{borderStyle:"sm",dangerouslySetInlineStyle:{__style:{borderBottom:"none",borderColor:"#e9e9e9"}}})]},n):e}))})}},520816:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(249444),o=n(389282);function i(e){var t,n,i=e.pageTitle,a=e.sidebarContent,l=e.mainContent,c=e.fitToWindow,u=e.style;return(0,o.jsxs)(r.xu,{display:"flex",direction:"column",padding:6,overflow:"visible",children:[!!i&&(0,o.jsx)(r.xu,{marginBottom:4,marginStart:2,children:(0,o.jsx)(r.X6,{size:"500",children:i})}),(0,o.jsxs)(r.kC,{width:"100%",minHeight:c?void 0:"calc(100vh - 249px)",height:c?"calc(100vh - 249px)":void 0,overflow:c?"hidden":"visible",children:[(0,o.jsx)(r.xu,{width:280,minWidth:280,color:"light",marginEnd:2,rounding:4,paddingX:2,paddingY:4,height:c?"100%":void 0,overflow:c?"hidden":"visible",borderStyle:"sm",dangerouslySetInlineStyle:{__style:{borderColor:"var(--color-gray-roboflow-200)"}},children:a}),(0,o.jsx)(r.xu,{display:null==u||null===(t=u.content)||void 0===t?void 0:t.display,width:"grow",flex:"grow",color:"light",minWidth:660,rounding:4,paddingY:4,borderStyle:"sm",dangerouslySetInlineStyle:{__style:{borderColor:"var(--color-gray-roboflow-200)"}},children:(0,o.jsxs)(r.xu,{display:null==u||null===(n=u.content)||void 0===n?void 0:n.display,overflow:c?"auto":"visible",height:c?"100%":void 0,flex:c?void 0:"grow",paddingX:4,children:[l,(0,o.jsx)(r.xu,{height:2})]})})]})]})}},26079:function(e,t,n){"use strict";var r=n(658379),o=n(249444),i=n(536042),a=n(363378),l=n.n(a),c=n(788739),u=n(11739),s=n(389282);function d(){var e=(0,i.ZP)();return(0,s.jsx)(u.Z,{header:e._('Your ad accounts list will appear here', '[m10n]AdAccountsTable.emptyState.title', 'Header explaining where ad accounts will go once added'),description:e._('You can manage permissions to your ad accounts', '[m10n]AdAccountsTable.emptyState.description', 'Description explaining what you can do on ad accounts table'),image:(0,s.jsx)(o.Ee,{alt:e._('Example of ad accounts', '[m10n]AdAccountsTable.emptyState.image', 'Alternate text for image that shows an example of ad accounts'),src:l(),naturalHeight:112,naturalWidth:418,color:"#FFF"})})}t.Z=function(e){var t=e.pageType,n=e.adAccounts,o=e.adAccountsIsLoading,a=e.adAccountsCurrentPageSelector,l=e.adAccountsTotalCountSelector,u=e.adAccountsPageSizeSelector,f=e.adAccountsSearchTermSelector,h=e.adAccountsFetchData,m=e.adAccountsColumnDefs,_=e.adAccountsTableConfiguration,y=e.adAccountsOnRowClick,p=e.owners,g=e.ownersError,b=e.searchFieldText,v=e.emptyState,x=(0,i.ZP)(),A=(0,r.useMemo)((function(){return p?[{name:"owner",label:x._('Owners', '[m10n]AdAccountsTable.filter.owner', 'Name for owners filter'),description:x._('Select which owners ad accounts you would like to see', '[m10n]AdAccountsTable.filter.ownerdescription', 'describe owner filter'),options:p,responseType:c.h.MULTISELECT}]:[]}),[p,x]);return(0,s.jsx)(c.Z,{pageType:t,searchPlaceholder:null!=b?b:x._('Search ad accounts', '[m10n]AdAccountsTable.search', 'Placeholder text to hint user to search for ad accounts by name or by business ID'),emptyState:v||(0,s.jsx)(d,{}),columnDefs:m,data:n,isLoading:o,fetchData:null!=h?h:function(){},searchTermSelector:f||(null==_?void 0:_.dataSearchTermSelector),currentPageSelector:a||(null==_?void 0:_.dataCurrentPageSelector),pageSizeSelector:u||(null==_?void 0:_.dataPageSizeSelector),totalCountSelector:l||(null==_?void 0:_.dataTotalCountSelector),onRowClick:y,filters:A,filtersError:g})}},923917:function(e,t,n){"use strict";n.d(t,{XI:function(){return a},YZ:function(){return c},rc:function(){return l},sU:function(){return d}});var r=n(658379);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(c){l=!0,o=c}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){var t=o((0,r.useState)(!1),2),n=t[0],i=t[1],a=function(){return i(!0)},l=function(){return i(!1)};return(0,r.useEffect)((function(){var t=e.current;return t&&(t.addEventListener("mouseenter",a),t.addEventListener("mouseleave",l)),function(){t&&(t.removeEventListener("mouseenter",a),t.removeEventListener("mouseleave",l))}})),n}var l=function(e){var t=(0,r.useRef)(e);return(0,r.useEffect)((function(){t.current=e})),t.current};function c(){var e=(0,r.useRef)(!0);return(0,r.useEffect)((function(){e.current=!1}),[]),e.current}function u(e,t){return Object.is(e,t)}var s=Symbol("pre-initial value");function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{equal:u},n=t.equal,o=void 0===n?u:n,i=t.delta,a=(0,r.useRef)(s),l=a.current;return(0,r.useEffect)((function(){a.current=e})),{previousValue:l,changed:l===s||!o(l,e),delta:null==i?void 0:i(l,e)}}},589665:function(e,t,n){"use strict";n.d(t,{L1:function(){return i},Rz:function(){return c},WZ:function(){return a},cI:function(){return o},fe:function(){return l},hu:function(){return r}});var r=64,o=80,i=22,a="HeaderContent",l=671,c={boxShadow:"0px 8px 8px -8px rgba(0, 0, 0, 0.1)",transition:"box-shadow 300ms ease-in-out"}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/16450-40e95f67b45bc30b.js.map