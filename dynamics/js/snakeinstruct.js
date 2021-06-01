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
        /*Instrucciones*/
        $('#card').css('background', '#DE93D1'); //card de instrucciones 
        $('#Bsnake').css('background', '#A764D1') //boton de jugar
        $('#Breturn').css('background', '#A764D1') //boton de return
        $('#Lins').css('color', '#293133'); //letras de las instrucciones
        $('#Lins2').css('color', '#293133'); //letritas de las instrucciones 2
        $('#Bsnake').css('color', '#293133'); //color de las letras del boton de jugar
        $('#Breturn').css('color', '#293133'); //color de las letras del boton de return
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
        /*Instrucciones*/
        $('#card').css('background', '#B058C6');
        $('#Bsnake').css('background', '#97BBE8')
        $('#Breturn').css('background', '#97BBE8')
        $('#Lins').css('color', '#ffffff');
        $('#Lins2').css('color', '#ffffff');
        $('#Bsnake').css('color', '#ffffff');
        $('#Breturn').css('color', '#ffffff');
    });
});