var botaoAdicionar = document.querySelector("#adicionar-paciente")
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault()
    
    var form = document.querySelector("#form-adiciona");

    var paciente = obterDadosPaciente(form)
    
    var erros = validaPaciente(paciente)

    if(erros.length > 0){
        exibeMensagem(erros)
        return    
    }

    adicionarPacienteNaTabela(paciente)
    
    form.reset()
    document.querySelector("#mensagem-erro").innerHTML = ""
})

function adicionarPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente)
    document.querySelector("#tabela-pacientes").appendChild(pacienteTr)
}

function obterDadosPaciente(form){
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente")

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"))
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"))
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"))
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"))
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"))

    return pacienteTr
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe)
    return td
}

function validaPaciente(paciente){
    var erros = []

    if(paciente.nome.length == 0) erros.push("Nome não pode estar vazio")
    if(paciente.gordura.length == 0) erros.push("Gordura não pode estar vazio")
    if(paciente.peso.length == 0) erros.push("Peso não pode estar vazio")
    if(paciente.altura.length == 0) erros.push("Altura não pode estar vazio")
    if(!validaPeso(paciente.peso)) erros.push("Peso é inválido!")
    if(!validaAltura(paciente.altura)) erros.push("Altura é inválida!")
    
    return erros
}

function exibeMensagem(erros){
    var ul = document.querySelector("#mensagem-erro")
    ul.innerHTML = ""
    erros.forEach(function(erro){
        var li = document.createElement("li")
        li.textContent = erro
        li.classList.add("erro")
        ul.appendChild(li)
    });  
}
