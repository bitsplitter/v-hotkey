(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["v-hotkey"] = factory();
	else
		root["v-hotkey"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./src/keycodes/aliases.js
/* harmony default export */ var aliases = ({
  windows: 91,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  ctl: 17,
  control: 17,
  option: 18,
  pause: 19,
  "break": 19,
  caps: 20,
  "return": 13,
  escape: 27,
  spc: 32,
  pgup: 33,
  pgdn: 34,
  ins: 45,
  del: 46,
  cmd: 91
});
// CONCATENATED MODULE: ./src/keycodes/functionkeys.js
/* harmony default export */ var functionkeys = ({
  f1: 112,
  f2: 113,
  f3: 114,
  f4: 115,
  f5: 116,
  f6: 117,
  f7: 118,
  f8: 119,
  f9: 120,
  f10: 121,
  f11: 122,
  f12: 123
});
// CONCATENATED MODULE: ./src/keycodes/lowercase.js
/* harmony default export */ var lowercase = ({
  a: 65,
  b: 66,
  c: 67,
  d: 68,
  e: 69,
  f: 70,
  g: 71,
  h: 72,
  i: 73,
  j: 74,
  k: 75,
  l: 76,
  m: 77,
  n: 78,
  o: 79,
  p: 80,
  q: 81,
  r: 82,
  s: 83,
  t: 84,
  u: 85,
  v: 86,
  w: 87,
  x: 88,
  y: 89,
  z: 90
});
// CONCATENATED MODULE: ./src/keycodes/numpad.js
/* harmony default export */ var numpad = ({
  'numpad*': 106,
  'numpad+': 43,
  numpadadd: 43,
  'numpad-': 109,
  'numpad.': 110,
  'numpad/': 111,
  numlock: 144,
  numpad0: 96,
  numpad1: 97,
  numpad2: 98,
  numpad3: 99,
  numpad4: 100,
  numpad5: 101,
  numpad6: 102,
  numpad7: 103,
  numpad8: 104,
  numpad9: 105
});
// CONCATENATED MODULE: ./src/keycodes/codes.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ var codes = (_objectSpread({
  backspace: 8,
  tab: 9,
  enter: 13,
  shift: 16,
  ctrl: 17,
  alt: 18,
  'pause/break': 19,
  capslock: 20,
  esc: 27,
  space: 32,
  pageup: 33,
  pagedown: 34,
  end: 35,
  home: 36,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
  insert: 45,
  "delete": 46,
  command: 91,
  meta: 91,
  leftcommand: 91,
  rightcommand: 93,
  scrolllock: 145,
  mycomputer: 182,
  mycalculator: 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222,
  ':': 186,
  '+': 187,
  '<': 188,
  _: 189,
  '>': 190,
  '?': 191,
  '~': 192,
  '{': 219,
  '|': 220,
  '}': 221,
  '"': 222
}, lowercase, {}, numpad, {}, functionkeys, {}, aliases));
// CONCATENATED MODULE: ./src/helpers.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//const FORBIDDEN_NODES = ['INPUT', 'TEXTAREA', 'SELECT']
var FORBIDDEN_NODES = [];
/**
 *
 * @param {Object} a
 * @param {Object} b
 * @returns {Boolean}
 */

var areObjectsEqual = function areObjectsEqual(a, b) {
  return Object.entries(a).every(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return b[key] === value;
  });
};
/**
 *
 * @param {String} combination
 */


var splitCombination = function splitCombination(combination) {
  combination = combination.replace(/\s/g, '');
  combination = combination.includes('numpad+') ? combination.replace('numpad+', 'numpadadd') : combination;
  combination = combination.includes('++') ? combination.replace('++', '+=') : combination;
  return combination.split(/\+{1}/);
};
/**
 *
 * @param {String} key
 * @returns {String|undefined}
 */

var returnCharCode = function returnCharCode(key) {
  return key.length === 1 ? key.charCodeAt(0) : undefined;
};
/**
 *
 * @param {Array} keyMap
 * @param {Number} keyCode
 * @param {Object} eventKeyModifiers
 * @returns {Function|Boolean}
 */

var getHotkeyCallback = function getHotkeyCallback(keyMap, keyCode, eventKeyModifiers) {
  var key = keyMap.find(function (_ref3) {
    var code = _ref3.code,
        modifiers = _ref3.modifiers;
    return code === keyCode && areObjectsEqual(eventKeyModifiers, modifiers);
  });
  if (!key) return false;
  return key.callback;
};
/**
 *
 * @param {Event} e
 * @param {Array} keyMap
 * @param {Object} modifiers Vue event modifiers
 */


var assignKeyHandler = function assignKeyHandler(e, keyMap, modifiers) {
  var keyCode = e.keyCode,
      ctrlKey = e.ctrlKey,
      altKey = e.altKey,
      shiftKey = e.shiftKey,
      metaKey = e.metaKey;
  var eventKeyModifiers = {
    ctrlKey: ctrlKey,
    altKey: altKey,
    shiftKey: shiftKey,
    metaKey: metaKey
  };

  if (modifiers.prevent) {
    e.preventDefault();
  }

  if (modifiers.stop) {
    e.stopPropagation();
  }

  var _document$activeEleme = document.activeElement,
      nodeName = _document$activeEleme.nodeName,
      isContentEditable = _document$activeEleme.isContentEditable;
  if (isContentEditable) return;
  if (FORBIDDEN_NODES.includes(nodeName)) return;
  var callback = getHotkeyCallback(keyMap, keyCode, eventKeyModifiers);
  if (!callback) return e;
  e.preventDefault();
  callback[e.type](e);
};
// CONCATENATED MODULE: ./src/keycodes/index.js
function keycodes_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function keycodes_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { keycodes_ownKeys(source, true).forEach(function (key) { keycodes_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { keycodes_ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function keycodes_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var noop = function noop() {};

var defaultModifiers = {
  ctrlKey: false,
  altKey: false,
  shiftKey: false,
  metaKey: false
};

function isApplePlatform() {
  return typeof navigator !== 'undefined' && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
}

var alternativeKeyNames = {
  option: 'alt',
  command: 'meta',
  "return": 'enter',
  escape: 'esc',
  plus: '+',
  mod: isApplePlatform() ? 'meta' : 'ctrl'
};
/**
 *
 * @param {Object} combinations
 * @param {Object} alias
 * @returns {Object}
 */

var keycodes_getKeyMap = function getKeyMap(combinations, alias) {
  var result = [];
  Object.keys(combinations).forEach(function (combination) {
    var _combinations$combina = combinations[combination],
        keyup = _combinations$combina.keyup,
        keydown = _combinations$combina.keydown;
    var callback = {
      keydown: keydown || (keyup ? noop : combinations[combination]),
      keyup: keyup || noop
    };
    var keys = splitCombination(combination);

    var _resolveCodesAndModif = resolveCodesAndModifiers(keys, alias),
        code = _resolveCodesAndModif.code,
        modifiers = _resolveCodesAndModif.modifiers;

    result.push({
      code: code,
      modifiers: modifiers,
      callback: callback
    });
  });
  return result;
};
/**
 *
 * @param {Array} keys
 * @param {Object} alias
 * @returns {Object}
 */

var resolveCodesAndModifiers = function resolveCodesAndModifiers(keys, alias) {
  var modifiers = keycodes_objectSpread({}, defaultModifiers);

  if (keys.length > 1) {
    return keys.reduce(function (acc, key) {
      key = alternativeKeyNames[key] || key;

      if (defaultModifiers.hasOwnProperty("".concat(key, "Key"))) {
        acc.modifiers = keycodes_objectSpread({}, acc.modifiers, keycodes_defineProperty({}, "".concat(key, "Key"), true));
      } else {
        acc.code = alias[key] || keycodes_searchKeyCode(key);
      }

      return acc;
    }, {
      modifiers: modifiers
    });
  }

  var key = alternativeKeyNames[keys[0]] || keys[0];

  if (defaultModifiers.hasOwnProperty("".concat(key, "Key"))) {
    modifiers = keycodes_objectSpread({}, modifiers, keycodes_defineProperty({}, "".concat(key, "Key"), true));
  }

  var code = alias[key] || keycodes_searchKeyCode(key);
  return {
    modifiers: modifiers,
    code: code
  };
};
/**
 *
 * @param {String} key
 */


var keycodes_searchKeyCode = function searchKeyCode(key) {
  return codes[key.toLowerCase()] || returnCharCode(key);
};
// CONCATENATED MODULE: ./src/main.js


/**
 *
 * @param {Object} el
 * @param {Object} bindings
 * @param {Object} alias
 */

function bindEvent(el, _ref, alias) {
  var value = _ref.value,
      modifiers = _ref.modifiers;
  el._keyMap = keycodes_getKeyMap(value, alias);

  el._keyHandler = function (e) {
    return assignKeyHandler(e, el._keyMap, modifiers);
  };

  document.addEventListener('keydown', el._keyHandler);
  document.addEventListener('keyup', el._keyHandler);
}
/**
 *
 * @param {Object} el
 */


function unbindEvent(el) {
  document.removeEventListener('keydown', el._keyHandler);
  document.removeEventListener('keyup', el._keyHandler);
}


// CONCATENATED MODULE: ./src/index.js


var src_buildDirective = function buildDirective() {
  var alias = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    bind: function bind(el, binding) {
      bindEvent(el, binding, alias);
    },
    componentUpdated: function componentUpdated(el, binding) {
      if (binding.value !== binding.oldValue) {
        unbindEvent(el);
        bindEvent(el, binding, alias);
      }
    },
    unbind: unbindEvent
  };
};

var src_plugin = {
  install: function install(Vue) {
    var alias = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Vue.directive('hotkey', src_buildDirective(alias));
  },
  directive: src_buildDirective()
};
/* harmony default export */ var src = (src_plugin);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src);



/***/ })

/******/ });
});
//# sourceMappingURL=v-hotkey.umd.js.map