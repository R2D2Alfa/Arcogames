$(document).ready(function() {
    //modo claro
      $('.claro').click(function(event) {
        /*nav*/
        $('body').css('background', '#97BBE8'); //el body
        $('#title').css('color', '#293133');  //titulo
        $('#nav').css('background', '#5467C7'); //color del navbar
        $('#Lnav').css('color', '#293133'); //letras del nav 
        $('#Lpuntajes').css('color', '#293133'); //letras puntajes
        $('#Lcreditos').css('color', '#293133'); //letras creditos
        $('#navbarDropdown').css('color', '#293133'); //letras dropdown
        $('#fonods').css('background', '#5467C7'); //cajita del dropdown
        /*juego*/
        $('#marcador').css('background', '#97BBE8'); //fondito que tapa las 
        $('#Breturn').css('background', '#A764D1') //boton de return
        
      });
      //modo oscuro
      $('.oscuro').click(function(event) { 
          /*nav*/
          $('body').css('background', '#533ba3'); 
          $('#title').css('color', '#ffffff');
          $('#nav').css('background', '#532B75');
          $('#Lnav').css('color', '#ffffff');
          $('#Lpuntajes').css('color', '#ffffff'); 
          $('#Lcreditos').css('color', '#ffffff'); 
          $('#navbarDropdown').css('color', '#ffffff');
          $('#fonods').css('background', '#532B75');
          /*juego*/
          $('#marcador').css('background', '#533Ba3');
          $('#Breturn').css('background', '#97BBE8');
        });
  });


  /*
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Instrucciones</title>
    <script src="../lib/jquery-3.6.0.min.js"></script>
    <!--//////////////boopstrap///////////////-->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
     integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
     <!--//////////////CSS :)///////////////-->
    <link rel="stylesheet" href="../statics/styles/snake.css">

</head>
<body id="body" > 
     <!--//////////////////////////////////////////Navbar///////////////////////////////-->
     <nav class="navbar navbar-expand-lg " id="nav">
        <div class="container-fluid">
          <a class="navbar-brand" href="../templates/inicio.html" id="Lnav"><strong>Arcogames</strong></a>
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" id="bot">
             <span class="navbar-toggler-icon" id="bot"></span>
           </button>
           <div class="collapse navbar-collapse" id="navbarNav">
             <ul class="navbar-nav">
               <li class="nav-item">
                 <a class="nav-link" href="#" id="Lpuntajes">Puntajes</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="./creditos.html" id="Lcreditos">Creditos</a>
              </li>
              <!--//////////////Fondos (navbar)///////////////-->
              <li class="nav-item dropdown">
                 <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Modo de pantalla
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown" id="fonods">
                <!--Oscuro-->
                <li><a class="dropdown-item" href="#" id="LfonodsOsc"><input type="button" value="oscuro" class="oscuro" id="oscuro"></a></li>
                <!--Claro-->
                <li><a class="dropdown-item" href="#" id="LfonodsCl"><input type="button" value="claro" class="claro" id="claro"></a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <br>

    
     <!--//////////////boopstrap///////////////-->
     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js"
     integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script> 

      <!--/////////Script para cambiar los fondos///////////-->
      <script src="../dynamics/js/snakepantalla.js"></script>
     
      <script src="../dynamics/js/snake.js"></script>
      <!--////////////////////Contenedor////////////////////////////////////-->
 <div class="container">
    <div class="row">
        <div class="col-lg-12" class="col-md-12">  
           <canvas id="canvas"></canvas>
        </div>
    </div>
</div>
</body>
</html>
 
<!--<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../statics/styles/snake.css">
    <title>Prueba</title>
</head>
<body>
    <canvas id="canvas"></canvas>
    <script src="../dynamics/js/snake.js"></script>
</body>
</html>-->*/