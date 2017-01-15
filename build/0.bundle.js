webpackJsonp([0],{

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _calculator = __webpack_require__(2);

var _calculator2 = _interopRequireDefault(_calculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//big image should be loaded as ref;


var ImageLoader = function () {
	function ImageLoader(container) {
		_classCallCheck(this, ImageLoader);

		this.container = container;
	}

	_createClass(ImageLoader, [{
		key: 'render',
		value: function render() {
			var image = document.createElement('img');
			image.src = _calculator2.default;

			this.container.append(image);
		}
	}]);

	return ImageLoader;
}();

exports.default = ImageLoader;

/***/ }

});