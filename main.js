/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t="";const e=t+"f7464079922878e94c82.png";function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function n(){n=function(){return e};var t,e={},o=Object.prototype,i=o.hasOwnProperty,a=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",s=c.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function p(t,e,r,n){var o=e&&e.prototype instanceof _?e:_,i=Object.create(o.prototype),c=new N(n||[]);return a(i,"_invoke",{value:O(t,r,c)}),i}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=p;var d="suspendedStart",y="suspendedYield",m="executing",v="completed",g={};function _(){}function b(){}function L(){}var w={};f(w,u,(function(){return this}));var k=Object.getPrototypeOf,E=k&&k(k(T([])));E&&E!==o&&i.call(E,u)&&(w=E);var S=L.prototype=_.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function q(t,e){function n(o,a,c,u){var l=h(t[o],t,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==r(f)&&i.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var o;a(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}})}function O(e,r,n){var o=d;return function(i,a){if(o===m)throw Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===d)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=m;var l=h(e,r,n);if("normal"===l.type){if(o=n.done?v:y,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=v,n.method="throw",n.arg=l.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var i=h(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,g;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(e){if(e||""===e){var n=e[u];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(i.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(r(e)+" is not iterable")}return b.prototype=L,a(S,"constructor",{value:L,configurable:!0}),a(L,"constructor",{value:b,configurable:!0}),b.displayName=f(L,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,f(t,s,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},x(q.prototype),f(q.prototype,l,(function(){return this})),e.AsyncIterator=q,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new q(p(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(S),f(S,s,"Generator"),f(S,u,(function(){return this})),f(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&i.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function n(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],c=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var u=i.call(a,"catchLoc"),l=i.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function o(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,i){var a=t.apply(e,r);function c(t){o(a,n,i,c,u,"next",t)}function u(t){o(a,n,i,c,u,"throw",t)}c(void 0)}))}}var a=[{name:"Vision studio",link:t+"521af59917af1262ac84.png"},{name:"Vision studio",link:t+"7f62e9403a087ee42176.png"},{name:"Vision studio",link:e},{name:"Vision studio",link:e}],c=document.querySelector(".main"),u=document.querySelectorAll(".popup"),l=document.querySelector(".popup-contact"),s=document.querySelectorAll(".button-contact");if(s.length>0){function T(t){t.target&&(l.classList.add("popup_opened"),c.classList.add("main_lock"),t.preventDefault())}s.forEach((function(t){t.addEventListener("click",T)}))}u.forEach((function(t){return document.addEventListener("keydown",(function(e){"Escape"===e.key&&(t.classList.remove("popup_opened"),c.classList.remove("main_lock"))}))})),u.forEach((function(t){return t.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup")||e.target.classList.contains("popup__close-button"))&&function(t){t.classList.remove("popup_opened"),c.classList.remove("main_lock")}(t)}))}));var f=document.querySelector(".form"),p=f.querySelector(".button_form");function h(t){return d.apply(this,arguments)}function d(){return(d=i(n().mark((function t(e){return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/apply/",{method:"POST",headers:{"Content-Type":"multipart/form-data"},body:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(){return(y=i(n().mark((function t(e){var r,o,i;return n().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),m(),n=e.target,r=new FormData(n),t.next=5,h(r);case 5:o=t.sent,i=o.status,m(),200===i?(e.target,alert("Ваша заявка отправлена!")):(e.target,alert("Ваша заявка отклонена!"));case 10:case"end":return t.stop()}var n}),t)})))).apply(this,arguments)}function m(){document.querySelector(".form__loader").classList.toggle("form__loader_active")}if(p.classList.add("form__submit-button_disabled"),f.addEventListener("submit",(function(t){t.target.reset()})),f.addEventListener("submit",(function(t){return y.apply(this,arguments)})),f.addEventListener("input",(function(t){t.target.form.checkValidity()&&(p.classList.remove("form__submit-button_disabled"),p.classList.add("form__submit-button_active"))})),/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){var v=document.querySelectorAll(".footer__link");v.length>0&&v.forEach((function(t){t.classList.add("footer__link_mobile")}));var g=document.querySelectorAll(".menu__link");g.length>0&&g.forEach((function(t){t.classList.add("menu__link_mobile")}));var _=document.querySelectorAll(".menu__link-container");_.length>0&&_.forEach((function(t){t.classList.add("menu__link-container_mobile")}));var b=document.querySelectorAll(".socials__link");b.length>0&&b.forEach((function(t){t.classList.add("socials__link_mobile")}));var L=document.querySelectorAll(".star");L.length>0&&L.forEach((function(t){t.classList.add("star_mobile")}));var w=document.querySelectorAll(".button");w.length>0&&w.forEach((function(t){t.classList.add("button_mobile"),f.querySelector(".button").classList.remove("button_mobile")}));var k=document.querySelectorAll(".gallery__hover-link");k.length>0&&k.forEach((function(t){t.classList.add("gallery__hover-link_mobile")}));var E=document.querySelector(".pagination__link");null!==E&&E.classList.add("pagination__link_mobile");var S=document.querySelector(".pagination__link-container");null!==S&&S.classList.add("pagination__link-container_mobile");var x=document.querySelector(".pagination__button_prev");null!==x&&(x.innerHTML="<div class='pagination__button pagination__button_mobile-prev'><h3 class='subtitle subtitle_pagination'>Prev</h3></div>");var q=document.querySelector(".pagination__button_next");null!==q&&(q.innerHTML="<div class='pagination__button pagination__button_mobile-next'><h3 class='subtitle subtitle_pagination'>Next</h3></div>")}var O=document.querySelector("#card-template").content,P=document.querySelector(".gallery__grid_single-work");a.forEach((function(t){var e=O.querySelector(".card").cloneNode(!0);e.querySelector(".gallery__card-img_single-work").src=t.link,e.querySelector(".gallery__card-img_single-work").alt=t.name,P.append(e)}));var j=document.querySelector(".popup-img"),A=document.querySelector(".popup__img"),N=document.querySelector(".popup__discripton");P.addEventListener("click",(function(t){t.target.classList.contains("gallery__card-img_single-work")&&(A.src=t.target.src,N.textContent=t.target.closest(".card").querySelector(".gallery__card-img_single-work").alt,c.classList.add("main_lock"),j.classList.add("popup_opened"))}))})();