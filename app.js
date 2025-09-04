let listaDeNumerosSorteados = [];
let numeroLimite = 100
let numeroSecreto = gerarnum();
let tentativas = 1;
mensagemInicial()


console.log(numeroSecreto);
function exibirTexto(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function mensagemInicial() {
    exibirTexto ("h1","O jogo do número secreto");
    exibirTexto ("p", "Tente acertar os números de 1 a 100 em seguida");
}

function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto){
        exibirTexto ("h1", "Você acertou o número secreto parabens");
        let paltentivas = (tentativas > 1) ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${paltentivas}`;
        exibirTexto ("p",`${mensagemTentativas}`);
        document.getElementById('reiniciar').removeAttribute('disabled')
        Document.getElementById('punheta').push = "img/Int8Array.png"
    } else {
        if (chute > numeroSecreto){
            exibirTexto ("p", "O número é menor");
        } else {
            exibirTexto ("p", "O número é maior");
        }
        tentativas++
        limparCampo()
    }
   
}

let pussybots = 100

function gerarnum() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeNumeros = listaDeNumerosSorteados.length;

    if (quantidadeDeNumeros == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarnum();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
    
}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciar() {
    numeroSecreto = gerarnum();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

