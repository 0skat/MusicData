/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// const file = require (\"./ArtistSales.json\")\nvar songs = __webpack_require__(/*! ./SongData.json */ \"./src/SongData.json\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  console.log(songs[0].acousticness);\n}); //methods to populate chart data \n\nfunction createAccRows(arr) {\n  var accRows = [];\n\n  for (var i = 0; i < arr.length; i++) {\n    accRows.push([arr[i].name + \", \" + arr[i].artists, arr[i].acousticness]);\n  }\n\n  return accRows;\n}\n\n; //dance-data \n\nfunction createDanceRows(arr) {\n  var danceRows = [];\n\n  for (var i = 0; i < arr.length; i++) {\n    danceRows.push([arr[i].name + \", \" + arr[i].artists, arr[i].danceability]);\n  }\n\n  return danceRows;\n}\n\n; //Popular-data \n\nfunction createPopularRows(arr) {\n  var popularityRows = [];\n\n  for (var i = 0; i < arr.length; i++) {\n    popularityRows.push([arr[i].name + \", \" + arr[i].artists, arr[i].popularity]);\n  }\n\n  return popularityRows;\n}\n\n; //Energy-data \n\nfunction createEnergyRows(arr) {\n  var energyRows = [];\n\n  for (var i = 0; i < arr.length; i++) {\n    energyRows.push([arr[i].name + \", \" + arr[i].artists, arr[i].energy]);\n  }\n\n  return energyRows;\n}\n\n; //Energy-data \n\nfunction createTempoRows(arr) {\n  var tempoRows = [];\n\n  for (var i = 0; i < arr.length; i++) {\n    tempoRows.push([arr[i].name + \", \" + arr[i].artists, arr[i].tempo]);\n  }\n\n  return tempoRows;\n}\n\n; //Accoustic Chart\n\nanychart.onDocumentReady(function () {\n  // set the data\n  var data = {\n    header: [\"Song Title\", \"Accouticness (dB)\"],\n    rows: createAccRows(songs)\n  }; // create the chart\n\n  var chart = anychart.column(); // add the data\n\n  chart.data(data); // set the chart title\n\n  chart.title(\"Accoustic Levels, by Song\"); // draw\n\n  chart.container(\"Accoustic\");\n  chart.draw();\n}); //Danceability chart \n\nanychart.onDocumentReady(function () {\n  var data = {\n    header: [\"Song Title\", \"Danceability\"],\n    rows: createDanceRows(songs)\n  };\n  var chart = anychart.column();\n  chart.data(data);\n  chart.title(\"Danceability, by Song\");\n  chart.container(\"Dance\");\n  chart.draw();\n}); //Popularity chart \n\nanychart.onDocumentReady(function () {\n  var data = {\n    header: [\"Song Title\", \"Popularity\"],\n    rows: createPopularRows(songs)\n  };\n  var chart = anychart.column();\n  chart.data(data);\n  chart.title(\"Popularity, by Song\");\n  chart.container(\"Popular\");\n  chart.draw();\n}); //Energy chart \n\nanychart.onDocumentReady(function () {\n  var data = {\n    header: [\"Song Title\", \"Energy\"],\n    rows: createEnergyRows(songs)\n  };\n  var chart = anychart.column();\n  chart.data(data);\n  chart.title(\"Energy, by Song\");\n  chart.container(\"Energy\");\n  chart.draw();\n}); //Tempo chart \n\nanychart.onDocumentReady(function () {\n  var data = {\n    header: [\"Song Title\", \"Tempo\"],\n    rows: createTempoRows(songs)\n  };\n  var chart = anychart.column();\n  chart.data(data);\n  chart.title(\"Tempo, by Song\");\n  chart.container(\"Tempo\");\n  chart.draw();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdwcm9qZWN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOlsic29uZ3MiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImFjb3VzdGljbmVzcyIsImNyZWF0ZUFjY1Jvd3MiLCJhcnIiLCJhY2NSb3dzIiwiaSIsImxlbmd0aCIsInB1c2giLCJuYW1lIiwiYXJ0aXN0cyIsImNyZWF0ZURhbmNlUm93cyIsImRhbmNlUm93cyIsImRhbmNlYWJpbGl0eSIsImNyZWF0ZVBvcHVsYXJSb3dzIiwicG9wdWxhcml0eVJvd3MiLCJwb3B1bGFyaXR5IiwiY3JlYXRlRW5lcmd5Um93cyIsImVuZXJneVJvd3MiLCJlbmVyZ3kiLCJjcmVhdGVUZW1wb1Jvd3MiLCJ0ZW1wb1Jvd3MiLCJ0ZW1wbyIsImFueWNoYXJ0Iiwib25Eb2N1bWVudFJlYWR5IiwiZGF0YSIsImhlYWRlciIsInJvd3MiLCJjaGFydCIsImNvbHVtbiIsInRpdGxlIiwiY29udGFpbmVyIiwiZHJhdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBLElBQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBRSw0Q0FBRixDQUFyQjs7QUFHQUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBSTtBQUNoREMsU0FBTyxDQUFDQyxHQUFSLENBQVlMLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU00sWUFBckI7QUFDRCxDQUZELEUsQ0FJQTs7QUFDQSxTQUFTQyxhQUFULENBQXVCQyxHQUF2QixFQUE0QjtBQUMxQixNQUFNQyxPQUFPLEdBQUcsRUFBaEI7O0FBQ0EsT0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdGLEdBQUcsQ0FBQ0csTUFBdkIsRUFBK0JELENBQUMsRUFBaEMsRUFBbUM7QUFDakNELFdBQU8sQ0FBQ0csSUFBUixDQUFhLENBQUNKLEdBQUcsQ0FBQ0UsQ0FBRCxDQUFILENB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QUFmLENBREQ7QUFFUEMsUUFBSSxFQUNKVixnQkFBZ0IsQ0FBQ3JCLEtBQUQ7QUFIVCxHQUFYO0FBTUEsTUFBSWdDLEtBQUssR0FBR0wsUUFBUSxDQUFDTSxNQUFULEVBQVo7QUFFQUQsT0FBSyxDQUFDSCxJQUFOLENBQVdBLElBQVg7QUFFQUcsT0FBSyxDQUFDRSxLQUFOLENBQVksaUJBQVo7QUFFQUYsT0FBSyxDQUFDRyxTQUFOLENBQWdCLFFBQWhCO0FBQ0FILE9BQUssQ0FBQ0ksSUFBTjtBQUNELENBZkQsRSxDQWlCQTs7QUFDQVQsUUFBUSxDQUFDQyxlQUFULENBQXlCLFlBQVc7QUFDbEMsTUFBSUMsSUFBSSxHQUFHO0FBQ1BDLFVBQU0sRUFBRSxDQUFDLFlBQUQsRUFBZSxPQUFmLENBREQ7QUFFUEMsUUFBSSxFQUNKUCxlQUFlLENBQUN4QixLQUFEO0FBSFIsR0FBWDtBQU1BLE1BQUlnQyxLQUFLLEdBQUdMLFFBQVEsQ0FBQ00sTUFBVCxFQUFaO0FBRUFELE9BQUssQ0FBQ0gsSUFBTixDQUFXQSxJQUFYO0FBRUFHLE9BQUssQ0FBQ0UsS0FBTixDQUFZLGdCQUFaO0FBRUFGLE9BQUssQ0FBQ0csU0FBTixDQUFnQixPQUFoQjtBQUNBSCxPQUFLLENBQUNJLElBQU47QUFDRCxDQWZEIiwiZmlsZSI6Ii4vc3JjL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgZmlsZSA9IHJlcXVpcmUgKFwiLi9BcnRpc3RTYWxlcy5qc29uXCIpXG5jb25zdCBzb25ncyA9IHJlcXVpcmUgKFwiLi9Tb25nRGF0YS5qc29uXCIpXG5cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcbiAgY29uc29sZS5sb2coc29uZ3NbMF0uYWNvdXN0aWNuZXNzKVxufSlcbiAgXG4vL21ldGhvZHMgdG8gcG9wdWxhdGUgY2hhcnQgZGF0YSBcbmZ1bmN0aW9uIGNyZWF0ZUFjY1Jvd3MoYXJyKSB7XG4gIGNvbnN0IGFjY1Jvd3MgPSBbXTsgXG4gIGZvcihsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspe1xuICAgIGFjY1Jvd3MucHVzaChbYXJyW2ldLm5hbWUgKyBcIiwgXCIrIGFycltpXS5hcnRpc3RzLCBhcnJbaV0uYWNvdXN0aWNuZXNzXSlcbiAgfVxuICByZXR1cm4gYWNjUm93czsgXG59O1xuXG4vL2RhbmNlLWRhdGEgXG5mdW5jdGlvbiBjcmVhdGVEYW5jZVJvd3MoYXJyKSB7XG4gIGNvbnN0IGRhbmNlUm93cyA9IFtdOyBcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgZGFuY2VSb3dzLnB1c2goW2FycltpXS5uYW1lICsgXCIsIFwiKyBhcnJbaV0uYXJ0aXN0cywgYXJyW2ldLmRhbmNlYWJpbGl0eV0pXG4gIH1cbiAgcmV0dXJuIGRhbmNlUm93czsgXG59O1xuXG4vL1BvcHVsYXItZGF0YSBcbmZ1bmN0aW9uIGNyZWF0ZVBvcHVsYXJSb3dzKGFycikge1xuICBjb25zdCBwb3B1bGFyaXR5Um93cyA9IFtdOyBcbiAgZm9yKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKyl7XG4gICAgcG9wdWxhcml0eVJvd3MucHVzaChbYXJyW2ldLm5hbWUgKyBcIiwgXCIrIGFycltpXS5hcnRpc3RzLCBhcnJbaV0ucG9wdWxhcml0eV0pXG4gIH1cbiAgcmV0dXJuIHBvcHVsYXJpdHlSb3dzOyBcbn07XG5cbi8vRW5lcmd5LWRhdGEgXG5mdW5jdGlvbiBjcmVhdGVFbmVyZ3lSb3dzKGFycikge1xuICBjb25zdCBlbmVyZ3lSb3dzID0gW107IFxuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICBlbmVyZ3lSb3dzLnB1c2goW2FycltpXS5uYW1lICsgXCIsIFwiKyBhcnJbaV0uYXJ0aXN0cywgYXJyW2ldLmVuZXJneV0pXG4gIH1cbiAgcmV0dXJuIGVuZXJneVJvd3M7IFxufTtcblxuLy9FbmVyZ3ktZGF0YSBcbmZ1bmN0aW9uIGNyZWF0ZVRlbXBvUm93cyhhcnIpIHtcbiAgY29uc3QgdGVtcG9Sb3dzID0gW107IFxuICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKXtcbiAgICB0ZW1wb1Jvd3MucHVzaChbYXJyW2ldLm5hbWUgKyBcIiwgXCIrIGFycltpXS5hcnRpc3RzLCBhcnJbaV0udGVtcG9dKVxuICB9XG4gIHJldHVybiB0ZW1wb1Jvd3M7IFxufTtcblxuXG4vL0FjY291c3RpYyBDaGFydFxuYW55Y2hhcnQub25Eb2N1bWVudFJlYWR5KGZ1bmN0aW9uKCkge1xuIFxuICAvLyBzZXQgdGhlIGRhdGFcbiAgdmFyIGRhdGEgPSB7XG4gICAgICBoZWFkZXI6IFtcIlNvbmcgVGl0bGVcIiwgXCJBY2NvdXRpY25lc3MgKGRCKVwiXSxcbiAgICAgIHJvd3M6IFxuICAgICAgICBjcmVhdGVBY2NSb3dzKHNvbmdzKVxuICB9O1xuXG4gIC8vIGNyZWF0ZSB0aGUgY2hhcnRcbiAgdmFyIGNoYXJ0ID0gYW55Y2hhcnQuY29sdW1uKCk7XG5cbiAgLy8gYWRkIHRoZSBkYXRhXG4gIGNoYXJ0LmRhdGEoZGF0YSk7XG5cbiAgLy8gc2V0IHRoZSBjaGFydCB0aXRsZVxuICBjaGFydC50aXRsZShcIkFjY291c3RpYyBMZXZlbHMsIGJ5IFNvbmdcIik7XG5cbiAgLy8gZHJhd1xuICBjaGFydC5jb250YWluZXIoXCJBY2NvdXN0aWNcIik7XG4gIGNoYXJ0LmRyYXcoKTtcbn0pO1xuXG4vL0RhbmNlYWJpbGl0eSBjaGFydCBcbmFueWNoYXJ0Lm9uRG9jdW1lbnRSZWFkeShmdW5jdGlvbigpIHtcbiAgdmFyIGRhdGEgPSB7XG4gICAgICBoZWFkZXI6IFtcIlNvbmcgVGl0bGVcIiwgXCJEYW5jZWFiaWxpdHlcIl0sXG4gICAgICByb3dzOiBcbiAgICAgICAgY3JlYXRlRGFuY2VSb3dzKHNvbmdzKVxuICB9O1xuXG4gIHZhciBjaGFydCA9IGFueWNoYXJ0LmNvbHVtbigpO1xuXG4gIGNoYXJ0LmRhdGEoZGF0YSk7XG5cbiAgY2hhcnQudGl0bGUoXCJEYW5jZWFiaWxpdHksIGJ5IFNvbmdcIik7XG5cbiAgY2hhcnQuY29udGFpbmVyKFwiRGFuY2VcIik7XG4gIGNoYXJ0LmRyYXcoKTtcbn0pO1xuXG4vL1BvcHVsYXJpdHkgY2hhcnQgXG5hbnljaGFydC5vbkRvY3VtZW50UmVhZHkoZnVuY3Rpb24oKSB7XG4gIHZhciBkYXRhID0ge1xuICAgICAgaGVhZGVyOiBbXCJTb25nIFRpdGxlXCIsIFwiUG9wdWxhcml0eVwiXSxcbiAgICAgIHJvd3M6IFxuICAgICAgICBjcmVhdGVQb3B1bGFyUm93cyhzb25ncylcbiAgfTtcblxuICB2YXIgY2hhcnQgPSBhbnljaGFydC5jb2x1bW4oKTtcblxuICBjaGFydC5kYXRhKGRhdGEpO1xuXG4gIGNoYXJ0LnRpdGxlKFwiUG9wdWxhcml0eSwgYnkgU29uZ1wiKTtcblxuICBjaGFydC5jb250YWluZXIoXCJQb3B1bGFyXCIpO1xuICBjaGFydC5kcmF3KCk7XG59KTtcblxuLy9FbmVyZ3kgY2hhcnQgXG5hbnljaGFydC5vbkRvY3VtZW50UmVhZHkoZnVuY3Rpb24oKSB7XG4gIHZhciBkYXRhID0ge1xuICAgICAgaGVhZGVyOiBbXCJTb25nIFRpdGxlXCIsIFwiRW5lcmd5XCJdLFxuICAgICAgcm93czogXG4gICAgICBjcmVhdGVFbmVyZ3lSb3dzKHNvbmdzKVxuICB9O1xuXG4gIHZhciBjaGFydCA9IGFueWNoYXJ0LmNvbHVtbigpO1xuXG4gIGNoYXJ0LmRhdGEoZGF0YSk7XG5cbiAgY2hhcnQudGl0bGUoXCJFbmVyZ3ksIGJ5IFNvbmdcIik7XG5cbiAgY2hhcnQuY29udGFpbmVyKFwiRW5lcmd5XCIpO1xuICBjaGFydC5kcmF3KCk7XG59KTtcblxuLy9UZW1wbyBjaGFydCBcbmFueWNoYXJ0Lm9uRG9jdW1lbnRSZWFkeShmdW5jdGlvbigpIHtcbiAgdmFyIGRhdGEgPSB7XG4gICAgICBoZWFkZXI6IFtcIlNvbmcgVGl0bGVcIiwgXCJUZW1wb1wiXSxcbiAgICAgIHJvd3M6IFxuICAgICAgY3JlYXRlVGVtcG9Sb3dzKHNvbmdzKVxuICB9O1xuXG4gIHZhciBjaGFydCA9IGFueWNoYXJ0LmNvbHVtbigpO1xuXG4gIGNoYXJ0LmRhdGEoZGF0YSk7XG5cbiAgY2hhcnQudGl0bGUoXCJUZW1wbywgYnkgU29uZ1wiKTtcblxuICBjaGFydC5jb250YWluZXIoXCJUZW1wb1wiKTtcbiAgY2hhcnQuZHJhdygpO1xufSk7XG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  } return it;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FuLW9iamVjdC5qcz84MjVhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hbi1vYmplY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKFN0cmluZyhpdCkgKyAnIGlzIG5vdCBhbiBvYmplY3QnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/core-js/internals/an-object.js\n");

/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// Detect IE8's incomplete defineProperty implementation\nmodule.exports = !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- required for testing\n  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2Rlc2NyaXB0b3JzLmpzPzgzYWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxtQkFBTyxDQUFDLHFFQUFvQjs7QUFFeEM7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLE1BQU0sbUJBQW1CLFVBQVUsRUFBRSxFQUFFO0FBQ3hFLENBQUMiLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZGVzY3JpcHRvcnMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxuLy8gRGV0ZWN0IElFOCdzIGluY29tcGxldGUgZGVmaW5lUHJvcGVydHkgaW1wbGVtZW50YXRpb25cbm1vZHVsZS5leHBvcnRzID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLW9iamVjdC1kZWZpbmVwcm9wZXJ0eSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAxLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KVsxXSAhPSA3O1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/core-js/internals/descriptors.js\n");

/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50LmpzP2NjMTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxlQUFlLG1CQUFPLENBQUMsNkVBQXdCOztBQUUvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcblxudmFyIGRvY3VtZW50ID0gZ2xvYmFsLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgRVhJU1RTID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gRVhJU1RTID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/core-js/internals/document-create-element.js\n");

/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/***/ (function(module) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ZhaWxzLmpzP2QwMzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9mYWlscy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/core-js/internals/fails.js\n");

/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line es/no-global-this -- safe\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  // eslint-disable-next-line no-restricted-globals -- safe\n  check(typeof self == 'object' && self) ||\n  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||\n  // eslint-disable-next-line no-new-func -- fallback\n  (function () { return this; })() || Function('return this')();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2dsb2JhbC5qcz9kYTg0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUJBQU0sZ0JBQWdCLHFCQUFNO0FBQzNDO0FBQ0EsZ0JBQWdCLGFBQWEsRUFBRSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9nbG9iYWwuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY2hlY2sgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICYmIGl0Lk1hdGggPT0gTWF0aCAmJiBpdDtcbn07XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG5tb2R1bGUuZXhwb3J0cyA9XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1nbG9iYWwtdGhpcyAtLSBzYWZlXG4gIGNoZWNrKHR5cGVvZiBnbG9iYWxUaGlzID09ICdvYmplY3QnICYmIGdsb2JhbFRoaXMpIHx8XG4gIGNoZWNrKHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgd2luZG93KSB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzIC0tIHNhZmVcbiAgY2hlY2sodHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZikgfHxcbiAgY2hlY2sodHlwZW9mIGdsb2JhbCA9PSAnb2JqZWN0JyAmJiBnbG9iYWwpIHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuYyAtLSBmYWxsYmFja1xuICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkoKSB8fCBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/core-js/internals/global.js\n");

/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  // eslint-disable-next-line es/no-object-defineproperty -- requied for testing\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lLmpzPzBjZmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ3BELFlBQVksbUJBQU8sQ0FBQyxxRUFBb0I7QUFDeEMsb0JBQW9CLG1CQUFPLENBQUMseUdBQXNDOztBQUVsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixVQUFVO0FBQ2hDLEdBQUc7QUFDSCxDQUFDIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2llOC1kb20tZGVmaW5lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBjcmVhdGVFbGVtZW50ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvY3VtZW50LWNyZWF0ZS1lbGVtZW50Jyk7XG5cbi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIURFU0NSSVBUT1JTICYmICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gcmVxdWllZCBmb3IgdGVzdGluZ1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGNyZWF0ZUVsZW1lbnQoJ2RpdicpLCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH1cbiAgfSkuYSAhPSA3O1xufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/core-js/internals/ie8-dom-define.js\n");

/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/***/ (function(module) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2lzLW9iamVjdC5qcz84NjFkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9pcy1vYmplY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/core-js/internals/is-object.js\n");

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\n\n// eslint-disable-next-line es/no-object-defineproperty -- safe\nvar $defineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.es/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? $defineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return $defineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanM/OWJmMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBMEI7QUFDcEQscUJBQXFCLG1CQUFPLENBQUMsdUZBQTZCO0FBQzFELGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0Msa0JBQWtCLG1CQUFPLENBQUMsbUZBQTJCOztBQUVyRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsZ0JBQWdCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pZTgtZG9tLWRlZmluZScpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXByaW1pdGl2ZScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWRlZmluZXByb3BlcnR5IC0tIHNhZmVcbnZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbi8vIGBPYmplY3QuZGVmaW5lUHJvcGVydHlgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZGVmaW5lcHJvcGVydHlcbmV4cG9ydHMuZiA9IERFU0NSSVBUT1JTID8gJGRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiAkZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCcpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/core-js/internals/object-define-property.js\n");

/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\n// `ToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3RvLXByaW1pdGl2ZS5qcz9jMDRlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy90by1wcmltaXRpdmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtb2JqZWN0Jyk7XG5cbi8vIGBUb1ByaW1pdGl2ZWAgYWJzdHJhY3Qgb3BlcmF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXRvcHJpbWl0aXZlXG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGlucHV0LCBQUkVGRVJSRURfU1RSSU5HKSB7XG4gIGlmICghaXNPYmplY3QoaW5wdXQpKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpbnB1dC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGlucHV0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUFJFRkVSUkVEX1NUUklORyAmJiB0eXBlb2YgKGZuID0gaW5wdXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaW5wdXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/core-js/internals/to-primitive.js\n");

/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f;\n\nvar FunctionPrototype = Function.prototype;\nvar FunctionPrototypeToString = FunctionPrototype.toString;\nvar nameRE = /^\\s*function ([^ (]*)/;\nvar NAME = 'name';\n\n// Function instances `.name` property\n// https://tc39.es/ecma262/#sec-function-instances-name\nif (DESCRIPTORS && !(NAME in FunctionPrototype)) {\n  defineProperty(FunctionPrototype, NAME, {\n    configurable: true,\n    get: function () {\n      try {\n        return FunctionPrototypeToString.call(this).match(nameRE)[1];\n      } catch (error) {\n        return '';\n      }\n    }\n  });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdwcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzP2IwYzAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ3BELHFCQUFxQiw4SEFBZ0Q7O0FBRXJFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5mdW5jdGlvbi5uYW1lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWRlZmluZS1wcm9wZXJ0eScpLmY7XG5cbnZhciBGdW5jdGlvblByb3RvdHlwZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbnZhciBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nID0gRnVuY3Rpb25Qcm90b3R5cGUudG9TdHJpbmc7XG52YXIgbmFtZVJFID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvO1xudmFyIE5BTUUgPSAnbmFtZSc7XG5cbi8vIEZ1bmN0aW9uIGluc3RhbmNlcyBgLm5hbWVgIHByb3BlcnR5XG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWZ1bmN0aW9uLWluc3RhbmNlcy1uYW1lXG5pZiAoREVTQ1JJUFRPUlMgJiYgIShOQU1FIGluIEZ1bmN0aW9uUHJvdG90eXBlKSkge1xuICBkZWZpbmVQcm9wZXJ0eShGdW5jdGlvblByb3RvdHlwZSwgTkFNRSwge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBGdW5jdGlvblByb3RvdHlwZVRvU3RyaW5nLmNhbGwodGhpcykubWF0Y2gobmFtZVJFKVsxXTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/core-js/modules/es.function.name.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdwcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEiLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ }),

/***/ "./src/SongData.json":
/*!***************************!*\
  !*** ./src/SongData.json ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('[{"valence":0.13,"year":2004,"acousticness":0.142,"artists":"Porter","danceability":0.301,"duration_ms":322013,"energy":0.676,"explicit":0,"id":"3LLMudAmQlHRqmD5BG3CQS","instrumentalness":0.00000385,"key":6,"liveness":0.123,"loudness":-6.66,"mode":1,"name":"Espiral","popularity":58,"release_date":"2004-11-11","speechiness":0.0344,"tempo":134.973},{"valence":0.57,"year":2014,"acousticness":0.212,"artists":"Isaiah Rashad","danceability":0.608,"duration_ms":260632,"energy":0.676,"explicit":1,"id":"0qLt7pQhm8LDxFgI0YXdlY","instrumentalness":0,"key":1,"liveness":0.347,"loudness":-7.56,"mode":1,"name":"Heavenly Father","popularity":63,"release_date":"2014-01-28","speechiness":0.248,"tempo":80.939},{"valence":0.514,"year":2010,"acousticness":0.0411,"artists":"Chicano Batman","danceability":0.545,"duration_ms":485122,"energy":0.403,"explicit":0,"id":"3tZ5EU9F0GoiHvaFo40fFt","instrumentalness":0.00106,"key":8,"liveness":0.555,"loudness":-8.125,"mode":0,"name":"Itotiani","popularity":44,"release_date":"2010-06-25","speechiness":0.0329,"tempo":92.322},{"valence":0.587,"year":2017,"acousticness":0.293,"artists":"The Marías","danceability":0.884,"duration_ms":209450,"energy":0.333,"explicit":0,"id":"4cJOLN346rtOty3UPACsao","instrumentalness":0.0205,"key":9,"liveness":0.103,"loudness":-9.753,"mode":0,"name":"I Don\'t Know You","popularity":67,"release_date":"2017-06-14","speechiness":0.0617,"tempo":118.065},{"valence":0.256,"year":2014,"acousticness":0.0302,"artists":"Freddie Gibbs","danceability":0.427,"duration_ms":226520,"energy":0.604,"explicit":1,"id":"6m192NGYZHIbO5UBkkM4oN","instrumentalness":0.000648,"key":11,"liveness":0.161,"loudness":-8.561,"mode":0,"name":"Thuggin’","popularity":56,"release_date":"2014-03-18","speechiness":0.203,"tempo":91.546},{"valence":0.592,"year":2010,"acousticness":0.0491,"artists":"Lord Echo","danceability":0.723,"duration_ms":420720,"energy":0.754,"explicit":0,"id":"1iMOlA78LDd12ZHhuBNDh6","instrumentalness":0.00112,"key":10,"liveness":0.393,"loudness":-9.376,"mode":1,"name":"Thinking of You","popularity":65,"release_date":"2010-12-06","speechiness":0.0576,"tempo":97.201},{"valence":0.734,"year":2020,"acousticness":0.27,"artists":"Junior H","danceability":0.576,"duration_ms":192391,"energy":0.604,"explicit":1,"id":"3WQilym5Vi4ypxb70vx0eY","instrumentalness":0,"key":5,"liveness":0.176,"loudness":-7.558,"mode":0,"name":"Mente Positiva","popularity":75,"release_date":"2020-03-27","speechiness":0.047,"tempo":99.746},{"valence":0.898,"year":2019,"acousticness":0.648,"artists":"Free Nationals","danceability":0.793,"duration_ms":193740,"energy":0.465,"explicit":0,"id":"1CbxG199T0fzfUV5EO7aPV","instrumentalness":0.000132,"key":5,"liveness":0.0871,"loudness":-8.134,"mode":0,"name":"Eternal Light","popularity":62,"release_date":"2019-12-13","speechiness":0.271,"tempo":141.85}]');

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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