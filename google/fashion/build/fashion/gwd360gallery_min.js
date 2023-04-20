(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var g;function l(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var m=l(this),n="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},p;
if("function"==typeof Object.setPrototypeOf)p=Object.setPrototypeOf;else{var q;a:{var r={a:!0},t={};try{t.__proto__=r;q=t.a;break a}catch(a){}q=!1}p=q?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var v=p;
function w(a,b){a.prototype=n(b.prototype);a.prototype.constructor=a;if(v)v(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Y=b.prototype};function x(a,b,c){for(var d=b/c,e,f,h,k=0;k<a.length;k++)if(e=a[k],"img"==e.tagName.toLowerCase()||"gwd-image"==e.tagName.toLowerCase())f=e.offsetWidth/e.offsetHeight,d>f?(h=c*f,f=c):(h=b,f=b/f),e.style.width=h+"px",e.style.height=f+"px"};function y(a,b){return window.setTimeout(a,b)};function z(a,b,c){c=void 0===c?null:c;var d=document.createEvent("CustomEvent");d.initCustomEvent(a,!0,!0,c);b.dispatchEvent(d);return d}function A(a,b,c){c=void 0===c?null:c;var d=void 0===d?null:d;y(function(){var e=z(a,b,c);d&&d(e)},1)}function B(a,b){function c(d){a.removeEventListener("attached",c);b(d)}a.addEventListener("attached",c)}function C(a){var b=!1,c=null;return function(){b=!0;c||(b&&(a(),b=!1),c=y(function(){c=null;b&&(a(),b=!1)},250))}};var D=["-ms-","-moz-","-webkit-",""];function E(a){return"gwd-page"==a.tagName.toLowerCase()||"gwd-page"==a.getAttribute("is")}function F(a){if(E(a))return a;for(;a&&9!=a.nodeType;)if((a=a.parentElement)&&E(a))return a;return null};/*

 SPDX-License-Identifier: Apache-2.0
*/
function G(a){var b=[];if(a){a=a.split(",");for(var c=0;c<a.length;c++)if(!/^[\s\xa0]*$/.test(a[c])){var d=b,e=d.push;var f=a[c];f=f.trim();f=window.Enabler?window.Enabler.getUrl(f):f;var h=document.createElement("gwd-image");h.setAttribute("source",f);e.call(d,h)}}return b}function H(a,b){return(a%b+b)%b}function I(a,b,c,d){d=void 0===d?1:d;return H(a+("left"==b||"backwards"==b?-d:d),c)};function J(a){var b=a.currentIndex-1;return b-b%a.frameSnapInterval}function K(a){this.g=a;this.h=null;this.i=!1}function L(a,b,c){c=void 0===c?"forwards":c;if(a.g.frameCount&&null==a.h){var d=a.g.frameCount;b/=d;for(var e=[],f=J(a.g),h=f,k=0;k<d;k++)0<k&&(h=I(h,c,a.g.frameCount)),e.push(h);c=function(){if(e.length){var u=e.shift();a.i=!0;a.g.goToFrame(u+1);a.i=!1;z("frameautoplayed",a.g,{id:u+1})}else M(a,!0),a.g.goToFrame(f+1)};a.h=window.setInterval(c,b);setTimeout(c,1)}}
function M(a,b){b=void 0===b?!1:b;!a.i&&a.h&&(window.clearInterval(a.h),A("autoplayended",a.g,{completed:b}),a.h=null)};var N=["pause-front-media","resume-next-media"];function O(){var a=HTMLElement.call(this)||this;a.h=[];a.g=null;a.i=0;a.s=1;a.H=new K(a);a.S=!1;a.T=!1;return a}w(O,HTMLElement);g=O.prototype;g.attributeChangedCallback=function(a,b,c){switch(a){case "pause-front-media":this.S="true"==c;break;case "resume-next-media":this.T="true"==c}};g.gwdIsLoaded=function(){return!0};g.gwdLoad=function(){};g.goToFrame=function(a){this.stopRotation();0!=this.i&&(a>this.i?a=this.i:1>a&&(a=1),this.g=a-1)};
function P(a,b,c,d){if(null!=a.g){var e=I(a.g,b,a.s*Math.ceil(a.i/a.s),a.s);!d&&("forwards"==b&&e<a.g||"backwards"==b&&e>a.g)||a.goToFrame(e+1,c)}}g.goBackwards=function(a,b){P(this,"backwards",void 0===a?"slide":a,void 0===b?!0:b)};g.goForwards=function(a,b){P(this,"forwards",void 0===a?"slide":a,void 0===b?!0:b)};g.rotateOnce=function(a,b){L(this.H,void 0===a?0:a,b)};g.stopRotation=function(){M(this.H)};g.getFrame=function(a){if(0!=this.i)return this.h[a-1]};
function Q(a,b,c){z(b,a,{id:c||a.currentIndex})}m.Object.defineProperties(O.prototype,{currentIndex:{configurable:!0,enumerable:!0,get:function(){return 0<this.i?this.g+1:void 0}},frameSnapInterval:{configurable:!0,enumerable:!0,get:function(){return this.s}},frameCount:{configurable:!0,enumerable:!0,get:function(){return this.i}}});m.Object.defineProperties(O,{observedAttributes:{configurable:!0,enumerable:!0,get:function(){return N}}});var R=["images","wrap","pause-front-media","resume-next-media"];function S(){var a=O.call(this)||this;a.C=!1;a.j=null;a.D=0;a.m=null;a.P=a.W.bind(a);a.O=a.X.bind(a);a.N=a.V.bind(a);a.A=z.bind(null,"firstinteraction",a);a.L=a.U.bind(a);a.M=C(a.R.bind(a));a.v=[];a.J=0;a.l=-1;a.u=null;a.I=!1;a.o=!1;a.G=null;a.B=!1;a.K=!1;return a}w(S,O);g=S.prototype;
g.connectedCallback=function(){if(!this.B){var a=document.createElement("gwd-gesture");a.className="gesture";this.m=a;this.B=!0;this.K&&T(this)}this.m.addEventListener("trackstart",this.P,!1);this.m.addEventListener("track",this.O,!1);this.m.addEventListener("tap",this.N,!1);this.gwdIsLoaded()||((a=F(this))?a.gwdIsLoaded()&&this.gwdLoad():this.gwdLoad());window.addEventListener("resize",this.M,!1)};
g.disconnectedCallback=function(){window.removeEventListener("resize",this.M,!1);var a=this.m;a.removeEventListener("trackstart",this.P,!1);a.removeEventListener("track",this.O,!1);a.removeEventListener("tap",this.N,!1);-1!=this.l&&(U(this,this.l),V(this))};
g.attributeChangedCallback=function(a,b,c,d){switch(a){case "images":V(this);this.I=!0;this.i=0;this.g=-1;this.h=G(c);T(this);break;case "wrap":this.o=this.hasAttribute("wrap");break;default:O.prototype.attributeChangedCallback.call(this,a,b,c,d)}};
g.goToFrame=function(a,b,c){b=void 0===b?"slide":b;var d=a-1;V(this);if(0<=d&&d<this.frameCount&&d!=(-1!=this.l?this.l:this.g)){if(!c){c=this.g;var e=Math.abs(d-c);c=d>c==(!this.o||this.frameCount/2>e)?"forwards":"backwards"}Q(this,"frameactivated",a);this.F(I(this.g,c,this.frameCount),d,b,c,300)}};
g.rotateOnce=function(a,b){var c=this;V(this);var d=a&&b&&"string"==typeof a&&"number"==typeof b,e=(d?a:b)||"forwards",f=(d?b:a)||300*this.frameCount;if(1<this.frameCount){var h=this.g,k=I(this.g,e,this.frameCount);y(function(){c.F(k,h,"slide",e,f/c.frameCount,!0)},1)}};g.stopRotation=function(){V(this)};g.gwdIsLoaded=function(){return this.C};
g.gwdLoad=function(){if(!this.C&&!this.j){if(this.I)var a=G(this.getAttribute("images"));else{a=this.childNodes;for(var b=[],c=0,d=a.length;c<d;c++){var e=a[c];e.nodeType==Node.ELEMENT_NODE&&b.push(e)}a=b}this.h=a;T(this)}};
function T(a){if(a.B){for(;a.firstChild;)a.removeChild(a.firstChild);a.j&&a.j.removeEventListener("pageload",a.L,!1);for(var b=a.h,c=document.createElement("gwd-page"),d=0;d<b.length;d++){var e=b[d],f=void 0;f=void 0===f?!1:f;for(var h=0;h<D.length;h++){var k=D[h]+"user-select";var u=(f?D[h]:"")+"none";e.style.setProperty(k,u)}e.classList.add("frame");c.appendChild(e)}B(c,c.gwdLoad.bind(c));a.j=c;a.j.addEventListener("pageload",a.L,!1);a.appendChild(a.m);a.appendChild(a.j)}else a.K=!0}
g.U=function(a){this.j===a.target&&(x(this.h,this.clientWidth,this.clientHeight),this.C=!0,this.removeChild(this.j),this.i=this.h.length,this.v=[],this.J=this.frameCount,U(this,0),this.j=null,z("imagesloaded",this),z("allframesloaded",this),this.hasAttribute("autoplay")&&y(this.rotateOnce.bind(this),1),z("ready",this))};g.R=function(){x(this.h,this.clientWidth,this.clientHeight)};g.W=function(){V(this);0<this.frameCount&&(this.D=this.g)};
g.X=function(a){this.frameCount&&(this.A&&(this.A(),this.A=null),a=Math.round(a.dx/50),a=this.o?H(this.D+a,this.frameCount):Math.max(0,Math.min(this.frameCount-1,this.D+a)),this.g!=a&&this.h[a]&&(Q(this,"frameactivated",a+1),U(this,a)))};g.V=function(){this.frameCount&&Q(this,"frametap")};function U(a,b){if(a.g!=b&&a.h[b]){a.g=b;var c=a.G;a.G=a.h[b];a.appendChild(a.G);c&&a.removeChild(c);Q(a,"frameshown");a.v[b]||(a.v[b]=!0,--a.J||A("allframesviewed",a))}}
g.F=function(a,b,c,d,e,f){f=void 0===f?!1:f;"none"==c&&(a=b);U(this,a);f&&Q(this,"frameactivated",a+1);a!=b?(this.l=b,a=I(a,d,this.frameCount),this.u=y(this.F.bind(this,a,b,c,d,e,f),e)):(this.u=null,this.l=-1)};function V(a){-1!=a.l&&(window.clearTimeout(a.u),a.u=null,a.l=-1,Q(a,"frameactivated",a.g))}g.getFrame=function(a){return this.h[a-1]};g.goForwards=function(){var a=H(this.g+1,this.frameCount);!this.o&&a<this.g||this.goToFrame(a+1)};
g.goBackwards=function(){var a=H(this.g-1,this.frameCount);!this.o&&a>this.g||this.goToFrame(a+1)};m.Object.defineProperties(S,{observedAttributes:{configurable:!0,enumerable:!0,get:function(){return R}}});customElements.define("gwd-360gallery",S);}).call(this);