// Crie uma função para verificar se um valor é Truthy
var n1 = '0';

function verificacao(valor){
  if(valor == true){
    return `valor ${valor} é true`;
  }else{
    return `valor ${valor} é falso`;
  }
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetro(lado){
  lado = lado*4;
  return lado
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
var nome = 'joao';
var sobrenome = 'xavier';

function nomeCompleto(nome, sobrenome){
  return `${nome} ${sobrenome}`;
}

// Crie uma função que verifica se um número é par
var numero = 3;

function numPar(numero){
  if(numero % 2 === 0){
    return 'Numero é par';
  }else{
    return 'Numero é impar';
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDado(x){
  return typeof x;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
  console.log('scrolou');
});

// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  var totalPaises = 193;
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

