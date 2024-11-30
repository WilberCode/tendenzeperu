<?php   

$homeurl = 'index.php';                               
$homepage = "/";
$currentpage = $_SERVER['REQUEST_URI'];

$isHome = !($currentpage == $homepage or $currentpage == 'index.php');                             

?>  
 <!-- Google Tag Manager (noscript) -->
<!--   <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PZPR3GG" height="0" width="0"  style="display:none;visibility:hidden"></iframe></noscript>
 -->  <!-- End Google Tag Manager (noscript) -->
  <header id="header" class="flex items-center lg:items-end w-full">
    <div class="flex w-full px-[10px] max-w-[1366px] mx-auto h-full"> 
      <a class="relative z-10 w-full  maxsm:ml-5 logo-wrap" href="<?=theDomainUrl()?>/en" target="_self" > 
        <img  class="absolute w-full max-w-[100px]  sm:max-w-[164px]  top-0"  src="<?=theDomainUrl()?>/build/images/logo.svg" alt="Logo Grupo Tendenze Comunicaciones"  title="Logo Grupo Tendenze Comunicaciones"   />
      </a> 
      <nav class=" w_100 h-full flex  justify-end items-center lg:items-end py-[25px] " itemscope itemtype="http://schema.org/SiteNavigationElement" >
        
        <!-- <button id="hb" class="hamburger section_middle_center"><i class="fas fa-bars"></i></button> --> 
        <div  class="language lg:hidden">
              <a class="anchor idioma current-language" href="javascript:void(0);" itemprop="url">
                  <img src="/build/svg/english.svg" alt="Idioma Inglés">
              </a> 
              <!-- Bandera oculta (aparece al hacer clic en la actual) -->
              <div class="dropdown-language hidden">
                  <a class="anchor idioma " href="<?=theDomainUrl()?>/" itemprop="url">
                      <img src="/build/svg/spanish.svg" alt="Idioma Español">
                  </a> 
              </div> 
            </div> 
        <div class="nav-toggle-wrap  mr-8 ">
              <button  id="nav-toggle" class="nav-toggle">  
                  <div  class="nav-toggle-icons" >
                    <span ></span> 
                    <span ></span> 
                    <span ></span> 
                    <span ></span> 
                    <span ></span> 
                    <span ></span>  
                  </div>
              </button>
           </div> 
        <ul class="w_100 section_middle_right justify-start lg:ml-[43px] menu" id="menu">
          <li><a class="anchor" href="<?=theDomainUrl()?>/en/#what-we-do" itemprop="url"  itemprop="name" >What We Do</a></li> 
          <li><a class="anchor" href="<?=theDomainUrl()?>/en/#experience" itemprop="url"  itemprop="name" >Experience</a></li>
          <li><a class="anchor" href="<?=theDomainUrl()?>/promociones" itemprop="url"  itemprop="name" >Promotions</a></li>
          <li><a class="anchor" href="<?=theDomainUrl()?>/videos" itemprop="url"  itemprop="name" >Videos</a></li>
          <li  class="item-has-submenu" ><a class="anchor <?php  if( $currentpage == '/iniciativas/' ){ echo 'active'; } ?>" href="<?=theDomainUrl()?>/iniciativas" itemprop="url"  itemprop="name" >Initiatives <span  class="dropdown" style="display:inline-flex;"> <img src="<?=theDomainUrl()?>/build/images/down.svg" alt="down"> </span> </a> 
            <ul class="submenu">
              <li><a class="anchor"  href="https://feriasdigitales.pe/" itemprop="url"  target="_blank" itemprop="name" >Web Ferias Digitales  </a></li>
              <li><a class="anchor"  href="https://feriasdigitales.pe/blog/" itemprop="url"  target="_blank" itemprop="name" >Blog Ferias Digitales </a></li> 
              <li><a class="anchor"  href="https://www.instagram.com/feriasdigitales/" itemprop="url"  target="_blank" itemprop="name" >Instagram </a></li> 
            </ul>
          </li> 
          <li><a class="anchor descarga mark"   href="/presentacion/" itemprop="url"  itemprop="name"  >Presentation</a></li> 
          <li><a class="anchor" href="<?=theDomainUrl()?>/en/contact" itemprop="url"  itemprop="name" >Contact</a></li> 
 
          <li>
            <div  class="language maxlg:hidden">
              <a class="anchor idioma current-language" href="javascript:void(0);" itemprop="url">
                  <img src="/build/svg/english.svg" alt="Idioma Inglés">
              </a> 
              <!-- Bandera oculta (aparece al hacer clic en la actual) -->
              <div class="dropdown-language hidden">
                  <a class="anchor idioma " href="<?=theDomainUrl()?>/" itemprop="url">
                      <img src="/build/svg/spanish.svg" alt="Idioma Español">
                  </a> 
              </div> 
            </div> 
          </li>
        </ul>
      </nav>
    </div>
 
  </header>