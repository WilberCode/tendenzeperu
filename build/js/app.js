/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dev/js/app.js":
/*!***********************!*\
  !*** ./dev/js/app.js ***!
  \***********************/
/***/ (() => {

var _callServices = function _callServices() {
  fetch('build/json/services.json').then(function (response) {
    return response.json();
  }).then(function (data) {
    var services = document.getElementsByClassName('services');
    var arrayData = data.services;
    arrayData.map(function (val, index) {
      var tagWrapp = document.createElement('div');
      var imgWrapp = document.createElement('img');
      var title = document.createElement('h3');
      var description = document.createElement('p');
      title.innerHTML = val.title;
      imgWrapp.alt = val.title;
      imgWrapp.title = val.title;
      imgWrapp.loading = "lazy";
      description.innerHTML = val.description;
      tagWrapp.appendChild(imgWrapp).src = val.img;
      tagWrapp.appendChild(title).classList.add('align_center');
      tagWrapp.appendChild(description).classList.add('align_center');
      services[0].appendChild(tagWrapp).classList.add('itemServices');
    });
  });
};
/* let _callClients = () => {
  fetch('build/json/clients.json?v=2')
    .then(response => response.json())
    .then(data => {
      let clientes = document.getElementsByClassName('clientes');
      let arrayData = data.clientes;
      arrayData.map((val, index) => {
        let imgWrapp = document.createElement('img');
        imgWrapp.width = val.width;
        imgWrapp.title = val.title;
        imgWrapp.alt = val.title;
        imgWrapp.loading="lazy";
        imgWrapp.classList.add('cli-'+val.tipo);
        clientes[0].appendChild(imgWrapp).src = val.img
      });
    });
} */


var _callGallery = function _callGallery() {
  fetch('build/json/gallery.json').then(function (response) {
    return response.json();
  }).then(function (data) {
    var gallery = document.getElementsByClassName('gallery');
    var arrayData = data.gallery;
    arrayData.map(function (val, index) {
      var tagWrapp = document.createElement('div');
      tagWrapp.classList.add('itemGallery');
      var imgWrapp = document.createElement('img');
      imgWrapp.title = val.title;
      imgWrapp.src = val.img;
      imgWrapp.loading = "lazy";
      imgWrapp.alt = val.title;
      tagWrapp.appendChild(imgWrapp);
      gallery[0].appendChild(tagWrapp);
    });
  });
};
/*Fixed header */


var sticky = 0;

var _fixedHeader = function _fixedHeader() {
  var header = document.getElementById("header");
  sticky = parseInt(header.offsetTop) + 300;

  if (window.pageYOffset > sticky) {
    header.classList.add("fixedHeader");
  } else {
    header.classList.remove("fixedHeader");
  }
};

var _parallaxSlider = function _parallaxSlider() {
  if (document.getElementById("sliderPrincipal")) {
    var slider = document.getElementById("sliderPrincipal");
    var posElementWrapp = slider.getBoundingClientRect();
    var heightScreen = window.innerHeight - 50;

    if (posElementWrapp.top < heightScreen) {
      slider.style.backgroundPosition = 'center ' + -parseInt(posElementWrapp.top / 8) + 'px';
    }
  }
};

var _parallaxCategorias = function _parallaxCategorias() {
  var categoriasWrapp = document.getElementsByClassName("categorias");
  var posElementWrapp = categoriasWrapp[0].getBoundingClientRect();
  var heightScreen = window.innerHeight - 50;

  if (posElementWrapp.top < heightScreen) {
    categoriasWrapp[0].style.backgroundPosition = 'center ' + -parseInt(posElementWrapp.top / 2) + 'px';
  }
};
/*Ready functions */


_callGallery();

_callServices();
/* _callClients();   */


var _clickAnchorLink = function _clickAnchorLink() {
  document.querySelectorAll('.anchor[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var header = document.getElementById('header').offsetHeight;
      var attribute = document.querySelector(this.getAttribute('href'));
      var position = parseInt(attribute.offsetTop) - (parseInt(header) + 20);
      document.getElementById('hb').classList.remove('activeHamburguer');
      document.querySelector('nav > ul').classList.remove('activeMenu');
      window.scrollTo({
        left: 0,
        top: position,
        behavior: 'smooth'
      });
    });
  });
};

var _openHideMenu = function _openHideMenu() {
  var Id = document.getElementById.bind(document);
  var navToggle = Id('nav-toggle');
  var ulMenu = document.querySelector('nav > ul');

  navToggle.onclick = function (e) {
    e.preventDefault();
    navToggle.classList.toggle('nav-toggle-active');
    ulMenu.classList.toggle('activeMenu');
  };
};

var _openSubMenu = function _openSubMenu() {
  var toggle_submenu = document.querySelector('.item-has-submenu > a');
  var toggle_submenu_icon = document.querySelector('.item-has-submenu > a >span> img');
  var submenu = document.querySelector('.submenu');

  toggle_submenu.onclick = function (e) {
    if (e.target.className == 'dropdown' || e.target.parentNode.className == 'dropdown') {
      e.preventDefault();
      submenu.classList.toggle('submenu-active');
      toggle_submenu_icon.classList.toggle('dropdown-active');
    }
  };
};

var _slider = function _slider(wrapper) {
  var slideIndex = 1;
  var autoSlideInterval;
  showSlides(slideIndex);

  function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(wrapper + ' .itemSlider');
    var dots = document.querySelectorAll(wrapper + " .dot");

    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  function autoSlide() {
    slideIndex++;
    showSlides(slideIndex);
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(autoSlide, 8000); // Change slide every 8 seconds
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  startAutoSlide();

  if (document.querySelector(wrapper + ' .dots')) {
    var _dots = document.querySelector(wrapper + ' .dots');

    _dots.addEventListener('click', function (e) {
      if (e.target.className != 'dots') {
        stopAutoSlide();
        showSlides(slideIndex = Number(e.target.dataset.posicion));
        startAutoSlide(); // Restart auto slide after manual change  
      }
    });
  }
};

window.onload = function () {
  _clickAnchorLink();

  _openHideMenu();

  _parallaxSlider();

  _openSubMenu();

  _slider('.banner');

  _slider('.sliderInformacion');

  window.onscroll = function () {
    _parallaxSlider();

    _fixedHeader();

    _parallaxCategorias();
  };
};

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('build/js/sw.js').then(function (reg) {
    return console.log('Registro de SW exitoso', reg);
  })["catch"](function (err) {
    return console.warn('Error al tratar de registrar el sw', err);
  });
}

/***/ }),

/***/ "./dev/sass/app.scss":
/*!***************************!*\
  !*** ./dev/sass/app.scss ***!
  \***************************/
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
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/build/js/app": 0,
/******/ 			"build/css/app": 0
/******/ 		};
/******/ 		
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktendenzeperu"] = self["webpackChunktendenzeperu"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["build/css/app"], () => (__webpack_require__("./dev/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["build/css/app"], () => (__webpack_require__("./dev/sass/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;