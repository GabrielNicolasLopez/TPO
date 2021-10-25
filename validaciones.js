// ------------------------------------ VARIABLES ------------------------------------

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const textarea = document.querySelectorAll('#formulario textarea');
const campos = {
    nombre: false,
    email: false,
    texto: false
}

// --------------- EXPRESIONES PERMITIDAS EN CADA CAMPO DEL FORMULARIO ---------------

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]+$/,
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    texto: /^[a-zA-Z0-9\_\-]+$/
}

// ------------------------------------ FUNCIONES ------------------------------------

function cambiarNombre(){
    var boton = document.getElementById('boton-enviar');    
    if(campos.nombre && campos.email && campos.texto){
        boton.innerHTML = 'Enviar';
        document.getElementById('boton-enviar').classList.remove('btn-primary-incorrect');
        document.getElementById('boton-enviar').classList.add('btn-primary');
    }else{
        boton.innerHTML = 'Rellená el formulario';
        document.getElementById('boton-enviar').classList.add('btn-primary-incorrect');
    }
}

const validarDatos = (e) => {
    switch(e.target.name){
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('nombre').classList.remove('form-control-incorrect');
                document.getElementById('nombre').classList.add('form-control');
                campos.nombre = true;
            }else{
                document.getElementById('nombre').classList.add('form-control-incorrect');
                campos.nombre = false;
            }
        break;

        case "mail":
            if(expresiones.mail.test(e.target.value)){
                document.getElementById('mail').classList.remove('form-control-incorrect');
                document.getElementById('mail').classList.add('form-control');
                campos.email = true;
            }else{
                document.getElementById('mail').classList.add('form-control-incorrect');
                campos.email = false;
            }
        break;
    }
}

const validarTexto = (e) => {
    if(expresiones.texto.test(e.target.value)){
        document.getElementById('area-texto').classList.remove('form-control-incorrect');
        document.getElementById('area-texto').classList.add('form-control');
        campos.texto = true;
    }else{
        document.getElementById('area-texto').classList.add('form-control-incorrect');
        campos.texto = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarDatos);
    input.addEventListener('keyup', cambiarNombre);
    input.addEventListener('blur', validarDatos);
});

textarea.forEach((textarea) => {
    textarea.addEventListener('keyup', validarTexto);
    textarea.addEventListener('keyup', cambiarNombre);
    textarea.addEventListener('blur', validarTexto);
});




