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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/code.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/code.js":
/*!********************!*\
  !*** ./js/code.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _door__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./door */ \"./js/door.js\");\n/* harmony import */ var _textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textarea */ \"./js/textarea.js\");\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.json */ \"./js/data.json\");\nvar _data_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data.json */ \"./js/data.json\", 1);\n // загружает нашу дверку, точнее ее класс\n\n // загружаем всю информацию из JSON\n\nlet root = document.getElementById(\"root\"); // основной корневой элемент\n\n\nconst house = document.createElement(\"div\");\nlet wrap_code = document.createElement(\"div\");\nwrap_code.classList.add(\"wrap_code\")\nlet textarea = new _textarea__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"textarea\",5, 5, \"code_space\" )\nconst btn = document.createElement(\"button\")\nlet text_area = textarea.createEl();\nroot.appendChild(house);\nroot.appendChild(wrap_code)\n\nwrap_code.append(text_area)\nwrap_code.appendChild(btn)\nhouse.classList.add(\"wrapper\");\nbtn.innerText = \"Отправить\";\n\nconst codemirrorEditor = CodeMirror.fromTextArea(text_area, {\n    lineNumbers: true,\n    mode: \"javascript\",\n    theme: \"base16-dark\",\n});\n\nclass RegExp1 extends RegExp {\n    [Symbol.split](str, limit) {\n        const result = RegExp.prototype[Symbol.split].call(this, str, limit);\n        return result.map(x => `(${x})`);\n    }\n}\n\n\n// document.getElementsByClassName(\"CodeMirror-scroll\")[0].fontSize = \"20px\"\n\n\nbtn.onclick = () =>{\n    try {\n        // house.style.justifyContent = \"center\";\n        let codeMirror = document.querySelector(\".CodeMirror-code\");\n        let codes = codeMirror.querySelectorAll(\"pre\");\n        let codes_arr = [...codes];\n        let str_code = \"\";\n        codes_arr.map((el)=>{\n            str_code += el.textContent;\n        })\n        console.log(str_code);\n        eval(str_code);\n\n\n    } catch (er){\n        console.log(er);\n    }\n}\n\n\n\n\nfor (let i = 0; i < 3; i++) {\n    let door = new _door__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"img\",`img/${_data_json__WEBPACK_IMPORTED_MODULE_2__.img[i]}`, \"просто дверь\", \"door\") // генерация двери\n    house.insertAdjacentElement(\"afterbegin\", door.createEl());\n}\n\n\n\n//# sourceURL=webpack:///./js/code.js?");

/***/ }),

/***/ "./js/data.json":
/*!**********************!*\
  !*** ./js/data.json ***!
  \**********************/
/*! exports provided: img, instruction, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"img\\\":[\\\"door_red.png\\\",\\\"door_purple.png\\\",\\\"door_yellow.png\\\"],\\\"instruction\\\":[\\\"На элемент home уже назначены flex. Назначьте home свойство space-around\\\",\\\"Теперь вам нужно написать код, который назначит каждой двери в виде последнего предка тыкву\\\"]}\");\n\n//# sourceURL=webpack:///./js/data.json?");

/***/ }),

/***/ "./js/door.js":
/*!********************!*\
  !*** ./js/door.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Door; });\nclass Door{\n    constructor(name, src, alt, classText) {\n        this.name = name;\n        this.src = src;\n        this.alt = alt;\n        this.classText = classText;\n    }\n    createEl(){\n        let el = document.createElement(this.name);\n        el.src = this.src;\n        el.alt = this.alt;\n        el.classList.add(this.classText);\n        return el;\n    }\n}\n\n\n//# sourceURL=webpack:///./js/door.js?");

/***/ }),

/***/ "./js/textarea.js":
/*!************************!*\
  !*** ./js/textarea.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Textarea; });\nclass Textarea{\n    constructor(name, cols, rows, classText) {\n        this.name = name;\n        this.cols = cols;\n        this.rows = rows;\n        this.classText = classText;\n    }\n    createEl(){\n        let el = document.createElement(this.name);\n        el.cols = this.cols;\n        el.rows = this.rows;\n        el.classList.add(this.classText);\n        return el;\n    }\n}\n\n\n//# sourceURL=webpack:///./js/textarea.js?");

/***/ })

/******/ });