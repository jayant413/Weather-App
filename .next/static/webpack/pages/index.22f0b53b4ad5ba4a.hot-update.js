"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./Components/weatherFeed.jsx":
/*!************************************!*\
  !*** ./Components/weatherFeed.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var human_readable_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! human-readable-time */ \"./node_modules/human-readable-time/index.js\");\n/* harmony import */ var human_readable_time__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(human_readable_time__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst WeatherFeed = (param)=>{\n    let { condition, info } = param;\n    _s();\n    const [session, setSession] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"AM\");\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (human_readable_time__WEBPACK_IMPORTED_MODULE_1___default()(new Date(), \"%hh%\") > 12) {\n            setSession(\"PM\");\n        } else {\n            setSession(\"AM\");\n        }\n    }, [\n        info\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-white  w-[100vw] hidden md:flex h-[90vh] flex-col\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold drop-shadow-2xl text-gray-600 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"card-title\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"NATIONAL WEATHER\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jay\\\\Downloads\\\\Desktop\\\\weather-app\\\\Components\\\\weatherFeed.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Jay\\\\Downloads\\\\Desktop\\\\weather-app\\\\Components\\\\weatherFeed.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Jay\\\\Downloads\\\\Desktop\\\\weather-app\\\\Components\\\\weatherFeed.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card-details mt-28   \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" text-gray-800 font-semibold\",\n                        children: \"Weather Forecast\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jay\\\\Downloads\\\\Desktop\\\\weather-app\\\\Components\\\\weatherFeed.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[60px] text-white\",\n                        children: condition\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jay\\\\Downloads\\\\Desktop\\\\weather-app\\\\Components\\\\weatherFeed.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"text-[15px] text-white\",\n                                    children: human_readable_time__WEBPACK_IMPORTED_MODULE_1___default()(new Date(), \"%DD%-%MM%-%YYYY% \")\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jay\\\\Downloads\\\\Desktop\\\\weather-app\\\\Components\\\\weatherFeed.jsx\",\n                                    lineNumber: 25,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"text-[15px] text-white\",\n                                    children: human_readable_time__WEBPACK_IMPORTED_MODULE_1___default()(new Date(), \"%day%\")\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Jay\\\\Downloads\\\\Desktop\\\\weather-app\\\\Components\\\\weatherFeed.jsx\",\n                                    lineNumber: 28,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"text-[15px] text-white\",\n                                    children: [\n                                        human_readable_time__WEBPACK_IMPORTED_MODULE_1___default()(new Date(), \"%hh%:%mm%\"),\n                                        \" \\xa0\",\n                                        session\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\Jay\\\\Downloads\\\\Desktop\\\\weather-app\\\\Components\\\\weatherFeed.jsx\",\n                                    lineNumber: 31,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Jay\\\\Downloads\\\\Desktop\\\\weather-app\\\\Components\\\\weatherFeed.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jay\\\\Downloads\\\\Desktop\\\\weather-app\\\\Components\\\\weatherFeed.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-gray-300 text-sm\",\n                        children: \"Your go-to web app for real-time weather updates. Get instant access to accurate temperature, humidity, wind speed, and more for any location. With a user-friendly interface and customizable features, Weatherly keeps you informed and prepared for any weather conditions.\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Jay\\\\Downloads\\\\Desktop\\\\weather-app\\\\Components\\\\weatherFeed.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Jay\\\\Downloads\\\\Desktop\\\\weather-app\\\\Components\\\\weatherFeed.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Jay\\\\Downloads\\\\Desktop\\\\weather-app\\\\Components\\\\weatherFeed.jsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, undefined);\n};\n_s(WeatherFeed, \"IEWGUfVJ5lungrnDIk9dgqPdCNY=\");\n_c = WeatherFeed;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WeatherFeed);\nvar _c;\n$RefreshReg$(_c, \"WeatherFeed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL3dlYXRoZXJGZWVkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBc0M7QUFDTTtBQUU1QyxNQUFNRyxjQUFjO1FBQUMsRUFBRUMsU0FBUyxFQUFFQyxJQUFJLEVBQUU7O0lBQ3RDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN2Q0QsZ0RBQVNBLENBQUM7UUFDUixJQUFJRCwwREFBR0EsQ0FBQyxJQUFJUSxRQUFRLFVBQVUsSUFBSTtZQUNoQ0QsV0FBVztRQUNiLE9BQU87WUFDTEEsV0FBVztRQUNiO0lBQ0YsR0FBRztRQUFDRjtLQUFLO0lBQ1QscUJBQ0UsOERBQUNJO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUdELFdBQVU7OEJBQ1osNEVBQUNFO2tDQUFHOzs7Ozs7Ozs7Ozs7Ozs7OzBCQUdSLDhEQUFDSDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUErQjs7Ozs7O2tDQUM5Qyw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQTBCTjs7Ozs7O2tDQUN6Qyw4REFBQ0s7a0NBQ0MsNEVBQUNFOzs4Q0FDQyw4REFBQ0M7b0NBQUdGLFdBQVU7OENBQ1hWLDBEQUFHQSxDQUFDLElBQUlRLFFBQVE7Ozs7Ozs4Q0FFbkIsOERBQUNJO29DQUFHRixXQUFVOzhDQUNYViwwREFBR0EsQ0FBQyxJQUFJUSxRQUFROzs7Ozs7OENBRW5CLDhEQUFDSTtvQ0FBR0YsV0FBVTs7d0NBQ1hWLDBEQUFHQSxDQUFDLElBQUlRLFFBQVE7d0NBQWE7d0NBQzdCRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUlQLDhEQUFDRzt3QkFBSUMsV0FBVTtrQ0FBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVMvQztHQTFDTVA7S0FBQUE7QUE0Q04sK0RBQWVBLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy93ZWF0aGVyRmVlZC5qc3g/MWMwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaHJ0IGZyb20gXCJodW1hbi1yZWFkYWJsZS10aW1lXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFdlYXRoZXJGZWVkID0gKHsgY29uZGl0aW9uLCBpbmZvIH0pID0+IHtcclxuICBjb25zdCBbc2Vzc2lvbiwgc2V0U2Vzc2lvbl0gPSB1c2VTdGF0ZShcIkFNXCIpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaHJ0KG5ldyBEYXRlKCksIFwiJWhoJVwiKSA+IDEyKSB7XHJcbiAgICAgIHNldFNlc3Npb24oXCJQTVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFNlc3Npb24oXCJBTVwiKTtcclxuICAgIH1cclxuICB9LCBbaW5mb10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgIHctWzEwMHZ3XSBoaWRkZW4gbWQ6ZmxleCBoLVs5MHZoXSBmbGV4LWNvbFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCBkcm9wLXNoYWRvdy0yeGwgdGV4dC1ncmF5LTYwMCBcIj5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxyXG4gICAgICAgICAgPGxpPk5BVElPTkFMIFdFQVRIRVI8L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZGV0YWlscyBtdC0yOCAgIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRleHQtZ3JheS04MDAgZm9udC1zZW1pYm9sZFwiPldlYXRoZXIgRm9yZWNhc3Q8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtWzYwcHhdIHRleHQtd2hpdGVcIj57Y29uZGl0aW9ufTwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0ZXh0LVsxNXB4XSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAge2hydChuZXcgRGF0ZSgpLCBcIiVERCUtJU1NJS0lWVlZWSUgXCIpfVxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGV4dC1bMTVweF0gdGV4dC13aGl0ZVwiPlxyXG4gICAgICAgICAgICAgIHtocnQobmV3IERhdGUoKSwgXCIlZGF5JVwiKX1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRleHQtWzE1cHhdIHRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAgICB7aHJ0KG5ldyBEYXRlKCksIFwiJWhoJTolbW0lXCIpfSAmbmJzcDtcclxuICAgICAgICAgICAgICB7c2Vzc2lvbn1cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIHRleHQtc21cIj5cclxuICAgICAgICAgIFlvdXIgZ28tdG8gd2ViIGFwcCBmb3IgcmVhbC10aW1lIHdlYXRoZXIgdXBkYXRlcy4gR2V0IGluc3RhbnQgYWNjZXNzXHJcbiAgICAgICAgICB0byBhY2N1cmF0ZSB0ZW1wZXJhdHVyZSwgaHVtaWRpdHksIHdpbmQgc3BlZWQsIGFuZCBtb3JlIGZvciBhbnlcclxuICAgICAgICAgIGxvY2F0aW9uLiBXaXRoIGEgdXNlci1mcmllbmRseSBpbnRlcmZhY2UgYW5kIGN1c3RvbWl6YWJsZSBmZWF0dXJlcyxcclxuICAgICAgICAgIFdlYXRoZXJseSBrZWVwcyB5b3UgaW5mb3JtZWQgYW5kIHByZXBhcmVkIGZvciBhbnkgd2VhdGhlciBjb25kaXRpb25zLlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyRmVlZDtcclxuIl0sIm5hbWVzIjpbImhydCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiV2VhdGhlckZlZWQiLCJjb25kaXRpb24iLCJpbmZvIiwic2Vzc2lvbiIsInNldFNlc3Npb24iLCJEYXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwidWwiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/weatherFeed.jsx\n"));

/***/ })

});