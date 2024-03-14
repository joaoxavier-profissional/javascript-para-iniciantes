// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 23;
var idadeIrmao = 17;

if(minhaIdade > idadeIrmao){
    console.log('É maior')
}else if (minhaIdade < idadeIrmao){
    console.log('É menor');
}else{
    console.log('Idades iguais');
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);

console.log(expressao);


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //verdadeira         console.log(!!nome)
var idade = 28; //verdadeira             console.log(!!idade)
var possuiDoutorado = false; //false     console.log(!!possuiDoutorado)
var empregoFuturo; //false               console.log(!!empregoFuturo)
var dinheiroNaConta = 0; //false         console.log(!!dinheiroNaConta)


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil > china){
    console.log('Brasil tem mais habitantes.');
}else{
    console.log('China tem mais habitantes.');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');  //falso
}

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão'); // Cao
} else {
  console.log('Falso');
}