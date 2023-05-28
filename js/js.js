function mostrarimagen(){
    var imagen = document.getElementById('imagen');

    var bateria = document.getElementById('bateria');

    var visible = imagen.style.visibility;

    if(visible == "visible"){
        imagen.style.visibility = "hidden";
        bateria.style.background = "#f3f3f3"
    }
    else{
        imagen.style.visibility = "visible";
        bateria.style.background = "#00FF0D"
    }
}

function mostrarimagen2(){
    var imagen = document.getElementById('imagen2');

    var visible = imagen.style.visibility;

    if(visible == "visible"){
        imagen.style.visibility = "hidden";
    }
    else{
        imagen.style.visibility = "visible";
    }
}