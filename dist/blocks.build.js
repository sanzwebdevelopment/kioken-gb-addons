!function(e){function t(a){if(n[a])return n[a].exports;var l=n[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,n){"use strict";n.d(t,"f",function(){return a}),n.d(t,"e",function(){return l}),n.d(t,"d",function(){return r}),n.d(t,"b",function(){return o}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return u});var a=kioken_page_options_params.show_pb,l=kioken_page_options_params.pbgc,r=kioken_page_options_params.pbg_opacity,o=kioken_page_options_params.pb_height,i=kioken_page_options_params.pb_txtcolor,u="undefined"!==typeof kioken_theme_pro},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(2)},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(3),i=(n(0),n(8)),u=n(9),c=(n.n(u),function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()),p=wp.i18n.__,s=wp.plugins.registerPlugin,m=wp.editPost,d=m.PluginSidebar,f=m.PluginSidebarMoreMenuItem,b=wp.element,h=b.Component,g=b.Fragment,w=wp.components,_=(w.PanelBody,w.TextControl,wp.data);_.select,_.dispatch,_.withSelect,_.withDispatch,wp.compose.compose;s("kioken-postmeta",{render:function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),c(t,[{key:"render",value:function(){return wp.element.createElement(g,null,wp.element.createElement(f,{target:"kioken-postmeta",icon:i.a.tune},p("Page Options")),wp.element.createElement(d,{isPinnable:!0,icon:i.a.tune,name:"kioken-postmeta",title:p("Page Options")},wp.element.createElement(o.b,null),wp.element.createElement(o.a,null),wp.element.createElement(o.c,{label:p("Show Page Title")}),wp.element.createElement(o.d,null)))}}]),t}(h)})},function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"c",function(){return C}),n.d(t,"d",function(){return N}),n.d(t,"a",function(){return x}),n.d(t,"b",function(){return O});var l=n(4),r=n(6),o=(n.n(r),n(0)),i=wp.i18n.__,u=wp.data,c=u.withSelect,p=u.withDispatch,s=wp.compose.compose,m=wp.blockEditor.URLInput,d=wp.components,f=d.PanelBody,b=d.RangeControl,h=d.RadioControl,g=d.SelectControl,w=d.ToggleControl,_=d.TextControl;d.Tooltip,d.BaseControl,d.HorizontalRule;console.log(o.a);var v=(s(p(function(e,t){return{setMetaFieldValue:function(n){e("core/editor").editPost({meta:a({},t.fieldName,n)})}}}),c(function(e,t){return{metaFieldValue:e("core/editor").getEditedPostAttribute("meta")[t.fieldName],label:t.label,customizerVal:t.customizerVal}}))(function(e){return wp.element.createElement(w,{label:e.label,checked:e.metaFieldValue,onChange:function(t){return e.setMetaFieldValue(t)}})}),s(p(function(e,t){return{setMetaFieldValue:function(n){e("core/editor").editPost({meta:a({},t.fieldName,n)})}}}),c(function(e,t){return{metaFieldValue:e("core/editor").getEditedPostAttribute("meta")[t.fieldName],label:t.label,help:t.help}}))(function(e){return wp.element.createElement(_,{label:e.label,value:e.metaFieldValue,help:e.help,onChange:function(t){return e.setMetaFieldValue(t)}})})),E=s(p(function(e,t){return{setMetaFieldValue:function(n){e("core/editor").editPost({meta:a({},t.fieldName,n)})}}}),c(function(e,t){return{metaFieldValue:e("core/editor").getEditedPostAttribute("meta")[t.fieldName],label:t.label}}))(function(e){return wp.element.createElement("div",null,wp.element.createElement("label",{className:"components-base-control__label"},e.label),wp.element.createElement(m,{value:e.metaFieldValue,onChange:function(t){return e.setMetaFieldValue(t)}}))}),y=s(p(function(e,t){return{setMetaFieldValue:function(n){e("core/editor").editPost({meta:a({},t.fieldName,n)})}}}),c(function(e,t){return{metaFieldValue:e("core/editor").getEditedPostAttribute("meta")[t.fieldName],label:t.label,options:t.options,customizerVal:t.customizerVal}}))(function(e){return wp.element.createElement(g,{label:e.label,value:e.metaFieldValue?e.metaFieldValue:e.customizerVal?e.customizerVal:"",className:"kt_flex_left",onChange:function(t){return e.setMetaFieldValue(t)},options:e.options})}),P=s(p(function(e,t){return{setMetaFieldValue:function(n){e("core/editor").editPost({meta:a({},t.fieldName,n)})}}}),c(function(e,t){return{metaFieldValue:e("core/editor").getEditedPostAttribute("meta")[t.fieldName],className:t.className,label:t.label,help:t.help,options:t.options,customizerVal:t.customizerVal}}))(function(e){return wp.element.createElement(h,{label:e.label,help:e.help,className:e.className,selected:e.metaFieldValue?e.metaFieldValue:e.customizerVal?e.customizerVal:"",onChange:function(t){return e.setMetaFieldValue(t)},options:e.options})}),k=s(p(function(e,t){return{setMetaFieldValue:function(n){e("core/editor").editPost({meta:a({},t.fieldName,n)})}}}),c(function(e,t){return{metaFieldValue:e("core/editor").getEditedPostAttribute("meta")[t.fieldName],label:t.label,customizerVal:t.customizerVal}}))(function(e){return wp.element.createElement(l.a,{label:e.label,value:e.metaFieldValue?e.metaFieldValue:e.customizerVal?e.customizerVal:"#000000",onChange:function(t){return e.setMetaFieldValue(t)},alpha:!0})}),V=s(p(function(e,t){return{setMetaFieldValue:function(n){e("core/editor").editPost({meta:a({},t.fieldName,n)})}}}),c(function(e,t){return{metaFieldValue:e("core/editor").getEditedPostAttribute("meta")[t.fieldName],label:t.label,help:t.help,min:t.min,max:t.max,step:t.step,customizerVal:t.customizerVal}}))(function(e){return wp.element.createElement(b,{label:e.label,value:e.metaFieldValue?e.metaFieldValue:e.customizerVal?e.customizerVal:0,onChange:function(t){return e.setMetaFieldValue(t)},help:e.help,min:e.min,step:e.step,max:e.max})}),C=s(p(function(e,t){return{setMetaFieldValue:function(t){e("core/editor").editPost({meta:{show_pagetitle:t}})}}}),c(function(e,t){return{showPageTitle:e("core/editor").getEditedPostAttribute("meta").show_pagetitle,showPB:e("core/editor").getEditedPostAttribute("meta").show_page_banner,label:t.label}}))(function(e){return"hide"===e.showPB&&wp.element.createElement(f,{initialOpen:!1,title:i("Page Title Settings")},wp.element.createElement(w,{label:e.label,checked:e.showPageTitle,onChange:function(t){return e.setMetaFieldValue(t)}}),e.showPageTitle&&wp.element.createElement(y,{label:i("Title Alignment"),fieldName:"page_title_alignment",options:[{value:"center",label:"Center"},{value:"left",label:"Left"}]}))}),N=s(p(function(e,t){return{setMetaFieldValue:function(t){e("core/editor").editPost({meta:{override_header:t}})}}}),c(function(e,t){return{overrideHeader:e("core/editor").getEditedPostAttribute("meta").override_header,label:t.label}}))(function(e){return wp.element.createElement(f,{initialOpen:!1,title:i("Site Header Settings")},wp.element.createElement(w,{label:i("Override Header Settings"),help:i("Changes the default settings you applied in the customizer for this page"),checked:e.overrideHeader,onChange:function(t){return e.setMetaFieldValue(t)}}),e.overrideHeader&&wp.element.createElement("div",null,wp.element.createElement(y,{label:i("Header Wrapper"),fieldName:"header_wrapper",options:[{value:"full-width",label:"Full Width"},{value:"wrapped",label:"Wrapped"}]}),wp.element.createElement(P,{className:"kt_radio_inline",label:i("Header Background"),fieldName:"headerbg",options:[{value:"white",label:"White"},{value:"transparent",label:"Transparent"}]}),wp.element.createElement(P,{className:"kt_radio_inline",label:i("Header Text Color"),fieldName:"header_txtcolor",options:[{value:"white",label:"White"},{value:"dark",label:"Dark"}]})))}),x=s(p(function(e,t){return{setCustomLayout:function(t){e("core/editor").editPost({meta:{custom_layout:t}})}}}),c(function(e,t){return{customLayout:e("core/editor").getEditedPostAttribute("meta").custom_layout,label:t.label}}))(function(e){return wp.element.createElement(f,{initialOpen:!1,title:i("Layout Settings")},wp.element.createElement(v,{label:i("Content Top Padding"),help:i("Enter custom top padding values (i.e 10px etc)"),fieldName:"content_toppad"}),wp.element.createElement(w,{label:i(e.customLayout?"Custom Layout Enabled":"Custom Layout"),help:e.customLayout?"":i("Enable to change the page/post layout defined in the customizer"),checked:e.customLayout,onChange:function(t){return e.setCustomLayout(t)}}),e.customLayout&&wp.element.createElement(y,{label:i("Layout"),fieldName:"layout",options:[{value:"no-sidebar",label:"No Sidebar"},{value:"sb-left",label:"Left sidebar"},{value:"sb-right",label:"Right sidebar"}]}))}),O=s(p(function(e,t){return{setShowPB:function(t){e("core/editor").editPost({meta:{show_page_banner:t}})},setOverridePB:function(t){e("core/editor").editPost({meta:{override_page_banner_settings:t}})},setEnableParallax:function(t){e("core/editor").editPost({meta:{enable_page_banner_bgparallax:t}})},setEnableAnimate:function(t){e("core/editor").editPost({meta:{enable_page_banner_animate:t}})},setShowButton:function(t){e("core/editor").editPost({meta:{enable_pb_button:t}})}}}),c(function(e,t){return{showPB:e("core/editor").getEditedPostAttribute("meta").show_page_banner,overridePB:e("core/editor").getEditedPostAttribute("meta").override_page_banner_settings,enableParallax:e("core/editor").getEditedPostAttribute("meta").enable_page_banner_bgparallax,enableAnimate:e("core/editor").getEditedPostAttribute("meta").enable_page_banner_animate,showButton:e("core/editor").getEditedPostAttribute("meta").enable_pb_button}}))(function(e){return console.log("customizer show pb is "+o.f),wp.element.createElement(f,{initialOpen:!1,title:i("Page Banner Settings")},wp.element.createElement(y,{className:"kt_radio_inline",label:i("Page Banner"),fieldName:"show_page_banner",options:[{value:"default",label:"Customizer Default"},{value:"hide",label:"Hide"},{value:"1",label:"Show"}]}),"hide"!==e.showPB&&wp.element.createElement("div",null,wp.element.createElement("div",{className:"kt_hr"}),wp.element.createElement(w,{label:i(e.overridePB?"Overriding Page Banner defaults for this page:":"Override Page Banner Defaults"),help:e.overridePB?"":i("Overrides the page banner customizer settings for this page."),checked:e.overridePB,onChange:function(t){return e.setOverridePB(t)}}),e.overridePB&&wp.element.createElement("div",null,wp.element.createElement(k,{label:i("Background Color"),fieldName:"page_banner_bgcolor",customizerVal:o.e}),wp.element.createElement(V,{label:i("Background Image Opacity"),fieldName:"page_bannerbg_opacity",min:.05,step:.05,max:1,customizerVal:o.d}),wp.element.createElement(V,{label:i("Height"),help:i("Height value in vh(viewport height)"),fieldName:"page_banner_height",min:25,step:5,max:100,customizerVal:o.b}),wp.element.createElement(P,{className:"kt_radio_inline",label:i("Text Color"),fieldName:"page_banner_text_color",options:[{value:"white",label:"White"},{value:"dark",label:"Dark"}],customizerVal:o.c}),o.a&&wp.element.createElement("div",null,wp.element.createElement(w,{label:i(e.enableParallax?"Parallax Effect Enabled":"Enable Parallax Effect"),help:e.enableParallax?"":i("Applies a parallax effect to title and background image on scroll "),checked:e.enableParallax,onChange:function(t){return e.setEnableParallax(t)}}),wp.element.createElement(w,{label:i(e.enableAnimate?"Animated Contents Enabled":"Enable Animated Content"),help:e.enableAnimate?"":i("Animates the title and other content on page load"),checked:e.enableAnimate,onChange:function(t){return e.setEnableAnimate(t)}}),wp.element.createElement(f,{initialOpen:!0,title:i("Page Banner Content")},e.enableAnimate&&wp.element.createElement("div",null,wp.element.createElement(v,{label:i("Animated Title Line 1"),fieldName:"pb_title_line_1"}),wp.element.createElement(v,{label:i("Animated Title Line 2"),fieldName:"pb_title_line_2"}),wp.element.createElement(v,{label:i("Animated Title Line 3"),fieldName:"pb_title_line_3"}),wp.element.createElement("div",{className:"kt_hr"})),wp.element.createElement(v,{label:i("Subtitle"),fieldName:"pagebanner_subtitle"}),wp.element.createElement(y,{label:i("Subtitle Decoration"),fieldName:"page_banner_subtitle_around",options:[{value:"line",label:"Line"},{value:"square",label:"Square"},{value:"circle",label:"Circle"}]}),wp.element.createElement(w,{label:i(e.showButton?"Displaying Button":"Show Button"),help:e.showButton?"":i("Displays a call to action button"),checked:e.showButton,onChange:function(t){return e.setShowButton(t)}}),e.showButton&&wp.element.createElement("div",null,wp.element.createElement(E,{label:i("Button Link"),fieldName:"pb_button_url"}),wp.element.createElement(v,{label:i("Button Text"),fieldName:"pb_button_text"}),wp.element.createElement(y,{label:i("Button Style"),fieldName:"pb_button_style",options:[{value:"std",label:"Standard"},{value:"bavarian",label:"Bavarian Style"}]})))))))})},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(5),i=n.n(o),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=wp.components.ColorPicker,p=wp.element.Component,s=wp.i18n.__,m=wp.components,d=m.Dropdown,f=m.Tooltip,b=m.BaseControl,h=wp.blockEditor.ColorPalette,g=function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),u(t,[{key:"render",value:function(){var e=this.props,t=e.value,n=e.onChange,a=e.label,l=e.help,r=e.alpha,o=void 0!==r&&r;return wp.element.createElement(b,{label:a,help:l,className:"kioken-component-color-picker-wrapper"},wp.element.createElement(d,{className:i()("components-color-palette__item-wrapper",t?"":"components-color-palette__custom-color"),contentClassName:"components-color-palette__picker",position:"bottom center",renderToggle:function(e){var n=e.isOpen,a=e.onToggle;return wp.element.createElement(f,{text:s("Custom color picker")},wp.element.createElement("button",{type:"button","aria-expanded":n,className:"components-color-palette__item",onClick:a,"aria-label":s("Custom color picker"),style:{color:t||""}},wp.element.createElement("span",{className:"components-color-palette__custom-color-gradient"})))},renderContent:function(){return wp.element.createElement("div",{className:"kioken-component-color-picker"},wp.element.createElement(c,{color:t,onChangeComplete:function(e){var t=void 0;if("undefined"===typeof e.rgb||1===e.rgb.a)t=e.hex;else{var a=e.rgb;t="rgba("+a.r+", "+a.g+", "+a.b+", "+a.a+")"}n(t)},disableAlpha:!o}),wp.element.createElement(b,{label:s("Color palette"),className:"kioken-component-color-picker-palette"},wp.element.createElement(h,{value:t,onChange:function(e){return n(e)},disableCustomColors:!0})))}}))}}]),t}(p);t.a=g},function(e,t,n){var a,l;!function(){"use strict";var n=function(){function e(){}function t(e,t){for(var n=t.length,a=0;a<n;++a)r(e,t[a])}function n(e,t){e[t]=!0}function a(e,t){for(var n in t)i.call(t,n)&&(e[n]=!!t[n])}function l(e,t){for(var n=t.split(u),a=n.length,l=0;l<a;++l)e[n[l]]=!0}function r(e,r){if(r){var o=typeof r;"string"===o?l(e,r):Array.isArray(r)?t(e,r):"object"===o?a(e,r):"number"===o&&n(e,r)}}function o(){for(var n=arguments.length,a=Array(n),l=0;l<n;l++)a[l]=arguments[l];var r=new e;t(r,a);var o=[];for(var i in r)r[i]&&o.push(i);return o.join(" ")}e.prototype=Object.create(null);var i={}.hasOwnProperty,u=/\s+/;return o}();"undefined"!==typeof e&&e.exports?(n.default=n,e.exports=n):(a=[],void 0!==(l=function(){return n}.apply(t,a))&&(e.exports=l))}()},function(e,t,n){e.exports=function(e){function t(a){if(n[a])return n[a].exports;var l=n[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,t),l.l=!0,l.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t){e.exports=n(7)},function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t){for(var n=[],a=0;a<e;a++)n[a]=c.default.createElement(c.default.Fragment,{key:a},t);return n}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(0),c=function(e){return e&&e.__esModule?e:{default:e}}(u),p=function(e){function t(){return a(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return r(t,e),i(t,[{key:"render",value:function(){var e=this.props.n,t=void 0===e?5:e;return c.default.createElement(c.default.Fragment,null,o(t,this.props.children))}}]),t}(u.Component);t.default=p}])},function(e,t){e.exports=React},function(e,t,n){"use strict";var a={};a.tune=wp.element.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},wp.element.createElement("path",{className:"fill-none",fill:"none",d:"M0 0h24v24H0V0z"}),wp.element.createElement("path",{d:"M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"})),t.a=a},function(e,t){}]);