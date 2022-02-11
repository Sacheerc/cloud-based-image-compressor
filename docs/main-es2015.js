(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav-bar></app-nav-bar>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<footer class=\"text-center bg-warning p-1\">\r\n  <p>&copy; All rights reserved for <i>Reduzer</i> 2020</p>\r\n  <div style=\"margin-top: -15px;\">\r\n    <small\r\n      ><a href=\"\" style=\"color: black !important;\">Terms and Conditions</a> |\r\n      <a href=\"\" style=\"color: black !important;\">Privacy Policy</a></small\r\n    >\r\n  </div>\r\n</footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/home/components/add-files/add-files.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/home/components/add-files/add-files.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <mat-card\r\n    class=\"text-center add-files\"\r\n    style=\"background-color: rgba(255, 255, 255, 0.945)\"\r\n  >\r\n    <div class=\"text-center\">\r\n      <mat-card-title><strong>Pick your images</strong></mat-card-title>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n        <app-local-file-picker></app-local-file-picker>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n        <app-google-picker\r\n          (selectedFiles)=\"onFileSelect($event)\"\r\n        ></app-google-picker>\r\n      </div>\r\n\r\n      <div class=\"col-md-4\">\r\n        <mat-card\r\n          class=\"button-card\"\r\n          style=\"background-color: rgba(255, 255, 255, 0.904)\"\r\n        >\r\n          <mat-card-title>Drop Box</mat-card-title>\r\n          <button mat-fab aria-label=\"Not completed\" disabled>\r\n            <mat-icon>block</mat-icon>\r\n          </button>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/home/components/compressor/compressor.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/home/components/compressor/compressor.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" *ngIf=\"isDownloadCompleted\">\r\n  <mat-card class=\"button-card\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 text-center\">\r\n        <app-image-compress *ngIf=\"!isStarted\"></app-image-compress>\r\n        <div class=\"row\" *ngIf=\"isStarted && !isDownloaded\">\r\n          <div class=\"col-md-10\">\r\n            <mat-progress-bar\r\n              mode=\"determinate\"\r\n              color=\"warn\"\r\n              [value]=\"value\"\r\n              class=\"mt-3\"\r\n            ></mat-progress-bar>\r\n          </div>\r\n          <div class=\"col-md-2 mt-2 text-success\">{{ value }} %</div>\r\n        </div>\r\n        <button\r\n          *ngIf=\"isDownloaded && !refresh\"\r\n          mat-raised-button\r\n          color=\"accent\"\r\n          aria-label=\"Not completed\"\r\n          (click)=\"downloadZip()\"\r\n        >\r\n          <mat-icon style=\"color: green\">play_circle_filled</mat-icon> Download\r\n        </button>\r\n        <button\r\n          *ngIf=\"refresh\"\r\n          mat-raised-button\r\n          color=\"accent\"\r\n          aria-label=\"Not completed\"\r\n          (click)=\"refreshReduzer()\"\r\n        >\r\n          <mat-icon style=\"color: green\">refresh</mat-icon> Refresh\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/home/components/file-list/file-list.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/home/components/file-list/file-list.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<div class=\"container\">\r\n  <div class=\"\">\r\n    <mat-list>\r\n      <mat-card>\r\n        <h3 mat-subheader>Images</h3>\r\n      <div [style.overflow]=\"'auto'\" [style.height.px]=\"'400'\">\r\n        <mat-list-item *ngFor=\"let file of imageArr\">\r\n        <mat-icon mat-list-icon>perm_media</mat-icon>\r\n        <p mat-line>\r\n          url : https://www.googleapis.com/drive/v2/files/{{ file.id }}\r\n        </p>\r\n        <mat-icon *ngIf=\"file.status == 'done'\" class=\"text-success\"\r\n          >check_circle</mat-icon\r\n        >\r\n        <mat-icon *ngIf=\"file.status == 'failed'\" class=\"text-danger\"\r\n          >info</mat-icon\r\n        >\r\n\r\n        <p mat-line>\r\n          <mat-progress-bar\r\n            *ngIf=\"file.status == 'processing'\"\r\n            color=\"primary\"\r\n            mode=\"indeterminate\"\r\n          ></mat-progress-bar>\r\n          Original Size: {{ file.size / 1024 }} KB\r\n        </p>\r\n      </mat-list-item>\r\n      </div>\r\n      </mat-card>\r\n    </mat-list>\r\n  </div>\r\n  <br>\r\n  <mat-card *ngIf=\"!isDownloaded\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-10\">\r\n        downloading\r\n        <mat-progress-bar\r\n          mode=\"determinate\"\r\n          color=\"primary\"\r\n          [value]=\"value\"\r\n          class=\"mt-3\"\r\n        ></mat-progress-bar>\r\n      </div>\r\n      <div class=\"col-md-2 text-success\">\r\n        {{value}}% completed\r\n      </div>\r\n    </div>\r\n  </mat-card>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/home/home.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/home/home.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-google-picker></app-google-picker>\r\n\r\n<app-image-compress></app-image-compress> -->\r\n<div class=\"background\">\r\n  <div class=\"container\">\r\n      <mat-card class=\"container text-center\" style=\"font-size: 20px; color: rgb(71, 71, 71); background-color: rgba(255, 255, 255, 0.904);\">\r\n          <img src=\"../../assets/logo.png\" alt=\"\" style=\"width: 200px;\"><br>\r\n          <strong>Bulk Image Compressor <br>  No limitations, Totally free and super fast!</strong>\r\n        </mat-card>\r\n  </div>\r\n  <app-add-files (selectedFiles)=\"onFileSelect($event)\"> </app-add-files>\r\n  <div class=\" container\">\r\n    <div class=\"text-left p-5\">\r\n        <h3 class=\"text-secondary\">How it Works?</h3>\r\n        <br>\r\n        <p>\r\n          The Reduzer App fetches your large size images from google drive within few seconds by using it's back-end server. Therefore there is no any data charge for your side to download large image files. Then the Reduzer app automatically starts the image resizing process according to your request. Then it will create a zip file and you will be allowed to download it within a single click. <br><br> <strong>Your images will be automatically deleted from our servers within an hour. <br><span class=\"text-dark\"> So it's time to work with Reduzer and  save your data!  </span></strong> \r\n        </p>\r\n    </div>\r\n    \r\n  </div>\r\n  <app-file-list\r\n    *ngIf=\"isVisible\"\r\n    [selectedFiles]=\"selectedFiles\"\r\n  ></app-file-list>\r\n  <br />\r\n  <app-compressor></app-compressor>\r\n  <br />\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/google-picker/google-picker.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/google-picker/google-picker.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"button-card\" style=\"background-color: rgba(255, 255, 255, 0.904);\">\r\n  <mat-card-title class=\"\">Google Drive</mat-card-title>\r\n  <button mat-fab (click)=\"loadGoogleDrive()\" aria-label=\"Open google drive\">\r\n    <mat-icon>cloud_download</mat-icon>\r\n  </button>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/image-compress/image-compress.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/image-compress/image-compress.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button\r\n  *ngIf=\"downloadedFiles.length !== compressedImages.length\"\r\n  mat-raised-button\r\n  color=\"accent\"\r\n  aria-label=\"Not completed\"\r\n  (click)=\"selectFileLocally()\"\r\n>\r\n  <mat-icon style=\"color: green\">play_circle_filled</mat-icon> Compress Images\r\n</button>\r\n<button\r\n  *ngIf=\"downloadedFiles.length === compressedImages.length\"\r\n  mat-raised-button\r\n  color=\"accent\"\r\n  aria-label=\"Not completed\"\r\n  (click)=\"download()\"\r\n>\r\n  <mat-icon style=\"color: rgb(128, 0, 90)\">play_circle_filled</mat-icon>\r\n  Download Zip\r\n</button>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/local-file-picker/local-file-picker.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/local-file-picker/local-file-picker.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card\n  class=\"button-card\"\n  style=\"background-color: rgba(255, 255, 255, 0.904)\"\n>\n  <mat-card-title>Local computer</mat-card-title>\n  <button\n    mat-fab\n    (click)=\"loadImages()\"\n    disabled\n    aria-label=\"Upload files from local computer\"\n  >\n    <!-- <mat-icon>computer</mat-icon> -->\n    <mat-icon>block</mat-icon>\n  </button>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/nav-bar/nav-bar.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/nav-bar/nav-bar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"position: sticky;\">\r\n<mat-toolbar color=\"accent\">\r\n  <!-- <span>ReduZer</span> -->\r\n  <img src=\"../../../assets/logo.png\" alt=\"\" style=\"height: 45px; margin-top: -5px;margin-left: 20px;\" />\r\n  <span class=\"example-fill-remaining-space\"></span>\r\n  <span></span>\r\n</mat-toolbar>\r\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/home/home.component */ "./src/app/modules/home/home.component.ts");




const routes = [
    { path: "", component: _modules_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/nav-bar/nav-bar.component */ "./src/app/shared/nav-bar/nav-bar.component.ts");
/* harmony import */ var _modules_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/home/home.component */ "./src/app/modules/home/home.component.ts");
/* harmony import */ var _shared_google_picker_google_picker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/google-picker/google-picker.component */ "./src/app/shared/google-picker/google-picker.component.ts");
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-image-compress */ "./node_modules/ngx-image-compress/fesm2015/ngx-image-compress.js");
/* harmony import */ var _shared_image_compress_image_compress_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/image-compress/image-compress.component */ "./src/app/shared/image-compress/image-compress.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/file.service */ "./src/app/services/file.service.ts");
/* harmony import */ var _modules_home_components_file_list_file_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/home/components/file-list/file-list.component */ "./src/app/modules/home/components/file-list/file-list.component.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _modules_home_components_add_files_add_files_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/home/components/add-files/add-files.component */ "./src/app/modules/home/components/add-files/add-files.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _modules_home_components_compressor_compressor_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/home/components/compressor/compressor.component */ "./src/app/modules/home/components/compressor/compressor.component.ts");
/* harmony import */ var _shared_local_file_picker_local_file_picker_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/local-file-picker/local-file-picker.component */ "./src/app/shared/local-file-picker/local-file-picker.component.ts");
























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _shared_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_7__["NavBarComponent"],
            _modules_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _shared_google_picker_google_picker_component__WEBPACK_IMPORTED_MODULE_9__["GooglePickerComponent"],
            _shared_image_compress_image_compress_component__WEBPACK_IMPORTED_MODULE_11__["ImageCompressComponent"],
            _modules_home_components_file_list_file_list_component__WEBPACK_IMPORTED_MODULE_15__["FileListComponent"],
            _modules_home_components_add_files_add_files_component__WEBPACK_IMPORTED_MODULE_20__["AddFilesComponent"],
            _modules_home_components_compressor_compressor_component__WEBPACK_IMPORTED_MODULE_22__["CompressorComponent"],
            _shared_local_file_picker_local_file_picker_component__WEBPACK_IMPORTED_MODULE_23__["LocalFilePickerComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__["MatProgressBarModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_21__["MatCardModule"],
        ],
        providers: [
            ngx_image_compress__WEBPACK_IMPORTED_MODULE_10__["NgxImageCompressService"],
            _services_api_service__WEBPACK_IMPORTED_MODULE_13__["ApiService"],
            _services_file_service__WEBPACK_IMPORTED_MODULE_14__["FileService"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/modules/home/components/add-files/add-files.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/modules/home/components/add-files/add-files.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-files {\r\n  margin-top: 40px;\r\n  padding: 40px;\r\n}\r\n\r\n.button-card{\r\n    margin-top: 3px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2NvbXBvbmVudHMvYWRkLWZpbGVzL2FkZC1maWxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvY29tcG9uZW50cy9hZGQtZmlsZXMvYWRkLWZpbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWZpbGVzIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIHBhZGRpbmc6IDQwcHg7XHJcbn1cclxuXHJcbi5idXR0b24tY2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/home/components/add-files/add-files.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/home/components/add-files/add-files.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddFilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFilesComponent", function() { return AddFilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddFilesComponent = class AddFilesComponent {
    constructor() {
        this.selectedFiles = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onFileSelect($event) {
        this.selectedFiles.emit($event);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], AddFilesComponent.prototype, "selectedFiles", void 0);
AddFilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-files',
        template: __webpack_require__(/*! raw-loader!./add-files.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/home/components/add-files/add-files.component.html"),
        styles: [__webpack_require__(/*! ./add-files.component.css */ "./src/app/modules/home/components/add-files/add-files.component.css")]
    })
], AddFilesComponent);



/***/ }),

/***/ "./src/app/modules/home/components/compressor/compressor.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/home/components/compressor/compressor.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL2NvbXByZXNzb3IvY29tcHJlc3Nvci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/modules/home/components/compressor/compressor.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/home/components/compressor/compressor.component.ts ***!
  \****************************************************************************/
/*! exports provided: CompressorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompressorComponent", function() { return CompressorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/file.service */ "./src/app/services/file.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





let CompressorComponent = class CompressorComponent {
    constructor(fileService, api) {
        this.fileService = fileService;
        this.api = api;
        this.value = 0;
        this.refresh = false;
        this.isDownloaded = false;
        this.isStarted = false;
        this.isDownloadCompleted = false;
    }
    ngOnInit() {
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].uri;
        this.fileService.isDownloadCompleted.subscribe(data => {
            this.isDownloadCompleted = data;
        });
        this.fileService.compressedFiles.subscribe(data => {
            this.isStarted = true;
            this.fileName = this.api.tempId;
            this.value = data.length / this.fileService.downloadedFiles.length * 100;
            if (data.length == this.fileService.downloadedFiles.length) {
                this.api.createZip(data).subscribe(result => {
                    console.log(result);
                    this.isDownloaded = true;
                });
            }
        });
    }
    downloadZip() {
        this.refresh = true;
        window.location.href = (this.url + '/images/zip/' + this.fileName + '.zip');
    }
    refreshReduzer() {
        window.location.reload();
    }
};
CompressorComponent.ctorParameters = () => [
    { type: src_app_services_file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }
];
CompressorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-compressor',
        template: __webpack_require__(/*! raw-loader!./compressor.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/home/components/compressor/compressor.component.html"),
        styles: [__webpack_require__(/*! ./compressor.component.css */ "./src/app/modules/home/components/compressor/compressor.component.css")]
    })
], CompressorComponent);



/***/ }),

/***/ "./src/app/modules/home/components/file-list/file-list.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/modules/home/components/file-list/file-list.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL2ZpbGUtbGlzdC9maWxlLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/home/components/file-list/file-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/home/components/file-list/file-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: FileListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileListComponent", function() { return FileListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/file.service */ "./src/app/services/file.service.ts");




let FileListComponent = class FileListComponent {
    constructor(api, fileService) {
        this.api = api;
        this.fileService = fileService;
        this.imageArr = [];
        this.downloadedFiles = [];
        this.value = 0;
        this.isDownloaded = false;
    }
    ngOnInit() {
        this.downloadedFiles = [];
        this.selectedFiles.forEach((element) => {
            this.imageArr.push({
                id: element.id,
                mimeType: element.mimeType,
                name: element.name,
                size: element.sizeBytes,
                status: "processing",
                imgUrl: element.url,
            });
        });
        this.imageArr.forEach((image) => {
            this.api.getImagesLocallyParallely(image.id).subscribe((resultImage) => {
                image.status = "done";
                this.downloadedFiles.push({
                    image_details: image,
                    image: resultImage,
                });
                this.fileService.setDownloadedFiles(this.downloadedFiles);
                this.value =
                    (this.downloadedFiles.length / this.imageArr.length) * 100;
                if (this.value == 100) {
                    this.isDownloaded = true;
                    this.fileService.isDownloadCompleted.emit(true);
                }
            }, (error) => {
                image.status = "failed";
            });
        });
    }
};
FileListComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
    { type: src_app_services_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FileListComponent.prototype, "selectedFiles", void 0);
FileListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-file-list",
        template: __webpack_require__(/*! raw-loader!./file-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/home/components/file-list/file-list.component.html"),
        styles: [__webpack_require__(/*! ./file-list.component.css */ "./src/app/modules/home/components/file-list/file-list.component.css")]
    })
], FileListComponent);



/***/ }),

/***/ "./src/app/modules/home/home.component.css":
/*!*************************************************!*\
  !*** ./src/app/modules/home/home.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background{\r\n    min-height: 86%; \r\n    background-image: url('background.jpg');\r\n    background-size: 100% 200px;\r\n    background-repeat: no-repeat; ; padding-top: 40px;\r\n}\r\n\r\n@media only screen and (min-width: 550px) {\r\n    .background {\r\n        background-size: 100% 380px;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZix1Q0FBeUQ7SUFDekQsMkJBQTJCO0lBQzNCLDRCQUE0QixJQUFJLGlCQUFpQjtBQUNyRDs7QUFFQTtJQUNJO1FBQ0ksMkJBQTJCO0lBQy9CO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmR7XHJcbiAgICBtaW4taGVpZ2h0OiA4NiU7IFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLy4uLy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDIwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgOyBwYWRkaW5nLXRvcDogNDBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NTBweCkge1xyXG4gICAgLmJhY2tncm91bmQge1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAzODBweDtcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/modules/home/home.component.ts":
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.selectedFiles = [];
        this.isVisible = false;
    }
    ngOnInit() {
    }
    onFileSelect($event) {
        this.selectedFiles = $event;
        this.isVisible = true;
    }
    test() {
        this.isVisible = !this.isVisible;
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/modules/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/modules/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/services/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");





const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        "Content-Type": "application/json",
    }),
};
const downloadurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].uri + "/files/download";
const zipurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].uri + "/files/zip";
const fileurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].uri + "/files";
const compressurl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].uri + "/files/compress";
let ApiService = class ApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getImage(id, name) {
        let data = {
            id: id,
            dir: this.tempId,
            name: name,
            token: this.accessToken,
        };
        return this.httpClient.post(downloadurl, data, httpOptions);
    }
    getImagesLocally(urlArray) {
        let forkArr = [];
        urlArray.forEach((item) => {
            forkArr.push(this.httpClient.get(item, { responseType: "blob" }));
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(forkArr);
    }
    getImagesLocallyParallely(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            Authorization: "Bearer " + this.accessToken,
        });
        let url = "https://www.googleapis.com/drive/v2/files/" + id + "?alt=media";
        return this.httpClient.get(url, { headers: headers, responseType: "blob" });
    }
    compressImages(image, quality) {
        let data = {
            image: image,
            quality: quality,
            dir: this.tempId,
        };
        return this.httpClient.post(compressurl, data, httpOptions);
    }
    createZip(images) {
        let data = {
            images: images,
            dir: this.tempId,
        };
        return this.httpClient.post(zipurl, data, httpOptions);
    }
    getFile() {
        return this.httpClient.get(fileurl);
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], ApiService);



/***/ }),

/***/ "./src/app/services/file.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/file.service.ts ***!
  \******************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FileService = class FileService {
    constructor() {
        this.downloadedFiles = [];
        this.compressedFiles = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isDownloadCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.selectedFiles = [1, 2, 3, 4];
    }
    setDownloadedFiles(files) {
        this.downloadedFiles = files;
    }
    getDownloadedFiles() {
        return this.downloadedFiles;
    }
    setSelectedFiles(files) {
        this.selectedFiles = files;
    }
    getSelectedFiles() {
        return this.selectedFiles;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FileService.prototype, "downloadedFiles", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FileService.prototype, "compressedFiles", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FileService.prototype, "isDownloadCompleted", void 0);
FileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], FileService);



/***/ }),

/***/ "./src/app/shared/google-picker/google-picker.component.css":
/*!******************************************************************!*\
  !*** ./src/app/shared/google-picker/google-picker.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-card{\r\n    margin-top: 3px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2dvb2dsZS1waWNrZXIvZ29vZ2xlLXBpY2tlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9nb29nbGUtcGlja2VyL2dvb2dsZS1waWNrZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tY2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDNweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/google-picker/google-picker.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/google-picker/google-picker.component.ts ***!
  \*****************************************************************/
/*! exports provided: GooglePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GooglePickerComponent", function() { return GooglePickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../keys */ "./src/keys.ts");
/* harmony import */ var src_app_services_file_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/file.service */ "./src/app/services/file.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");





let GooglePickerComponent = class GooglePickerComponent {
    constructor(fileService, api) {
        this.fileService = fileService;
        this.api = api;
        this.selectedFiles = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.developerKey = _keys__WEBPACK_IMPORTED_MODULE_2__["keys"].ApiKey;
        this.clientId = _keys__WEBPACK_IMPORTED_MODULE_2__["keys"].ClientId;
        this.scope = [
            'profile',
            'email',
            'https://www.googleapis.com/auth/drive' //insert scope here
        ].join(' ');
        this.pickerApiLoaded = false;
    }
    loadGoogleDrive() {
        gapi.load('auth', { 'callback': this.onAuthApiLoad.bind(this) });
        gapi.load('picker', { 'callback': this.onPickerApiLoad.bind(this) });
    }
    onAuthApiLoad() {
        gapi.auth.authorize({
            'client_id': this.clientId,
            'scope': this.scope,
            'immediate': false
        }, (authResult) => {
            let src;
            if (authResult && !authResult.error) {
                if (authResult.access_token) {
                    this.api.tempId = authResult.issued_at;
                    this.api.accessToken = authResult.access_token;
                    let view = new google.picker.View(google.picker.ViewId.DOCS);
                    view.setMimeTypes("application/vnd.google-apps.folder,image/png,image/jpeg,image/jpg,video/mp4");
                    let pickerBuilder = new google.picker.PickerBuilder();
                    let picker = pickerBuilder.
                        enableFeature(google.picker.Feature.SUPPORT_DRIVES).
                        enableFeature(google.picker.Feature.MULTISELECT_ENABLED).
                        setOAuthToken(authResult.access_token).
                        addView(view).
                        addView(new google.picker.DocsUploadView()).
                        setCallback((e) => {
                        if (e[google.picker.Response.ACTION] == google.picker.Action.PICKED) {
                            let docs = e[google.picker.Response.DOCUMENTS];
                            this.fileService.setSelectedFiles(docs);
                            alert(this.fileService.getSelectedFiles().length + " images are selected");
                            this.selectedFiles.emit(docs);
                        }
                    }).
                        build();
                    picker.setVisible(true);
                }
            }
        });
    }
    onPickerApiLoad() {
        this.pickerApiLoaded = true;
    }
};
GooglePickerComponent.ctorParameters = () => [
    { type: src_app_services_file_service__WEBPACK_IMPORTED_MODULE_3__["FileService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], GooglePickerComponent.prototype, "selectedFiles", void 0);
GooglePickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-google-picker',
        template: __webpack_require__(/*! raw-loader!./google-picker.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/google-picker/google-picker.component.html"),
        styles: [__webpack_require__(/*! ./google-picker.component.css */ "./src/app/shared/google-picker/google-picker.component.css")]
    })
], GooglePickerComponent);



/***/ }),

/***/ "./src/app/shared/image-compress/image-compress.component.css":
/*!********************************************************************!*\
  !*** ./src/app/shared/image-compress/image-compress.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9pbWFnZS1jb21wcmVzcy9pbWFnZS1jb21wcmVzcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/image-compress/image-compress.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/image-compress/image-compress.component.ts ***!
  \*******************************************************************/
/*! exports provided: ImageCompressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCompressComponent", function() { return ImageCompressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-image-compress */ "./node_modules/ngx-image-compress/fesm2015/ngx-image-compress.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_file_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/file.service */ "./src/app/services/file.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);







let ImageCompressComponent = class ImageCompressComponent {
    constructor(api, fileService, imageCompress) {
        this.api = api;
        this.fileService = fileService;
        this.imageCompress = imageCompress;
        this.compressedImages = [];
        this.downloadedFiles = [];
        this.download = () => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const zip = new jszip__WEBPACK_IMPORTED_MODULE_2__();
            this.compressedImages.forEach((obj) => {
                zip.file(obj.name + ".jpg", obj.image, { base64: true });
            });
            zip.generateAsync({ type: "blob" }).then(function (content) {
                Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(content, "compressed.zip");
            });
        });
    }
    selectFile() {
        this.downloadedFiles = this.fileService.getDownloadedFiles();
        let compressedFiles = [];
        this.downloadedFiles.forEach((image) => {
            this.api.compressImages(image, 40).subscribe((data) => {
                compressedFiles.push(data.image);
                this.fileService.compressedFiles.emit(compressedFiles);
            });
        });
    }
    selectFileLocallyUploaded(event) {
        var fileName;
        this.file = event.target.files[0];
        fileName = this.file["name"];
        if (event.target.files && event.target.files[0]) {
            this.api
                .getImagesLocally([
                "https://wallpaperaccess.com/full/124518.jpg",
                "https://wallpaperaccess.com/full/212205.jpg",
            ])
                .subscribe((images) => {
                images.forEach((image) => {
                    var reader = new FileReader();
                    reader.onload = (event) => {
                        this.localUrl = event.target.result;
                        this.compressFile(this.localUrl, fileName);
                    };
                    reader.readAsDataURL(image);
                });
            });
        }
    }
    selectFileLocally() {
        let downloadedFiles = this.fileService.getDownloadedFiles();
        downloadedFiles.forEach((file) => {
            let fileName = file.image_details.name;
            let reader = new FileReader();
            reader.onload = (event) => {
                this.localUrl = event.target.result;
                console.log(this.localUrl);
                this.compressFile(this.localUrl, fileName);
            };
            reader.readAsDataURL(file.image);
        });
    }
    compressFile(image, fileName) {
        var orientation = -1;
        this.sizeOfOriginalImage =
            this.imageCompress.byteCount(image) / (1024 * 1024);
        console.warn("Size in bytes is now:", this.sizeOfOriginalImage);
        this.imageCompress
            .compressFile(image, orientation, 50, 50)
            .then((result) => {
            this.imgResultAfterCompress = result;
            this.localCompressedURl = result;
            this.sizeOFCompressedImage =
                this.imageCompress.byteCount(result) / (1024 * 1024);
            console.warn("Size in bytes after compression:", this.sizeOFCompressedImage);
            // create file from byte
            const imageName = fileName;
            // call method that creates a blob from dataUri
            const imageBlob = this.dataURItoBlob(this.imgResultAfterCompress.split(",")[1]);
            this.compressedImages.push({ image: imageBlob, name: imageName });
        });
    }
    dataURItoBlob(dataURI) {
        const byteString = window.atob(dataURI);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const int8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([int8Array], { type: "image/jpeg" });
        return blob;
    }
    ngOnInit() {
        this.downloadedFiles = this.fileService.getDownloadedFiles();
    }
};
ImageCompressComponent.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] },
    { type: src_app_services_file_service__WEBPACK_IMPORTED_MODULE_5__["FileService"] },
    { type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_3__["NgxImageCompressService"] }
];
ImageCompressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-image-compress",
        template: __webpack_require__(/*! raw-loader!./image-compress.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/image-compress/image-compress.component.html"),
        styles: [__webpack_require__(/*! ./image-compress.component.css */ "./src/app/shared/image-compress/image-compress.component.css")]
    })
], ImageCompressComponent);



/***/ }),

/***/ "./src/app/shared/local-file-picker/local-file-picker.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/shared/local-file-picker/local-file-picker.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9sb2NhbC1maWxlLXBpY2tlci9sb2NhbC1maWxlLXBpY2tlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/local-file-picker/local-file-picker.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/local-file-picker/local-file-picker.component.ts ***!
  \*************************************************************************/
/*! exports provided: LocalFilePickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalFilePickerComponent", function() { return LocalFilePickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LocalFilePickerComponent = class LocalFilePickerComponent {
    constructor() { }
    ngOnInit() { }
    loadImages() { }
};
LocalFilePickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-local-file-picker",
        template: __webpack_require__(/*! raw-loader!./local-file-picker.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/local-file-picker/local-file-picker.component.html"),
        styles: [__webpack_require__(/*! ./local-file-picker.component.css */ "./src/app/shared/local-file-picker/local-file-picker.component.css")]
    })
], LocalFilePickerComponent);



/***/ }),

/***/ "./src/app/shared/nav-bar/nav-bar.component.css":
/*!******************************************************!*\
  !*** ./src/app/shared/nav-bar/nav-bar.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-fill-remaining-space {\r\n  /* This fills the remaining space, by using flexbox. \r\n     Every toolbar row uses a flexbox row layout. */\r\n  flex: 1 1 auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7bURBQ2lEO0VBQ2pELGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgLyogVGhpcyBmaWxscyB0aGUgcmVtYWluaW5nIHNwYWNlLCBieSB1c2luZyBmbGV4Ym94LiBcclxuICAgICBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LiAqL1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/nav-bar/nav-bar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/nav-bar/nav-bar.component.ts ***!
  \*****************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavBarComponent = class NavBarComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/nav-bar/nav-bar.component.html"),
        styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/shared/nav-bar/nav-bar.component.css")]
    })
], NavBarComponent);



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
const environment = {
    production: false,
    // uri: "http://localhost:3000"
    uri: "http://34.93.161.110:3000"
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

/***/ "./src/keys.ts":
/*!*********************!*\
  !*** ./src/keys.ts ***!
  \*********************/
/*! exports provided: keys */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return keys; });
const keys = {
    ApiKey: 'AIzaSyDcGrvCo-L_-2GiPlPrOKpyN0UdTDG_jL0',
    ClientId: '832322660559-4ep4aq1im6unsf0rprf1r75t91ej9nah.apps.googleusercontent.com'
};


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Dev\Reduzer\cloud-based-image-compressor\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map