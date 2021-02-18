/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

//select DOM Items
// const afoText = document.querySelector(".aforisma");
var menuBtn = document.querySelector(".menu-btn");
var menu = document.querySelector(".menu");
var menuNav = document.querySelector(".menu-nav");
var menuBranding = document.querySelector(".menu-branding");
var navItems = document.querySelectorAll(".nav-item"); // project btn

var projBtn1 = document.querySelector(".btn-light");
var projImg1 = document.querySelector(".imgP1"); // const projBtn2 = document.querySelector(".btn-light 2");
// const projBtn3 = document.querySelector(".btn-light 3");
// const projBtn4 = document.querySelector(".btn-light 4");
// Set Initial state of Menu

var showMenu = false;
var zoomImg = false;
menuBtn.addEventListener("click", toggleMenu);
projBtn1.addEventListener("click", expandImg);

function expandImg() {
  if (!zoomImg) {
    projImg1.classList.add("zoomImg");
    zoomImg = true;
  } else {
    projImg1.classList.remove("zoomImg");
    zoomImg = false;
  }
}

function toggleMenu() {
  if (!showMenu) {
    randAforism();
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(function (item) {
      return item.classList.add("show");
    });
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(function (item) {
      return item.classList.remove("show");
    });
    showMenu = false;
  }
} // AFORISMI


var a = "Lo scopo del lavoro è quello di guadagnarsi il tempo libero. <br> -Aristotele";
var b = "Ritrovarsi insieme è un inizio, <br> restare insieme è un progresso, <br> ma riuscire a lavorare insieme è un successo. <br> - Henry Ford";
var c = "Hai raggiunto il successo nel tuo campo quando non sai <br> se quello che stai facendo è lavoro o gioco. <br> - Warren Beatty";
var d = "Siate affamati! Siate folli! <br> - Steve Jobs";
var e = "Il mondo è nelle mani di coloro che hanno il coraggio di sognare <br> e di correre il rischio di vivere i propri sogni. <br> - Paulo Coelho";
var f = "Se oggi vado a letto non avendo fatto <br> niente di nuovo rispetto a ieri, <br> allora oggi è stato sprecato. <br> - Bill Gates";
var g = "C'è un solo tipo di successo: <br> quello di fare della propria vita <br> ciò che si desidera. <br> - Henry David Thoreau";
var h = "Le difficoltà rafforzano la mente, <br> come la fatica rafforza il corpo. <br> - Lucio Anneo Seneca";
var aforismi = [a, b, c, d, e, f, g, h]; // aforisma random

function randAforism() {
  var textNow = document.getElementById("aforisma").innerHTML;
  console.log(textNow);
  var par = aforismi[Math.floor(Math.random() * aforismi.length)];

  if (par != textNow) {
    // console.log("diversi");
    // write in <p>
    return document.getElementById("aforisma").innerHTML = par;
  } else {
    // console.log("uguali");
    var par = aforismi[Math.floor(Math.random() * aforismi.length)];
    return document.getElementById("aforisma").innerHTML = par;
  }
}

var colors = {
  primaryColor: "black",
  secondaryColor: "#08d816"
}; // chart js

var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "horizontalBar",
  // The data for our dataset
  data: {
    labels: ["HTML", "CSS", "Javascript", "JQuery", "MySQL", "Php", "Laravel", "VueJs"],
    datasets: [{
      label: "Conoscenza",
      backgroundColor: colors.secondaryColor,
      borderColor: "green",
      borderWidth: 1,
      data: [91, 88, 85, 76, 72, 85, 71, 84]
    }]
  },
  // Configuration options go here
  options: {
    legend: {
      display: false,
      labels: {
        // This more specific font property overrides the global property
        fontColor: "white"
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          // beginAtZero: true,
          fontColor: "white"
        }
      }],
      xAxes: [{
        ticks: {
          beginAtZero: true,
          fontColor: "white"
        }
      }]
    }
  }
});

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/app.js"],
/******/ 			["./src/app.scss"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmarcopolello_github_io"] = self["webpackChunkmarcopolello_github_io"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;