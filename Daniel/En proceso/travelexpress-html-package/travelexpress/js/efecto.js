function mostrar(div)
 {

     document.getElementById(div).style.display = "block";
     }
function ocultar(div){
    document.getElementById(div).style.display = "none";
}

function dinamica(boton, div){
    var caja=document.getElementById(div);
        if(caja.style.display =="none"){

            mostrar(div);
            document.getElementById(boton).value = "Ocultar";

        }
        else{
            ocultar(div);
            document.getElementById(boton).value = "Ver Mas";
        }
}