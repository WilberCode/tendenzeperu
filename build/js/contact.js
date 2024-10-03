/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./dev/js/validationForm.js":
/*!**********************************!*\
  !*** ./dev/js/validationForm.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ validationField)
/* harmony export */ });
jQuery(document).ready(function ($) {
  (function (a) {
    a.fn.casiano = function (b) {
      a(this).on({
        keypress: function keypress(a) {
          var c = a.which;
          var d = a.keyCode;
          var e = String.fromCharCode(c).toLowerCase();
          var f = b;
          (-1 != f.indexOf(e) || 9 == d || 37 != c && 37 == d || 39 == d && 39 != c || 8 == d || 46 == d && 46 != c) && 161 != c || a.preventDefault();
        }
      });
    };
  })(jQuery);

  $(".texto").casiano("abcdefghijklmnñopqrstuvwxyzáéíóú&¿?¡!.-,;:_ ");
  $(".alfanumerico").casiano("abcdefghijklmnñopqrstuvwxyzáéíóú1234567890¿?¡!.-,;:_ ");
  $(".numero").casiano("1234567890");
});
function validationField(el) {
  var required = el.val();
  var fieldstatus = false;

  if (required == "") {
    el.addClass('is-invalid');

    if (!el.next().hasClass('invalid-feedback')) {
      el.after('<div class="invalid-feedback">Campo obligatorio *</div>');
    }

    fieldstatus = false;
  } else {
    el.removeClass('is-invalid');
    el.next('.invalid-feedback').remove();
    fieldstatus = true;
  }

  return fieldstatus;
}

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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./dev/js/contact.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validationForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validationForm.js */ "./dev/js/validationForm.js");

/*  Validar campos */

function validationFields() {
  var formstatus = true;
  $("#envioContacto").find(".required").each(function (index, el) {
    if (!(0,_validationForm_js__WEBPACK_IMPORTED_MODULE_0__.default)($(this))) {
      // Si algún campo no es válido
      formstatus = false; // El formulario no es válido 
    }
  });

  if (!$('input[type="checkbox"]:checked').length) {
    if (!(0,_validationForm_js__WEBPACK_IMPORTED_MODULE_0__.default)($('#temas'))) {
      // Si algún campo no es válido
      formstatus = false; // El formulario no es válido 
    }
  } else {
    $('#temas').next('.invalid-feedback').remove();
  }

  return formstatus;
}

$('#envioContacto input').on('input', function () {
  if ($(this).hasClass('required')) {
    (0,_validationForm_js__WEBPACK_IMPORTED_MODULE_0__.default)($(this));
  }
});

var formulario_envio = function formulario_envio(destino, datafrm) {
  $.ajax({
    url: destino,
    type: "POST",
    dataType: "JSON",
    data: datafrm,
    cache: false,
    contentType: false,
    processData: false,
    beforeSend: function beforeSend() {},
    success: function success(data) {
      data = data;

      if (data.success) {
        /*   setTimeout(function(){
              $('#envioContacto')[0].reset(); 
              $("#envioContacto").hide(); 
          }, 1000); */
        setTimeout(function () {
          $("#contacto-message").show();
          $("#contacto-message").text(data.message);
        }, 2000);
      } else {
        $("#contacto-message").show();
        $("#contacto-message").text(data.message);
      }
    },
    error: function error() {},
    complete: function complete() {}
  });
};

var formulario = function formulario() {
  $("#envioContacto").on('submit', function (event) {
    event.preventDefault();
    var nombrefrm = $(this).data("nombre");
    var destino = $(this).data("destino");
    var formData = new FormData(document.getElementById(nombrefrm));
    var formValid = false;
    formValid = validationFields();

    if (!formValid) {
      return;
    }

    formulario_envio(destino, formData);
  });
};

jQuery(document).ready(function ($) {
  formulario();
});
})();

/******/ })()
;