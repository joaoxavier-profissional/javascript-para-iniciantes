// Por qual motivo o código abaixo retorna com erros?
{
    var cor = 'preto';
    const marca = 'Fiat';
    let portas = 4;
  }
  //console.log(var, marca, portas); //var como variavel console.log(cor, marca, portas);
  
  // Como corrigir o erro abaixo?
  /*function somarDois(x) {
    const dois = 2;
    return x + dois;
  }
  function dividirDois(x) {
    return x + dois; //dois nao esta no escopo da funcao
  }
  somarDois(4);
  dividirDois(6); */
  
  // O que fazer para total retornar 500?
  var numero = 50;
  
  for(var numero = 0; numero < 10; numero++) {
    console.log(numero);
  }

  numero = 50;
  
  const total = 10 * numero;
  console.log(total);
  