// nomeie 3 propriedades ou métodos de strings
var nome = 'Joao';

nome = nome.toLowerCase(3);
nome = nome.toUpperCase(3);
nome = nome.length;


// nomeie 5 propriedades ou métodos de elementos do DOM
var h1 = document.querySelector('.h1');

//addEventListener
//appendChild
//id
//innerHTML
//innerText
console.log(h1);

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V

button.addEventListener("click", () => writeClipboardText("<empty clipboard>"));

async function writeClipboardText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.error(error.message);
  }
}
