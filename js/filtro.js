var inputFiltro = document.querySelector("#filtrar-tabela")
inputFiltro.addEventListener("input", function(){
    pacientes = document.querySelectorAll(".paciente")
    valor = this.value

    if(valor.length > 0){
        pacientes.forEach(function(paciente){
            var nome = paciente.querySelector(".info-nome").textContent
            
            var regex = new RegExp(valor, "i")

            if(!regex.test(nome)){
                paciente.classList.add("invisivel")
            }
            else{
                paciente.classList.remove("invisivel")
            }
    
        })
    }else{
        pacientes.forEach(function(paciente){
            paciente.classList.remove("invisivel")
        })
    }

    
    
})

