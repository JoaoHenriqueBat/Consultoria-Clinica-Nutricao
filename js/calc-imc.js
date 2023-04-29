document.querySelector(".titulo").textContent = "Nutricionista"

var pacientes = document.querySelectorAll(".paciente")
for(var i = 0; i < pacientes.length; i++){
    peso = pacientes[i].querySelector(".info-peso").textContent
    altura = pacientes[i].querySelector(".info-altura").textContent
    imc = peso / (altura * altura)
    var PesoEhValido = validaPeso(peso)
    var AlturaEhValido = validaAltura(altura)

    if(!PesoEhValido){
        pacientes[i].querySelector(".info-imc").textContent = "Peso inválido!"
        pacientes[i].classList.add("error") // 2 formas
    }
    if(!AlturaEhValido){
        pacientes[i].querySelector(".info-imc").textContent = "Altura inválida!"
        pacientes[i].style.color = "red" // 2 formas
    }
    if(PesoEhValido && AlturaEhValido){
        var imc = calculaImc(peso, altura)
        pacientes[i].querySelector(".info-imc").textContent = imc
        
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 200){
        return true
        }
    else{return false}
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3){
        return true
    }
    else{return false}
}   

function calculaImc(peso, altura){
    var imc = 0
    imc = peso / (altura * altura)
    return imc.toFixed(2)
}

