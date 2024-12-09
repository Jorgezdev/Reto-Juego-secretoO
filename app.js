// unidad 1 - interactuando con html
// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indica un numero del 1 al 10';

//en esta funcion html esta llamando a la variable intentoDeUsuario, para cuando cliqueamos el boton arroje el mensaje de alert.

//funciones , javascript en un llamado lee y prioriza primero las funciones por si luego son llamadas en una variable , es por eso que no importa el orden en este caso(hoisting).
// function asignarTextoElemento(){
//   let titulo = document.querySelector('h1');
//  titulo.innerHTML = 'Juego del numero secreto';
//}

//lo que asignamos dentro de la funcion ahora son variables: elemento y texto.
// en este caso la funcion recibe parametros para ser reutilizada (elemento- html y texto- texto )
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
//con el codigo anterior ahorramos codigo, ya que en la funcion definimos las 2 variables de h1 y parrafo.
// se usa este metodo por que el proyecto es mas escalable y se ve mucho mas profesional
function intentoDeUsuario() {
    alert('Click desde el boton plis =)')
}


asignarTextoElemento('h1', 'Juego dle numero secreto');
asignarTextoElemento('p', 'ingrese el numero del 1 al 100');
