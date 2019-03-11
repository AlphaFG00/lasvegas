function mostrar()
 {
     document.getElementById('caja').style.display = "block";
     }
function ocultar(){
    document.getElementById('caja').style.display = "none";
}

function dinamica(){
    var caja=document.getElementById('caja');
        if(caja.style.display =="none"){

            mostrar();
            document.getElementById('boton').value = "Ocultar";

        }
        else{
            ocultar(); 
            document.getElementById('boton').value = "Ver Mas";
        }
    }