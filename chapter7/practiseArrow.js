
// const greet = function(){
//     return 'hello. world';
// };

// const greet = () => 'hello';
// const result = greet();
// console.log(result);

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// };

// console.log(bill([5 ,15,30], 0.2));

const numbers = [2, 5, 7, 10, 34, 16, 879, 1]
const parzyste = () => numbers.filter n => n % 2;
console.log(parzyste);
