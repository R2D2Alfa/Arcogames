$(document).ready(function() {
    //modo claro
    $('.claro').click(function(event) {
      $('body').css('background', '#97BBE8');  //body
      $('#title').css('color', '#293133');  //titulo
      $('#nav').css('background', '#5467C7'); //color del navbar
      $('#Lnav').css('color', '#293133'); //letras del nav 
      $('#Lpuntajes').css('color', '#293133'); //letras puntajes
      $('#Ljuegos').css('color', '#293133'); //letras juegos  (atenta que este y el de arriba cambian dependeiendo la pag)
      $('#navbarDropdown').css('color', '#293133'); //letras dropdown
      $('#fonods').css('background', '#5467C7'); //cajita del dropdown

      $('.creadores').css('background', '#DE93D1');   //fichas para los nombres
      $('.img-thumbnail').css('background', '#97BBE8'); //fondo de las img
      $('#arturo').css('color', '#293133'); //letras arturo
      $('#victor').css('color', '#293133'); //letras victor
      $('#alexa').css('color', '#293133'); //letras alexa
      $('#emiliano').css('color', '#293133'); //letras emiliano
    });
    //modo oscuro
    $('.oscuro').click(function(event) { 
        /*navbar*/
        $('body').css('background', '#533ba3'); 
        $('#title').css('color', '#ffffff');
        $('#nav').css('background', '#532B75'); 
        $('#Lnav').css('color', '#ffffff'); 
        $('#Lpuntajes').css('color', '#ffffff'); //letras puntajes
        $('#Ljuegos').css('color', '#ffffff'); //letras juegos  (atenta que este y el de arriba cambian dependeiendo la pag)
        $('#navbarDropdown').css('color', '#ffffff'); 
        $('#fonods').css('background', '#532B75'); 
        /*creditos*/
        $('.creadores').css('background', '#B058C6');
        $('.img-thumbnail').css('background', 'none');
        $('#arturo').css('color', '#ffffff'); 
        $('#victor').css('color', '#ffffff'); 
        $('#alexa').css('color', '#ffffff');
        $('#emiliano').css('color', '#ffffff');
      });
});

/*<div class="row"> <br>
     <!--////Tamaño de las columnas de los nombres/fotos -->
     <div class="col-lg-12"  class="col-md-12">
      <p id="title">Creadores</p>  
     </div>
     <div class="col-lg-6"  class="col-md-12"> 
       <br>  
       <div id="creadores" class="creadores">
         <div id="arturo"><h4>&nbsp;&nbsp;Artuo Alfaro Dominguez</h4></div>
       </div>  
       <br> 
       <img src="../statics/img/arturo (1).jpg" class="img-thumbnail" alt="arturo" id="arturoF">
     </div> 
     <div class="col-lg-6"  class="col-md-12">    
      <br>  
      <div id="creadores" class="creadores">
        <div id="victor"><h4>&nbsp;&nbsp;Victor Manuel Escobar Diaz</h4></div>
      </div>   
      <br>  
      <img src="../statics/img/victor (1).jpg" class="img-thumbnail" alt="victor" id="victorF">
    </div> 
    <div class="col-lg-6"  class="col-md-12">    
      <br>  
      <div id="creadores" class="creadores">
        <div id="alexa"><h4>&nbsp;&nbsp;Alexa Flores Medero Campos</h4></div>
      </div>   
      <br>  
      <img src="../statics/img/alexa (1).jpg" class="img-thumbnail" alt="alexa" id="alexaF">
    </div> 
    <div class="col-lg-6"  class="col-md-12">    
      <br>  
      <div id="creadores" class="creadores">
        <div id="emiliano"><h4>&nbsp;&nbsp;Emiliano</h4></div>
      </div>   
      <br>  
      <img src="../statics/img/emilieno (1).jpg" class="img-thumbnail" alt="emiliano" id="emilianoF">
    </div> 
    
  </div> */