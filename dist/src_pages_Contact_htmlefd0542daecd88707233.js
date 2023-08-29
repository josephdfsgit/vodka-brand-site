(self["webpackChunkvodka_brand_site"] = self["webpackChunkvodka_brand_site"] || []).push([["src_pages_Contact_html"],{

/***/ "./src/assets/flavours.png":
/*!*********************************!*\
  !*** ./src/assets/flavours.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/flavours.png");

/***/ }),

/***/ "./src/pages/Contact.html":
/*!********************************!*\
  !*** ./src/pages/Contact.html ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___ = __webpack_require__(/*! ../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
var ___HTML_LOADER_IMPORT_0___ = __webpack_require__(/*! ../assets/flavours.png */ "./src/assets/flavours.png");
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = ___HTML_LOADER_GET_SOURCE_FROM_IMPORT___(___HTML_LOADER_IMPORT_0___);
var code = "<div id=\"header\">\n    <img id=\"banner\" class=\"photos\" src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"photo\">\n    <h1 id=\"title\">Contact Us</h1>\n    <h2>OuR/Berlin</h2>\n    <p id=\"our-email\"><strong>ourberlin@vodka.com</strong></p>\n    <p>For Business Inquiries Feel Free To Send Us An Email.</p>\n</div>\n<form id=\"message-us\">\n\n    <label for=\"fname\">First & Last Name</label>\n    <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Your name..\">\n\n    <label for=\"company\">Company</label>\n    <input type=\"text\" id=\"company\" name=\"company\" placeholder=\"The name of your company/employer..\">\n\n    <label for=\"phone\">Phone#</label>\n    <input type=\"text\" id=\"phone\" name=\"phone\" placeholder=\"Your phone number..\">\n\n    <label for=\"email\">Email</label>\n    <input type=\"text\" id=\"email\" name=\"email\" placeholder=\"Your email..\">\n\n    <label for=\"message\">Message</label>\n    <textarea id=\"message\" name=\"message\" placeholder=\"Write something..\" style=\"height:200px\"></textarea>\n\n    <input id=\"submit-btn\" type=\"submit\" value=\"Submit\">\n\n</form>";
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
//# sourceMappingURL=src_pages_Contact_htmlefd0542daecd88707233.js.map