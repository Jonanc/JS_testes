function exibirTextoNaTela(tag, informacao){
    let titulo = document.querySelector(tag); //Foi definido o nome tag pra o parametro
    titulo.innerHTML = informacao; //Foi dado o nome informacao para o conteudo dentro da tag
}

function exibirTexto() {
    exibirTextoNaTela('h1','sistema de<br>Boas vindas<br>ao usuario :) '); //Quando eu coloquei h1 ele substitui a "tag" no paramaetro e o conteudo substitui a informacao
    exibirTextoNaTela('p1','Digite seu nome:');
    exibirTextoNaTelaId('paragrafo2', 'Digite sua idade:')
}

function exibirTextoNaTelaId(id, informacaoPorId){
    let tituloid = document.getElementById(id)
    tituloid.innerHTML = informacaoPorId
}

exibirTexto()

function nome () {
   return document.querySelector('input').value
}

function chute() {
    let nomeUsuario = nome()
    exibirTextoNaTela('p1', `Seja bem-vindo usuario: ${nomeUsuario}`)
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1); // essa função cria o numero aleatorio ela existe mas não está sendo usada
}

function console() {
    let nomeConsole = prompt('Digite seu nome')
    alert(`Bem vindo ${nomeConsole}`)
}


let numeroSecreto = gerarNumeroAleatorio(); // aqui a função "Gerar numero aleatorio" está sendo chamada e o codiogo "Return" faz com que ela seja guardada dentro da variavel