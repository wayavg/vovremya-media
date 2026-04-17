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
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./src/javascripts/burger.js
var burger = __webpack_require__(248);
;// ./src/javascripts/confetti.js
function startConfetti(startX, startY) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var pieces = [];
  var numberOfPieces = 45; // Количество частичек при одном клике

  // Твоя палитра цветов
  var colors = ["#0B1956", "#003273", "#044B9C", "#3366C1", "#5882E3", "#7CA0FF", "#A2BFFF", "#C8DFFF", "#EAF4FF", "#FFFFFF", "#FFF7E4", "#F8F4EB"];
  function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(function (p, i) {
      // Движение
      p.yVel += p.gravity; // Гравитация тянет частицу вниз (увеличивает yVel)
      p.y += p.yVel; // Применяем скорость к координате Y
      p.x += p.drift;

      // Плавное затухание (частички исчезают со временем)
      p.opacity -= 0.015;
      ctx.save();
      ctx.globalAlpha = p.opacity; // Применяем прозрачность
      ctx.fillStyle = p.color;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();

      // Удаляем частицу, если она улетела или стала прозрачной
      if (p.y > canvas.height || p.opacity <= 0 || p.x < -50) {
        pieces.splice(i, 1);
      }
    });
    if (pieces.length > 0) {
      requestAnimationFrame(update);
    }
  }

  // Создаем взрыв частиц из координат чекбокса
  for (var i = 0; i < numberOfPieces; i++) {
    pieces.push({
      x: startX,
      y: startY,
      size: Math.random() * 7 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      drift: Math.random() * -6 - 2,
      // Скорость влево (от -2 до -8)
      yVel: Math.random() * -5 - 5,
      // Начальный мощный прыжок ВВЕРХ (от -5 до -15)
      gravity: 0.5,
      rotation: Math.random() * Math.PI,
      spin: Math.random() * 0.2,
      opacity: 1
    });

    // Придаем начальный импульс "взрыва"
    pieces[i].y += pieces[i].yVel;
  }
  update();
}
;// ./src/javascripts/checklist.js

document.addEventListener('DOMContentLoaded', function () {
  var checkboxes = document.querySelectorAll('.checklist-checkbox__box');
  var numberDisplay = document.querySelector('.checklist-number');
  var counter = document.querySelector('.checklist-amount');
  if (numberDisplay) {
    numberDisplay.textContent = checkboxes.length;
  }
  checkboxes.forEach(function (box) {
    box.addEventListener('click', function () {
      box.classList.toggle('active');
      var amountActive = document.querySelectorAll('.active');
      counter.textContent = amountActive.length;
      if (box.classList.contains('active')) {
        var rect = box.getBoundingClientRect();
        var centerX = rect.left + rect.width / 2;
        var centerY = rect.top + rect.height / 2;
        startConfetti(centerX, centerY);
      }
    });
  });
});
;// ./src/javascripts/index.js



// import './tests/test1.js';

console.log('hey');
})();

/******/ })()
;