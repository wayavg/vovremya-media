/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 248:
/***/ (() => {

// const burgerWrap = document.querySelector('.menu-header__burger');
// const burgerPopup = document.querySelector('.menu-header__content');
// const burgerMenu = document.querySelector('.menu-header__points');
// const burgerClose = document.querySelector('.menu-header__burger-close');

// burgerWrap.addEventListener('click', function(e) {
//     console.log('салага, работай пожалуйста работай')
//     burgerPopup.classList.add('active');
//     burgerMenu.classList.add('active');
//     burgerWrap.classList.remove('active');
//     burgerClose.classList.add('active');

// })

// burgerClose.addEventListener('click', function(e) {
//     burgerPopup.classList.remove('active');
//     burgerMenu.classList.remove('active');
//     burgerWrap.classList.add('active');
//     burgerClose.classList.remove('active');
// })

// console.log('djdjd')

var burgerBtn = document.querySelector('.menu-header__burger');
var menu = document.querySelector('.menu-header__content');
if (burgerBtn) {
  burgerBtn.addEventListener('click', function () {
    // Переключаем ОДИН класс active на кнопке и на меню
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
  });
}

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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(248);
/* harmony import */ var _burger_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_burger_js__WEBPACK_IMPORTED_MODULE_0__);


// import './tests/test1.js';

console.log('hey');
})();

/******/ })()
;