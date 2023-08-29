(self["webpackChunkvodka_brand_site"] = self["webpackChunkvodka_brand_site"] || []).push([["src_pages_Photos_html"],{

/***/ "./src/assets/martini.png":
/*!********************************!*\
  !*** ./src/assets/martini.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/martini.png");

/***/ }),

/***/ "./src/assets/served.jpg":
/*!*******************************!*\
  !*** ./src/assets/served.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/served.jpg");

/***/ }),

/***/ "./src/assets/shelf.jpg":
/*!******************************!*\
  !*** ./src/assets/shelf.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/shelf.jpg");

/***/ }),

/***/ "./src/assets/tender.png":
/*!*******************************!*\
  !*** ./src/assets/tender.png ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/tender.png");

/***/ }),

/***/ "./src/pages/Photos.html":
/*!*******************************!*\
  !*** ./src/pages/Photos.html ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ../assets/served.jpg */ "./src/assets/served.jpg");
var ___HTML_LOADER_IMPORT_1___ = __webpack_require__(/*! ../assets/martini.png */ "./src/assets/martini.png");
var ___HTML_LOADER_IMPORT_2___ = __webpack_require__(/*! ../assets/shelf.jpg */ "./src/assets/shelf.jpg");
var ___HTML_LOADER_IMPORT_3___ = __webpack_require__(/*! ../assets/tender.png */ "./src/assets/tender.png");
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_3___);
var code = "<h1 id=\"title\">OuR/Gallery</h1>\n<div id=\"gallery\">\n    <img class=\"photos\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"photo\">\n    <img class=\"photos\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"photo\">\n    <img class=\"photos\" src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"photo\">\n    <img class=\"photos\" src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"photo\">\n</div>";
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
//# sourceMappingURL=src_pages_Photos_html13166bef886ca13c97bf.js.map