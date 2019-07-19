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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src2/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src2/block.js":
/*!***********************!*\
  !*** ./src2/block.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObj = __webpack_require__(/*! ./movingobj */ \"./src2/movingobj.js\");\nconst rock = '/Users/appacademy/Desktop/Closet/dist/images/rock1.png';\n// change pathname @ home\n\nclass Block extends MovingObj {\n  constructor(options) {\n    super(options, rock);\n  }\n\n  draw(ctx) {\n    let x = this.pos[0] * this.scale;\n    let y = this.pos[1] * this.scale;\n    let img = new Image();\n    debugger\n    img.src = rock;\n    img.onload = () => {\n      ctx.drawImage(img, x, y);\n    };\n  }\n}\n\nmodule.exports = Block;\n\n//# sourceURL=webpack:///./src2/block.js?");

/***/ }),

/***/ "./src2/index.js":
/*!***********************!*\
  !*** ./src2/index.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObj = __webpack_require__(/*! ./movingobj */ \"./src2/movingobj.js\");\nconst Block = __webpack_require__(/*! ./block */ \"./src2/block.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvas = document.getElementById(\"canvas\");\n  const ctx = canvas.getContext(\"2d\");\n\n  // const display = new Display(canvas, 20);\n  // const game = new ClosetDash(display);\n  // game.run();\n\n  window.ctx = ctx;\n  window.MovingObj = MovingObj;\n  window.Block = Block;\n  // canvas.addEventListener(\"mouseover\", game.displayPlay);\n  // canvas.addEventListener(\"click\", game.handleClick);\n  // canvas.addEventListener(\"onkkeydown\", e => {\n  //   console.log(e);\n  // });\n});\n\n\n//# sourceURL=webpack:///./src2/index.js?");

/***/ }),

/***/ "./src2/movingobj.js":
/*!***************************!*\
  !*** ./src2/movingobj.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class MovingObj {\n  constructor(options, imgSrc) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.imgSrc = imgSrc;\n    this.game = options.game;\n    this.scale = 20;\n  }\n\n  collideWith(otherObj) {\n\n  }\n\n  draw(ctx) {\n    debugger\n    let x = this.pos[0] * this.scale;\n    let y = this.pos[1] * this.scale;\n    let img = new Image();\n    img.src = this.ImgSrc;\n    img.onload = () => {\n      ctx.drawImage(img, x, y);\n    };\n  }\n\n  move(timeDelta) {\n    // timeDelta is number of milliseconds since last move\n    // if the computer is busy the time delta will be larger\n    // in this case the MovingObject should move farther in this frame\n    // velocity of object is how far it should move in 1/60th of a second\n    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,\n      offsetX = this.vel[0] * velocityScale,\n      offsetY = this.vel[1] * velocityScale;\n\n    this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];\n\n    // out of bounds logic\n    // if (this.game.outOfBounds(this.pos))\n  }\n}\n\nconst NORMAL_FRAME_TIME_DELTA = 1000 / 60;\n\nmodule.exports = MovingObj;\n\n//# sourceURL=webpack:///./src2/movingobj.js?");

/***/ })

/******/ });