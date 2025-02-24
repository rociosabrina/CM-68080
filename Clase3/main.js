

//estructura del FOR

// desde, hasta, actualización

//sugar syntax: i++ significa i=i+1

//break: corta la iteración
/*for(let i=0; i<10; i++){

    if(i===5){
        break
    }

    console.log("Seba agregó " + i + " al stock")



//continue: saltea un valor en particular y sigue iterando


for(let i=0; i<10; i++){

    if(i===5){
        continue
    }

    console.log("Seba agregó " + i + " al stock")


}


while: ejecuta mientras una condición sea verdadera, hasta que se vuelva falsa

let iterar = true

while (iterar ===true){
    console.log("imprimo un mensaje desde el while")
    iterar =confirm("desea continuar?")
}



//do while: se ejecute el while al menos una vez:

let contador=6
do {
    console.log("el valor del contador es " + contador)
}while(contador<5)
}*/

let intentos = 1

let identificar= true

do{
    let usuario=prompt("ingrese su usuario")
    if(usuario===null){
        break
    }

    if(usuario==="adolfo piña" && intentos <=3){
        alert("bienvenido Adolfo")
        identificar = false 
    }else{
        alert("No reconozco el usuario")
        intentos++
        if(intentos>3){
            alert("usted superó los tres intentos")
            break
        }
    }

}while(identificar)