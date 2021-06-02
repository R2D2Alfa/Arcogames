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