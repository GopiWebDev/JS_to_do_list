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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n  --clr-primary: rgb(54, 112, 199);\r\n  --clr-light: #f4f4f4;\r\n  --clr-dark: #333;\r\n  --clr-warning: rgb(99, 36, 36);\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  font-family: inherit;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: \"Work Sans\", sans-serif;\r\n  font-weight: 300;\r\n  font-size: 1.5rem;\r\n  background-color: var(--clr-primary);\r\n  color: var(--clr-light);\r\n  display: grid;\r\n  grid:\r\n    \"header header header header\" auto \"...... lists  active ......\" auto/1fr minmax(\r\n      100px,\r\n      300px\r\n    )\r\n    minmax(250px, 500px) 1fr;\r\n}\r\n\r\n.title {\r\n  grid-area: header;\r\n  text-align: center;\r\n  font-size: calc(5vw + 2rem);\r\n  font-weight: 900;\r\n  color: rgba(0, 0, 0, 0.1);\r\n  letter-spacing: 2px;\r\n  margin: -0.3em 0 0.5em;\r\n}\r\n\r\n.all-projects {\r\n  grid-area: lists;\r\n}\r\n\r\n.project-list {\r\n  font-size: 1.2rem;\r\n  line-height: 1.7;\r\n  list-style: circle;\r\n  padding-left: 1.1em;\r\n}\r\n\r\n.project-name {\r\n  cursor: pointer;\r\n}\r\n\r\n.project-name:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n}\r\n\r\n.btn {\r\n  cursor: pointer;\r\n  background: 0;\r\n  border: 0;\r\n  padding: 0;\r\n  color: inherit;\r\n}\r\n\r\n.btn.create {\r\n  font-size: 1.5rem;\r\n  font-weight: 500;\r\n  margin-right: 0.25em;\r\n  transition: opacity 250ms ease-in;\r\n}\r\n\r\n.btn.create:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n.btn.delete {\r\n  opacity: 0.7;\r\n  font-size: 1rem;\r\n  transition: color 200ms;\r\n}\r\n\r\n.btn.delete:hover {\r\n  color: var(--clr-warning);\r\n}\r\n\r\n.new {\r\n  background: transparent;\r\n  border: 0;\r\n  color: inherit;\r\n  border-bottom: 1px solid currentColor;\r\n  font-size: inherit;\r\n  outline: none;\r\n  padding: 0.25em;\r\n  transition: border-bottom 150ms ease-in;\r\n  order: 2;\r\n}\r\n\r\n.new::-webkit-input-placeholder {\r\n  opacity: 0.4;\r\n}\r\n\r\n.new:-ms-input-placeholder {\r\n  opacity: 0.4;\r\n}\r\n\r\n.new::-ms-input-placeholder {\r\n  opacity: 0.4;\r\n}\r\n\r\n.new::placeholder {\r\n  opacity: 0.4;\r\n}\r\n\r\n.new:focus {\r\n  border-bottom-width: 3px;\r\n}\r\n\r\n.new:focus::-webkit-input-placeholder {\r\n  opacity: 0.15;\r\n}\r\n\r\n.new:focus:-ms-input-placeholder {\r\n  opacity: 0.15;\r\n}\r\n\r\n.new:focus::-ms-input-placeholder {\r\n  opacity: 0.15;\r\n}\r\n\r\n.new:focus::placeholder {\r\n  opacity: 0.15;\r\n}\r\n\r\n.new.list {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.new.task {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.active-project {\r\n  font-weight: 700;\r\n}\r\n\r\n.todo-list {\r\n  --spacer: 1rem;\r\n  grid-area: active;\r\n  background: var(--clr-light);\r\n  color: var(--clr-dark);\r\n  margin-bottom: 2em;\r\n}\r\n\r\n.todo-header {\r\n  padding: 1em;\r\n  background: #e4e4e4;\r\n  /* display: flex;\r\n  align-items: center;\r\n  justify-content: space-between; */\r\n}\r\n\r\n.list-title {\r\n  margin: 0 1em 0 0;\r\n}\r\n\r\n.task-count {\r\n  margin: 0;\r\n  font-size: 1rem;\r\n}\r\n\r\n.todo-body {\r\n  padding: 1em;\r\n  position: relative;\r\n}\r\n\r\n.new-task-creator .create {\r\n  color: var(--clr-primary);\r\n}\r\n\r\n[type=\"checkbox\"] {\r\n  opacity: 0;\r\n  position: absolute;\r\n}\r\n\r\n.task label {\r\n  display: flex-inline;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.task {\r\n  position: relative;\r\n  margin-bottom: 1.25em;\r\n}\r\n\r\n.task::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: -0.5em;\r\n  height: 1px;\r\n  background: currentColor;\r\n  opacity: 0.1;\r\n}\r\n\r\n.custom-checkbox {\r\n  --size: 0.75em;\r\n  display: inline-block;\r\n  width: var(--size);\r\n  height: var(--size);\r\n  margin-right: var(--size);\r\n  cursor: pointer;\r\n  border: 2px solid currentColor;\r\n  border-radius: 50%;\r\n  -webkit-transform: scale(1);\r\n  transform: scale(1);\r\n  transition: -webkit-transform 300ms ease-in-out;\r\n  transition: transform 300ms ease-in-out;\r\n  transition: transform 300ms ease-in-out, -webkit-transform 300ms ease-in-out;\r\n}\r\n\r\n.task:hover .custom-checkbox,\r\n[type=\"checkbox\"]:focus + label .custom-checkbox {\r\n  -webkit-transform: scale(1.2);\r\n  transform: scale(1.2);\r\n  color: var(--clr-primary);\r\n}\r\n\r\n[type=\"checkbox\"]:checked + label .custom-checkbox {\r\n  background: var(--clr-primary);\r\n  border-color: var(--clr-primary);\r\n  box-shadow: inset 0 0 0px 2px white;\r\n}\r\n\r\n[type=\"checkbox\"]:checked + label {\r\n  opacity: 0.5;\r\n}\r\n\r\n.task label::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  left: 1.5em;\r\n  top: 50%;\r\n  height: 3px;\r\n  background: currentColor;\r\n  -webkit-transform: scaleX(0);\r\n  transform: scaleX(0);\r\n  -webkit-transform-origin: right;\r\n  transform-origin: right;\r\n  transition: -webkit-transform 150ms ease-in-out;\r\n  transition: transform 150ms ease-in-out;\r\n  transition: transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out;\r\n}\r\n\r\n[type=\"checkbox\"]:checked + label::after {\r\n  -webkit-transform: scaleX(1);\r\n  transform: scaleX(1);\r\n  -webkit-transform-origin: left;\r\n  transform-origin: left;\r\n}\r\n\r\n.delete-stuff {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-evenly;\r\n  position: absolute;\r\n  width: 100%;\r\n  left: 0;\r\n  bottom: -35px;\r\n  color: var(--clr-light);\r\n}\r\n\r\n.remaining-section {\r\n  padding-left: 45px;\r\n  font-size: 0.8em;\r\n}\r\n\r\n#new-todo-form {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-rows: repeat(auto, 1fr);\r\n  gap: 0.5em;\r\n}\r\n\r\n#add-todo-btn {\r\n  grid-column: 1 / 3;\r\n}\r\n\r\n.delete-section {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin-top: 0.5em;\r\n}\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js_to_do_list/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://js_to_do_list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://js_to_do_list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://js_to_do_list/./src/styles/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://js_to_do_list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://js_to_do_list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://js_to_do_list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://js_to_do_list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://js_to_do_list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://js_to_do_list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render)\n/* harmony export */ });\n// projects local storage key\r\nconst LOCAL_STORAGE_PROJECT_KEY = \"project.todos\";\r\n// selected porject id local storage key\r\nconst LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = \"project.selectedProjectId\";\r\n\r\n// Projects Elements\r\n// projects ul that contains project lists\r\nconst projectsContainer = document.querySelector(\"[data-projects]\");\r\n// new project form\r\nconst newProjectForm = document.querySelector(\"[data-new-project-form]\");\r\n// new project input element\r\nconst newProjectInput = document.querySelector(\"[data-new-project-input]\");\r\n// delete project button\r\nconst deleteProjectBtn = document.querySelector(\"[data-delete-project-button]\");\r\n\r\n// Todos Elements\r\n// todo header container that displays the project name\r\nconst projectDisplayContainer = document.querySelector(\r\n  \"[data-project-display-container]\"\r\n);\r\n// todo container which container header and all todos\r\nconst projectTitleElement = document.querySelector(\"[data-project-title]\");\r\n// todos container that contains all todos\r\nconst todosContainer = document.querySelector(\"[data-todos]\");\r\n// todo template\r\nconst todoTemplate = document.querySelector(\"#todo-template\");\r\nconst newTodoForm = document.querySelector(\"[data-new-todo-form]\");\r\nconst newTodoNameInput = document.querySelector(\"[data-new-todo-name-input]\");\r\nconst newTodoDescInput = document.querySelector(\"[data-new-todo-desc-input]\");\r\nconst newTodoDueDateInput = document.querySelector(\r\n  \"[data-new-todo-date-input]\"\r\n);\r\nconst newTodoNotesInput = document.querySelector(\"[data-new-todo-notes-input]\");\r\nconst newTodoPriorityInput = document.querySelector(\r\n  \"[data-new-todo-priority-input]\"\r\n);\r\nconst clearCompleteTodoBtn = document.querySelector(\r\n  \"[data-clear-complete-todos-button]\"\r\n);\r\n\r\n// loads projects if already exists in local storage or else sets an empty array\r\nlet projects =\r\n  JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECT_KEY)) || [];\r\n\r\nlet selectedProjectId = localStorage.getItem(\r\n  LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY\r\n);\r\n\r\n// adding event listener on projects container\r\nprojectsContainer.addEventListener(\"click\", (e) => {\r\n  // checking if the clicked element's tagName is li and setting selected project id to clicked li id and save and render\r\n  if (e.target.tagName.toLowerCase() === \"li\") {\r\n    selectedProjectId = e.target.dataset.projectId;\r\n    saveAndRender();\r\n  }\r\n});\r\n\r\ntodosContainer.addEventListener(\"click\", (e) => {\r\n  if (e.target.tagName.toLowerCase() === \"input\") {\r\n    const selectedProject = projects.find(\r\n      (project) => project.id === selectedProjectId\r\n    );\r\n    const selectedTodo = selectedProject.todos.find(\r\n      (todo) => todo.id === e.target.id\r\n    );\r\n    selectedTodo.complete = e.target.checked;\r\n    save();\r\n  }\r\n});\r\n\r\nclearCompleteTodoBtn.addEventListener(\"click\", (e) => {\r\n  const selectedProject = projects.find(\r\n    (project) => project.id === selectedProjectId\r\n  );\r\n  selectedProject.todos = selectedProject.todos.filter(\r\n    (todo) => !todo.complete\r\n  );\r\n  saveAndRender();\r\n});\r\n\r\n// adding click event listener to delete btn\r\ndeleteProjectBtn.addEventListener(\"click\", (e) => {\r\n  // filtering out the projects which is not equal to selectedId and setting it to projects array\r\n  projects = projects.filter((project) => project.id !== selectedProjectId);\r\n  //   setting the selectedProjectId to null because we removed it\r\n  selectedProjectId = null;\r\n  //   save and render removes the selectedId project and loads the page\r\n  saveAndRender();\r\n});\r\n\r\nnewProjectForm.addEventListener(\"submit\", (e) => {\r\n  // preventing default behaviour\r\n  e.preventDefault();\r\n  //  taking input value and assigning to this variable\r\n  const projectName = newProjectInput.value;\r\n  //   checking if projectName is not empty, if empty returns nothing\r\n  if (projectName == null || projectName === \"\") return;\r\n  //   creating new project with the name\r\n  const project = createProject(projectName);\r\n  //   clearing the input field after submit\r\n  newProjectInput.value = null;\r\n  //   adding the project to projects array and save & rendering\r\n  projects.push(project);\r\n  saveAndRender();\r\n});\r\n\r\nnewTodoForm.addEventListener(\"submit\", (e) => {\r\n  // preventing default behaviour\r\n  e.preventDefault();\r\n  //  taking input value and assigning to this variable\r\n  const todoName = newTodoNameInput.value;\r\n  const todoDesc = newTodoDescInput.value;\r\n  const todoDueDate = newTodoDueDateInput.value.toString();\r\n  const todoNotes = newTodoNotesInput.value;\r\n  const todoPriority = newTodoPriorityInput.value;\r\n\r\n  const todoObj = {\r\n    name: todoName,\r\n    description: todoDesc,\r\n    dueDate: todoDueDate,\r\n    notes: todoNotes,\r\n    priority: todoPriority.toUpperCase(),\r\n  };\r\n  //   checking if projectName is not empty, if empty returns nothing\r\n  if (todoName == null || todoName === \"\") return;\r\n  //   creating new project with the name\r\n  const todo = createTodo(todoObj);\r\n  //   clearing the input field after submit\r\n  newTodoNameInput.value = null;\r\n  newTodoDescInput.value = null;\r\n  newTodoDueDateInput.value = null;\r\n  newTodoNotesInput.value = null;\r\n  newTodoPriorityInput.value = \"low\";\r\n  //   adding the project to projects array and save & rendering\r\n\r\n  const selectedProject = projects.find(\r\n    (project) => project.id === selectedProjectId\r\n  );\r\n  selectedProject.todos.push(todo);\r\n  saveAndRender();\r\n});\r\n\r\n// function that returns an object with unique id and todos container set to empty array\r\nfunction createProject(name) {\r\n  return {\r\n    name: name,\r\n    // takes the current time and converts to string\r\n    id: Date.now().toString(),\r\n    todos: [],\r\n  };\r\n}\r\n\r\nfunction createTodo(todo) {\r\n  return {\r\n    id: Date.now().toString(),\r\n    name: todo.name,\r\n    description: todo.description,\r\n    dueDate: todo.dueDate,\r\n    notes: todo.notes,\r\n    priority: todo.priority,\r\n    complete: false,\r\n  };\r\n}\r\n\r\nfunction saveAndRender() {\r\n  save();\r\n  render();\r\n}\r\n\r\nfunction save() {\r\n  // saving the item to local storage\r\n  localStorage.setItem(LOCAL_STORAGE_PROJECT_KEY, JSON.stringify(projects));\r\n  localStorage.setItem(\r\n    LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY,\r\n    selectedProjectId\r\n  );\r\n}\r\n\r\n// renders each project by forEach method\r\nfunction render() {\r\n  // clears already existing elements\r\n  clearElement(projectsContainer);\r\n  //   calling the render projects section\r\n  renderProjects();\r\n\r\n  //  this finds the project which has the id equal to selectedProjectId\r\n  const selectedProject = projects.find(\r\n    (project) => project.id === selectedProjectId\r\n  );\r\n\r\n  if (selectedProjectId == null) {\r\n    projectDisplayContainer.style.display = \"none\";\r\n  } else {\r\n    projectDisplayContainer.style.display = \"\";\r\n    projectTitleElement.innerText = selectedProject.name;\r\n    // clearing existing todos which is html coded\r\n    clearElement(todosContainer);\r\n    // rendering todos only from selected project\r\n    renderTodos(selectedProject);\r\n  }\r\n}\r\n\r\nfunction renderTodos(selectedProject) {\r\n  selectedProject.todos.forEach((todo) => {\r\n    const todoElement = document.importNode(todoTemplate.content, true);\r\n    const checkbox = todoElement.querySelector(\"input\");\r\n    checkbox.id = todo.id;\r\n    checkbox.checked = todo.complete;\r\n    const label = todoElement.querySelector(\"label\");\r\n    label.htmlFor = todo.id;\r\n    const priority = todoElement.querySelector(\".priority\");\r\n    priority.innerText = `Priority: ${todo.priority}`;\r\n\r\n    if (todo.priority.toLowerCase() === \"high\") {\r\n      label.style.color = \"red\";\r\n      priority.style.color = \"red\";\r\n    }\r\n    if (todo.priority.toLowerCase() === \"medium\") {\r\n      label.style.color = \"orange\";\r\n      priority.style.color = \"orange\";\r\n    }\r\n    if (todo.priority.toLowerCase() === \"low\") {\r\n      label.style.color = \"darkgreen\";\r\n      priority.style.color = \"darkgreen\";\r\n    }\r\n    label.append(todo.name);\r\n    const description = todoElement.querySelector(\".description\");\r\n    description.innerText = `Description: ${todo.description}`;\r\n    const dueDate = todoElement.querySelector(\".due-date\");\r\n    dueDate.innerText = `Due Date: ${todo.dueDate}`;\r\n    const notes = todoElement.querySelector(\".notes\");\r\n    notes.innerText = `Notes: ${todo.notes}`;\r\n    todosContainer.appendChild(todoElement);\r\n  });\r\n}\r\n\r\nfunction renderProjects() {\r\n  projects.forEach((project) => {\r\n    const projectElement = document.createElement(\"li\");\r\n    // setting data id for selecting purpose\r\n    projectElement.dataset.projectId = project.id;\r\n    projectElement.classList.add(\"project-name\");\r\n    projectElement.innerText = project.name;\r\n    if (project.id === selectedProjectId) {\r\n      projectElement.classList.add(\"active-project\");\r\n    }\r\n    // appending project to projects contianer\r\n    projectsContainer.appendChild(projectElement);\r\n  });\r\n}\r\n\r\n// clears if already any elemnts exists like html coded elements\r\nfunction clearElement(element) {\r\n  // while loop checks if first child exists and removes it\r\n  while (element.firstChild) {\r\n    element.removeChild(element.firstChild);\r\n  }\r\n}\r\n\r\n// calling the render function\r\n\r\n\r\n\n\n//# sourceURL=webpack://js_to_do_list/./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n\r\n\r\n\r\n(0,_functions__WEBPACK_IMPORTED_MODULE_0__.render)();\r\n\n\n//# sourceURL=webpack://js_to_do_list/./src/index.js?");

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