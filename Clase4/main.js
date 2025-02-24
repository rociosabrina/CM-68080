



/*let nombre = prompt("ingresa tu nombre")
alert("bienvenido" + nombre)*/

//aca creo la funcion:

/*
function saludar(){
    let nombre = prompt("ingresa tu nombre")
    alert("bienvenido " + nombre)
}

//acá la ejecuto (poniendo paréntesis)
saludar()
*/

/* otro ejemplo:

function login(){
    let usuario = prompt("ingresá tu usuario")

    if(usuario !== ""){
        alert("Bienvenido; " + usuario)
    }else{
        alert("Error, no se reconoce el usuario")
    }
}
*/

// ahora con parámetros:

/*function saludar(nombre){
    alert("hola " + nombre)
}

let parametro = prompt("ingresá tu usuario")

saludar(parametro)

*/

const iva=1.21

// Creo una función para calcular IVA:

function calcularIva(importe){

    // a continuación, si puede convertir a número importe, entonces continua
    if (parseFloat (importe)){
        let resultado = importe * iva
        alert("el importe más IVA es " + resultado)
    }
} 

//defino la función para calcular precio final con iva, llamando a la funcipon calcularIva:

function calcularPrecioFinal(){
    let precioDelProducto = prompt("Ingrese el importe total de tu compra")
    calcularIva(precioDelProducto)
}

//ejecuto:

calcularPrecioFinal()

function sumar(num1, num2){
    let resultado =num1+num2
    alert(resultado)
}

sumar(14,567)
