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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// const inter = Inter({ subsets: ['latin']})\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [weather, setWeather] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [temp, setTemp] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [feelsLike, setFeelsLike] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [gust, setGust] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    var apiKey = \"ff8da5a2590a2801d29b651427a31d17\";\n    var lang = \"en\";\n    var units = \"metric\";\n    const url = \"https://api.openweathermap.org/data/2.5/weather?q=\".concat(location, \"&units=\").concat(units, \"&appid=\").concat(apiKey, \"&lang=\").concat(lang);\n    const searchLocation = (event)=>{\n        if (event.key === \"Enter\") {\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(url).then((response)=>{\n                console.clear();\n                setData(response.data);\n                console.log(response.data);\n                setWeather(response.data.weather);\n                setErrorMessage(\"\");\n                setTemp(response.data.main.temp);\n                setFeelsLike(response.data.main.feels_like);\n                setGust(response.data.wind.gust);\n                console.log(feelsLike);\n            }).catch((err)=>{\n                console.log(err);\n                setErrorMessage(\"Please enter another location\");\n                setData({});\n                setWeather();\n                setTemp();\n                setFeelsLike();\n                setGust();\n            });\n            setLocation(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Whats the weather?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alexsomerville/Desktop/weather-app/pages/index.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alexsomerville/Desktop/weather-app/pages/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alexsomerville/Desktop/weather-app/pages/index.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alexsomerville/Desktop/weather-app/pages/index.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),\n                        value: location,\n                        onChange: (event)=>setLocation(event.target.value),\n                        placeholder: \"Enter location\",\n                        onKeyDown: searchLocation,\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/Users/alexsomerville/Desktop/weather-app/pages/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),\n                        children: [\n                            errorMessage,\n                            data.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/alexsomerville/Desktop/weather-app/pages/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    weather && weather.map((w, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().text),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: w.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/alexsomerville/Desktop/weather-app/pages/index.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: w.main\n                                }, void 0, false, {\n                                    fileName: \"/Users/alexsomerville/Desktop/weather-app/pages/index.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        temp,\n                                        \" \\xb0C\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alexsomerville/Desktop/weather-app/pages/index.js\",\n                                    lineNumber: 77,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        feelsLike,\n                                        \" \\xb0C\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alexsomerville/Desktop/weather-app/pages/index.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        gust,\n                                        \" m/s\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/alexsomerville/Desktop/weather-app/pages/index.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/alexsomerville/Desktop/weather-app/pages/index.js\",\n                            lineNumber: 74,\n                            columnNumber: 15\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/alexsomerville/Desktop/weather-app/pages/index.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().footer),\n                children: \"\\xa9 2023 Alex Somerville \\uD83D\\uDDEF️\"\n            }, void 0, false, {\n                fileName: \"/Users/alexsomerville/Desktop/weather-app/pages/index.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/alexsomerville/Desktop/weather-app/pages/index.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"gZ8MMHyGLi6P6GMAoMDWIZ+t+WM=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs4Q0FDWCw4REFBQ3dCOzt3Q0FBS3RCO3dDQUFVOzs7Ozs7OzhDQUNoQiw4REFBQ3NCOzt3Q0FBS3BCO3dDQUFLOzs7Ozs7OzsyQkFMcUJ1Qzs7Ozs7b0JBUXRDOzs7Ozs7OzBCQUlKLDhEQUFDRztnQkFBT3JCLFdBQVdyQyx1RUFBYTswQkFBRTs7Ozs7Ozs7Ozs7O0FBS3hDLENBQUM7R0FsRnVCRztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuLy8gY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXX0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3dlYXRoZXIsIHNldFdlYXRoZXJdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcblxuICBjb25zdCBbdGVtcCwgc2V0VGVtcF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtmZWVsc0xpa2UsIHNldEZlZWxzTGlrZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtndXN0LCBzZXRHdXN0XSA9IHVzZVN0YXRlKCcnKTtcblxuICB2YXIgYXBpS2V5ID0gXCJmZjhkYTVhMjU5MGEyODAxZDI5YjY1MTQyN2EzMWQxN1wiO1xuICB2YXIgbGFuZyA9IFwiZW5cIjtcbiAgdmFyIHVuaXRzID0gXCJtZXRyaWNcIjtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mdW5pdHM9JHt1bml0c30mYXBwaWQ9JHthcGlLZXl9Jmxhbmc9JHtsYW5nfWA7XG5cbiAgY29uc3Qgc2VhcmNoTG9jYXRpb24gPSAoZXZlbnQpID0+IHtcbiAgICBpZihldmVudC5rZXkgPT09IFwiRW50ZXJcIil7XG4gICAgICBheGlvcy5nZXQodXJsKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuICAgICAgICBzZXRXZWF0aGVyKHJlc3BvbnNlLmRhdGEud2VhdGhlcilcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpXG4gICAgICAgIHNldFRlbXAocmVzcG9uc2UuZGF0YS5tYWluLnRlbXApXG4gICAgICAgIHNldEZlZWxzTGlrZShyZXNwb25zZS5kYXRhLm1haW4uZmVlbHNfbGlrZSlcbiAgICAgICAgc2V0R3VzdChyZXNwb25zZS5kYXRhLndpbmQuZ3VzdClcbiAgICAgICAgY29uc29sZS5sb2coZmVlbHNMaWtlKVxuICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJQbGVhc2UgZW50ZXIgYW5vdGhlciBsb2NhdGlvblwiKVxuICAgICAgICBzZXREYXRhKHt9KVxuICAgICAgICBzZXRXZWF0aGVyKClcbiAgICAgICAgc2V0VGVtcCgpXG4gICAgICAgIHNldEZlZWxzTGlrZSgpXG4gICAgICAgIHNldEd1c3QoKVxuICAgICAgfSlcbiAgICAgIHNldExvY2F0aW9uKCcnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+V2hhdHMgdGhlIHdlYXRoZXI/PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgdmFsdWU9e2xvY2F0aW9ufVxuICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRMb2NhdGlvbihldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgbG9jYXRpb25cIlxuICAgICAgICAgIG9uS2V5RG93bj17c2VhcmNoTG9jYXRpb259XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAge2Vycm9yTWVzc2FnZX1cbiAgICAgICAge2RhdGEubmFtZX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICB3ZWF0aGVyICYmIHdlYXRoZXIubWFwKCh3LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxkaXY+e3cuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj57dy5tYWlufTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+e3RlbXB9IMKwQzwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+e2ZlZWxzTGlrZX0gwrBDPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj57Z3VzdH0gbS9zPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICAgICDCqSAyMDIzIEFsZXggU29tZXJ2aWxsZSDwn5ev77iPXG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsImF4aW9zIiwidXNlU3RhdGUiLCJIb21lIiwiZGF0YSIsInNldERhdGEiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwid2VhdGhlciIsInNldFdlYXRoZXIiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJ0ZW1wIiwic2V0VGVtcCIsImZlZWxzTGlrZSIsInNldEZlZWxzTGlrZSIsImd1c3QiLCJzZXRHdXN0IiwiYXBpS2V5IiwibGFuZyIsInVuaXRzIiwidXJsIiwic2VhcmNoTG9jYXRpb24iLCJldmVudCIsImtleSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJjbGVhciIsImxvZyIsIm1haW4iLCJmZWVsc19saWtlIiwid2luZCIsImNhdGNoIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwib25LZXlEb3duIiwidHlwZSIsIm1hcCIsInciLCJpbmRleCIsInRleHQiLCJkZXNjcmlwdGlvbiIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});