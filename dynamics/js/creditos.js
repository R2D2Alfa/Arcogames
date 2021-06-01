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