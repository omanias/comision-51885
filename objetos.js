/* const nombre = "Monitor de 24 pulgadas"
const precio = 1000
const disponible = true */


// OBJECT LITERAL

/* const producto = {
    //propiedades
    // clave : valor
    nombre: "Monitor de 24 pulgadas",
    precio: 1000,
    disponible: true

} */

/* console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible) */

/* //Agregando una propiedad
producto.imagen = "image.jpg"
// Eliminando propiedades
delete producto.disponible
// Modificar propiedes
producto.disponible = false
// console.log(producto) */

/*
const nombreProducto = producto.nombre

console.log(nombreProducto) */

//DESESTRUCTURACION
//DESTRUCTURING


// const { nombre, precio, disponible } = producto

// console.log(precio)

//CONSTRUCTOR => TEMPLATE O MOLDE

/* function Producto(nombre, precio) {
    this.nombre = nombre
    this.precio = precio
    this.disponible = true //valor por defecto
}

const producto2 = new Producto("Teclado", 500)

console.log(producto2)
 */


//METODOS => acciones

/* function Cliente(nombre, edad, domicilio) {
    this.nombre = nombre
    this.edad = edad
    this.domicilio = domicilio
    this.saludar = function () {
        console.log("Saludos" + " " + this.nombre)
    }
}

const cliente1 = new Cliente("Coder", 30, "Publica s/n")
const cliente2 = new Cliente("House", 50, "Montevideo s/n")

console.log(cliente1)

cliente1.saludar() */
/* 
let nombre = "coderhouse"

console.log(nombre.toLowerCase())
console.log(nombre.length)

console.log(nombre.toUpperCase()) */


/* function crearObjetoCuenta(nombre, apellido, saldo) {
    this.nombreCuenta = nombre = prompt("Ingrese el nombre de la cuenta")
    this.apellidoCuenta = apellido = prompt("Ingrese el apellido para la cuenta")
    this.saldoCuenta = saldo = parseInt(prompt("Ingrese el saldo de la cuenta"))
    this.mostrarCuenta = function () {
        return `Nombre: ${this.nombreCuenta}, Apellido: ${this.apellidoCuenta}, Saldo: ${this.saldoCuenta}`
    }
}

const cuenta1 = new crearObjetoCuenta()
console.log(cuenta1.mostrarCuenta()) */

