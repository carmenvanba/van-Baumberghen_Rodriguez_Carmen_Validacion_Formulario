/*
function validation(){
    //console.log("Thank you for your click.");
    window.location.reload();
}
*/

function validation(){
    //validacion
    //cada validacion erronea que active 1 identificador para saber qué mensaje mandar
        //si va bien:
            //console.log("Thank you for your click.");
            window.location.reload();
        //sino, mensaje de error correcto
        //switch para cada error????? ocn un identificador, trycatch mejor
}


//se modifica el myAlert
function myAlert(msg){
    var div = document.createElement("div");
    div.classList.add("alert");
    div.innerHTML = msg;
    //se añaden las cositas
    var close = document.createElement("span");
    //esto debería ir en el css .close
    //close.style.float = "right";
    close.classList.add("close");
    close.innerHTML = "X";
    div.appendChild(close);
    $("body").insertBefore(div,$("body").firstChild);
    bind_close();
}