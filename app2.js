// unidad 2 - Funciones 
let = numeroSecreto = generarNumeroSecreto();
// (esto es un alcance de bloque, ya que esta dentro de la funcion)
let intentos = 1;


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
// paras las funciones no necesariamente siempre deben retornar un resultado, pero es buena practica aplicar return.


//getElementByID traera el elemento por el id en este caso, no anteriormente por la etiqueta html. si lo abrimos con un punto y agregamos .value
// nos traera solo el valor indicado en el parentesis , el abrir un punto te indica todo los valores que tiene la etiqueta
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
//typeof nos va a indicar en la consola que tipo de dato estamos recibiendo en numeroDeUsuario, en este caso es string y necesitamos que sea entero (int)
//numeroDeUsuario en este caso esta imprimiendo en string, para modificar su naturaleza usaremos parceInt para que pase a ser entero, ahora en la consola sale el valor number en ves de string.
// explicacion, la variable NumeroDeUsuario como es tipada por el usuario tiene valor string, entonces la modificamos con parseInt para que sea entero.

    console.log(numeroDeUsuario);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento ('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`) ;
    }else{
    if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento ('p', 'El numero secreto es menor');
    }else{
        asignarTextoElemento('p', 'El numero secreto es mayor')
        }
    intentos++;
    }

    return;
}

function generarNumeroSecreto() {
    let = numeroSecreto = Math.floor(Math.random()*10)+1;
    return numeroSecreto;
}


asignarTextoElemento('h1', 'Juego del numero secreto');
asignarTextoElemento('p', 'ingrese el numero del 1 al 100');