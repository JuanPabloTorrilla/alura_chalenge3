let form = document.querySelector('.formulario__contacto');
let boton_form = document.querySelector('#form-boton');
let nombre = document.querySelector('#nombre');
let email = document.querySelector('#email');
let mensaje = document.querySelector('#mensaje');
let errorNombre = document.querySelector('#nombre_error');
let errorEmail = document.querySelector('#email_error');
let errorMensaje = document.querySelector('#mensaje_error');
let errores = document.getElementsByClassName('error');

function validarForm(){
    let validador = false;
    if(nombre.value == "" || email.value == "" || !email.value.includes('@') || mensaje.value == ""){
        if(nombre.value == ""){
            errorNombre.innerHTML = "Debe ingresar un nombre.";
        }else{errorNombre.innerHTML = ""};
        if(email.value == "" || !email.value.includes('@')){
            errorEmail.innerHTML = "Debe ingresar un mail válido.";
        }else{errorEmail.innerHTML = ""};
        if(mensaje.value == ""){
            errorMensaje.innerHTML = "Debe ingresar un mensaje.";
        }else{errorMensaje.innerHTML = ""}; 
    }else{validador = true;
        errorNombre.innerHTML = "";
        errorEmail.innerHTML = "";
        errorMensaje.innerHTML = "";
        nombre.value = "";
        email.value = "";
        mensaje.value = "";
        alert("Su mensaje ha sido enviado.")};
}

boton_form.addEventListener('click', validarForm);