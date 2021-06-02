let jugador;
let puntaje;
let fecha;
let formFech = [];
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
        
        });
  });
  obtCookies("jugador");

  function obtCookies(nombre){
    let cookies = document.cookie;
    let arrCook = cookies.split(";");
    for(let val of arrCook){
      let cookie = val.split("=");
      if(cookie[0]===nombre){
        jugador = cookie[1];
      }
      else{
        let puntFech = cookie[1].split(",");  puntaje_2="3,13/20/32"
        puntaje = puntFech[0];
        fecha = puntFech[1];
        formFech = fecha.split(" ");
        imprimir();
      }
    }
  };
function imprimir(){
  let h1 = document.createElement("h1");
  let padre = document.getElementById("puntajes");
  h1.innerText = jugador+": "+puntaje+", "+formFech[2]+"/"+formFech[1]+"/"+formFech[3]+" "+formFech[4];
  padre.appendChild(h1);
};