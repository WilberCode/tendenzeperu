<?php   

$homeurl = 'index.php';                               
$homepage = "/";
$currentpage = $_SERVER['REQUEST_URI'];

$isHome = !($currentpage == $homepage or $currentpage == 'index.php');                             

?> 

 <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PZPR3GG" height="0" width="0"  style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
  <header id="header" class="section_middle_center w_100">
    <div class="w_95_desktop w_80 section_middle_justify">
      <div class="logo section_middle_left w_38_desktop w_100">
        <a href="/" class="anchor" target="_self" rel="nofollow" >
          <img src="<?=theDomainUrl()?>/build/images/grupo-tendenze-comunicaciones.svg" alt="Logo Grupo Tendenze Comunicaciones" title="Logo Grupo Tendenze Comunicaciones" class="logoGTC" />
        </a>
        <a href="/" target="_self" > 
          <img src="<?=theDomainUrl()?>/build/images/logo-tendenze-peru.svg" alt="Logo Grupo Tendenze Comunicaciones"  title="Logo Grupo Tendenze Comunicaciones" class="marcas" />
        </a>
      </div>
      <nav class="section_middle_right w_62_desktop" itemscope itemtype="http://schema.org/SiteNavigationElement" >
        <button id="hb" class="hamburger section_middle_center"><i class="fas fa-bars"></i></button>
        <ul class="w_100 section_middle_right menu">
          <li><a class="anchor" href="<?=theDomainUrl()?>/#que-hacemos" itemprop="url"  itemprop="name" >Qué hacemos</a></li>
          <li><a class="anchor" href="<?=theDomainUrl()?>/#como-hacemos" itemprop="url"  itemprop="name" >Cómo lo hacemos</a></li>
          <li><a class="anchor" href="<?=theDomainUrl()?>/#experiencia" itemprop="url"  itemprop="name" >Experiencia</a></li>
          <li><a class="anchor" href="<?=theDomainUrl()?>/#galeria" itemprop="url"  itemprop="name" >Galería</a></li>
          <li><a class="anchor" href="<?=theDomainUrl()?>/videos" itemprop="url"  itemprop="name" >Videos</a></li>
          <li  class="item-has-submenu" ><a class="anchor <?php  if( $currentpage == '/iniciativas/' ){ echo 'active'; } ?>" href="<?=theDomainUrl()?>/iniciativas" itemprop="url"  itemprop="name" >Iniciativas <span  class="dropdown"> <img src="<?=theDomainUrl()?>/build/images/down.svg" alt="down"> </span> </a> 
            <ul class="submenu">
              <li><a class="anchor"  href="https://feriasdigitales.pe/" itemprop="url"  target="_blank" itemprop="name" >Web Ferias Digitales  </a></li>
              <li><a class="anchor"  href="https://feriasdigitales.pe/blog/" itemprop="url"  target="_blank" itemprop="name" >Blog Ferias Digitales </a></li> 
              <li><a class="anchor"  href="https://www.instagram.com/feriasdigitales/" itemprop="url"  target="_blank" itemprop="name" >Instagram </a></li> 
            </ul>
          </li>



          <li><a class="anchor" href="#contacto" itemprop="url"  itemprop="name" >Contacto</a></li> 
        </ul>
      </nav>
    </div>
  </header>