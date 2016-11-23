const $boton = document.getElementById("boton");
const $resultado = document.getElementById("resultado");

$boton.onclick = function(e){
    
    let at = e.target.getAttribute("calc");
    if(at === "limpiar"){
        console.log(at);
        $resultado.value = "";

    } 

    if(at === "siete"){
       $resultado.value += "7"; 

    }

     if(at === "ocho"){
       $resultado.value += "8"; 

    }
     if(at === "nueve"){
       $resultado.value += "9"; 

    }
     if(at === "cuatro"){
       $resultado.value += "4"; 

    }
     if(at === "cinco"){
       $resultado.value += "5"; 

    }
     if(at === "seis"){
       $resultado.value += "6"; 

    }
     if(at === "uno"){
       $resultado.value += "1"; 

    }
     if(at === "dos"){
       $resultado.value += "2"; 

    }
     if(at === "tres"){
       $resultado.value += "3"; 

    }
     if(at === "cero"){
       $resultado.value += "0"; 

    }
     
     if(at === "retroceder"){
       let ret = $resultado.value.slice(0, $resultado.value.length - 1)
       $resultado.value = ret

    }
     if(at === "punto"){

         if(/^[0-9]+\.?([0-9]+)?$/.test($resultado.value) ){
             
       $resultado.value += "."; 
         }
    }

}