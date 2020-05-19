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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid header-padding test\">\r\n  <app-header></app-header>\r\n  <div *ngIf=\"loading\" class=\"loading-wrapper\">\r\n    <mat-progress-bar mode=\"indeterminate\" color=\"red\"></mat-progress-bar>\r\n  </div>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-padding {\n  padding: 0; }\n\n.container-fluid {\n  padding-right: 0;\n  padding-left: 0;\n  margin-right: auto;\n  margin-left: auto; }\n\n.loading-wrapper {\n  display: block;\n  margin-top: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5hdHN5dHN5bHVpay9EZXNrdG9wL2Zyb250ZW5kL3NyYy9tYWluL3dlYi9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUNGLEVBQUE7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZSxFQUFBIiwiZmlsZSI6ImFwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLXBhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5jb250YWluZXItZmx1aWQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0b1xyXG59XHJcblxyXG4ubG9hZGluZy13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/app/environments/environment.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(titleService) {
        this.titleService = titleService;
        this.setTitle(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["title"]);
    }
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _system_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./system/header/header.component */ "./src/app/system/header/header.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/registration/registration.component */ "./src/app/auth/registration/registration.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _system_index_index_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./system/index/index.component */ "./src/app/system/index/index.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @helpers/jwt.interceptor */ "./src/app/helpers/jwt.interceptor.ts");
/* harmony import */ var _helpers_HttpError_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @helpers/HttpError.interceptor */ "./src/app/helpers/HttpError.interceptor.ts");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm5/angular2-multiselect-dropdown.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _auth_registration_registration_successful_registration_successful_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/registration/registration-successful/registration-successful.component */ "./src/app/auth/registration/registration-successful/registration-successful.component.ts");
/* harmony import */ var _helpers_material_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @helpers/material.module */ "./src/app/helpers/material.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @services/share-data.service */ "./src/app/shared/share-data.service.ts");
/* harmony import */ var _model_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./model/snackbar/snackbar.component */ "./src/app/model/snackbar/snackbar.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _glucose_records_glucose_records_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./glucose-records/glucose-records.component */ "./src/app/glucose-records/glucose-records.component.ts");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! jw-angular-pagination */ "./node_modules/jw-angular-pagination/lib/jw-pagination.component.js");
/* harmony import */ var jw_angular_pagination__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(jw_angular_pagination__WEBPACK_IMPORTED_MODULE_27__);




























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _system_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"],
                _system_index_index_component__WEBPACK_IMPORTED_MODULE_8__["IndexComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_11__["UserComponent"],
                _auth_registration_registration_successful_registration_successful_component__WEBPACK_IMPORTED_MODULE_18__["RegistrationSuccessfulComponent"],
                _model_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_24__["SnackbarComponent"],
                _glucose_records_glucose_records_component__WEBPACK_IMPORTED_MODULE_26__["GlucoseRecordsComponent"],
                jw_angular_pagination__WEBPACK_IMPORTED_MODULE_27__["JwPaginationComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_10__["routing"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__["LayoutModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_17__["MDBBootstrapModule"].forRoot(),
                _helpers_material_module__WEBPACK_IMPORTED_MODULE_19__["MaterialModule"],
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_14__["AngularMultiSelectModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__["NgbModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_21__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAcaaElwdGQIGIRnr2Ay1Hl9BuqEwDpjeY'
                }),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_25__["NgbModule"],
                _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_22__["NgSelectModule"]
            ],
            providers: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
                _angular_common__WEBPACK_IMPORTED_MODULE_20__["CurrencyPipe"],
                _angular_common__WEBPACK_IMPORTED_MODULE_20__["DatePipe"],
                _services_share_data_service__WEBPACK_IMPORTED_MODULE_23__["ShareDataService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _helpers_jwt_interceptor__WEBPACK_IMPORTED_MODULE_12__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _helpers_HttpError_interceptor__WEBPACK_IMPORTED_MODULE_13__["HttpErrorInterceptor"], multi: true },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            entryComponents: [_model_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_24__["SnackbarComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/registration/registration.component */ "./src/app/auth/registration/registration.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _auth_registration_registration_successful_registration_successful_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/registration/registration-successful/registration-successful.component */ "./src/app/auth/registration/registration-successful/registration-successful.component.ts");
/* harmony import */ var _system_index_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./system/index/index.component */ "./src/app/system/index/index.component.ts");







var appRoutes = [
    { path: 'registration', component: _auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_1__["RegistrationComponent"] },
    { path: 'registrationSuccessful', component: _auth_registration_registration_successful_registration_successful_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationSuccessfulComponent"] },
    {
        path: 'account',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_4__["UserComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        runGuardsAndResolvers: 'always'
    },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: '', component: _system_index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"] },
    { path: '**', redirectTo: '' },
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true, onSameUrlNavigation: "reload" });


/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authService.currentUserValue;
        var currentUserRole = this.authService.getDecodedToken().authority;
        if (currentUser) {
            if (route.data.roles && route.data.roles.indexOf(currentUserRole) === -1) {
                // role not authorised so redirect to home page
                this.router.navigate(['/']);
                return false;
            }
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.html":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-layout\">\r\n  <div class=\"row\">\r\n    <div class=\"offset-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card card-layout\">\r\n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"loginForm\" class=\"card-block card-content form-layout\">\r\n          <h2 class=\"card-title\" align=\"center\">Sign in</h2>\r\n          <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n\r\n          <div class=\"form-group\">\r\n            <label>Username</label>\r\n            <input type=\"text\"\r\n                   id=\"username\"\r\n                   name=\"username\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"Enter a username\"\r\n                   formControlName=\"username\"\r\n                   autocomplete=\"name\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\"\r\n            />\r\n            <!--validation of input-->\r\n            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"f.username.errors.required\">Field is empty</div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Password -->\r\n          <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <a class=\"forgot-link\" routerLink=\"/passwordRecovery\">Forgot password?</a>\r\n            <input type=\"password\"\r\n                   id=\"password\"\r\n                   name=\"password\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"Enter your password\"\r\n                   formControlName=\"password\"\r\n                   autocomplete=\"password\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\r\n            />\r\n\r\n            <!--validation of input-->\r\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"f.password.errors.required\">Field is empty</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div>\r\n            <button class=\"btn btn-wide styledButton\" color=\"primary\" mdbBtn mdbWavesEffect>\r\n              Sign in\r\n              <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin\"></i>\r\n            </button>\r\n          </div>\r\n\r\n        </form>\r\n      </div>\r\n    </div>\r\n    <div class=\"offset-3\"></div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/auth/login/login.component.scss":
/*!*************************************************!*\
  !*** ./src/app/auth/login/login.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".forgot-link {\n  float: right;\n  color: gray; }\n\n.forgot-link:hover {\n  float: right;\n  color: blue; }\n\nimg {\n  padding-left: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5hdHN5dHN5bHVpay9EZXNrdG9wL2Zyb250ZW5kL3NyYy9tYWluL3dlYi9zcmMvYXBwL2F1dGgvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVyxFQUFBOztBQUdiO0VBQ0UsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGtCQUFrQixFQUFBIiwiZmlsZSI6ImFwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcmdvdC1saW5rIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgY29sb3I6IGdyYXk7XHJcbn1cclxuXHJcbi5mb3Jnb3QtbGluazpob3ZlciB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGNvbG9yOiBibHVlO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, authService, route, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.submitted = false;
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.authService.currentUserValue) {
            this.router.navigate(['']);
        }
        this.loginForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        var loginPayload = {
            "usernameOrEmail": this.f.username.value,
            "password": this.f.password.value
        };
        this.authService.login(loginPayload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function () {
            _this.router.navigate(['']);
        }, function (err) {
            _this.error = err;
            _this.loading = false;
            window.setTimeout(function () {
                _this.error = '';
            }, 5000);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/auth/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/registration/registration-successful/registration-successful.component.html":
/*!**************************************************************************************************!*\
  !*** ./src/app/auth/registration/registration-successful/registration-successful.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"message-layout\">\r\n    <h1>Registration Successful!</h1>\r\n    <h3>Email with confirmation was sent to your email</h3>\r\n    <p>You will be navigated to login page or you can do it manually</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/registration/registration-successful/registration-successful.component.scss":
/*!**************************************************************************************************!*\
  !*** ./src/app/auth/registration/registration-successful/registration-successful.component.scss ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".message-layout {\n  text-align: center;\n  margin-top: 15%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5hdHN5dHN5bHVpay9EZXNrdG9wL2Zyb250ZW5kL3NyYy9tYWluL3dlYi9zcmMvYXBwL2F1dGgvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi1zdWNjZXNzZnVsL3JlZ2lzdHJhdGlvbi1zdWNjZXNzZnVsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQSIsImZpbGUiOiJhcHAvYXV0aC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLXN1Y2Nlc3NmdWwvcmVnaXN0cmF0aW9uLXN1Y2Nlc3NmdWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVzc2FnZS1sYXlvdXQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxNSU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/auth/registration/registration-successful/registration-successful.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/auth/registration/registration-successful/registration-successful.component.ts ***!
  \************************************************************************************************/
/*! exports provided: RegistrationSuccessfulComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationSuccessfulComponent", function() { return RegistrationSuccessfulComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var RegistrationSuccessfulComponent = /** @class */ (function () {
    function RegistrationSuccessfulComponent(router) {
        this.router = router;
    }
    RegistrationSuccessfulComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.setTimeout(function () {
            _this.router.navigate(['login']);
        }, 10000);
    };
    RegistrationSuccessfulComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration-successful',
            template: __webpack_require__(/*! ./registration-successful.component.html */ "./src/app/auth/registration/registration-successful/registration-successful.component.html"),
            styles: [__webpack_require__(/*! ./registration-successful.component.scss */ "./src/app/auth/registration/registration-successful/registration-successful.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegistrationSuccessfulComponent);
    return RegistrationSuccessfulComponent;
}());



/***/ }),

/***/ "./src/app/auth/registration/registration.component.html":
/*!***************************************************************!*\
  !*** ./src/app/auth/registration/registration.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container container-layout\">\r\n  <div class=\"row\">\r\n    <div class=\"offset-3\"></div>\r\n    <div class=\"col-md-6\">\r\n      <div class=\"card card-layout\">\r\n        <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"registrationForm\" class=\"card-block card-content form-layout\">\r\n          <h2 align=\"center\">Sign up</h2>\r\n          <div *ngIf=\"error\" class=\"alert alert-danger\">{{error}}</div>\r\n\r\n          <!-- Username -->\r\n          <div class=\"form-group\">\r\n            <label>Username</label>\r\n            <input type=\"text\"\r\n                   id=\"username\"\r\n                   class=\"form-control\"\r\n                   name=\"username\"\r\n                   placeholder=\"Pick up a username\"\r\n                   formControlName=\"username\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\"\r\n            />\r\n\r\n            <!-- validation of input -->\r\n            <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"f.username.errors.required\">Field is required</div>\r\n              <div *ngIf=\"f.username.errors.minlength\">Name must be at least 4 characters long</div>\r\n              <div *ngIf=\"f.username.errors.maxlength\">Name must be less than 64 characters long</div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- First name -->\r\n          <div class=\"form-group\">\r\n            <label>First name</label>\r\n            <input type=\"text\"\r\n                   id=\"firstName\"\r\n                   class=\"form-control\"\r\n                   name=\"firstName\"\r\n                   placeholder=\"Enter your first name\"\r\n                   formControlName=\"firstName\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"\r\n            />\r\n\r\n            <!-- validation of input -->\r\n            <div *ngIf=\"submitted && f.firstName.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"f.firstName.errors.required\">Field is required</div>\r\n              <div *ngIf=\"f.firstName.errors.minlength\">First name must be at least 4 characters long</div>\r\n              <div *ngIf=\"f.firstName.errors.maxlength\">First name must be less than 40 characters long</div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Last name -->\r\n          <div class=\"form-group\">\r\n            <label>Last name</label>\r\n            <input type=\"text\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\"\r\n                   class=\"form-control\"\r\n                   formControlName=\"lastName\"\r\n                   id=\"lastName\"\r\n                   name=\"lastName\"\r\n                   placeholder=\"Enter your last name\"\r\n            />\r\n\r\n            <!-- validation of input -->\r\n            <div *ngIf=\"submitted && f.lastName.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"f.lastName.errors.required\">Field is required</div>\r\n              <div *ngIf=\"f.lastName.errors.minlength\">Last name must be at least 4 characters long</div>\r\n              <div *ngIf=\"f.lastName.errors.maxlength\">Last name must be less than 40 characters long</div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Email -->\r\n          <div class=\"form-group\">\r\n            <label>Email</label>\r\n            <input type=\"email\"\r\n                   id=\"email\"\r\n                   name=\"email\"\r\n                   class=\"form-control\"\r\n                   placeholder=\"you@example.com\"\r\n                   formControlName=\"email\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"\r\n            />\r\n\r\n            <!-- validation of input -->\r\n            <div *ngIf=\"submitted && f.email.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"f.email.errors.required\">Field is required</div>\r\n              <div *ngIf=\"f.email.errors.email\">Email is not valid</div>\r\n              <div *ngIf=\"f.email.errors.maxlength\">Email name must be less than 128 characters long</div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <!--<input id=\"dateOfBirth\" class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" ngbDatepicker #dp=\"ngbDatepicker\">-->\r\n\r\n          <!-- Password -->\r\n          <div class=\"form-group\">\r\n            <label>Password</label>\r\n            <input type=\"password\"\r\n                   id=\"password\"\r\n                   class=\"form-control\"\r\n                   name=\"password\"\r\n                   placeholder=\"Create a password\"\r\n                   formControlName=\"password\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\r\n            />\r\n\r\n            <!-- validation of input -->\r\n            <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"f.password.errors.required\">Field is required</div>\r\n              <div *ngIf=\"f.password.errors.minlength\">Password must be at least 6 characters long</div>\r\n              <div *ngIf=\"f.password.errors.maxlength\">Password must be less than 128 characters long</div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- PasswordConfirm -->\r\n          <div class=\"form-group\">\r\n            <label>Password confirmation</label>\r\n            <input type=\"password\"\r\n                   id=\"passwordConfirm\"\r\n                   class=\"form-control\"\r\n                   name=\"passwordConfirm\"\r\n                   formControlName=\"passwordConfirm\"\r\n                   placeholder=\"Repeat password\"\r\n                   [ngClass]=\"{ 'is-invalid': submitted && f.passwordConfirm.errors }\"\r\n            />\r\n\r\n            <!-- validation of input -->\r\n            <div *ngIf=\"submitted && f.passwordConfirm.errors\" class=\"invalid-input\">\r\n              <div *ngIf=\"f.passwordConfirm.errors.required\">Field is required</div>\r\n              <div *ngIf=\"f.passwordConfirm.errors.mustMatch\">Passwords must match</div>\r\n            </div>\r\n          </div>\r\n\r\n          <div>\r\n            <button class=\"btn btn-wide styledButton\" color=\"primary\" mdbBtn mdbWavesEffect>\r\n              Sign up\r\n              <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin\"></i>\r\n            </button>\r\n\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <img alt=\"javaImg\" class=\"img-brand\" src=\"../../../assets/images/java.png\">\r\n    </div>\r\n    <div class=\"offset-3\"></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/auth/registration/registration.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/auth/registration/registration.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  height: 350px;\n  width: 350px;\n  margin-left: 90px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5hdHN5dHN5bHVpay9EZXNrdG9wL2Zyb250ZW5kL3NyYy9tYWluL3dlYi9zcmMvYXBwL2F1dGgvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osaUJBQWlCLEVBQUEiLCJmaWxlIjoiYXBwL2F1dGgvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxuICB3aWR0aDogMzUwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDkwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/auth/registration/registration.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/registration/registration.component.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_must_mutch_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @helpers/must-mutch.validator */ "./src/app/helpers/must-mutch.validator.ts");






var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.submitted = false;
        this.error = '';
        this.loading = false;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        if (this.authService.currentUserValue) {
            this.router.navigate(['']);
        }
        this.registrationForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(64)]],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40)]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(128)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(128)]],
            passwordConfirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        }, {
            validator: Object(_helpers_must_mutch_validator__WEBPACK_IMPORTED_MODULE_5__["MustMatch"])('password', 'passwordConfirm')
        });
    };
    Object.defineProperty(RegistrationComponent.prototype, "f", {
        get: function () {
            return this.registrationForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    RegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registrationForm.invalid) {
            return;
        }
        this.loading = true;
        var registrationPayload = {
            "firstName": this.registrationForm.controls.firstName.value,
            "lastName": this.registrationForm.controls.lastName.value,
            "username": this.registrationForm.controls.username.value,
            "email": this.registrationForm.controls.email.value,
            "password": this.registrationForm.controls.password.value,
            "role": "ROLE_USER"
        };
        console.log(registrationPayload);
        this.authService.registration(registrationPayload).subscribe(function () {
            _this.router.navigate(['registrationSuccessful']);
        }, function (err) {
            _this.error = err;
            _this.loading = false;
            window.setTimeout(function () {
                _this.error = '';
            }, 10000);
        });
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/auth/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.scss */ "./src/app/auth/registration/registration.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/environments/environment.ts":
/*!*********************************************!*\
  !*** ./src/app/environments/environment.ts ***!
  \*********************************************/
/*! exports provided: environment, title, API_URL, LOGIN_URL, REGISTRATION_URL, GLUCOSE_ENDPOINT_URL, GET_GLUCOSE_RECORDS_FOR_CURR_USER_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_URL", function() { return LOGIN_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTRATION_URL", function() { return REGISTRATION_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLUCOSE_ENDPOINT_URL", function() { return GLUCOSE_ENDPOINT_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_GLUCOSE_RECORDS_FOR_CURR_USER_URL", function() { return GET_GLUCOSE_RECORDS_FOR_CURR_USER_URL; });
var environment = {
    production: false,
    ws: 'http://localhost:8080/socket'
};
var title = 'D-Health';
// export const API_URL = "http://localhost:51862/";
var API_URL = "http://localhost:8080/api/";
var LOGIN_URL = API_URL + "auth/signin";
var REGISTRATION_URL = API_URL + "auth/signup";
var GLUCOSE_ENDPOINT_URL = API_URL + "glucose/";
var GET_GLUCOSE_RECORDS_FOR_CURR_USER_URL = GLUCOSE_ENDPOINT_URL + "user/";
//
// export const TEST_CONTROLLER = API_URL + "api/test/";
// export const USER_TESTS_URL = TEST_CONTROLLER + "user/";
// export const SEARCH_TESTS_CONTAINING_NAME_URL = TEST_CONTROLLER + "search/";
// export const SEARCH_TESTS_BY_GROUP_NAME_URL = TEST_CONTROLLER + "group/";
//
// export const QUESTION_CONTROLLER = API_URL + "api/question/";
//
// export const ANSWER_CONTROLLER = API_URL + "api/answer/";
//
// export const TEST_HISTORY_CONTROLLER = API_URL + "api/history/test/";
// export const TEST_STATISTICS_URL = TEST_HISTORY_CONTROLLER + "statistic/";
// export const TEST_STATISTICS_COMPLETION_URL = TEST_STATISTICS_URL + "completion/";
// export const USER_TEST_HISTORY_URL = TEST_HISTORY_CONTROLLER + "user/";
//
// export const ANSWER_HISTORY_CONTROLLER = API_URL + "api/history/test/";


/***/ }),

/***/ "./src/app/glucose-records/glucose-records.component.html":
/*!****************************************************************!*\
  !*** ./src/app/glucose-records/glucose-records.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--<div class=\"row mt-3\">-->\n<!--  <div class=\"container\">-->\n    <div class=\"row descriptionText\">\n\n      <div class=\"col-md-12 py-3 card roundedCard\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"row px-5\">\n              <b>Description:</b>\n            </div>\n\n            <div class=\"row px-4\">\n              HERERE\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row mt-3\">\n      <div class=\"col-md-12 pt-3 pb-0 card roundedCard pagDiv\">\n        <jw-pagination [items]=\"glucoseRecords\" (changePage)=\"onChangePage($event)\" [pageSize]=\"20\"></jw-pagination>\n      </div>\n    </div>\n\n    <div class=\"row mt-3\">\n      <div class=\"col-md-12 pt-2 card roundedCard\">\n        <div class=\"row\">\n          <!--<b>&#45;&#45;Feedback placeholder&#45;&#45;</b>-->\n          <div class=\"col-md-12\" *ngFor=\"let record of onPageRecords; let i=index\">\n\n            <div class=\"row py-1\" *ngIf=\"!(i % 2)\">\n              <div class=\"col-md-12\">\n\n<!--                <div class=\"row\">-->\n<!--                  <div class=\"col-md-12 pl-5\">-->\n<!--                    <b class=\"mr-1\" *ngIf=\"message.user != null\">{{message.user.details.firstName}}-->\n<!--                      {{message.user.details.lastName}}</b>-->\n<!--                    <b class=\"mr-1\" *ngIf=\"message.user == null\">You </b>-->\n<!--                    <ngb-rating class=\"pl-2\" [(rate)]=\"message.rating\" [max]=\"5\" [readonly]=\"true\"></ngb-rating>-->\n<!--                  </div>-->\n<!--                </div>-->\n\n                <div class=\"row\">\n                  <div class=\"col-md-4 pl-3\">\n                    {{record.id}}\n                  </div>\n                  <div class=\"col-md-4 pl-3\">\n                    {{record.eventTime}}\n                  </div>\n                  <div class=\"col-md-4 pl-3\">\n                    {{record.value}}\n                  </div>\n                </div>\n\n              </div>\n            </div>\n\n            <div class=\"row py-1 greyComment\" *ngIf=\"(i % 2)\">\n              <div class=\"col-md-12\">\n\n<!--                <div class=\"row\">-->\n<!--                  <div class=\"col-md-12 pl-5\">-->\n<!--                    <b class=\"mr-1\" *ngIf=\"message.user != null\">{{message.user.details.firstName}}-->\n<!--                      {{message.user.details.lastName}}</b>-->\n<!--                    <b class=\"mr-1\" *ngIf=\"message.user == null\">You </b>-->\n<!--                    <ngb-rating class=\"pl-2\" [(rate)]=\"message.rating\" [max]=\"5\" [readonly]=\"true\"></ngb-rating>-->\n<!--                  </div>-->\n<!--                </div>-->\n\n                <div class=\"row\">\n                  <div class=\"col-md-4 pl-3\">\n                    {{record.id}}\n                  </div>\n                  <div class=\"col-md-4 pl-3\">\n                    {{record.eventTime}}\n                  </div>\n                  <div class=\"col-md-4 pl-3\">\n                    {{record.value}}\n                  </div>\n                </div>\n\n              </div>\n            </div>\n\n          </div>\n\n        </div>\n        <div class=\"row greyComment commentFooter pb-2\" *ngIf=\"!(glucoseRecords.length % 2)\"></div>\n        <div class=\"row commentFooter pb-2\" *ngIf=\"glucoseRecords.length % 2\"></div>\n      </div>\n    </div>\n\n<!--    <div class=\"row mt-3\" *ngIf=\"isFeedbackAllowed\">-->\n<!--      <div class=\"col-md-12 pt-3 pb-2 card roundedCard\">-->\n\n<!--        <form [formGroup]=\"feedbackForm\" (ngSubmit)=\"addFeedback(feedbackForm.value)\">-->\n<!--          <div class=\"row px-3\">-->\n<!--            <div class=\"col-md-12\">-->\n\n<!--              <ng-template #st let-fill=\"fill\">-->\n<!--              <span class=\"smallerStar\" [class.full]=\"fill === 100\">-->\n<!--                &#9733;-->\n<!--              </span>-->\n<!--              </ng-template>-->\n\n<!--              <label for=\"rating\">Your score: </label>-->\n<!--              <ngb-rating class=\"pl-2\" id=\"rating\" [formControl]=\"feedbackForm.controls.rating\" [starTemplate]=\"st\"-->\n<!--                          max=\"5\"></ngb-rating>-->\n<!--            </div>-->\n<!--          </div>-->\n\n<!--          <div class=\"row px-3\">-->\n<!--            <div class=\"col-md-12\">-->\n\n<!--              <label for=\"message\">Your message: </label>-->\n<!--              <textarea-->\n<!--                class=\"form-control\"-->\n<!--                formControlName=\"feedbackMessage\"-->\n<!--                id=\"message\"-->\n<!--                placeholder=\"Type your feedback here\"-->\n<!--                rows=\"5\"-->\n<!--                [ngClass]=\"{ 'is-invalid': feedbackForm.controls.feedbackMessage.errors }\"></textarea>-->\n\n<!--              <div *ngIf=\"feedbackForm.controls.feedbackMessage.errors\" class=\"invalid-input\">-->\n<!--                <div *ngIf=\"feedbackForm.controls.feedbackMessage.errors.minlength\">Feedback must be at least 3-->\n<!--                  characters long-->\n<!--                </div>-->\n<!--                <div *ngIf=\"feedbackForm.controls.feedbackMessage.errors.maxlength\">Feedback must be less than 2048-->\n<!--                  characters long-->\n<!--                </div>-->\n<!--              </div>-->\n\n<!--            </div>-->\n<!--          </div>-->\n\n<!--          <div class=\"row px-3 pt-3\" *ngIf=\"!isFeedbackGiven\">-->\n<!--            <div class=\"offset-md-10\"></div>-->\n<!--            <div class=\"col-md-2 my-auto px-auto\">-->\n<!--              <button type=\"submit\" class=\"btn btn-sm btn-block float-right styledButton\" mdbBtn color=\"indigo\"-->\n<!--                      mdbWavesEffect>-->\n<!--                Submit-->\n<!--                <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin\"></i>-->\n<!--              </button>-->\n<!--            </div>-->\n<!--          </div>-->\n\n<!--          <div class=\"row px-3 pt-3\" *ngIf=\"isFeedbackGiven\">-->\n<!--            <div class=\"offset-md-8\"></div>-->\n<!--            <div class=\"col-md-2 my-auto px-2\">-->\n<!--              <button type=\"button\" class=\"btn btn-sm btn-block float-right styledButton\" mdbBtn color=\"indigo\"-->\n<!--                      mdbWavesEffect (click)=\"removeFeedback(feedbackForm.value)\">-->\n<!--                Remove-->\n<!--                <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin\"></i>-->\n<!--              </button>-->\n<!--            </div>-->\n\n<!--            <div class=\"col-md-2 my-auto px-2\">-->\n<!--              <button type=\"button\" class=\"btn btn-sm btn-block float-right styledButton\" mdbBtn color=\"indigo\"-->\n<!--                      mdbWavesEffect (click)=\"updateFeedback(feedbackForm.value)\">-->\n<!--                Update-->\n<!--                <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin\"></i>-->\n<!--              </button>-->\n<!--            </div>-->\n<!--          </div>-->\n<!--        </form>-->\n\n<!--      </div>-->\n<!--    </div>-->\n\n<!--  </div>-->\n<!--</div>-->\n"

/***/ }),

/***/ "./src/app/glucose-records/glucose-records.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/glucose-records/glucose-records.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container, .grid-container {\n  padding: 0;\n  border-radius: 15px;\n  margin-top: 20px;\n  border: 30px solid #ffdfdf;\n  background-color: #ffdfdf;\n  height: auto; }\n\n.card-content {\n  margin-top: 10px;\n  margin-left: 50px;\n  padding: 5px; }\n\n.content-width {\n  width: 100%; }\n\n.headerCard {\n  border-bottom-right-radius: 5px !important;\n  border-top-right-radius: 5px !important;\n  border-bottom-left-radius: 0px !important;\n  border-top-left-radius: 0px !important; }\n\n.roundedCard {\n  border-radius: 5px !important; }\n\n.buyButton {\n  bottom: 0; }\n\n.row {\n  margin: 0; }\n\n.myHeaderText {\n  font-size: 30px; }\n\n.myText {\n  font-size: 25px; }\n\n.descriptionText {\n  font-size: 20px; }\n\n.right {\n  float: right;\n  background-color: #2E294E !important; }\n\ndiv {\n  padding: 0; }\n\n.mainImage {\n  border-bottom-left-radius: 5px !important;\n  border-top-left-radius: 5px !important;\n  min-height: 27em;\n  width: 100%; }\n\n.star {\n  position: relative;\n  display: inline-block;\n  font-size: 3rem;\n  color: #d3d3d3; }\n\n.full {\n  color: yellow; }\n\n.half {\n  position: absolute;\n  display: inline-block;\n  overflow: hidden;\n  color: yellow; }\n\n.greyComment {\n  background-color: #F7F7F7; }\n\n.commentSection {\n  padding-bottom: 0; }\n\n.commentFooter {\n  border-bottom-right-radius: 5px !important;\n  border-bottom-left-radius: 5px !important; }\n\n.star {\n  position: relative;\n  display: inline-block;\n  font-size: 3rem;\n  color: #d3d3d3; }\n\n.smallerStar {\n  position: relative;\n  display: inline-block;\n  font-size: 2rem;\n  color: #d3d3d3; }\n\n.full {\n  color: #2E294E; }\n\n.half {\n  position: absolute;\n  display: inline-block;\n  overflow: hidden;\n  color: #2E294E; }\n\n.pagination .page-item.active .page-link {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  transition: all 0.2s linear;\n  border-radius: 0.125rem;\n  background-color: #fd9899 !important;\n  color: #fff; }\n\n.pagination .page-item .page-link {\n  border: 1px solid #dee2e6 !important; }\n\n.pagination {\n  justify-content: center;\n  flex-wrap: wrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5hdHN5dHN5bHVpay9EZXNrdG9wL2Zyb250ZW5kL3NyYy9tYWluL3dlYi9zcmMvYXBwL2dsdWNvc2UtcmVjb3Jkcy9nbHVjb3NlLXJlY29yZHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUVoQiwwQkFBMEI7RUFFMUIseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTs7QUFHZDtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWSxFQUFBOztBQUdkO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsMENBQTBDO0VBQzFDLHVDQUF1QztFQUN2Qyx5Q0FBeUM7RUFDekMsc0NBQXNDLEVBQUE7O0FBSXhDO0VBQ0UsNkJBQTZCLEVBQUE7O0FBRy9CO0VBQ0UsU0FBUyxFQUFBOztBQUdYO0VBQ0UsU0FBUyxFQUFBOztBQUdYO0VBRUUsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsWUFBWTtFQUNaLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLFVBQVUsRUFBQTs7QUFHWjtFQUNFLHlDQUF5QztFQUN6QyxzQ0FBc0M7RUFDdEMsZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTs7QUFLYjtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7O0FBR2Y7RUFFRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSwwQ0FBMEM7RUFDMUMseUNBQXlDLEVBQUE7O0FBRzNDO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQVFoQjtFQUNFLDZFQUE2RTtFQUM3RSwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLG9DQUFvQztFQUNwQyxXQUFXLEVBQUE7O0FBR2I7RUFDRSxvQ0FBb0MsRUFBQTs7QUFHdEM7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZSxFQUFBIiwiZmlsZSI6ImFwcC9nbHVjb3NlLXJlY29yZHMvZ2x1Y29zZS1yZWNvcmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciwgLmdyaWQtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICAvL2JvcmRlcjogMzBweCBzb2xpZCAjZTdlNmY3O1xyXG4gIGJvcmRlcjogMzBweCBzb2xpZCAjZmZkZmRmO1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogI0U3RTZGNztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZmRmO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmNhcmQtY29udGVudCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5jb250ZW50LXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhlYWRlckNhcmQge1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHggIWltcG9ydGFudDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgLy9ib3JkZXItcmFkaXVzOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb3VuZGVkQ2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idXlCdXR0b24ge1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubXlIZWFkZXJUZXh0IHtcclxuICAvL2ZvbnQtc2l6ZTogMi41dnc7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4ubXlUZXh0IHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvblRleHQge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJFMjk0RSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5kaXYge1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5tYWluSW1hZ2Uge1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gIG1pbi1oZWlnaHQ6IDI3ZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy9ib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG5cclxuLnN0YXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAzcmVtO1xyXG4gIGNvbG9yOiAjZDNkM2QzO1xyXG59XHJcblxyXG4uZnVsbCB7XHJcbiAgY29sb3I6IHllbGxvdztcclxufVxyXG5cclxuLmhhbGYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjb2xvcjogeWVsbG93O1xyXG59XHJcblxyXG4uZ3JleUNvbW1lbnQge1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogI0U5RERFRDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjdGN0Y3O1xyXG59XHJcblxyXG4uY29tbWVudFNlY3Rpb24ge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG4uY29tbWVudEZvb3RlciB7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3RhciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDNyZW07XHJcbiAgY29sb3I6ICNkM2QzZDM7XHJcbn1cclxuXHJcbi5zbWFsbGVyU3RhciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgY29sb3I6ICNkM2QzZDM7XHJcbn1cclxuXHJcbi5mdWxsIHtcclxuICBjb2xvcjogIzJFMjk0RTtcclxufVxyXG5cclxuLmhhbGYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBjb2xvcjogIzJFMjk0RTtcclxufVxyXG5cclxuXHJcbi8vLnBhZ2luYXRpb24gLnBhZ2UtaXRlbSAucGFnZS1saW5rIHtcclxuLy8gIGJhY2tncm91bmQtY29sb3I6ICNmZDk4OTkgIWltcG9ydGFudDtcclxuLy99XHJcblxyXG4ucGFnaW5hdGlvbiAucGFnZS1pdGVtLmFjdGl2ZSAucGFnZS1saW5rIHtcclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkOTg5OSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ucGFnaW5hdGlvbiAucGFnZS1pdGVtIC5wYWdlLWxpbmsge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24ge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/glucose-records/glucose-records.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/glucose-records/glucose-records.component.ts ***!
  \**************************************************************/
/*! exports provided: GlucoseRecordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlucoseRecordsComponent", function() { return GlucoseRecordsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_glucose_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/glucose-service */ "./src/app/service/glucose-service.ts");



var GlucoseRecordsComponent = /** @class */ (function () {
    function GlucoseRecordsComponent(glucoseService) {
        this.glucoseService = glucoseService;
        this.glucoseRecords = [];
        this.onPageRecords = [];
        this.isLoading = true;
    }
    GlucoseRecordsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.glucoseService.getGlucoseRecordsForCurrentUser().subscribe(function (data) {
            console.log(data);
            console.log("^Records");
            data.forEach(function (d) {
                d.eventTime = new Date(d.eventTime);
            });
            data.sort(function (a, b) { return b.eventTime.getTime() - a.eventTime.getTime(); });
            _this.glucoseRecords = data;
            _this.isLoading = false;
        });
    };
    GlucoseRecordsComponent.prototype.onChangePage = function (onPageRecords) {
        this.onPageRecords = onPageRecords;
    };
    GlucoseRecordsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-glucose-records',
            template: __webpack_require__(/*! ./glucose-records.component.html */ "./src/app/glucose-records/glucose-records.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./glucose-records.component.scss */ "./src/app/glucose-records/glucose-records.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_glucose_service__WEBPACK_IMPORTED_MODULE_2__["GlucoseService"]])
    ], GlucoseRecordsComponent);
    return GlucoseRecordsComponent;
}());



/***/ }),

/***/ "./src/app/helpers/HttpError.interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/helpers/HttpError.interceptor.ts ***!
  \**************************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");





var HttpErrorInterceptor = /** @class */ (function () {
    function HttpErrorInterceptor(authService) {
        this.authService = authService;
    }
    HttpErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if ([401, 403].indexOf(err.status) !== -1) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                _this.authService.logout();
            } //TODO ACTIVATEEEEE
            console.log("DEFENCE IN HTTPERROR.INTERCEPTOR DEACTIVATED");
            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    };
    HttpErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], HttpErrorInterceptor);
    return HttpErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/helpers/jwt.interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/helpers/jwt.interceptor.ts ***!
  \********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");



var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authService) {
        this.authService = authService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = this.authService.currentUserValue;
        if (currentUser) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/helpers/material.module.ts":
/*!********************************************!*\
  !*** ./src/app/helpers/material.module.ts ***!
  \********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/helpers/must-mutch.validator.ts":
/*!*************************************************!*\
  !*** ./src/app/helpers/must-mutch.validator.ts ***!
  \*************************************************/
/*! exports provided: MustMatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MustMatch", function() { return MustMatch; });
// custom validator to check that two fields match
function MustMatch(controlName, matchingControlName) {
    return function (formGroup) {
        var control = formGroup.controls[controlName];
        var matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }
        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "./src/app/model/snackbar/snackbar.component.html":
/*!********************************************************!*\
  !*** ./src/app/model/snackbar/snackbar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"snackbar\">\r\n  {{shareService.snackBarMessage}}\r\n</span>\r\n"

/***/ }),

/***/ "./src/app/model/snackbar/snackbar.component.scss":
/*!********************************************************!*\
  !*** ./src/app/model/snackbar/snackbar.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".snackbar {\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5hdHN5dHN5bHVpay9EZXNrdG9wL2Zyb250ZW5kL3NyYy9tYWluL3dlYi9zcmMvYXBwL21vZGVsL3NuYWNrYmFyL3NuYWNrYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBIiwiZmlsZSI6ImFwcC9tb2RlbC9zbmFja2Jhci9zbmFja2Jhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zbmFja2JhciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/model/snackbar/snackbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/model/snackbar/snackbar.component.ts ***!
  \******************************************************/
/*! exports provided: SnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function() { return SnackbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/share-data.service */ "./src/app/shared/share-data.service.ts");



var SnackbarComponent = /** @class */ (function () {
    function SnackbarComponent(shareService) {
        this.shareService = shareService;
    }
    SnackbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-snackbar',
            template: __webpack_require__(/*! ./snackbar.component.html */ "./src/app/model/snackbar/snackbar.component.html"),
            styles: [__webpack_require__(/*! ./snackbar.component.scss */ "./src/app/model/snackbar/snackbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_share_data_service__WEBPACK_IMPORTED_MODULE_2__["ShareDataService"]])
    ], SnackbarComponent);
    return SnackbarComponent;
}());



/***/ }),

/***/ "./src/app/service/glucose-service.ts":
/*!********************************************!*\
  !*** ./src/app/service/glucose-service.ts ***!
  \********************************************/
/*! exports provided: GlucoseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlucoseService", function() { return GlucoseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/app/environments/environment.ts");




var GlucoseService = /** @class */ (function () {
    function GlucoseService(http) {
        this.http = http;
    }
    GlucoseService.prototype.getGlucoseRecordsForCurrentUser = function () {
        return this.http.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GET_GLUCOSE_RECORDS_FOR_CURR_USER_URL"]);
    };
    GlucoseService.prototype.saveGlucoseRecord = function (recordPayload) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GLUCOSE_ENDPOINT_URL"], recordPayload);
    };
    GlucoseService.prototype.updateGlucoseRecord = function (recordPayload) {
        return this.http.put("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GLUCOSE_ENDPOINT_URL"], recordPayload);
    };
    GlucoseService.prototype.deleteGlucoseRecord = function (recordId) {
        return this.http.delete("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["GLUCOSE_ENDPOINT_URL"] + recordId);
    };
    GlucoseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GlucoseService);
    return GlucoseService;
}());



/***/ }),

/***/ "./src/app/shared/auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/app/environments/environment.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.username = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.currentUsername);
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(this.token));
        this.username.next(this.currentUsername);
    }
    Object.defineProperty(AuthService.prototype, "token", {
        get: function () {
            return localStorage.getItem('currentUser');
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthService.prototype.registration = function (registrationPayload) {
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["REGISTRATION_URL"], registrationPayload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
        }));
    };
    Object.defineProperty(AuthService.prototype, "currentUsername", {
        //
        // recoveryPassword(recoveryPasswordPayload) {
        //   return this.http.get<any>(`${PASSWORD_RECOVERY_URL}?email=` + recoveryPasswordPayload).pipe(
        //     map(data => {
        //         return data;
        //       }
        //     ));
        // }
        get: function () {
            if (this.token) {
                return this.getDecodedToken().username;
            }
            else {
                this.router.navigate(['login']);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (loginPayload) {
        var _this = this;
        return this.http.post("" + _environments_environment__WEBPACK_IMPORTED_MODULE_5__["LOGIN_URL"], loginPayload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            if (data) {
                localStorage.setItem('currentUser', JSON.stringify(data.accessToken));
                _this.currentUserSubject.next(data.accessToken);
                _this.username.next(_this.currentUsername);
            }
            return data;
        }));
    };
    ;
    AuthService.prototype.getUsername = function () {
        return this.username.asObservable();
    };
    AuthService.prototype.getDecodedToken = function () {
        try {
            return jwt_decode__WEBPACK_IMPORTED_MODULE_6__(this.token);
        }
        catch (Error) {
            return null;
        }
    };
    AuthService.prototype.getTokenExpirationDate = function (token) {
        var decoded = jwt_decode__WEBPACK_IMPORTED_MODULE_6__(token);
        if (decoded.exp === undefined)
            return null;
        var date = new Date(0);
        date.setUTCSeconds(decoded.exp);
        return date;
    };
    AuthService.prototype.isTokenExpired = function () {
        var date = this.getTokenExpirationDate(this.token);
        if (date === undefined)
            return true;
        return !(date.valueOf() > new Date().valueOf());
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/share-data.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/share-data.service.ts ***!
  \**********************************************/
/*! exports provided: ShareDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareDataService", function() { return ShareDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShareDataService = /** @class */ (function () {
    function ShareDataService() {
    }
    ShareDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], ShareDataService);
    return ShareDataService;
}());



/***/ }),

/***/ "./src/app/system/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/system/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark fixed-top\">-->\r\n<!--  <a class=\"navbar-brand\" routerLink=\"/\">-->\r\n<!--    <img alt=\"brandImg\" class=\"img-brand\" src=\"../../../assets/images/heart.png\">-->\r\n<!--    <span class=\"text-coloured\"> D-Health</span>-->\r\n<!--    &lt;!&ndash; <span style=\"color: #E7E6F7;\"> StudTest</span> &ndash;&gt;-->\r\n<!--  </a>-->\r\n<!--  <button class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\"-->\r\n<!--          aria-controls=\"navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">-->\r\n<!--    <span class=\"navbar-toggler-icon\"></span>-->\r\n<!--  </button>-->\r\n\r\n<!--  <div class=\"navbar-collapse collapse flex-row-reverse\" id=\"navbar\">-->\r\n\r\n<!--    <div *ngIf=\"isLoggedIn()\">-->\r\n<!--      <ul class=\"navbar-nav mr-1\">-->\r\n<!--        <li class=\"nav-item\">-->\r\n<!--          &lt;!&ndash;<a class=\"nav-link\" routerLink=\"/account\">Welcome, {{username}}</a>&ndash;&gt;-->\r\n<!--          &lt;!&ndash; test variant &ndash;&gt;-->\r\n<!--          <a class=\"nav-link text-coloured\" routerLink=\"/account\">-->\r\n<!--            &lt;!&ndash;{{username}}&ndash;&gt;-->\r\n<!--            Profile-->\r\n<!--          </a>-->\r\n\r\n<!--        </li>-->\r\n<!--        <li class=\"nav-item\">-->\r\n<!--          <a class=\"nav-link text-coloured\" (click)=\"logout()\" routerLink=\"/login\">Logout</a>-->\r\n<!--        </li>-->\r\n<!--      </ul>-->\r\n<!--    </div>-->\r\n\r\n<!--    <div *ngIf=\"!isLoggedIn()\">-->\r\n<!--      <ul class=\"navbar-nav\">-->\r\n<!--        <li class=\"nav-item\">-->\r\n<!--          <a class=\"nav-link text-coloured\" routerLink=\"/login\">Sign in</a>-->\r\n<!--        </li>-->\r\n<!--        <li class=\"nav-item\">-->\r\n<!--          <a class=\"nav-link text-coloured\" routerLink=\"/registration\">Sign up</a>-->\r\n<!--        </li>-->\r\n<!--      </ul>-->\r\n<!--    </div>-->\r\n<!--  </div>-->\r\n<!--</nav>-->\r\n<!--<br><br>-->\r\n\r\n<nav class=\"navbar navbar-expand-sm navbar-dark bg-dark fixed-top\">\r\n  <a class=\"navbar-brand\" routerLink=\"/\">\r\n    <img alt=\"brandImg\" class=\"img-brand\" src=\"../../../assets/images/heart.png\">\r\n    <span style=\"color: #E7E6F7;\"> D-Health</span>\r\n  </a>\r\n  <button class=\"navbar-toggler collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\"\r\n          aria-controls=\"navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"navbar-collapse collapse flex-row-reverse\" id=\"navbar\">\r\n\r\n    <div *ngIf=\"isLoggedIn()\">\r\n      <ul class=\"navbar-nav mr-1\">\r\n        <li class=\"nav-item\">\r\n          <div *ngIf=\"username ? {} : logout()\">\r\n            <a class=\"nav-link\" routerLink=\"/account\">Welcome, {{username}}</a>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" (click)=\"logout()\" routerLink=\"/login\">Logout</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div *ngIf=\"!isLoggedIn()\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/login\">Sign in</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/registration\">Sign up</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<br><br>\r\n\r\n"

/***/ }),

/***/ "./src/app/system/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/system/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-brand {\n  width: 25px;\n  height: 25px;\n  margin-bottom: 2px; }\n\n.navbar {\n  margin-bottom: 30px; }\n\n.bg-dark {\n  /*background-color: #100123 !important;*/\n  background-color: #fd9899 !important; }\n\nspan {\n  color: #C8E0F4;\n  font-weight: bolder; }\n\n.dropdown {\n  position: relative;\n  display: inline-block; }\n\n.dropdown-content {\n  border-radius: 5px;\n  font-size: 20px;\n  display: none;\n  position: absolute;\n  background-color: #f9f9f9;\n  min-width: 160px;\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n  padding: 12px 16px;\n  border-spacing: 5px;\n  z-index: 1; }\n\n.dropdown-content:hover {\n  background-color: #aaaaaa; }\n\n.message-btn {\n  background-color: Transparent;\n  outline: none;\n  margin-right: 5px; }\n\n.white-icon {\n  color: white;\n  cursor: pointer; }\n\n.notify-btn {\n  background-color: Transparent; }\n\n.modal-notification {\n  margin-top: 50px; }\n\n.userPicHeader {\n  width: 37px;\n  height: 37px;\n  border-radius: 50%;\n  margin-left: 2px;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5hdHN5dHN5bHVpay9EZXNrdG9wL2Zyb250ZW5kL3NyYy9tYWluL3dlYi9zcmMvYXBwL3N5c3RlbS9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSx3Q0FBQTtFQUNBLG9DQUFvQyxFQUFBOztBQUt0QztFQUNFLGNBQWM7RUFDZCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsMkNBQTJDO0VBQzNDLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsVUFBVSxFQUFBOztBQUdaO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsNkJBQTZCO0VBQzdCLGFBQWE7RUFDYixpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUdqQjtFQUNFLDZCQUNGLEVBQUE7O0FBRUE7RUFDRSxnQkFDRixFQUFBOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQSIsImZpbGUiOiJhcHAvc3lzdGVtL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLWJyYW5kIHtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4uYmctZGFyayB7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwMTIzICFpbXBvcnRhbnQ7Ki9cclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmQ5ODk5ICFpbXBvcnRhbnQ7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzlDRkZGQSAhaW1wb3J0YW50O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICMyRTI5NEUgIWltcG9ydGFudDtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgY29sb3I6ICNDOEUwRjQ7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuLmRyb3Bkb3duIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBwYWRkaW5nOiAxMnB4IDE2cHg7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDVweDtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYWFhYTtcclxufVxyXG5cclxuLm1lc3NhZ2UtYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBUcmFuc3BhcmVudDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4ud2hpdGUtaWNvbiB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm5vdGlmeS1idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IFRyYW5zcGFyZW50XHJcbn1cclxuXHJcbi5tb2RhbC1ub3RpZmljYXRpb24ge1xyXG4gIG1hcmdpbi10b3A6IDUwcHhcclxufVxyXG5cclxuLnVzZXJQaWNIZWFkZXIge1xyXG4gIHdpZHRoOiAzN3B4O1xyXG4gIGhlaWdodDogMzdweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/system/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/system/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/auth.service */ "./src/app/shared/auth.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        var _this = this;
        this.authService = authService;
        authService.getUsername().subscribe(function (data) { return _this.username = data; });
    }
    HeaderComponent.prototype.isLoggedIn = function () {
        return this.authService.currentUserValue !== null;
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.logout();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/system/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/system/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/system/index/index.component.html":
/*!***************************************************!*\
  !*** ./src/app/system/index/index.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container mt-3\">\r\n\r\n  <!-- <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <b >Search for tests</b>\r\n    </div>\r\n  </div> -->\r\n\r\n  <div class=\"row mt-3\">\r\n    <div class=\"col-md-12\">\r\n      <app-glucose-records></app-glucose-records>\r\n<!--      <form [formGroup]=\"filterForm\" (ngSubmit)=\"save()\" *ngIf=\"authorized\">-->\r\n<!--        <div class=\"row\" style=\"margin: 0\">-->\r\n\r\n<!--          <div class=\"col-md-12\">-->\r\n\r\n<!--            <mat-card class=\"filter\">-->\r\n<!--              <mat-card-header>-->\r\n<!--                <mat-card-title>Find best tests</mat-card-title>-->\r\n\r\n\r\n<!--              </mat-card-header>-->\r\n\r\n<!--              <div class=\"row\">-->\r\n\r\n<!--                <div class=\"form-group col-md-10 px-2\">-->\r\n<!--                  &lt;!&ndash; <label for=\"maxPrice\">Maximum price</label> &ndash;&gt;-->\r\n<!--                  <input type=\"text\"-->\r\n<!--                         class=\"form-control form-control-lg\"-->\r\n<!--                         formControlName=\"name\"-->\r\n<!--                         id=\"name\"-->\r\n<!--                         placeholder=\"Search for best online tests...\"-->\r\n<!--                         [ngClass]=\"{ 'is-invalid': submitted && filterForm.controls.name.errors}\"/>-->\r\n\r\n<!--                  <div *ngIf=\"submitted && filterForm.controls.name.errors\" class=\"invalid-input\">-->\r\n<!--                    <div *ngIf=\"filterForm.controls.name.errors.minlength\">Must be at least 1</div>-->\r\n<!--                    <div *ngIf=\"filterForm.controls.name.errors.maxlength\">Must be not more then 100 symbols</div>-->\r\n<!--                  </div>-->\r\n\r\n<!--                </div>-->\r\n\r\n<!--                &lt;!&ndash; Find button&ndash;&gt;-->\r\n<!--                <div class=\"col-md-2\">-->\r\n<!--                  <button type=\"submit\" mdbBtn class=\"my-auto styledButton FindTour text-coloured\"-->\r\n<!--                          color=\"indigo\" mdbWavesEffect>SEARCH-->\r\n<!--                    <i *ngIf=\"loading\" class=\"fa fa-spinner fa-spin\"></i>-->\r\n<!--                  </button>-->\r\n<!--                </div>-->\r\n\r\n<!--              </div>-->\r\n<!--            </mat-card>-->\r\n\r\n<!--          </div>-->\r\n\r\n<!--        </div>-->\r\n<!--      </form>-->\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<!--<div class=\"container\">-->\r\n\r\n<!--  <div class=\"row mb-3\" *ngIf=\"!nothingFound\">-->\r\n\r\n<!--    <div class=\"col-md-6 mt-3\" *ngFor=\"let test of tests; index as i\">-->\r\n<!--      <mat-card class=\"testCard\">-->\r\n<!--        <mat-card-header>-->\r\n<!--          <mat-card-title>{{test.title}}</mat-card-title>-->\r\n<!--          <mat-card-subtitle>{{test.group.name}}</mat-card-subtitle>-->\r\n<!--        </mat-card-header>-->\r\n\r\n<!--        <mat-card-content class=\"mb-0\">-->\r\n\r\n<!--          &lt;!&ndash;<div class=\"row\">&ndash;&gt;-->\r\n<!--          &lt;!&ndash;<p style=\"margin-bottom: 0\"><b>Topic:</b> {{test.group.name}}</p>&ndash;&gt;-->\r\n<!--          &lt;!&ndash;</div>&ndash;&gt;-->\r\n\r\n<!--          &lt;!&ndash;<div class=\"row\">&ndash;&gt;-->\r\n<!--          &lt;!&ndash;<p style=\"margin-bottom: 0\"><b>  Description: </b> {{test.text}}</p>&ndash;&gt;-->\r\n<!--          &lt;!&ndash;</div>&ndash;&gt;-->\r\n\r\n<!--          {{test.text}}-->\r\n\r\n<!--        </mat-card-content>-->\r\n<!--        <mat-card-actions class=\"mt-0\" align=\"end\">-->\r\n\r\n<!--          &lt;!&ndash;<i class=\"fas fa-check-circle\">{{testStatistics[i].numberOfCompletions}}</i>&ndash;&gt;-->\r\n<!--          &lt;!&ndash;<a routerLink=\"/test/{{test.id}}\">&ndash;&gt;-->\r\n<!--          &lt;!&ndash;<button mat-stroked-button class=\"right\" mdbBtn color=\"info\" mdbWavesEffect&ndash;&gt;-->\r\n<!--          &lt;!&ndash;(click)=this.navigateToTestPage(trip.id)>&ndash;&gt;-->\r\n<!--          &lt;!&ndash;View details&ndash;&gt;-->\r\n<!--          &lt;!&ndash;</button>&ndash;&gt;-->\r\n<!--          <button class=\"mt-0 pt-0\" mat-button (click)=this.navigateToTestPage(test.id)>-->\r\n<!--            View details-->\r\n<!--          </button>-->\r\n<!--          &lt;!&ndash;</a>&ndash;&gt;-->\r\n\r\n<!--        </mat-card-actions>-->\r\n<!--      </mat-card>-->\r\n<!--    </div>-->\r\n\r\n<!--  </div>-->\r\n\r\n<!--  <div class=\"row text-center align-items-center mx-auto\" *ngIf=\"nothingFound\">-->\r\n<!--    <h2>Nothing found(</h2>-->\r\n<!--  </div>-->\r\n\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "./src/app/system/index/index.component.scss":
/*!***************************************************!*\
  !*** ./src/app/system/index/index.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".carousel-caption {\n  margin-bottom: 5%; }\n\n#mb {\n  background-color: #4183c4;\n  border-radius: 10px; }\n\n#bundleSlider {\n  padding-bottom: 46.25%; }\n\n.tripCard {\n  max-width: 400px;\n  padding-left: 0;\n  padding-right: 0; }\n\n.tripCard {\n  margin-top: 20px;\n  min-width: 200px; }\n\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.carousel slide carousel-fade {\n  max-height: 500px; }\n\n#bundleSlider {\n  max-height: 400px; }\n\n.mainPage {\n  margin-right: 5%;\n  margin-left: 5%; }\n\n#test {\n  margin-right: 2%;\n  margin-left: 2%; }\n\n.right {\n  float: right;\n  margin-right: 7%;\n  background-color: #2E294E !important; }\n\n.buttonForSelect {\n  background-color: #2E294E !important; }\n\n.money-label {\n  color: darkgreen;\n  -webkit-text-decoration: #004444;\n          text-decoration: #004444;\n  font-weight: 600;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 120%;\n  margin-left: 5%; }\n\n.money-label-for-select {\n  color: darkgreen;\n  -webkit-text-decoration: #004444;\n          text-decoration: #004444;\n  font-weight: 600;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 100%; }\n\n.filter {\n  /*background-color: #ea8a11\t;*/\n  /*background-color: #BF7C44\t;*/\n  margin-right: 1%;\n  margin-left: 1%;\n  margin-bottom: 10px; }\n\n.aligncenter {\n  width: auto;\n  height: 0;\n  border-top: 7px solid #2E294E;\n  font-size: 0; }\n\n.row {\n  margin: 0; }\n\n/deep/ .mat-slide-toggle-label {\n  margin-bottom: 0px; }\n\n.mat-card-image {\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  height: 150px; }\n\n.tripSearch {\n  background-color: #E7E6F7; }\n\n.noPaddingLeft {\n  padding-left: 0; }\n\n/deep/ .mat-slide-toggle.mat-checked {\n  color: #2E294E !important;\n  border-radius: 50%; }\n\n/deep/ .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n  background-color: #5a5585; }\n\n/deep/ .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: #2E294E; }\n\n.FindTour {\n  color: #E7E6F7;\n  font-size: 1rem; }\n\n.carousel {\n  max-height: 600px; }\n\n.view {\n  max-height: 600px; }\n\n@media (max-height: 500px) {\n  .navbar:not(.top-nav-collapse) {\n    background: #1C2331 !important; } }\n\n.styledButton {\n  max-height: 80px; }\n\n.fill {\n  flex: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5hdHN5dHN5bHVpay9EZXNrdG9wL2Zyb250ZW5kL3NyYy9tYWluL3dlYi9zcmMvYXBwL3N5c3RlbS9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGdCQUFnQjtFQUVoQixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxTQUFTO0VBQ1QsaURBQWlELEVBQUE7O0FBSW5EO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsaUJBQ0YsRUFBQTs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLG9DQUFvQyxFQUFBOztBQUd0QztFQUNFLGdCQUFnQjtFQUNoQixnQ0FBd0I7VUFBeEIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixpQ0FBaUM7RUFDakMsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxnQkFBZ0I7RUFDaEIsZ0NBQXdCO1VBQXhCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLGVBQWUsRUFBQTs7QUFHakI7RUFDRSw4QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFTckI7RUFDRSxXQUFVO0VBQ1YsU0FBUTtFQUNSLDZCQUE2QjtFQUM3QixZQUFXLEVBQUE7O0FBR2I7RUFDRSxTQUFTLEVBQUE7O0FBZVg7RUFDRSxrQkFBa0IsRUFBQTs7QUFJcEI7RUFFRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBR2Y7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUlFLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0U7SUFDRSw4QkFBOEIsRUFBQSxFQUMvQjs7QUFHSDtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLE9BQU8sRUFBQSIsImZpbGUiOiJhcHAvc3lzdGVtL2luZGV4L2luZGV4LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4jbWIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTgzYzQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuI2J1bmRsZVNsaWRlciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDQ2LjI1JTtcclxufVxyXG5cclxuLnRyaXBDYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxuICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4udHJpcENhcmQge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgLy9iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG1pbi13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcblxyXG4uY2Fyb3VzZWwgc2xpZGUgY2Fyb3VzZWwtZmFkZSB7XHJcbiAgbWF4LWhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbiNidW5kbGVTbGlkZXIge1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4XHJcbn1cclxuXHJcbi5tYWluUGFnZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuXHJcbiN0ZXN0IHtcclxuICBtYXJnaW4tcmlnaHQ6IDIlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxufVxyXG5cclxuLnJpZ2h0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiA3JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkUyOTRFICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idXR0b25Gb3JTZWxlY3Qge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyRTI5NEUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1vbmV5LWxhYmVsIHtcclxuICBjb2xvcjogZGFya2dyZWVuO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogIzAwNDQ0NDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTIwJTtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuXHJcbi5tb25leS1sYWJlbC1mb3Itc2VsZWN0IHtcclxuICBjb2xvcjogZGFya2dyZWVuO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogIzAwNDQ0NDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxufVxyXG5cclxuLmZpbHRlciB7XHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjZWE4YTExXHQ7Ki9cclxuICAvKmJhY2tncm91bmQtY29sb3I6ICNCRjdDNDRcdDsqL1xyXG4gIG1hcmdpbi1yaWdodDogMSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDElO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi8vLkZpbmRUb3VyIHtcclxuLy8gIG1hcmdpbi11cDogMjAlO1xyXG4vLyAgd2lkdGg6IDgwJTtcclxuLy8gIGhlaWdodDogOTAlO1xyXG4vL31cclxuXHJcbi5hbGlnbmNlbnRlciB7XHJcbiAgd2lkdGg6YXV0bztcclxuICBoZWlnaHQ6MDtcclxuICBib3JkZXItdG9wOiA3cHggc29saWQgIzJFMjk0RTtcclxuICBmb250LXNpemU6MDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubXVsdGlzZWxlY3RNYWluUGFnZSB7XHJcblxyXG59XHJcblxyXG4vL25nLXNlbGVjdCAvZGVlcC8gc2VsZWN0LWRyb3Bkb3duIC5zZWxlY3RlZCB7XHJcbi8vICBkaXNwbGF5OiBub25lXHJcbi8vfVxyXG5cclxuLy8uZm9ybS1jb250cm9sIHtcclxuLy8gIGJvcmRlcjogMDtcclxuLy99XHJcblxyXG4vZGVlcC8gLm1hdC1zbGlkZS10b2dnbGUtbGFiZWwge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuXHJcbi5tYXQtY2FyZC1pbWFnZSB7XHJcbiAgLy9mbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbn1cclxuXHJcbi50cmlwU2VhcmNoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdFNkY3O1xyXG59XHJcblxyXG4ubm9QYWRkaW5nTGVmdCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4vZGVlcC8gLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQge1xyXG4gIGNvbG9yOiAjMkUyOTRFICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4vZGVlcC8gLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQ6bm90KC5tYXQtZGlzYWJsZWQpIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzVhNTU4NTtcclxufVxyXG5cclxuL2RlZXAvIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkOm5vdCgubWF0LWRpc2FibGVkKSAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJFMjk0RTtcclxufVxyXG5cclxuLkZpbmRUb3VyIHtcclxuICAvLyBtYXJnaW4tdXA6IDIwJTtcclxuICAvLyB3aWR0aDogODAlO1xyXG4gIC8vIGhlaWdodDogMTAwJTtcclxuICBjb2xvcjogI0U3RTZGNztcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5jYXJvdXNlbCB7XHJcbiAgbWF4LWhlaWdodDogNjAwcHg7XHJcbn1cclxuXHJcbi52aWV3IHtcclxuICBtYXgtaGVpZ2h0OiA2MDBweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtaGVpZ2h0OiA1MDBweCkge1xyXG4gIC5uYXZiYXI6bm90KC50b3AtbmF2LWNvbGxhcHNlKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMUMyMzMxICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uc3R5bGVkQnV0dG9uIHtcclxuICBtYXgtaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4uZmlsbCB7XHJcbiAgZmxleDogMTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/system/index/index.component.ts":
/*!*************************************************!*\
  !*** ./src/app/system/index/index.component.ts ***!
  \*************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/auth.service */ "./src/app/shared/auth.service.ts");





var IndexComponent = /** @class */ (function () {
    function IndexComponent(formBuilder, 
    //-----
    //-----
    router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.submitted = false;
        this.loading = false;
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.filterForm = this.initSearchForm();
        window.scrollTo(0, 0);
    };
    IndexComponent.prototype.initSearchForm = function () {
        return this.formBuilder.group({
            name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100)]]
        });
    };
    Object.defineProperty(IndexComponent.prototype, "authorized", {
        get: function () {
            return this.authService.token != null;
        },
        enumerable: true,
        configurable: true
    });
    IndexComponent.prototype.navigateToTestPage = function (id) {
        this.router.navigate(['test/' + id]);
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/system/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/system/index/index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <mat-tab-group [(selectedIndex)]=\"indexOfTabToOpen\">\r\n<!--    <mat-tab label=\"Your tests\">-->\r\n<!--      <div class=\"tabBorderPadding\">-->\r\n<!--        <app-user-tests></app-user-tests>-->\r\n<!--      </div>-->\r\n<!--    </mat-tab>-->\r\n<!--    <mat-tab label=\"Test history\">-->\r\n<!--      <div class=\"tabBorderPadding\">-->\r\n<!--        <app-user-test-history></app-user-test-history>-->\r\n<!--      </div>-->\r\n<!--    </mat-tab>-->\r\n  </mat-tab-group>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-content {\n  margin-top: 10px;\n  margin-left: 50px;\n  padding: 5px; }\n\n.content-width {\n  width: 100%; }\n\n.tab-content.card {\n  border: 0; }\n\n.hover-block:hover {\n  background: #2980b9;\n  color: #ffffff; }\n\n.hover-block.active {\n  background: #2980b9;\n  color: #ffffff; }\n\n.container, .grid-container {\n  padding: 0;\n  border-radius: 5px;\n  margin-top: 20px;\n  background-color: white;\n  height: auto; }\n\nmat-tab {\n  font-weight: bolder; }\n\n.tabBorderPadding {\n  padding: 25px 0 25px 0; }\n\n.generateButton {\n  bottom: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbm5hdHN5dHN5bHVpay9EZXNrdG9wL2Zyb250ZW5kL3NyYy9tYWluL3dlYi9zcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWSxFQUFBOztBQUVkO0VBQ0UsV0FBVyxFQUFBOztBQUViO0VBQ0UsU0FBUyxFQUFBOztBQUVYO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxTQUFTLEVBQUEiLCJmaWxlIjoiYXBwL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWNvbnRlbnQge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5jb250ZW50LXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4udGFiLWNvbnRlbnQuY2FyZHtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuLmhvdmVyLWJsb2NrOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMjk4MGI5O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5ob3Zlci1ibG9jay5hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6ICMyOTgwYjk7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5jb250YWluZXIsIC5ncmlkLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbm1hdC10YWIge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbi50YWJCb3JkZXJQYWRkaW5nIHtcclxuICBwYWRkaW5nOiAyNXB4IDAgMjVweCAwO1xyXG59XHJcblxyXG4uZ2VuZXJhdGVCdXR0b24ge1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _services_share_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/share-data.service */ "./src/app/shared/share-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var UserComponent = /** @class */ (function () {
    function UserComponent(authService, shareDataService, router) {
        var _this = this;
        this.authService = authService;
        this.shareDataService = shareDataService;
        this.router = router;
        this.indexOfTabToOpen = null;
        this.navigationSubscription = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]) {
                _this.setTabIndex();
            }
        });
    }
    UserComponent.prototype.ngOnInit = function () {
        this.setTabIndex();
        window.scrollTo(0, 0);
    };
    UserComponent.prototype.ngOnDestroy = function () {
        this.shareDataService.tabIndex = null;
        this.shareDataService.ticketId = null;
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    };
    UserComponent.prototype.setTabIndex = function () {
        this.indexOfTabToOpen = this.shareDataService.tabIndex;
    };
    Object.defineProperty(UserComponent.prototype, "authority", {
        get: function () {
            // return this.authService.getDecodedToken().authority;
            return "ROLE_USER";
        },
        enumerable: true,
        configurable: true
    });
    UserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-current-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_share_data_service__WEBPACK_IMPORTED_MODULE_3__["ShareDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @environments/environment */ "./src/app/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/annatsytsyluik/Desktop/frontend/src/main/web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map