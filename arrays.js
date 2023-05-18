
// console.log(array[3])

//Reemplazar el valor de un elemento
// array[3] = 50

// console.log(array)

/* for (let index = 0; index <= 3; index++) {
    console.log(array[index])
} */

// Conocer la longitud de un array
// console.log(productos.length)

// Agregar un valor al array

/* const productos = [85, "Rocio", true, null]

productos.push("Otro elemento")

console.log(productos) */


/*
tu carrito es un []
al presionar el boton de "Agregar"
vas a ejecutar carrito.push()
*/


/* const carrito = []

//presioné el botón
carrito.push("Mi producto")
carrito.push("Otro producto")
// Agregamos elementos al principio del array
carrito.unshift("Tercer producto")
// Quitar el ultimo elemento de un array/*
// carrito.pop()
// Quiatr el primer elemento de un array
/* carrito.shift()

console.log(carrito) */

/* const alumnos = ["Pablo", "Samuel", "Max", "Franco", "Karina", "Agustina"] */
// const alumnas = ["Karina", "Agustina"]

//Splice
//Elimina elementos de un array en cualquier posicion
// nombres.splice(1, 2)
// Une los elementos de un array con un signo
// console.log(nombres.join("-"))

// const totalAlumnos = alumnos.concat(alumnas)

// console.log(totalAlumnos)

// Slice
//Devuelve una copia de una parte del array
// inicio y final

/* const otroArray = totalAlumnos.slice(1, 3)

console.log(otroArray) */

/* const alumnos = ["Pablo", "Samuel", "Max", "Franco", "Karina", "Agustina"] */

// console.log(alumnos.indexOf("Agustina"))
// Si existe dentro de mi array => boolean
// console.log(alumnos.includes("Gustavo"))
//Invierte el orden de los elementos
// alumnos.reverse()

// console.log(alumnos)

// Cargar datos y almacenarlos en un array

/* const listaNombres = []
let cantidad = 5

/* This code is prompting the user to enter a name and storing it in the `entrada` variable. Then, it
is converting the name to uppercase and pushing it into the `listaNombres` array. The `do-while`
loop will continue to prompt the user to enter a name until the length of the `listaNombres` array
is equal to the `cantidad` variable. */
/*
do {
    let entrada = prompt("Ingrese nombre")
    listaNombres.push(entrada.toUpperCase())
    // console.log(listaNombres.length)
} while (listaNombres.length != cantidad);

// const nuevaLista = listaNombres.concat(["Ana", "Ema"])

console.log(listaNombres) */

/* const objeto1 = {
    id: 1,
    producto: "Gaseosa"
}

const array = [objeto1, { id: 2, producto: "Papas" }]
array.push({ id: 3, producto: "Otro" })

console.log(array) */

/* const carrito = [
    { id: 1, producto: "Producto1" },
    { id: 2, producto: "Producto2" },
    { id: 3, producto: "Producto3" }
]

// FOR OF de objetos

/* Iterating over the `carrito` array of objects and logging the `id` and `producto` properties of each
object. */
for (const producto of carrito) {
    console.log(producto.id)
    console.log(producto.producto)
}




