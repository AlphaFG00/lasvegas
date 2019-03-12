function mostrar()
 {

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
        }
    }