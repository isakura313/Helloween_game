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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/code.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/code.ts":
/*!********************!*\
  !*** ./js/code.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _img__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img */ \"./js/img.ts\");\n // загружает нашу дверку, точнее ее класс\n// получаем отсюда наш код\nvar instructions = [\n    \"Совсем скоро будет Halloween, а в городе еще не готовo к нему. Надпись наверху совсем не раскрашена в цвета праздника. С помощью JavaScript назначьте тегу h1 красный цвет\",\n    \"На элемент wrapper уже назначены flex. Назначьте ему свойство space-around c помощью свойства style, чтобы расставить элементы по центру\",\n    \"Теперь вам нужно написать код, который назначит каждой двери в виде последнего предка Монстрика.  Изображение тыква уже создано и существует в виде виде переменной pumpkin\",\n    \"Запустите музыку на странице, использовав интерфейс Audio. в которой уже есть переменная Music\",\n    \"Теперь вам нужно на каждом тыковке повесить обработчик, чтобы при клике на pumkin раздавался зловей смех evil_laught\"\n];\nvar right_codes = [\n    'document.querySelector(\"h1\").style.color = \"red\";',\n    'wrapper.style.justifyContent = \"space-between\";',\n    'const doors = document.querySelectorAll(\".door\");\\n' +\n        'for(let i = 0; i < 3; i++){\\n' +\n        '    doors[i].insertAdjacentElement(\"afterend\",objs[i]);\\n' +\n        '}\\n' +\n        '\\n',\n    'let audio = new Audio(\"sounds/music.mp3\");\\n' +\n        'audio.play()'\n];\n// for(let i = 0; i < 3; i++){\n//     doors[i].insertAdjacentElement(\"afterend\",objs[i]);\n// }\nvar images = [\"door_red.png\", \"door_purple.png\", \"door_yellow.png\"];\nvar root = (document.getElementById(\"root\")); // основной корневой элемент\nvar wrapper = (document.querySelector(\".wrapper\")); // обертка этой штуки\nvar code_field = (document.querySelector('textarea'));\nvar button = (document.querySelector(\".add_code\"));\nvar advise = (document.querySelector(\".advise\"));\nvar counter = 0;\nadvise.textContent = instructions[counter];\nbutton.onclick = function () {\n    try {\n        var code = code_field.value;\n        if (counter == 2) {\n            var obj_on_doors = [\"pumkin\", 'lollipop', \"bat\"];\n            var objs = [];\n            var doors = document.querySelectorAll(\".door\");\n            for (var i = 0; i < obj_on_doors.length; i++) {\n                var obj_on_door = document.createElement(\"img\");\n                obj_on_door.src = \"img/\" + obj_on_doors[i] + \".png\";\n                obj_on_door.className = obj_on_doors[i];\n                obj_on_door.style.width = \"60px\";\n                obj_on_door.style.height = \"60px\";\n                objs.push(obj_on_door);\n                var pumkin = objs[0], lollipop = objs[1], bat = objs[2];\n            }\n        }\n        else if (code == right_codes[counter]) {\n            var audio = new Audio(\"sounds/heartbeat.mp3\");\n            audio.play();\n            eval(code);\n            counter += 1;\n            advise.textContent = instructions[counter];\n        }\n    }\n    catch (er) {\n        var audio = new Audio('sounds/witch_2.mp3');\n        audio.play().then(function (r) { return alert(\"Произошла ошибка\"); });\n    }\n};\nfor (var i = 0; i < 3; i++) {\n    var door = new _img__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"img\", \"img/\" + images[i], \"просто дверь\", \"door\"); // генерация двери\n    wrapper.insertAdjacentElement(\"afterbegin\", door.createEl());\n}\n//const doors = document.querySelectorAll(\".door\");\n// for(let i = 0; i < 3; i++){\n//     doors[i].insertAdjacentElement(\"afterend\", objs[i]);\n// }\n//\n//\n//\n// let pum= document.querySelector(\".pumkin\");\n// pum.onclick = ()=>{\n//     let sound = new Audio(\"sounds/witch_2.mp3\");\n//     sound.play()\n// }\n// document.querySelector(\".pumkin\").onclick = ()=>{\n//     let sound = new Audio(\"sounds/witch_2.mp3\");\n//     sound.play()\n// }\n\n\n//# sourceURL=webpack:///./js/code.ts?");

/***/ }),

/***/ "./js/img.ts":
/*!*******************!*\
  !*** ./js/img.ts ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar Img = /** @class */ (function () {\n    function Img(name, src, alt, classText) {\n        this.name = name;\n        this.src = src;\n        this.alt = alt;\n        this.classText = classText;\n    }\n    Img.prototype.createEl = function () {\n        var el = (document.createElement(this.name));\n        el.src = this.src;\n        el.alt = this.alt;\n        el.classList.add(this.classText);\n        return el;\n    };\n    return Img;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (Img);\n\n\n//# sourceURL=webpack:///./js/img.ts?");

/***/ })

/******/ });