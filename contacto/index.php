<?php include '../includes/config.php';  ?>
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
  <title>Contacto - Grupo Tendenze Comunicaciones</title>
  <link rel="canonical" href="<?=theCurrentUrl()?>"> 
  <meta name="title" content="Contacto - Grupo tendenze comunicaciones"> 
  <meta name="description" content="¿Buscas asesoría en estrategias, servicios de difusión, soluciones digitales o producción? Contáctanos para obtener apoyo personalizado en todos tus proyectos. ¡Estamos aquí para ayudarte!">
  <meta name="keywords"  content="asesoría en estrategias, servicios de difusión, soluciones digitales, producción de contenido, consultoría digital, marketing estratégico, servicios de marketing digital, producción audiovisual, estrategias de difusión, asesoría empresarial, comunicación digital, proyectos de producción, servicios creativos, marketing de contenidos, consultoría en medios digitales">

<!-- Open Graph -->
  <meta property="og:title" content="Contacto - Grupo tendenze comunicaciones">
  <meta property="og:locale" content="es_ES">
  <meta property="og:type" content="website">
  <meta property="og:url" content="<?=theDomainUrl()?>/promociones"> 
  <meta property="og:image" content="<?=theDomainUrl()?>/build/images/logo.svg">
  <meta property="og:site_name" content="Contacto">
  <meta property="og:description" content="¿Buscas asesoría en estrategias, servicios de difusión, soluciones digitales o producción? Contáctanos para obtener apoyo personalizado en todos tus proyectos. ¡Estamos aquí para ayudarte! ">
 

  <!-- twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:description"content="¿Buscas asesoría en estrategias, servicios de difusión, soluciones digitales o producción? Contáctanos para obtener apoyo personalizado en todos tus proyectos. ¡Estamos aquí para ayudarte! ">
  <meta name="twitter:title" content="Contacto - Grupo tendenze comunicaciones">
  <meta name="twitter:site" content="@tendenzeperu">
  <meta name="twitter:image" content="<?=theDomainUrl()?>/build/images/logo.svg">
  <meta name="twitter:creator" content="@tendenzeperu"> 

 
  <meta http-equiv="cache-control" content="max-age=0" />
  <meta http-equiv="cache-control" content="no-cache" />
  <meta http-equiv="expires" content="-1" />
  <meta http-equiv="expires" content="Sun May 23 2021 02:00:50 GMT-0500" />
  <meta http-equiv="pragma" content="no-cache" />
  <?php include '../includes/analytics.php';?>
 

</head>
<body class="">
  <!-- [ GLOBAL HEADER ] -->
  <?php include '../includes/header.php';?>
  <!-- [ /GLOBAL HEADER ] -->

  <div  class="bg-primary-500 ">
      <div class="max-w-[1244px] mx-auto px-[10px] pt-[44px] pb-[100px] relative ">
        <a class=" absolute  right-4 " href="https://wa.link/trikn5" target="_blank" ><img src="/build/svg/whatsapp.svg" class=" w-[60px] md:w-[80px] lg:w-[78px] h-[60px] md:h-[80px] lg:h-[78px] " alt=""></a>

         <div  class="block md:flex md:space-x-[68px]" >
          <div  class="flex-grow" > 
          <!--   <img  class=" w-[40px] md:w-[68px] mt-[35px]" src="/build/svg/comillas.svg" alt="Comillas"> -->
            <h2  class="font-extrabold text-[40px] sm:text-[62.3px] md:text-[70.02px] font-librebodoni leading-none md:leading-[60.17px] mt-[50px] text-black tracking-[-0.20px] mb-0 ">Hola,</h2>
            <p class=" font-normal text-[20px] md:text-[27px] leading-none md:leading-[60.17px]    md:tracking-[0.20px] text-black mb-5 "  >Estoy interesado en contactarlos por</p>
            
            <form id="envioContacto" class="contact-form " data-nombre="envioContacto" data-destino="/contacto/envioContacto.php"  action="/contacto/envioContacto.php" > 
                    <div class="w-full max-w-[726px] grid grid-cols-1 md:grid-cols-2 gap-x-0 gap-y-0 sm:gap-y-[18px]" id="temas">
                      <div class="contact-tema-wrap"><label class="contact-tema-label" for="contact-tema-1"><input id="contact-tema-1" type="checkbox" name="tema[]" value="Asesoría Estrategia" class="required" /> <span>Asesoría Estrategia</span> </label></div>  
                      <div class="contact-tema-wrap"><label class="contact-tema-label" for="contact-tema-2"><input id="contact-tema-2" type="checkbox" name="tema[]" value="Servicios de Difusión" class="required" /> <span>Servicios de Difusión</span> </label></div>  
                      <div class="contact-tema-wrap"><label class="contact-tema-label" for="contact-tema-3"><input id="contact-tema-3" type="checkbox" name="tema[]" value="Servicios Digitales" class="required" /> <span>Servicios Digitales</span> </label></div>  
                      <div class="contact-tema-wrap"><label class="contact-tema-label" for="contact-tema-4"><input id="contact-tema-4" type="checkbox" name="tema[]" value="Servicios de Producción" class="required" /> <span>Servicios de Producción</span> </label></div>   
                      <div class="contact-tema-wrap"><label class="contact-tema-label" for="contact-tema-5"><input id="contact-tema-5" type="checkbox" name="tema[]" value="Otros temas" class="required" /> <span>Otros temas</span> </label></div>   
                    </div>
                    <div class="w-full  mt-[40px] sm:mt-[64px] mb-[40px] sm:mb-[66px]  grid grid-cols-1 md:grid-cols-2 gap-x-[54px] gap-y-5 sm:gap-y-[39px]">
                      <label class="contact-form-control" > 
                        <input id="fullname" type="text" name="fullname" class="texto required " placeholder="Nombre y Apellido" autofocus />
                      </label>
                      <label class="contact-form-control" > 
                        <input id="email" type="email" name="email" class="email required" placeholder="Email" />  
                      </label>
                      <label class="contact-form-control" > 
                        <input id="telefono" type="text" name="telefono" class="number required" placeholder="Teléfono" />  
                      </label>
                      <label class="contact-form-control" > 
                        <input id="empresa" type="text" name="empresa" class="number required" placeholder="Empresa" />  
                      </label>
                      <label class="contact-form-control" > 
                        <input id="mensaje" type="text" name="mensaje" class="texto required" placeholder="Mensaje" />  
                      </label>
                    </div> 
                    <button type="submit" id=""  class="submit">enviar</button>
                   
                    <div  id="contacto-message" class=" hidden px-12 py-12 text-[25px] absolute top-[50%] left-[50%] transform translate-x-[-50%] bg-black text-white "></div>
							</form> 
          </div> 
         </div>
      </div>
  </div>

    <!-- [ GLOBAL FOOTER ] -->
    <?php include '../includes/footer.php';?>
    <!-- [ /GLOBAL FOOTER ] -->
  <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
  <script src="../build/js/contact.js?v=<?=theVersion();?>"></script>
  <script src="../build/js/app.js?v=<?=theVersion();?>"></script> 
</body>
</html>