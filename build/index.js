!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("keykeyjs",[],t):"object"==typeof exports?exports.keykeyjs=t():e.keykeyjs=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),u=o(r),i=n(2),c=o(i),f={},a={listenFlag:!0},d=function(e){return function(t){var n=void 0;n=c.default.isFunc(e)?e():[].concat(e),-1!==n.indexOf(t.key)&&t.preventDefault(),f[t.key]={key:t.key,event:t}}},l=function(e){delete f[e.key],a.listenFlag&&u.default.dispatch({type:e.key+" -",payload:e})},s=function(){var e=function e(){if(a.listenFlag)for(var t in f){var n=f[t];u.default.dispatch({type:n.key+" +",payload:n.event})}window.requestAnimationFrame(e)};window.requestAnimationFrame(e)},p=function(e){a.listenFlag=!1,c.default.isNumber(e)&&c.default.delay(e).then(function(e){return y()}),c.default.isFunc(e)&&e(y)},y=function(){a.listenFlag=!0},v=function(e){var t=e.targetDOM,n=void 0===t?document:t,o=e.reducer,r=void 0===o?function(){}:o,i=e.reducers,c=void 0===i?[]:i,f=e.preventDefaultKeys,a=void 0===f?[]:f;u.default.register(c.concat(r)),n.addEventListener("keydown",d(a)),n.addEventListener("keyup",l),s()};t.default={launch:v,stopListen:p},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=[],r=function(e){o.forEach(function(t){return t.call(void 0,e)})};t.default={register:function(e){o=o.concat(e)},dispatch:function(e){r(e)}},e.exports=t.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return new Promise(function(t,n){setTimeout(t,e)})},r=function(e){return"[object Function]"===Object.prototype.toString.call(e)},u=function(e){return"[object Number]"===Object.prototype.toString.call(e)};t.default={delay:o,isFunc:r,isNumber:u},e.exports=t.default}])});