// for (let i = 0; condicion; i++)

/* let numero;

numero = 1 */

// let res = numero + numero
/*
numero++
console.log(numero) */

// OPERADOR TERNARIO

// let temperatura = 20

/*
if (temperatura < 30) {
    alert("Temperatura agradable")
} else {
    alert("Alta Temperatura")
} */

/* Using the ternary operator to check if the value of the variable `temperatura` is less than 30. If
it is, it will log the string "Agradable" to the console. If it is not, it will log the string "Alta
temperatura" to the console. */
/* temperatura < 30 ? console.log("Agradable") : console.log("Alta temperatura")



let edad = prompt("edad?")

let mensaje = (edad < 18) ? "Eres menor de edad" :
    (edad < 30) ? "Eres un joven" :
        (edad < 50) ? "Eres un adulto" :
            "Eres un anciano"


alert(mensaje) */


// OPERADOR &&

// sucede ésto && hago ésto

// carrito.length > 0 && muestro el formulario de contacto

// usuarioLogueado === "true" && muestro los cursos activos

// const cursos = ["Javascript"]
/*
if (cursos.length === 0) {
    console.log("Sin cursos activos")
} */

// cursos.length === 0 && console.log("Sin cursos activos")

// OPERADOR LOGICO OR ||

/* const usuario1 = {
    nombre: "Coder",
    edad: 25
}

const usuario2 = null

console.log(usuario1 || "El usuario no existe")

console.log(usuario2 || "El usuario no existe")

console.log(usuario1 || usuario2) */

/* console.log(0 || "Falsy") //Falsy
console.log(null || "Falsy") //Falsy
console.log(undefined || "Falsy") //Falsy
console.log("" || "Falsy") //Falsy
console.log(NaN || "Falsy") //Falsy
console.log(false || "Falsy") //Falsy
console.log(true || "Falsy") //true
console.log(50 || "Falsy") //50
console.log("Coder" || "Falsy") //Coder */


/* let carrito

let carritoLocalStorage = JSON.parse(localStorage.getItem("cursos"))

if (carritoLocalStorage) {
    carrito = carritoLocalStorage
} else {
    carrito = []
}

console.log(carritoLocalStorage) */

/* localStorage.setItem("cursos", "Desarrollo web")

const carrito = localStorage.getItem("cursos2") || []

console.log(carrito) */


// ACCESO CONDICIONAL A UN OBJETO

/* const alumno = {
    nombre: "Max",
    edad: 30,
    cursos: {
        javascript: "En curso"
    }
}

console.log(alumno?.cursos?.nodeJs || "La propiedad no existe")


console.log(alumno?.taller?.javascript || "Propiedad no existe")
*/

// DESESTRUCTURACION - DESTRUCTURING

/* const usuario = {
    nombre: "Santy",
    edad: 30
} */


/* const nombreUsuario = usuario.nombre
const edadUsuario = usuario.edad */

/* const { edad } = usuario
console.log(edad) */

// DESESTRUCTURACION DE ARRAYS

/* const cursos = ["DW", "JS", "ReactJS", "NodeJS"]

const [, , c] = cursos

// console.log(a)
console.log(c) */

// SPREAD OPERATOR

/* const frutas = ["🍉", "🍒", "🍏"]
const bebidas = ["🍵", "🧃", "🍹"]

const combinados = [...frutas, ...bebidas]

frutas.push(...bebidas)

console.log(frutas) */



// console.log(combinados)


/* const productos = [
    { nombre: "A", precio: 1000 },
    { nombre: "B", precio: 1500 },
    { nombre: "C", precio: 2000 }
]

const nuevoProducto = [...productos, { nombre: "D", precio: 3000 }]

console.log(nuevoProducto) */

