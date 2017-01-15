/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length)
/******/ 			resolves.shift()();

/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return Promise.resolve();

/******/ 		// an Promise means "currently loading".
/******/ 		if(installedChunks[chunkId]) {
/******/ 			return installedChunks[chunkId][2];
/******/ 		}
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;

/******/ 		if (__webpack_require__.nc) {
/******/ 			script.setAttribute("nonce", __webpack_require__.nc);
/******/ 		}
/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".bundle.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);

/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		return installedChunks[chunkId][2] = promise;
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";

/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); //big image should be loaded as ref;
//small image should be loaded as base64

__webpack_require__(8);

var _calculator = __webpack_require__(2);

var _calculator2 = _interopRequireDefault(_calculator);

var _avatar = __webpack_require__(9);

var _avatar2 = _interopRequireDefault(_avatar);

var _calculator3 = __webpack_require__(4);

var _calculator4 = _interopRequireDefault(_calculator3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CalculatorView = function () {
	function CalculatorView(container) {
		_classCallCheck(this, CalculatorView);

		this.container = container;
	}

	_createClass(CalculatorView, [{
		key: 'render',
		value: function render() {
			var image = document.createElement('img');
			image.src = _calculator2.default;

			var avatar = document.createElement('img');
			avatar.src = _avatar2.default;

			this.container.append(image);
			this.container.append(avatar);
		}
	}]);

	return CalculatorView;
}();

exports.default = CalculatorView;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var button = document.createElement('button');
button.innerText = 'Click me';

var container = document.createElement('div');

button.onclick = function () {
	//load module
	__webpack_require__.e/* import() */(0).then(__webpack_require__.bind(null, 11)).then(function (module) {
		new module.default(container).render();
	});
};

document.querySelector('body').append(button);
document.querySelector('body').append(container);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b2b614e4f057cdc923a9297004f2508d.jpg";

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function () {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for (var i = 0; i < this.length; i++) {
			var item = this[i];
			if (item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _sum = __webpack_require__(5);

var _sum2 = _interopRequireDefault(_sum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//command pattern
var Commands = { SUM: 1 };

var Calculator = function () {
	function Calculator() {
		_classCallCheck(this, Calculator);
	}

	_createClass(Calculator, [{
		key: 'execute',
		value: function execute(command, val1, val2) {
			switch (command) {
				case Commands.SUM:
					return (0, _sum2.default)(val1, val2);
			}
		}
	}]);

	return Calculator;
}();

module.exports = Calculator;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var sum = function sum(a, b) {
  return a + b;
};

exports.default = sum;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)();
// imports


// module
exports.push([module.i, ".mainClass {\n\tbackground: blue;\n}", ""]);

// exports


/***/ },
/* 7 */
/***/ function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(7)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../node_modules/css-loader/index.js!./calculator.css", function() {
			var newContent = require("!!./../node_modules/css-loader/index.js!./calculator.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },
/* 9 */
/***/ function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _calculator_view = __webpack_require__(0);

var _calculator_view2 = _interopRequireDefault(_calculator_view);

__webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bootstrap = function () {
	function Bootstrap() {
		_classCallCheck(this, Bootstrap);
	}

	_createClass(Bootstrap, [{
		key: '_getRootElement',
		value: function _getRootElement() {
			return document.querySelector('body');
		}
	}, {
		key: 'execute',
		value: function execute() {
			new _calculator_view2.default(this._getRootElement()).render();
		}
	}]);

	return Bootstrap;
}();

new Bootstrap().execute();

/***/ }
/******/ ]);