let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let anchoCuad = canvas.width/20;
let altoCuad = canvas.height/17;
let pxY = 0;
let pxX = 0;
let arrTab = [];
let posInY;
let posInX = 10;
let dirIz = false;
let dirDer = false;
let dirAr = false;
let dirAb = false;
let inicio = true;
let uno = false;
let cont = 0;
let posComida;
let numAlYCom;
let numAlXCom;
let colCom = false;
let perdio = false;
let posSer = [];
let vel = 60;

function numAl(dirTab){
    return (Math.floor(Math.random()*(dirTab-1)))+1;
}
function dib(){
    let colAg = posSer.shift();
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if(colCom === false){
        //while  validar que la comida no salga en partes del cuerpo de la vibora porque explota todo XD
        numAlYCom = numAl(17);
        numAlXCom = numAl(20);
        colCom = true;
    }
    posSer.forEach((valorES)=>{
        if(valorES === arrTab[numAlYCom][numAlXCom]){
            colCom = false;
            posSer.unshift(colAg);
            if(vel > 10){
                vel -= 5;}
        }
    });
    let repitio = posSer.lastIndexOf(posSer[0]);
    console.log(posSer);
    perdio = (repitio === 0)?false:true;
    posComida = arrTab[numAlYCom][numAlXCom].split(",");
    ctx.beginPath();
        ctx.rect(parseFloat(posComida[0]),parseFloat(posComida[1]),anchoCuad,altoCuad);
        ctx.fillStyle = "#572364";
        ctx.fill();
    ctx.closePath();
    posSer.forEach((val)=>{  
        let pos = val.split(",");
        ctx.beginPath();
            ctx.rect(parseFloat(pos[0]),parseFloat(pos[1]),anchoCuad,altoCuad);
            ctx.fillStyle = "#FF0000";
            ctx.fill();
        ctx.closePath();
    });
}

function dir(){
    if(perdio===false)
    {
        if(inicio===true){
            for(posInY = 10; posInY < 14; posInY++){    
                let pos = arrTab[posInY][posInX].split(","); 
                if(uno === false){
                    posSer.push(arrTab[posInY][posInX]); 
                }
                ctx.rect(parseFloat(pos[0]),parseFloat(pos[1]),anchoCuad,altoCuad);
                ctx.fillStyle = "#FF0000";
                ctx.fill();
            }
            uno = true;
        }
        else{
            cont++;
            if(cont%vel === 0){
                if(dirIz === true){
                    posInX--;
                    posSer.push(arrTab[posInY][posInX]);         
                }
                else if(dirDer === true){
                    posInX++;
                    posSer.push(arrTab[posInY][posInX]);
                }
                else if(dirAr === true){
                    posInY--;
                    posSer.push(arrTab[posInY][posInX]);
                }
                else if(dirAb === true){
                    posInY++;
                    posSer.push(arrTab[posInY][posInX]);
                }
                dib();
            }
        }
        requestAnimationFrame(dir);
    }else{
        console.log("Perdiste");
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

document.querySelector("body").addEventListener("keydown",(letra)=>{
    inicio = false;
    if(letra.key === "ArrowLeft"){
        dirIz = true;
        dirDer = false;
        dirAr = false;
        dirAb = false;
    }
    if(letra.key === "ArrowRight"){
        dirDer = true;
        dirIz = false;
        dirAr = false;
        dirAb = false;
    }
    if(letra.key === "ArrowUp"){
        dirAr = true;
        dirDer = false;
        dirIz = false;
        dirAb = false;
    }
    if(letra.key === "ArrowDown"){
        dirAb = true;
        dirDer = false;
        dirAr = false;
        dirIz = false;
    }
});
requestAnimationFrame(dir);