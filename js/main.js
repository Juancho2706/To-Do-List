/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\r\n    margin: 0;\r\n    border:0;\r\n    background-color: rgb(236, 236, 236);\r\n    font-family: sans-serif;\r\n    overflow: hidden;\r\n    display: grid;\r\n    grid-template-columns: 100% 0px 0px 0px;\r\n}\r\n.contenedor{\r\n    display: grid;\r\n    grid-template-columns: minmax(80px,80px) minmax(300px,auto);\r\n    grid-template-rows: 100vh;\r\n    gap: 10px;\r\n}\r\n.contenedor.inactive{\r\n    opacity: 20%;\r\n    pointer-events: none;\r\n}\r\n.oscurito{\r\n    background-color: rgba(0, 0, 0, 0);\r\n    transition: 0.4s;\r\n}\r\n.oscurito.inactive{\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, 80%);\r\n    z-index: 1;\r\n    transition: 0.4s;\r\n}\r\n.izquierda{\r\n    background-color: rgb(255, 255, 255);\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\r\n}\r\n.derecha{\r\n    display: grid;\r\n    grid-template-rows: 0.3fr 5fr 0.2fr;\r\n    gap: 10px;\r\n    padding: 15px;\r\n}\r\n.headerbar{\r\n    gap: 5px;\r\n    display: grid;\r\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n    grid-template-columns: 30px 30px 30px 30px 30px minmax(300px,100%) auto auto auto auto auto auto auto;\r\n    align-items: center;\r\n    align-content: center;\r\n    justify-items: center;\r\n    padding-inline: 10px;\r\n    border-radius: 5px;\r\n    background-color: white;\r\n}\r\n.headerbar>img{\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n.maincontent{\r\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n    border-radius: 5px;\r\n    border: 0.1px solid;\r\n    border-color: lightgrey;\r\n    display: grid;\r\n    grid-template-columns: 200px 1fr;\r\n    background-color: white;\r\n}\r\n.iconos{\r\n    height: 20px;\r\n}\r\n.divA{\r\n    border-right: 0.1px solid lightgrey;\r\n    display: grid;\r\n    align-items: center;\r\n    justify-content: center;\r\n    justify-items: start;\r\n    grid-template-rows: 0.5fr 0.5fr 8fr;\r\n}\r\n.divA>div{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 10px;\r\n}\r\n.slide{\r\n    position: relative;\r\n    background-color: white;\r\n    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;\r\n    border-left: 0.1px solid lightgrey;\r\n    transition: .4s;\r\n    width: 300px;\r\n    display: grid;\r\n    grid-template-rows: 0.5fr 0.5fr 0.5fr 0.2fr 7fr;\r\n    justify-items: start;\r\n    align-items: center;\r\n}\r\n.slide.active{\r\n    transform: translate(-300px,0px);\r\n    z-index: 2;\r\n}\r\n.tituloslide{\r\n    display: grid;\r\n    grid-template-columns: 5fr 1fr 1fr;\r\n    background-color: lightgrey;\r\n    height: 100%;\r\n    width: 100%;\r\n    justify-items: center;\r\n    align-items: center;\r\n} \r\ntextarea{\r\n    resize: none;\r\n    width: 90%;\r\n    height: 90%;\r\n}\r\n.divtitulo{\r\n    padding: 20px;\r\n    display: grid;\r\n}\r\ninput[type=\"checkbox\"]{\r\n    display: none;\r\n}\r\ninput:checked{\r\n    display: block;\r\n}\r\n.newfolder{\r\n    opacity: 0;\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 40%;\r\n    background-color: white;\r\n    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;\r\n    border-left: 0.1px solid lightgrey;\r\n    transition: 0.5s;\r\n    width: 300px;\r\n    display: grid;\r\n    grid-template-rows: 0.5fr 0.5fr 0.5fr;\r\n    justify-items: start;\r\n    align-items: center;\r\n    z-index: 2;\r\n    pointer-events: none;\r\n}\r\n.newfolder.active{\r\n    pointer-events: auto;\r\n    opacity: 1;\r\n    transition: .5s;\r\n\r\n}\r\n.post{\r\n    display: grid;\r\n    grid-template-columns: 6fr 0.5fr;\r\n    border: 0.5px solid lightgrey;\r\n    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;\r\n    margin-inline: 20px;\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n}\r\n.delete{\r\n    min-width: 300px;\r\n    min-height: 60px;\r\n    font-family: 'Nunito', sans-serif;\r\n    font-size: 22px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1.3px;\r\n    font-weight: 700;\r\n    color: #313133;\r\n    background: #4FD1C5;\r\n  background: linear-gradient(90deg, rgba(129,230,217,1) 0%, rgba(79,209,197,1) 100%);\r\n    border: none;\r\n    border-radius: 1000px;\r\n    box-shadow: 12px 12px 24px rgba(79,209,197,.64);\r\n    transition: all 0.3s ease-in-out 0s;\r\n    cursor: pointer;\r\n    outline: none;\r\n    position: relative;\r\n    padding: 10px;\r\n    }\r\n  \r\n    .delete::before {\r\n  content: '';\r\n    border-radius: 1000px;\r\n    min-width: calc(300px + 12px);\r\n    min-height: calc(60px + 12px);\r\n    border: 6px solid #00FFCB;\r\n    box-shadow: 0 0 60px rgba(0,255,203,.64);\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    opacity: 0;\r\n    transition: all .3s ease-in-out 0s;\r\n  }\r\n  \r\n  .delete:hover, .delete:focus {\r\n    color: #313133;\r\n    transform: translateY(-6px);\r\n  }\r\n  \r\n  .delete:hover::before, .delete:focus::before {\r\n    opacity: 1;\r\n  }\r\n  \r\n  .delete::after {\r\n    content: '';\r\n    width: 30px; height: 30px;\r\n    border-radius: 100%;\r\n    border: 6px solid #00FFCB;\r\n    position: absolute;\r\n    z-index: -1;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    animation: ring 1.5s infinite;\r\n  }\r\n  \r\n  .delete:hover::after, .delete:focus::after {\r\n    animation: none;\r\n    display: none;\r\n  }\r\n  \r\n  @keyframes ring {\r\n    0% {\r\n      width: 30px;\r\n      height: 30px;\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      width: 300px;\r\n      height: 300px;\r\n      opacity: 0;\r\n    }\r\n  }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body{\r\n    margin: 0;\r\n    border:0;\r\n    background-color: rgb(236, 236, 236);\r\n    font-family: sans-serif;\r\n    overflow: hidden;\r\n    display: grid;\r\n    grid-template-columns: 100% 0px 0px 0px;\r\n}\r\n.contenedor{\r\n    display: grid;\r\n    grid-template-columns: minmax(80px,80px) minmax(300px,auto);\r\n    grid-template-rows: 100vh;\r\n    gap: 10px;\r\n}\r\n.contenedor.inactive{\r\n    opacity: 20%;\r\n    pointer-events: none;\r\n}\r\n.oscurito{\r\n    background-color: rgba(0, 0, 0, 0);\r\n    transition: 0.4s;\r\n}\r\n.oscurito.inactive{\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    background-color: rgba(0, 0, 0, 80%);\r\n    z-index: 1;\r\n    transition: 0.4s;\r\n}\r\n.izquierda{\r\n    background-color: rgb(255, 255, 255);\r\n    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;\r\n}\r\n.derecha{\r\n    display: grid;\r\n    grid-template-rows: 0.3fr 5fr 0.2fr;\r\n    gap: 10px;\r\n    padding: 15px;\r\n}\r\n.headerbar{\r\n    gap: 5px;\r\n    display: grid;\r\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n    grid-template-columns: 30px 30px 30px 30px 30px minmax(300px,100%) auto auto auto auto auto auto auto;\r\n    align-items: center;\r\n    align-content: center;\r\n    justify-items: center;\r\n    padding-inline: 10px;\r\n    border-radius: 5px;\r\n    background-color: white;\r\n}\r\n.headerbar>img{\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n.maincontent{\r\n    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\r\n    border-radius: 5px;\r\n    border: 0.1px solid;\r\n    border-color: lightgrey;\r\n    display: grid;\r\n    grid-template-columns: 200px 1fr;\r\n    background-color: white;\r\n}\r\n.iconos{\r\n    height: 20px;\r\n}\r\n.divA{\r\n    border-right: 0.1px solid lightgrey;\r\n    display: grid;\r\n    align-items: center;\r\n    justify-content: center;\r\n    justify-items: start;\r\n    grid-template-rows: 0.5fr 0.5fr 8fr;\r\n}\r\n.divA>div{\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 10px;\r\n}\r\n.slide{\r\n    position: relative;\r\n    background-color: white;\r\n    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;\r\n    border-left: 0.1px solid lightgrey;\r\n    transition: .4s;\r\n    width: 300px;\r\n    display: grid;\r\n    grid-template-rows: 0.5fr 0.5fr 0.5fr 0.2fr 7fr;\r\n    justify-items: start;\r\n    align-items: center;\r\n}\r\n.slide.active{\r\n    transform: translate(-300px,0px);\r\n    z-index: 2;\r\n}\r\n.tituloslide{\r\n    display: grid;\r\n    grid-template-columns: 5fr 1fr 1fr;\r\n    background-color: lightgrey;\r\n    height: 100%;\r\n    width: 100%;\r\n    justify-items: center;\r\n    align-items: center;\r\n} \r\ntextarea{\r\n    resize: none;\r\n    width: 90%;\r\n    height: 90%;\r\n}\r\n.divtitulo{\r\n    padding: 20px;\r\n    display: grid;\r\n}\r\ninput[type=\"checkbox\"]{\r\n    display: none;\r\n}\r\ninput:checked{\r\n    display: block;\r\n}\r\n.newfolder{\r\n    opacity: 0;\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 40%;\r\n    background-color: white;\r\n    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;\r\n    border-left: 0.1px solid lightgrey;\r\n    transition: 0.5s;\r\n    width: 300px;\r\n    display: grid;\r\n    grid-template-rows: 0.5fr 0.5fr 0.5fr;\r\n    justify-items: start;\r\n    align-items: center;\r\n    z-index: 2;\r\n    pointer-events: none;\r\n}\r\n.newfolder.active{\r\n    pointer-events: auto;\r\n    opacity: 1;\r\n    transition: .5s;\r\n\r\n}\r\n.post{\r\n    display: grid;\r\n    grid-template-columns: 6fr 0.5fr;\r\n    border: 0.5px solid lightgrey;\r\n    box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px, rgb(0 0 0 / 23%) 0px 3px 6px;\r\n    margin-inline: 20px;\r\n    margin-top: 10px;\r\n    padding: 10px;\r\n}\r\n.delete{\r\n    min-width: 300px;\r\n    min-height: 60px;\r\n    font-family: 'Nunito', sans-serif;\r\n    font-size: 22px;\r\n    text-transform: uppercase;\r\n    letter-spacing: 1.3px;\r\n    font-weight: 700;\r\n    color: #313133;\r\n    background: #4FD1C5;\r\n  background: linear-gradient(90deg, rgba(129,230,217,1) 0%, rgba(79,209,197,1) 100%);\r\n    border: none;\r\n    border-radius: 1000px;\r\n    box-shadow: 12px 12px 24px rgba(79,209,197,.64);\r\n    transition: all 0.3s ease-in-out 0s;\r\n    cursor: pointer;\r\n    outline: none;\r\n    position: relative;\r\n    padding: 10px;\r\n    }\r\n  \r\n    .delete::before {\r\n  content: '';\r\n    border-radius: 1000px;\r\n    min-width: calc(300px + 12px);\r\n    min-height: calc(60px + 12px);\r\n    border: 6px solid #00FFCB;\r\n    box-shadow: 0 0 60px rgba(0,255,203,.64);\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    opacity: 0;\r\n    transition: all .3s ease-in-out 0s;\r\n  }\r\n  \r\n  .delete:hover, .delete:focus {\r\n    color: #313133;\r\n    transform: translateY(-6px);\r\n  }\r\n  \r\n  .delete:hover::before, .delete:focus::before {\r\n    opacity: 1;\r\n  }\r\n  \r\n  .delete::after {\r\n    content: '';\r\n    width: 30px; height: 30px;\r\n    border-radius: 100%;\r\n    border: 6px solid #00FFCB;\r\n    position: absolute;\r\n    z-index: -1;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    animation: ring 1.5s infinite;\r\n  }\r\n  \r\n  .delete:hover::after, .delete:focus::after {\r\n    animation: none;\r\n    display: none;\r\n  }\r\n  \r\n  @keyframes ring {\r\n    0% {\r\n      width: 30px;\r\n      height: 30px;\r\n      opacity: 1;\r\n    }\r\n    100% {\r\n      width: 300px;\r\n      height: 300px;\r\n      opacity: 0;\r\n    }\r\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/generator.js":
/*!**************************!*\
  !*** ./src/generator.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$maincontent": () => (/* binding */ $maincontent),
/* harmony export */   "generatebones": () => (/* binding */ generatebones)
/* harmony export */ });
/* harmony import */ var _imgindex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgindex */ "./src/imgindex.js");
/* harmony import */ var _makeatodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeatodo */ "./src/makeatodo.js");
/* harmony import */ var _newfolderui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newfolderui */ "./src/newfolderui.js");
const $maincontent = document.querySelector('.maincontent')
;



function generarmaindiv(){
    //div izq main content
    const divA = document.querySelector('.divA')
    const seleccionSELECT = document.getElementById('selectfolder')
    seleccionSELECT.addEventListener("change", function() {
        const selectedValue = this.value;
        (0,_makeatodo__WEBPACK_IMPORTED_MODULE_1__.recargaposts)(selectedValue)
        console.log(selectedValue);
      });
    const bottonnewfolder = document.querySelector('.buttonnewfolder')
        bottonnewfolder.addEventListener('click', (e)=>{;(0,_newfolderui__WEBPACK_IMPORTED_MODULE_2__.newfolderui)()})
    const bottonnewtask = document.querySelector('.buttonnewtodo')
    bottonnewtask.addEventListener('click', (e)=>{;(0,_makeatodo__WEBPACK_IMPORTED_MODULE_1__.sehaceuntodo)()})
    //div der main content
    const divB = document.createElement('div')
        divB.className = 'divB'
        $maincontent.append(divB)
}

function generatebones(){
    //menuizq
    const divizq = document.querySelector('.izquierda')
    //header
    const divheader = document.querySelector('.headerbar')
    for (let index = 0; index < 13; index++) {
        if((index < 5) || (index == 6) || ( (index >= 8) && (index <= 10)) || (index == 12)){
            let nuevoicono = new Image()
            nuevoicono.src = _imgindex__WEBPACK_IMPORTED_MODULE_0__.bibliodeiconos[index]
            divheader.append(nuevoicono)
        }else if(index == 5){
            let nuevoicono = new Image()
            nuevoicono.style.height = '0'
            divheader.append(nuevoicono)
        }else if(index == 7){
            const p = document.createElement('p')
            p.innerText = 'Español'
            divheader.append(p)
        }else if(index == 11){
            const nuevousuario = document.createElement('p')
            nuevousuario.innerHTML = 'Juan Villegas<br>Admin'
            divheader.append(nuevousuario)
        }
    }
    //maindiv
    generarmaindiv()
}




/***/ }),

/***/ "./src/imgindex.js":
/*!*************************!*\
  !*** ./src/imgindex.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bibliodeiconos": () => (/* binding */ bibliodeiconos)
/* harmony export */ });
/* harmony import */ var _src_chat_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/chat.png */ "./src/chat.png");
/* harmony import */ var _src_checked_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/checked.png */ "./src/checked.png");
/* harmony import */ var _src_information_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/information.png */ "./src/information.png");
/* harmony import */ var _src_message_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/message.png */ "./src/message.png");
/* harmony import */ var _src_star_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/star.png */ "./src/star.png");
/* harmony import */ var _src_mexicoflag_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/mexicoflag.png */ "./src/mexicoflag.png");
/* harmony import */ var _src_search_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/search.png */ "./src/search.png");
/* harmony import */ var _src_cart_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/cart.png */ "./src/cart.png");
/* harmony import */ var _src_notification_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../src/notification.png */ "./src/notification.png");
/* harmony import */ var _src_profile_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/profile.png */ "./src/profile.png");
/* harmony import */ var _src_trash_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../src/trash.png */ "./src/trash.png");
/* harmony import */ var _src_exit_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../src/exit.png */ "./src/exit.png");














const bibliodeiconos = {
    "0": _src_chat_png__WEBPACK_IMPORTED_MODULE_0__,
    "1": _src_checked_png__WEBPACK_IMPORTED_MODULE_1__,
    "2": _src_information_png__WEBPACK_IMPORTED_MODULE_2__,
    "3": _src_message_png__WEBPACK_IMPORTED_MODULE_3__,
    "4": _src_star_png__WEBPACK_IMPORTED_MODULE_4__,
    "6": _src_mexicoflag_png__WEBPACK_IMPORTED_MODULE_5__,
    "8": _src_search_png__WEBPACK_IMPORTED_MODULE_6__,
    "9": _src_cart_png__WEBPACK_IMPORTED_MODULE_7__,
    "10": _src_notification_png__WEBPACK_IMPORTED_MODULE_8__,
    "12": _src_profile_png__WEBPACK_IMPORTED_MODULE_9__,
    "13": _src_checked_png__WEBPACK_IMPORTED_MODULE_1__,
    "14": _src_trash_png__WEBPACK_IMPORTED_MODULE_10__,
    "15": _src_exit_png__WEBPACK_IMPORTED_MODULE_11__
}



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contador": () => (/* binding */ contador),
/* harmony export */   "cuantascarpetastienemain": () => (/* binding */ cuantascarpetastienemain),
/* harmony export */   "mainfolder": () => (/* binding */ mainfolder),
/* harmony export */   "mainvarfortodo": () => (/* binding */ mainvarfortodo),
/* harmony export */   "seleccionMF": () => (/* binding */ seleccionMF)
/* harmony export */ });
/* harmony import */ var _generator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generator */ "./src/generator.js");
/* harmony import */ var _makeatodo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeatodo */ "./src/makeatodo.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



let mainfolder = []
let mainvarfortodo = []
let seleccionMF;
let contador = 0
let cuantascarpetastienemain = 0
;(0,_generator__WEBPACK_IMPORTED_MODULE_0__.generatebones)()

window.addEventListener("load", function() {
    if(this.localStorage.length == 0){
        seleccionMF = 0
        ;(0,_makeatodo__WEBPACK_IMPORTED_MODULE_1__.NuevaCarpeta)('Carpeta 1')
        let $selecciondefault = document.createElement('option')
            $selecciondefault.value = seleccionMF.toString()
            $selecciondefault.innerText = mainfolder[0].nombredecarpeta
            document.getElementById('selectfolder').append($selecciondefault)
    }else {
        mainfolder = []
        for (let index = 0; index < localStorage.length; index++) {
            let item = localStorage.getItem(index);
            let parsed = JSON.parse(item);
            console.log(item,index)
            console.log(mainfolder, 'antes del parse',index)
            mainfolder[index] = parsed
            console.log(parsed,index)
            console.log(mainfolder, 'luegodel parse',index)
            // mainfolder = parsed
            let $selecciondefault = document.createElement('option')
            seleccionMF = index;
            $selecciondefault.value = seleccionMF.toString()
            console.log(mainfolder, index)
            $selecciondefault.innerText = mainfolder[index].nombredecarpeta
            document.getElementById('selectfolder').append($selecciondefault)
        } 
        seleccionMF = 0
        ;(0,_makeatodo__WEBPACK_IMPORTED_MODULE_1__.recargaposts)(0)
        // contador = mainfolder[seleccionMF].sustodos.length
    }
    document.querySelector('.newfolder').style.display = "grid";
    document.querySelector('.oscurito').style.display = "block";
    
    console.log('finaldemain', mainfolder)
    cuantascarpetastienemain = mainfolder.length
  });





/***/ }),

/***/ "./src/makeatodo.js":
/*!**************************!*\
  !*** ./src/makeatodo.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NuevaCarpeta": () => (/* binding */ NuevaCarpeta),
/* harmony export */   "contacarpetas": () => (/* binding */ contacarpetas),
/* harmony export */   "elresto": () => (/* binding */ elresto),
/* harmony export */   "postearUI": () => (/* binding */ postearUI),
/* harmony export */   "recargaposts": () => (/* binding */ recargaposts),
/* harmony export */   "sehaceuntodo": () => (/* binding */ sehaceuntodo)
/* harmony export */ });
/* harmony import */ var _imgindex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgindex */ "./src/imgindex.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/main.js");


let contacarpetas = 0


const NuevaCarpeta = (titulocarp) => {
    let nuevofolder = {
        nombredecarpeta: titulocarp,
        sustodos: _main__WEBPACK_IMPORTED_MODULE_1__.mainvarfortodo
    }
    if(localStorage.length == 0){
        
        console.log(contacarpetas, 'primeracarpeta')
        _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder.push(nuevofolder)
        console.log(nuevofolder, 'nuevofolder NUEVA CARPETA')
        console.log(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder, 'mainfolder con nuevofolder NUEVA CARPETA')
        console.log(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[0].nombredecarpeta, 'mainfolder con nuevofolder NUEVA CARPETA')
        localStorage.setItem(0,JSON.stringify(nuevofolder))
        // console.log(contacarpetas, 'luego de primeracarpeta')
    }else{
        console.log(contacarpetas, 'segundacarpeta before')
        contacarpetas = _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder.length
        _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder.push(nuevofolder)
        console.log(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder, 'luegodel push a mainfolder')
        for (let index = 0; index < _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder.length; index++) {
            localStorage.setItem(index,JSON.stringify(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[index]))
        }
        console.log(localStorage)
    }
    console.log(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder, 'luegodecrearfolder')
    console.log(localStorage, 'localstorage')
    
}

const Nuevotodo = (titulo, desc) => {
    const title = titulo
    const descripcion = desc
    return {title,descripcion}
}

function postearUI(titulo, desc,index){
    const eldivb = document.querySelector('.divB')
    const divpost = document.createElement('div')
    const divcontent = document.createElement('div')
    let count = document.querySelector('.divB').childElementCount + 1
    divpost.className = ("post num" + count.toString())
    const p = document.createElement('p')
    p.innerText = titulo
    const p2 = document.createElement('p')
    let shorterstring = desc.slice(0,30)
    p2.innerText = shorterstring + '...'
    const buttondelete = document.createElement('button')
    buttondelete.innerText = 'X'
    buttondelete.classList.add('delete')
    buttondelete.addEventListener('click', (e) =>{
        console.log('antes', _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder)
        _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[_main__WEBPACK_IMPORTED_MODULE_1__.seleccionMF].sustodos.splice(index,1)
        console.log('despues', _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder)
        localStorage.setItem(_main__WEBPACK_IMPORTED_MODULE_1__.seleccionMF,JSON.stringify(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[_main__WEBPACK_IMPORTED_MODULE_1__.seleccionMF]))
        console.log(_main__WEBPACK_IMPORTED_MODULE_1__.seleccionMF)
        divpost.remove()
    })
    divcontent.append(p,p2)
    divpost.append(divcontent)
    divpost.append(buttondelete)
    eldivb.append(divpost)
}

const elresto = document.querySelector('.oscurito')
const $divparaeltodo = document.querySelector('.slide')
const cerrar = document.querySelector('.cerrar')
const estrella = document.querySelector('.star')
estrella.src = _imgindex__WEBPACK_IMPORTED_MODULE_0__.bibliodeiconos[4]
cerrar.src = _imgindex__WEBPACK_IMPORTED_MODULE_0__.bibliodeiconos[15]
    cerrar.addEventListener('click', (e)=>{
        $divparaeltodo.classList.toggle('active')
        elresto.classList.toggle('inactive')
    })
const $titulo = document.querySelector('#Titulo')
const $botoncrear = document.querySelector('#botoncrear')
const $contenido = document.querySelector('#contenido')

$botoncrear.addEventListener('click',(e)=>{
    secrea($titulo.value, $contenido.value)
})

function sehaceuntodo(){
    $divparaeltodo.classList.toggle('active')
    elresto.classList.toggle('inactive')
    $titulo.value = ''
    $contenido.value = ''
}

function secrea (titulo, desc){
    let nuevoitem = Nuevotodo(titulo, desc)
    console.log(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder)
    _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[_main__WEBPACK_IMPORTED_MODULE_1__.seleccionMF].sustodos.push(nuevoitem)
    console.log(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder, 'afterpush')
    // mainvarfortodo.push(nuevoitem)
    // mainfolder[seleccionMF].sustodos.push = mainvarfortodo
    postearUI(nuevoitem.title,nuevoitem.descripcion,_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[_main__WEBPACK_IMPORTED_MODULE_1__.seleccionMF].sustodos.length - 1)
    console.log(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[_main__WEBPACK_IMPORTED_MODULE_1__.seleccionMF].sustodos.length - 1, 'index?')
    console.log(_main__WEBPACK_IMPORTED_MODULE_1__.mainvarfortodo, 'secrea')
    console.log(nuevoitem, 'secrea')
    console.log(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder, 'secrea')
    console.log(_main__WEBPACK_IMPORTED_MODULE_1__.seleccionMF, 'secrea')
    localStorage.setItem(_main__WEBPACK_IMPORTED_MODULE_1__.seleccionMF,JSON.stringify(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[_main__WEBPACK_IMPORTED_MODULE_1__.seleccionMF]))
}

function recargaposts (num) {
    console.log(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[0])
    document.querySelector('.divB').innerHTML = ''
    for (let index = 0; index < _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[num].sustodos.length; index++) {
        let b = _main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[num].sustodos[index]
        postearUI(b.title,b.descripcion,_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[num].sustodos.indexOf(_main__WEBPACK_IMPORTED_MODULE_1__.mainfolder[num].sustodos[index]))
    }
}



/***/ }),

/***/ "./src/newfolderui.js":
/*!****************************!*\
  !*** ./src/newfolderui.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newfolderui": () => (/* binding */ newfolderui)
/* harmony export */ });
/* harmony import */ var _imgindex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imgindex */ "./src/imgindex.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main */ "./src/main.js");
/* harmony import */ var _makeatodo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./makeatodo */ "./src/makeatodo.js");




const bottonnewfolder = document.getElementById('botoncrearcarpeta')

const nombrenewfolder = document.getElementById('NombredeNuevaCarpeta')
const cerrarx = document.querySelector('.iconos.cerrarcarpeta')
const uinuevofolder = document.querySelector('.newfolder')
cerrarx.src = _imgindex__WEBPACK_IMPORTED_MODULE_0__.bibliodeiconos[15]
cerrarx.addEventListener('click',(e)=>{
    _makeatodo__WEBPACK_IMPORTED_MODULE_2__.elresto.classList.toggle('inactive')
    uinuevofolder.classList.toggle('active')
})
bottonnewfolder.addEventListener('click',(e)=>{
    ;(0,_makeatodo__WEBPACK_IMPORTED_MODULE_2__.NuevaCarpeta)(nombrenewfolder.value)
    _makeatodo__WEBPACK_IMPORTED_MODULE_2__.elresto.classList.toggle('inactive')
    uinuevofolder.classList.toggle('active')
})
function newfolderui(){
    _makeatodo__WEBPACK_IMPORTED_MODULE_2__.elresto.classList.toggle('inactive')
    uinuevofolder.classList.toggle('active')
}



/***/ }),

/***/ "./src/cart.png":
/*!**********************!*\
  !*** ./src/cart.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/fd7efef2528953f41743.png";

/***/ }),

/***/ "./src/chat.png":
/*!**********************!*\
  !*** ./src/chat.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/ed81216f0a2318ba09a5.png";

/***/ }),

/***/ "./src/checked.png":
/*!*************************!*\
  !*** ./src/checked.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/26dc9b310077c8c82d66.png";

/***/ }),

/***/ "./src/exit.png":
/*!**********************!*\
  !*** ./src/exit.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/1bef7a919a4df0fce11c.png";

/***/ }),

/***/ "./src/information.png":
/*!*****************************!*\
  !*** ./src/information.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/86c0601bf76bf409d279.png";

/***/ }),

/***/ "./src/message.png":
/*!*************************!*\
  !*** ./src/message.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/2e57660a9550a7734cfb.png";

/***/ }),

/***/ "./src/mexicoflag.png":
/*!****************************!*\
  !*** ./src/mexicoflag.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/07d607aa11d9f3f72747.png";

/***/ }),

/***/ "./src/notification.png":
/*!******************************!*\
  !*** ./src/notification.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/484858d4a78592e53374.png";

/***/ }),

/***/ "./src/profile.png":
/*!*************************!*\
  !*** ./src/profile.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/5faf09a7795d28bf5a2b.png";

/***/ }),

/***/ "./src/search.png":
/*!************************!*\
  !*** ./src/search.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/76569e8932c2d5c0a495.png";

/***/ }),

/***/ "./src/star.png":
/*!**********************!*\
  !*** ./src/star.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/31f56353221ca9d677f6.png";

/***/ }),

/***/ "./src/trash.png":
/*!***********************!*\
  !*** ./src/trash.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "../images/75a240e2c6fe787afc0e.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxvQkFBb0IsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFVB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZ2VuZXJhdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW1naW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbWFrZWF0b2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbmV3Zm9sZGVydWkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keXtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBib3JkZXI6MDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xcclxcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDAlIDBweCAwcHggMHB4O1xcclxcbn1cXHJcXG4uY29udGVuZWRvcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoODBweCw4MHB4KSBtaW5tYXgoMzAwcHgsYXV0byk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTAwdmg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuLmNvbnRlbmVkb3IuaW5hY3RpdmV7XFxyXFxuICAgIG9wYWNpdHk6IDIwJTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcbi5vc2N1cml0b3tcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC40cztcXHJcXG59XFxyXFxuLm9zY3VyaXRvLmluYWN0aXZle1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCA4MCUpO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbn1cXHJcXG4uaXpxdWllcmRhe1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xKSAwcHggNHB4IDEycHg7XFxyXFxufVxcclxcbi5kZXJlY2hhe1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuM2ZyIDVmciAwLjJmcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbn1cXHJcXG4uaGVhZGVyYmFye1xcclxcbiAgICBnYXA6IDVweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDMwcHggMzBweCAzMHB4IDMwcHggbWlubWF4KDMwMHB4LDEwMCUpIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nLWlubGluZTogMTBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuLmhlYWRlcmJhcj5pbWd7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDIwcHg7XFxyXFxufVxcclxcbi5tYWluY29udGVudHtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE2KSAwcHggM3B4IDZweCwgcmdiYSgwLCAwLCAwLCAwLjIzKSAwcHggM3B4IDZweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBib3JkZXI6IDAuMXB4IHNvbGlkO1xcclxcbiAgICBib3JkZXItY29sb3I6IGxpZ2h0Z3JleTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyMDBweCAxZnI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4uaWNvbm9ze1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxufVxcclxcbi5kaXZBe1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDAuMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDAuNWZyIDhmcjtcXHJcXG59XFxyXFxuLmRpdkE+ZGl2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG4uc2xpZGV7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDE2JSkgMHB4IDNweCA2cHgsIHJnYigwIDAgMCAvIDIzJSkgMHB4IDNweCA2cHg7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAwLjFweCBzb2xpZCBsaWdodGdyZXk7XFxyXFxuICAgIHRyYW5zaXRpb246IC40cztcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDAuNWZyIDAuNWZyIDAuMmZyIDdmcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcbi5zbGlkZS5hY3RpdmV7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0zMDBweCwwcHgpO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG4udGl0dWxvc2xpZGV7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmciAxZnI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn0gXFxyXFxudGV4dGFyZWF7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxufVxcclxcbi5kaXZ0aXR1bG97XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxufVxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl17XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcbmlucHV0OmNoZWNrZWR7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG4ubmV3Zm9sZGVye1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNDAlO1xcclxcbiAgICBsZWZ0OiA0MCU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxNiUpIDBweCAzcHggNnB4LCByZ2IoMCAwIDAgLyAyMyUpIDBweCAzcHggNnB4O1xcclxcbiAgICBib3JkZXItbGVmdDogMC4xcHggc29saWQgbGlnaHRncmV5O1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMC41ZnIgMC41ZnI7XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IHN0YXJ0O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB6LWluZGV4OiAyO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuLm5ld2ZvbGRlci5hY3RpdmV7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuNXM7XFxyXFxuXFxyXFxufVxcclxcbi5wb3N0e1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDZmciAwLjVmcjtcXHJcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBsaWdodGdyZXk7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDE2JSkgMHB4IDNweCA2cHgsIHJnYigwIDAgMCAvIDIzJSkgMHB4IDNweCA2cHg7XFxyXFxuICAgIG1hcmdpbi1pbmxpbmU6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxufVxcclxcbi5kZWxldGV7XFxyXFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMS4zcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGNvbG9yOiAjMzEzMTMzO1xcclxcbiAgICBiYWNrZ3JvdW5kOiAjNEZEMUM1O1xcclxcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDEyOSwyMzAsMjE3LDEpIDAlLCByZ2JhKDc5LDIwOSwxOTcsMSkgMTAwJSk7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwMHB4O1xcclxcbiAgICBib3gtc2hhZG93OiAxMnB4IDEycHggMjRweCByZ2JhKDc5LDIwOSwxOTcsLjY0KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHM7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gICAgLmRlbGV0ZTo6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XFxyXFxuICAgIG1pbi13aWR0aDogY2FsYygzMDBweCArIDEycHgpO1xcclxcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDYwcHggKyAxMnB4KTtcXHJcXG4gICAgYm9yZGVyOiA2cHggc29saWQgIzAwRkZDQjtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAwIDYwcHggcmdiYSgwLDI1NSwyMDMsLjY0KTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLWluLW91dCAwcztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRlbGV0ZTpob3ZlciwgLmRlbGV0ZTpmb2N1cyB7XFxyXFxuICAgIGNvbG9yOiAjMzEzMTMzO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTZweCk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kZWxldGU6aG92ZXI6OmJlZm9yZSwgLmRlbGV0ZTpmb2N1czo6YmVmb3JlIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRlbGV0ZTo6YWZ0ZXIge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgd2lkdGg6IDMwcHg7IGhlaWdodDogMzBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcXHJcXG4gICAgYm9yZGVyOiA2cHggc29saWQgIzAwRkZDQjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIGFuaW1hdGlvbjogcmluZyAxLjVzIGluZmluaXRlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGVsZXRlOmhvdmVyOjphZnRlciwgLmRlbGV0ZTpmb2N1czo6YWZ0ZXIge1xcclxcbiAgICBhbmltYXRpb246IG5vbmU7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIEBrZXlmcmFtZXMgcmluZyB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICB3aWR0aDogMzBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDMwcHg7XFxyXFxuICAgICAgb3BhY2l0eTogMTtcXHJcXG4gICAgfVxcclxcbiAgICAxMDAlIHtcXHJcXG4gICAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgICAgaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB9XFxyXFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxRQUFRO0lBQ1Isb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHVDQUF1QztBQUMzQztBQUNBO0lBQ0ksYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCx5QkFBeUI7SUFDekIsU0FBUztBQUNiO0FBQ0E7SUFDSSxZQUFZO0lBQ1osb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxrQ0FBa0M7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Q3pCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsYUFBYTtFQUNmOztFQUVBO0lBQ0U7TUFDRSxXQUFXO01BQ1gsWUFBWTtNQUNaLFVBQVU7SUFDWjtJQUNBO01BQ0UsWUFBWTtNQUNaLGFBQWE7TUFDYixVQUFVO0lBQ1o7RUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGJvcmRlcjowO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMCUgMHB4IDBweCAwcHg7XFxyXFxufVxcclxcbi5jb250ZW5lZG9ye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg4MHB4LDgwcHgpIG1pbm1heCgzMDBweCxhdXRvKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDB2aDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG4uY29udGVuZWRvci5pbmFjdGl2ZXtcXHJcXG4gICAgb3BhY2l0eTogMjAlO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuLm9zY3VyaXRve1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xcclxcbn1cXHJcXG4ub3NjdXJpdG8uaW5hY3RpdmV7XFxyXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDgwJSk7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNHM7XFxyXFxufVxcclxcbi5penF1aWVyZGF7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjEpIDBweCA0cHggMTJweDtcXHJcXG59XFxyXFxuLmRlcmVjaGF7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4zZnIgNWZyIDAuMmZyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcbi5oZWFkZXJiYXJ7XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMwcHggMzBweCAzMHB4IDMwcHggMzBweCBtaW5tYXgoMzAwcHgsMTAwJSkgYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG8gYXV0bztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmctaW5saW5lOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbn1cXHJcXG4uaGVhZGVyYmFyPmltZ3tcXHJcXG4gICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICB3aWR0aDogMjBweDtcXHJcXG59XFxyXFxuLm1haW5jb250ZW50e1xcclxcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIGJvcmRlcjogMC4xcHggc29saWQ7XFxyXFxuICAgIGJvcmRlci1jb2xvcjogbGlnaHRncmV5O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IDFmcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxufVxcclxcbi5pY29ub3N7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG59XFxyXFxuLmRpdkF7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMC4xcHggc29saWQgbGlnaHRncmV5O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMC41ZnIgOGZyO1xcclxcbn1cXHJcXG4uZGl2QT5kaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcbi5zbGlkZXtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTYlKSAwcHggM3B4IDZweCwgcmdiKDAgMCAwIC8gMjMlKSAwcHggM3B4IDZweDtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IDAuMXB4IHNvbGlkIGxpZ2h0Z3JleTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjRzO1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMC41ZnIgMC41ZnIgMC4yZnIgN2ZyO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdGFydDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuLnNsaWRlLmFjdGl2ZXtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTMwMHB4LDBweCk7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxufVxcclxcbi50aXR1bG9zbGlkZXtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyIDFmcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufSBcXHJcXG50ZXh0YXJlYXtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBoZWlnaHQ6IDkwJTtcXHJcXG59XFxyXFxuLmRpdnRpdHVsb3tcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG59XFxyXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXXtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuaW5wdXQ6Y2hlY2tlZHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcbi5uZXdmb2xkZXJ7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA0MCU7XFxyXFxuICAgIGxlZnQ6IDQwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDE2JSkgMHB4IDNweCA2cHgsIHJnYigwIDAgMCAvIDIzJSkgMHB4IDNweCA2cHg7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiAwLjFweCBzb2xpZCBsaWdodGdyZXk7XFxyXFxuICAgIHRyYW5zaXRpb246IDAuNXM7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAwLjVmciAwLjVmcjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogc3RhcnQ7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHotaW5kZXg6IDI7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG4ubmV3Zm9sZGVyLmFjdGl2ZXtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zaXRpb246IC41cztcXHJcXG5cXHJcXG59XFxyXFxuLnBvc3R7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNmZyIDAuNWZyO1xcclxcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGxpZ2h0Z3JleTtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTYlKSAwcHggM3B4IDZweCwgcmdiKDAgMCAwIC8gMjMlKSAwcHggM3B4IDZweDtcXHJcXG4gICAgbWFyZ2luLWlubGluZTogMjBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG59XFxyXFxuLmRlbGV0ZXtcXHJcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXHJcXG4gICAgbWluLWhlaWdodDogNjBweDtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgICBmb250LXNpemU6IDIycHg7XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAxLjNweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgY29sb3I6ICMzMTMxMzM7XFxyXFxuICAgIGJhY2tncm91bmQ6ICM0RkQxQzU7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTI5LDIzMCwyMTcsMSkgMCUsIHJnYmEoNzksMjA5LDE5NywxKSAxMDAlKTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAwcHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IDEycHggMTJweCAyNHB4IHJnYmEoNzksMjA5LDE5NywuNjQpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcztcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAuZGVsZXRlOjpiZWZvcmUge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwMDBweDtcXHJcXG4gICAgbWluLXdpZHRoOiBjYWxjKDMwMHB4ICsgMTJweCk7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoNjBweCArIDEycHgpO1xcclxcbiAgICBib3JkZXI6IDZweCBzb2xpZCAjMDBGRkNCO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDAgNjBweCByZ2JhKDAsMjU1LDIwMywuNjQpO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2UtaW4tb3V0IDBzO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGVsZXRlOmhvdmVyLCAuZGVsZXRlOmZvY3VzIHtcXHJcXG4gICAgY29sb3I6ICMzMTMxMzM7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNnB4KTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmRlbGV0ZTpob3Zlcjo6YmVmb3JlLCAuZGVsZXRlOmZvY3VzOjpiZWZvcmUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGVsZXRlOjphZnRlciB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICB3aWR0aDogMzBweDsgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xcclxcbiAgICBib3JkZXI6IDZweCBzb2xpZCAjMDBGRkNCO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICB0b3A6IDUwJTtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgYW5pbWF0aW9uOiByaW5nIDEuNXMgaW5maW5pdGU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5kZWxldGU6aG92ZXI6OmFmdGVyLCAuZGVsZXRlOmZvY3VzOjphZnRlciB7XFxyXFxuICAgIGFuaW1hdGlvbjogbm9uZTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQGtleWZyYW1lcyByaW5nIHtcXHJcXG4gICAgMCUge1xcclxcbiAgICAgIHdpZHRoOiAzMHB4O1xcclxcbiAgICAgIGhlaWdodDogMzBweDtcXHJcXG4gICAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIH1cXHJcXG4gIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCAkbWFpbmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbmNvbnRlbnQnKVxyXG5pbXBvcnQgeyBiaWJsaW9kZWljb25vcyB9IGZyb20gXCIuL2ltZ2luZGV4XCJcclxuaW1wb3J0IHtyZWNhcmdhcG9zdHMsIHNlaGFjZXVudG9kb30gZnJvbSBcIi4vbWFrZWF0b2RvXCJcclxuaW1wb3J0IHsgbmV3Zm9sZGVydWkgfSBmcm9tIFwiLi9uZXdmb2xkZXJ1aVwiXHJcblxyXG5mdW5jdGlvbiBnZW5lcmFybWFpbmRpdigpe1xyXG4gICAgLy9kaXYgaXpxIG1haW4gY29udGVudFxyXG4gICAgY29uc3QgZGl2QSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXZBJylcclxuICAgIGNvbnN0IHNlbGVjY2lvblNFTEVDVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWxlY3Rmb2xkZXInKVxyXG4gICAgc2VsZWNjaW9uU0VMRUNULmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgcmVjYXJnYXBvc3RzKHNlbGVjdGVkVmFsdWUpXHJcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgY29uc3QgYm90dG9ubmV3Zm9sZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbm5ld2ZvbGRlcicpXHJcbiAgICAgICAgYm90dG9ubmV3Zm9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57bmV3Zm9sZGVydWkoKX0pXHJcbiAgICBjb25zdCBib3R0b25uZXd0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbm5ld3RvZG8nKVxyXG4gICAgYm90dG9ubmV3dGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e3NlaGFjZXVudG9kbygpfSlcclxuICAgIC8vZGl2IGRlciBtYWluIGNvbnRlbnRcclxuICAgIGNvbnN0IGRpdkIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGRpdkIuY2xhc3NOYW1lID0gJ2RpdkInXHJcbiAgICAgICAgJG1haW5jb250ZW50LmFwcGVuZChkaXZCKVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZWJvbmVzKCl7XHJcbiAgICAvL21lbnVpenFcclxuICAgIGNvbnN0IGRpdml6cSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5penF1aWVyZGEnKVxyXG4gICAgLy9oZWFkZXJcclxuICAgIGNvbnN0IGRpdmhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJiYXInKVxyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDEzOyBpbmRleCsrKSB7XHJcbiAgICAgICAgaWYoKGluZGV4IDwgNSkgfHwgKGluZGV4ID09IDYpIHx8ICggKGluZGV4ID49IDgpICYmIChpbmRleCA8PSAxMCkpIHx8IChpbmRleCA9PSAxMikpe1xyXG4gICAgICAgICAgICBsZXQgbnVldm9pY29ubyA9IG5ldyBJbWFnZSgpXHJcbiAgICAgICAgICAgIG51ZXZvaWNvbm8uc3JjID0gYmlibGlvZGVpY29ub3NbaW5kZXhdXHJcbiAgICAgICAgICAgIGRpdmhlYWRlci5hcHBlbmQobnVldm9pY29ubylcclxuICAgICAgICB9ZWxzZSBpZihpbmRleCA9PSA1KXtcclxuICAgICAgICAgICAgbGV0IG51ZXZvaWNvbm8gPSBuZXcgSW1hZ2UoKVxyXG4gICAgICAgICAgICBudWV2b2ljb25vLnN0eWxlLmhlaWdodCA9ICcwJ1xyXG4gICAgICAgICAgICBkaXZoZWFkZXIuYXBwZW5kKG51ZXZvaWNvbm8pXHJcbiAgICAgICAgfWVsc2UgaWYoaW5kZXggPT0gNyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICAgICAgcC5pbm5lclRleHQgPSAnRXNwYcOxb2wnXHJcbiAgICAgICAgICAgIGRpdmhlYWRlci5hcHBlbmQocClcclxuICAgICAgICB9ZWxzZSBpZihpbmRleCA9PSAxMSl7XHJcbiAgICAgICAgICAgIGNvbnN0IG51ZXZvdXN1YXJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgICAgICBudWV2b3VzdWFyaW8uaW5uZXJIVE1MID0gJ0p1YW4gVmlsbGVnYXM8YnI+QWRtaW4nXHJcbiAgICAgICAgICAgIGRpdmhlYWRlci5hcHBlbmQobnVldm91c3VhcmlvKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vbWFpbmRpdlxyXG4gICAgZ2VuZXJhcm1haW5kaXYoKVxyXG59XHJcblxyXG5leHBvcnQge2dlbmVyYXRlYm9uZXN9XHJcbmV4cG9ydCB7JG1haW5jb250ZW50fSIsImltcG9ydCBpY2hhdCBmcm9tICcuLi9zcmMvY2hhdC5wbmcnXHJcbmltcG9ydCBpY2hlY2tlZCBmcm9tICcuLi9zcmMvY2hlY2tlZC5wbmcnXHJcbmltcG9ydCBpaW5mb3JtYXRpb24gZnJvbSAnLi4vc3JjL2luZm9ybWF0aW9uLnBuZydcclxuaW1wb3J0IGltZXNzYWdlIGZyb20gJy4uL3NyYy9tZXNzYWdlLnBuZydcclxuaW1wb3J0IGlzdGFyIGZyb20gJy4uL3NyYy9zdGFyLnBuZydcclxuaW1wb3J0IGlmbGFnIGZyb20gJy4uL3NyYy9tZXhpY29mbGFnLnBuZydcclxuaW1wb3J0IGlzZWFyY2ggZnJvbSAnLi4vc3JjL3NlYXJjaC5wbmcnXHJcbmltcG9ydCBpY2FydCBmcm9tICcuLi9zcmMvY2FydC5wbmcnXHJcbmltcG9ydCBpYmVsbCBmcm9tICcuLi9zcmMvbm90aWZpY2F0aW9uLnBuZydcclxuaW1wb3J0IGl1c2VyIGZyb20gJy4uL3NyYy9wcm9maWxlLnBuZydcclxuaW1wb3J0IGlkb25lIGZyb20gJy4uL3NyYy9jaGVja2VkLnBuZydcclxuaW1wb3J0IGl0cmFzaCBmcm9tICcuLi9zcmMvdHJhc2gucG5nJ1xyXG5pbXBvcnQgaWV4aXQgZnJvbSAnLi4vc3JjL2V4aXQucG5nJ1xyXG5cclxuY29uc3QgYmlibGlvZGVpY29ub3MgPSB7XHJcbiAgICBcIjBcIjogaWNoYXQsXHJcbiAgICBcIjFcIjogaWNoZWNrZWQsXHJcbiAgICBcIjJcIjogaWluZm9ybWF0aW9uLFxyXG4gICAgXCIzXCI6IGltZXNzYWdlLFxyXG4gICAgXCI0XCI6IGlzdGFyLFxyXG4gICAgXCI2XCI6IGlmbGFnLFxyXG4gICAgXCI4XCI6IGlzZWFyY2gsXHJcbiAgICBcIjlcIjogaWNhcnQsXHJcbiAgICBcIjEwXCI6IGliZWxsLFxyXG4gICAgXCIxMlwiOiBpdXNlcixcclxuICAgIFwiMTNcIjogaWRvbmUsXHJcbiAgICBcIjE0XCI6IGl0cmFzaCxcclxuICAgIFwiMTVcIjogaWV4aXRcclxufVxyXG5cclxuZXhwb3J0IHtiaWJsaW9kZWljb25vc30iLCJpbXBvcnQgeyBnZW5lcmF0ZWJvbmVzIH0gZnJvbSAnLi9nZW5lcmF0b3InO1xyXG5pbXBvcnQgeyBOdWV2YUNhcnBldGEsIHBvc3RlYXJVSSwgcmVjYXJnYXBvc3RzIH0gZnJvbSAnLi9tYWtlYXRvZG8nO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcclxubGV0IG1haW5mb2xkZXIgPSBbXVxyXG5sZXQgbWFpbnZhcmZvcnRvZG8gPSBbXVxyXG5sZXQgc2VsZWNjaW9uTUY7XHJcbmxldCBjb250YWRvciA9IDBcclxubGV0IGN1YW50YXNjYXJwZXRhc3RpZW5lbWFpbiA9IDBcclxuZ2VuZXJhdGVib25lcygpXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBpZih0aGlzLmxvY2FsU3RvcmFnZS5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgc2VsZWNjaW9uTUYgPSAwXHJcbiAgICAgICAgTnVldmFDYXJwZXRhKCdDYXJwZXRhIDEnKVxyXG4gICAgICAgIGxldCAkc2VsZWNjaW9uZGVmYXVsdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXHJcbiAgICAgICAgICAgICRzZWxlY2Npb25kZWZhdWx0LnZhbHVlID0gc2VsZWNjaW9uTUYudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICAkc2VsZWNjaW9uZGVmYXVsdC5pbm5lclRleHQgPSBtYWluZm9sZGVyWzBdLm5vbWJyZWRlY2FycGV0YVxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0Zm9sZGVyJykuYXBwZW5kKCRzZWxlY2Npb25kZWZhdWx0KVxyXG4gICAgfWVsc2Uge1xyXG4gICAgICAgIG1haW5mb2xkZXIgPSBbXVxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBpdGVtID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oaW5kZXgpO1xyXG4gICAgICAgICAgICBsZXQgcGFyc2VkID0gSlNPTi5wYXJzZShpdGVtKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbSxpbmRleClcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobWFpbmZvbGRlciwgJ2FudGVzIGRlbCBwYXJzZScsaW5kZXgpXHJcbiAgICAgICAgICAgIG1haW5mb2xkZXJbaW5kZXhdID0gcGFyc2VkXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcnNlZCxpbmRleClcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobWFpbmZvbGRlciwgJ2x1ZWdvZGVsIHBhcnNlJyxpbmRleClcclxuICAgICAgICAgICAgLy8gbWFpbmZvbGRlciA9IHBhcnNlZFxyXG4gICAgICAgICAgICBsZXQgJHNlbGVjY2lvbmRlZmF1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxyXG4gICAgICAgICAgICBzZWxlY2Npb25NRiA9IGluZGV4O1xyXG4gICAgICAgICAgICAkc2VsZWNjaW9uZGVmYXVsdC52YWx1ZSA9IHNlbGVjY2lvbk1GLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobWFpbmZvbGRlciwgaW5kZXgpXHJcbiAgICAgICAgICAgICRzZWxlY2Npb25kZWZhdWx0LmlubmVyVGV4dCA9IG1haW5mb2xkZXJbaW5kZXhdLm5vbWJyZWRlY2FycGV0YVxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VsZWN0Zm9sZGVyJykuYXBwZW5kKCRzZWxlY2Npb25kZWZhdWx0KVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgc2VsZWNjaW9uTUYgPSAwXHJcbiAgICAgICAgcmVjYXJnYXBvc3RzKDApXHJcbiAgICAgICAgLy8gY29udGFkb3IgPSBtYWluZm9sZGVyW3NlbGVjY2lvbk1GXS5zdXN0b2Rvcy5sZW5ndGhcclxuICAgIH1cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdmb2xkZXInKS5zdHlsZS5kaXNwbGF5ID0gXCJncmlkXCI7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3NjdXJpdG8nKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgXHJcbiAgICBjb25zb2xlLmxvZygnZmluYWxkZW1haW4nLCBtYWluZm9sZGVyKVxyXG4gICAgY3VhbnRhc2NhcnBldGFzdGllbmVtYWluID0gbWFpbmZvbGRlci5sZW5ndGhcclxuICB9KTtcclxuXHJcblxyXG5cclxuZXhwb3J0IHttYWludmFyZm9ydG9kbywgbWFpbmZvbGRlciwgc2VsZWNjaW9uTUYsIGNvbnRhZG9yLCBjdWFudGFzY2FycGV0YXN0aWVuZW1haW59IiwiaW1wb3J0IHsgYmlibGlvZGVpY29ub3MgfSBmcm9tIFwiLi9pbWdpbmRleFwiXHJcbmltcG9ydCB7IGNvbnRhZG9yLCBtYWluZm9sZGVyLCBtYWludmFyZm9ydG9kbywgc2VsZWNjaW9uTUYgfSBmcm9tIFwiLi9tYWluXCJcclxubGV0IGNvbnRhY2FycGV0YXMgPSAwXHJcblxyXG5cclxuY29uc3QgTnVldmFDYXJwZXRhID0gKHRpdHVsb2NhcnApID0+IHtcclxuICAgIGxldCBudWV2b2ZvbGRlciA9IHtcclxuICAgICAgICBub21icmVkZWNhcnBldGE6IHRpdHVsb2NhcnAsXHJcbiAgICAgICAgc3VzdG9kb3M6IG1haW52YXJmb3J0b2RvXHJcbiAgICB9XHJcbiAgICBpZihsb2NhbFN0b3JhZ2UubGVuZ3RoID09IDApe1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRhY2FycGV0YXMsICdwcmltZXJhY2FycGV0YScpXHJcbiAgICAgICAgbWFpbmZvbGRlci5wdXNoKG51ZXZvZm9sZGVyKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG51ZXZvZm9sZGVyLCAnbnVldm9mb2xkZXIgTlVFVkEgQ0FSUEVUQScpXHJcbiAgICAgICAgY29uc29sZS5sb2cobWFpbmZvbGRlciwgJ21haW5mb2xkZXIgY29uIG51ZXZvZm9sZGVyIE5VRVZBIENBUlBFVEEnKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKG1haW5mb2xkZXJbMF0ubm9tYnJlZGVjYXJwZXRhLCAnbWFpbmZvbGRlciBjb24gbnVldm9mb2xkZXIgTlVFVkEgQ0FSUEVUQScpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oMCxKU09OLnN0cmluZ2lmeShudWV2b2ZvbGRlcikpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coY29udGFjYXJwZXRhcywgJ2x1ZWdvIGRlIHByaW1lcmFjYXJwZXRhJylcclxuICAgIH1lbHNle1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRhY2FycGV0YXMsICdzZWd1bmRhY2FycGV0YSBiZWZvcmUnKVxyXG4gICAgICAgIGNvbnRhY2FycGV0YXMgPSBtYWluZm9sZGVyLmxlbmd0aFxyXG4gICAgICAgIG1haW5mb2xkZXIucHVzaChudWV2b2ZvbGRlcilcclxuICAgICAgICBjb25zb2xlLmxvZyhtYWluZm9sZGVyLCAnbHVlZ29kZWwgcHVzaCBhIG1haW5mb2xkZXInKVxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtYWluZm9sZGVyLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShpbmRleCxKU09OLnN0cmluZ2lmeShtYWluZm9sZGVyW2luZGV4XSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZSlcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKG1haW5mb2xkZXIsICdsdWVnb2RlY3JlYXJmb2xkZXInKVxyXG4gICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLCAnbG9jYWxzdG9yYWdlJylcclxuICAgIFxyXG59XHJcblxyXG5jb25zdCBOdWV2b3RvZG8gPSAodGl0dWxvLCBkZXNjKSA9PiB7XHJcbiAgICBjb25zdCB0aXRsZSA9IHRpdHVsb1xyXG4gICAgY29uc3QgZGVzY3JpcGNpb24gPSBkZXNjXHJcbiAgICByZXR1cm4ge3RpdGxlLGRlc2NyaXBjaW9ufVxyXG59XHJcblxyXG5mdW5jdGlvbiBwb3N0ZWFyVUkodGl0dWxvLCBkZXNjLGluZGV4KXtcclxuICAgIGNvbnN0IGVsZGl2YiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXZCJylcclxuICAgIGNvbnN0IGRpdnBvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgY29uc3QgZGl2Y29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBsZXQgY291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGl2QicpLmNoaWxkRWxlbWVudENvdW50ICsgMVxyXG4gICAgZGl2cG9zdC5jbGFzc05hbWUgPSAoXCJwb3N0IG51bVwiICsgY291bnQudG9TdHJpbmcoKSlcclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHAuaW5uZXJUZXh0ID0gdGl0dWxvXHJcbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgbGV0IHNob3J0ZXJzdHJpbmcgPSBkZXNjLnNsaWNlKDAsMzApXHJcbiAgICBwMi5pbm5lclRleHQgPSBzaG9ydGVyc3RyaW5nICsgJy4uLidcclxuICAgIGNvbnN0IGJ1dHRvbmRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBidXR0b25kZWxldGUuaW5uZXJUZXh0ID0gJ1gnXHJcbiAgICBidXR0b25kZWxldGUuY2xhc3NMaXN0LmFkZCgnZGVsZXRlJylcclxuICAgIGJ1dHRvbmRlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PntcclxuICAgICAgICBjb25zb2xlLmxvZygnYW50ZXMnLCBtYWluZm9sZGVyKVxyXG4gICAgICAgIG1haW5mb2xkZXJbc2VsZWNjaW9uTUZdLnN1c3RvZG9zLnNwbGljZShpbmRleCwxKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkZXNwdWVzJywgbWFpbmZvbGRlcilcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzZWxlY2Npb25NRixKU09OLnN0cmluZ2lmeShtYWluZm9sZGVyW3NlbGVjY2lvbk1GXSkpXHJcbiAgICAgICAgY29uc29sZS5sb2coc2VsZWNjaW9uTUYpXHJcbiAgICAgICAgZGl2cG9zdC5yZW1vdmUoKVxyXG4gICAgfSlcclxuICAgIGRpdmNvbnRlbnQuYXBwZW5kKHAscDIpXHJcbiAgICBkaXZwb3N0LmFwcGVuZChkaXZjb250ZW50KVxyXG4gICAgZGl2cG9zdC5hcHBlbmQoYnV0dG9uZGVsZXRlKVxyXG4gICAgZWxkaXZiLmFwcGVuZChkaXZwb3N0KVxyXG59XHJcblxyXG5jb25zdCBlbHJlc3RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9zY3VyaXRvJylcclxuY29uc3QgJGRpdnBhcmFlbHRvZG8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGUnKVxyXG5jb25zdCBjZXJyYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2VycmFyJylcclxuY29uc3QgZXN0cmVsbGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcicpXHJcbmVzdHJlbGxhLnNyYyA9IGJpYmxpb2RlaWNvbm9zWzRdXHJcbmNlcnJhci5zcmMgPSBiaWJsaW9kZWljb25vc1sxNV1cclxuICAgIGNlcnJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xyXG4gICAgICAgICRkaXZwYXJhZWx0b2RvLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbiAgICAgICAgZWxyZXN0by5jbGFzc0xpc3QudG9nZ2xlKCdpbmFjdGl2ZScpXHJcbiAgICB9KVxyXG5jb25zdCAkdGl0dWxvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1RpdHVsbycpXHJcbmNvbnN0ICRib3RvbmNyZWFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JvdG9uY3JlYXInKVxyXG5jb25zdCAkY29udGVuaWRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbmlkbycpXHJcblxyXG4kYm90b25jcmVhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpPT57XHJcbiAgICBzZWNyZWEoJHRpdHVsby52YWx1ZSwgJGNvbnRlbmlkby52YWx1ZSlcclxufSlcclxuXHJcbmZ1bmN0aW9uIHNlaGFjZXVudG9kbygpe1xyXG4gICAgJGRpdnBhcmFlbHRvZG8uY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJylcclxuICAgIGVscmVzdG8uY2xhc3NMaXN0LnRvZ2dsZSgnaW5hY3RpdmUnKVxyXG4gICAgJHRpdHVsby52YWx1ZSA9ICcnXHJcbiAgICAkY29udGVuaWRvLnZhbHVlID0gJydcclxufVxyXG5cclxuZnVuY3Rpb24gc2VjcmVhICh0aXR1bG8sIGRlc2Mpe1xyXG4gICAgbGV0IG51ZXZvaXRlbSA9IE51ZXZvdG9kbyh0aXR1bG8sIGRlc2MpXHJcbiAgICBjb25zb2xlLmxvZyhtYWluZm9sZGVyKVxyXG4gICAgbWFpbmZvbGRlcltzZWxlY2Npb25NRl0uc3VzdG9kb3MucHVzaChudWV2b2l0ZW0pXHJcbiAgICBjb25zb2xlLmxvZyhtYWluZm9sZGVyLCAnYWZ0ZXJwdXNoJylcclxuICAgIC8vIG1haW52YXJmb3J0b2RvLnB1c2gobnVldm9pdGVtKVxyXG4gICAgLy8gbWFpbmZvbGRlcltzZWxlY2Npb25NRl0uc3VzdG9kb3MucHVzaCA9IG1haW52YXJmb3J0b2RvXHJcbiAgICBwb3N0ZWFyVUkobnVldm9pdGVtLnRpdGxlLG51ZXZvaXRlbS5kZXNjcmlwY2lvbixtYWluZm9sZGVyW3NlbGVjY2lvbk1GXS5zdXN0b2Rvcy5sZW5ndGggLSAxKVxyXG4gICAgY29uc29sZS5sb2cobWFpbmZvbGRlcltzZWxlY2Npb25NRl0uc3VzdG9kb3MubGVuZ3RoIC0gMSwgJ2luZGV4PycpXHJcbiAgICBjb25zb2xlLmxvZyhtYWludmFyZm9ydG9kbywgJ3NlY3JlYScpXHJcbiAgICBjb25zb2xlLmxvZyhudWV2b2l0ZW0sICdzZWNyZWEnKVxyXG4gICAgY29uc29sZS5sb2cobWFpbmZvbGRlciwgJ3NlY3JlYScpXHJcbiAgICBjb25zb2xlLmxvZyhzZWxlY2Npb25NRiwgJ3NlY3JlYScpXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzZWxlY2Npb25NRixKU09OLnN0cmluZ2lmeShtYWluZm9sZGVyW3NlbGVjY2lvbk1GXSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlY2FyZ2Fwb3N0cyAobnVtKSB7XHJcbiAgICBjb25zb2xlLmxvZyhtYWluZm9sZGVyWzBdKVxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpdkInKS5pbm5lckhUTUwgPSAnJ1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1haW5mb2xkZXJbbnVtXS5zdXN0b2Rvcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBsZXQgYiA9IG1haW5mb2xkZXJbbnVtXS5zdXN0b2Rvc1tpbmRleF1cclxuICAgICAgICBwb3N0ZWFyVUkoYi50aXRsZSxiLmRlc2NyaXBjaW9uLG1haW5mb2xkZXJbbnVtXS5zdXN0b2Rvcy5pbmRleE9mKG1haW5mb2xkZXJbbnVtXS5zdXN0b2Rvc1tpbmRleF0pKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge3NlaGFjZXVudG9kbywgcG9zdGVhclVJLCBOdWV2YUNhcnBldGEsY29udGFjYXJwZXRhcywgZWxyZXN0bywgcmVjYXJnYXBvc3RzfSIsImltcG9ydCB7IGJpYmxpb2RlaWNvbm9zIH0gZnJvbSBcIi4vaW1naW5kZXhcIlxyXG5pbXBvcnQgeyBjdWFudGFzY2FycGV0YXN0aWVuZW1haW4sIG1haW5mb2xkZXIgfSBmcm9tIFwiLi9tYWluXCJcclxuaW1wb3J0IHsgY29udGFjYXJwZXRhcywgZWxyZXN0bywgTnVldmFDYXJwZXRhIH0gZnJvbSBcIi4vbWFrZWF0b2RvXCJcclxuXHJcbmNvbnN0IGJvdHRvbm5ld2ZvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdib3RvbmNyZWFyY2FycGV0YScpXHJcblxyXG5jb25zdCBub21icmVuZXdmb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTm9tYnJlZGVOdWV2YUNhcnBldGEnKVxyXG5jb25zdCBjZXJyYXJ4ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb25vcy5jZXJyYXJjYXJwZXRhJylcclxuY29uc3QgdWludWV2b2ZvbGRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXdmb2xkZXInKVxyXG5jZXJyYXJ4LnNyYyA9IGJpYmxpb2RlaWNvbm9zWzE1XVxyXG5jZXJyYXJ4LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSk9PntcclxuICAgIGVscmVzdG8uY2xhc3NMaXN0LnRvZ2dsZSgnaW5hY3RpdmUnKVxyXG4gICAgdWludWV2b2ZvbGRlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG59KVxyXG5ib3R0b25uZXdmb2xkZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKT0+e1xyXG4gICAgTnVldmFDYXJwZXRhKG5vbWJyZW5ld2ZvbGRlci52YWx1ZSlcclxuICAgIGVscmVzdG8uY2xhc3NMaXN0LnRvZ2dsZSgnaW5hY3RpdmUnKVxyXG4gICAgdWludWV2b2ZvbGRlci5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG59KVxyXG5mdW5jdGlvbiBuZXdmb2xkZXJ1aSgpe1xyXG4gICAgZWxyZXN0by5jbGFzc0xpc3QudG9nZ2xlKCdpbmFjdGl2ZScpXHJcbiAgICB1aW51ZXZvZm9sZGVyLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbn1cclxuXHJcbmV4cG9ydCB7bmV3Zm9sZGVydWl9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21haW4uanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=