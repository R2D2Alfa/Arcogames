let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let anchoCuad = canvas.width/20;
let altoCuad = canvas.height/17;
let pxY = 0;
let pxX = 0;
let cont = 0;
let posInX = 10;
let vel = 60;
let puntaje = 0;
let arrTab = [];
let posSer = [];
let dirIz = false;
let dirDer = false;
let dirAr = false;
let dirAb = false;
let inicio = true;
let uno = false;
let colCom = false;
let perdio = false;
let uno2 = false;
let victoria = false;
let perMov = true;
let posInY;
let posComida;
let numAlYCom;
let numAlXCom;
let colComCol;
let valCook = 1;
let valRec;
//Números aleatorios dependiendo de si es fila o columnas entre esos rangos
function numAl(dirTab){
    return (Math.floor(Math.random()*(dirTab-1)))+1;
}
//Dibujo de la serpiente, la comida, revisa condiciones de ganar/perder y genera comida aleatoria
function dib(){
    //Quita la primera posición del arreglo de la serpiente y se guarda en un  variable
    let colAg = posSer.shift();
    //Revisa si la longitud del arreglo es equivalente al area del tablero y en caso de ser verdadero significa que ganó
    victoria = ((posSer.length)===(17*20))?true:false;
    //Limpia canvas
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if(victoria === false){
        //Generación de comida aleatoria mientras no esté en una posición del cuerpo de la serpiente
        if(colCom === false){
            do{
                numAlYCom = numAl(17);
                numAlXCom = numAl(20);
                colComCol = posSer.indexOf(arrTab[numAlYCom][numAlXCom]); 
            }while(colComCol!==-1);
            colCom = true;
        }//Cada que se agarra la comida, se genera nueva, se agrega al inicio del arreglo el valor quitado con lo que aumenta la longitud de la serpiente y finalmente se aumenta la velocidad de frames
        posSer.forEach((valorES)=>{
            if(valorES === arrTab[numAlYCom][numAlXCom]){
                puntaje++;
                colCom = false;
                posSer.unshift(colAg);
                if(vel > 10){
                    vel -= 5;
                }
            }
        });
        //Revisa si el valor de la cabeza de la serpiente equivale a otro valor del arreglo lo que significa que choco consigo misma y perdió
        let repitio = posSer.indexOf(posSer[posSer.length-1]);
        perdio = (repitio === (posSer.length-1))?false:true;
        //Dibujo de comida
        posComida = arrTab[numAlYCom][numAlXCom].split(",");
        ctx.beginPath();
            ctx.rect(parseFloat(posComida[0]),parseFloat(posComida[1]),anchoCuad,altoCuad);
            ctx.fillStyle = "#5467C7";//comida
            ctx.fill();
        ctx.closePath();
    }
    //Dibujo del arreglo de la serpiente
    posSer.forEach((val)=>{  
        let pos = val.split(",");
        ctx.beginPath();
            ctx.rect(parseFloat(pos[0]),parseFloat(pos[1]),anchoCuad,altoCuad);
            ctx.fillStyle = "#DE28B3"; //serpiente
            ctx.fill();
        ctx.closePath();
    });
}
//Función que verifica si ha iniciado o no, si ha ganado o no, si ha perdido o no y finalmente lleva el control de la velocidad
function dir(){
    if(perdio===false && victoria===false)
    {   //Posición de inicio de la serpiente
        if(inicio===true){
            for(posInY = 13; posInY > 10; posInY--){    
                let pos = arrTab[posInY][posInX].split(","); 
                if(uno === false){
                    posSer.push(arrTab[posInY][posInX]); 
                }
                ctx.rect(parseFloat(pos[0]),parseFloat(pos[1]),anchoCuad,altoCuad);
                ctx.fillStyle = "#DE28B3";
                ctx.fill();
            }
            uno = true;
        }//Llamada a la función dib(), control de la velocidad con módulo de la variable de velocidad, aumento o resta de ciertas posiciones del arreglo para el movimiento a dicha dirección
        else{
            if(uno2===false){
                if(dirAb===true){
                    posInY = 13;
                }else{
                    posInY++;
                }
                uno2 = true;
            }
            cont++;
            if(cont%vel === 0){//Empuje al arreglo de la serpiente de las nuevas posiciones según la dirección y control de "atravesar" la pantalla
                if(dirIz === true){
                    if(posInX > 0){
                        posInX--;
                    }else{
                        posInX = 19;
                    }
                    posSer.push(arrTab[posInY][posInX]);         
                }
                else if(dirDer === true){
                    if(posInX < 19){
                        posInX++;
                    }else{
                        posInX = 0;
                    }
                    posSer.push(arrTab[posInY][posInX]);
                }
                else if(dirAr === true){
                    if(posInY > 0){
                        posInY--;
                    }else{
                        posInY = 16;
                    }
                    posSer.push(arrTab[posInY][posInX]);
                }
                else if(dirAb === true){
                    if(posInY < 16){
                        posInY++;
                    }else{
                        posInY = 0;
                    }
                    posSer.push(arrTab[posInY][posInX]);
                }
                dib();
                perMov = true;
            }
        }
        requestAnimationFrame(dir);
    }else{//Victoria o derrota
        let cookies = document.cookie;
        let arrCookies = cookies.split(";");
        if(arrCookies.length >= 2){
            for(let val of arrCookies){
                let nomb = val.split("=");
                valRec = nomb[0];
                let valGalleta = valRec.split("_");
                valCook = parseInt(valGalleta[1])+1;
            }
        }
        let fecha = new Date();
        let fechaAct = new Date();
        cadFechAct = fechaAct.toString();
        fecha.setTime(fecha.getTime()+1000*60*60*24*7);
        document.cookie="puntaje_"+valCook.toString()+"="+puntaje.toString()+","+cadFechAct+"; expires="+fecha.toGMTString();
        if(perdio===true){
            console.log("Perdiste");
            document.body.innerHTML = '<h1>Perdiste</h1>'
        }
        else if(victoria ===true){
            console.log("Ganaste");
        }
    }
}

//Obtención de pixeles del tablero
for(let i = 0; i < 17; i++){
    arrTab[i] = new Array();
    pxX = 0;
    for(let j = 0; j < 20; j++){
        arrTab[i].push(pxX+","+pxY);
        pxX += anchoCuad;
    }
    pxY += altoCuad;
}
//Detección de eventos
document.querySelector("body").addEventListener("keydown",(letra)=>{
    inicio = false;
    //Direcciones
    if(perMov){
    if(letra.key === "ArrowLeft" && dirDer === false){
        dirIz = true;
        dirDer = false;
        dirAr = false;
        dirAb = false;
        perMov = false;
    }
    if(letra.key === "ArrowRight" && dirIz === false){
        dirDer = true;
        dirIz = false;
        dirAr = false;
        dirAb = false;
        perMov = false;
    }
    if(letra.key === "ArrowUp" && dirAb === false){
        dirAr = true;
        dirDer = false;
        dirIz = false;
        dirAb = false;
        perMov = false;
    }
    if(letra.key === "ArrowDown" && dirAr === false){
        dirAb = true;
        dirDer = false;
        dirAr = false;
        dirIz = false;
        perMov = false;
    }
}
});
requestAnimationFrame(dir);