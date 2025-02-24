
let nombre = prompt("Ingrese su nombre")
alert("Bienvenido " + nombre)
alert("Este es un simulador de préstamos personales")

let TNA=0
const TNA1=0.63
const TNA2= 0.85


let cliente = prompt("Es ud. cliente del banco?").toUpperCase()

if (cliente == "SI"){
        TNA=TNA1
    }
    else if (cliente=="NO"){
        TNA=TNA2
    }
    else {
        alert("Por favor actualice la página e intente nuevamente")
        TNA.break()    
    }
   

alert("La tasa Nominal Anual es de " + TNA)

let monto = parseFloat(prompt("Ingrese un valor en pesos a solicitar, entre $1000000 y $5000000"))

if (monto <1000000){
    alert("El monto solicitado es menor al mínimo")
    alert("Por favor actualice la página e intente nuevamente")
    monto.break()
}
if (monto>5000000){
    alert("El monto solicitado es mayor al máximo")
    alert("Por favor actualice la página e intente nuevamente")
    monto.break()
}

let plazo = parseInt(prompt("Ingrese el plazo en meses (entre 3 y 24)"))
if (plazo < 3){
    alert("El plazo de devolución del préstamo es menor al mínimo")
    alert("Por favor actualice la página e intente nuevamente")
    plazo.break()
}
if (plazo > 24){
    alert("El plazo de devolución del préstamo es mayor al máximo")
    alert("Por favor actualice la página e intente nuevamente")
    plazo.break()
}
alert("Ud. ha solictado la simulación de un préstamo por  " + monto + " a devolver en un plazo de " + plazo +" meses.")

function calcularMontoFinal(A, B){
   
    let montoFinal= (A*(1+TNA))
    let cuota= (montoFinal/B)
    alert("El valor de su cuota será de " + cuota)
    }

//ejecuto:

calcularMontoFinal(monto, plazo)
