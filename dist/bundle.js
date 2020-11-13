/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var wrapSquares = [{\n  quantity: 10,\n  classColor: 'beige'\n}, {\n  quantity: 10,\n  classColor: 'letters-are-blue'\n}, {\n  quantity: 4,\n  classColor: 'yellow'\n}, {\n  quantity: 16,\n  classColor: 'snake'\n}, {\n  quantity: 4,\n  classColor: 'brown-flowers'\n}, {\n  quantity: 8,\n  classColor: 'red-flowers'\n}, {\n  quantity: 17,\n  classColor: 'red'\n}, {\n  quantity: 10,\n  classColor: 'citric'\n}, {\n  quantity: 2,\n  classColor: 'light-yellow'\n}, {\n  quantity: 10,\n  classColor: 'light-gray'\n}, {\n  quantity: 8,\n  classColor: 'gray'\n}, {\n  quantity: 8,\n  classColor: 'dark-green'\n}, {\n  quantity: 4,\n  classColor: 'dark-blue'\n}];\n\nfunction shuffle(array) {\n  return array.sort(function () {\n    return Math.random() - 0.5;\n  });\n}\n\nwindow.onload = function () {\n  console.log('Hello Volha =)');\n  var containerWrap = document.createElement('div');\n  containerWrap.classList.add('container-wrap'); // collection area\n\n  var wrapperCollectionArea = document.createElement('div');\n  var collectingArea = document.createElement('div');\n  collectingArea.classList.add('collecting-area');\n  Array(108).fill(' ').map(function () {\n    var collectSquare = document.createElement('div');\n    collectSquare.classList.add('collect-square');\n    collectingArea.append(collectSquare);\n  }); // squares area\n\n  var squareArea = document.createElement('div');\n  squareArea.classList.add('square-area');\n  wrapSquares.map(function (_ref) {\n    var quantity = _ref.quantity,\n        classColor = _ref.classColor;\n    Array(quantity).fill(' ').forEach(function () {\n      var square = document.createElement('div');\n      square.setAttribute('draggable', 'true');\n      square.classList.add(classColor, 'square');\n      squareArea.append(square);\n    });\n  }); // shuffle button\n\n  var shuffleButton = document.createElement('button');\n  shuffleButton.classList.add('shuffle-button');\n  shuffleButton.textContent = 'shuffle';\n  var links = [];\n\n  shuffleButton.onclick = function () {\n    if (squareArea.children.length && squareArea.children.length > 3) {\n      var shuffled = shuffle(Array.from(squareArea.children));\n      shuffled.forEach(function (el, index) {\n        if (index < 108) {\n          links.push(el);\n          collectingArea.children[index].append(el);\n        }\n      });\n    } else {\n      var _shuffled = shuffle(links);\n\n      _shuffled.forEach(function (el, index) {\n        if (index < 108) {\n          collectingArea.children[index].innerHTML = '';\n          collectingArea.children[index].append(el);\n        }\n      });\n    }\n  };\n\n  wrapperCollectionArea.append(collectingArea);\n  containerWrap.append(wrapperCollectionArea, shuffleButton, squareArea);\n  document.querySelector('body').append(containerWrap); // hundler draggable\n\n  var dragged;\n  var draggedClient;\n  document.addEventListener('dragstart', function (_ref2) {\n    var target = _ref2.target;\n    draggedClient = target.getBoundingClientRect();\n\n    if (target.classList.contains('square')) {\n      dragged = target;\n    }\n  });\n  document.addEventListener('dragover', function (event) {\n    event.preventDefault();\n  });\n  document.addEventListener('drop', function (_ref3) {\n    var target = _ref3.target;\n\n    if (target.classList.contains('collect-square')) {\n      target.append(dragged);\n    }\n  });\n};\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.js ./src/scss/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/index.js */\"./src/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/scss/style.scss */\"./src/scss/style.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js_./src/scss/style.scss?");

/***/ })

/******/ });