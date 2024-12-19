console.log(123);
console.log(Number("123") + 1 );

console.log("*************");

console.log(typeof 123); // typeof = ver o tipo primitivo
console.log(typeof Number("123"));
console.log(typeof "123");


/*
    Forma Correta de se Usar
    Number 123
    Number 123 + 123 = 246
    Number ("123") - 1 = 122

    Assim pode gerar bugs!
    Number "123" - 1 = 122
    Number "123" * 2 = 246
 */