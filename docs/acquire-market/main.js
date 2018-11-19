(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/cart/cart.component */ "./src/app/pages/cart/cart.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_product_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/product/product.component */ "./src/app/pages/product/product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// pages



var routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'product/:id', component: _pages_product_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"] },
    { path: 'cart', component: _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_2__["CartComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <h1>\n    <a routerLink=\"/\">Acquire<span class=\"colon\">:</span></a>\n  </h1>\n</header>\n\n<nav>\n  <ul>\n    <li><a href=\"#\" routerLink=\"/\" >Home</a></li>\n    <li><a href=\"#\" routerLink=\"/cart\" >Cart \n      <ng-container *ngIf=\"cartCount\">({{cartCount}})</ng-container>\n    </a></li>\n  </ul>\n</nav>\n\n<main>\n<router-outlet (activate)=\"onActivate($event)\"></router-outlet>\n</main>\n\n<footer>\n  <section>\n    <div class=\"footer-links\">\n      <ul>\n        <li><a href=\"/assets/common-dimensions.jpg\" target=\"_blank\">Common dimensions chart</a></li>\n      </ul>\n      <ul>\n        <li><a href=\"https://www.linkedin.com/in/patrickemoore/\" target=\"_blank\">LinkedIn</a></li>\n        <li><a href=\"https://github.com/patemoo\" target=\"_blank\">Github</a></li>\n        <li><a href=\"https://twitter.com/PatMooreDesign\" target=\"_blank\">Twitter</a></li>\n      </ul>\n    </div>\n    <div class=\"footer-form\">\n      <form \n        action=\"http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php\"\n        method=\"POST\">\n        <input type=\"email\" name=\"email\" placeholder=\"Email\"/>\n        <textarea name=\"message\" placeholder=\"Drop us a line...\"></textarea>\n        <button id=\"submit\">Send</button>\n      </form>\n    </div>\n  </section>\n    <p>Products and phtots sourced from <a href=\"https://fourhands.com/\" target=\"_blank\">Fourhands.com</a></p>\n\n</footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-direction: column;\n  min-height: 100%; }\n\nheader {\n  flex: 0 0;\n  padding: 20px 20px 0; }\n\nheader h1 {\n    font-size: 32px;\n    line-height: 1;\n    letter-spacing: .1rem;\n    border-bottom: 1px solid #eaeaea; }\n\nheader h1 a {\n      display: inline-block;\n      text-decoration: none;\n      color: #2980b9;\n      font-weight: 700; }\n\nheader h1 .colon {\n      color: #ccc; }\n\nnav {\n  flex: 0 0;\n  padding: 0 20px; }\n\nnav ul {\n    list-style: none;\n    padding: 0;\n    text-align: right;\n    font-size: 12px;\n    letter-spacing: .1rem; }\n\nnav ul li {\n      display: inline-block;\n      margin-left: 16px; }\n\nnav ul li a {\n        text-decoration: none;\n        text-transform: uppercase;\n        line-height: 40px;\n        font-weight: 300;\n        color: #333; }\n\nnav ul li a:hover {\n          color: #2980b9; }\n\nmain {\n  flex: 1 1; }\n\nfooter {\n  flex: 0 0;\n  display: flex;\n  flex-direction: column;\n  background-color: #34495e;\n  padding: 40px 20px;\n  font-size: 14px;\n  font-weight: 300; }\n\nfooter section {\n    flex: 1 1;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap; }\n\nfooter section .footer-links {\n      flex: 2 1;\n      margin-bottom: 20px; }\n\nfooter section .footer-links ul {\n        list-style: none;\n        display: inline-block;\n        width: 50%;\n        padding-left: 0;\n        vertical-align: top; }\n\nfooter section .footer-links ul li {\n          margin-bottom: 16px; }\n\nfooter section .footer-form {\n      width: 100%;\n      margin-bottom: 40px; }\n\n@media screen and (min-width: 600px) {\n        footer section .footer-form {\n          flex: 1 1; } }\n\nfooter section .footer-form input, footer section .footer-form textarea {\n        width: 100%;\n        margin-bottom: 8px;\n        padding: 4px 8px;\n        background-color: rgba(0, 0, 0, 0.5);\n        border: 1px solid rgba(0, 0, 0, 0.5);\n        color: #2980b9; }\n\nfooter section .footer-form textarea {\n        min-height: 120px; }\n\nfooter section .footer-form button {\n        height: 32px;\n        min-width: 120px;\n        padding: 4px 8px;\n        background-color: rgba(0, 0, 0, 0.5);\n        border: 1px solid rgba(0, 0, 0, 0.5);\n        font-size: 12px;\n        font-weight: 300;\n        text-transform: uppercase;\n        letter-spacing: .1rem;\n        color: #eaeaea;\n        cursor: pointer;\n        transition: background-color 180ms linear, border-color 180ms linear; }\n\nfooter section .footer-form button:hover {\n          background-color: #2980b9;\n          border: 1px solid #2980b9; }\n\nfooter p {\n    display: 0 0;\n    color: #000; }\n\nfooter a {\n    color: rgba(234, 234, 234, 0.5); }\n\nfooter a:hover {\n      color: rgba(234, 234, 234, 0.8); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXRyaWNrbW9vcmUvU2l0ZXMvYWNxdWlyZS1tYXJrZXQvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvcGF0cmlja21vb3JlL1NpdGVzL2FjcXVpcmUtbWFya2V0L3NyYy9hcHAvc2hhcmVkL2NvbG9ycy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGlCQUFnQixFQUNuQjs7QUFFRDtFQUNJLFVBQVM7RUFDVCxxQkFBb0IsRUFpQnZCOztBQW5CRDtJQUlRLGdCQUFlO0lBQ2YsZUFBYztJQUNkLHNCQUFxQjtJQUNyQixpQ0FBZ0MsRUFXbkM7O0FBbEJMO01BU1ksc0JBQXFCO01BQ3JCLHNCQUFxQjtNQUNyQixlQ25CVztNRG9CWCxpQkFBZ0IsRUFDbkI7O0FBYlQ7TUFlWSxZQUFXLEVBQ2Q7O0FBSVQ7RUFDSSxVQUFTO0VBQ1QsZ0JBQWUsRUF3QmxCOztBQTFCRDtJQUlRLGlCQUFnQjtJQUNoQixXQUFVO0lBQ1Ysa0JBQWlCO0lBQ2pCLGdCQUFlO0lBQ2Ysc0JBQXFCLEVBaUJ4Qjs7QUF6Qkw7TUFVWSxzQkFBcUI7TUFDckIsa0JBQWlCLEVBYXBCOztBQXhCVDtRQWFnQixzQkFBcUI7UUFDckIsMEJBQXlCO1FBQ3pCLGtCQUFpQjtRQUNqQixpQkFBZ0I7UUFDaEIsWUFBVyxFQU1kOztBQXZCYjtVQW9Cb0IsZUNoREcsRURpRE47O0FBT2pCO0VBQ0ksVUFBUyxFQUNaOztBQUVEO0VBQ0ksVUFBUztFQUNULGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsMEJDL0RxQjtFRGdFckIsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsaUJBQWdCLEVBcUVuQjs7QUE1RUQ7SUFTUSxVQUFTO0lBQ1QsY0FBYTtJQUNiLG9CQUFtQjtJQUNuQixnQkFBZSxFQXFEbEI7O0FBakVMO01BZVksVUFBUztNQUNULG9CQUFtQixFQVd0Qjs7QUEzQlQ7UUFrQmdCLGlCQUFnQjtRQUNoQixzQkFBcUI7UUFDckIsV0FBVTtRQUNWLGdCQUFlO1FBQ2Ysb0JBQW1CLEVBSXRCOztBQTFCYjtVQXdCb0Isb0JBQW1CLEVBQ3RCOztBQXpCakI7TUE4QlksWUFBVztNQUNYLG9CQUFtQixFQWlDdEI7O0FBaENHO1FBaENaO1VBaUNnQixVQUFTLEVBK0JoQixFQUFBOztBQWhFVDtRQW9DZ0IsWUFBVztRQUNYLG1CQUFrQjtRQUNsQixpQkFBZ0I7UUFDaEIscUNBQWdDO1FBQ2hDLHFDQUFnQztRQUNoQyxlQ3JHTyxFRHNHVjs7QUExQ2I7UUE0Q2dCLGtCQUFpQixFQUNwQjs7QUE3Q2I7UUErQ2dCLGFBQVk7UUFDWixpQkFBZ0I7UUFDaEIsaUJBQWdCO1FBQ2hCLHFDQUFnQztRQUNoQyxxQ0FBZ0M7UUFDaEMsZ0JBQWU7UUFDZixpQkFBZ0I7UUFDaEIsMEJBQXlCO1FBQ3pCLHNCQUFxQjtRQUNyQixlQUFjO1FBQ2QsZ0JBQWU7UUFDZixxRUFBb0UsRUFLdkU7O0FBL0RiO1VBNERvQiwwQkN4SEc7VUR5SEgsMEJDekhHLEVEMEhOOztBQTlEakI7SUFtRVEsYUFBWTtJQUNaLFlBQVcsRUFDZDs7QUFyRUw7SUF1RVEsZ0NBQW1CLEVBSXRCOztBQTNFTDtNQXlFWSxnQ0FBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL3NoYXJlZC9jb2xvcnMvY29sb3JzJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG5oZWFkZXIge1xuICAgIGZsZXg6IDAgMDtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMDtcbiAgICBoMSB7IFxuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbG9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAjY2NjO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn1cbm5hdiB7XG4gICAgZmxleDogMCAwO1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcbiAgICAgICAgbGkge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuXG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbm1haW4ge1xuICAgIGZsZXg6IDEgMTtcbn1cblxuZm9vdGVyIHtcbiAgICBmbGV4OiAwIDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgcGFkZGluZzogNDBweCAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNlY3Rpb24ge1xuICAgICAgICBmbGV4OiAxIDE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgXG4gICAgICAgIC5mb290ZXItbGlua3Mge1xuICAgICAgICAgICAgZmxleDogMiAxO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZm9vdGVyLWZvcm0ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpbnB1dCwgdGV4dGFyZWEge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggOHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjUpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsLjUpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC41KTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLC41KTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2VhZWFlYTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxODBtcyBsaW5lYXIsIGJvcmRlci1jb2xvciAxODBtcyBsaW5lYXI7XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkcHJpbWFyeS1jb2xvcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcCB7XG4gICAgICAgIGRpc3BsYXk6IDAgMDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxuICAgIGEge1xuICAgICAgICBjb2xvcjogcmdiYSgjZWFlYWVhLCAuNSk7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoI2VhZWFlYSwgLjgpO1xuICAgICAgICB9XG4gICAgfVxufSIsIiRwcmltYXJ5LWNvbG9yOiAjMjk4MGI5O1xuJHNlY29uZGFyeS1jb2xvcjogIzM0NDk1ZTtcblxuJGRpc2FibGVkLWNvbG9yOiAjY2NjOyJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/services/cart/cart.service */ "./src/app/shared/services/cart/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(cartService) {
        this.cartService = cartService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.cartService.getCartCount.subscribe(function (count) {
            _this.cartCount = count;
        });
    };
    AppComponent.prototype.onActivate = function (event) {
        document.body.scrollTop = 0;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_home_image_carousel_image_carousel_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home/image-carousel/image-carousel.module */ "./src/app/pages/home/image-carousel/image-carousel.module.ts");
/* harmony import */ var _pages_product_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/product/product.component */ "./src/app/pages/product/product.component.ts");
/* harmony import */ var _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/cart/cart.component */ "./src/app/pages/cart/cart.component.ts");
/* harmony import */ var _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/product-card/product-card.component */ "./src/app/shared/components/product-card/product-card.component.ts");
/* harmony import */ var _pages_product_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/product/image-viewer/image-viewer.component */ "./src/app/pages/product/image-viewer/image-viewer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _pages_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _shared_components_product_card_product_card_component__WEBPACK_IMPORTED_MODULE_9__["ProductCardComponent"],
                _pages_product_product_component__WEBPACK_IMPORTED_MODULE_7__["ProductComponent"],
                _pages_product_image_viewer_image_viewer_component__WEBPACK_IMPORTED_MODULE_10__["ImageViewerComponent"],
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _pages_home_image_carousel_image_carousel_module__WEBPACK_IMPORTED_MODULE_6__["ImageCarouselModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/cart/cart.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/cart/cart.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article>\n    <section class=\"cart-wrapper\">\n      <div class=\"cart\">\n        <h1 class=\"title\">Cart</h1>\n\n        <ng-container *ngIf=\"cartItems.length; else Empty\">\n            <product-card *ngFor=\"let item of cartItems\" [product]=\"item\" [cartView]=\"true\"></product-card>\n        </ng-container>\n\n        <ng-template #Empty>\n          <p class=\"empty\">Your cart is empty.</p>\n        </ng-template>\n        \n      </div>\n      \n      <div *ngIf=\"cartItems.length\" class=\"checkout-wrapper\">\n        <div class=\"totals\">\n          <p><span>Order subtotal:</span> <span>$000.000</span></p>\n          <p><span>Est. Shipping + Handling:</span> <span>$000.000</span></p>\n          <p><span>Subtotal:</span> <span>$000.000</span></p>\n        </div>\n        <button class=\"checkout-button\">\n            Checkout\n        </button>\n      </div>\n    </section>\n\n  </article>\n  "

/***/ }),

/***/ "./src/app/pages/cart/cart.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/cart/cart.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "article h1 {\n  margin-bottom: 20px; }\n\narticle .cart-wrapper {\n  margin-bottom: 80px; }\n\n@media screen and (min-width: 768px) {\n    article .cart-wrapper {\n      display: flex;\n      flex-direction: row; } }\n\narticle .cart {\n  flex: 1 1; }\n\n@media screen and (min-width: 992px) {\n    article .cart {\n      flex: 2 1; } }\n\narticle .cart .empty {\n    color: #ccc; }\n\narticle .cart .cart-item {\n    padding: 20px 0;\n    border-bottom: 1px solid #eaeaea; }\n\narticle .cart .cart-item img {\n      display: inline-block;\n      width: 200px;\n      margin-right: 8px; }\n\narticle .cart .cart-item h2 {\n      display: inline; }\n\narticle .checkout-wrapper {\n  flex: 1 1;\n  height: 228px;\n  padding: 20px;\n  background-color: #eaeaea;\n  text-align: center; }\n\n@media screen and (min-width: 768px) {\n    article .checkout-wrapper {\n      margin-left: 40px; } }\n\narticle .checkout-wrapper .totals p {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    margin-bottom: 8px;\n    font-size: 14px; }\n\narticle .checkout-wrapper .totals p:last-child {\n      font-weight: 700; }\n\narticle .checkout-wrapper .totals p span {\n      display: inline-block; }\n\narticle .checkout-wrapper .checkout-button {\n    height: 32px;\n    min-width: 140px;\n    margin-top: 60px;\n    padding: 8px 16px;\n    background-color: #34495e;\n    border: 1px solid #34495e;\n    font-size: 12px;\n    font-weight: 300;\n    text-transform: uppercase;\n    letter-spacing: .1rem;\n    color: #fff;\n    cursor: pointer;\n    transition: background-color 180ms linear, border-color 180ms linear; }\n\narticle .checkout-wrapper .checkout-button:hover {\n      background-color: #2980b9;\n      border: 1px solid #2980b9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXRyaWNrbW9vcmUvU2l0ZXMvYWNxdWlyZS1tYXJrZXQvc3JjL2FwcC9wYWdlcy9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvcGF0cmlja21vb3JlL1NpdGVzL2FjcXVpcmUtbWFya2V0L3NyYy9hcHAvc2hhcmVkL2NvbG9ycy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFHUSxvQkFBbUIsRUFDdEI7O0FBSkw7RUFPUSxvQkFBbUIsRUFLdEI7O0FBSkc7SUFSUjtNQVNZLGNBQWE7TUFDYixvQkFBbUIsRUFFMUIsRUFBQTs7QUFaTDtFQWVRLFVBQVMsRUF1Qlo7O0FBckJHO0lBakJSO01Ba0JZLFVBQVMsRUFvQmhCLEVBQUE7O0FBdENMO0lBc0JZLFlBQVcsRUFDZDs7QUF2QlQ7SUEwQlksZ0JBQWU7SUFDZixpQ0FBZ0MsRUFTbkM7O0FBcENUO01BNkJnQixzQkFBcUI7TUFDckIsYUFBWTtNQUNaLGtCQUFpQixFQUNwQjs7QUFoQ2I7TUFrQ2dCLGdCQUNKLEVBQUM7O0FBbkNiO0VBeUNRLFVBQVM7RUFDVCxjQUFhO0VBQ2IsY0FBYztFQUNkLDBCQUF5QjtFQUN6QixtQkFBa0IsRUEyQ3JCOztBQXpDRztJQS9DUjtNQWdEWSxrQkFBaUIsRUF3Q3hCLEVBQUE7O0FBeEZMO0lBcURnQixjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLCtCQUE4QjtJQUM5QixtQkFBa0I7SUFDbEIsZ0JBQWUsRUFPbEI7O0FBaEViO01BMkRvQixpQkFBZ0IsRUFDbkI7O0FBNURqQjtNQThEb0Isc0JBQXFCLEVBQ3hCOztBQS9EakI7SUFvRVksYUFBWTtJQUNaLGlCQUFnQjtJQUNoQixpQkFBZ0I7SUFDaEIsa0JBQWlCO0lBQ2pCLDBCQ3pFYTtJRDBFYiwwQkMxRWE7SUQyRWIsZ0JBQWU7SUFDZixpQkFBZ0I7SUFDaEIsMEJBQXlCO0lBQ3pCLHNCQUFxQjtJQUNyQixZQUFXO0lBQ1gsZ0JBQWU7SUFDZixxRUFBb0UsRUFLdkU7O0FBckZUO01Ba0ZnQiwwQkNwRk87TURxRlAsMEJDckZPLEVEc0ZWIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vc2hhcmVkL2NvbG9ycy9jb2xvcnMnO1xuXG5hcnRpY2xlIHtcblxuICAgIGgxIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICAuY2FydC13cmFwcGVyIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNhcnQge1xuICAgICAgICBmbGV4OiAxIDE7XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAgICAgICAgIGZsZXg6IDIgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lbXB0eSB7XG4gICAgICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLmNhcnQtaXRlbSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLmNoZWNrb3V0LXdyYXBwZXIge1xuICAgICAgICBmbGV4OiAxIDE7XG4gICAgICAgIGhlaWdodDogMjI4cHg7XG4gICAgICAgIHBhZGRpbmc6ICAyMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWFlYWVhO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvdGFscyB7XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY2hlY2tvdXQtYnV0dG9uIHtcbiAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTQwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHNlY29uZGFyeS1jb2xvcjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4xcmVtO1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE4MG1zIGxpbmVhciwgYm9yZGVyLWNvbG9yIDE4MG1zIGxpbmVhcjtcbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRwcmltYXJ5LWNvbG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgfVxuICAgICAgIFxufSIsIiRwcmltYXJ5LWNvbG9yOiAjMjk4MGI5O1xuJHNlY29uZGFyeS1jb2xvcjogIzM0NDk1ZTtcblxuJGRpc2FibGVkLWNvbG9yOiAjY2NjOyJdfQ== */"

/***/ }),

/***/ "./src/app/pages/cart/cart.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/cart/cart.component.ts ***!
  \**********************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/cart/cart.service */ "./src/app/shared/services/cart/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartComponent = /** @class */ (function () {
    function CartComponent(cartService) {
        this.cartService = cartService;
    }
    CartComponent.prototype.ngOnInit = function () {
        this.cartItems = this.cartService.getCartItems();
    };
    CartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/pages/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/pages/cart/cart.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<image-carousel>\n  <img carouselImage src=\"/assets/images/MAXX-SOFA-AND-OLIVIA-SQUARE-COFFEE-TABLE-WITH-JACK-LEATHER-ROCKER-AND-ZADIE-BOOKSHELF.jpg\" alt=\"\">\n  <img carouselImage src=\"/assets/images/Liam-sectional-and-tinsley-coffee-table-rug.jpg\" alt=\"\">\n  <img carouselImage src=\"/assets/images/Langham-channeled-sectional-and-olive-Ace-chair-and-Shannon-oval-coffee-table.jpg\" alt=\"\">\n  <img carouselImage src=\"/assets/images/Monterey-outdoor-teak-chair-and-Sonora-outdoor-dining-bench.jpg\" alt=\"\">\n</image-carousel>\n\n<article>\n\n  <product-card \n    *ngFor=\"let product of products\" \n    [product]=\"product\">\n  </product-card>\n  \n</article>"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "article {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-gap: 24px 16px;\n  padding: 40px 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXRyaWNrbW9vcmUvU2l0ZXMvYWNxdWlyZS1tYXJrZXQvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhO0VBQ2IsNkRBQTREO0VBQzVELG9CQUFtQjtFQUNuQixtQkFBa0IsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcnRpY2xlIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgICBncmlkLWdhcDogMjRweCAxNnB4O1xuICAgIHBhZGRpbmc6IDQwcHggMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/product/product.service */ "./src/app/shared/services/product/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(productService) {
        this.productService = productService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.products.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1)).subscribe(function (products) {
            _this.products = products;
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_product_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/image-carousel/image-carousel.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pages/home/image-carousel/image-carousel.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>"

/***/ }),

/***/ "./src/app/pages/home/image-carousel/image-carousel.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pages/home/image-carousel/image-carousel.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: relative;\n  display: block;\n  width: 100%;\n  max-width: 1200px;\n  height: auto;\n  height: 60vw;\n  max-height: 520px;\n  margin: auto;\n  background-color: #eaeaea;\n  overflow: hidden; }\n\n::ng-deep [carouselImage] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 100%;\n  max-width: 100%;\n  opacity: 0;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  transition: opacity 2000ms linear; }\n\n::ng-deep [carouselImage].in-view {\n    opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXRyaWNrbW9vcmUvU2l0ZXMvYWNxdWlyZS1tYXJrZXQvc3JjL2FwcC9wYWdlcy9ob21lL2ltYWdlLWNhcm91c2VsL2ltYWdlLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCO0VBQ2xCLGVBQWM7RUFDZCxZQUFXO0VBQ1gsa0JBQWlCO0VBQ2pCLGFBQVk7RUFDWixhQUFZO0VBQ1osa0JBQWlCO0VBQ2pCLGFBQVk7RUFDWiwwQkFBeUI7RUFDekIsaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLFNBQVE7RUFDUixVQUFTO0VBQ1QsWUFBVztFQUNYLGdCQUFlO0VBQ2YsV0FBVTtFQUNWLHlDQUFnQztVQUFoQyxpQ0FBZ0M7RUFDaEMsa0NBQWlDLEVBSXBDOztBQVpEO0lBVVEsV0FBVSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaG9tZS9pbWFnZS1jYXJvdXNlbC9pbWFnZS1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGhlaWdodDogNjB2dztcbiAgICBtYXgtaGVpZ2h0OiA1MjBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgICBvdmVyZmxvdzogaGlkZGVuOyBcbn1cblxuOjpuZy1kZWVwIFtjYXJvdXNlbEltYWdlXSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMDBtcyBsaW5lYXI7XG4gICAgJi5pbi12aWV3IHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/home/image-carousel/image-carousel.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/home/image-carousel/image-carousel.component.ts ***!
  \***********************************************************************/
/*! exports provided: ImageCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCarouselComponent", function() { return ImageCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _image_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image.directive */ "./src/app/pages/home/image-carousel/image.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageCarouselComponent = /** @class */ (function () {
    function ImageCarouselComponent() {
        this.active = true;
        this.current = 0;
    }
    ImageCarouselComponent.prototype.ngAfterContentInit = function () {
        this.images.first.inView = true;
        this.imagesArray = this.images.toArray();
        this.play();
    };
    ImageCarouselComponent.prototype.clear = function () {
        this.images.forEach(function (image) { return image.inView = false; });
    };
    ImageCarouselComponent.prototype.next = function () {
        if (this.current === this.images.length - 1) {
            this.current = 0;
        }
        else {
            this.current += 1;
        }
        this.clear();
        this.imagesArray[this.current].inView = true;
    };
    ImageCarouselComponent.prototype.play = function () {
        var _this = this;
        setTimeout(function () {
            _this.next();
            _this.play();
        }, 6000);
    };
    ImageCarouselComponent.prototype.ngOnDestroy = function () {
        this.active = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"])(_image_directive__WEBPACK_IMPORTED_MODULE_1__["ImageDirective"]),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], ImageCarouselComponent.prototype, "images", void 0);
    ImageCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'image-carousel',
            template: __webpack_require__(/*! ./image-carousel.component.html */ "./src/app/pages/home/image-carousel/image-carousel.component.html"),
            styles: [__webpack_require__(/*! ./image-carousel.component.scss */ "./src/app/pages/home/image-carousel/image-carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ImageCarouselComponent);
    return ImageCarouselComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/image-carousel/image-carousel.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/home/image-carousel/image-carousel.module.ts ***!
  \********************************************************************/
/*! exports provided: ImageCarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCarouselModule", function() { return ImageCarouselModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _image_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image-carousel.component */ "./src/app/pages/home/image-carousel/image-carousel.component.ts");
/* harmony import */ var _image_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./image.directive */ "./src/app/pages/home/image-carousel/image.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ImageCarouselModule = /** @class */ (function () {
    function ImageCarouselModule() {
    }
    ImageCarouselModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _image_carousel_component__WEBPACK_IMPORTED_MODULE_2__["ImageCarouselComponent"],
                _image_directive__WEBPACK_IMPORTED_MODULE_3__["ImageDirective"],
            ],
            exports: [
                _image_carousel_component__WEBPACK_IMPORTED_MODULE_2__["ImageCarouselComponent"],
                _image_directive__WEBPACK_IMPORTED_MODULE_3__["ImageDirective"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
        })
    ], ImageCarouselModule);
    return ImageCarouselModule;
}());



/***/ }),

/***/ "./src/app/pages/home/image-carousel/image.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/home/image-carousel/image.directive.ts ***!
  \**************************************************************/
/*! exports provided: ImageDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageDirective", function() { return ImageDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageDirective = /** @class */ (function () {
    function ImageDirective() {
        this.inView = false;
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.in-view'),
        __metadata("design:type", Object)
    ], ImageDirective.prototype, "inView", void 0);
    ImageDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[carouselImage]'
        }),
        __metadata("design:paramtypes", [])
    ], ImageDirective);
    return ImageDirective;
}());



/***/ }),

/***/ "./src/app/pages/product/image-viewer/image-viewer.component.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/product/image-viewer/image-viewer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"selected-image\">\n  <img *ngIf=\"selectedImage\" src=\"{{selectedImage.large}}\" alt=\"{{selectedImage.alt}}\">\n</div>\n<div *ngIf=\"images\" class=\"gallery\">\n  <img *ngFor=\"let image of images\" \n    src=\"{{image.thumb}}\" \n    alt=\"{{image.alt}}\"\n    (click)=\"selectImage(image)\">\n</div>"

/***/ }),

/***/ "./src/app/pages/product/image-viewer/image-viewer.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/product/image-viewer/image-viewer.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected-image {\n  background-color: #eaeaea;\n  margin-bottom: 8px;\n  font-size: 0;\n  line-height: 0; }\n  .selected-image img {\n    max-width: 100%; }\n  .gallery {\n  height: 40px; }\n  .gallery img {\n    display: inline-block;\n    max-height: 100%;\n    margin-right: 8px;\n    border: 1px solid #eaeaea;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXRyaWNrbW9vcmUvU2l0ZXMvYWNxdWlyZS1tYXJrZXQvc3JjL2FwcC9wYWdlcy9wcm9kdWN0L2ltYWdlLXZpZXdlci9pbWFnZS12aWV3ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFSSwwQkFBeUI7RUFDekIsbUJBQWtCO0VBQ2xCLGFBQVk7RUFDWixlQUFjLEVBU2pCO0VBZEQ7SUFZUSxnQkFBZSxFQUNsQjtFQUVMO0VBQ0ksYUFBWSxFQVNmO0VBVkQ7SUFJUSxzQkFBcUI7SUFDckIsaUJBQWdCO0lBQ2hCLGtCQUFpQjtJQUNqQiwwQkFBeUI7SUFDekIsZ0JBQWUsRUFDbEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0L2ltYWdlLXZpZXdlci9pbWFnZS12aWV3ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zZWxlY3RlZC1pbWFnZSB7XG4gICAgLy8gbWluLWhlaWdodDogMzAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgZm9udC1zaXplOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgLy8gbWluLWhlaWdodDogNDAwcHg7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbi5nYWxsZXJ5IHtcbiAgICBoZWlnaHQ6IDQwcHg7XG5cbiAgICBpbWcge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/product/image-viewer/image-viewer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/product/image-viewer/image-viewer.component.ts ***!
  \**********************************************************************/
/*! exports provided: ImageViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageViewerComponent", function() { return ImageViewerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageViewerComponent = /** @class */ (function () {
    function ImageViewerComponent() {
    }
    ImageViewerComponent.prototype.ngOnInit = function () {
        this.selectedImage = this.images && this.images[0];
    };
    ImageViewerComponent.prototype.ngOnChanges = function (change) {
        this.images = change.images.currentValue;
        this.selectedImage = this.images[0];
    };
    ImageViewerComponent.prototype.selectImage = function (image) {
        this.selectedImage = image;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ImageViewerComponent.prototype, "images", void 0);
    ImageViewerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'image-viewer',
            template: __webpack_require__(/*! ./image-viewer.component.html */ "./src/app/pages/product/image-viewer/image-viewer.component.html"),
            styles: [__webpack_require__(/*! ./image-viewer.component.scss */ "./src/app/pages/product/image-viewer/image-viewer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ImageViewerComponent);
    return ImageViewerComponent;
}());



/***/ }),

/***/ "./src/app/pages/product/product.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/product/product.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<article>\n  <section class=\"product-wrapper\">\n    <image-viewer [images]=\"product.images\"></image-viewer>\n\n    <div class=\"info\">\n      <h1 class=\"title\">{{product.name}}</h1>\n      <p class=\"price\">{{product.price}}</p>\n      <p class=\"description\">\n        {{product.description}}\n      </p>\n\n      <div class=\"details\">\n        <button (click)=\"toggleDetails($event)\"><h2>Details \n          {{ showDetails ? '-' : '+' }}\n        </h2></button>\n        <div class=\"details-content\" [class.show]=\"showDetails\">\n          <ng-container *ngIf=\"product.details; else noDetails\">\n            <ul>\n              <li *ngFor=\"let detail of product.details\">{{detail}}</li>\n            </ul>\n          </ng-container>\n          <ng-template #noDetails>\n            <p>Details unavailable.</p>\n          </ng-template>\n          \n        </div>\n      </div>\n\n      <button \n        class=\"add-cart\"\n        (click)=\"addToCart()\">\n          Add to cart\n      </button>\n    </div>\n  </section>\n\n  <section>\n      <h2>Similar Items</h2>\n      <section  class=\"similar\">\n        <product-card *ngFor=\"let id of product.similar\" [product]=\"products[id]\"></product-card>\n      </section>\n  </section>\n</article>\n"

/***/ }),

/***/ "./src/app/pages/product/product.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/product/product.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "article h2 {\n  font-size: 16px;\n  font-weight: 400;\n  margin-bottom: 16px; }\n\narticle .product-wrapper {\n  margin-bottom: 80px; }\n\n@media screen and (min-width: 768px) {\n    article .product-wrapper {\n      display: flex;\n      flex-direction: row; } }\n\narticle image-viewer {\n  flex: 2 1; }\n\narticle .info {\n  flex: 1 1;\n  padding: 40px 0;\n  min-height: 300px; }\n\n@media screen and (min-width: 768px) {\n    article .info {\n      padding: 40px 20px 40px 40px; } }\n\narticle .info .title {\n    margin-bottom: 4px;\n    line-height: 1.25; }\n\narticle .info .price {\n    font-size: 14px;\n    font-weight: 300;\n    letter-spacing: .1rem;\n    margin-bottom: 40px; }\n\narticle .info .description {\n    font-size: 13px;\n    font-weight: 400;\n    margin-bottom: 16px; }\n\narticle .info .details button {\n    width: auto;\n    height: 32px;\n    margin-bottom: 8px;\n    padding: 0;\n    border: none;\n    background-color: transparent;\n    text-align: left;\n    cursor: pointer; }\n\narticle .info .details button h2 {\n      margin: 0;\n      line-height: 32px; }\n\narticle .info .details .details-content {\n    font-size: 13px;\n    max-height: 0;\n    overflow: hidden;\n    transition: max-height 200ms linear; }\n\narticle .info .details .details-content.show {\n      max-height: 110px;\n      overflow-y: auto; }\n\narticle .info .details .details-content ul {\n      padding-left: 15px; }\n\narticle .info .details .details-content li {\n      margin-bottom: 4px; }\n\narticle .info .details .details-content p {\n      color: #ccc; }\n\narticle .info .add-cart {\n    height: 32px;\n    min-width: 140px;\n    margin-top: 40px;\n    padding: 8px 16px;\n    background-color: #34495e;\n    border: 1px solid #34495e;\n    font-size: 12px;\n    font-weight: 300;\n    text-transform: uppercase;\n    letter-spacing: .1rem;\n    color: #fff;\n    cursor: pointer;\n    transition: background-color 180ms linear, border-color 180ms linear; }\n\narticle .info .add-cart:hover {\n      background-color: #2980b9;\n      border: 1px solid #2980b9; }\n\narticle .similar {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-gap: 16px 16px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXRyaWNrbW9vcmUvU2l0ZXMvYWNxdWlyZS1tYXJrZXQvc3JjL2FwcC9wYWdlcy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvcGF0cmlja21vb3JlL1NpdGVzL2FjcXVpcmUtbWFya2V0L3NyYy9hcHAvc2hhcmVkL2NvbG9ycy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFHUSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixvQkFBbUIsRUFDdEI7O0FBTkw7RUFTUSxvQkFBbUIsRUFLdEI7O0FBSkc7SUFWUjtNQVdZLGNBQWE7TUFDYixvQkFBbUIsRUFFMUIsRUFBQTs7QUFkTDtFQWlCUSxVQUFTLEVBQ1o7O0FBbEJMO0VBcUJRLFVBQVM7RUFDVCxnQkFBZTtFQUNmLGtCQUFpQixFQTJFcEI7O0FBekVHO0lBekJSO01BMEJZLDZCQUE0QixFQXdFbkMsRUFBQTs7QUFsR0w7SUE4QlksbUJBQWtCO0lBQ2xCLGtCQUFpQixFQUNwQjs7QUFoQ1Q7SUFrQ1ksZ0JBQWU7SUFDZixpQkFBZ0I7SUFDaEIsc0JBQXFCO0lBQ3JCLG9CQUFtQixFQUN0Qjs7QUF0Q1Q7SUF3Q1ksZ0JBQWU7SUFDZixpQkFBZ0I7SUFDaEIsb0JBQW1CLEVBQ3RCOztBQTNDVDtJQThDZ0IsWUFBVztJQUNYLGFBQVk7SUFDWixtQkFBa0I7SUFDbEIsV0FBVTtJQUNWLGFBQVk7SUFDWiw4QkFBNkI7SUFDN0IsaUJBQWdCO0lBQ2hCLGdCQUFlLEVBS2xCOztBQTFEYjtNQXVEb0IsVUFBUztNQUNULGtCQUNKLEVBQUM7O0FBekRqQjtJQTREZ0IsZ0JBQWU7SUFDZixjQUFhO0lBQ2IsaUJBQWdCO0lBQ2hCLG9DQUFtQyxFQWN0Qzs7QUE3RWI7TUFpRW9CLGtCQUFpQjtNQUNqQixpQkFBZ0IsRUFDbkI7O0FBbkVqQjtNQXFFb0IsbUJBQWtCLEVBQ3JCOztBQXRFakI7TUF3RW9CLG1CQUFrQixFQUNyQjs7QUF6RWpCO01BMkVvQixZQzFFQyxFRDJFSjs7QUE1RWpCO0lBZ0ZZLGFBQVk7SUFDWixpQkFBZ0I7SUFDaEIsaUJBQWdCO0lBQ2hCLGtCQUFpQjtJQUNqQiwwQkNyRmE7SURzRmIsMEJDdEZhO0lEdUZiLGdCQUFlO0lBQ2YsaUJBQWdCO0lBQ2hCLDBCQUF5QjtJQUN6QixzQkFBcUI7SUFDckIsWUFBVztJQUNYLGdCQUFlO0lBQ2YscUVBQW9FLEVBS3ZFOztBQWpHVDtNQThGZ0IsMEJDaEdPO01EaUdQLDBCQ2pHTyxFRGtHVjs7QUFoR2I7RUFzR1EsY0FBYTtFQUNiLDZEQUE0RDtFQUM1RCxvQkFBbUIsRUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9kdWN0L3Byb2R1Y3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9zaGFyZWQvY29sb3JzL2NvbG9ycyc7XG5cbmFydGljbGUge1xuXG4gICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgLnByb2R1Y3Qtd3JhcHBlciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGltYWdlLXZpZXdlciB7XG4gICAgICAgIGZsZXg6IDIgMTtcbiAgICB9XG5cbiAgICAuaW5mbyB7XG4gICAgICAgIGZsZXg6IDEgMTtcbiAgICAgICAgcGFkZGluZzogNDBweCAwO1xuICAgICAgICBtaW4taGVpZ2h0OiAzMDBweDtcblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgICAgcGFkZGluZzogNDBweCAyMHB4IDQwcHggNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICAgICAgfVxuICAgICAgICAucHJpY2Uge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG4gICAgICAgIC5kZXRhaWxzIHtcbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMycHhcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGV0YWlscy1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMjAwbXMgbGluZWFyO1xuICAgICAgICAgICAgICAgICYuc2hvdyB7XG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDExMHB4O1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGkge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuYWRkLWNhcnQge1xuICAgICAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNDBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnktY29sb3I7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkc2Vjb25kYXJ5LWNvbG9yO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMTgwbXMgbGluZWFyLCBib3JkZXItY29sb3IgMTgwbXMgbGluZWFyO1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHByaW1hcnktY29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIC5zaW1pbGFyIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICAgICAgICBncmlkLWdhcDogMTZweCAxNnB4O1xuICAgIH1cbn0iLCIkcHJpbWFyeS1jb2xvcjogIzI5ODBiOTtcbiRzZWNvbmRhcnktY29sb3I6ICMzNDQ5NWU7XG5cbiRkaXNhYmxlZC1jb2xvcjogI2NjYzsiXX0= */"

/***/ }),

/***/ "./src/app/pages/product/product.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/product/product.component.ts ***!
  \****************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_services_product_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/product/product.service */ "./src/app/shared/services/product/product.service.ts");
/* harmony import */ var _shared_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/cart/cart.service */ "./src/app/shared/services/cart/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductComponent = /** @class */ (function () {
    function ProductComponent(activatedRoute, cartService, productService) {
        this.activatedRoute = activatedRoute;
        this.cartService = cartService;
        this.productService = productService;
        this.showDetails = false;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.products.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (products) {
            _this.products = products;
        });
        this.subscription = this.activatedRoute.paramMap
            .subscribe(function (data) {
            _this.showDetails = false;
            _this.id = data.params.id;
            _this.productService.getProductById(_this.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1)).subscribe(function (product) {
                _this.product = product;
                document.body.scrollTop = 0;
            });
        });
    };
    ;
    ProductComponent.prototype.toggleDetails = function () {
        this.showDetails = !this.showDetails;
    };
    ProductComponent.prototype.addToCart = function () {
        this.cartService.addToCart(this.product);
    };
    ;
    ProductComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    ;
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/pages/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/pages/product/product.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _shared_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"],
            _shared_services_product_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/product-card/product-card.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/product-card/product-card.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"\" routerLink=\"/product/{{product.id}}\">\n  <div class=\"image-wrapper\">\n    <img src=\"{{image?.thumb}}\" alt=\"{{image?.alt}}}\">\n  </div>\n  <div class=\"info\">\n    <button *ngIf=\"cartView\" class=\"remove\" (click)=\"removeFromCart($event)\">Remove</button>\n    <h3 class=\"title\">{{product.name}}</h3>\n    <p class=\"price\">{{product.price}}</p>\n  </div>\n</a>"

/***/ }),

/***/ "./src/app/shared/components/product-card/product-card.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/product-card/product-card.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-wrapper {\n  position: relative;\n  width: 100%;\n  height: auto;\n  margin-bottom: 8px;\n  padding-top: 60%;\n  background: #eaeaea;\n  font-size: 0;\n  line-height: 0;\n  overflow: hidden; }\n  .image-wrapper img {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width: 100%;\n    max-width: 100%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%); }\n  h3 {\n  font-size: 14px;\n  font-weight: 400;\n  margin-bottom: 4px;\n  color: #333; }\n  p {\n  font-size: 12px;\n  font-weight: 300;\n  letter-spacing: .1rem;\n  color: #666; }\n  a {\n  text-decoration: none; }\n  :host().cart-view {\n  position: relative;\n  display: block;\n  padding: 20px 0;\n  border-bottom: 1px solid #eaeaea; }\n  :host().cart-view .remove {\n    position: absolute;\n    right: 0;\n    bottom: 20px;\n    padding: 4px 8px;\n    border: none;\n    background-color: transparent;\n    text-transform: uppercase;\n    font-weight: 300;\n    letter-spacing: .1rem;\n    cursor: pointer; }\n  :host().cart-view .remove:hover {\n      color: #2980b9; }\n  :host().cart-view a {\n    display: flex;\n    flex-direction: row; }\n  :host().cart-view .image-wrapper {\n    position: relative;\n    width: 200px;\n    height: 140px;\n    margin-right: 20px;\n    padding-top: 0;\n    background: #eaeaea;\n    font-size: 0;\n    line-height: 0;\n    overflow: hidden; }\n  :host().cart-view .image-wrapper img {\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      width: 100%;\n      max-width: 100%;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%); }\n  :host().cart-view .info {\n    flex: 1 1;\n    padding-top: 40px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9wYXRyaWNrbW9vcmUvU2l0ZXMvYWNxdWlyZS1tYXJrZXQvc3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcm9kdWN0LWNhcmQvcHJvZHVjdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3BhdHJpY2ttb29yZS9TaXRlcy9hY3F1aXJlLW1hcmtldC9zcmMvYXBwL3NoYXJlZC9jb2xvcnMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixvQkFBbUI7RUFDbkIsYUFBWTtFQUNaLGVBQWM7RUFDZCxpQkFBZ0IsRUFTbkI7RUFsQkQ7SUFXUSxtQkFBa0I7SUFDbEIsU0FBUTtJQUNSLFVBQVM7SUFDVCxZQUFXO0lBQ1gsZ0JBQWU7SUFDZix5Q0FBZ0M7WUFBaEMsaUNBQWdDLEVBQ25DO0VBR0w7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixtQkFBa0I7RUFDbEIsWUFBVyxFQUNkO0VBQ0Q7RUFDSSxnQkFBZTtFQUNmLGlCQUFnQjtFQUNoQixzQkFBcUI7RUFDckIsWUFBVyxFQUNkO0VBQ0Q7RUFDSSxzQkFBcUIsRUFDeEI7RUFHRDtFQUNJLG1CQUFrQjtFQUNsQixlQUFjO0VBQ2QsZ0JBQWU7RUFDZixpQ0FBZ0MsRUE4Q25DO0VBbEREO0lBT1EsbUJBQWtCO0lBQ2xCLFNBQU87SUFDUCxhQUFZO0lBQ1osaUJBQWdCO0lBQ2hCLGFBQVk7SUFDWiw4QkFBNkI7SUFDN0IsMEJBQXlCO0lBQ3pCLGlCQUFnQjtJQUNoQixzQkFBcUI7SUFDckIsZ0JBQWUsRUFLbEI7RUFyQkw7TUFtQlksZUMxRFcsRUQyRGQ7RUFwQlQ7SUF3QlEsY0FBYTtJQUNiLG9CQUFtQixFQUN0QjtFQTFCTDtJQTRCUSxtQkFBa0I7SUFDbEIsYUFBWTtJQUNaLGNBQWE7SUFDYixtQkFBa0I7SUFDbEIsZUFBYztJQUNkLG9CQUFtQjtJQUNuQixhQUFZO0lBQ1osZUFBYztJQUNkLGlCQUFnQixFQVNuQjtFQTdDTDtNQXNDWSxtQkFBa0I7TUFDbEIsU0FBUTtNQUNSLFVBQVM7TUFDVCxZQUFXO01BQ1gsZ0JBQWU7TUFDZix5Q0FBZ0M7Y0FBaEMsaUNBQWdDLEVBQ25DO0VBNUNUO0lBK0NRLFVBQVM7SUFDVCxrQkFBaUIsRUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9wcm9kdWN0LWNhcmQvcHJvZHVjdC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vY29sb3JzL2NvbG9ycyc7XG5cbi5pbWFnZS13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBwYWRkaW5nLXRvcDogNjAlO1xuICAgIGJhY2tncm91bmQ6ICNlYWVhZWE7XG4gICAgZm9udC1zaXplOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgaW1nIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB9XG59XG5cbmgzIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgY29sb3I6ICMzMzM7XG59XG5wIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjFyZW07XG4gICAgY29sb3I6ICM2NjY7XG59XG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cblxuOmhvc3QoKS5jYXJ0LXZpZXcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWE7XG5cbiAgICAucmVtb3ZlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDowO1xuICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAuMXJlbTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogJHByaW1hcnktY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB9XG4gICAgLmltYWdlLXdyYXBwZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgYmFja2dyb3VuZDogI2VhZWFlYTtcbiAgICAgICAgZm9udC1zaXplOiAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuaW5mbyB7XG4gICAgICAgIGZsZXg6IDEgMTtcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgfVxufVxuIiwiJHByaW1hcnktY29sb3I6ICMyOTgwYjk7XG4kc2Vjb25kYXJ5LWNvbG9yOiAjMzQ0OTVlO1xuXG4kZGlzYWJsZWQtY29sb3I6ICNjY2M7Il19 */"

/***/ }),

/***/ "./src/app/shared/components/product-card/product-card.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/product-card/product-card.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProductCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductCardComponent", function() { return ProductCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cart_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/cart/cart.service */ "./src/app/shared/services/cart/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent(cartService) {
        this.cartService = cartService;
        this.cartView = false;
    }
    ProductCardComponent.prototype.ngOnInit = function () {
        this.image = this.product && this.product.images && this.product.images[0];
    };
    ProductCardComponent.prototype.removeFromCart = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.cartService.removeFromCart(this.product);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.cart-view'),
        __metadata("design:type", Boolean)
    ], ProductCardComponent.prototype, "cartView", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProductCardComponent.prototype, "product", void 0);
    ProductCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'product-card',
            template: __webpack_require__(/*! ./product-card.component.html */ "./src/app/shared/components/product-card/product-card.component.html"),
            styles: [__webpack_require__(/*! ./product-card.component.scss */ "./src/app/shared/components/product-card/product-card.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_cart_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/cart/cart.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/cart/cart.service.ts ***!
  \******************************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartService = /** @class */ (function () {
    function CartService() {
        var _this = this;
        this.cart = [];
        this.count = 0;
        this.getCartCount = rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].create(function (observer) {
            _this.observer = observer;
        });
    }
    CartService.prototype.getCartItems = function () {
        return this.cart;
    };
    CartService.prototype.addToCart = function (product) {
        this.cart.push(product);
        this.count += 1;
        this.observer.next(this.count);
    };
    CartService.prototype.removeFromCart = function (product) {
        this.count -= 1;
        var index = this.cart.findIndex(function (item) {
            return item.id == product.id;
        });
        this.cart.splice(index, 1);
        this.observer.next(this.count);
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/shared/services/product/product.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/services/product/product.service.ts ***!
  \************************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PRODUCTS = [
    {
        id: 0,
        name: 'Remington 90" Sofa',
        price: '$000.00',
        description: "\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos facilis, \n        iusto necessitatibus animi ab nemo natus magni voluptate atque aperiam \n        tempore et cumque at. Deserunt officia velit veniam quidem? Doloremque?\n      ",
        similar: [1, 2, 3],
        details: [
            'Overall Dimensions: 86"w x 36"d x 28"h',
            'Collection: Carnegie',
            'Colors: Rider Black (osb), Weathered Oak',
            'Materials: Top Grain Leather, Solid Ash',
            'Weight: 130 lbs',
        ],
        images: [
            {
                large: 'assets/images/Remington-Black-Sofa-and-Indra-Coffee-Table-with-Willow-Ru.jpg',
                thumb: 'assets/images/Remington-Black-Sofa-and-Indra-Coffee-Table-with-Willow-Ru.jpg',
                alt: '',
            },
            {
                large: 'assets/images/remington-sofa/Remington_Sofa_-_Black_2048x.png',
                thumb: 'assets/images/remington-sofa/Remington_Sofa_-_Black_2048x.png',
            },
            {
                large: '',
                thumb: '',
                alt: '',
            },
            {
                large: '',
                thumb: '',
            },
            {
                large: '',
                thumb: '',
            },
            {
                large: '',
                thumb: '',
            }
        ]
    },
    {
        id: 1,
        name: 'Delwin Square Outdoor Coffee Table',
        price: '$000.00',
        description: "\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. \n        Commodi eum quibusdam ipsam eligendi magnam perferendis \n        excepturi voluptatem nemo at, aliquid aut reiciendis delectus quam. \n        Veritatis quisquam delectus alias odio ex?\n      ",
        similar: [0, 2, 3],
        details: [
            'Dimensions: W: 35.43" D: 35.43" H: 14.76"',
            'Collection: Solano',
            'Category: Living Room',
            'Type: Coffee Tables',
            'Colors: Weathered Grey',
            'Materials: Teak',
            'Weight: 55.12 lb',
            'Volume: 15.89 cu ft',
        ],
        images: [
            {
                large: '/assets/images/delano-ottoman/Sherwood-outdoor-sofa-and-Delwin-square-coffee-table.jpg',
                thumb: '/assets/images/delano-ottoman/Sherwood-outdoor-sofa-and-Delwin-square-coffee-table.jpg',
                alt: '',
            },
        ]
    },
    {
        id: 2,
        name: 'Holton Dining Chair',
        price: '$000.00',
        description: "\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. \n        Molestiae maiores totam enim, recusandae quod explicabo \n        dolorem consequuntur veniam quia odit numquam, \n        at ad excepturi voluptates iusto fugit iure, minima hic.\n      ",
        similar: [0, 1, 3],
        images: [
            {
                large: '/assets/images/holton-chair/theroux138454_1.jpg',
                thumb: '/assets/images/holton-chair/theroux138454_1.jpg',
                alt: '',
            },
        ]
    },
    {
        id: 3,
        name: 'Kelby Sideboard',
        price: '$000.00',
        description: "\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. \n        Eius praesentium nihil magni odit nisi aperiam laudantium \n        esse molestias est doloremque deleniti fuga quod \n        minima unde optio tenetur at, nostrum odio!\n      ",
        similar: [1, 2, 4],
        images: [
            {
                large: '/assets/images/kelby-sideboard/Kelby-mango-sideboard-and-jess-engle-art.jpg',
                thumb: '/assets/images/kelby-sideboard/Kelby-mango-sideboard-and-jess-engle-art.jpg',
                alt: '',
            },
        ]
    },
    {
        id: 4,
        name: 'Olivia Square Coffee Table',
        price: '$000.00',
        description: "\n        Lorem ipsum dolor sit amet consectetur, adipisicing elit. \n        Eveniet eos, similique ea repellendus eaque corporis error \n        placeat debitis ex quidem temporibus obcaecati earum magni \n        vero a dolorum totam possimus deleniti.\n      ",
        similar: [1, 2, 3],
        images: [
            {
                large: '/assets/images/MAXX-SOFA-AND-OLIVIA-SQUARE-COFFEE-TABLE-WITH-JACK-LEATHER-ROCKER-AND-ZADIE-BOOKSHELF.jpg',
                thumb: '/assets/images/MAXX-SOFA-AND-OLIVIA-SQUARE-COFFEE-TABLE-WITH-JACK-LEATHER-ROCKER-AND-ZADIE-BOOKSHELF.jpg',
                alt: '',
            },
        ]
    },
    {
        id: 5,
        name: 'Olive Ace Chair',
        price: '$000.00',
        description: "\n        Lorem, ipsum dolor sit amet consectetur adipisicing elit. \n        Voluptate ea praesentium dolorem adipisci quia, soluta ex \n        maiores reprehenderit omnis quo cum voluptatibus nisi \n        at totam autem ad odio, corrupti odit!\n      ",
        similar: [1, 2, 3],
        images: [
            {
                large: '/assets/images/Langham-channeled-sectional-and-olive-Ace-chair-and-Shannon-oval-coffee-table.jpg',
                thumb: '/assets/images/Langham-channeled-sectional-and-olive-Ace-chair-and-Shannon-oval-coffee-table.jpg',
                alt: '',
            }
        ]
    },
];
var ProductService = /** @class */ (function () {
    function ProductService() {
    }
    Object.defineProperty(ProductService.prototype, "products", {
        get: function () {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(PRODUCTS);
        },
        enumerable: true,
        configurable: true
    });
    ProductService.prototype.getProductById = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(PRODUCTS[id]);
    };
    ProductService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/patrickmoore/Sites/acquire-market/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map