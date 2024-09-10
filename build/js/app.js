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

var _callClients = function _callClients() {
  fetch('build/json/clients.json?v=2').then(function (response) {
    return response.json();
  }).then(function (data) {
    var clientes = document.getElementsByClassName('clientes');
    var arrayData = data.clientes;
    arrayData.map(function (val, index) {
      var imgWrapp = document.createElement('img');
      imgWrapp.width = val.width;
      imgWrapp.title = val.title;
      imgWrapp.alt = val.title;
      imgWrapp.loading = "lazy";
      imgWrapp.classList.add('cli-' + val.tipo);
      clientes[0].appendChild(imgWrapp).src = val.img;
    });
  });
};

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

_callClients();

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
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/postcss-loader/dist/cjs.js):\nSyntaxError\n\n(44:3) C:\\xampp\\htdocs\\web\\tendenze\\tendenzeperu\\dev\\sass\\app.scss The `font-robotofont` class does not exist. If `font-robotofont` is a custom class, make sure it is defined within a `@layer` directive.\n\n \u001b[90m 42 | \u001b[39m  overflow-x\u001b[33m:\u001b[39m hidden\u001b[33m;\u001b[39m\n \u001b[90m 43 | \u001b[39m  padding-top\u001b[33m:\u001b[39m \u001b[36mvar\u001b[39m\u001b[36m(--header-height)\u001b[39m\u001b[33m;\u001b[39m\n\u001b[1m\u001b[31m>\u001b[39m\u001b[22m\u001b[90m 44 | \u001b[39m  \u001b[36m@apply\u001b[39m font-robotofont\u001b[33m;\u001b[39m\n \u001b[90m    | \u001b[39m  \u001b[1m\u001b[31m^\u001b[39m\u001b[22m\n \u001b[90m 45 | \u001b[39m\u001b[33m}\u001b[39m\n \u001b[90m 46 | \u001b[39m\n\n    at processResult (C:\\xampp\\htdocs\\web\\tendenze\\tendenzeperu\\node_modules\\webpack\\lib\\NormalModule.js:700:19)\n    at C:\\xampp\\htdocs\\web\\tendenze\\tendenzeperu\\node_modules\\webpack\\lib\\NormalModule.js:806:5\n    at C:\\xampp\\htdocs\\web\\tendenze\\tendenzeperu\\node_modules\\loader-runner\\lib\\LoaderRunner.js:399:11\n    at C:\\xampp\\htdocs\\web\\tendenze\\tendenzeperu\\node_modules\\loader-runner\\lib\\LoaderRunner.js:251:18\n    at context.callback (C:\\xampp\\htdocs\\web\\tendenze\\tendenzeperu\\node_modules\\loader-runner\\lib\\LoaderRunner.js:124:13)\n    at Object.loader (C:\\xampp\\htdocs\\web\\tendenze\\tendenzeperu\\node_modules\\postcss-loader\\dist\\index.js:94:7)");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_modules__["./dev/js/app.js"]();
/******/ 	// This entry module doesn't tell about it's top-level declarations so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./dev/sass/app.scss"]();
/******/ 	
/******/ })()
;