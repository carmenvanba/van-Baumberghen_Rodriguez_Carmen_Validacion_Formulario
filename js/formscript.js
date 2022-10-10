//Author: Carmen van-Baumberghen Rodríguez
//Date: 10/10/2022
//Validacion Formulario

function validation(){
    var error;
    var valorCampo;
    //Iterar para vaciar el texto de error de los inputs
    Array.from(document.getElementsByClassName("error"))
    //Parametros: id error, indice, elementos clase error
    .forEach(function(element, index, array) {
        resetError(element, index, array)
    });
    //Fin ForEach

    if(document.getElementById("name").value.length==0){
        error = document.getElementById("name_error");
        error.textContent="El nombre está vacío.";
    }//Fin Si
    if(document.getElementById("surnames").value.length==0){
        error = document.getElementById("surnames_error");
        error.textContent="Los apellidos están vacíos.";
    }//Fin Si



    if(document.getElementById("email").value.length==0){
        error = document.getElementById("email_error");
        error.textContent="La dirección de correo electrónica está vacía.";
    }else{
        //Comprobar si el valor del campo coincide con el patron
        valorCampo = document.getElementById("email").value;
        if(!(/[\w\.-]+@[\w\.-]+\.\w{2,4}/.test(valorCampo))){
            error = document.getElementById("email_error");
            error.textContent="El formato de la dirección de correo electrónico debe cumplir el siguiente formato: ejemplo@email.com";
        }//Fin Si
    }//Fin Si





}//Fin Funcion validation

function resetError(element, index, array) {
    element.textContent="";
}//Fin Funcion resetError