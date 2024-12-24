/* 
  Preciamos mostrar quantas letras repetidas aparecem em uma palavra
  Ex.: Abacate = { A: 3, B: 1, C: 1, T: 1, E: 1 }
*/

const palavra = "Brayan".toUpperCase().replaceAll(" ", "");

let letras = {};

for (let i = 0; i < palavra.length; i++) {
  if (letras[palavra[i]]) {
    letras[palavra[i]]++;
  } else {
    letras[palavra[i]] = 1;
  }
}

console.log(palavra,"=", letras)