/* function primero() {
    console.log("Primero")
}

function segundo() {
    console.log("Segundo")
}

primero()
segundo() */

/* function primero(segundo) {
    setTimeout(function () {
        console.log("PRIMERO")
    }, 5000)
}

function segundo() {
    console.log("SEGUNDO")
}

primero(segundo())
 */



//For Each()

/* pendientes.forEach((h, i) => {
    console.log(`${i}: ${h}`)
}) */

// Map()

/* pendientes.map((p, i) => {
    console.log(`${i}: ${p}`)
}) */

// console.log(pendientes)



/* const carrito = [
    { nombre: "Producto A", precio: 1000 },
    { nombre: "Producto B", precio: 1500 },
    { nombre: "Producto B", precio: 1800 },

    { nombre: "Producto C", precio: 2000 }
]
 */
//Reduce

/* let totalCompra = carrito.reduce((accum, prod) => {
    return accum + prod.precio
}, 0)

console.log(totalCompra) */


// Filter

/* let resultado = carrito.filter((producto) => producto.nombre == "Producto B")

console.log(resultado) */


/* function mayorQue(n) {
    return (m) => m > n
} */

/* let mayorQueDiez = mayorQue(20) // 20 es n

console.log(mayorQueDiez(30)) // 12 es m
console.log(mayorQueDiez(8))  //8 es m
 */

/*
const obj = {
    constructor (nombre, apellido)
    propiedades => caracteristicas
    this.nombre = nombre
    this.apellido = apellido

    metodos() => acciones
    nombreCompleto(this.nombre + " " + this.apellido)
}

nombreCompleto(nombre + apellido)

*/


// Find

/* const carrito = [
    { nombre: "Producto A", precio: 1000 },
    { nombre: "Producto B", precio: 1500 },
    { nombre: "Producto B", precio: 1800 },
    { nombre: "Producto C", precio: 2000 }
]

const filtrado = carrito.find((p) => p.nombre != "Producto B")
console.log(filtrado) */


/* let pi = Math.PI
console.log(pi)

console.log(Math.ceil(pi))
console.log(Math.floor(pi))
console.log(Math.round(pi)) */

// console.log(Math.sqrt(9))
// console.log(Math.round(Math.random() * 10))

/*
console.log(Math.max(25, 3, 7, 8, 58, 46))
console.log(Math.min(25, 3, 7, 8, 58, 46)) */

/*
console.log(typeof new Date())

const hoy = new Date()
console.log(hoy)

console.log(hoy.toDateString())
console.log(hoy.getMonth())
console.log(hoy.getDay()) */

// FUNCIONES DE ORDEN SUPERIOR -- CLASE II



/* function sumar(a, b) {
    return a + b
}

function restar(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

function calcularOperacion(a, b, operacion) {
    return operacion(a, b)
}

const resultadoSuma = calcularOperacion(5, 3, sumar);

const resultadoResta = calcularOperacion(9, 3, restar)

console.log(calcularOperacion(9, 3, multiplicar))
 */

/*

a

b

c = a + b

console.log( a + b )

*/

// console.log(resultadoMultiplicacion)


// FOR EACH - Por cada uno

/* const arrayAlumnos = ["Samuel", "Yesika", "Pablo"]

arrayAlumnos.forEach((a, i) => {
    console.log(a)
    console.log(i)
})

// console.log(arrayAlumnos) */


// MAP

/* const arrayAlumnos = ["Samuel", "Yesika", "Pablo"]

arrayAlumnos.map((a, i) => {
    console.log(a)
    console.log(i)
}) */

/* fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => console.log(json)) */

// Total de la compra
/* const carrito = [
    { nombre: "A", precio: 1000 },
    { nombre: "B", precio: 2000 },
    { nombre: "B", precio: 2000 },

    { nombre: "C", precio: 3000 },
    { nombre: "C", precio: 3000 },
    { nombre: "C", precio: 3000 }

] */

/* let resultado = carrito.reduce((accum, p) => {
    return accum + p.precio
}, 0)

console.log(resultado)


console.log(`el resultado de tu compra es $ ${resultado}`) */

// FILTER

// en la barra de busqueda
/* let resultado = carrito.filter((p) => p.nombre === "B")

//FIND
//Solo nos trae el primer resultado
let resultado2 = carrito.find((p) => p.nombre === "B")


console.log(resultado)
console.log(resultado2) */

// MATH

/* const pi = Math.PI

console.log(Math.ceil(pi))
console.log(Math.floor(pi))
console.log(Math.round(pi))

console.log(Math.sqrt(10))
console.log(Math.random() * 100) */


// FECHAS

// console.log(new Date())

const fechaActual = new Date()
const anioActual = fechaActual.getFullYear()

const fechaEspecifica = new Date(1985, 3, 6)

const diaSemana = fechaActual.getMonth()


console.log(diaSemana)





