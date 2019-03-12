function mostrar(div)
 {
/*<<<<<<< HEAD

    document.getElementsByClassName("popular-pp-info").style.display = "block";
     }
function ocultar(){

     document.getElementsByClassName("popular-pp-info").style.display = "none";
}

function dinamica(){
    var clase = document.getElementsByClassName("popular-pp-info");
        if(clase.style.display =="none"){

            mostrar();
            document.getElementsByClassName("btn-1 pp-btn").value = "Ocultar";

        }
        else{
            ocultar(); 
            document.getElementsByClassName("btn-1 pp-btn").value = "Ver Mas";
=======*/
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