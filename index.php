<?php include './includes/config.php';?>

<!DOCTYPE html>  
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge"> 
  <link rel="stylesheet" href="/build/css/font-awesome.min.css?v=<?=theVersion();?>"/>
  <link rel="stylesheet" href="/build/css/bastemp.min.css?v=<?=theVersion();?>"/> 
  <link rel="stylesheet" href="/build/css/app.css?v=<?=theVersion();?>"/> 
  <link rel="shortcut icon" href="/build/images/favicon.ico" type="image/x-icon"> 
  <!-- <script src="https://www.youtube.com/iframe_api"></script> --> 
  <title>Grupo Tendenze Comunicaciones</title>
  <link rel="canonical" href="<?=theDomainUrl()?>"> 
  <meta name="title" content="Grupo tendenze comunicaciones"> 
  <meta name="description" content="Trabajamos campañas integrales o parciales. Omnicanal o solo digital. Hacemos Estrategia publicitaria, planificación de Medios, Marketing Digital y Diseño gráfico.">

<!-- Open Graph --> 
  <meta property="og:title" content="Grupo tendenze comunicaciones">
  <meta property="og:locale" content="es_ES">
  <meta property="og:type" content="website">
  <meta property="og:url" content="<?=theDomainUrl()?>"> 
  <meta property="og:image" content="<?=theDomainUrl()?>/build/images/oficina-tendenze-peru-adretail.jpg">
  <meta property="og:site_name" content="Grupo tendenze comunicaciones">
  <meta property="og:description"    
    content="Trabajamos campañas integrales o parciales. Omnicanal o solo digital. Hacemos Estrategia publicitaria, planificación de Medios, Marketing Digital y Diseño gráfico.">
  <!-- <meta property="og:image:secure_url" content=""/build/images/oficina-tendenze-peru-adretail.jpg"> -->
  <!-- <meta property="og:image:width" content="800"> 
  <meta property="og:image:height" content="562">  -->  

  <!-- twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:description"
    content="Trabajamos campañas integrales o parciales. Omnicanal o solo digital. Hacemos Estrategia publicitaria, planificación de Medios, Marketing Digital y Diseño gráfico.">
  <meta name="twitter:title" content="Grupo tendenze comunicaciones">
  <meta name="twitter:site" content="@tendenzeperu">
  <meta name="twitter:image" content="<?=theDomainUrl()?>/build/images/oficina-tendenze-peru-adretail.jpg">
  <meta name="twitter:creator" content="@tendenzeperu">
  <meta name="keywords"  content="tendenze peru, campañas, campaña publicitaria, estrategia publicitaria, medios, planificación de medios digitales, marketing digital, agencia de marketing digital, agencia digital, plan de marketing digital, marketing de contenidos, servicios digitales, seo, sem, diseño, newsletters, programacion, diseño gráfico, diseño publicitario, edicion de videos">
  <meta name="google-site-verification" content="WjoRRgtwp-V5es5QJFHbaoWJJPv029kpZmPKWyhSvgs" />


  <!-- pwa --> 
  <meta name="theme-color" content="#FAE800" class="next-head"> 
  <meta name="MobileOptimized" content="width">
  <meta name="HandheldFriendly" content="true">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <link rel="shortcut icon" type="image/png" href="./build/images/icono.png">
  <link rel="apple-touch-icon" href="build/images/icono.png">
  <link rel="apple-touch-startup-image" href="build/images/icono.png">
  <link rel="manifest" href="manifest.json"> 


  <meta http-equiv="cache-control" content="max-age=0" />
  <meta http-equiv="cache-control" content="no-cache" />
  <meta http-equiv="expires" content="-1" />
  <meta http-equiv="expires" content="Sun May 23 2021 02:00:50 GMT-0500" />
  <meta http-equiv="pragma" content="no-cache" />

  <!-- Google Analytics -->
  <?php include './includes/analytics.php';?>


 <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "url": "https://tendenzeperu.com",
    "name": "Grupo Tendenze Comunicaciones",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+ (51) 998 193 771",
      "contactType": "Directora Creativa"
    }
  } 
  </script>
  
  <style> 
      @media (min-width: 600px){   .wrappIdea .promo video {    padding-left: 8px;   }   }  
      
      .experiencia h3 {
        font-weight: 800; 
        font-size: 27px;
        text-align: center; 
        font-family:"Prelo Bold";
        color: #1A1A1A;
        line-height: 28px;

      }
     .experiencia h3 strong { 
        font-weight: bolder;
        display: block; 
        font-family:"Prelo Black";
        font-size: 6.8rem; 
        margin-bottom: 22px;  
      }  
      @media (max-width: 600px){
       .experiencia h3 strong {
          font-size: 5.8rem; 
        }
      }
      @media (max-width: 1421px){
        .lg_w_90{
          width: 90%;
        }
      }
      .experiencia-item{
        width: 90%;
         max-width: 263px;
         margin: auto;
      }
  </style>

  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="0" /> 
</head>
<body>
  <!-- [ GLOBAL HEADER ] -->
  <?php include './includes/header.php';?>
  <!-- [ /GLOBAL HEADER ] -->

  <!-- <div id="sliderPrincipal" class="section_middle_center sliderPrincipal" title="Oficina Tendenze Peru">
    <img src="build/images/mensaje-slider.svg" alt="slogan tendenze" title="Nuestra Idea " class="mensajeSlider" /> -->
   <!--  <aside class="rssTendenze section_middle_center">
      <div class="wrappRss section_middle_center">
        <a href="https://www.instagram.com/"><i class="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/"><i class="fab fa-linkedin-in"></i></a>
        <a href="https://api.whatsapp.com/send?phone=+51998315039&text=Hola%20Tendenze%20Perú.%20Necesito%20m%C3%A1s%20informaci%C3%B3n" target="_blank" ><i class="fab fa-whatsapp"></i></a>
        <a href="#"><i class="far fa-comment-dots"></i></a>
      </div>
    </aside> -->
<!--   </div> -->
  <section  class="banner sliders " >
    <div  class="">
      <img src="build/images/bannerMETRO.jpg" alt=""  class="w_100 itemSlider" >
      <img src="build/images/banner2.jpg" alt=""  class="w_100 itemSlider" > 
    </div>
    <div  class="dots"> 
      <button data-posicion="1" class="dot" ></button> 
      <button data-posicion="2" class="dot" ></button> 
    </div>
   </section>
 <!--  <div class="section_middle_center w_100 yellowBackgroundColor">
    <div id="que-hacemos" class="w_75 section_middle_justify experiencia">
      <img src="build/images/18-anios-experiencia.svg" alt="18 años de experiencia" />
      <img src="build/images/10-categorias-trabajadas.svg" alt="10 categorías trabajadas" />
      <img src="build/images/40-clientes-con-objetivos-cumplidos.svg" alt="40 clientes con objetivos cumplidos" />
      <img src="build/images/1000-campanas-realizadas.svg" alt="1000 campañas realizadas" />
    </div>
  </div> -->
  <div class="section_middle_center w_100 yellowBackgroundColor"> 
    <div id="que-hacemos" class="lg_w_90 w_75 section_middle_justify experiencia"> 
      <!--  <div class="experiencia-item"><h3><strong> <span>+</span>18</strong>  años de <br> experiencia</h3></div> -->
       <div class="experiencia-item"><h3><strong> <span>+</span>10 </strong>categorías <br> trabajadas  </h3></div>
       <div class="experiencia-item"><h3><strong> <span>+</span>40 </strong>clientes cumpliendo <br> objetivos </h3></div>
       <div class="experiencia-item"><h3><strong> <span>+</span>1,000 </strong>campañas <br> realizadas  </h3></div> 
    </div>
  </div>
  <div class="w_100 section_middle_center">
    <div class="sliderInformacion sliders w_80">
      <?php  
        $archivo_json = './build/json/about.json'; 
        $json = file_get_contents($archivo_json); 
        $slides = json_decode($json, true); 
      ?>
      <div class="dots"> 
        <?php 
        $show = '';
        $counter = 1;
        foreach($slides['aboutData'] as $slide){   ?>
          <button data-posicion="<?=$counter++?>" class="dot" ></button> 
          <?php $title;
                if(!empty($slide['title'])){
                  $title = '<h2>'.$slide['title'].'&nbsp;<span>'.$slide['focusTitle'].'</span></h2>';
                }else{
                  $title = '';
                }
            ?>
          <?php  $show .= '<div class="itemSlider section_middle_left" id="item0">
                    '.$title.'
                    <p>'.$slide['description'].'</p>
                  </div>';
        }  ?>
      </div>
      <div class="wrappSliderAbout section_top_left"> 
          <?=$show?>
      </div> 
    </div>
  </div>
  <div class="w_100 section_middle_justify wrappIdea yellowBackgroundColor">
    <div class="w_100 w_40_desktop blackBackgroundColor section_middle_center fraseIdea">
      <h2 class="whiteColor timesFont w_80 w_70_desktop section_middle_center"> 
        <span class="w_100">“</span> Construímos empatía, afinidad. No&nbsp;vendemos. <span class="w_100">”</span>
      </h2>
    </div>
    <div class="w_100 w_60_desktop section_middle_center promo" style="position:relative;">
       <!--<img src="build/images/trabajos.gif" alt="Trabajos" title="Trabajos"/> --> 
        <video autoplay controls  >
            <source src="https://tendenzeperu.com/build/images/fiestas-patrias-web.mp4" type="video/mp4">
         </video> 
        <!-- <video  autoplay="autoplay" loop="loop" muted defaultMuted playsinline  oncontextmenu="return false;"  preload="auto"  id="front-video"  > 
          <source  src="build/images/trabajos.webm" type="video/webm">
          <source  src="build/images/trabajos.mp4" type="video/mp4">
        </video> -->
    </div>
  </div>  
  <div class="w_100 section_middle_center queHacemos">
    <div id="como-hacemos" class="comoHacemos w_80 w_70_desktop marginVertical_big section_middle_justify">
      <h2 class="timesFont w_100 w_50_desktop">Qué hacemos.</h2>
      <p class="w_100 w_50_desktop font_big">Trabajamos campañas integrales o parciales.
        Omnicanal o solo digital. </p>
    </div>  
  </div>
 
  <div class="section_top_justify w_80 w_85_desktop services"></div>
   
  <div id="experiencia" class="categorias section_middle_center w_100" alt="Ideas" title ="Ideas" >
    <div class="w_80 w_80_desktop">
      <h2 class="timesFont whiteColor"><span class="blackBackgroundColor">Qué&nbsp;categorías conocemos</span></h2>
      <p>turismo, hotelería, retail, belleza, inmobiliaria, banca, consumo masivo, línea blanca, entretenimiento.</p>
    </div>
  </div>
  <!-- Clients -->
  <div class="section_middle_justify w_80 w_85_desktop clientes-title-wrap">
    <h2 class="timesFont w_100  ">Experiencia con más de 30 marcas</h2> 
  </div>
  <div class="w_80 w_90_desktop clientes section_middle_center "></div>
  <div id="galeria" class="w_80 w_100_desktop gallery section_middle_justify"></div> 
 
  <!-- [ GLOBAL FOOTER ] -->
  <?php include './includes/footer.php';?>
  <!-- [ /GLOBAL FOOTER ] -->
 
  <script src="<?=theDomainUrl();?>/build/js/app.js?v=<?=theVersion();?>"></script>
 
</body>
</html>