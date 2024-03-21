<?php include '../includes/config.php';?>

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
  <title>Ver Presentación - Grupo Tendenze Comunicaciones</title>
  <link rel="canonical" href="<?=theDomainUrl()?>"> 
  <meta name="title" content="Ver Presentación - Grupo Tendenze Comunicaciones"> 
  <meta name="description" content="Trabajamos campañas integrales o parciales. Omnicanal o solo digital. Programación Web, Estrategia publicitaria, Offline y online: radios, OOH, cines, buscadores, Marketing contenidos, SEO, SEM, Diseño gráfico, Videos, Animaciones.">

<!-- Open Graph -->
  <meta property="og:title" content="Ver Presentación - Grupo Tendenze Comunicaciones">
  <meta property="og:locale" content="es_ES">
  <meta property="og:type" content="website">
  <meta property="og:url" content="<?=theDomainUrl()?>"> 
  <meta property="og:image" content="<?=theDomainUrl()?>/iniciativas/feriasdigitales.jpg">
  <meta property="og:site_name" content="Grupo tendenze comunicaciones">
  <meta property="og:description"    
    content="Trabajamos campañas integrales o parciales. Omnicanal o solo digital. Programación Web, Estrategia publicitaria, Offline y online: radios, OOH, cines, buscadores, Marketing contenidos, SEO, SEM, Diseño gráfico, Videos, Animaciones.">
  <!-- <meta property="og:image:secure_url" content="<?=theDomainUrl()?>/iniciativas/feriasdigitales.jpg"> -->
  <!-- <meta property="og:image:width" content="800"> 
  <meta property="og:image:height" content="562">  -->  

  <!-- twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Ver Presentación - Grupo Tendenze Comunicaciones">
  <meta name="twitter:description"content="Ver Presentación: Una gran oportunidad para microempresarios peruanos">
  <meta name="twitter:site" content="@tendenzeperu">
  <meta name="twitter:image" content="<?=theDomainUrl()?>/iniciativas/feriasdigitales.jpg">
  <meta name="twitter:creator" content="@tendenzeperu">
  <meta name="keywords"  content="Estrategia publicitaria y creativa omnicanal, medios, planificación y negociacion de medios, Offline y online: radios, OOH, cines, buscadores, redes sociales, red de contenidos activaciones, ferias, digital, Plan de marketing digital, Campañas branding, performance, Inbound MKT, Diagnóstico y estrategia SEO, SEM, redes sociales, E-mail marketing, Campañas search display, Programática, Mobile, Analítica, Optimización de KPIs, Servicios digitales, Diseño y programación web, Newsletters, digital, Diseño gráfico, Vídeos, Animaciones, Photo shooting,Eventos y Activaciones">
  <meta name="google-site-verification" content="WjoRRgtwp-V5es5QJFHbaoWJJPv029kpZmPKWyhSvgs" />


  <!-- pwa -->  
  <link rel="stylesheet" href="./style-dist.css?v=<?=theVersion();?>">

  <meta http-equiv="cache-control" content="max-age=0" />
  <meta http-equiv="cache-control" content="no-cache" />
  <meta http-equiv="expires" content="-1" />
  <meta http-equiv="expires" content="Sun May 23 2021 02:00:50 GMT-0500" />
  <meta http-equiv="pragma" content="no-cache" />

<!-- Google Tag Manager -->
<script> 
  setTimeout(function(){ 
    (function (w, d, s, l, i) {
    w[l] = w[l] || []; w[l].push({
      'gtm.start':
        new Date().getTime(), event: 'gtm.js'
    }); var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
        'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-PZPR3GG');
  },3000);  
  </script>
<!-- End Google Tag Manager -->

 

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LKGQELEQS2"></script>
<script>
     setTimeout(function(){ 
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-LKGQELEQS2');
     },3000);  
</script>

 

  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="0" />
  
     <style>
      main > iframe {
        width: 100%;
        height: 100vh;
        border: none;
      }
  /*     @media (screen-width: 1024px) {
        main > iframe {
          height: 100vh;
        }
        
      } */
     </style>
</head>
<body>
  <!-- [ GLOBAL HEADER ] -->
  <?php include '../includes/header.php';?>
  <!-- [ /GLOBAL HEADER ] --> 
 
  <main >
  <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTVojNzQxdel3btGkv2l_Zg9b4QCOn8CDz-kIbOvhjmjFEPZ_rVFeC_mKaAX0EY5w/embed?start=false&loop=false&delayms=60000" frameborder="0" width="100%" height="100%" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
  </main>
  
  <!-- [ GLOBAL FOOTER ] -->
  <?php include '../includes/footer.php';?>
  <!-- [ /GLOBAL FOOTER ] -->

  <script src="../build/js/app.js?v=<?=theVersion();?>"></script>
</body>
</html>