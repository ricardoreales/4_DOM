function recomendacionesImc(imc) {
    let mensaje = ""
    switch (true) {
        case (imc < 18.5):
            mensaje = "usted  esta en desnutrición, recomendamos ponerse en control con un Nutricionista "
            break;
        case (imc >= 18.5 && imc <= 24.9):
            mensaje = "usted  se encuentra dentro del rango de peso normal o saludable"
            break;
        case (imc >= 25 && imc <= 29.9):
            mensaje = "usted se encuentra dentro del rango de sobrepeso, recomendamos ponerse en control con un Nutricionista y hacer ejercicicio "
            break;
        default:
            mensaje = "usted se encuentra dentro del rango de obesidad, recomendamos ponerse en control con un Nutricionista y hacer ejercicio"
            break;
    }

    return mensaje
}


function calculoImc(peso, altura) {
    let imc = parseFloat(peso / (altura * altura))
    return imc
}


let nombre = document.getElementById("nombre").value
let peso = parseFloat(document.getElementById("peso").value)
let altura = parseFloat(document.getElementById("altura").value)
let imc = calculoImc(peso, altura)

document.getElementById("imc").innerHTML = imc.toFixed(2)
document.getElementById("recomendaciones").innerHTML = recomendacionesImc(imc)












































