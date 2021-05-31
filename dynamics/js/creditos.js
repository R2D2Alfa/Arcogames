$(document).ready(function() {
    $('.claro').click(function(event) {
      $('body').css('background', '#97BBE8'); 
      $('.creadores').css('background', '#DE93D1');  
      $('.img-thumbnail').css('background', '#97BBE8');
    });
    $('.oscuro').click(function(event) { 
        $('body').css('background', '#533ba3'); 
        $('.creadores').css('background', '#B058C6');
        $('.img-thumbnail').css('background', '#533ba3');
      });
});