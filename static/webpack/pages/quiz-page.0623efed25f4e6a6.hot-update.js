"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/quiz-page",{

/***/ "./components/Results.js":
/*!*******************************!*\
  !*** ./components/Results.js ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Results)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_QuizContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/QuizContext */ \"./context/QuizContext.js\");\n/* harmony import */ var _pages_api_PlayerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/api/PlayerContext */ \"./pages/api/PlayerContext.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui/button */ \"./components/ui/button.jsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n // Importera QuizContext\n // Importera PlayerContext\n\n // Importera useRouter\n\nfunction Results() {\n    _s();\n    const { questions, resetGame, score, userAnswers } = (0,_context_QuizContext__WEBPACK_IMPORTED_MODULE_1__.useTrivia)(); // Hämta userAnswers från TriviaContext\n    const { playerName, addHighScore } = (0,_pages_api_PlayerContext__WEBPACK_IMPORTED_MODULE_2__.usePlayerContext)(); // Hämta spelardata från PlayerContext\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)(); // Använd useRouter för routning\n    // Spara högsta poäng när komponenten renderas\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)({\n        \"Results.useEffect\": ()=>{\n            if (playerName && score > 0) {\n                addHighScore(playerName, score); // Spara spelarens namn och poäng\n            }\n        }\n    }[\"Results.useEffect\"], [\n        playerName,\n        score,\n        addHighScore\n    ]);\n    // Hantera \"Restart Quiz\"-knappen\n    const handleRestartQuiz = ()=>{\n        resetGame(); // Återställ quizet\n        router.push('/'); // Omdirigera till quiz-sidan\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-3xl mx-auto m-10 p-20 border rounded-lg \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-2xl font-semibold text-center mb-4 pb-4\",\n                children: \"Quiz Results\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\TAMRE\\\\projects\\\\schoolProjects\\\\quiz-app\\\\components\\\\Results.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-gray-700\",\n                children: [\n                    \"You answered \",\n                    score,\n                    \" out of \",\n                    questions.length,\n                    \" questions correctly.\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\TAMRE\\\\projects\\\\schoolProjects\\\\quiz-app\\\\components\\\\Results.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        className: \"text-xl font-semibold mb-4\",\n                        children: \"Your Answers:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\TAMRE\\\\projects\\\\schoolProjects\\\\quiz-app\\\\components\\\\Results.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    questions.map((question, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"font-medium\",\n                                    children: question.question\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\TAMRE\\\\projects\\\\schoolProjects\\\\quiz-app\\\\components\\\\Results.js\",\n                                    lineNumber: 40,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-600\",\n                                    children: [\n                                        \"Your answer: \",\n                                        userAnswers[index],\n                                        userAnswers[index] === question.correct_answer ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-green-600\",\n                                            children: \" (Correct)\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\TAMRE\\\\projects\\\\schoolProjects\\\\quiz-app\\\\components\\\\Results.js\",\n                                            lineNumber: 44,\n                                            columnNumber: 17\n                                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-red-600\",\n                                            children: \" (Incorrect)\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\TAMRE\\\\projects\\\\schoolProjects\\\\quiz-app\\\\components\\\\Results.js\",\n                                            lineNumber: 46,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\TAMRE\\\\projects\\\\schoolProjects\\\\quiz-app\\\\components\\\\Results.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-600\",\n                                    children: [\n                                        \"Correct answer: \",\n                                        question.correct_answer\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\TAMRE\\\\projects\\\\schoolProjects\\\\quiz-app\\\\components\\\\Results.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"C:\\\\Users\\\\TAMRE\\\\projects\\\\schoolProjects\\\\quiz-app\\\\components\\\\Results.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\TAMRE\\\\projects\\\\schoolProjects\\\\quiz-app\\\\components\\\\Results.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10 text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                    onClick: handleRestartQuiz,\n                    children: \"Restart Quiz\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\TAMRE\\\\projects\\\\schoolProjects\\\\quiz-app\\\\components\\\\Results.js\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\TAMRE\\\\projects\\\\schoolProjects\\\\quiz-app\\\\components\\\\Results.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\TAMRE\\\\projects\\\\schoolProjects\\\\quiz-app\\\\components\\\\Results.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Results, \"Zhsae+Shsla7y0nDQWvH354HdMo=\", false, function() {\n    return [\n        _context_QuizContext__WEBPACK_IMPORTED_MODULE_1__.useTrivia,\n        _pages_api_PlayerContext__WEBPACK_IMPORTED_MODULE_2__.usePlayerContext,\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Results;\nvar _c;\n$RefreshReg$(_c, \"Results\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jlc3VsdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ21ELENBQUMsd0JBQXdCO0FBQ2QsQ0FBQywwQkFBMEI7QUFDdkQ7QUFDTSxDQUFDLHNCQUFzQjtBQUMxQjtBQUV0QixTQUFTSzs7SUFDdEIsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxXQUFXLEVBQUUsR0FBR1QsK0RBQVNBLElBQUksdUNBQXVDO0lBQ3pHLE1BQU0sRUFBRVUsVUFBVSxFQUFFQyxZQUFZLEVBQUUsR0FBR1YsMEVBQWdCQSxJQUFJLHNDQUFzQztJQUMvRixNQUFNVyxTQUFTVCxzREFBU0EsSUFBSSxnQ0FBZ0M7SUFFNUQsOENBQThDO0lBQzlDRCxnREFBU0E7NkJBQUM7WUFDUixJQUFJUSxjQUFjRixRQUFRLEdBQUc7Z0JBQzNCRyxhQUFhRCxZQUFZRixRQUFRLGlDQUFpQztZQUNwRTtRQUNGOzRCQUFHO1FBQUNFO1FBQVlGO1FBQU9HO0tBQWE7SUFFcEMsaUNBQWlDO0lBQ2pDLE1BQU1FLG9CQUFvQjtRQUN4Qk4sYUFBYSxtQkFBbUI7UUFDaENLLE9BQU9FLElBQUksQ0FBQyxNQUFNLDZCQUE2QjtJQUNqRDtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQStDOzs7Ozs7MEJBSTdELDhEQUFDRTtnQkFBRUYsV0FBVTs7b0JBQTRCO29CQUN6QlI7b0JBQU07b0JBQVNGLFVBQVVhLE1BQU07b0JBQUM7Ozs7Ozs7MEJBR2hELDhEQUFDSjtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNJO3dCQUFHSixXQUFVO2tDQUE2Qjs7Ozs7O29CQUMxQ1YsVUFBVWUsR0FBRyxDQUFDLENBQUNDLFVBQVVDLHNCQUN4Qiw4REFBQ1I7NEJBQWdCQyxXQUFVOzs4Q0FDekIsOERBQUNFO29DQUFFRixXQUFVOzhDQUFlTSxTQUFTQSxRQUFROzs7Ozs7OENBQzdDLDhEQUFDSjtvQ0FBRUYsV0FBVTs7d0NBQWdCO3dDQUNiUCxXQUFXLENBQUNjLE1BQU07d0NBQy9CZCxXQUFXLENBQUNjLE1BQU0sS0FBS0QsU0FBU0UsY0FBYyxpQkFDN0MsOERBQUNDOzRDQUFLVCxXQUFVO3NEQUFpQjs7Ozs7aUVBRWpDLDhEQUFDUzs0Q0FBS1QsV0FBVTtzREFBZTs7Ozs7Ozs7Ozs7OzhDQUduQyw4REFBQ0U7b0NBQUVGLFdBQVU7O3dDQUFnQjt3Q0FDVk0sU0FBU0UsY0FBYzs7Ozs7Ozs7MkJBWGxDRDs7Ozs7Ozs7Ozs7MEJBaUJkLDhEQUFDUjtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ1osOENBQU1BO29CQUFDc0IsU0FBU2I7OEJBQW1COzs7Ozs7Ozs7Ozs7Ozs7OztBQUk1QztHQXJEd0JSOztRQUMrQkwsMkRBQVNBO1FBQ3pCQyxzRUFBZ0JBO1FBQ3RDRSxrREFBU0E7OztLQUhGRSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxUQU1SRVxccHJvamVjdHNcXHNjaG9vbFByb2plY3RzXFxxdWl6LWFwcFxcY29tcG9uZW50c1xcUmVzdWx0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQgeyB1c2VUcml2aWEgfSBmcm9tICcuLi9jb250ZXh0L1F1aXpDb250ZXh0JzsgLy8gSW1wb3J0ZXJhIFF1aXpDb250ZXh0XG5pbXBvcnQgeyB1c2VQbGF5ZXJDb250ZXh0IH0gZnJvbSAnLi4vcGFnZXMvYXBpL1BsYXllckNvbnRleHQnOyAvLyBJbXBvcnRlcmEgUGxheWVyQ29udGV4dFxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInOyAvLyBJbXBvcnRlcmEgdXNlUm91dGVyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuL3VpL2J1dHRvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlc3VsdHMoKSB7XG4gIGNvbnN0IHsgcXVlc3Rpb25zLCByZXNldEdhbWUsIHNjb3JlLCB1c2VyQW5zd2VycyB9ID0gdXNlVHJpdmlhKCk7IC8vIEjDpG10YSB1c2VyQW5zd2VycyBmcsOlbiBUcml2aWFDb250ZXh0XG4gIGNvbnN0IHsgcGxheWVyTmFtZSwgYWRkSGlnaFNjb3JlIH0gPSB1c2VQbGF5ZXJDb250ZXh0KCk7IC8vIEjDpG10YSBzcGVsYXJkYXRhIGZyw6VuIFBsYXllckNvbnRleHRcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7IC8vIEFudsOkbmQgdXNlUm91dGVyIGbDtnIgcm91dG5pbmdcblxuICAvLyBTcGFyYSBow7Znc3RhIHBvw6RuZyBuw6RyIGtvbXBvbmVudGVuIHJlbmRlcmFzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHBsYXllck5hbWUgJiYgc2NvcmUgPiAwKSB7XG4gICAgICBhZGRIaWdoU2NvcmUocGxheWVyTmFtZSwgc2NvcmUpOyAvLyBTcGFyYSBzcGVsYXJlbnMgbmFtbiBvY2ggcG/DpG5nXG4gICAgfVxuICB9LCBbcGxheWVyTmFtZSwgc2NvcmUsIGFkZEhpZ2hTY29yZV0pO1xuXG4gIC8vIEhhbnRlcmEgXCJSZXN0YXJ0IFF1aXpcIi1rbmFwcGVuXG4gIGNvbnN0IGhhbmRsZVJlc3RhcnRRdWl6ID0gKCkgPT4ge1xuICAgIHJlc2V0R2FtZSgpOyAvLyDDhXRlcnN0w6RsbCBxdWl6ZXRcbiAgICByb3V0ZXIucHVzaCgnLycpOyAvLyBPbWRpcmlnZXJhIHRpbGwgcXVpei1zaWRhblxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J21heC13LTN4bCBteC1hdXRvIG0tMTAgcC0yMCBib3JkZXIgcm91bmRlZC1sZyAnPlxuICAgICAgPGgyIGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlciBtYi00IHBiLTQnPlxuICAgICAgICBRdWl6IFJlc3VsdHNcbiAgICAgIDwvaDI+XG5cbiAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXIgdGV4dC1ncmF5LTcwMCc+XG4gICAgICAgIFlvdSBhbnN3ZXJlZCB7c2NvcmV9IG91dCBvZiB7cXVlc3Rpb25zLmxlbmd0aH0gcXVlc3Rpb25zIGNvcnJlY3RseS5cbiAgICAgIDwvcD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9J210LTEwJz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT0ndGV4dC14bCBmb250LXNlbWlib2xkIG1iLTQnPllvdXIgQW5zd2Vyczo8L2gzPlxuICAgICAgICB7cXVlc3Rpb25zLm1hcCgocXVlc3Rpb24sIGluZGV4KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9J21iLTQnPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdmb250LW1lZGl1bSc+e3F1ZXN0aW9uLnF1ZXN0aW9ufTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1ncmF5LTYwMCc+XG4gICAgICAgICAgICAgIFlvdXIgYW5zd2VyOiB7dXNlckFuc3dlcnNbaW5kZXhdfVxuICAgICAgICAgICAgICB7dXNlckFuc3dlcnNbaW5kZXhdID09PSBxdWVzdGlvbi5jb3JyZWN0X2Fuc3dlciA/IChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RleHQtZ3JlZW4tNjAwJz4gKENvcnJlY3QpPC9zcGFuPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndGV4dC1yZWQtNjAwJz4gKEluY29ycmVjdCk8L3NwYW4+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtZ3JheS02MDAnPlxuICAgICAgICAgICAgICBDb3JyZWN0IGFuc3dlcjoge3F1ZXN0aW9uLmNvcnJlY3RfYW5zd2VyfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nbXQtMTAgdGV4dC1jZW50ZXInPlxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVJlc3RhcnRRdWl6fT5SZXN0YXJ0IFF1aXo8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVRyaXZpYSIsInVzZVBsYXllckNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJCdXR0b24iLCJSZXN1bHRzIiwicXVlc3Rpb25zIiwicmVzZXRHYW1lIiwic2NvcmUiLCJ1c2VyQW5zd2VycyIsInBsYXllck5hbWUiLCJhZGRIaWdoU2NvcmUiLCJyb3V0ZXIiLCJoYW5kbGVSZXN0YXJ0UXVpeiIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInAiLCJsZW5ndGgiLCJoMyIsIm1hcCIsInF1ZXN0aW9uIiwiaW5kZXgiLCJjb3JyZWN0X2Fuc3dlciIsInNwYW4iLCJvbkNsaWNrIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Results.js\n"));

/***/ })

});