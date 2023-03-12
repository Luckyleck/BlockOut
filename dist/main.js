/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/board */ \"./src/scripts/board.js\");\n\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//     console.log(\"hello world\")\n//     const main = document.getElementById(\"main\");\n//     new Example(main);\n// });\n\ncanvas.width = Math.floor(0.75 * window.innerWidth);\ncanvas.height = Math.floor(0.8 * window.innerHeight);\nconsole.log('hello');//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBbUM7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUFDLE1BQU0sQ0FBQ0MsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBVSxDQUFDO0FBQ25ETCxNQUFNLENBQUNNLE1BQU0sR0FBR0osSUFBSSxDQUFDQyxLQUFLLENBQUMsR0FBRyxHQUFHQyxNQUFNLENBQUNHLFdBQVcsQ0FBQztBQUVwREMsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BsZWVmLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvYXJkIGZyb20gXCIuL3NjcmlwdHMvYm9hcmRcIlxyXG5cclxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4vLyAgICAgY29uc29sZS5sb2coXCJoZWxsbyB3b3JsZFwiKVxyXG4vLyAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcclxuLy8gICAgIG5ldyBFeGFtcGxlKG1haW4pO1xyXG4vLyB9KTtcclxuXHJcbmNhbnZhcy53aWR0aCA9IE1hdGguZmxvb3IoMC43NSAqIHdpbmRvdy5pbm5lcldpZHRoKTtcclxuY2FudmFzLmhlaWdodCA9IE1hdGguZmxvb3IoMC44ICogd2luZG93LmlubmVySGVpZ2h0KTtcclxuXHJcbmNvbnNvbGUubG9nKCdoZWxsbycpIl0sIm5hbWVzIjpbIkJvYXJkIiwiY2FudmFzIiwid2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/board.js":
/*!******************************!*\
  !*** ./src/scripts/board.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile.js */ \"./src/scripts/tile.js\");\n/* harmony import */ var _boundary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boundary.js */ \"./src/scripts/boundary.js\");\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\nconst canvas = document.getElementById(\"canvas\");\nconst c = canvas.getContext(\"2d\");\nc.fillRect(20, 20, 20, 20);\nclass Board {\n  constructor() {\n    this.tiles = [];\n    for (let i = 0; i < Board.map.length; i++) {\n      for (let j = 0; j < Board.map[i].length; j++) {\n        if (Board.map[i][j] = \" \") {\n          Board.map[i][j] = new _tile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](i,\n          // x\n          j // y\n          );\n        } else {\n          Board.map[i][j] = new _boundary_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](i,\n          // x\n          j // y\n          );\n        }\n      }\n    }\n  }\n}\n_defineProperty(Board, \"tiles\", []);\n_defineProperty(Board, \"map\", [[\"-\", \"-\", \"-\", \"-\", \"-\", \"-\", \"-\", \"-\", \"-\", \"-\", \"-\", \"-\"], [\"-\", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \"-\"], [\"-\", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \"-\"], [\"-\", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \"-\"], [\"-\", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \"-\"], [\"-\", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \"-\"], [\"-\", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \"-\"], [\"-\", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \"-\"], [\"-\", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \"-\"], [\"-\", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \"-\"], [\"-\", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \"-\"], [\"-\", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \" \", \"-\"], [\"-\", \"-\", \"-\", \"-\", \"-\", \"-\", \"-\", \"-\", \"-\", \"-\", \"-\", \"-\"]]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Board);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ib2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBNEI7QUFDUTtBQUVwQyxNQUFNRSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFFBQVEsQ0FBQztBQUNoRCxNQUFNQyxDQUFDLEdBQUdILE1BQU0sQ0FBQ0ksVUFBVSxDQUFDLElBQUksQ0FBQztBQUVqQ0QsQ0FBQyxDQUFDRSxRQUFRLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBRTFCLE1BQU1DLEtBQUssQ0FBQztFQW9CUkMsV0FBV0EsQ0FBQSxFQUFHO0lBRVYsSUFBSSxDQUFDQyxLQUFLLEdBQUcsRUFBRTtJQUVmLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHSCxLQUFLLENBQUNJLEdBQUcsQ0FBQ0MsTUFBTSxFQUFFRixDQUFDLEVBQUUsRUFBRTtNQUN2QyxLQUFLLElBQUlHLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR04sS0FBSyxDQUFDSSxHQUFHLENBQUNELENBQUMsQ0FBQyxDQUFDRSxNQUFNLEVBQUVDLENBQUMsRUFBRSxFQUFFO1FBQzFDLElBQUlOLEtBQUssQ0FBQ0ksR0FBRyxDQUFDRCxDQUFDLENBQUMsQ0FBQ0csQ0FBQyxDQUFDLEdBQUcsR0FBRyxFQUFFO1VBQ3ZCTixLQUFLLENBQUNJLEdBQUcsQ0FBQ0QsQ0FBQyxDQUFDLENBQUNHLENBQUMsQ0FBQyxHQUFHLElBQUlkLGdEQUFJLENBQ3RCVyxDQUFDO1VBQUU7VUFDSEcsQ0FBQyxDQUFFO1VBQUEsQ0FDTjtRQUNMLENBQUMsTUFBTTtVQUNITixLQUFLLENBQUNJLEdBQUcsQ0FBQ0QsQ0FBQyxDQUFDLENBQUNHLENBQUMsQ0FBQyxHQUFHLElBQUliLG9EQUFRLENBQzFCVSxDQUFDO1VBQUU7VUFDSEcsQ0FBQyxDQUFFO1VBQUEsQ0FDTjtRQUNMO01BQ0o7SUFDSjtFQUdKO0FBRUo7QUFBQ0MsZUFBQSxDQTNDS1AsS0FBSyxXQUVRLEVBQUU7QUFBQU8sZUFBQSxDQUZmUCxLQUFLLFNBSU0sQ0FDVCxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzVELENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDNUQsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUM1RCxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzVELENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDNUQsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUM1RCxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzVELENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDNUQsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUM1RCxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQzVELENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFDNUQsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUM1RCxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQy9EO0FBMkJMLCtEQUFlQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BsZWVmLy4vc3JjL3NjcmlwdHMvYm9hcmQuanM/YmNiMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGlsZSBmcm9tICcuL3RpbGUuanMnXHJcbmltcG9ydCBCb3VuZGFyeSBmcm9tICcuL2JvdW5kYXJ5LmpzJ1xyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7XHJcbmNvbnN0IGMgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpXHJcblxyXG5jLmZpbGxSZWN0KDIwLCAyMCwgMjAsIDIwKVxyXG5cclxuY2xhc3MgQm9hcmQge1xyXG5cclxuICAgIHN0YXRpYyB0aWxlcyA9IFtdXHJcblxyXG4gICAgc3RhdGljIG1hcCA9IFtcclxuICAgICAgICBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcbiAgICAgICAgW1wiLVwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCItXCJdLFxyXG4gICAgICAgIFtcIi1cIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiLVwiXSxcclxuICAgICAgICBbXCItXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIi1cIl0sXHJcbiAgICAgICAgW1wiLVwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCItXCJdLFxyXG4gICAgICAgIFtcIi1cIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiLVwiXSxcclxuICAgICAgICBbXCItXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIi1cIl0sXHJcbiAgICAgICAgW1wiLVwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCItXCJdLFxyXG4gICAgICAgIFtcIi1cIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiLVwiXSxcclxuICAgICAgICBbXCItXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIi1cIl0sXHJcbiAgICAgICAgW1wiLVwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCItXCJdLFxyXG4gICAgICAgIFtcIi1cIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiIFwiLCBcIiBcIiwgXCIgXCIsIFwiLVwiXSxcclxuICAgICAgICBbXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIiwgXCItXCIsIFwiLVwiLCBcIi1cIl0sXHJcbiAgICBdXHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIHRoaXMudGlsZXMgPSBbXVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEJvYXJkLm1hcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IEJvYXJkLm1hcFtpXS5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKEJvYXJkLm1hcFtpXVtqXSA9IFwiIFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQm9hcmQubWFwW2ldW2pdID0gbmV3IFRpbGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGksIC8vIHhcclxuICAgICAgICAgICAgICAgICAgICAgICAgaiAgLy8geVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgQm9hcmQubWFwW2ldW2pdID0gbmV3IEJvdW5kYXJ5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpLCAvLyB4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGogIC8vIHlcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvYXJkO1xyXG5cclxuIl0sIm5hbWVzIjpbIlRpbGUiLCJCb3VuZGFyeSIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjIiwiZ2V0Q29udGV4dCIsImZpbGxSZWN0IiwiQm9hcmQiLCJjb25zdHJ1Y3RvciIsInRpbGVzIiwiaSIsIm1hcCIsImxlbmd0aCIsImoiLCJfZGVmaW5lUHJvcGVydHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/board.js\n");

/***/ }),

/***/ "./src/scripts/boundary.js":
/*!*********************************!*\
  !*** ./src/scripts/boundary.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nclass Boundary {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n    this.size = Boundary.size;\n  }\n}\n_defineProperty(Boundary, \"size\", 50);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Boundary);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ib3VuZGFyeS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBTUEsUUFBUSxDQUFDO0VBR1hDLFdBQVdBLENBQUNDLENBQUMsRUFBQ0MsQ0FBQyxFQUFFO0lBQ2IsSUFBSSxDQUFDRCxDQUFDLEdBQUdBLENBQUM7SUFDVixJQUFJLENBQUNDLENBQUMsR0FBR0EsQ0FBQztJQUNWLElBQUksQ0FBQ0MsSUFBSSxHQUFHSixRQUFRLENBQUNJLElBQUk7RUFDN0I7QUFDSjtBQUFDQyxlQUFBLENBUktMLFFBQVEsVUFDSSxFQUFFO0FBU3BCLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BsZWVmLy4vc3JjL3NjcmlwdHMvYm91bmRhcnkuanM/MWYwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBCb3VuZGFyeSB7XHJcbiAgICBzdGF0aWMgc2l6ZSA9IDUwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHgseSkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7IFxyXG4gICAgICAgIHRoaXMueSA9IHlcclxuICAgICAgICB0aGlzLnNpemUgPSBCb3VuZGFyeS5zaXplO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb3VuZGFyeSJdLCJuYW1lcyI6WyJCb3VuZGFyeSIsImNvbnN0cnVjdG9yIiwieCIsInkiLCJzaXplIiwiX2RlZmluZVByb3BlcnR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/boundary.js\n");

/***/ }),

/***/ "./src/scripts/tile.js":
/*!*****************************!*\
  !*** ./src/scripts/tile.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nclass Tile {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n    this.size = Tile.size;\n    this.health = 3;\n    this.visible = true;\n    this.row;\n    this.col;\n  }\n}\n_defineProperty(Tile, \"size\", 50);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tile);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90aWxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNQSxJQUFJLENBQUM7RUFJUEMsV0FBV0EsQ0FBQ0MsQ0FBQyxFQUFFQyxDQUFDLEVBQUU7SUFDZCxJQUFJLENBQUNELENBQUMsR0FBR0EsQ0FBQztJQUNWLElBQUksQ0FBQ0MsQ0FBQyxHQUFHQSxDQUFDO0lBQ1YsSUFBSSxDQUFDQyxJQUFJLEdBQUdKLElBQUksQ0FBQ0ksSUFBSTtJQUNyQixJQUFJLENBQUNDLE1BQU0sR0FBRyxDQUFDO0lBQ2YsSUFBSSxDQUFDQyxPQUFPLEdBQUcsSUFBSTtJQUNuQixJQUFJLENBQUNDLEdBQUc7SUFDUixJQUFJLENBQUNDLEdBQUc7RUFDWjtBQUdKO0FBQUNDLGVBQUEsQ0FmS1QsSUFBSSxVQUVRLEVBQUU7QUFlcEIsK0RBQWVBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGxlZWYvLi9zcmMvc2NyaXB0cy90aWxlLmpzPzBlYmQiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVGlsZSB7XHJcblxyXG4gICAgc3RhdGljIHNpemUgPSA1MDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMuc2l6ZSA9IFRpbGUuc2l6ZTtcclxuICAgICAgICB0aGlzLmhlYWx0aCA9IDM7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnJvdztcclxuICAgICAgICB0aGlzLmNvbDtcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaWxlOyJdLCJuYW1lcyI6WyJUaWxlIiwiY29uc3RydWN0b3IiLCJ4IiwieSIsInNpemUiLCJoZWFsdGgiLCJ2aXNpYmxlIiwicm93IiwiY29sIiwiX2RlZmluZVByb3BlcnR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/tile.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGxlZWYvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;