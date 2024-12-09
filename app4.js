
// unidad reiniciando juego - Funciones 
let = numeroSecreto = generarNumeroSecreto();
// (esto es un alcance de bloque, ya que esta dentro de la funcion)
let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

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
        //manejamos el dom, removemos el atributo de disabled en el boton nuevo juego.
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
    if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento ('p', 'El numero secreto es menor');
    }else{
        asignarTextoElemento('p', 'El numero secreto es mayor')
        }
    intentos++;
    limpiarCaja();
    }

    return;
}
//En esta funcion creamos que apenas intente el usuario, la caja quede vacia para un nuevo intento.
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

// .includes es un metodo, hace un recorrido en array y verifica si algo existe y devuelve un booleano (true/false)

function generarNumeroSecreto() {
    let = numeroSecreto = Math.floor(Math.random()*numeroMaximo)+1;


    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
// si el numero generado esta incluido en la lista
// si ya sorteamos todos los numeros , crear un mensaje de que se termino el juego
if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');

    } else {

    if(listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();

        } else {
        listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
        }  
    }
}

function condicionesIniciales() {
asignarTextoElemento('h1', 'Juego del numero secreto');
asignarTextoElemento('p', `ingrese el numero del 1 al ${numeroMaximo}`);
numeroSecreto = generarNumeroSecreto();
intentos =1;
}
// tarea, averigua recursividad 
