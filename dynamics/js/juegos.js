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
      /*juegos*/
      $('.card').css('background', '#A764D1'); //las cartas
      $('#bplay').css('background', '#5467C7'); //boton de jugar 
      $('#bplay2').css('background', '#5467c7'); // boton de jugar 
      $('#Lbird').css('color', '#293133'); //letras bird
      $('#Lsnake').css('color', '#293133'); //letras snake
      $('#bplay').css('color', '#293133'); //letras boton play bird
      $('#bplay2').css('color', '#293133'); //letras boton play snake
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
        /*juegos*/
        $('.card').css('background', '#97BBE8');
        $('#bplay').css('background', '#B058C6');
        $('#bplay2').css('background', '#B058C6');
        $('#Lbird').css('color', '#ffffff');
        $('#Lsnake').css('color', '#ffffff');
        $('#bplay').css('color', '#ffffff');
        $('#bplay2').css('color', '#ffffff');
      });
});