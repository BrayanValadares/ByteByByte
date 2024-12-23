/*
  Precisamos mostrar a tabuada no console de 0 até 10 neste seguinte formato:

  multiplicador x número = resultado
  multiplicador x 0 = resultado
  multiplicador x 1 = resultado
  multiplicador x 2 = resultado
  multiplicador x 3 = resultado
  ...
  multiplicador x 10 = resultado

  Obs.: não podemos criar varios consoles.log(multiplicador x 3 = resultado)
*/

const multiplicador = 2;

/* 
  let contador = 0; Este é o ponto de partida do loop.
  contador <= 10; Esta é a condição de continuação do loop. O loop continuará executando enquanto for menor ou igual a 10.
  contador++: Este é o incremento que ocorre após cada iteração do loop. Ele aumenta o valor do contador em 1 a cada vez que o loop é executado.
*/

for(let contador = 1; contador <= 10; contador++) {
    let calculo = multiplicador * contador;
    console.log(`${multiplicador} x ${contador} = ${calculo}`)
}