//strings typ tekstowy
console.log('string jest dedykowany typowi tekstowemu');

let email = 'paula.chrustowska@gmail.com';
console.log(email);


//string concatenation łaczy ze sobą zmienne
let firstName = 'Paula';
let secondName = 'Janina';
let lastName = 'Chrustowska';

let fullName = firstName + ' ' + secondName + ' ' + lastName;
console.log(fullName);

//getting characters wskazuje konkretną literę ze zmiennej
console.log(fullName[0]);
console.log(secondName[1]);
console.log(lastName[4]);

//string length loczy liczbę liter
console.log(fullName.length);
console.log(secondName.length);
console.log(lastName.length);

//string methods
console.log(fullName.toUpperCase());   //zamienia na duże litery

let result = fullName.toLowerCase();  //zamienia na małe litery

console.log(result, fullName);  //zestawia ze sobą

let index = email.indexOf('@')       //znajduje słowo/zmienną w stringu na danej pozycji / argument
console.log(index);

//common string methods

let email = 'paula.chrustowska@gmail.com';

 let result = email.lastIndexOf('a');

console.log(result);

console.log(fullName.toUpperCase);


 

