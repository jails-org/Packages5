!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("mask",[],t):"object"==typeof exports?exports.mask=t():e.mask=t()}(self,(function(){return(()=>{"use strict";var e={d:(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function r(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function n(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){var t=e.main,r=e.elm,a=e.state,u=e.dependencies.masks[r.dataset.mask];t((function(e){return[c]}));var c=function(e){var t=e.on;t("input",function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];clearTimeout(t),t=setTimeout((function(t){return e.apply(null,o)}),r)}}(i,10)),t("change",i)},i=function(e){var t=e.target,r=t.name,c=t.value,i=a.get().parent,f=u(c);if(e.target.value=f,i&&i.form){var l=i.form,p=f;a.set(n(n({},i),{},{form:o({},r,n(n({},l[r]),{},{value:p}))}))}}}return e.r(t),e.d(t,{default:()=>a}),t})()}));