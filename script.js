let ano_de_nascimento = prompt("Digite o seu ano de nascimento: ");
let ano_atual = 2025;
let idade = ano_atual - ano_de_nascimento;
console.log(`Você tem ${idade} anos.`);
document.body.innerHTML = (`Você tem ${idade} anos.`);

function aumentarFonte() {
    let texto = document.body;
    let tamanhoAtual = parseFloat(window.getComputedStyle(texto).fontSize);
    let novoTamanho = tamanhoAtual + 2;
    texto.style.fontSize = novoTamanho + "px";
}