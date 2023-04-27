// let comida = prompt("¿Que se te antoja?")

// template literal

// `` backticks => alt + 96

// &{variable}

/* let nombre = "Coderhouse"

console.log(`El valor de mi variable es ${nombre}`) */



/* switch(comida){
    case "hamburguesa":
        console.log(`Pedido ${comida}, valor $1000`)
        break
    case "pizza":
        console.log(`Pedido ${comida}, valor 800`)
        break
    case "lomo":
        console.log(`Pedido ${comida}, valor 500`)
        break
    default:
        console.log("Ninguna opcion anterior")
        break
} */

/* let pelicula = prompt(`
1: Renfield
2: Evil dead rise
3: El exorcista del Papa
4: Batman
`)


switch (pelicula) {
    case "1":
        console.log("Renfield")
        
        break;
    case "2":
        console.log("Evil dead rise")
        
        break;
    case "3":
        console.log("Elexorcista del Papa")
            
            break;
    case "4":
        console.log("Batman")
                
                break;

    default:
        console.log("Ninguna opcion válida")
        break;
} */


// CICLOS

// ciclos por conteo (FOR)
// ciclos condicionales (WHILE - DO WHILE)

/* while(condicion){
    //Cuerpo del bucle
} */

/* let i = 0

while(i <= 5){
    alert(i)
    i++
} */

/* let entrada = prompt("Ingrese texto o ESC para interrumpir")
let texto = ""

while (entrada != "ESC" && entrada != "esc") {
    texto += entrada + " "
    entrada = prompt("Ingrese texto o ESC para interrumpir")
}

alert(texto) */

// DO WHILE

/* do {
    //cuerpo del bucle
} while (condition); */

/* let x = 25

do{
    console.log(x)
    x++
} while(x < 30) */

// FOR

/* 

for(desde; hasta; actualizacion){
    cuerpo del ciclo
}

*/



/* for ( let i = 5; i < 5; i++){
    alert(`El valor de I es: ${i}`)
} */


/* let numero = Number(prompt("Ingrese un numero"))

for(let i = 1; i <= 10; i++){
    let resultado = numero * i
    console.log(`${numero} x ${i} = ${resultado}`)
} */


// BREAK

/* for (let i = 1; i <= 10; i++){
    if(i === 6){
        break
    }

    alert(`El valor de I es ${i}`)
} */

// CONTINUE

/* for(let i = 1; i <= 10; i++){
    if(i === 7){
        continue
    }
    console.log(`El valor de I es: ${i}`)
} */




