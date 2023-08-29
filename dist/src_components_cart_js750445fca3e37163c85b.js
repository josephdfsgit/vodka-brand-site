"use strict";
(self["webpackChunkvodka_brand_site"] = self["webpackChunkvodka_brand_site"] || []).push([["src_components_cart_js"],{

/***/ "./src/components/cart.js":
/*!********************************!*\
  !*** ./src/components/cart.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cart: () => (/* binding */ Cart)
/* harmony export */ });
/* harmony import */ var _styles_cart_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/cart.scss */ "./src/styles/cart.scss");
/* harmony import */ var _cartCTRL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartCTRL.js */ "./src/components/cartCTRL.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return { value: void 0, done: !0 }; } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable || "" === iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } throw new TypeError(_typeof(iterable) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
// cart.js


var Cart = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var table, cart;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          table = document.getElementById('item-table');
          cart = (0,_cartCTRL_js__WEBPACK_IMPORTED_MODULE_1__.getCart)();
          table.innerHTML = '';
          cart.forEach(function (item) {
            var cartItem = document.createElement('div');
            cartItem.className = 'cart-items';
            cartItem.innerHTML = "\n            <p class=\"item-names\">".concat(item.name, "</p>\n            <input class=\"item-qty\" type=\"number\" value=\"").concat(item.qty, "\" min=\"1\">\n            <p class=\"item-price\">$").concat(item.price, "</p>\n        ");
            var removeBtn = document.createElement('button');
            removeBtn.className = 'remove-btn';
            removeBtn.textContent = '-';
            cartItem.appendChild(removeBtn);
            removeBtn.addEventListener('click', function () {
              (0,_cartCTRL_js__WEBPACK_IMPORTED_MODULE_1__.removeFromCart)(item.id);
              updateDisplays();
              setTimeout(function () {
                location.reload();
              }, 100);
            });
            var qtyInput = cartItem.querySelector('.item-qty');
            qtyInput.addEventListener('change', function () {
              var newQty = parseInt(qtyInput.value);
              if (newQty >= 1) {
                (0,_cartCTRL_js__WEBPACK_IMPORTED_MODULE_1__.updateCartItemQty)(item.id, newQty);
                updateDisplays();
                location.reload();
              }
            });
            table.appendChild(cartItem);
          });
          updateDisplays();
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function Cart() {
    return _ref.apply(this, arguments);
  };
}();

// Function to update the cart quantity display
var updateDisplays = function updateDisplays() {
  var SubTotal = document.getElementById('subtotal');
  var Total = document.getElementById('total');
  var TotalQty = document.getElementById('total-qty');
  var cart = (0,_cartCTRL_js__WEBPACK_IMPORTED_MODULE_1__.getCart)();
  var subtotalAmount = cart.reduce(function (total, item) {
    return total + item.qty * item.price;
  }, 0);
  var taxRate = 0.13;
  var totalAfterTax = subtotalAmount * (1 + taxRate);
  SubTotal.innerHTML = "$".concat(subtotalAmount.toFixed(2));
  Total.innerHTML = "$".concat(totalAfterTax.toFixed(2));
  TotalQty.innerHTML = cart.reduce(function (totalQty, item) {
    return totalQty + item.qty;
  }, 0);
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/cart.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/cart.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Young Style", sans-serif;
  font-family: "Young Style Underlines", sans-serif;
  src: url("https://fonts.cdnfonts.com/css/young-style") format("woff2");
}
#app {
  flex-direction: column;
}
#app #title {
  font-family: "Young Style", sans-serif;
  color: #4a3f35;
  text-align: center;
  font-size: 40px;
}
#app #table-head {
  display: grid;
  grid-template-columns: 50% 20% 20% 10%;
  font-family: "Young Style", sans-serif;
  text-align: center;
  font-weight: 600;
}
#app #item-table {
  display: flex;
  flex-direction: column;
}
#app #item-table .cart-items {
  display: grid;
  grid-template-columns: 50% 20% 20% 10%;
}
#app #item-table .cart-items .item-names {
  font-family: "Courier New", Courier, monospace;
}
#app #item-table .cart-items .item-price {
  text-align: center;
  font-family: "Courier New", Courier, monospace;
  font-weight: 200;
}
#app #item-table .cart-items .item-qty {
  justify-self: center;
  max-width: 60px;
  text-align: center;
  background-color: #bcaaa4;
  font-family: "Courier New", Courier, monospace;
  border: #4a3f35 solid 4px;
  margin: 5px;
}
#app #item-table .cart-items .remove-btn {
  width: 30px;
  height: 30px;
  margin: auto;
  border-radius: 1em;
  font-size: 20px;
  border: none;
  background-color: #bcaaa4;
  color: #fff7e6;
}
#app #item-table .cart-items .remove-btn:hover {
  background-color: #4a3f35;
}
#app #table-total {
  display: flex;
  flex-direction: column;
}
#app #table-total #subtotal-row {
  display: grid;
  grid-template-columns: 50% 20% 20% 10%;
  text-align: center;
}
#app #table-total #subtotal-row #subttl {
  font-family: "Courier New", Courier, monospace;
  font-weight: 400;
}
#app #table-total #total-row {
  display: grid;
  grid-template-columns: 50% 20% 20% 10%;
  text-align: center;
}
#app #table-total #total-row #totaltitle {
  font-family: "Courier New", Courier, monospace;
  font-weight: 800;
}
#app #checkout-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
}
#app #checkout-container #checkout-btn {
  color: #fff7e6;
  background-color: #4a3f35;
  padding: 20px;
  border-radius: 0.5em;
  text-decoration: none;
}`, "",{"version":3,"sources":["webpack://./src/styles/cart.scss"],"names":[],"mappings":"AAIA;EACI,sCAAA;EACA,iDAAA;EACA,sEAAA;AAHJ;AAKA;EACI,sBAAA;AAHJ;AAII;EACI,sCAAA;EACA,cAZI;EAaJ,kBAAA;EACA,eAAA;AAFR;AAII;EACI,aAAA;EACA,sCAAA;EACA,sCAAA;EACA,kBAAA;EACA,gBAAA;AAFR;AAII;EACI,aAAA;EACA,sBAAA;AAFR;AAGQ;EACI,aAAA;EACA,sCAAA;AADZ;AAEY;EACI,8CAAA;AAAhB;AAEY;EACI,kBAAA;EACA,8CAAA;EACA,gBAAA;AAAhB;AAEY;EACI,oBAAA;EACA,eAAA;EACA,kBAAA;EACA,yBAAA;EACA,8CAAA;EACA,yBAAA;EACA,WAAA;AAAhB;AAEY;EACI,WAAA;EACA,YAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,YAAA;EACA,yBAAA;EACA,cAAA;AAAhB;AAEY;EACI,yBAAA;AAAhB;AAII;EACI,aAAA;EACA,sBAAA;AAFR;AAGQ;EACI,aAAA;EACA,sCAAA;EACA,kBAAA;AADZ;AAEY;EACI,8CAAA;EACA,gBAAA;AAAhB;AAGQ;EACI,aAAA;EACA,sCAAA;EACA,kBAAA;AADZ;AAEY;EACI,8CAAA;EACA,gBAAA;AAAhB;AAII;EACI,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,cAAA;AAFR;AAGQ;EACI,cAAA;EACA,yBAAA;EACA,aAAA;EACA,oBAAA;EACA,qBAAA;AADZ","sourcesContent":["$cream: #fff7e6;\n$darkEarth: #4a3f35;\n$accent: #bcaaa4;\n\n@font-face {\n    font-family: 'Young Style', sans-serif;\n    font-family: 'Young Style Underlines', sans-serif;\n    src: url('https://fonts.cdnfonts.com/css/young-style') format('woff2');\n}\n#app{\n    flex-direction: column;\n    #title {\n        font-family: 'Young Style', sans-serif;\n        color: $darkEarth;\n        text-align: center;\n        font-size: 40px;\n    }\n    #table-head {\n        display: grid;\n        grid-template-columns: 50% 20% 20% 10%;\n        font-family: 'Young Style', sans-serif;\n        text-align: center;\n        font-weight: 600;\n    }\n    #item-table {\n        display: flex;\n        flex-direction: column;\n        .cart-items {\n            display: grid;\n            grid-template-columns: 50% 20% 20% 10%;\n            .item-names{\n                font-family: 'Courier New', Courier, monospace;\n            }\n            .item-price{\n                text-align: center;\n                font-family: 'Courier New', Courier, monospace;\n                font-weight: 200;\n            }\n            .item-qty{\n                justify-self: center;\n                max-width: 60px;\n                text-align: center;\n                background-color: #bcaaa4;\n                font-family: 'Courier New', Courier, monospace;\n                border: #4a3f35 solid 4px;\n                margin: 5px;\n            }\n            .remove-btn{\n                width: 30px;\n                height: 30px;\n                margin: auto;\n                border-radius: 1em;\n                font-size: 20px;\n                border: none;\n                background-color: #bcaaa4;\n                color: #fff7e6;\n            }\n            .remove-btn:hover{\n                background-color: #4a3f35;\n            }\n        }\n    }\n    #table-total{\n        display: flex;\n        flex-direction: column;\n        #subtotal-row {\n            display: grid;\n            grid-template-columns: 50% 20% 20% 10%;\n            text-align: center;\n            #subttl{\n                font-family: 'Courier New', Courier, monospace;\n                font-weight: 400;\n            }\n        }\n        #total-row{\n            display: grid;\n            grid-template-columns: 50% 20% 20% 10%;\n            text-align: center;\n            #totaltitle{\n                font-family: 'Courier New', Courier, monospace;\n                font-weight: 800;\n            }\n        }\n    }\n    #checkout-container{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding: 100px;\n        #checkout-btn{\n            color: #fff7e6;\n            background-color: #4a3f35;\n            padding: 20px;\n            border-radius: 0.5em;\n            text-decoration: none;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/cart.scss":
/*!******************************!*\
  !*** ./src/styles/cart.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_cart_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./cart.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/cart.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_cart_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_cart_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_cart_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_cart_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=src_components_cart_js750445fca3e37163c85b.js.map