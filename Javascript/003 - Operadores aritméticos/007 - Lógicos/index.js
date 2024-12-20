/* 
    && ( E ), || (Ou), ! (Negação)
*/

// 'E'
console.log(1 === 1 && 2 >= 1); // true
console.log(1 === 1 && 1 >= 2); // false

// 'Ou'
console.log(1 === 2 || 1 === 1); // true
console.log(1 === 2 || 2 == 1); // false

// 'Negação'
console.log(!(1 + 1 === 2)); // false
console.log(!(1 + 1 === 3)); // true