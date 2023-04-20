(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var h="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var n=ba(this);function ca(a,b){if(b)a:{var c=n;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&h(c,a,{configurable:!0,writable:!0,value:b})}}
ca("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}function c(f,g){this.g=f;h(this,"description",{configurable:!0,writable:!0,value:g})}if(a)return a;c.prototype.toString=function(){return this.g};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
ca("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=n[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&h(d.prototype,a,{configurable:!0,writable:!0,value:function(){return da(aa(this))}})}return a});function da(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function p(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function ea(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}var fa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},q;
if("function"==typeof Object.setPrototypeOf)q=Object.setPrototypeOf;else{var r;a:{var ha={a:!0},ia={};try{ia.__proto__=ha;r=ia.a;break a}catch(a){}r=!1}q=r?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=q;function t(){this.i=!1;this.g=null;this.o=void 0;this.j=1;this.m=0;this.h=null}function u(a){if(a.i)throw new TypeError("Generator is already running");a.i=!0}t.prototype.l=function(a){this.o=a};
function w(a,b){a.h={R:b,S:!0};a.j=a.m}t.prototype.return=function(a){this.h={return:a};this.j=this.m};function ka(a){this.g=new t;this.h=a}function la(a,b){u(a.g);var c=a.g.g;if(c)return x(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);a.g.return(b);return y(a)}
function x(a,b,c,d){try{var e=b.call(a.g.g,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.i=!1,e;var f=e.value}catch(g){return a.g.g=null,w(a.g,g),y(a)}a.g.g=null;d.call(a.g,f);return y(a)}function y(a){for(;a.g.j;)try{var b=a.h(a.g);if(b)return a.g.i=!1,{value:b.value,done:!1}}catch(c){a.g.o=void 0,w(a.g,c)}a.g.i=!1;if(a.g.h){b=a.g.h;a.g.h=null;if(b.S)throw b.R;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function ma(a){this.next=function(b){u(a.g);a.g.g?b=x(a,a.g.g.next,b,a.g.l):(a.g.l(b),b=y(a));return b};this.throw=function(b){u(a.g);a.g.g?b=x(a,a.g.g["throw"],b,a.g.l):(w(a.g,b),b=y(a));return b};this.return=function(b){return la(a,b)};this[Symbol.iterator]=function(){return this}}function na(a){function b(d){return a.next(d)}function c(d){return a.throw(d)}new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}f(a.next())})}var z=this||self;
function oa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function pa(a,b){function c(){}c.prototype=b.prototype;a.H=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ma=function(d,e,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[e].apply(d,g)}}function A(a){return a};function B(a,b,c){return a.hasAttribute(b)?a.getAttribute(b):c};var qa=["ICALENDAR","GOOGLE","WINDOWS_LIVE","YAHOO"],C={aa:"description",ca:"end-date",da:"end-time",ea:"event-title",LOCATION:"location",ga:"start-date",ha:"start-time",ia:"timezone",ICALENDAR:"icalendar",GOOGLE:"google",WINDOWS_LIVE:"windows-live",YAHOO:"yahoo",BG_COLOR:"bg-color",FONT_COLOR:"font-color",J:"font-family",K:"font-size",L:"font-weight",P:"highlight-color"},ra={ICALENDAR:"gwd-icalendar-",GOOGLE:"gwd-google-calendar-",WINDOWS_LIVE:"gwd-windows-live-calendar-",YAHOO:"gwd-yahoo-calendar-"},
sa={ICALENDAR:"iCalendar",GOOGLE:"Google",WINDOWS_LIVE:"Windows Live",YAHOO:"Yahoo"},ta={BG_COLOR:"#fff",FONT_COLOR:"#000",Y:"0px 5px 10px rgba(0, 0, 0, 0.292969)",Z:"0px -5px 10px rgba(0, 0, 0, 0.292969)",J:"arial, helvetica, sans-serif",K:"12pt",L:"normal",fa:"hidden",P:"#e0e0e0",la:"visible"},ua={V:"background-color",W:"border-color",X:"box-shadow",COLOR:"color",ba:"display",J:"font-family",K:"font-size",L:"font-weight",ja:"top",ka:"visibility"};function va(a,b,c){c=void 0===c?null:c;var d=document.createEvent("CustomEvent");d.initCustomEvent(a,!0,!0,c);b.dispatchEvent(d);return d};var wa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1};var D;function xa(){if(void 0===D){var a=null,b=z.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:A,createScript:A,createScriptURL:A})}catch(c){z.console&&z.console.error(c.message)}D=a}else D=a}return D};function E(a,b){this.i=b===ya?a:""}E.prototype.toString=function(){return this.i+""};E.prototype.h=!0;E.prototype.g=function(){return this.i.toString()};function za(a){return a instanceof E&&a.constructor===E?a.i:"type_error:TrustedResourceUrl"}var ya={};function F(a){var b=xa();a=b?b.createScriptURL(a):a;return new E(a,ya)};var Aa=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Ba(){var a=G(),b="";H("Windows")?(b=/Windows (?:NT|Phone) ([0-9.]+)/,b=(a=b.exec(a))?a[1]:"0.0"):Ca()||H("iPad")||H("iPod")?(b=/(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/,b=(a=b.exec(a))&&a[1].replace(/_/g,".")):H("Macintosh")?(b=/Mac OS X ([0-9_.]+)/,b=(a=b.exec(a))?a[1].replace(/_/g,"."):"10"):-1!=G().toLowerCase().indexOf("kaios")?(b=/(?:KaiOS)\/(\S+)/i,b=(a=b.exec(a))&&a[1]):H("Android")?(b=/Android\s+([^\);]+)(\)|;)/,b=(a=b.exec(a))&&a[1]):H("CrOS")&&(b=/(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/,
b=(a=b.exec(a))&&a[1]);a=0;b=Aa(String(b||"")).split(".");for(var c=Aa("16").split("."),d=Math.max(b.length,c.length),e=0;0==a&&e<d;e++){var f=b[e]||"",g=c[e]||"";do{f=/(\d*)(\D*)(.*)/.exec(f)||["","","",""];g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];if(0==f[0].length&&0==g[0].length)break;a=Da(0==f[1].length?0:parseInt(f[1],10),0==g[1].length?0:parseInt(g[1],10))||Da(0==f[2].length,0==g[2].length)||Da(f[2],g[2]);f=f[3];g=g[3]}while(0==a)}return a}function Da(a,b){return a<b?-1:a>b?1:0};function I(a,b){this.i=b===J?a:""}I.prototype.toString=function(){return this.i.toString()};I.prototype.h=!0;I.prototype.g=function(){return this.i.toString()};function Ea(a){return a instanceof I&&a.constructor===I?a.i:"type_error:SafeUrl"}var Fa=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,J={},Ga=new I("about:invalid#zClosurez",J);function G(){var a=z.navigator;return a&&(a=a.userAgent)?a:""}function H(a){return-1!=G().indexOf(a)};function Ha(){return(H("Chrome")||H("CriOS"))&&!H("Edge")||H("Silk")};var Ia={};function K(a,b){this.i=b===Ia?a:"";this.h=!0}K.prototype.g=function(){return this.i.toString()};K.prototype.toString=function(){return this.i.toString()};function Ja(a){var b=xa();a=b?b.createHTML(a):a;return new K(a,Ia)};var Ka=/^[\w+/_-]+[=]{0,2}$/;function La(){var a=z.document;return a.querySelector?(a=a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&Ka.test(a)?a:"":""};function L(){return window.navigator.userAgent||""};function Ma(){return"ontouchstart"in window||0<window.navigator.MaxTouchPoints||0<window.navigator.msMaxTouchPoints};/*

 SPDX-License-Identifier: Apache-2.0
*/
function Na(a){var b=void 0===b?{}:b;a=a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&apos;");b.oa&&(a=a.replace(/(^|[\r\n\t ]) /g,"$1&#160;"));b.na&&(a=a.replace(/(\r\n|\n|\r)/g,"<br>"));b.pa&&(a=a.replace(/(\t+)/g,'<span style="white-space:pre">$1</span>'));return Ja(a)};var Oa;try{new URL("s://g"),Oa=!0}catch(a){Oa=!1}var Pa=Oa;function Qa(a){var b=za(Ra).toString();if(/#/.test(b))throw Error("");var c=/\?/.test(b)?"&":"?";a.forEach(function(d,e){d=d instanceof Array?d:[d];for(var f=0;f<d.length;f++){var g=d[f];null!==g&&void 0!==g&&(b+=c+encodeURIComponent(e)+"="+encodeURIComponent(String(g)),c="&")}});return F(b)};function Sa(a){this.T=a}function M(a){return new Sa(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}var Ta=[M("data"),M("http"),M("https"),M("mailto"),M("ftp"),new Sa(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function Ca(){return H("iPhone")&&!H("iPod")&&!H("iPad")};function Ua(a){Ua[" "](a);return a}Ua[" "]=function(){};var Va=H("Gecko")&&!(-1!=G().toLowerCase().indexOf("webkit")&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge");function Wa(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)};function Xa(a,b){this.type=a;this.target=b}Xa.prototype.g=function(){};var Ya=function(){if(!z.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});try{z.addEventListener("test",function(){},b),z.removeEventListener("test",function(){},b)}catch(c){}return a}();function N(a){Xa.call(this,a?a.type:"");this.relatedTarget=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;if(a){var b=this.type=a.type,c=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;var d=a.relatedTarget;if(d){if(Va){a:{try{Ua(d.nodeName);var e=!0;break a}catch(f){}e=!1}e||(d=
null)}}else"mouseover"==b?d=a.fromElement:"mouseout"==b&&(d=a.toElement);this.relatedTarget=d;c?(this.clientX=void 0!==c.clientX?c.clientX:c.pageX,this.clientY=void 0!==c.clientY?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.key=a.key||"";this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=
a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Za[a.pointerType]||"";this.state=a.state;this.h=a;a.defaultPrevented&&N.H.g.call(this)}}pa(N,Xa);var Za={2:"touch",3:"pen",4:"mouse"};N.prototype.g=function(){N.H.g.call(this);var a=this.h;a.preventDefault?a.preventDefault():a.returnValue=!1};var $a="closure_listenable_"+(1E6*Math.random()|0);var ab=0;function bb(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.h=e;this.key=++ab;this.g=this.G=!1}function cb(a){a.g=!0;a.listener=null;a.proxy=null;a.src=null;a.h=null};function O(a){this.src=a;this.g={};this.h=0}O.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.g[f];a||(a=this.g[f]=[],this.h++);var g=db(a,b,d,e);-1<g?(b=a[g],c||(b.G=!1)):(b=new bb(b,this.src,f,!!d,e),b.G=c,a.push(b));return b};O.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.g))return!1;var e=this.g[a];b=db(e,b,c,d);return-1<b?(cb(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.g[a],this.h--),!0):!1};
function db(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.g&&f.listener==b&&f.capture==!!c&&f.h==d)return e}return-1};var eb="closure_lm_"+(1E6*Math.random()|0),fb={},gb=0;function hb(){function a(c){return b.call(a.src,a.listener,c)}var b=ib;return a}
function jb(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)jb(a,b[f],c,d,e);else if(c=kb(c),a&&a[$a])a.I(b,c,oa(d)?!!d.capture:!!d,e);else{if(!b)throw Error("Invalid event type");f=oa(d)?!!d.capture:!!d;var g=lb(a);g||(a[eb]=g=new O(a));c=g.add(b,c,!0,f,e);if(!c.proxy){e=hb();c.proxy=e;e.src=a;e.listener=c;if(a.addEventListener)Ya||(d=f),void 0===d&&(d=!1),a.addEventListener(b.toString(),e,d);else if(a.attachEvent)a.attachEvent(mb(b.toString()),e);else if(a.addListener&&a.removeListener)a.addListener(e);
else throw Error("addEventListener and attachEvent are unavailable.");gb++}}}function mb(a){return a in fb?fb[a]:fb[a]="on"+a}
function ib(a,b){if(a.g)a=!0;else{b=new N(b,this);var c=a.listener,d=a.h||a.src;if(a.G&&"number"!==typeof a&&a&&!a.g){var e=a.src;if(e&&e[$a])e.g(a);else{var f=a.type,g=a.proxy;e.removeEventListener?e.removeEventListener(f,g,a.capture):e.detachEvent?e.detachEvent(mb(f),g):e.addListener&&e.removeListener&&e.removeListener(g);gb--;if(f=lb(e)){g=a.type;var k;if(k=g in f.g){k=f.g[g];var v=wa(k,a),m;(m=0<=v)&&Array.prototype.splice.call(k,v,1);k=m}k&&(cb(a),0==f.g[g].length&&(delete f.g[g],f.h--));0==
f.h&&(f.src=null,e[eb]=null)}else cb(a)}}a=c.call(d,b)}return a}function lb(a){a=a[eb];return a instanceof O?a:null}var nb="__closure_events_fn_"+(1E9*Math.random()>>>0);function kb(a){if("function"===typeof a)return a;a[nb]||(a[nb]=function(b){return a.handleEvent(b)});return a[nb]};var Ra=F("");function ob(){this.port=this.g=null;this.h=[]}ob.prototype.load=function(){var a=this,b=pb();this.g=qb(b);rb().then(function(){a.g&&document.body.appendChild(a.g)});return sb(this.g,b).then(function(c){for(a.port=c.ports[0];0<a.h.length;)c=a.h.shift(),a.port.postMessage(c.data,c.U)})};
function tb(a,b){return new Promise(function(c,d){var e=new MessageChannel;e.port1.onmessage=function(l){e.port1.onmessage=null;l=l.data;null!=l.error?d(new EvalError(l.error)):c(l.result)};for(var f=[],g=[],k=[],v=p(null!=b?b:[]),m=v.next();!m.done;m=v.next())m=m.value,f.push(m.name),g.push(m.value),m.transfer&&k.push(m.value);f={code:'var url=URL.createObjectURL(blob);var a=document.createElement("a");if(!("download" in a)){throw new Error("Downloading not supported on this browser");}a.href=url;a.download=filename;document.body.appendChild(a);a.click();setTimeout(function(){document.body.removeChild(a);URL.revokeObjectURL(url);},250);',
paramNames:f,values:g};a.port?a.port.postMessage(f,[e.port2].concat(k instanceof Array?k:ea(p(k)))):a.h.push({data:f,U:[e.port2].concat(k instanceof Array?k:ea(p(k)))})})}function pb(){var a=(window.crypto||window.msCrypto).getRandomValues(new Uint8Array(16));return Array.prototype.join.call(a,".")}function rb(){return new Promise(function(a){"loading"!=document.readyState?a():jb(document,"DOMContentLoaded",function(){a()})})}
function sb(a,b){return new Promise(function(c){function d(e){e.source===a.contentWindow&&e.data===b&&(window.removeEventListener("message",d),c(e))}window.addEventListener("message",d)})}
function qb(a){var b=Wa("IFRAME");if(!b.sandbox)throw Error("iframe sandboxes not supported");b.sandbox.value="allow-scripts";b.sandbox.supports&&b.sandbox.add&&b.sandbox.supports("allow-downloads")&&b.sandbox.add("allow-downloads");if(""==Ra){a='<!DOCTYPE html><body><input type="hidden" id="nonce" value="'+Na(a)+'" /><script nonce="';var c=La();a=a+Na(c)+'">/*\n\n Copyright The Closure Library Authors.\n SPDX-License-Identifier: Apache-2.0\n*/\nvar f=function(){for(var b=Number(this),a=[],c=b;c<arguments.length;c++)a[c-b]=arguments[c];return a},h=this||self,k=function(b){return b};/*\n\n SPDX-License-Identifier: Apache-2.0\n*/\nvar l;var m={},n=function(b,a){this.g=a===m?b:""};n.prototype.toString=function(){return this.g.toString()};var p=function(b){return b instanceof n&&b.constructor===n?b.g:"type_error:SafeScript"},q=function(b){if(void 0===l){var a=null;var c=h.trustedTypes;if(c&&c.createPolicy)try{a=c.createPolicy("goog#html",{createHTML:k,createScript:k,createScriptURL:k})}catch(d){h.console&&h.console.error(d.message)}l=a}b=(a=l)?a.createScript(b):b;return new n(b,m)};function r(b,a){b.textContent=p(a);var c,d;(c=(a=null==(d=(c=(b.ownerDocument&&b.ownerDocument.defaultView||window).document).querySelector)?void 0:d.call(c,"script[nonce]"))?a.nonce||a.getAttribute("nonce")||"":"")&&b.setAttribute("nonce",c)};var t=function(b){var a=f.apply(1,arguments),c,d;"evalCspCompatiblyData"in window||(window.evalCspCompatiblyData={index:0});var e=window.evalCspCompatiblyData.index++;window.evalCspCompatiblyData[e]={args:a,callback:function(g,u){c=g;d=u}};a=document.createElement("script");a.async=!1;a.setAttribute("data-index",e);e=q(\'"use strict";\\v(function(){var idx=parseInt((document.currentScript||Array.prototype.slice.call(document.querySelectorAll("head script[data-index]"),-1)[0]).getAttribute("data-index"),10),curEvalData=evalCspCompatiblyData[idx];delete evalCspCompatiblyData[idx];(function(){var callback=curEvalData.callback;try{callback(true,(\'+\nString(p(b))+"\\n));}catch(ex){callback(false, ex);}}).apply(this, curEvalData.args);})()");r(a,e);e=function(g){c=!1;d=g.error||g};window.addEventListener("error",e);document.head.appendChild(a);window.removeEventListener("error",e);document.head.removeChild(a);if(!c)throw d;return d};var v=document.getElementById("nonce"),w=v?v.value:(new URL(location.href)).searchParams.get("nonce");function x(){if(self.origin)return"null"==self.origin;if(""!=location.host)return!1;try{return window.parent.escape(""),!1}catch(b){return!0}}\n(function(){if(!x())throw"sandboxing error";var b=new MessageChannel;b.port1.onmessage=function(a){try{var c=t.apply(null,[q("(function("+a.data.paramNames.join(", ")+") {\\n"+a.data.code+"\\n}).apply(null, arguments)")].concat(a.data.values));a.ports[0].postMessage({result:c})}catch(d){a.ports[0].postMessage({error:d.toString()})}};window.parent.postMessage(w,"*",[b.port2])})();\n\x3c/script></body>';
c=Ja(a);a=F("data:text/html;charset=UTF-8;base64,"+btoa(c.toString()));b.srcdoc=c instanceof K&&c.constructor===K?c.i:"type_error:SafeHtml"}else a=Qa(new Map([["nonce",a]]));b.src=za(a).toString();b.style.cssText="height: 0; left: 0; position: absolute; top: 0; width: 0;";b.setAttribute("aria-hidden","true");return b};var P;function ub(){this.g=new ob}function vb(a,b){var c=void 0===c?"":c;na(new ma(new ka(function(d){P||(P=new ub,P.g.load());var e=wb(a,b,c);d.j=0;return{value:e}})))}
function wb(a,b,c){var d=P;a=a instanceof Blob?a:new Blob([a],{type:void 0===c?"":c});if(navigator.msSaveOrOpenBlob)return navigator.msSaveOrOpenBlob(a,b),xb();if(!(Ca()||H("iPad")||H("iPod"))||0<=Ba()?0:Ha()||!(!H("iPad")&&!H("iPhone")||H("Safari")&&!(Ha()||H("Coast")||H("Opera")||H("Edge")||H("Edg/")||H("OPR")||H("Firefox")||H("FxiOS")||H("Silk")||H("Android"))||Ha()||H("Coast")||H("Firefox")||H("FxiOS"))&&H("AppleWebKit")){var e=new FileReader;e.onload=function(){var f=Wa("A");var g=void 0===g?
Ta:g;a:{var k=String(e.result);g=void 0===g?Ta:g;for(var v=0;v<g.length;++v){var m=g[v];if(m instanceof Sa&&m.T(k)){k=new I(k,J);break a}}k=void 0}k=k||Ga;if(k instanceof I)var l=Ea(k);else{b:if(Pa){try{l=new URL(k)}catch(Nb){l="https:";break b}l=l.protocol}else c:{l=document.createElement("a");try{l.href=k}catch(Nb){l=void 0;break c}l=l.protocol;l=":"===l||""===l?"https:":l}l="javascript:"!==l?k:void 0}void 0!==l&&(f.href=l);f.download=b;f.click()};e.readAsDataURL(a);return xb()}return tb(d.g,[{name:"blob",
value:a,transfer:!1},{name:"filename",value:b,transfer:!1}]).then(function(){return xb()})}function xb(){return new Promise(function(a){setTimeout(a,500)})}var Q=["SafeDownloader"],R=z;Q[0]in R||"undefined"==typeof R.execScript||R.execScript("var "+Q[0]);for(var S;Q.length&&(S=Q.shift());)Q.length||void 0===ub?R[S]&&R[S]!==Object.prototype[S]?R=R[S]:R=R[S]={}:R[S]=ub;var yb=/-|:|\..*\d/g,zb=/^\D|^$/,Ab=/\d(?=pt|px|em|%)/i,Bb=/8_1_3|8_2/;function Cb(a,b,c,d,e){return c?"https://calendar.yahoo.com/?v=60&title="+a+"&st="+b+"&dur="+c+"&desc="+d+"&in_loc="+e:"https://calendar.yahoo.com/"}function T(a,b,c){va(b,c,{url:a}).detail.handled||(a instanceof I||a instanceof I||(a="object"==typeof a&&a.h?a.g():String(a),Fa.test(a)||(a="about:invalid#zClosurez"),a=new I(a,J)),z.open(Ea(a),""))}
function Db(){var a=!Ma()&&-1==L().indexOf("Chrome")&&-1!=L().indexOf("WebKit"),b=-1!=L().indexOf("iPad")&&Bb.test(L());return!!window.navigator.msSaveBlob||!a&&!b&&-1==L().indexOf("CriOS")}
function Eb(a,b){if(Db()){var c=a.D,d=a.u,e=a.v,f=a.description;a=a.location;var g=(new Date).toISOString().replace(yb,"");vb(new Blob(["BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//Add To Calendar//\nBEGIN:VEVENT\nUID:"+g+"@*.2mdn.net\nDTSTAMP:"+g+"\nDTSTART:"+d+"\nDTEND:"+e+"\nSUMMARY:"+c+"\nDESCRIPTION:"+f+"\nLOCATION:"+a+"\nEND:VEVENT\nEND:VCALENDAR"],{type:"text/calendar;charset="+document.characterSet}),c+".ics");va("icalendar",b)}}
function Fb(a,b){a="&text="+a.D+"&dates="+a.u+"/"+a.v+"&details="+a.description+"&location="+a.location;T(-1==L().indexOf("WebKit")&&-1==L().indexOf("Android")||-1==L().indexOf("Mobile")||-1!=L().indexOf("iPad")?"https://www.google.com/calendar/render?action=TEMPLATE"+a:"https://www.google.com/calendar/gpcal?#~calendar:view=e"+a,"google",b)}
function Gb(a,b){T("https://calendar.live.com/calendar/calendar.aspx?rru=addevent&summary="+a.D+"&dtstart="+a.u+"&dtend="+a.v+"&description="+a.description+"&location="+a.location,"windowslive",b)};var Hb=["-ms-","-moz-","-webkit-",""];function U(a,b,c){var d=void 0===d?!1:d;for(var e,f,g=0;g<Hb.length;g++)e=Hb[g]+b,f=(d?Hb[g]:"")+c,a.style.setProperty(e,f)};function V(a,b,c,d){this.A=a;this.B=b;this.C=c;this.h=d;this.m=this.o=this.s=this.l=this.g=null;this.i=["click","touchend"];this.j=Math.random().toString(36).substring(2,6);this.g=document.createElement("div");this.l=this.F.bind(this);this.s=this.O.bind(this);this.o=this.N.bind(this);for(a=0;a<this.C.length;a++)if(c=this.C[a],b=c.className,Db()||"gwd-icalendar-"!=b)c=document.createTextNode(c.text),d=document.createElement("gwd-taparea"),d.setAttribute("class",b+this.j),d.appendChild(c),d.addEventListener("action",
this.l),Ma()||d.addEventListener("mouseover",this.s),d.addEventListener("mouseout",this.o),this.g.appendChild(d);Ib(this);this.h.appendChild(this.g);this.m=this.I.bind(this);for(a=0;a<this.i.length;a++)document.body.addEventListener(this.i[a],this.m,!0)}
function Jb(a){for(var b=0;b<a.i.length;b++)document.body.removeEventListener(a.i[b],a.m,!0);for(b=a.g.firstChild;b;b=b.nextSibling)b.removeEventListener("action",a.l),b.removeEventListener("mouseover",a.s),b.removeEventListener("mouseout",a.o);a.i.length=0;a.m=null;a.l=null;a.s=null;a.o=null;a.h.removeChild(a.g);a.g=null;a.B=null;a.C=null;a.A=null}
function Ib(a){for(var b in ua){var c=ua[b];if("visibility"!=c){"background-color"==c||"border-color"==c?b="BG_COLOR":"color"==c&&(b="FONT_COLOR");var d=B(a.h,C[b],ta[b]);"font-size"==c&&(d=zb.test(d)||Ab.test(d)?d:d+"pt");U(a.g,c,d)}}}
function Kb(a,b){var c=a.h.offsetHeight+a.g.offsetHeight+3;c+a.h.offsetTop>a.h.parentElement.clientHeight?(U(a.g,"top","-"+c+"px"),U(a.g,"box-shadow","0px -5px 10px rgba(0, 0, 0, 0.292969)")):(U(a.g,"box-shadow","0px 5px 10px rgba(0, 0, 0, 0.292969)"),a.g.style.removeProperty("top"));U(a.g,"visibility",b?"visible":"hidden")}V.prototype.I=function(a){"visible"==this.g.style.visibility&&(a.preventDefault(),Kb(this,!1))};
V.prototype.F=function(a){var b=this.A;switch(a.target.className){case "gwd-icalendar-"+this.j:Eb(b,this.h);break;case "gwd-google-calendar-"+this.j:Fb(b,this.h);break;case "gwd-windows-live-calendar-"+this.j:Gb(b,this.h);break;case "gwd-yahoo-calendar-"+this.j:T(Cb(b.D,b.u,this.B,b.description,b.location),"yahoo",this.h)}};V.prototype.O=function(a){var b=B(this.h,"highlight-color","#e0e0e0");U(a.target,"background-color",b)};V.prototype.N=function(a){a.target.style.removeProperty("background-color")};var Lb=[],Mb=0,Ob;for(Ob in C)Lb[Mb++]=C[Ob];function W(){var a=HTMLElement.call(this)||this;a.g=null;a.s=null;a.o=null;a.h=null;a.j=!1;a.i=!1;a.l=!1;a.m=!1;a.C=a.F.bind(a);a.A=!1;return a}var X=HTMLElement;W.prototype=fa(X.prototype);W.prototype.constructor=W;if(ja)ja(W,X);else for(var Y in X)if("prototype"!=Y)if(Object.defineProperties){var Pb=Object.getOwnPropertyDescriptor(X,Y);Pb&&Object.defineProperty(W,Y,Pb)}else W[Y]=X[Y];W.H=X.prototype;
W.prototype.connectedCallback=function(){if(!this.A){if(0<this.childNodes.length)for(this.s=this.innerHTML;this.firstChild;)this.removeChild(this.firstChild);this.B=document.createElement("gwd-taparea");this.appendChild(this.B);this.A=!0}Qb(this);Rb(this);this.B.addEventListener("action",this.C)};W.prototype.disconnectedCallback=function(){this.B.removeEventListener("action",this.C);this.h&&(Jb(this.h),this.h=null);Z(this)};
W.prototype.attributeChangedCallback=function(a){if(this.A)switch(a){case "description":case "event-title":case "end-date":case "end-time":case "location":case "start-date":case "start-time":case "timezone":Qb(this);break;case "icalendar":case "google":case "windows-live":case "yahoo":Rb(this);break;case "bg-color":case "font-color":case "font-family":case "font-size":case "font-weight":this.h&&Ib(this.h)}};
W.prototype.F=function(){if(this.g){var a=this.i&&!this.j&&!this.l&&!this.m,b=this.l&&!this.j&&!this.i&&!this.m,c=this.m&&!this.j&&!this.i&&!this.l;!this.j||this.i||this.l||this.m?a?Fb(this.g,this):b?Gb(this.g,this):c?(a=this.g,T(Cb(a.D,a.u,this.o,a.description,a.location),"yahoo",this)):this.h&&Kb(this.h,!0):Eb(this.g,this)}};function Z(a){a.o=null;a.g=null}
function Qb(a){a.g={D:B(a,"event-title",""),description:B(a,"description",""),u:B(a,"start-date",""),v:B(a,"end-date",""),location:B(a,"location",""),startTime:B(a,"start-time",""),endTime:B(a,"end-time",""),M:B(a,"timezone","")};if(""==a.g.D)Z(a);else{""==a.g.v&&(a.g.v=a.g.u);""==a.g.endTime&&(a.g.endTime=a.g.startTime);var b=new Date(a.g.u+" "+a.g.startTime+" "+a.g.M),c=new Date(a.g.v+" "+a.g.endTime+" "+a.g.M);if(isNaN(b)||isNaN(c))Z(a);else if(b.getTime()>c.getTime())Z(a);else{var d=c.getTime()-
b.getTime();var e=Math.floor(d/36E5);d=(Math.floor(d/6E4)-60*e).toString();e=e.toString();2<e.length?e=null:(2>e.length&&(e="0"+e),2>d.length&&(d="0"+d),e+=d);a.o=e;a.s&&(a.g.description=a.s);a.g.u=b.toISOString().replace(yb,"");a.g.v=c.toISOString().replace(yb,"");a.h&&(b=a.h,c=a.o,b.A=a.g,b.B=c)}}}
function Rb(a){var b=0;a.j=a.hasAttribute("icalendar");a.j&&b++;a.i=a.hasAttribute("google");a.i&&b++;a.l=a.hasAttribute("windows-live");a.l&&b++;a.m=a.hasAttribute("yahoo");a.m&&b++;a.h&&(Jb(a.h),a.h=null);if(1<b){b=[];for(var c=0;c<qa.length;c++){var d=qa[c];a.hasAttribute(C[d])&&b.push({className:ra[d],text:sa[d]})}0!=b.length&&(a.h=new V(a.g,a.o,b,a))}}n.Object.defineProperties(W,{observedAttributes:{configurable:!0,enumerable:!0,get:function(){return Lb}}});
customElements.define("gwd-addtocalendar",W);}).call(this);