$(document).ready(function() {
    $('.claro').click(function(event) {
      $('body').css('background', '#97BBE8'); 
      $('.card').css('background', '#A764D1');
      $('#bplay').css('background', '#5467C7');
      $('#bplay2').css('background', '#5467c7');
    });
    $('.oscuro').click(function(event) { 
        $('body').css('background', '#533ba3'); 
        $('.card').css('background', '#97BBE8');
        $('#bplay').css('background', '#B058C6');
        $('#bplay2').css('background', '#B058C6');
      });
});