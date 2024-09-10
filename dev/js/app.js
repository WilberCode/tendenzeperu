let _callServices = () => {
  fetch('build/json/services.json')
  .then(response => response.json())
  .then(data => {
    let services = document.getElementsByClassName('services');
    let arrayData = data.services;
    arrayData.map((val, index) =>{
      let tagWrapp = document.createElement('div');
      let imgWrapp = document.createElement('img');
      let title = document.createElement('h3');
      let description = document.createElement('p');
      title.innerHTML = val.title;
      imgWrapp.alt = val.title;
      imgWrapp.title = val.title;
      imgWrapp.loading="lazy";
      description.innerHTML = val.description;
      tagWrapp.appendChild(imgWrapp).src = val.img;  

      tagWrapp.appendChild(title).classList.add('align_center');
      tagWrapp.appendChild(description).classList.add('align_center');
      services[0].appendChild(tagWrapp).classList.add('itemServices');
    });
  });
}

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

let _callGallery = () => {
  fetch('build/json/gallery.json')
    .then(response => response.json())
    .then(data => {
      let gallery = document.getElementsByClassName('gallery');
      let arrayData = data.gallery;
      arrayData.map((val, index) => {
        let tagWrapp = document.createElement('div');
        tagWrapp.classList.add('itemGallery');
        let imgWrapp = document.createElement('img');
        imgWrapp.title = val.title;
        imgWrapp.src = val.img;
        imgWrapp.loading="lazy";
        imgWrapp.alt = val.title;
        tagWrapp.appendChild(imgWrapp);
        gallery[0].appendChild(tagWrapp)
      });
    });
} 
/*Fixed header */
let sticky = 0;

let _fixedHeader = () => {
  let header = document.getElementById("header");
  sticky = parseInt(header.offsetTop) + 300;

  if (window.pageYOffset > sticky) {
    header.classList.add("fixedHeader"); 
      if (window.innerWidth <= 768) { // Umbral para móviles (puedes ajustar el valor)
        document.documentElement.style.setProperty('--header-height',`70px`);
        document.documentElement.style.setProperty('--logo-width',`70px`);
      } else {
        document.documentElement.style.setProperty('--header-height',`90px`);
        document.documentElement.style.setProperty('--logo-width',`100px`);
      } 
  
    
  } else {
    header.classList.remove("fixedHeader"); 
    if (window.innerWidth <= 768) { // Umbral para móviles (puedes ajustar el valor)
      document.documentElement.style.setProperty('--header-height',`70px`);
    document.documentElement.style.setProperty('--logo-width',`80px`);
    } else {
      document.documentElement.style.setProperty('--header-height',`120px`);
    document.documentElement.style.setProperty('--logo-width',`164px`);
    } 
  }
 

  // Llamar la función al cargar la página


  // Escuchar el cambio de tamaño de la ventana
/*   window.addEventListener('resize', updateHeaderHeight); */
// Función para actualizar la altura del header
}

let _parallaxSlider = () => {
    
    if(document.getElementById("sliderPrincipal")){
      let slider = document.getElementById("sliderPrincipal");
      let posElementWrapp = slider.getBoundingClientRect();
      let heightScreen = window.innerHeight - 50;
      if (posElementWrapp.top < heightScreen) {
        slider.style.backgroundPosition = 'center ' + -parseInt(posElementWrapp.top / 8) + 'px';
      }
    }
}

let _parallaxCategorias = () => {
    let categoriasWrapp = document.getElementsByClassName("categorias");
    let posElementWrapp = categoriasWrapp[0].getBoundingClientRect();
    
    let heightScreen = window.innerHeight - 50;
    
    if (posElementWrapp.top < heightScreen) {
      categoriasWrapp[0].style.backgroundPosition = 'center ' + - parseInt(posElementWrapp.top / 2 ) + 'px';
    }
}
 
 
 

/*Ready functions */
/* _callGallery();
_callServices(); */
/* _callClients();   */
 
let _clickAnchorLink = () =>{
  document.querySelectorAll('.anchor[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){ 
      e.preventDefault();
      let header = document.getElementById('header').offsetHeight;
      let attribute = document.querySelector(this.getAttribute('href'));
      let position = parseInt(attribute.offsetTop) - (parseInt(header) + 20);

      document.getElementById('nav-toggle').classList.remove('nav-toggle-active');
      document.querySelector('nav > ul').classList.remove('activeMenu');

      window.scrollTo({
        left: 0,
        top: position,
        behavior: 'smooth'
      });
    });
  });
}

let _openHideMenu = () => {
 
  const Id = document.getElementById.bind(document)    
  let navToggle = Id('nav-toggle')  
  let ulMenu = document.querySelector('nav > ul');
  navToggle.onclick = function(e){
    e.preventDefault(); 
    navToggle.classList.toggle('nav-toggle-active') 
   ulMenu.classList.toggle('activeMenu'); 
  }


}
let _openSubMenu = () => { 
  let toggle_submenu = document.querySelector('.item-has-submenu > a');
  let toggle_submenu_icon = document.querySelector('.item-has-submenu > a >span> img'); 
  let submenu = document.querySelector('.submenu');
 
  toggle_submenu.onclick = (e)=>{  
      if(e.target.className == 'dropdown' || e.target.parentNode.className == 'dropdown' ){
        e.preventDefault()   
        submenu.classList.toggle('submenu-active');
        toggle_submenu_icon.classList.toggle('dropdown-active');
      } 
   }
}
 
const _slider = (wrapper) =>{
  let slideIndex = 1;  
  let autoSlideInterval;

  showSlides(slideIndex)
  function showSlides(n) { 
    let i;
    let slides = document.querySelectorAll(wrapper+' .itemSlider');
    let dots = document.querySelectorAll(wrapper+" .dot");  
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";    
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";   
    dots[slideIndex-1].className += " active"; 
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

    if(document.querySelector(wrapper+' .dots')){
      const _dots = document.querySelector(wrapper+' .dots');
      _dots.addEventListener('click',(e)=>{
        if(e.target.className != 'dots'){   
            stopAutoSlide(); 
            showSlides(slideIndex = Number(e.target.dataset.posicion) )
            startAutoSlide(); // Restart auto slide after manual change  
         } 
      }) 
    } 
} 

const _videoEdificios = ()=>{
  const video = document.getElementById('edificios');
  let videoHasEnded = false; // Variable para rastrear si el video ya terminó

  // Función para reproducir y pausar el video según el scroll
  const playVideoOnScroll = () => {
    const videoPosition = video.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Verifica si el video está en la vista
    const isInView = videoPosition < windowHeight && videoPosition > 0;

    // Solo reproducir si el video no ha terminado y está visible
    if (isInView && !videoHasEnded) {
      video.play();
    } else {
      video.pause();
    }
  };

  // Evento para pausar el video cuando termina
  video.addEventListener('ended', () => {
    videoHasEnded = true; // Marcamos que el video ya ha terminado
    video.pause(); // Pausar el video al final (el último cuadro se mantiene visible)
  });

  // Detecta el scroll y resize para verificar la visibilidad del video
  window.addEventListener('scroll', playVideoOnScroll);
  window.addEventListener('resize', playVideoOnScroll);
  
  // Verificar la visibilidad del video al cargar la página
  document.addEventListener('DOMContentLoaded', playVideoOnScroll);
}

const _videoTendenze = ()=>{
  const video = document.getElementById('publicidad'); 
  let videoHasEnded = false; // Variable para rastrear si el video ya terminó
  let audioActivated = false; // Variable para evitar activar el audio más de una vez

  // Función para reproducir y pausar el video según el scroll
  const playVideoOnScroll = () => {
    const videoPosition = video.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Solo reproducir si el video no ha terminado
    if (videoPosition < windowHeight && videoPosition > 0 && !videoHasEnded) {
      video.play();

      // Activar el audio después de 1 segundo si aún no está activado
      if (!audioActivated) {
        setTimeout(() => {
          video.muted = false; // Activar el audio

          // Forzar la reproducción de nuevo para evitar que se pause
          video.play().catch((error) => {
            console.log("El video no pudo continuar la reproducción:", error);
          });

          audioActivated = true; // Marcar que ya se activó el audio
        }, 1000); // Espera 1 segundo
      }
    } else {
      video.pause();
    }
  };

  // Evento para pausar el video cuando termina
  video.addEventListener('ended', () => {
    videoHasEnded = true; // Marcamos que el video ya ha terminado
    video.pause(); // Pausar el video al final (el último cuadro se mantiene visible)
  });

  // Eventos para detectar scroll y resize
  window.addEventListener('scroll', playVideoOnScroll);
  window.addEventListener('resize', playVideoOnScroll);
}
 
 
window.onload = () => {  
  _clickAnchorLink();
  _openHideMenu(); 
/*   _parallaxSlider(); */
  _openSubMenu(); 
  _videoEdificios();
  _videoTendenze();
/*   _slider('.banner');
  _slider('.sliderInformacion'); */
  document.querySelectorAll('ul>li>a').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      document.getElementById('nav-toggle').classList.remove('nav-toggle-active');
      document.querySelector('nav > ul').classList.remove('activeMenu');
   
      
    });
  });

 
  

  window.onscroll = () => {
 /*    _parallaxSlider(); */
    _fixedHeader();
   /*  _parallaxCategorias(); */
  }
 

 

}
  
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('build/js/sw.js')
    .then(reg => console.log('Registro de SW exitoso', reg))
    .catch(err => console.warn('Error al tratar de registrar el sw', err))
} 

