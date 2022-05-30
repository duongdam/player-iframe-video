/*! For license information please see main.8c7acf8e.chunk.js.LICENSE.txt */
(this["webpackJsonpplayer-iframe-video-example"]=this["webpackJsonpplayer-iframe-video-example"]||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);n(4);var r=n(0),o=n.n(r),i=n(5),a=n.n(i),u=n(6),c=(n(14),n(1)),l=function(){var e=Object(c.jsx)("iframe",{width:"100%",height:"100%",src:"https://player.vimeo.com/video/422883518?h=aee925f4ae&badge=0&autopause=0&player_id=0&app_id=58479&loop=1",frameBorder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowFullScreen:!0,title:"test player iframe vimeo"});return Object(c.jsx)("div",{className:"root",children:Object(c.jsx)("div",{className:"divRoot",children:Object(c.jsx)(u.a,{id:"iframe-vimeo-player-test",iFrame:e})})})},s=o.a.memo(l);a.a.render(Object(c.jsx)(s,{}),document.getElementById("root"))},4:function(e,t,n){},6:function(e,t,n){"use strict";(function(e,r){var o=n(0),i=n.n(o),a="_5nh0n",u="_1WnES";function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s="undefined"!==typeof e&&"[object global]"==={}.toString.call(e);function f(e,t){return 0===e.indexOf(t.toLowerCase())?e:"".concat(t.toLowerCase()).concat(e.substr(0,1).toUpperCase()).concat(e.substr(1))}function d(e){return Boolean(e&&1===e.nodeType&&"nodeName"in e&&e.ownerDocument&&e.ownerDocument.defaultView)}function h(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function v(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,r=t||n;if(!r)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(h(r))return"https://vimeo.com/".concat(r);if(v(r))return r.replace("http:","https:");if(t)throw new TypeError("\u201c".concat(t,"\u201d is not a valid video id."));throw new TypeError("\u201c".concat(r,"\u201d is not a vimeo.com url."))}var p="undefined"!==typeof Array.prototype.indexOf,y="undefined"!==typeof window&&"undefined"!==typeof window.postMessage;if(!s&&(!p||!y))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var g="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof e?e:"undefined"!==typeof self?self:{};!function(e){if(!e.WeakMap){var t=Object.prototype.hasOwnProperty,n=function(e,t,n){Object.defineProperty?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n};e.WeakMap=function(){function e(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(n(this,"_id",i("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function o(e,n){if(!r(e)||!t.call(e,"_id"))throw new TypeError(n+" method called on incompatible receiver "+typeof e)}function i(e){return e+"_"+a()+"."+a()}function a(){return Math.random().toString().substring(2)}return n(e.prototype,"delete",(function(e){if(o(this,"delete"),!r(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)})),n(e.prototype,"get",(function(e){if(o(this,"get"),r(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}})),n(e.prototype,"has",(function(e){if(o(this,"has"),!r(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)})),n(e.prototype,"set",(function(e,t){if(o(this,"set"),!r(e))throw new TypeError("Invalid value used as weak map key");var i=e[this._id];return i&&i[0]===e?(i[1]=t,this):(n(e,this._id,[e,t]),this)})),n(e,"_polyfill",!0),e}()}function r(e){return Object(e)===e}}("undefined"!==typeof self?self:"undefined"!==typeof window?window:g);var w=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){var t,n,o;o=function(){var e,t,n,o=Object.prototype.toString,i="undefined"!=typeof r?function(e){return r(e)}:setTimeout;try{Object.defineProperty({},"x",{}),e=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(y){e=function(e,t,n){return e[t]=n,e}}function a(e,r){n.add(e,r),t||(t=i(n.drain))}function u(e){var t,n=typeof e;return null==e||"object"!=n&&"function"!=n||(t=e.then),"function"==typeof t&&t}function c(){for(var e=0;e<this.chain.length;e++)l(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function l(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=u(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(y){n.reject(y)}}function s(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=u(e))?a((function(){var r=new h(n);try{t.call(e,(function(){s.apply(r,arguments)}),(function(){f.apply(r,arguments)}))}catch(y){f.call(r,y)}})):(n.msg=e,n.state=1,n.chain.length>0&&a(c,n))}catch(y){f.call(new h(n),y)}}}function f(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&a(c,t))}function d(e,t,n,r){for(var o=0;o<t.length;o++)!function(o){e.resolve(t[o]).then((function(e){n(o,e)}),r)}(o)}function h(e){this.def=e,this.triggered=!1}function v(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function m(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new v(this);this.then=function(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return r.promise=new this.constructor((function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t})),t.chain.push(r),0!==t.state&&a(c,t),r.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,(function(e){s.call(t,e)}),(function(e){f.call(t,e)}))}catch(y){f.call(t,y)}}n=function(){var e,n,r;function o(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(t,i){r=new o(t,i),n?n.next=r:e=r,n=r,r=void 0},drain:function(){var r=e;for(e=n=t=void 0;r;)r.fn.call(r.self),r=r.next}}}();var p=e({},"constructor",m,!1);return m.prototype=p,e(p,"__NPO__",0,!1),e(m,"resolve",(function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))})),e(m,"reject",(function(e){return new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))})),e(m,"all",(function(e){var t=this;return"[object Array]"!=o.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),a=0;d(t,e,(function(e,t){i[e]=t,++a===o&&n(i)}),r)}))})),e(m,"race",(function(e){var t=this;return"[object Array]"!=o.call(e)?t.reject(TypeError("Not an array")):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");d(t,e,(function(e,t){n(t)}),r)}))})),m},(n=g)[t="Promise"]=n[t]||o(),e.exports&&(e.exports=n[t])})),b=new WeakMap;function k(e,t,n){var r=b.get(e.element)||{};t in r||(r[t]=[]),r[t].push(n),b.set(e.element,r)}function E(e,t){return(b.get(e.element)||{})[t]||[]}function T(e,t,n){var r=b.get(e.element)||{};if(!r[t])return!0;if(!n)return r[t]=[],b.set(e.element,r),!0;var o=r[t].indexOf(n);return-1!==o&&r[t].splice(o,1),b.set(e.element,r),r[t]&&0===r[t].length}function _(e,t){var n=b.get(e);b.set(t,n),b.delete(e)}var P=["autopause","autoplay","background","byline","color","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return P.reduce((function(t,n){var r=e.getAttribute("data-vimeo-".concat(n));return(r||""===r)&&(t[n]=""===r?1:r),t}),t)}function F(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise((function(r,o){if(!v(e))throw new TypeError("\u201c".concat(e,"\u201d is not a vimeo.com url."));var i="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var a in t)t.hasOwnProperty(a)&&(i+="&".concat(a,"=").concat(encodeURIComponent(t[a])));var u="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;u.open("GET",i,!0),u.onload=function(){if(404!==u.status)if(403!==u.status)try{var t=JSON.parse(u.responseText);if(403===t.domain_status_code)return F(t,n),void o(new Error("\u201c".concat(e,"\u201d is not embeddable.")));r(t)}catch(i){o(i)}else o(new Error("\u201c".concat(e,"\u201d is not embeddable.")));else o(new Error("\u201c".concat(e,"\u201d was not found.")))},u.onerror=function(){var e=u.status?" (".concat(u.status,")"):"";o(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},u.send()}))}function x(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){return console.warn(t),{}}return e}function M(e,t,n){if(e.element.contentWindow&&e.element.contentWindow.postMessage){var r={method:t};void 0!==n&&(r.value=n);var o=parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/,"$1"));o>=8&&o<10&&(r=JSON.stringify(r)),e.element.contentWindow.postMessage(r,e.origin)}}function C(e,t){var n,r=[];if((t=x(t)).event){if("error"===t.event)E(e,t.data.method).forEach((function(n){var r=new Error(t.data.message);r.name=t.data.name,n.reject(r),T(e,t.data.method,n)}));r=E(e,"event:".concat(t.event)),n=t.data}else if(t.method){var o=function(e,t){var n=E(e,t);if(n.length<1)return!1;var r=n.shift();return T(e,t,r),r}(e,t.method);o&&(r.push(o),n=t.value)}r.forEach((function(t){try{if("function"===typeof t)return void t.call(e,n);t.resolve(n)}catch(r){}}))}var O=new WeakMap,S=new WeakMap,q={},A=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(c(this,e),window.jQuery&&t instanceof jQuery&&(t.length>1&&window.console&&console.warn&&console.warn("A jQuery object with multiple elements was passed, using the first element."),t=t[0]),"undefined"!==typeof document&&"string"===typeof t&&(t=document.getElementById(t)),!d(t))throw new TypeError("You must pass either a valid element or a valid id.");if("IFRAME"!==t.nodeName){var o=t.querySelector("iframe");o&&(t=o)}if("IFRAME"===t.nodeName&&!v(t.getAttribute("src")||""))throw new Error("The player element passed isn\u2019t a Vimeo embed.");if(O.has(t))return O.get(t);this._window=t.ownerDocument.defaultView,this.element=t,this.origin="*";var i=new w((function(e,o){if(n._onMessage=function(t){if(v(t.origin)&&n.element.contentWindow===t.source){"*"===n.origin&&(n.origin=t.origin);var r=x(t.data);if(r&&"error"===r.event&&r.data&&"ready"===r.data.method){var i=new Error(r.data.message);return i.name=r.data.name,void o(i)}var a=r&&"ready"===r.event,u=r&&"ping"===r.method;if(a||u)return n.element.setAttribute("data-ready","true"),void e();C(n,r)}},n._window.addEventListener("message",n._onMessage),"IFRAME"!==n.element.nodeName){var i=j(t,r);N(m(i),i,t).then((function(e){var r=F(e,t);return n.element=r,n._originalElement=t,_(t,r),O.set(n.element,n),e})).catch(o)}}));if(S.set(this,i),O.set(this.element,this),"IFRAME"===this.element.nodeName&&M(this,"ping"),q.isEnabled){var a=function(){return q.exit()};this.fullscreenchangeHandler=function(){q.isFullscreen?k(n,"event:exitFullscreen",a):T(n,"event:exitFullscreen",a),n.ready().then((function(){M(n,"fullscreenchange",q.isFullscreen)}))},q.on("fullscreenchange",this.fullscreenchangeHandler)}return this}var t,n,r;return t=e,n=[{key:"callMethod",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new w((function(r,o){return t.ready().then((function(){k(t,e,{resolve:r,reject:o}),M(t,e,n)})).catch(o)}))}},{key:"get",value:function(e){var t=this;return new w((function(n,r){return e=f(e,"get"),t.ready().then((function(){k(t,e,{resolve:n,reject:r}),M(t,e)})).catch(r)}))}},{key:"set",value:function(e,t){var n=this;return new w((function(r,o){if(e=f(e,"set"),void 0===t||null===t)throw new TypeError("There must be a value to set.");return n.ready().then((function(){k(n,e,{resolve:r,reject:o}),M(n,e,t)})).catch(o)}))}},{key:"on",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(!t)throw new TypeError("You must pass a callback function.");if("function"!==typeof t)throw new TypeError("The callback must be a function.");0===E(this,"event:".concat(e)).length&&this.callMethod("addEventListener",e).catch((function(){})),k(this,"event:".concat(e),t)}},{key:"off",value:function(e,t){if(!e)throw new TypeError("You must pass an event name.");if(t&&"function"!==typeof t)throw new TypeError("The callback must be a function.");T(this,"event:".concat(e),t)&&this.callMethod("removeEventListener",e).catch((function(e){}))}},{key:"loadVideo",value:function(e){return this.callMethod("loadVideo",e)}},{key:"ready",value:function(){var e=S.get(this)||new w((function(e,t){t(new Error("Unknown player. Probably unloaded."))}));return w.resolve(e)}},{key:"addCuePoint",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.callMethod("addCuePoint",{time:e,data:t})}},{key:"removeCuePoint",value:function(e){return this.callMethod("removeCuePoint",e)}},{key:"enableTextTrack",value:function(e,t){if(!e)throw new TypeError("You must pass a language.");return this.callMethod("enableTextTrack",{language:e,kind:t})}},{key:"disableTextTrack",value:function(){return this.callMethod("disableTextTrack")}},{key:"pause",value:function(){return this.callMethod("pause")}},{key:"play",value:function(){return this.callMethod("play")}},{key:"requestFullscreen",value:function(){return q.isEnabled?q.request(this.element):this.callMethod("requestFullscreen")}},{key:"exitFullscreen",value:function(){return q.isEnabled?q.exit():this.callMethod("exitFullscreen")}},{key:"getFullscreen",value:function(){return q.isEnabled?w.resolve(q.isFullscreen):this.get("fullscreen")}},{key:"requestPictureInPicture",value:function(){return this.callMethod("requestPictureInPicture")}},{key:"exitPictureInPicture",value:function(){return this.callMethod("exitPictureInPicture")}},{key:"getPictureInPicture",value:function(){return this.get("pictureInPicture")}},{key:"unload",value:function(){return this.callMethod("unload")}},{key:"destroy",value:function(){var e=this;return new w((function(t){if(S.delete(e),O.delete(e.element),e._originalElement&&(O.delete(e._originalElement),e._originalElement.removeAttribute("data-vimeo-initialized")),e.element&&"IFRAME"===e.element.nodeName&&e.element.parentNode&&(e.element.parentNode.parentNode&&e._originalElement&&e._originalElement!==e.element.parentNode?e.element.parentNode.parentNode.removeChild(e.element.parentNode):e.element.parentNode.removeChild(e.element)),e.element&&"DIV"===e.element.nodeName&&e.element.parentNode){e.element.removeAttribute("data-vimeo-initialized");var n=e.element.querySelector("iframe");n&&n.parentNode&&(n.parentNode.parentNode&&e._originalElement&&e._originalElement!==n.parentNode?n.parentNode.parentNode.removeChild(n.parentNode):n.parentNode.removeChild(n))}e._window.removeEventListener("message",e._onMessage),q.isEnabled&&q.off("fullscreenchange",e.fullscreenchangeHandler),t()}))}},{key:"getAutopause",value:function(){return this.get("autopause")}},{key:"setAutopause",value:function(e){return this.set("autopause",e)}},{key:"getBuffered",value:function(){return this.get("buffered")}},{key:"getCameraProps",value:function(){return this.get("cameraProps")}},{key:"setCameraProps",value:function(e){return this.set("cameraProps",e)}},{key:"getChapters",value:function(){return this.get("chapters")}},{key:"getCurrentChapter",value:function(){return this.get("currentChapter")}},{key:"getColor",value:function(){return this.get("color")}},{key:"setColor",value:function(e){return this.set("color",e)}},{key:"getCuePoints",value:function(){return this.get("cuePoints")}},{key:"getCurrentTime",value:function(){return this.get("currentTime")}},{key:"setCurrentTime",value:function(e){return this.set("currentTime",e)}},{key:"getDuration",value:function(){return this.get("duration")}},{key:"getEnded",value:function(){return this.get("ended")}},{key:"getLoop",value:function(){return this.get("loop")}},{key:"setLoop",value:function(e){return this.set("loop",e)}},{key:"setMuted",value:function(e){return this.set("muted",e)}},{key:"getMuted",value:function(){return this.get("muted")}},{key:"getPaused",value:function(){return this.get("paused")}},{key:"getPlaybackRate",value:function(){return this.get("playbackRate")}},{key:"setPlaybackRate",value:function(e){return this.set("playbackRate",e)}},{key:"getPlayed",value:function(){return this.get("played")}},{key:"getQualities",value:function(){return this.get("qualities")}},{key:"getQuality",value:function(){return this.get("quality")}},{key:"setQuality",value:function(e){return this.set("quality",e)}},{key:"getSeekable",value:function(){return this.get("seekable")}},{key:"getSeeking",value:function(){return this.get("seeking")}},{key:"getTextTracks",value:function(){return this.get("textTracks")}},{key:"getVideoEmbedCode",value:function(){return this.get("videoEmbedCode")}},{key:"getVideoId",value:function(){return this.get("videoId")}},{key:"getVideoTitle",value:function(){return this.get("videoTitle")}},{key:"getVideoWidth",value:function(){return this.get("videoWidth")}},{key:"getVideoHeight",value:function(){return this.get("videoHeight")}},{key:"getVideoUrl",value:function(){return this.get("videoUrl")}},{key:"getVolume",value:function(){return this.get("volume")}},{key:"setVolume",value:function(e){return this.set("volume",e)}}],n&&l(t.prototype,n),r&&l(t,r),e}();s||(q=function(){var e=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,r=t.length,o={};n<r;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)o[t[0][n]]=e[n];return o}return!1}(),t={fullscreenchange:e.fullscreenchange,fullscreenerror:e.fullscreenerror},n={request:function(t){return new Promise((function(r,o){var i=function e(){n.off("fullscreenchange",e),r()};n.on("fullscreenchange",i);var a=(t=t||document.documentElement)[e.requestFullscreen]();a instanceof Promise&&a.then(i).catch(o)}))},exit:function(){return new Promise((function(t,r){if(n.isFullscreen){var o=function e(){n.off("fullscreenchange",e),t()};n.on("fullscreenchange",o);var i=document[e.exitFullscreen]();i instanceof Promise&&i.then(o).catch(r)}else t()}))},on:function(e,n){var r=t[e];r&&document.addEventListener(r,n)},off:function(e,n){var r=t[e];r&&document.removeEventListener(r,n)}};return Object.defineProperties(n,{isFullscreen:{get:function(){return Boolean(document[e.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[e.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[e.fullscreenEnabled])}}}),n}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach((function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=j(e);N(m(t),t,e).then((function(t){return F(t,e)})).catch(n)}catch(r){n(r)}}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;var t=function(t){if(v(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),r=0;r<n.length;r++)if(n[r].contentWindow===t.source){n[r].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}};window.addEventListener("message",t)}}());var I=i.a.memo((function(e){var t=e.id,n=e.iFrame,r=e.height,c=void 0===r?"100%":r,l=e.isMain,s=void 0===l?"":l,f=Object(o.useRef)(),d=function(e,t){void 0===t&&(t="0px");var n=Object(o.useState)(!1),r=n[0],i=n[1];return Object(o.useEffect)((function(){var n=new IntersectionObserver((function(e){var t=e[0];i(t.isIntersecting)}),{rootMargin:t});return null!==e&&void 0!==e&&e.current&&n.observe(e.current),function(){null!==e&&void 0!==e&&e.current&&n.unobserve(e.current)}}),[]),r}(f);return Object(o.useEffect)((function(){if(t){var e=document.querySelector("#"+t+" iframe");if(e){var n=new A(e);n.ready().then((function(e){return console.log(e)})),d?(n.play().then((function(){})).catch((function(e){console.log(e)})),n.on("ended",(function(){s&&setTimeout((function(){var e=document.getElementById(s),t=e.offsetTop;if(e)return window.scrollTo({top:t,left:t+e.offsetHeight,behavior:"smooth"})}),500)}))):n.pause().then((function(e){console.log("pause",e)})).catch((function(e){return console.log(e)}))}}}),[d,t]),i.a.createElement("div",{ref:f,className:s?u:a,id:t,style:{height:c}},n)}));t.a=I}).call(this,n(3),n(11).setImmediate)}},[[16,1,2]]]);
//# sourceMappingURL=main.8c7acf8e.chunk.js.map