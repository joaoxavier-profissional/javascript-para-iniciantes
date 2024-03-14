// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var dadosPessoais = {
  nome: 'João',
  sobrenome: 'Xavier',
};

// Crie um método no objeto anterior, que mostre o seu nome completo
console.log(dadosPessoais.nome + ' ' + dadosPessoais.sobrenome);

dadosPessoais.nomeCompleto = function(){
  return `${this.nome} ${this.sobrenome}`;
}

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var pessoa = 'mulher';

var cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  latir(pessoa){
    if(pessoa === 'homem'){
      return 'AU AU AU';
    } else {
      return '*deitado*';
    }
  }
}
