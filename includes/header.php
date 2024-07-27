<?php   

$homeurl = 'index.php';                               
$homepage = "/";
$currentpage = $_SERVER['REQUEST_URI'];

$isHome = !($currentpage == $homepage or $currentpage == 'index.php');                             

?> 

<style>
  .descarga{
    font-size:15px; 
  }

  @media (max-width:750px) {
    .descarga{
      font-size:17px;  
      padding: 7px 34px !important; 
      background: white;
    }
    
  }

</style>
 <!-- Google Tag Manager (noscript) -->
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PZPR3GG" height="0" width="0"  style="display:none;visibility:hidden"></iframe></noscript>
  <!-- End Google Tag Manager (noscript) -->
  <header id="header" class="section_middle_center w_100">
    <div class="w_95_desktop w_80 section_middle_justify"> 
      <a class="header-logo" href="/" target="_self" > 
        <img src="<?=theDomainUrl()?>/build/images/tendenze.svg" alt="Logo Grupo Tendenze Comunicaciones"  title="Logo Grupo Tendenze Comunicaciones"   />
      </a> 
      <nav class="section_middle_right w_100" itemscope itemtype="http://schema.org/SiteNavigationElement" >
        <!-- <button id="hb" class="hamburger section_middle_center"><i class="fas fa-bars"></i></button> -->
        <div class="nav-toggle-wrap flex lg:hidden items-center">
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
        <ul class="w_100 section_middle_right menu" id="menu">
          <li><a class="anchor" href="<?=theDomainUrl()?>/#que-hacemos" itemprop="url"  itemprop="name" >Qué hacemos</a></li>
          <li><a class="anchor" href="<?=theDomainUrl()?>/#como-hacemos" itemprop="url"  itemprop="name" >Cómo lo hacemos</a></li>
          <li><a class="anchor" href="<?=theDomainUrl()?>/#experiencia" itemprop="url"  itemprop="name" >Experiencia</a></li>
          <li><a class="anchor" href="<?=theDomainUrl()?>/promociones" itemprop="url"  itemprop="name" >Promociones</a></li>
          <li><a class="anchor" href="<?=theDomainUrl()?>/videos" itemprop="url"  itemprop="name" >Videos</a></li>
          <li  class="item-has-submenu" ><a class="anchor <?php  if( $currentpage == '/iniciativas/' ){ echo 'active'; } ?>" href="<?=theDomainUrl()?>/iniciativas" itemprop="url"  itemprop="name" >Iniciativas <span  class="dropdown" style="display:inline-flex;"> <img src="<?=theDomainUrl()?>/build/images/down.svg" alt="down"> </span> </a> 
            <ul class="submenu">
              <li><a class="anchor"  href="https://feriasdigitales.pe/" itemprop="url"  target="_blank" itemprop="name" >Web Ferias Digitales  </a></li>
              <li><a class="anchor"  href="https://feriasdigitales.pe/blog/" itemprop="url"  target="_blank" itemprop="name" >Blog Ferias Digitales </a></li> 
              <li><a class="anchor"  href="https://www.instagram.com/feriasdigitales/" itemprop="url"  target="_blank" itemprop="name" >Instagram </a></li> 
            </ul>
          </li>



         <!--  <li><a class="anchor" href="#contacto" itemprop="url"  itemprop="name" >Contacto</a></li>  -->
          <li><a class="anchor descarga"   href="/presentacion/" itemprop="url"  itemprop="name"  >Ver presentación</a></li>
        
       
        </ul>
      </nav>
    </div>
    <style>
            @media (max-width: 1020px) {
              .descarga{
                border: 2px solid #fae800;
                padding: 0 25px;
                position: relative;
                display: inline-flex;
                margin-top: 10px;
              }  
              .descarga:before {
                content: '';
                position: absolute;
                background: url(/build/images/trianglebuble.svg) no-repeat;
                z-index: 2;
                width: 40px;
                height: 21px;
                right: 10px;
                bottom: -21px;
            
           }
         
            }
          </style> 
  </header>