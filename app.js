/*  Se crea una funcion para asignar texto a elementos html

let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';
*/


let numeroMaximo = 10;
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteado = [];
//console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
   let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
  // console.log(intentos);

    if( numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${ (intentos == 1) ? 'intento' : 'intentos' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
            if(numeroDeUsuario > numeroSecreto){
                asignarTextoElemento('p','El número secreto es menor');
            } else {
                asignarTextoElemento('p','El número secreto es mayor');
        }
         intentos++;
         limpiarCaja();
   }

   return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto (numeroMaximo) {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo)+1;
    //Si el numero generado esta incluido en al lista

    if(listaNumerosSorteado.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números');  
    } else {
        if( listaNumerosSorteado.includes(numeroGenerado) ) {
            return generarNumeroSecreto(numeroMaximo);
        } else {
            listaNumerosSorteado.push(numeroGenerado);
            console.log(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //desabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);
  //  document.getElementById('reiniciar').setAttribute('disabled');

}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Indica un numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto(numeroMaximo);
    intentos = 1;
}

condicionesIniciales();



/* Desafíos: FUNCIONES
1) Crear una función que muestre "¡Hola, mundo!" en la consola.

2) Crear una función que reciba un nombre como parámetro y muestre 
"¡Hola, [nombre]!" en la consola.

3) Crear una función que reciba un número como parámetro y devuelva
 el doble de ese número.

4) Crear una función que reciba tres números como parámetros y 
devuelva su promedio.

5) Crear una función que reciba dos números como parámetros 
y devuelva el mayor de ellos.

6) Crear una función que reciba un número como parámetro y 
devuelva el resultado de multiplicar ese número por sí mismo.

-------------------------------------------------------------

function holaMundo() {
    console.log('Hola Mundo');
}

holaMundo();

function holaNombre(nombre) {
    console.log(`Hola ${nombre}`);
}

holaNombre('Jones');

function dobleNumero( numero ) {
    console.log(numero * 2);
}

dobleNumero(4);

function promedioDe3Numeros(num1, num2, num3) {
    console.log((num1 + num2 + num3) / 3);
}

promedioDe3Numeros(7, 8 , 8);

function numeroMayor(num1, num2) {
    console.log( (num1 > num2 ) ? num1 : num2);
}

numeroMayor(17, 9);

function numeroPotenciado(num) {
    console.log(num * num);
}

numeroPotenciado(8);

Desafíos:  FUNCIONES Y TEMPLATE STRING

1) Crea una función que calcule el índice de masa corporal (IMC) 
de una persona a partir de su altura en metros y peso en kilogramos,
que se recibirán como parámetros.

2) Crea una función que calcule el valor del factorial de un número
pasado como parámetro.

3) Crea una función que convierta un valor en dólares, pasado como 
parámetro, y devuelva el valor equivalente en reales(moneda brasileña,
si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, 
considera la cotización del dólar igual a R$4,80.

4) Crea una función que muestre en pantalla el área y el perímetro de 
una sala rectangular, utilizando la altura y la anchura que se 
proporcionarán como parámetros.

5) Crea una función que muestre en pantalla el área y el perímetro 
de una sala circular, utilizando su radio que se proporcionará como 
parámetro. Considera Pi = 3,14.

6) Crea una función que muestre en pantalla la tabla de multiplicar 
de un número dado como parámetro.


function calcularIMC(peso, altura) {
    return peso / Math.pow(altura,altura);
}

console.log(`el indice de masa corporal es: ${calcularIMC(68, 1.65)}`);

function factorial(num) {
    let numero = parseInt(num);
    let resultado = 1;
    while ( numero > 0 ) {
        resultado*= numero;
        numero--;
    }
    return resultado;
} 

console.log(`El factorial es ${factorial(3)}`);

function DolaresAReales(dolares) {
    return dolares * 4.80;
}

console.log(`Son R$ ${DolaresAReales(7)}`);

function calcularAreaRectangulo(largo, ancho) {
    return largo * ancho
}

function calcularPerimetroRectangulo(largo, ancho) {
    return ( 2 * largo ) + ( 2 * ancho);
}

console.log(`el area del rectangulo es: ${calcularAreaRectangulo(16,12)} y el perimetro es: ${calcularPerimetroRectangulo(16,12)}`);


function calcularAreaCirculo (radio) {
    return Math.PI * (Math.pow(radio, 2));
}

function calcularPerimetroCirculo(radio) {
    return 2 * Math.PI  * radio;
}

console.log(`el area del circulo es: ${calcularAreaCirculo(16)} y el perimetro es: ${calcularPerimetroCirculo(16)}`);

function tablaMultiplicar( num ) {
    let count = 1;
    while ( count <=10 ) {
        console.log(`${count} x ${num} = ${count * num}`);
        count++;
    }
    return;
}

tablaMultiplicar(7);

Desafíos Arrays

1) Crea una lista vacía llamada "listaGenerica".

2) Crea una lista de lenguajes de programación llamada 
"lenguagesDeProgramacion con los siguientes elementos: 
'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

3) Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 
'Java', 'Ruby' y 'GoLang'.

4) Crea una función que muestre en la consola todos los elementos de la 
lista "lenguagesDeProgramacion.

5) Crea una función que muestre en la consola todos los elementos de 
la lista "lenguagesDeProgramacion en orden inverso.

6) Crea una función que calcule el promedio de los elementos en una 
lista de números.

7) Crea una función que muestre en la consola el número más grande y 
el número más pequeño en una lista.

8) Crea una función que devuelva la suma de todos los elementos en una 
lista.

9) Crea una función que devuelva la posición en la lista donde se 
encuentra un elemento pasado como parámetro, o -1 si no existe en la 
lista.

10) Crea una función que reciba dos listas de números del mismo tamaño 
y devuelva una nueva lista con la suma de los elementos uno a uno.

11) Crea una función que reciba una lista de números y devuelva una 
nueva lista con el cuadrado de cada número.

*/
