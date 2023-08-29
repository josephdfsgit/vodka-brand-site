(self["webpackChunkvodka_brand_site"] = self["webpackChunkvodka_brand_site"] || []).push([["src_pages_Checkout_html"],{

/***/ "./src/pages/Checkout.html":
/*!*********************************!*\
  !*** ./src/pages/Checkout.html ***!
  \*********************************/
/***/ ((module) => {

// Module
var code = "<h1 id=\"title\">Checkout</h1>\n<hr width=\"50%\">\n<div id=\"final-cart\"></div>\n<hr width=\"50%\">\n<div id=\"totals\">\n    <p>Total After Tax</p>\n    <p id=\"total\"></p>\n    <p id=\"amount\"></p>\n</div>\n<hr width=\"50%\">\n<form id=\"shipping-info\" method=\"post\" action=\"http://localhost:3003/orders/order\">\n  <div class=\"row\">\n    <div class=\"col-50\">\n      <h3>Billing Address</h3>\n      <label for=\"name\"><i class=\"fa fa-user\"></i> Full Name</label>\n      <input type=\"text\" id=\"name\" name=\"name\" placeholder=\"Jon Loh\">\n      <label for=\"email\"><i class=\"fa fa-envelope\"></i> Email</label>\n      <input type=\"text\" id=\"email\" name=\"email\" placeholder=\"jonloh@email.com\">\n      <label for=\"adr\"><i class=\"fa fa-address-card-o\"></i> Address</label>\n      <input type=\"text\" id=\"adr\" name=\"address\" placeholder=\"542 W. 69th Street\">\n      <label for=\"city\"><i class=\"fa fa-institution\"></i> City</label>\n      <input type=\"text\" id=\"city\" name=\"city\" placeholder=\"New York\">\n      <div class=\"row\">\n        <div class=\"col-50\">\n          <label for=\"state\">State</label>\n          <input type=\"text\" id=\"state\" name=\"state\" placeholder=\"NY\">\n        </div>\n        <div class=\"col-50\">\n          <label for=\"zip\">Zip</label>\n          <input type=\"text\" id=\"zip\" name=\"zip\" placeholder=\"10001\">\n        </div>\n      </div>\n    </div>\n    <hr width=\"80%\">\n    <div class=\"col-50\">\n      <h3>Payment</h3>\n      <label for=\"cname\">Name on Card</label>\n      <input type=\"text\" id=\"cname\" name=\"cname\" placeholder=\"John More Doe\">\n      <label for=\"ccnum\">Credit card number</label>\n      <input type=\"text\" id=\"ccnum\" name=\"ccnum\" placeholder=\"1111-2222-3333-4444\">\n      <label for=\"expdate\">Exp Date</label>\n      <input type=\"text\" id=\"expdate\" name=\"expdate\" placeholder=\"12/23\">\n\n      <div class=\"row\">\n        <div class=\"col-50\">\n          <label for=\"cvv\">CVV</label>\n          <input type=\"text\" id=\"cvv\" name=\"cvv\" placeholder=\"352\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <label>\n    <input type=\"checkbox\" checked=\"checked\" name=\"sameadr\"> Shipping address same as billing\n  </label>\n  <input type=\"submit\" value=\"CHECKOUT\" class=\"btn\">\n</form>";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=src_pages_Checkout_html2e14cd1e3e929b66cdcc.js.map