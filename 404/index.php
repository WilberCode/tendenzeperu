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
  <title>Grupo Tendenze Comunicaciones</title> 
  <meta name="title" content="404"> 
  <meta name="description" content="Trabajamos campañas integrales o parciales. Omnicanal o solo digital. Hacemos Estrategia publicitaria, planificación de Medios, Marketing Digital y Diseño gráfico.">
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="0" /> 
  <style>
    body {
      background-color: #F8F8F8;
    }
    h1 {
      color: #000;
      font-size: 100px;
      margin: 100px 0 0 0;
    }
    .error-404{
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 90px; padding-bottom: 100px; 
        margin-bottom: auto;  
    }
    .error-404{ 
        text-align: center; 
        font-size: 18px;
    }
    .error-404 a{
        text-decoration: underline;
        font-weight: 600;
        color: #000;
    }

    
  </style>
</head>
<body style="display: flex; flex-direction: column; height: 100vh" >
  <!-- [ GLOBAL HEADER ] -->
  <?php include '../includes/header.php';?>
  <!-- [ /GLOBAL HEADER ] -->
  <div class="error-404" >
    <div>
      <h1>404</h1>
      <p> No se ecuentra la página</p>
      <a href="/">Regresar al Home</a>
    </div>  
  </div>
  
  <!-- [ GLOBAL FOOTER ] -->
  <?php include '../includes/footer.php';?>
  <!-- [ /GLOBAL FOOTER ] -->
 
  <script src="<?=theDomainUrl();?>/build/js/app.js?v=<?=theVersion();?>"></script>
 
</body>
</html>