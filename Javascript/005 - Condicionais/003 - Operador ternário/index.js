const velocidade = 86;
const warn = 85;

const condicacao = 
  velocidade >= warn 
    ? console.log("Você foi multado!") 
    : console.log("Você esta dentro do limite de velocidade!");

if(velocidade >= warn){
  console.log("Você foi multado!")
} else{
  console.log("Você esta dentro do limite de velocidade!")
}
