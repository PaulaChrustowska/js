//template strings

const title = 'Czy uda jej się ogarnąć JS?';
const author = 'Paula';
const likes = 35;


// concatenation way

//let result = ' The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
//console.log(result);

// template string way   using backticks

let result = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(result);


//creating html templates
 
let html = `
<h2>${title}</h2>
<p>By ${author}</p>
<span>This blog has ${likes} likes</span>
`;

console.log(html);

