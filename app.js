function exibirTextoNaTela(tag, informacao){
    let titulo = document.querySelector(tag); //Foi definido o nome tag pra o parametro
    titulo.innerHTML = informacao; //Foi dado o nome informacao para o conteudo dentro da tag
}

function exibirTexto() {
    exibirTextoNaTela('h1','sistema de<br>Boas vindas<br>ao usuario :) '); //Quando eu coloquei h1 ele substitui a "tag" no paramaetro e o conteudo substitui a informacao
    exibirTextoNaTelaId('nome','Digite seu nome:');
    exibirTextoNaTelaId('idade', 'Digite sua idade:');
    exibirTextoNaTelaId('cidade', 'Digite Sua Cidade');
    exibirTextoNaTelaId('estado', 'Digite Seu Estado');
    exibirTextoNaTelaId('cargoDeInteresse', 'Digite Seu Cargo De Interesse');
    exibirTextoNaTelaId('CPF', 'Digite seu CPF');
    exibirTextoNaTelaId('escolaridade', 'Digite Sua Escolaridade');
}

function exibirTextoNaTelaId(id, informacaoPorId){
    let tituloid = document.getElementById(id);
    tituloid.innerHTML = informacaoPorId;
}

exibirTexto();

function funcaoNome () {
   return document.getElementById('inputNome').value;
}

function funcaoIdade() {
    return document.getElementById('inputIdade').value;
}

function funcaoCidade() {
    return document.getElementById('inputCidade').value;
}

function funcaoEstado() {
    return document.getElementById('inputEstado').value;
}

function funcaoCargo() {
    return document.getElementById('inputCargoDeInteresse').value;
}

function funcaoCPF() {
    return document.getElementById('inputCPF').value;
}

function funcaoEscolaridade() {
    return document.getElementById('inputEscolaridade').value;
}

function chute() {
    let nomeUsuario = funcaoNome();
    let idadeUsuario = funcaoIdade();
    let cidadeUsuario = funcaoCidade();
    let estadoUsuario = funcaoEstado();
    let cargoUsuario = funcaoCargo();
    let CPFUsuario = funcaoCPF();
    let escolaridadeUsuario = funcaoEscolaridade();
    //exibirTextoNaTela('p1', `Seja bem-vindo usuario: ${idadeUsuario}`);
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1); // essa função cria o numero aleatorio ela existe mas não está sendo usada
}

function console() {
    let nomeConsole = prompt('Digite seu nome');
    alert(`Bem vindo ${nomeConsole}`);
}

function limpar(){
    exibirTextoNaTela('p1','Digite seu nome:');
}

let numeroSecreto = gerarNumeroAleatorio(); // aqui a função "Gerar numero aleatorio" está sendo chamada e o codiogo "Return" faz com que ela seja guardada dentro da variavel