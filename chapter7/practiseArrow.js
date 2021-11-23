
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




// const numbers = [2, 5, 7, 10, 34, 16, 879, 1]
// const parzyste = () => numbers.filter(n => n % 2 ===0 );
// console.log(parzyste());




const numbers = [52, 85, 69, 985, 45, 66, 86, 12, 24, 84]
// const parzyste = () => numbers.filter( n => n % 4 ===0); 
// console.log(parzyste());


// const liczba = () => numbers.filter( n => n > 52 );
// console.log(liczba());


// const podzielne5 = () => numbers.filter( n => n % 5 ===0);
// console.log(podzielne5());


// const podzielne3 = () => numbers.filter( n => n % 3 ===0);
// console.log(podzielne3());

const rózne = () => numbers.filter( n => n != 52);
console.log(rózne());


