(()=>{var e={49:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(84),o=n.n(r),a=n(294),s=n.n(a)()(o());s.push([e.id,".title {\n  font-size: 40px;\n  color: blue;\n  background: pink;\n}\n",""]);const i=s},77:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(84),o=n.n(r),a=n(294),s=n.n(a)()(o());s.push([e.id,".title{\r\n    color: red;\r\n    font-size: 36px;\r\n}",""]);const i=s},294:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},84:e=>{"use strict";e.exports=function(e){return e[1]}},400:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},s=[],i=0;i<e.length;i++){var c=e[i],u=r.base?c[0]+r.base:c[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=n(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var v=o(f,r);r.byIndex=i,t.splice(i,0,{identifier:d,updater:v,references:1})}s.push(d)}return s}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=n(a[s]);t[i].references--}for(var c=r(e,o),u=0;u<a.length;u++){var l=n(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},983:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a css target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},923:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},721:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},917:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},499:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},829:()=>{const e=document.createElement("div");e.className="title",e.innerHTML="你好啊，马飞飞",document.body.appendChild(e)},466:e=>{e.exports={priceFormat:function(){return"￥99.98"}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{"use strict";var e=n(466);n(829);var t=n(400),r=n.n(t),o=n(917),a=n.n(o),s=n(983),i=n.n(s),c=n(721),u=n.n(c),l=n(923),d=n.n(l),p=n(499),f=n.n(p),v=n(77),m={};m.styleTagTransform=f(),m.setAttributes=u(),m.insert=i().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=d(),r()(v.Z,m),v.Z&&v.Z.locals&&v.Z.locals;var h=n(49),y={};y.styleTagTransform=f(),y.setAttributes=u(),y.insert=i().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=d(),r()(h.Z,y),h.Z&&h.Z.locals&&h.Z.locals;const b=(0,e.priceFormat)(100);console.log(b),console.log(35)})()})();