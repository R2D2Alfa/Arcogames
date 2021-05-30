   +window.addEventListener("load", ()=>{
    let bird = document.getElementById("bird");
    let tubo1 = document.getElementById("tubo1");
    let tubo2 = document.getElementById("tubo2");
    let tubo3 = document.getElementById("tubo3");


    function random2(){
        return Math.round(Math.random()*1000);
    }
    //segundo random de 1 y 2
    function random1(){
        return Math.round(Math.random()*1000);
    }
    function random3(){
        return Math.round(Math.random()*1000);
    }

    bird.addEventListener("keydown", (e)=>{
        if(e.key=="ArrowUp"){
            bird.style.animationPlayState = "running"
            console.log("Salto")
          }
    })

    let a = random1()
    let b = random2()
    console.log(random2())
    console.log(random1())

    function modificar() {
        if (document.getElementById("tubo1").style.height == '10px') {
            console.log("Salto")
        document.getElementById("tubo1").style.height = random1().px;
        document.getElementById("tubo2").style.height = random2().px;
        } else {
            console.log("Salto")
        document.getElementById("tubo1").style.height = a.px;
        document.getElementById("tubo2").style.height = b.px;
        }
        }

    modificar()

   })
   






