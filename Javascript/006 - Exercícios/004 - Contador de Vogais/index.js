/*
  Precisamos desenvolver um contador de vogais que não apenas calcule a quantidade  
  de vogais em uma frase, mas também retorne as vogais que foram utilizadas.

  exp.: Abacate = { total: x, vogais: [x,y,z] }
*/

let minhaString = "Brayan Valadares";
minhaString = minhaString.toLowerCase();

let vogais = {}
let consoantes = {}
let totalVogais = 0
let totalConsoantes = 0

for (let char of minhaString) {
  if (/[aeiou]/.test(char)) {
    totalVogais++;
    vogais[char] = (vogais[char] || 0) + 1;
  } else if (/[bcdfghjklmnpqrstvwxyz]/.test(char)) {
    totalConsoantes++;
    consoantes[char] = (consoantes[char] || 0) + 1;
  }
}

console.log({minhaString, totalVogais, vogais, totalConsoantes, consoantes})