var botaoBuscar = document.querySelector("#buscar-paciente")
botaoBuscar.addEventListener("click", function(event){
    event.preventDefault()
    
    var xhr = new XMLHttpRequest()

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json")
    xhr.send()
    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
            var resposta = xhr.responseText
            var pacientes = JSON.parse(resposta)
            pacientes.forEach(function(paciente){
                adicionarPacienteNaTabela(paciente)
            })
            document.querySelector("#erro-ajax").classList.add("invisivel")
        }else{
            console.log("Erro:", xhr.status)
            console.log(xhr.response)
            document.querySelector("#erro-ajax").classList.remove("invisivel")
        }
    })

    
    

})