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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@department-of-veterans-affairs/formation/sass/core.scss":
/*!*******************************************************************************!*\
  !*** ./node_modules/@department-of-veterans-affairs/formation/sass/core.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/css-loader/index.js):\\nModuleNotFoundError: Module not found: Error: Can't resolve '../fonts/merriweather-bold-webfont.eot' in '/Users/jaredcunha/work/design-system-documentation/node_modules/@department-of-veterans-affairs/formation/sass'\\n    at factory.create (/Users/jaredcunha/work/design-system-documentation/node_modules/webpack/lib/Compilation.js:798:10)\\n    at factory (/Users/jaredcunha/work/design-system-documentation/node_modules/webpack/lib/NormalModuleFactory.js:397:22)\\n    at resolver (/Users/jaredcunha/work/design-system-documentation/node_modules/webpack/lib/NormalModuleFactory.js:130:21)\\n    at asyncLib.parallel (/Users/jaredcunha/work/design-system-documentation/node_modules/webpack/lib/NormalModuleFactory.js:224:22)\\n    at /Users/jaredcunha/work/design-system-documentation/node_modules/neo-async/async.js:2817:7\\n    at /Users/jaredcunha/work/design-system-documentation/node_modules/neo-async/async.js:6783:13\\n    at normalResolver.resolve (/Users/jaredcunha/work/design-system-documentation/node_modules/webpack/lib/NormalModuleFactory.js:214:25)\\n    at doResolve (/Users/jaredcunha/work/design-system-documentation/node_modules/enhanced-resolve/lib/Resolver.js:184:12)\\n    at hook.callAsync (/Users/jaredcunha/work/design-system-documentation/node_modules/enhanced-resolve/lib/Resolver.js:238:5)\\n    at _fn0 (eval at create (/Users/jaredcunha/work/design-system-documentation/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:15:1)\\n    at resolver.doResolve (/Users/jaredcunha/work/design-system-documentation/node_modules/enhanced-resolve/lib/UnsafeCachePlugin.js:37:5)\\n    at hook.callAsync (/Users/jaredcunha/work/design-system-documentation/node_modules/enhanced-resolve/lib/Resolver.js:238:5)\\n    at _fn0 (eval at create (/Users/jaredcunha/work/design-system-documentation/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:15:1)\\n    at hook.callAsync (/Users/jaredcunha/work/design-system-documentation/node_modules/enhanced-resolve/lib/Resolver.js:238:5)\\n    at _fn0 (eval at create (/Users/jaredcunha/work/design-system-documentation/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:12:1)\\n    at resolver.doResolve (/Users/jaredcunha/work/design-system-documentation/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:42:38)\\n    at hook.callAsync (/Users/jaredcunha/work/design-system-documentation/node_modules/enhanced-resolve/lib/Resolver.js:238:5)\\n    at _fn42 (eval at create (/Users/jaredcunha/work/design-system-documentation/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:393:1)\\n    at hook.callAsync (/Users/jaredcunha/work/design-system-documentation/node_modules/enhanced-resolve/lib/Resolver.js:238:5)\\n    at _fn0 (eval at create (/Users/jaredcunha/work/design-system-documentation/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:12:1)\\n    at resolver.doResolve (/Users/jaredcunha/work/design-system-documentation/node_modules/enhanced-resolve/lib/DescriptionFilePlugin.js:42:38)\\n    at hook.callAsync (/Users/jaredcunha/work/design-system-documentation/node_modules/enhanced-resolve/lib/Resolver.js:238:5)\\n    at _fn1 (eval at create (/Users/jaredcunha/work/design-system-documentation/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:24:1)\\n    at hook.callAsync (/Users/jaredcunha/work/design-system-documentation/node_modules/enhanced-resolve/lib/Resolver.js:238:5)\\n    at _fn0 (eval at create (/Users/jaredcunha/work/design-system-documentation/node_modules/tapable/lib/HookCodeFactory.js:32:10), <anonymous>:15:1)\\n    at fs.stat (/Users/jaredcunha/work/design-system-documentation/node_modules/enhanced-resolve/lib/DirectoryExistsPlugin.js:22:13)\\n    at process.nextTick (/Users/jaredcunha/work/design-system-documentation/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:73:15)\\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\\n    at process._tickCallback (internal/process/next_tick.js:180:9)\");\n\n//# sourceURL=webpack:///./node_modules/@department-of-veterans-affairs/formation/sass/core.scss?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// @charset \"UTF-8\"\n// app.js\n__webpack_require__(/*! ../node_modules/@department-of-veterans-affairs/formation/sass/core.scss */ \"./node_modules/@department-of-veterans-affairs/formation/sass/core.scss\");\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });