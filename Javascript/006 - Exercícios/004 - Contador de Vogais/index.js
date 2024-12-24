/*
  Precisamos desenvolver um contador de vogais que não apenas calcule a quantidade  
  de vogais em uma frase, mas também retorne as vogais que foram utilizadas.

  exp.: Abacate = { total: x, vogais: [x,y,z] }
*/

let minhaString = "Abacate";
minhaString = minhaString.toLowerCase().replaceAll(" ", "");

let somaVogais = {};
let somaConsoantes = {};
let totalVogais = 0;
let totalConsoantes = 0;

for (let char of minhaString) {
  if (/[aeiou]/.test(char)) {
    totalVogais++;
    somaVogais[char] = (somaVogais[char] || 0) + 1;
  } else if (/[bcdfghjklmnprqstvwxyz]/.test(char)) {
    totalConsoantes++;
    somaConsoantes[char] = (somaConsoantes[char] || 0) + 1;
  }
}

console.log({ totalConsoantes, somaConsoantes, totalVogais, somaVogais });