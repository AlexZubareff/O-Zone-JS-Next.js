/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/cart */ \"./src/modules/cart.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_priceSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/priceSearch */ \"./src/modules/priceSearch.js\");\n\n\n\n\n\n\n(0,_modules_cart__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n;(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_modules_priceSearch__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n\n\n//# sourceURL=webpack://db/./src/index.js?\n}");

/***/ }),

/***/ "./src/modules/cart.js":
/*!*****************************!*\
  !*** ./src/modules/cart.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nconst cart = () => {\n  const cartBtn = document.getElementById('cart')\n  const cartModal = document.querySelector('.cart')\n  const cartCloseBtn = cartModal.querySelector('.cart-close')\n\n  const openCart = () => {\n    cartModal.style.display = 'flex'\n  }\n\n  const closeCart = () => {\n    cartModal.style.display = ''\n  }\n\n  cartBtn.addEventListener('click', openCart)\n  cartCloseBtn.addEventListener('click', closeCart)\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n\n//# sourceURL=webpack://db/./src/modules/cart.js?\n}");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\n\n\n\nconst catalog = () => {\n  const btnCatalog = document.querySelector('.catalog-button > button')\n  const catalogModal = document.querySelector('.catalog')\n  const catalogModalItems = document.querySelectorAll('.catalog li')\n\n  let isOpen = false\n\n  btnCatalog.addEventListener('click', () => {\n    isOpen = !isOpen\n    if (isOpen) {\n      catalogModal.style.display = 'flex'\n    } else {\n      catalogModal.style.display = ''\n    }\n  })\n  catalogModalItems.forEach(item => {\n    item.addEventListener('click', () => {\n      const text = item.textContent\n      ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => {\n        ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, text))\n      })\n    })\n  })\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n\n//# sourceURL=webpack://db/./src/modules/catalog.js?\n}");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   categoryFilter: () => (/* binding */ categoryFilter),\n/* harmony export */   priceFilter: () => (/* binding */ priceFilter),\n/* harmony export */   searchFilter: () => (/* binding */ searchFilter)\n/* harmony export */ });\nconst searchFilter = (goods, value) => {\n  console.log(goods)\n  return goods.filter(goodItem => {\n    return goodItem.title.toLowerCase().includes(value.toLowerCase())\n  })\n}\n\nconst categoryFilter = (goods, value) => {\n  console.log(goods)\n  return goods.filter(goodItem => {\n    return goodItem.category === value\n  })\n}\n\nconst priceFilter = (goods, min, max) => {\n  return goods.filter(goodItem => {\n    if (min && max === 0) {\n      return goodItem.price >= min\n    }\n    if (min && max) {\n      return goodItem.price >= min && goodItem.price <= max\n    }\n    if (min === 0 && max) {\n      return goodItem.price <= max\n    }\n    if (min === 0 && max === 0) {\n      return goodItem\n    }\n  })\n}\n\n\n//# sourceURL=webpack://db/./src/modules/filters.js?\n}");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getData = () => {\n  return fetch(`https://ozon-db-3d4b2-default-rtdb.firebaseio.com/goods.json?`).then(res => res.json())\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n\n//# sourceURL=webpack://db/./src/modules/getData.js?\n}");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\n\n\nconst load = () => {\n  (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data))\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n\n//# sourceURL=webpack://db/./src/modules/load.js?\n}");

/***/ }),

/***/ "./src/modules/priceSearch.js":
/*!************************************!*\
  !*** ./src/modules/priceSearch.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\n\n\n\nconst priceSearch = () => {\n  const minInput = document.getElementById('min')\n  const maxInput = document.getElementById('max')\n  let minValue = 0\n  let maxValue = 0\n\n  minInput.addEventListener('input', event => {\n    minValue = +event.target.value\n    ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => {\n      ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(data, minValue, maxValue))\n    })\n  })\n\n  maxInput.addEventListener('input', event => {\n    maxValue = +event.target.value\n    ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => {\n      ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)(data, minValue, maxValue))\n    })\n  })\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (priceSearch);\n\n\n//# sourceURL=webpack://db/./src/modules/priceSearch.js?\n}");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst renderGoods = goods => {\n  const goodsWrapper = document.querySelector('.goods')\n  goodsWrapper.innerHTML = ''\n  goods.forEach(good => {\n    goodsWrapper.insertAdjacentHTML(\n      'beforeend',\n      `\n\t\t\t\t\t\t\t<div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\n\t\t\t\t\t\t\t\t<div class=\"card\">\n                  ${good.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\n\t\t\t\t\t\t\t\t\t<div class=\"card-img-wrapper\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"card-img-top\"\n\t\t\t\t\t\t\t\t\t\t\tstyle=\"background-image: url('${good.img}')\"></span>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<div class=\"card-body justify-content-between\">\n\t\t\t\t\t\t\t\t\t\t<div class=\"card-price\">${good.price} ₽</div>\n\t\t\t\t\t\t\t\t\t\t<h5 class=\"card-title\">${good.title}</h5>\n\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-primary\">В корзину</button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n      `\n    )\n  })\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\n\n//# sourceURL=webpack://db/./src/modules/renderGoods.js?\n}");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\n\n\n\nconst search = () => {\n  const searchInput = document.querySelector('.search-wrapper_input')\n  searchInput.addEventListener('input', event => {\n    const value = event.target.value\n    ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then(data => {\n      ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, value))\n    })\n  })\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n\n//# sourceURL=webpack://db/./src/modules/search.js?\n}");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;