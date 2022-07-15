/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::after,\\n*::before {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n  background-color: rgb(240, 240, 240);\\n  padding: 1rem;\\n}\\n\\n.todo-box {\\n  max-width: 70rem;\\n  background-color: white;\\n  margin: auto;\\n  margin-top: 10%;\\n  border-radius: 1rem;\\n  overflow: hidden;\\n}\\n\\n.header-holder {\\n  padding: 1.5rem;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.header {\\n  font-size: 3rem;\\n  text-align: center;\\n}\\n\\n.form {\\n  width: 100%;\\n}\\n\\n.input-holder {\\n  width: 100%;\\n  padding: 1.5rem;\\n  display: flex;\\n  border-bottom: 1px solid lightblue;\\n  transition: all 0.3s ease;\\n}\\n\\n.bg-active {\\n  background-color: rgb(215, 249, 250);\\n}\\n\\n.input {\\n  font-size: 2rem;\\n  border: none;\\n  outline: none;\\n  width: 100%;\\n}\\n\\n.checkbox {\\n  font-size: 2rem;\\n  padding: 1rem 1.2rem;\\n  color: rgb(142, 186, 201);\\n  transition: all 0.3s ease;\\n  cursor: pointer;\\n  align-self: center;\\n  border-radius: 50%;\\n}\\n\\n.checkbox:hover {\\n  background-color: rgba(238, 216, 144, 0.295);\\n}\\n\\n.icon {\\n  font-size: 2rem;\\n  padding: 1rem 1.2rem;\\n  color: rgb(172, 73, 73);\\n  transition: all 0.3s ease;\\n  cursor: pointer;\\n  align-self: flex-start;\\n  display: none;\\n}\\n\\n.enterIcon {\\n  font-size: 2rem;\\n  padding: 1rem 1.2rem;\\n  color: rgb(111, 172, 192);\\n  transition: all 0.3s ease;\\n  cursor: pointer;\\n}\\n\\n.enterIcon:hover {\\n  color: black;\\n}\\n\\n.visible {\\n  display: block;\\n}\\n\\n.edit {\\n  font-size: 2rem;\\n  padding: 1rem 1.8rem;\\n  color: rgb(101, 167, 189);\\n  transition: all 0.3s ease;\\n  cursor: pointer;\\n  align-self: flex-start;\\n  border-radius: 50%;\\n}\\n\\n.edit:hover {\\n  color: black;\\n}\\n\\n.hide {\\n  display: none;\\n}\\n\\n\\n@keyframes refresh {\\n  from {\\n    transform: rotate(0deg);\\n  }\\n\\n  to {\\n    transform: rotate(360deg);\\n  }\\n}\\n\\n.header-icon:hover {\\n  background-color: rgba(0, 255, 255, 0.26);\\n  animation: refresh 0.7s 1;\\n}\\n\\n.rotate {\\n  transform: rotate(90deg);\\n}\\n\\n.icon:hover {\\n  color: black;\\n  background-color: rgba(238, 216, 144, 0.295);\\n  border-radius: 50%;\\n}\\n\\n.item {\\n  font-size: 2rem;\\n}\\n\\n.task {\\n  font-size: 2.3rem;\\n  width: 100%;\\n  align-self: center;\\n}\\n\\n.taskTitle {\\n  background-color: transparent;\\n  border: none;\\n  outline: none;\\n}\\n\\n.focused {\\n  color: rgb(0, 102, 255);\\n}\\n\\n.done {\\n  color: rgb(161, 161, 161);\\n  text-decoration: line-through;\\n}\\n\\n.trash {\\n  align-self: center;\\n}\\n\\n.trash:hover {\\n  color: red;\\n}\\n\\n.fa-check {\\n  color: lightgreen;\\n}\\n\\n.footer {\\n  /* background-image: linear-gradient(0deg, orange, 10%, rgb(146, 206, 255)); */\\n \\n  padding: 3rem 0;\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.delete {\\n  cursor: pointer;\\n  font-size: 1.8rem;\\n  color: rgb(201, 131, 1);\\n  transition: all 0.2s ease;\\n}\\n\\n.delete:hover {\\n  color: red;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/check_task.js":
/*!***************************!*\
  !*** ./src/check_task.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkTask\": () => (/* binding */ checkTask),\n/* harmony export */   \"removeCompleted\": () => (/* binding */ removeCompleted)\n/* harmony export */ });\nfunction checkTask(item, arr) {\n  if (arr[item].completed === false) {\n    arr[item].completed = true;\n    return arr;\n  }\n  arr[item].completed = false;\n  return arr;\n}\n\nfunction removeCompleted(arr) {\n  const newList = arr.filter((obj) => obj.completed === false);\n  return newList;\n}\n\n//# sourceURL=webpack://to-do-list/./src/check_task.js?");

/***/ }),

/***/ "./src/crud.js":
/*!*********************!*\
  !*** ./src/crud.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"check\": () => (/* binding */ check),\n/* harmony export */   \"display\": () => (/* binding */ display),\n/* harmony export */   \"ifCheckedEdit\": () => (/* binding */ ifCheckedEdit),\n/* harmony export */   \"ifCheckedTrash\": () => (/* binding */ ifCheckedTrash),\n/* harmony export */   \"ifDone\": () => (/* binding */ ifDone),\n/* harmony export */   \"reOrder\": () => (/* binding */ reOrder),\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _check_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check_task.js */ \"./src/check_task.js\");\n\n\nfunction check(arr, index) {\n  if (arr[index].completed) return 'fa fa-check';\n  return 'fa fa-square-o';\n}\n\nfunction ifDone(arr, index) {\n  if (arr[index].completed) return 'task done';\n  return 'task';\n}\n\nfunction ifCheckedTrash(arr, index) {\n  if (arr[index].completed) return 'fa fa-trash icon trash visible';\n  return 'fa fa-trash icon trash';\n}\n\nfunction ifCheckedEdit(arr, index) {\n  if (arr[index].completed) return 'fa fa-ellipsis-v edit hide';\n  return 'fa fa-ellipsis-v edit';\n}\n\nfunction store(arr) {\n  localStorage.setItem('Task List', JSON.stringify(arr));\n}\n\nfunction reOrder(arr) {\n  for (let i = 0; i < arr.length; i += 1) {\n    const { index } = arr[i];\n    if (index !== i + 1) {\n      arr[i].index = i + 1;\n    }\n  }\n}\n\nfunction display(arr, parent) {\n  parent.innerHTML = '';\n  for (let i = 0; i < arr.length; i += 1) {\n    const complete = check(arr, i);\n    const done = ifDone(arr, i);\n    const trashcheck = ifCheckedTrash(arr, i);\n    const editCheck = ifCheckedEdit(arr, i);\n    const item = document.createElement('li');\n    item.classList = 'item input-holder';\n    item.id = `item${i}`;\n    item.innerHTML = `\n                <i class=' checkbox ${complete} ' id = \"check${i}\"></i>\n                <input id = \"input${i}\" type = \"text\" readOnly class=\"taskTitle ${done}\" value = \"${arr[i].description}\" >\n                <i class=\"${trashcheck}\" id = \"trash${i}\" data-id = '${i}'></i>\n                <i class=\"${editCheck}\" id = \"edit${i}\"></i>`;\n    parent.appendChild(item);\n  }\n  /// remove buttons\n  const rmvBtnList = document.querySelectorAll('.trash');\n  rmvBtnList.forEach((element) => {\n    element.addEventListener('click', () => {\n      arr.splice(element.dataset.id, 1);\n      reOrder(arr);\n      localStorage.setItem('Task List', JSON.stringify(arr));\n      display(arr, parent);\n    });\n  });\n\n  /// /   update task descriptions function\n  function updateTask(arr, parent, id, positionID) {\n    const updatedText = document.getElementById(id).value;\n    if (updatedText !== '') {\n      arr[positionID].description = updatedText;\n      display(arr, parent);\n    }\n  }\n\n  /// /  editing action event listener\n  const editable = document.querySelectorAll('.edit');\n  editable.forEach((element) => {\n    element.addEventListener('click', () => {\n      const itemId = (element.id).charAt((element.id).length - 1);\n      for (let i = 0; i < arr.length; i += 1) {\n        if (i !== itemId) {\n          const editIcon = document.getElementById(`edit${i}`);\n          const input = document.getElementById(`input${i}`);\n          const trash = document.getElementById(`trash${i}`);\n          const item = document.getElementById(`item${i}`);\n          editIcon.classList.remove('rotate');\n          trash.classList.remove('visible');\n          item.classList.remove('bg-active');\n          input.classList.remove('focused');\n          input.readOnly = true;\n        }\n      }\n      element.classList.toggle('rotate');\n      const input = document.getElementById(`input${itemId}`);\n      const trash = document.getElementById(`trash${itemId}`);\n      const item = document.getElementById(`item${itemId}`);\n      trash.classList.toggle('visible');\n      item.classList.toggle('bg-active');\n      input.readOnly = false;\n      input.classList.toggle('focused');\n      input.addEventListener('keydown', (pressed) => {\n        if (pressed.key === 'Enter') {\n          updateTask(arr, parent, `input${itemId}`, itemId);\n          localStorage.setItem('Task List', JSON.stringify(arr));\n          display(arr, parent);\n        }\n      });\n    });\n  });\n\n  /// // check box event listener\n  const checkboxList = document.querySelectorAll('.checkbox');\n  checkboxList.forEach((item) => {\n    item.addEventListener('click', () => {\n      const itemId = (item.id).charAt((item.id).length - 1);\n      (0,_check_task_js__WEBPACK_IMPORTED_MODULE_0__.checkTask)(itemId, arr, parent);\n      store(arr);\n      display(arr, parent);\n    });\n  });\n}\n\n/// //////   addTask function\nfunction addTask(arr, id, parent) {\n  if (document.getElementById(id).value !== '') {\n    const record = {\n      description: document.getElementById(id).value,\n      completed: false,\n      index: arr.length + 1,\n    };\n    arr.push(record);\n    localStorage.setItem('Task List', JSON.stringify(arr));\n    display(arr, parent);\n    document.getElementById(id).value = '';\n  }\n}\n\n//# sourceURL=webpack://to-do-list/./src/crud.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _crud_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crud.js */ \"./src/crud.js\");\n/* harmony import */ var _check_task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check_task.js */ \"./src/check_task.js\");\n\n\n\n\nlet todo = [];\n\nconst element = document.createElement('div');\nelement.classList = 'todo-box';\ndocument.body.appendChild(element);\n\nconst headerHolder = document.createElement('div');\nheaderHolder.classList = 'header-holder';\nelement.appendChild(headerHolder);\n\n// const refresh = document.createElement('a');\n// refresh.classList = 'fa fa-refresh header-icon';\n// refresh.href = './index.html';\n// headerHolder.appendChild(refresh);\n\nconst title = document.createElement('h1');\ntitle.classList = 'header';\ntitle.innerHTML = 'Today\\'s To do';\nheaderHolder.appendChild(title);\n\nconst inputHolder = document.createElement('div');\ninputHolder.classList = 'input-holder';\nelement.appendChild(inputHolder);\n\nconst input = document.createElement('input');\ninput.id = 'input';\ninput.placeholder = 'Add to your list...';\ninput.classList = 'input';\ninputHolder.appendChild(input);\n\nconst enterIcon = document.createElement('i');\nenterIcon.id = 'enter';\nenterIcon.classList = 'fa fa-level-down enterIcon rotate';\ninputHolder.appendChild(enterIcon);\n\nconst todoList = document.createElement('ul');\ntodoList.classList = 'form';\nelement.appendChild(todoList);\n\nenterIcon.addEventListener('click', () => {\n  (0,_crud_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(todo, input.id, todoList);\n  (0,_crud_js__WEBPACK_IMPORTED_MODULE_1__.display)(todo, todoList);\n});\n\ninput.addEventListener('keydown', (pressed) => {\n  if (pressed.key === 'Enter') {\n    (0,_crud_js__WEBPACK_IMPORTED_MODULE_1__.addTask)(todo, input.id, todoList);\n    (0,_crud_js__WEBPACK_IMPORTED_MODULE_1__.display)(todo, todoList);\n  }\n});\n\nconst footer = document.createElement('div');\nfooter.classList = 'footer';\nelement.appendChild(footer);\n\n/// // delete all completed tasks\nconst listDelete = document.createElement('a');\nlistDelete.classList = 'delete';\nlistDelete.innerHTML = 'Clear all completed';\nlistDelete.addEventListener('click', () => {\n  const clearedList = (0,_check_task_js__WEBPACK_IMPORTED_MODULE_2__.removeCompleted)(todo);\n  todo = [...clearedList];\n  (0,_crud_js__WEBPACK_IMPORTED_MODULE_1__.reOrder)(todo);\n  (0,_crud_js__WEBPACK_IMPORTED_MODULE_1__.store)(todo);\n  (0,_crud_js__WEBPACK_IMPORTED_MODULE_1__.display)(todo, todoList);\n});\nfooter.appendChild(listDelete);\n\n/// / local storage\nconst localStoragetaskList = JSON.parse(localStorage.getItem('Task List'));\nif (localStoragetaskList != null) {\n  localStoragetaskList.forEach((element) => {\n    todo.push(element);\n  });\n  (0,_crud_js__WEBPACK_IMPORTED_MODULE_1__.display)(todo, todoList);\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;