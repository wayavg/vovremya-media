/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 55:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/8a97c4e8d620b706fe77.woff2";

/***/ }),

/***/ 56:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 72:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 113:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 175:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/12967c5a5c6c5929eee3.svg";

/***/ }),

/***/ 215:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/4400001c6c44e043ec08.svg";

/***/ }),

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

/***/ }),

/***/ 260:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/8f8f0959f159a3467990.png";

/***/ }),

/***/ 314:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 330:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/39872d1d5c84cc9746cc.woff2";

/***/ }),

/***/ 384:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/ad5cbc489144cf5739bd.woff";

/***/ }),

/***/ 417:
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ 479:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/ef5a5581ec0c5703fe75.woff";

/***/ }),

/***/ 540:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 580:
/***/ (() => {

var dataGroup = [{
  question: "Сколько часов <br>в день вы спите?",
  answers: [{
    answer: 'Менее семи',
    points: 1
  }, {
    answer: 'Семь-девять',
    points: 2
  }, {
    answer: 'Более девяти',
    points: 3
  }]
}, {
  question: "Во сколько <br>вы ложитесь спать?",
  answers: [{
    answer: 'После 23.00',
    points: 1
  }, {
    answer: 'В 22.00-23.00',
    points: 2
  }, {
    answer: 'В 21.00-22.00',
    points: 3
  }]
}, {
  question: "Вы пользуетесь смартфоном <br>непосредственно перед отходом ко сну?",
  answers: [{
    answer: 'Да',
    points: 1
  }, {
    answer: 'Время от времени',
    points: 2
  }, {
    answer: 'Нет',
    points: 3
  }]
}, {
  question: "Вы засыпаете <br>в абсолютной темноте?",
  answers: [{
    answer: 'Нет',
    points: 1
  }, {
    answer: 'Да',
    points: 3
  }]
}, {
  question: "Окна вашей спальни <br>выходят на освещенную улицу?",
  answers: [{
    answer: 'Да',
    points: 1
  }, {
    answer: 'Нет',
    points: 3
  }]
}, {
  question: "Какая температура <br>в вашей спальне?",
  answers: [{
    answer: 'Выше 22 °С',
    points: 1
  }, {
    answer: 'Ниже 22 °С',
    points: 3
  }]
}];
var dataResult = [{
  start: 0,
  finish: 6,
  link: '/link1.html',
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit neque alias adipisci dolorem, reiciendis laboriosam inventore beatae, ipsam distinctio repellat quod voluptatibus repellendus eaque soluta quaerat saepe aliquam at quibusdam!'
}, {
  start: 7,
  finish: 12,
  link: '/link2.html',
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit neque alias adipisci dolorem, reiciendis laboriosam inventore beatae, ipsam distinctio repellat quod voluptatibus repellendus eaque soluta quaerat saepe aliquam at quibusdam! 1'
}, {
  start: 13,
  finish: 18,
  link: '/link3.html',
  description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit neque alias adipisci dolorem, reiciendis laboriosam inventore beatae, ipsam distinctio repellat quod voluptatibus repellendus eaque soluta quaerat saepe aliquam at quibusdam! 2'
}];
var questionStep = 1;
var pointsUser = [];
var textContainer = document.querySelector('.test');
var textCount = document.querySelector('.test-count');
var textTitle = document.querySelector('.test-title');
var textAnswers = document.querySelector('.test-answers');
var textActions = document.querySelector('.test-actions');

//Вариант теста с генерацией результат в HTML
function publicQuestion() {
  textAnswers.innerHTML = '';
  textActions.innerHTML = '';
  var questionNow = dataGroup[questionStep - 1];

  //Рендер заголовка вопроса и количество вопросов
  textCount.innerText = "\u0412\u043E\u043F\u0440\u043E\u0441 ".concat(questionStep, " / ").concat(dataGroup.length);
  textTitle.innerHTML = questionNow.question;

  //Рендер вариантов ответов
  questionNow['answers'].forEach(function (answerItem, answerIndex) {
    var answerDiv = document.createElement('div');
    answerDiv.className = 'test-answer';
    answerDiv.innerText = answerItem.answer;
    textAnswers.append(answerDiv);

    //Проверка на то, что вопрос был ранее пройден
    if (questionStep - 1 in pointsUser) {
      if (pointsUser[questionStep - 1] == answerIndex) {
        answerDiv.classList.add('active');
      }
    }
    answerDiv.addEventListener('click', function () {
      var answerButtons = document.querySelectorAll('.test-answer');
      answerButtons.forEach(function (buttonItem) {
        buttonItem.classList.remove('active');
      });
      answerDiv.classList.add('active');
    });
  });

  //Рендер кнопки назад
  if (questionStep > 1) {
    var buttonBack = document.createElement('div');
    buttonBack.className = 'secondary-button';
    buttonBack.innerText = 'Назад';
    textActions.append(buttonBack);
    buttonBack.addEventListener('click', function () {
      questionStep--;
      publicQuestion();
    });
  }

  //Рендер кнопки вперед
  var buttonForward = document.createElement('div');
  buttonForward.className = 'primary-button';
  buttonForward.innerText = 'Вперед';
  textActions.append(buttonForward);
  buttonForward.addEventListener('click', function () {
    var answerButtons = document.querySelectorAll('.test-answer');
    answerButtons.forEach(function (buttonItem, buttonIndex) {
      if (buttonItem.classList.contains('active')) {
        //Записываем текущий ответ
        pointsUser[questionStep - 1] = buttonIndex;

        //Проверка на существование следующего вопроса
        questionStep++;
        if (questionStep > dataGroup.length) {
          //Подсчет полученных баллов
          var resultFinish = 0;
          //pointsUserItem - индекс ответа
          //pointsUserIndex - индекс вопроса
          pointsUser.forEach(function (pointsUserItem, pointsUserIndex) {
            var pointItem = dataGroup[pointsUserIndex]['answers'][pointsUserItem].points;
            resultFinish = resultFinish + pointItem;
          });

          //Тест закончен и считаем баллы
          dataResult.forEach(function (resultItem) {
            if (resultFinish >= resultItem.start && resultFinish <= resultItem.finish) {
              //Рендерим контент результата прохождения теста
              textContainer.innerHTML = '';
              var resultDiv = document.createElement('div');
              resultDiv.className = 'test-result';
              textContainer.append(resultDiv);
              var resultTitleDiv = document.createElement('div');
              resultTitleDiv.className = 'test-result-title';
              resultTitleDiv.innerText = "\u0412\u0430\u0448 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442: ".concat(resultFinish);
              resultDiv.append(resultTitleDiv);
              var resultDescriptionDiv = document.createElement('div');
              resultDescriptionDiv.className = 'test-result-descr';
              resultDescriptionDiv.innerHTML = resultItem.description;
              resultDiv.append(resultDescriptionDiv);
            }
          });
        } else {
          publicQuestion();
        }
      }
    });
  });
}
publicQuestion();

/***/ }),

/***/ 601:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 618:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/abaf19b8aa49c9682d5a.woff";

/***/ }),

/***/ 659:
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ 694:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/53ca3a7ce874bab8aee0.svg";

/***/ }),

/***/ 732:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/90ecb776bbede347b0f5.svg";

/***/ }),

/***/ 739:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/9edeaf119c449bb180ea.woff2";

/***/ }),

/***/ 756:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/f95112aa48b1ad0c5bd4.png";

/***/ }),

/***/ 802:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/c4fdfe25a42a0a946d9d.svg";

/***/ }),

/***/ 825:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 892:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/61007385586f8caae47e.woff2";

/***/ }),

/***/ 921:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(618), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(892), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(995), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(739), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(384), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(330), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(479), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(55), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(694), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_9___ = new URL(/* asset import */ __webpack_require__(802), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_10___ = new URL(/* asset import */ __webpack_require__(756), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_11___ = new URL(/* asset import */ __webpack_require__(260), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_12___ = new URL(/* asset import */ __webpack_require__(175), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_13___ = new URL(/* asset import */ __webpack_require__(732), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_14___ = new URL(/* asset import */ __webpack_require__(215), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_9___);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_10___);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_11___);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_12___);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_13___);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_14___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}@font-face{font-family:"CoFoDrifter";src:url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("woff"),url(${___CSS_LOADER_URL_REPLACEMENT_1___}) format("woff2");font-weight:normal;font-style:normal}@font-face{font-family:"FreeSet";src:url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format("woff"),url(${___CSS_LOADER_URL_REPLACEMENT_3___}) format("woff2");font-weight:normal;font-style:normal;font-stretch:normal}@font-face{font-family:"FreeSet";src:url(${___CSS_LOADER_URL_REPLACEMENT_4___}) format("woff"),url(${___CSS_LOADER_URL_REPLACEMENT_5___}) format("woff2");font-weight:bold;font-style:normal;font-stretch:normal}@font-face{font-family:"FreeSet";src:url(${___CSS_LOADER_URL_REPLACEMENT_6___}) format("woff"),url(${___CSS_LOADER_URL_REPLACEMENT_7___}) format("woff2");font-weight:normal;font-style:normal;font-stretch:condensed}body{font-family:"FreeSet",serif;font-size:18px;line-height:1.3;color:#0b1956}@media(max-width: 991.8px){body{font-size:16px}}h1,h2,h3,.article-content__list ol,h4,.footer ul a,h5,.checklists-index__list ol,.article-card-medium__title,.article-card-large__title,h6,.footer .footer-people .title{font-family:"CoFoDrifter",sans-serif;text-transform:lowercase;line-height:.95;letter-spacing:-0.06em}h1{font-size:5rem}@media(max-width: 1119.8px){h1{font-size:4rem}}@media(max-width: 767.8px){h1{font-size:2.625rem}}h2{font-size:3.55rem}@media(max-width: 1119.8px){h2{font-size:3rem}}@media(max-width: 767.8px){h2{font-size:2rem}}h3,.article-content__list ol{font-size:2.44rem}@media(max-width: 1119.8px){h3,.article-content__list ol{font-size:2rem}}@media(max-width: 767.8px){h3,.article-content__list ol{font-size:1.625rem}}h4,.footer ul a{font-size:2rem}@media(max-width: 1119.8px){h4,.footer ul a{font-size:1.75rem}}@media(max-width: 767.8px){h4,.footer ul a{font-size:1.5rem}}h5,.checklists-index__list ol,.article-card-medium__title,.article-card-large__title{font-size:1.55rem}@media(max-width: 1119.8px){h5,.checklists-index__list ol,.article-card-medium__title,.article-card-large__title{font-size:1.5625rem}}@media(max-width: 767.8px){h5,.checklists-index__list ol,.article-card-medium__title,.article-card-large__title{font-size:1.25rem}}h6,.footer .footer-people .title{font-size:1.38rem}@media(max-width: 1119.8px){h6,.footer .footer-people .title{font-size:1.125rem}}@media(max-width: 767.8px){h6,.footer .footer-people .title{font-size:1.125rem}}a{text-decoration:none;color:#0b1956}a:hover{color:#044b9c}.paragraph{font-size:1.33rem;line-height:1.56}@media(max-width: 1119.8px){.paragraph{font-size:1.125rem}}@media(max-width: 767.8px){.paragraph{font-size:1.125rem}}.large-text{font-size:1.33rem}@media(max-width: 1119.8px){.large-text{font-size:1.125rem}}@media(max-width: 767.8px){.large-text{font-size:1.125rem}}.quote-card__text{font-family:"FreeSet",serif;font-weight:normal;font-style:normal;font-stretch:condensed;font-size:1.33rem;line-height:1.56}.breadcrumbs{display:flex;gap:8px}.breadcrumbs a{color:#7ca0ff;text-decoration:none}.breadcrumbs a:visited,.breadcrumbs a:active{color:#7ca0ff}.breadcrumbs a:hover{color:#044b9c}.breadcrumbs span{color:#7ca0ff}.breadcrumbs span:last-child{color:#7ca0ff}@media(max-width: 767.8px){.breadcrumbs{flex-wrap:wrap;row-gap:4px}}.secondary-button,.primary-button{appearance:none;background:rgba(0,0,0,0);border:none;padding:0;margin:0;font:inherit;color:inherit;cursor:pointer;outline:none;display:inline-flex;align-items:center;justify-content:center;font-family:"CoFoDrifter",sans-serif;font-size:24px;text-transform:lowercase;outline:none;display:inline-block;height:48px;padding-inline:32px;align-content:center}@media(max-width: 1119.8px){.secondary-button,.primary-button{font-size:20px;height:40px;padding-inline:24px}}@media(max-width: 767.8px){.secondary-button,.primary-button{font-size:18px;height:48px}}.primary-button{background-color:#5882e3;color:#fff;transition:color .3s cubic-bezier(0.25, 0.46, 0.45, 0.94);transition:background-color .3s cubic-bezier(0.25, 0.46, 0.45, 0.94)}.primary-button:hover{background-color:#c8dfff;color:#0b1956}.primary-button:active{background-color:#0b1956;color:#fff}.secondary-button{background-color:#c8dfff;transition:color .3s cubic-bezier(0.25, 0.46, 0.45, 0.94);transition:background-color .3s cubic-bezier(0.25, 0.46, 0.45, 0.94)}.secondary-button:hover{background-color:#5882e3;color:#fff}.secondary-button:active{background-color:#0b1956}.menu-header{position:fixed;z-index:1000;width:100%}.menu-header__container,.menu-header__points{display:flex;background-color:#fff;align-items:center}.menu-header__container{display:grid;grid-template-columns:repeat(2, 1fr);grid-template-rows:1fr;grid-column-gap:0px;grid-row-gap:0px;padding:4px 128px;max-width:1800px;margin-inline:auto}@media(max-width: 1600px){.menu-header__container{display:flex;justify-content:space-between}}@media(max-width: 1119.8px){.menu-header__container{padding-inline:64px}}@media(max-width: 991.8px){.menu-header__container{padding-inline:40px}}@media(max-width: 767.8px){.menu-header__container{width:100%;padding-inline:16px;position:relative}}.menu-header__nav{font-size:1.125rem;display:inline-block;padding-inline:16px;height:48px;align-content:center;transition:background-color .3s cubic-bezier(0.25, 0.46, 0.45, 0.94)}@media(max-width: 991.8px){.menu-header__nav{padding-inline:8px;height:40px;font-size:16px}}.menu-header__nav:hover{background-color:#c8dfff}@media(max-width: 767.8px){.menu-header__nav{width:100%;flex-direction:column;padding:auto;background-color:#fff;padding-inline:24px;height:48px}}@media(max-width: 991.8px){.menu-header__points{display:flex;gap:8px}}@media(max-width: 767.8px){.menu-header__points{display:flex;flex-direction:column;gap:8px;background-color:#c8dfff;align-items:normal}}@media(max-width: 767.8px){.menu-header__navigation{display:block;width:100%}}@media(max-width: 767.8px){.menu-header .secondary-button.mobile{background-color:#a2bfff;text-align:center}}.menu-header__logo{display:inline-block;height:56px}@media(max-width: 991.8px){.menu-header__logo{height:48px}.menu-header__logo img{height:48px}}.menu-header__content{grid-area:1/2/2/3;display:flex;justify-content:space-between;align-items:center}@media(max-width: 1600px){.menu-header__content{gap:32px}}@media(max-width: 767.8px){.menu-header__content{display:none}.menu-header__content.active{display:flex;flex-direction:column;position:absolute;top:56px;left:0px;width:100%;background-color:#c8dfff;align-items:normal;padding:16px;padding-top:32px}}.menu-header__logo-content{grid-area:1/1/2/2;display:flex}.menu-header__burger{display:none}@media(max-width: 767.8px){.menu-header__burger{display:flex}}.menu-header__burger,.menu-header__burger-close{display:none}@media(max-width: 767.8px){.menu-header__burger,.menu-header__burger-close{display:block;width:48px;height:48px;padding:6px;margin-right:-6px}}@media(max-width: 767.8px){.menu-header__burger-wrap{margin:auto;display:flex;width:32px;height:32px;flex-direction:column;gap:6px;justify-content:center}.menu-header__burger-wrap span{display:block;height:4px;background-color:#0b1956}}.footer__top-bg{width:100%;height:100px;background-color:#f8f4eb;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_8___});background-repeat:repeat-x;background-position:bottom;background-size:contain}.footer{background-color:#c8dfff}.footer__container{padding-block:64px;display:flex;flex-direction:column;gap:32px}.footer__main-content{display:flex;justify-content:space-between}@media(max-width: 767.8px){.footer__main-content{flex-direction:column;gap:32px}}.footer .footer-img{display:contents}.footer .footer-img img{width:70%;height:auto}@media(max-width: 767.8px){.footer .footer-img{display:block}.footer .footer-img img{width:100%}}.footer .menu{display:flex;flex-direction:column;gap:64px}.footer ul{display:flex;flex-direction:column;gap:16px}.footer ul a:hover{color:#5882e3}.footer ul a:hover::before{content:"--> "}.footer ul a:hover::after{content:" -->"}.footer .footer-social{display:flex;gap:16px}.footer .footer-social a{height:48px}@media(max-width: 767.8px){.footer .footer-social{gap:16px}}.footer__secondary-content{display:grid;grid-template-columns:repeat(12, 1fr);grid-template-rows:repeat(2, auto);grid-column-gap:24px;grid-row-gap:48px}@media(max-width: 1119.8px){.footer__secondary-content{grid-template-rows:repeat(3, auto);grid-column-gap:16px;grid-row-gap:40px}}@media(max-width: 991.8px){.footer__secondary-content{grid-template-columns:repeat(9, 1fr);grid-template-rows:repeat(3, auto);grid-row-gap:32px}}@media(max-width: 767.8px){.footer__secondary-content{display:flex;flex-direction:column}}.footer__logo{grid-area:1/1/2/4}@media(max-width: 1119.8px){.footer__logo{grid-area:1/1/2/7}}@media(max-width: 991.8px){.footer__logo{grid-area:1/1/2/5}}.footer__study-descr{grid-area:2/1/3/5}@media(max-width: 1119.8px){.footer__study-descr{grid-area:2/1/3/5}}@media(max-width: 991.8px){.footer__study-descr{grid-area:2/1/3/5}}.footer__font-descr{grid-area:2/6/3/10}@media(max-width: 1119.8px){.footer__font-descr{grid-area:2/8/3/13}}@media(max-width: 991.8px){.footer__font-descr{grid-area:2/6/3/10}}.footer__students{grid-area:1/6/2/8}@media(max-width: 1119.8px){.footer__students{grid-area:1/8/2/11}}@media(max-width: 991.8px){.footer__students{grid-area:1/6/2/8}}.footer__mentors{grid-area:1/8/2/10}@media(max-width: 1119.8px){.footer__mentors{grid-area:1/11/2/13}}@media(max-width: 991.8px){.footer__mentors{grid-area:1/8/2/10}}.footer__agree{grid-area:1/10/2/13}@media(max-width: 1119.8px){.footer__agree{grid-area:3/8/4/13}}@media(max-width: 991.8px){.footer__agree{grid-area:3/6/4/10}}.footer .footer-people{display:flex;flex-direction:column;gap:16px}.footer .content{display:flex;flex-direction:column;gap:4px}.footer__logo{display:flex;gap:32px}@media(max-width: 767.8px){.footer__logo img{width:100%}.footer__logo{gap:24px}}.article-card-medium{display:flex;flex-direction:column;width:456px;z-index:1}@media(max-width: 1119.8px){.article-card-medium{width:336px}}@media(max-width: 991.8px){.article-card-medium{width:272px}}@media(max-width: 767.8px){.article-card-medium{width:100%}}.article-card-medium__container{display:flex;flex-direction:column;gap:16px;background-color:#fff}.article-card-medium__img{display:block;height:256px;background-color:#fff}.article-card-medium__img img{width:100%;overflow:hidden;width:100%;height:100%;object-fit:cover;display:block}@media(max-width: 1119.8px){.article-card-medium__img{height:152px}}.article-card-medium__content{display:flex;flex-direction:column;gap:16px;padding-inline:16px;min-height:142px}@media(max-width: 1119.8px){.article-card-medium__content{height:240px}}@media(max-width: 991.8px){.article-card-medium__content{height:240px}}@media(max-width: 767.8px){.article-card-medium__content{height:auto}}.article-card-medium__meta-box{display:flex;justify-content:space-between;color:#5882e3}.article-card-medium__title{transition:color .3s cubic-bezier(0.25, 0.46, 0.45, 0.94)}.article-card-medium:hover .article-card-medium__title{color:#3366c1}@media(max-width: 991.8px){.article-card-medium__title{font-size:24px}}.article-card-medium__meta{display:flex;flex-direction:column;gap:8px}.article-card-medium__bottom-border{background-color:#fff;border-color:#5882e3;border-inline-width:2px;border-bottom-width:2px;border-style:solid;height:40px;transform:translateY(-16px);position:relative;z-index:-1;transition:transform .3s cubic-bezier(0.25, 0.46, 0.45, 0.94)}.article-card-medium:hover .article-card-medium__bottom-border{transform:translateY(0)}.article-card-medium .read-time{display:flex;align-items:center;justify-content:center;gap:4px}.article-card-medium .icon-clock{color:#5882e3;width:22px;height:22px}.article-card-medium .icon-clock *{stroke:currentColor;fill:none}.article-card-medium .meta-tag a{color:#5882e3}.article-card-large{display:flex;flex-direction:column;max-width:694px;z-index:1}@media(max-width: 1119.8px){.article-card-large{max-width:100%}}.article-card-large__container{display:flex;flex-direction:column;gap:16px;background-color:#fff}.article-card-large__img{display:block;height:256px}.article-card-large__img img{width:100%;overflow:hidden;width:100%;height:100%;object-fit:cover;display:block}@media(max-width: 1119.8px){.article-card-large__img{height:152px}}.article-card-large__content{display:flex;flex-direction:column;gap:16px;padding-inline:16px;min-height:142px}@media(max-width: 1119.8px){.article-card-large__content{height:auto}}.article-card-large__meta-box{display:flex;justify-content:space-between;color:#5882e3}.article-card-large__title{transition:color .3s cubic-bezier(0.25, 0.46, 0.45, 0.94)}.article-card-large:hover .article-card-large__title{color:#3366c1}@media(max-width: 991.8px){.article-card-large__title{font-size:24px}}.article-card-large__meta{display:flex;flex-direction:column;gap:8px}.article-card-large__bottom-border{background-color:#fff;border-color:#5882e3;border-inline-width:2px;border-bottom-width:2px;border-style:solid;height:40px;transform:translateY(-16px);position:relative;z-index:-1;transition:transform .3s cubic-bezier(0.25, 0.46, 0.45, 0.94)}.article-card-large:hover .article-card-large__bottom-border{transform:translateY(0)}.article-card-large .read-time{display:flex;align-items:center;justify-content:center;gap:4px}.article-card-large .icon-clock{color:#5882e3;width:22px;height:22px}.article-card-large .icon-clock *{stroke:currentColor;fill:none}.article-card-large .meta-tag-a{color:#5882e3}*{box-sizing:border-box}.container{width:1416px;margin-inline:auto}@media(max-width: 1600px){.container{max-width:1040px}}@media(max-width: 1119.8px){.container{max-width:848px}}@media(max-width: 991.8px){.container{max-width:704px}}@media(max-width: 767.8px){.container{width:100%;padding-inline:16px}}.meta-tag-a{color:#7ca0ff}.meta-tag-a::before{font-family:"CoFoDrifter",sans-serif;content:"[:"}.meta-tag-a::after{font-family:"CoFoDrifter",sans-serif;content:":]"}.meta-tag-a:hover{color:#044b9c}.meta-tag-a:hover::before{content:"(:"}.meta-tag-a:hover::after{content:":)"}.header-article{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_9___});background-repeat:no-repeat;background-position:center bottom;background-size:cover;padding-top:96px;padding-bottom:32px;margin-bottom:32px}@media(max-width: 1600px){.header-article{padding-top:80px}}@media(max-width: 1119.8px){.header-article{padding-top:64px}}@media(max-width: 767.8px){.header-article{padding-bottom:8px}}.header-article__container{display:flex;flex-direction:column;gap:64px;margin-bottom:64px}@media(max-width: 767.8px){.header-article__container{gap:32px}}.header-article__main{display:flex;justify-content:space-between;gap:24px}@media(max-width: 767.8px){.header-article__main{flex-direction:column;gap:8px}}.header-article__content{width:1050px;display:flex;flex-direction:column;gap:16px}@media(max-width: 767.8px){.header-article__content{width:100%}}.header-article__meta{display:flex;color:#7ca0ff;font-size:16px;gap:64px}.header-article__meta a{color:#7ca0ff}@media(max-width: 991.8px){.header-article__meta{font-size:.875rem;gap:40px}}@media(max-width: 767.8px){.header-article__meta{flex-wrap:wrap;justify-content:space-between;row-gap:8px}.header-article__meta .header-article__topics{order:2}.header-article__meta .read-time{order:3}}.header-article__meta .read-time{display:flex;align-items:center;justify-content:center;gap:4px}.header-article__meta .icon-clock{color:#7ca0ff;width:22px;height:22px}.header-article__meta .icon-clock *{stroke:currentColor;fill:none}.header-article__img{width:100%;overflow:hidden}.header-article__img img{width:100%;height:auto;display:block}.header-article__social{display:flex;flex-direction:column;gap:8px}.header-article__social a{display:block;height:48px}@media(max-width: 767.8px){.header-article__social{flex-direction:row}}.quote-card{background-color:#fff;border:3px solid #5882e3;background-repeat:no-repeat;padding:16px 32px}@media(max-width: 991.8px){.quote-card{border-width:2px}}@media(max-width: 767.8px){.quote-card{padding:16px 24px}}body{background-color:#f8f4eb}.article-content{display:flex;flex-direction:column;gap:64px}.article-content__section{display:flex;flex-direction:column;gap:48px}.article-content__section h2{max-width:1055px}.article-content__grid1{display:grid;grid-template-columns:4fr 1fr 7fr;grid-template-rows:repeat(4, auto);grid-column-gap:24px;grid-row-gap:32px}@media(max-width: 767.8px){.article-content__grid1{display:flex;flex-direction:column}}.article-content__grid1 .paragraph1{grid-area:1/3/2/4}.article-content__grid1 .paragraph2{grid-area:2/3/3/4}.article-content__grid1 .paragraph3{grid-area:3/3/4/4}.article-content__grid1 blockquote{grid-area:4/3/5/4}.article-content__grid2{display:grid;grid-template-columns:4fr 1fr 7fr;grid-template-rows:repeat(5, auto);grid-column-gap:24px;grid-row-gap:32px}@media(max-width: 767.8px){.article-content__grid2{display:flex;flex-direction:column}}.article-content__grid2 .paragraph1{grid-area:1/3/2/4}.article-content__grid2 .paragraph2{grid-area:2/3/3/4}.article-content__grid2 .paragraph3{grid-area:3/3/4/4}.article-content__grid2 .paragraph4{grid-area:4/3/5/4}.article-content__grid2 blockquote{grid-area:5/3/6/4}.article-content__grid2 .list1{grid-area:1/1/2/2}.article-content__grid2 .list2{grid-area:2/1/3/2}.article-content__grid2 .list3{grid-area:3/1/4/2}.article-content__grid2 .list4{grid-area:4/1/5/2}.article-content__list ol{list-style-type:decimal;list-style-position:outside;padding-left:4rem}@media(max-width: 991.8px){.article-content__list ol{font-size:25px;padding-left:2.5rem}}@media(max-width: 767.8px){.article-content__list ol{padding-left:2.5rem}}.read-more{display:flex;flex-direction:column;gap:32px;padding-bottom:48px}.read-more__cards,.read-more .base-article__scnd-row{display:flex;gap:24px}@media(max-width: 1119.8px){.read-more__cards,.read-more .base-article__scnd-row{gap:16px}}@media(max-width: 767.8px){.read-more__cards,.read-more .base-article__scnd-row{flex-wrap:wrap}}.read-more__top-image{display:flex;justify-content:center;margin-block:48px}.read-more__top-image img{width:100%}.header-articles{background-image:url(${___CSS_LOADER_URL_REPLACEMENT_9___});background-repeat:no-repeat;background-position:center bottom;background-size:cover;padding-top:96px;padding-bottom:64px;margin-bottom:32px}@media(max-width: 1600px){.header-articles{padding-top:80px}}@media(max-width: 1119.8px){.header-articles{padding-top:64px}}@media(max-width: 767.8px){.header-articles{padding-bottom:8px;padding-bottom:48px}}.header-articles__container{display:flex;flex-direction:column;gap:24px}.header-articles__navigation{display:flex;flex-direction:column;gap:16px}.header-articles__ul{display:flex;flex-direction:column;gap:4px}.header-articles__a{font-family:"CoFoDrifter",sans-serif;font-size:28px;color:#5882e3}@media(max-width: 767.8px){.header-articles__a{font-size:24px}}.header-articles__a:hover::after{content:" ->"}.base-article,.main-article,.pro-article{margin-bottom:80px}.base-article h2,.base-article p,.main-article h2,.main-article p,.pro-article h2,.pro-article p{background-color:#fff;border:2px solid #5882e3;padding:2.5rem}@media(max-width: 767.8px){.base-article h2,.base-article p,.main-article h2,.main-article p,.pro-article h2,.pro-article p{padding:1rem}}.base-article__frst-row,.main-article__frst-row,.pro-article__frst-row{display:grid;grid-template-columns:repeat(2, 1fr);grid-column-gap:24px}@media(max-width: 1119.8px){.base-article__frst-row,.main-article__frst-row,.pro-article__frst-row{display:flex;flex-direction:column;gap:24px}}.base-article__descr,.main-article__descr,.pro-article__descr{display:flex;flex-direction:column;justify-content:space-between;margin-bottom:16px;gap:24px;grid-area:1/2/2/3}.base-article__inf,.main-article__inf,.pro-article__inf{height:100%;font-size:1.33rem}.base-article__scnd-row,.main-article__scnd-row,.pro-article__scnd-row{margin-top:24px;display:flex;gap:24px}@media(max-width: 1119.8px){.base-article__scnd-row,.main-article__scnd-row,.pro-article__scnd-row{gap:16px}}@media(max-width: 767.8px){.base-article__scnd-row,.main-article__scnd-row,.pro-article__scnd-row{flex-wrap:wrap}}.main-article__descr{grid-area:1/1/2/2}.main-article .article-card-large{grid-area:1/2/2/3}.header-index-hero-block{height:100vh;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_10___});background-repeat:no-repeat;background-size:cover;background-position:center}.header-index-hero-block__container{padding-top:15vh}@media(max-width: 1119.8px){.header-index-hero-block__container{padding-top:8vh}}.header-index-hero-block__content{display:flex;flex-direction:column;max-width:1158px;height:670px;align-items:center;justify-content:end;padding-bottom:128px;gap:24px;margin:auto;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_11___});background-repeat:no-repeat;background-size:contain;background-position:center}.header-index-hero-block__content h1{text-align:center}@media(max-width: 1119.8px){.header-index-hero-block__content h1{font-size:56px}}@media(max-width: 767.8px){.header-index-hero-block__content h1{font-size:48px}}@media(max-width: 1119.8px){.header-index-hero-block__content{gap:12px;padding-bottom:172px}}@media(max-width: 991.8px){.header-index-hero-block__content{background-image:none}}@media(max-width: 767.8px){.header-index-hero-block__content{gap:16px}}.header-index-hero-block__subtitles{display:flex;width:100%;padding-inline:96px;justify-content:space-between;font-family:"CoFoDrifter",sans-serif;font-size:1.5rem;color:#3366c1}@media(max-width: 1119.8px){.header-index-hero-block__subtitles{flex-direction:column;align-items:center;font-size:1.3rem;gap:4px}}@media(max-width: 767.8px){.header-index-hero-block__subtitles{text-align:center}}.article-index,.checklists-index,.sources-index{padding-bottom:3.5rem;background-color:#fff}@media(max-width: 767.8px){.article-index,.checklists-index,.sources-index{padding-bottom:.7rem}}.article-index__link,.checklists-index__link,.sources-index__link{text-align:center}.article-index__inf,.article-index__description,.checklists-index__inf,.checklists-index__description,.sources-index__inf,.sources-index__description{background-color:#fff;border:2px solid #5882e3;padding:2.5rem}@media(max-width: 767.8px){.article-index__inf,.article-index__description,.checklists-index__inf,.checklists-index__description,.sources-index__inf,.sources-index__description{padding:1rem}}.article-index__container,.checklists-index__container,.sources-index__container{display:flex;flex-direction:column;gap:2rem;padding-top:2rem}.article-index__description,.checklists-index__description,.sources-index__description{display:flex;flex-direction:column;gap:16px}.article-index__inf,.checklists-index__inf,.sources-index__inf{display:flex;justify-content:space-between;gap:1.6rem;align-items:center}@media(max-width: 767.8px){.article-index__inf,.checklists-index__inf,.sources-index__inf{flex-direction:column}}.article-index__tags,.checklists-index__tags,.sources-index__tags{display:flex;gap:4px}@media(max-width: 767.8px){.article-index__tags,.checklists-index__tags,.sources-index__tags{flex-wrap:wrap}}.article-index__frst-row,.checklists-index__frst-row,.sources-index__frst-row{display:grid;grid-template-columns:repeat(2, 1fr);grid-column-gap:24px}@media(max-width: 1119.8px){.article-index__frst-row,.checklists-index__frst-row,.sources-index__frst-row{display:flex;flex-direction:column;gap:1rem}}.article-index__descr,.checklists-index__descr,.sources-index__descr{display:flex;flex-direction:column;justify-content:space-between;margin-bottom:16px;gap:24px;grid-area:1/2/2/3}.article-index__inf,.checklists-index__inf,.sources-index__inf{height:100%;font-size:1.33rem}.article-index__scnd-row,.checklists-index__scnd-row,.sources-index__scnd-row{margin-top:24px;display:flex;gap:24px}@media(max-width: 1119.8px){.article-index__scnd-row,.checklists-index__scnd-row,.sources-index__scnd-row{gap:16px}}@media(max-width: 767.8px){.article-index__scnd-row,.checklists-index__scnd-row,.sources-index__scnd-row{flex-wrap:wrap}}.checklists-index{background-color:#eaf4ff}.checklists-index__top-bg{width:100%;height:100px;background-color:#fff;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_12___});background-repeat:repeat-x;background-position:bottom;background-size:contain}.checklists-index__list ol{list-style-type:decimal;list-style-position:outside;padding-left:2.5rem;display:flex;flex-direction:column;gap:1rem}@media(max-width: 991.8px){.checklists-index__list ol{font-size:25px;padding-left:2.5rem}}.checklists-index__grid-content{display:grid;grid-template-columns:repeat(2, 1fr);grid-template-rows:1fr;grid-column-gap:1.5rem;grid-row-gap:2rem}@media(max-width: 991.8px){.checklists-index__grid-content{display:flex;flex-direction:column}}.checklists-index__card-content{display:flex;justify-content:space-between;gap:1rem;align-items:center}.checklists-index__card-checklist{display:flex;justify-content:space-between;cursor:pointer;padding:1rem 1.5rem;background-color:#f8f4eb}.checklists-index__card-checklist .checklist-title{font-family:"CoFoDrifter",sans-serif;font-size:1.5rem;text-transform:lowercase;line-height:1.5rem}.checklists-index__card-checklist .checklist-icon{width:48px;height:auto}.checklists-index__card-checklist{transition:color .3s cubic-bezier(0.25, 0.46, 0.45, 0.94)}.checklists-index__card-checklist:hover{background-color:#fff}.checklists-index__cards-checklist{display:flex;flex-direction:column;gap:1rem}.sources-index__top-bg{width:100%;height:100px;background-color:#eaf4ff;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_13___});background-repeat:repeat-x;background-position:bottom;background-size:contain}.sources-index__cards-checklist{display:grid;grid-template-columns:repeat(3, 1fr);grid-template-rows:1fr;grid-column-gap:1.5rem;grid-row-gap:2rem}@media(max-width: 991.8px){.sources-index__cards-checklist{display:flex;flex-direction:column}}.sources-index__card-content{display:flex;flex-direction:column;gap:2rem}.sources-index__card-checklist{display:flex;justify-content:space-between;cursor:pointer;padding:1rem 1.5rem;background-color:#f8f4eb}.sources-index__card-checklist .source-title{font-family:"CoFoDrifter",sans-serif;font-size:1.5rem;text-transform:lowercase;line-height:1.5rem}.sources-index__card-checklist .source-content{display:flex;flex-direction:column;gap:.5rem}.sources-index__card-checklist .source-arrow{width:48px;height:auto}.sources-index__card-checklist .source-icon{width:120px;height:140px}.sources-index__card-checklist{transition:color .3s cubic-bezier(0.25, 0.46, 0.45, 0.94)}.sources-index__card-checklist:hover{background-color:#eaf4ff}.form-index{background-color:#f8f4eb}.form-index__top-bg{width:100%;height:100px;background-color:#fff;background-image:url(${___CSS_LOADER_URL_REPLACEMENT_14___});background-repeat:repeat-x;background-position:bottom;background-size:contain}.form-index__content{display:flex;flex-direction:column;align-self:center;gap:48px}.form-index__content form{display:flex}.form-index__content form input{all:unset;box-sizing:border-box;font-family:"FreeSet",serif;font-size:1rem;color:#7ca0ff;width:456px;outline:2px solid #5882e3;outline-offset:-2px;border-radius:0px;height:48px;padding-inline:1.5rem;background-color:#fff}@media(max-width: 991.8px){.form-index__content form input{width:100%}}.form-index__content form input::placeholder{color:#0b1956;opacity:1}.form-index__content form{gap:24px}@media(max-width: 1119.8px){.form-index__content form{flex-direction:column;gap:16px}}.form-index .qr img{width:100%}@media(max-width: 1119.8px){.form-index .qr{flex-direction:column;gap:16px}}.form-index__container{padding-block:1.5rem;display:grid;grid-template-columns:repeat(2, 1fr);grid-template-rows:1fr;grid-column-gap:1.5rem;grid-row-gap:2rem}@media(max-width: 991.8px){.form-index__container{display:flex;flex-direction:column}}.test{padding-top:96px}.test__grid-content{display:grid;grid-template-columns:repeat(12, 1fr);grid-template-rows:repeat(2, auto);grid-column-gap:24px;grid-row-gap:24px}.test__title{padding-top:48px;grid-area:1/3/2/11}.test__content{grid-area:2/4/3/10}.test{padding-bottom:64px}.test-title{margin-block:24px;font-family:"CoFoDrifter",sans-serif;text-transform:lowercase;line-height:2.5rem;font-size:3rem}.test-answers{display:flex;flex-direction:column;gap:24px;justify-content:center}.test-answer{border:2px solid #5882e3;border-radius:2px;padding:16px 24px;cursor:pointer}.test-answer:hover{background-color:#c8dfff}.test-result{margin-top:40px}.test-result-title{text-align:center;margin-bottom:50px;font-size:40px}.test-result-descr{text-align:center;line-height:1.4}.test-actions{display:flex;justify-content:space-between;gap:24px;margin-top:40px}.test-actions .primary-button{align-self:flex-end}.test-answer.active{border:1px solid #5882e3;background-color:#7ca0ff}.tests{padding-top:96px}.tests-cards{margin-block:2rem}.test-card{background-color:#c8dfff;display:flex;flex-direction:column;padding:2rem;gap:2rem}.test-card__image img{width:100%;overflow:hidden;width:100%;height:100%;object-fit:cover;display:block}@media(max-width: 991.8px){.test-card{padding:1rem;gap:1rem}}.test-card__content{display:flex;flex-direction:column;align-items:start}.test-card__content p{max-width:50%}@media(max-width: 991.8px){.test-card__content p{max-width:100%}}.test-card__content{gap:2rem}@media(max-width: 991.8px){.test-card__content{padding:1rem;gap:1rem}}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 995:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "fonts/167d077c6a2be665821d.woff";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			57: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(72);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(56);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/stylesheets/style.scss
var style = __webpack_require__(921);
;// ./src/stylesheets/style.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.A, options);




       /* harmony default export */ const stylesheets_style = (style/* default */.A && style/* default */.A.locals ? style/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./src/javascripts/burger.js
var burger = __webpack_require__(248);
// EXTERNAL MODULE: ./src/javascripts/tests/test1.js
var test1 = __webpack_require__(580);
;// ./src/javascripts/index.js



console.log('hey');
})();

/******/ })()
;