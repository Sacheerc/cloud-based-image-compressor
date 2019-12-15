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

module.exports = "<app-nav-bar></app-nav-bar>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/home/components/add-files/add-files.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/home/components/add-files/add-files.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card class=\"text-center add-files\">\n    <mat-card-header>\n      <mat-card-title>Pic your images</mat-card-title>\n    </mat-card-header>\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <mat-card class=\"button-card\">\n          <mat-card-title>local computer</mat-card-title>\n          <button mat-fab aria-label=\"Upload files from local computer\">\n            <mat-icon>computer</mat-icon>\n          </button>\n        </mat-card>\n      </div>\n      <div class=\"col-md-4\">\n          <app-google-picker\n            (selectedFiles) = \"onFileSelect($event)\"\n          ></app-google-picker>\n      </div>\n      \n      <div class=\"col-md-4\">\n        <mat-card class=\"button-card\">\n          <mat-card-title>Drop Box</mat-card-title>\n          <button mat-fab aria-label=\"Not completed\">\n            <mat-icon>block</mat-icon>\n          </button>\n        </mat-card>\n      </div>\n    </div>\n  </mat-card>\n  <mat-progress-bar color=\"accent\" mode=\"indeterminate\"></mat-progress-bar>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/home/components/compressor/compressor.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/home/components/compressor/compressor.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n  <mat-card class=\"button-card\">\n    <app-image-compress></app-image-compress>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/home/components/file-list/file-list.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/home/components/file-list/file-list.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"\">\n    <mat-list>\n      <h3 mat-subheader>Images</h3>\n      <mat-list-item *ngFor=\"let file of imageArr\">\n        <mat-icon mat-list-icon>perm_media</mat-icon>\n        <p mat-line>url : https://www.googleapis.com/drive/v2/files/{{ file.id }}</p>\n        <mat-icon *ngIf='file.status == \"done\"' class=\"text-success\">check_circle</mat-icon>\n        <mat-icon *ngIf='file.status == \"failed\"' class=\"text-danger\">info</mat-icon>\n        \n        <p mat-line>\n          <mat-progress-bar *ngIf='file.status == \"processing\"'\n            color=\"primary\"\n            mode=\"indeterminate\"\n          ></mat-progress-bar>\n          Original Size Bytes : {{file.size/8/1024}}KB\n        </p>\n      </mat-list-item>\n      <mat-divider></mat-divider>\n    </mat-list>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/modules/home/home.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/modules/home/home.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-google-picker></app-google-picker>\n\n<app-image-compress></app-image-compress> -->\n<app-add-files (selectedFiles)=\"onFileSelect($event)\"> </app-add-files>\n<app-file-list *ngIf='isVisible' [selectedFiles]=\"selectedFiles\"></app-file-list>\n<app-compressor></app-compressor>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/google-picker/google-picker.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/google-picker/google-picker.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"button-card\">\n  <mat-card-title>Google Drive</mat-card-title>\n  <button mat-fab (click)=\"loadGoogleDrive()\" aria-label=\"Open google drive\">\n    <mat-icon>cloud_download</mat-icon>\n  </button>\n</mat-card>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/image-compress/image-compress.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/image-compress/image-compress.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-raised-button color=\"accent\" aria-label=\"Not completed\" (click)='selectFile()'>\n  <mat-icon style=\"color: green\">play_circle_filled</mat-icon> Start\n</button>\n\n<!-- <input\n  type=\"file\"\n  accept=\".jpg,.png,.jpeg\"\n  id=\"image-input\"\n  (change)=\"selectFile($event)\"\n/> -->\n<br /><br />\nOriginal: Size: {{ sizeOfOriginalImage | number: \"1.2-2\" }}MB <br /><img\n  [src]=\"localUrl\"\n  height=\"200px\"\n/>\n<br /><br /><br />\nCompressed: Size: {{ sizeOFCompressedImage | number: \"1.2-2\" }}MB<br />\n<img [src]=\"localCompressedURl\" height=\"150px\" />\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/nav-bar/nav-bar.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/nav-bar/nav-bar.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"accent\">\n  <span>ReduZer</span>\n  <span class=\"example-fill-remaining-space\"></span>\n  <span>Right Aligned Text</span>\n</mat-toolbar>\n"

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


let CompressorComponent = class CompressorComponent {
    constructor() { }
    ngOnInit() {
    }
};
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
    }
    ngOnInit() {
        this.downloadedFiles = [];
        this.selectedFiles.forEach(element => {
            this.imageArr.push({
                id: element.id,
                mimeType: element.mimeType,
                name: element.name,
                size: element.sizeBytes,
                status: "processing"
            });
        });
        this.imageArr.forEach(image => {
            console.log(image);
            this.api.getImage(image.id).subscribe(resultImage => {
                image.status = "done";
                this.downloadedFiles.push({
                    image_details: image,
                    image: resultImage
                });
                this.fileService.setDownloadedFiles(this.downloadedFiles);
            }, error => {
                image.status = "failed";
            });
        });
        console.log(this.imageArr);
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
        selector: 'app-file-list',
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

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



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};
let ApiService = class ApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getImage(id) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Authorization': 'Bearer ' + this.accessToken
        });
        let url = 'https://www.googleapis.com/drive/v2/files/' + id + '?alt=media';
        return this.httpClient.get(url, { headers: headers, responseType: 'blob' });
    }
};
ApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
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
FileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
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
                    console.log(authResult);
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
                            console.log(this.fileService.getSelectedFiles());
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
/* harmony import */ var ngx_image_compress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-image-compress */ "./node_modules/ngx-image-compress/fesm2015/ngx-image-compress.js");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var src_app_services_file_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/file.service */ "./src/app/services/file.service.ts");





let ImageCompressComponent = class ImageCompressComponent {
    constructor(imageCompress, api, fileService) {
        this.imageCompress = imageCompress;
        this.api = api;
        this.fileService = fileService;
        this.files = [];
    }
    selectFile() {
        let downloadedFiles = this.fileService.getDownloadedFiles();
        downloadedFiles.forEach(file => {
            console.log(file);
            let fileName = file.image_details.name;
            let reader = new FileReader();
            reader.onload = (event) => {
                this.localUrl = event.target.result;
                console.log(fileName);
                this.compressFile(this.localUrl, fileName);
            };
            reader.readAsDataURL(file.image);
        });
    }
    // selectFile() {
    //   var fileName: any;
    //   // this.file = event.target.files[0];
    //   fileName ="dawde";
    //   // if (event.target.files && event.target.files[0]) {
    //     this.api.getImage('https://wallpaperaccess.com/full/124518.jpg').subscribe(images => {
    //       // images.forEach(image => {
    //         console.log(images)
    //         var reader = new FileReader();
    //         reader.onload = (event: any) => {
    //           this.localUrl = event.target.result;
    //           this.compressFile(this.localUrl, fileName)
    //         }
    //         reader.readAsDataURL(images);
    //       // });
    //     })
    //   // }
    // }
    compressFile(image, fileName) {
        console.log(fileName);
        var orientation = -1;
        this.sizeOfOriginalImage = this.imageCompress.byteCount(image) / (1024 * 1024);
        console.warn('Size in bytes is now:', this.sizeOfOriginalImage);
        this.imageCompress.compressFile(image, orientation, 50, 50).then(result => {
            this.imgResultAfterCompress = result;
            this.localCompressedURl = result;
            this.sizeOFCompressedImage = this.imageCompress.byteCount(result) / (1024 * 1024);
            console.warn('Size in bytes after compression:', this.sizeOFCompressedImage);
            // create file from byte
            const imageName = fileName;
            // call method that creates a blob from dataUri
            const imageBlob = this.dataURItoBlob(this.imgResultAfterCompress.split(',')[1]);
            //imageFile created below is the new compressed file which can be send to API in form data
            const imageFile = new File([result], imageName, { type: 'image/jpeg' });
        });
    }
    dataURItoBlob(dataURI) {
        const byteString = window.atob(dataURI);
        const arrayBuffer = new ArrayBuffer(byteString.length);
        const int8Array = new Uint8Array(arrayBuffer);
        for (let i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([int8Array], { type: 'image/jpeg' });
        return blob;
    }
    ngOnInit() {
    }
};
ImageCompressComponent.ctorParameters = () => [
    { type: ngx_image_compress__WEBPACK_IMPORTED_MODULE_2__["NgxImageCompressService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: src_app_services_file_service__WEBPACK_IMPORTED_MODULE_4__["FileService"] }
];
ImageCompressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-compress',
        template: __webpack_require__(/*! raw-loader!./image-compress.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/image-compress/image-compress.component.html"),
        styles: [__webpack_require__(/*! ./image-compress.component.css */ "./src/app/shared/image-compress/image-compress.component.css")]
    })
], ImageCompressComponent);



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

module.exports = __webpack_require__(/*! F:\Skysys\cloud-based-image-compressor\app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map