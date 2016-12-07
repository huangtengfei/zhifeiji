/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _indexInfo = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../components/home/index-info.jsx\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _indexInfo2 = _interopRequireDefault(_indexInfo);

	var _ajaxurl = __webpack_require__(2);

	var _ajaxurl2 = _interopRequireDefault(_ajaxurl);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	console.log(_ajaxurl2.default); // 根据NODE_DEV环境变量不同,使用不同的server
	ReactDOM.render(React.createElement(_indexInfo2.default, null), document.getElementById('container'));

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var server1 = 'https://production.server.com';
	var server2 = 'https://dev.server.com';

	var useServer = null;
	if (false) {
		useServer = server1;
	} else if (true) {
		useServer = server2;
	}
	exports.default = useServer;

/***/ }
/******/ ]);