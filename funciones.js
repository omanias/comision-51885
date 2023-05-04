// FUNCTION DECLARATION


//Declaro la funcion
/* function mostrarMensaje (){
    alert("Saludos")
} */

// LLamo a la funcion
// mostrarMensaje()


/* function solicitarNombre() {
    let nombre = prompt("Ingrese su nombre")
    console.log(`El nombre del usuario es: ${nombre}`)
}

solicitarNombre() */

// Parametros

/* let numero1 = Number(prompt("Ingrese un numero"))
let numero2 = Number(prompt("Ingrese otro numero")) */

/* function suma (numero1, numero2){
    return numero1 + numero2
} */

// let resultado = suma(numero1, numero2)

// console.log(suma(80,30))

/* function saludar (nombre, apellido){
    console.log(`Saludos ${nombre} ${apellido}`)
}
saludar("Coder", "House") */


/* let primerNumero = Number(prompt("Ingrese el primer numero"))
let segundoNumero = Number(prompt("Ingrese el segundo numero"))
let operacion = prompt("ingrese la operacion a efectuar")

function calculadora(primerNumero, segundoNumero, operacion){
    switch(operacion){
        case "+":
            return primerNumero + segundoNumero
        break;
        case "-":
            return primerNumero - segundoNumero
        break
        case "*":
            return primerNumero * segundoNumero
        break
        case "/":
            return primerNumero / segundoNumero
        break
        default:
            return 0
        break
    }
}

console.log(calculadora(primerNumero, segundoNumero, operacion)) */

// SCOPE => Ambito (local - Global)


/* function crearMensaje (){
    const mensaje = "Mensaje de bienvenida"
}

const mensaje = "Es otro mensaje"

console.log(mensaje)
// crearMensaje() */

/* let usuario = prompt("Ingrese su nombre")

iniciaApp()

function iniciaApp(){
    console.log("Iniciando aplicacion")

    segundaFuncion()
}


function segundaFuncion(){
    console.log("Desde la segunda funcion")

    usuarioAutenticado(usuario)
}

function usuarioAutenticado(usuario){
    console.log("Autenticando usuario...")
    console.log(`Usuario autenticado: ${usuario}`)
}
 */


/* function suma (a, b){
    return a *b
}

console.log(suma(2,3)) */

/* function saludo (nombre){
    return "Hola, " + nombre 
}

console.log(saludo("Juan")) */


/* function areaRectangulo (base, altura){
    return base * altura
}

console.log(areaRectangulo(5,6)) */



// FUNCTION EXPRESSION

/* const aprendiendoJs = function(){
    return "Aprendiendo Javascript"
}

console.log(aprendiendoJs()) */

// ARROW FUNCTION (FUNCIONES FLECHA)

/* const aprendiendoJs = () => "Aprendiendo javascript"

console.log(aprendiendoJs()) */

/* const suma = (a,b) => a + b

console.log(suma(8,9)) */

/* const saludo = (nombre)=> `Saludos ${nombre}`

console.log(saludo("Juan")) */

