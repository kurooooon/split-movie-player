module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main/background.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main/background.js":
/*!****************************!*\
  !*** ./main/background.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var electron_serve__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron-serve */ "electron-serve");
/* harmony import */ var electron_serve__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron_serve__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./main/helpers/index.js");



const isProd = "development" === 'production';

if (isProd) {
  electron_serve__WEBPACK_IMPORTED_MODULE_1___default()({
    directory: 'app'
  });
} else {
  electron__WEBPACK_IMPORTED_MODULE_0__["app"].setPath('userData', `${electron__WEBPACK_IMPORTED_MODULE_0__["app"].getPath('userData')} (development)`);
}

(async () => {
  await electron__WEBPACK_IMPORTED_MODULE_0__["app"].whenReady();
  const mainWindow = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["createWindow"])('main', {
    width: 1000,
    height: 600
  });

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();
  }
})();

electron__WEBPACK_IMPORTED_MODULE_0__["app"].on('window-all-closed', () => {
  electron__WEBPACK_IMPORTED_MODULE_0__["app"].quit();
});

/***/ }),

/***/ "./main/helpers/create-window.js":
/*!***************************************!*\
  !*** ./main/helpers/create-window.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createWindow; });
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var electron_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron-store */ "electron-store");
/* harmony import */ var electron_store__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron_store__WEBPACK_IMPORTED_MODULE_1__);


function createWindow(windowName, options) {
  const key = 'window-state';
  const name = `window-state-${windowName}`;
  const store = new electron_store__WEBPACK_IMPORTED_MODULE_1__({
    name
  });
  const defaultSize = {
    width: options.width,
    height: options.height
  };
  let state = {};
  let win;

  const restore = () => store.get(key, defaultSize);

  const getCurrentPosition = () => {
    const position = win.getPosition();
    const size = win.getSize();
    return {
      x: position[0],
      y: position[1],
      width: size[0],
      height: size[1]
    };
  };

  const windowWithinBounds = (windowState, bounds) => {
    return windowState.x >= bounds.x && windowState.y >= bounds.y && windowState.x + windowState.width <= bounds.x + bounds.width && windowState.y + windowState.height <= bounds.y + bounds.height;
  };

  const resetToDefaults = () => {
    const bounds = electron__WEBPACK_IMPORTED_MODULE_0__["screen"].getPrimaryDisplay().bounds;
    return Object.assign({}, defaultSize, {
      x: (bounds.width - defaultSize.width) / 2,
      y: (bounds.height - defaultSize.height) / 2
    });
  };

  const ensureVisibleOnSomeDisplay = windowState => {
    const visible = electron__WEBPACK_IMPORTED_MODULE_0__["screen"].getAllDisplays().some(display => {
      return windowWithinBounds(windowState, display.bounds);
    });

    if (!visible) {
      // Window is partially or fully not visible now.
      // Reset it to safe defaults.
      return resetToDefaults();
    }

    return windowState;
  };

  const saveState = () => {
    if (!win.isMinimized() && !win.isMaximized()) {
      Object.assign(state, getCurrentPosition());
    }

    store.set(key, state);
  };

  state = ensureVisibleOnSomeDisplay(restore());
  win = new electron__WEBPACK_IMPORTED_MODULE_0__["BrowserWindow"]({ ...options,
    ...state,
    webPreferences: {
      nodeIntegration: true,
      ...options.webPreferences
    }
  });
  win.on('close', saveState);
  return win;
}
;

/***/ }),

/***/ "./main/helpers/index.js":
/*!*******************************!*\
  !*** ./main/helpers/index.js ***!
  \*******************************/
/*! exports provided: createWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-window */ "./main/helpers/create-window.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createWindow", function() { return _create_window__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "electron-serve":
/*!*********************************!*\
  !*** external "electron-serve" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron-serve");

/***/ }),

/***/ "electron-store":
/*!*********************************!*\
  !*** external "electron-store" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron-store");

/***/ })

/******/ });
//# sourceMappingURL=background.js.map