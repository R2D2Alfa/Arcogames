   +window.addEventListener("load", ()=>{
    let bird = document.getElementById("bird");
    let tubo1 = document.getElementById("tubo1");
    let tubo2 = document.getElementById("tubo2");
    let tubo3 = document.getElementById("tubo3");
    let tubo1a = document.getElementById("tubo1a")
    let tubo2a = document.getElementById("tubo2a")
    let tubo3a = document.getElementById("tubo3a")
    let valort1 = window.getComputedStyle(tubo1);
    let valort2 = window.getComputedStyle(tubo2);
    let valort3 = window.getComputedStyle(tubo3);
    let left1 = valort1.getPropertyValue('left')
    let left2 = valort2.getPropertyValue('left')
    let left3 = valort3.getPropertyValue('left')
    let body = document.getElementById("body")
    let h = 0


    function random2(){
        return Math.round(Math.random()*300);
    }
    //segundo random de 1 y 2
    function random1(){
        return Math.round(Math.random()*300);
    }
    function random3(){
        return Math.round(Math.random()*300);
    }

    bird.addEventListener("click", ()=>{
            bird.style.animationPlayState = "running"
            
    })


if (h == 0){
    function movimiento() {
        var elem1 = document.getElementById("tubo1");
        var pos1 = 173;
        var id = setInterval(frame, 15);
        function frame() {
          if (pos1 == 0) {
            pos1 = 520;
            modificar1()
          } else {
            pos1--; 
            elem1.style.left = pos1 + 'px';
            
        }
      }
    }
      
    
      function movimiento2() {
        var elem2 = document.getElementById("tubo2");
        var pos2 = 346;
        var id2 = setInterval(frame1, 15);
        function frame1() {
          if (pos2 == 0) {
            pos2 = 520;
            modificar2()
        }
           else {
            pos2--; 
            elem2.style.left = pos2 + 'px';
        }    
      }
    }
      
    
      function movimiento3() {
        var elem3 = document.getElementById("tubo3");
        var pos3 = 520;
        var id3 = setInterval(frame2, 15);
        function frame2() {
          if (pos3 == 0) {
            pos3 = 520;
            modificar3()
          } else {
            pos3--; 
            elem3.style.left = pos3 + 'px';  
        }
      }
    }
     

function movimientoa() {
    var elem1 = document.getElementById("tubo1a");
    var pos1 = 173;
    var id = setInterval(frame, 15);
    function frame() {
      if (pos1 == 0) {
        pos1 = 520;
        modificar1()
      } else {
        pos1--; 
        elem1.style.left = pos1 + 'px';
        
    }
  }
}
  

  function movimiento2a() {
    var elem2 = document.getElementById("tubo2a");
    var pos2 = 346;
    var id2 = setInterval(frame1, 15);
    function frame1() {
      if (pos2 == 0) {
        pos2 = 520;
        modificar2()
    }
       else {
        pos2--; 
        elem2.style.left = pos2 + 'px';
    }    
  }
}
 

  function movimiento3a() {
    var elem3 = document.getElementById("tubo3a");
    var pos3 = 520;
    var id3 = setInterval(frame2, 15);
    function frame2() {
      if (pos3 == 0) {
        pos3 = 520;
        modificar3()
      } else {
        pos3--; 
        elem3.style.left = pos3 + 'px';
    }
  }
}
  
}
  function movimientop() {
    var elem1 = document.getElementById("bird");
    var elem2 = document.getElementById("body");
    var pos1 = 200; 
    elem2.addEventListener("keydown", (e)=>{
        if(e.key == "w"){
          console.log("salto")
          var posic = pos1 - 50
          pos1 -= 50
          elem1.style.top = posic + 'px';
        }
      })  
    console.log(pos1)
    var id = setInterval(frame, 8)
    
    //console.log(pos1)
      if (h == 0) {
      movimiento3a() 
      movimiento2a()
      movimientoa() 
      movimiento3()
      movimiento2()
      movimiento()
      }
      else{
        console.log("perdiste")
      }
    function frame() {
     
      console.log(pos1)
      if (pos1 >=380) {
      pos1 = 380;
      h = 1
      }    
      else {
      pos1++; 
      elem1.style.top = pos1 + 'px';
      }
     return()
    }
}
  movimientop()
  
    function modificar1() {
        let a = random1()
        document.getElementById("tubo1").style.height = a+"px"
        document.getElementById("tubo1a").style.height= "450"-a-"100" +"px" 
    }

    function modificar2(){
        let b = random2()
        document.getElementById("tubo2").style.height = b+"px"
        document.getElementById("tubo2a").style.height= "450"-b-"100" +"px"
    }

    function modificar3(){
        let c = random3()
        document.getElementById("tubo3").style.height = c+"px"
        document.getElementById("tubo3a").style.height= "450"-c-"100" +"px"
    }
  })

   






