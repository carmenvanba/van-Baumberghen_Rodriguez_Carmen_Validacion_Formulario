//Author: Carmen van-Baumberghen Rodríguez
//Date: 10/10/2022
//Validacion Formulario

function validation(){
    var error;
    var valorCampo;
    var validated = true;
    //Iterar para vaciar el texto de error de los inputs
    Array.from(document.getElementsByClassName("error"))
    //Parametros: id error, indice, elementos clase error
    .forEach(function(element, index, array) {
        resetError(element, index, array)
    });
    //Fin ForEach

    //Validar Nombre
    if(document.getElementById("name").value.length==0){
        error = document.getElementById("name_error");
        error.textContent="El nombre está vacío.";
        validated = false;
    }//Fin Si

    //Validar Apellidos
    if(document.getElementById("surnames").value.length==0){
        error = document.getElementById("surnames_error");
        error.textContent="Los apellidos están vacíos.";
        validated = false;
    }//Fin Si

    //Validar email
    if(document.getElementById("email").value.length==0){
        error = document.getElementById("email_error");
        error.textContent="La dirección de correo electrónica está vacía.";
        validated = false;
    }else{
        //Comprobar si el valor del campo coincide con el patron
        valorCampo = document.getElementById("email").value;
        if(!(/[\w\.-]+@[\w\.-]+\.\w{2,4}/.test(valorCampo))){
            error = document.getElementById("email_error");
            error.textContent="La dirección de correo electrónico debe cumplir el siguiente formato: ejemplo@email.com.";
            validated = false;
        }//Fin Si
    }//Fin Si

    //Validar Telefono
    if(document.getElementById("telephone").value.length==0){
        error = document.getElementById("telephone_error");
        error.textContent="El número de teléfono está vacío.";
        validated = false;
    }else{
        //Comprobar si el valor del campo coincide con el patron
        valorCampo = document.getElementById("telephone").value;
        if(!(/(^[0-9]{3}[ ]{0,1}[0-9]{3}[ ]{0,1}[0-9]{3}$)|(^[0-9]{3}[ ]{0,1}[0-9]{2}[ ]{0,1}[0-9]{2}[ ]{0,1}[0-9]{2}$)/.test(valorCampo))){
            error = document.getElementById("telephone_error");
            error.textContent="El teléfono debe cumplir el siguiente formato: 123 12 12 12 ó 123 123 123.";
            validated = false;
        }//Fin Si
    }//Fin Si

    //Validar Dni
    if(document.getElementById("dni").value.length==0){
        error = document.getElementById("dni_error");
        error.textContent="El dni está vacío.";
        validated = false;
    }else{
        //Comprobar si el valor del campo coincide con el patron
        valorCampo = document.getElementById("dni").value;
        if(!(/^[0-9]{8}[A-Za-z]{1}$/.test(valorCampo))){
            error = document.getElementById("dni_error");
            error.textContent="El dni debe cumplir el siguiente formato: 1234567A.";
            validated = false;
        }//Fin Si
    }//Fin Si

    //Validar IBAN
    if(document.getElementById("iban").value.length==0){
        error = document.getElementById("iban_error");
        error.textContent="El iban está vacío.";
        validated = false;
    }else{
        //Comprobar si el valor del campo coincide con el patron
        valorCampo = document.getElementById("iban").value;
        if(!(/(^[a-zA-Z]{2}[0-9]{20}$)|(^[a-zA-Z]{2}[0-9]{2} [0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$)/.test(valorCampo))){
            error = document.getElementById("iban_error");
            error.textContent="El iban debe cumplir el siguiente formato: AA12 1234 1234 1234 1234 1234 ó sin espacios.";
            validated = false;
        }//Fin Si
    }//Fin Si

    //Validar SWIFT
    if(document.getElementById("swift").value.length==0){
        error = document.getElementById("swift_error");
        error.textContent="El SWIFT está vacío.";
        validated = false;
    }else{
        //Comprobar si el valor del campo coincide con el patron
        valorCampo = document.getElementById("swift").value;
        if(!(/(^[A-Z]{6}[A-Z0-9]{2}([A-Z0-9]{3})?$)/.test(valorCampo))){
            error = document.getElementById("swift_error");
            error.textContent="El swift debe cumplir el siguiente formato: AAABBBCC ó AAABBBCC123.";
            validated = false;
        }//Fin Si
    }//Fin Si

    //Validar nombre de usuario
    if(document.getElementById("username").value.length==0){
        error = document.getElementById("username_error");
        error.textContent="El nombre de usuario está vacío.";
        validated = false;
    }//Fin Si

    //Validar fecha de nacimiento
    if(document.getElementById("birthdate").value.length==0){
        error = document.getElementById("birthdate_error");
        error.textContent="Por favor, ponga su fecha de nacimiento.";
        validated = false;
    }else{
        valorCampo = document.getElementById("birthdate").value;
        var todayDate = new Date();
        var fechaHoy = todayDate.getFullYear().toString() + (todayDate.getMonth()+1).toString() + todayDate.getDate().toString();
        var fechaNac = valorCampo.substring(0,4) + valorCampo.substring(5,7) + valorCampo.substring(8,10);
        //Si la suma de la fecha de hoy - la de nacimiento da negativo ó 0, la persona no ha nacido todavía
        if((fechaHoy-fechaNac)<=0){
            error = document.getElementById("birthdate_error");
            error.textContent="Introduzca una fecha válida.";
            validated = false;
        }
    }//Fin Si

    if(validated){
        alert("Registro realizado.");
        window.location.replace("html/validated.html");
    }//Fin Si

}//Fin Funcion validation

//Borrar los mensajes de error
function resetError(element, index, array) {
    element.textContent="";
}//Fin Funcion resetError

//Resetear los campos del formulario
function resetForm() {
    window.location.reload();
}//Fin Funcion resetForm

//Volver desde la pagina de registro completado
function back(){
    window.location.replace("/formulario.html");
}//Fin Funcion back