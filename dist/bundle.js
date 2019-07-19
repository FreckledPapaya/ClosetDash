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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/board.js":
/*!**********************!*\
  !*** ./src/board.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// require here\n \n\nclass Board {\n\n    constructor (dim) {  \n        this.dim = dim; \n        this.numRows = dim;\n        this.numCols = 2*dim;\n\n        this.EMPTY = \".\";\n        this.WALL = \"w\";\n        this.BOOSTER = \"o\";\n        this.PIT = \"p\";\n        this.PLAYER = \"*\";\n    } \n\n// returns empty grid \n    emptyGrid() {\n        let height = this.dim;\n        let width = 2 * this.dim;  \n\n        let row = [];\n        for (let i=0; i<width; i++) {\n            row.push(\".\") ; \n        }   \n\n        let grid = []; \n        for (let i=0; i<height; i++) {\n            grid.push(Object.assign([], row));\n        }\n        \n        this.grid = grid;\n    } \n\n    wallGrid () {  \n\n        this.grid.forEach((row, i) => {\n            if (i === 0 || i === 1 || i === 18 || i === 19) {\n                this.grid[i] = row.map(ele => (this.WALL));\n            } else { \n                row[0] = this.WALL; \n            }\n        }); \n        return this.grid;\n    } \n\n    validPosition (coord) {\n        return (coord[0] >= 0) && (coord[0] < this.dim) &&\n            (coord[1] >= 0) && (coord[1] < 2*this.dim);\n    } \n\n    render ()  {\n        // later populate with player, walls, pits\n        return this.emptyGrid;\n    } \n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);\n\n//# sourceURL=webpack:///./src/board.js?");

/***/ }),

/***/ "./src/closetdash.js":
/*!***************************!*\
  !*** ./src/closetdash.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("class ClosetDash {\n    constructor(display) {\n        this.display = display;\n        this.board = this.display.board;\n    }\n\n    run() {\n        this.setupBoard();\n    }\n\n    setupBoard() {\n        this.display.populateBoard();\n    }\n\n    outOfBounds (pos) {\n        Boolean(this.board.validPosition(pos));\n    }\n\n    displayPlay () {\n        // response for mouseover when game begins\n        // conditional to check whether game is running\n        // display \"play\" or \"pause\"\n        // tint screen?\n        console.log(\"display play\");\n    }\n    \n    handleClick () {\n        // alter paused/play to opposite\n        console.log(\"pause/start\");\n    }\n}\n\n\nmodule.exports = ClosetDash;\n\n//# sourceURL=webpack:///./src/closetdash.js?");

/***/ }),

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\nconst rock = '../images/rock1.png';\n\n\nclass Display {\n    constructor($el, dim) { \n    this.canvas = $el;\n    this.ctx = this.canvas.getContext(\"2d\");\n    this.height = 400;\n    this.width = 800;\n    this.hUnit = this.height / dim;\n    this.wUnit = this.hUnit * 2;\n\n    this.board = new _board__WEBPACK_IMPORTED_MODULE_0__[\"default\"](dim);  \n    this.grid = this.board.grid;\n    } \n\n    populateBoard () {\n        this.board.emptyGrid();\n        this.board.wallGrid();\n    }\n\n    render () {\n        const grid = this.grid;\n        const canvas = this.canvas;\n        let x=0;\n        let y=0;\n        grid.forEach((row, y) => {\n            // if (x===1) { \n                row.forEach((col, x) => {  \n                    switch (grid[y][x]) {\n                        case \"w\":\n                            canvas.drawWallBlock(x,y); \n                    }\n                });\n            // }\n        });\n        console.log(grid);\n        // canvas.drawWallBlock(0,0);\n    }\n\n    initializeCanvas() {\n        this.ctx.fillStyle = \"black\";\n        this.ctx.fillRect(0, 0, this.width, this.height);\n    }\n\n    renderWallBlock(x, y) {\n        let ctx = this.ctx;\n        let img = new Image();\n        img.src = rock;\n        x = x * this.wUnit;\n        y = y * this.hUnit;\n        img.onload = () => {\n            ctx.drawImage(img, x, y);\n        };\n    }\n\n\n    // puts given obj at given coordinates\n    position(obj, coord) {\n        let x = coord[0];\n        let y = coord[1];\n        this.grid[x][y] = obj;\n    }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Display);\n\n//# sourceURL=webpack:///./src/display.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _closetdash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./closetdash */ \"./src/closetdash.js\");\n/* harmony import */ var _closetdash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_closetdash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ \"./src/display.js\");\n/* harmony import */ var _board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board */ \"./src/board.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n    const canvas = document.getElementById(\"canvas\");\n    const display = new _display__WEBPACK_IMPORTED_MODULE_1__[\"default\"](canvas, 20);\n    const game = new _closetdash__WEBPACK_IMPORTED_MODULE_0___default.a(display);\n    game.run();\n\n    canvas.addEventListener(\"mouseover\", game.displayPlay);\n    canvas.addEventListener(\"click\", game.handleClick);\n    canvas.addEventListener(\"onkkeydown\", e => {\n        console.log(e);\n    });\n});\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });