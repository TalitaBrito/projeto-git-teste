var titulo = document.querySelector(".titulo");

//textContent - propriedade que pega o texto selecionado de alguma tag
//alteração do texto (propriedade disponivel na tag h1, h2, span, p, que possuem conteudo de texto)
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

    for (i = 0; i < pacientes.length; i++) {

        paciente = pacientes[i];

        var tdPeso = paciente.querySelector(".info-peso");
        var tdAltura = paciente.querySelector(".info-altura");

        var peso = tdPeso.textContent;
        var altura = tdAltura.textContent;

        var tdImc = paciente.querySelector(".info-imc");
        
        var pesoValido = validaPeso(peso);
        var alturaValida = validaAltura(altura);

        if (!pesoValido) {
            pesoValido = false;
            tdImc.textContent = "Peso inválido!";
            paciente.classList.add("paciente-invalido");
        }

        if (!alturaValida) {
            alturaValida = false;
            tdImc.textContent = "Altura inválida!";
            paciente.classList.add("paciente-invalido");

        }

        if (alturaValida && pesoValido) {
            var imc = calculaImc(peso, altura);
            tdImc.textContent = imc;
        }

    }

function calculaImc(peso, altura) {
    var calcImc = 0;
    calcImc = peso / (altura * altura);
    return calcImc.toFixed(2);
}

function validaPeso(peso) {
    if (peso > 0 && peso <= 1000) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if (altura > 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}