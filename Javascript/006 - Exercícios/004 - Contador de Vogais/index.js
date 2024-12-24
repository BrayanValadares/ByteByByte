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

for (let char of minhaString) { // for of percorre cada caractere da string
  if (/[aeiou]/.test(char)) { // testa se o caractere é uma vogal
    totalVogais++; // incrementa o total de vogais
    vogais[char] = (vogais[char] || 0) + 1; // incrementa o total de vezes que a vogal foi encontrada
  } else if (/[bcdfghjklmnpqrstvwxyz]/.test(char)) { // testa se o caractere é uma consoante
    totalConsoantes++;// incrementa o total de consoantes
    consoantes[char] = (consoantes[char] || 0) + 1; // incrementa o total de vezes que a consoante foi encontrada
  }
}

console.log({minhaString, totalVogais, vogais, totalConsoantes, consoantes})