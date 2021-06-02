let jugador;
let puntaje;
let puntajes = [];
let puntMax;
let fechMax = [];
let fechaFinal;
let fecha;
let juego;
let formFech = [];
let cookies = document.cookie;
let arrCook = cookies.split(";");
let j = 0;
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
    for(let val of arrCook){
      let cookie = val.split("=");
      if(cookie[0]===nombre){
        jugador = cookie[1];
      }
      else{
        let puntFech = cookie[1].split(",");
        puntaje = puntFech[0];
        puntajes.push(puntaje);
        fecha = puntFech[1];
        fechMax.push(puntFech[1]);
        juego = puntFech[2];
        formFech = fecha.split(" ");
      }
    }
  };

let usuario = document.getElementById("usuario");
let fech = document.getElementById("fecha");
let hora = document.getElementById("hora");
let i = 0;
puntMax = puntajes[0];
for(let val of puntajes){
  if(parseInt(val) > parseInt(puntMax)){
    puntMax = val;
  }
} 
for(let valores of arrCook){
  if(j > 0){
    let punt = arrCook[j].split("=");
    let punt2 = punt[1].split(",");
    if(punt2[0] === puntMax){
      fechaFinal = punt2[1];
    }
  }
  j++;
}

puntSnake.innerText = puntMax;
fech.innerText = fechaFinal[2]+"/"+fechaFinal[1]+"/"+fechaFinal[3];
hora.innerText = fechaFinal[4];
usuario.innerText = jugador;