const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const textarea = document.querySelectorAll('#formulario textarea');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]+$/,
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    texto: /^[a-zA-Z0-9\_\-]+$/
}

const validarDatos = (e) => {
    switch(e.target.name){
        case "nombre":
            console.log("funciona");
            if(expresiones.nombre.test(e.target.value)){
                document.getElementById('nombre').classList.remove('form-control-incorrect');
                document.getElementById('nombre').classList.add('form-control');
            }else{
                document.getElementById('nombre').classList.add('form-control-incorrect');
            }
        break;

        case "mail":
            console.log("funciona");
            if(expresiones.mail.test(e.target.value)){
                document.getElementById('mail').classList.remove('form-control-incorrect');
                document.getElementById('mail').classList.add('form-control');
            }else{
                document.getElementById('mail').classList.add('form-control-incorrect');
            }
        break;
    }
}

const validarTexto = (a) => {
    console.log("funciono");
    if(expresiones.texto.test(a.target.value)){
        document.getElementById('area-texto').classList.remove('form-control-incorrect');
        document.getElementById('area-texto').classList.add('form-control');
    }else{
        document.getElementById('area-texto').classList.add('form-control-incorrect');
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarDatos);
    input.addEventListener('blur', validarDatos);
});

textarea.forEach((textarea) => {
    textarea.addEventListener('keyup', validarTexto);
    textarea.addEventListener('blur', validarTexto);
});


