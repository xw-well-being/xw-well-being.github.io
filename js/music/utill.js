function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_toPropertyKey(o.key),o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function _toPropertyKey(e){e=_toPrimitive(e,"string");return"symbol"==_typeof(e)?e:e+""}function _toPrimitive(e,t){if("object"!=_typeof(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0===r)return("string"===t?String:Number)(e);r=r.call(e,t||"default");if("object"!=_typeof(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}var Util=(()=>{function t(){return _classCallCheck(this,t),t.instance||this.getInstance.apply(this,arguments)}return _createClass(t,[{key:"getInstance",value:function(){var e={formatTime:function(e){var t,r;return void 0===e?(this.handlerError(123,{method:"formate",param:"time"}),!1):(r=(e=Math.floor(e))-60*(e=Math.floor(e/60)),((t=Math.floor(e/60))?this.fillZero(t)+":":"")+this.fillZero(e-60*t)+":"+this.fillZero(r))},fillZero:function(e){return void 0===e?(this.handlerError(123,{method:"fillZero",param:"num"}),!1):9<e?e:"0"+e},errors:{123:function(e){return e.method+"function need a param "+e.param}},handlerError:function(e,t){console.error("[until error] message"+this.errors[e](t))}};return t.instance=e}}])})();"object"===("undefined"==typeof module?"undefined":_typeof(module))&&"object"===_typeof(module.exports)&&(module.exports=Util),"function"==typeof define&&define.amd&&define("util",[],function(){return Util});