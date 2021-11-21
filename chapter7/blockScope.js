//variables & block scope

let age = 30;

if(true){
    age = 40;
    console.log('inside 1st code block; ', age);

}

console.log('outside code block: ', age);
