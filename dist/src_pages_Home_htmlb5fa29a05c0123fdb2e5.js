(self["webpackChunkvodka_brand_site"] = self["webpackChunkvodka_brand_site"] || []).push([["src_pages_Home_html"],{

/***/ "./src/assets/bottleDisp.jpg":
/*!***********************************!*\
  !*** ./src/assets/bottleDisp.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/bottleDisp.jpg");

/***/ }),

/***/ "./src/assets/box.jpg":
/*!****************************!*\
  !*** ./src/assets/box.jpg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/box.jpg");

/***/ }),

/***/ "./src/assets/merch.jpg":
/*!******************************!*\
  !*** ./src/assets/merch.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/merch.jpg");

/***/ }),

/***/ "./src/pages/Home.html":
/*!*****************************!*\
  !*** ./src/pages/Home.html ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ../assets/bottleDisp.jpg */ "./src/assets/bottleDisp.jpg");
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(/*! ../assets/box.jpg */ "./src/assets/box.jpg");
var ___HTML_LOADER_IMPORT_2___ = __webpack_require__(/*! ../assets/merch.jpg */ "./src/assets/merch.jpg");
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_2___);
var code = "<h1 id=\"title\">OuR/Berlin</h1>\n<div id=\"home-info\">\n    <h3>Local Vodka</h3>\n    <h2>AM FLUTGRABEN 2</h2>\n    <h2>12435 Berlin</h2>\n</div>\n<div id=\"options\">\n    <a class=\"photos-link\" id=\"shop-btn\" href=\"/shop\" data-navigate>\n        <img class=\"photos\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"Shop\">\n        <h2 class=\"photos-txt\">Vodka</h2>\n    </a>\n    <div id=\"side-opt\">\n        <a class=\"photos-link\" id=\"orders-btn\" href=\"/orders\" data-navigate>\n            <img class=\"photos\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"Orders\">\n            <h2 class=\"photos-txt\">Orders</h2>\n        </a>\n        <a class=\"photos-link\" id=\"merch-btn\" href=\"/shop\" data-navigate>\n            <img class=\"photos\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"Merch\">\n            <h2 class=\"photos-txt\">Merchandise</h2>\n        </a>\n    </div>\n</div>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ })

}]);
//# sourceMappingURL=src_pages_Home_htmlb5fa29a05c0123fdb2e5.js.map