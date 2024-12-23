/*
IMC é a sigla para Índice de Massa Corpórea, 
parâmetro adotado pela Organização Mundial 
de Saúde para calcular o peso ideal de cada pessoa.

Como calcular o IMC?
O IMC é calculado dividindo o peso (em kg) pela 
altura ao quadrado (em m), de acordo com a seguinte 
fórmula: IMC = peso / (altura x altura).

E nosso calculo devemos retornar os seguintes valores para o usuário:

Resultado do Calc   | Resultado para o usuário
Abaixo de 17        | Muito abaixo do peso
Entre 17 e 18.49    | Abaixo do peso
Entre 18.5 e 24.99  | Peso normal
Entre 25 e 29.99    | Acima do peso
Entre 30 e 34.99    | Obesidade I
Entre 35 e 39.99    | Obesidade II
*/

/* PARA O USUÁRIO DIGITAR A ALTURA E O PESO...
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Digite seu peso (kg): ", (inputPeso) => { 
    const peso = Number(inputPeso);
    rl.question("Digite sua altura (m): ", (inputAltura) => {
      const altura = Number(inputAltura)
      const IMC = Number(peso / (altura * altura));
      console.log("IMC: " + IMC.toFixed(2));
*/

const peso = 55;
const altura = 1.65;

const IMC = Number(peso / (altura * altura));
console.log("IMC: " + IMC.toFixed(2));

switch (true) {
  case IMC < 17:
    console.log("Muito abaixo do peso")
    break;
  case IMC >= 17 && IMC <= 18.49:
    console.log("Abaixo do peso")
    break;
  case IMC >= 18.5 && IMC <= 24.99:
    console.log("Peso normal")
    break;
  case IMC >= 25 && IMC <= 29.99:
    console.log("Acima do peso")
    break;
  case IMC >= 30 && IMC <= 34.99:
    console.log("Obesidade I")
    break;
  case IMC >= 35 && IMC <= 39.99:
    console.log("Obesidade II")
  default:
    console.log("IMC inválido")
    break;
}

/* ...PARA O USUÁRIO DIGITAR A ALTURA E O PESO
  rl.close();
    });
  });
*/