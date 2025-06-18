let ano_atual = 2025;

function calcularIdade(ano_de_nascimento) {
    let idade = ano_atual - ano_de_nascimento;
    return idade;
}

function exibirIdade() {
    let ano_de_nascimento = parseInt(document.getElementById("ano_de_nascimento").value);
    if (isNaN(ano_de_nascimento) || ano_de_nascimento > ano_atual) {
        alert("Por favor, digite um ano válido, menor ou igual a " + ano_atual + ".");
        return;
    }
    let idade = calcularIdade(ano_de_nascimento);
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Sua idade é: ${idade} anos.`;
}
