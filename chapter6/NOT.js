//logical NOT (!)

//let user = false

//if(!user){

//}

//console.log(!true);
//console.log(!false);



//break and continue


const scores = [25, 0, 30, 50, 75, 100, 20];

for(let i = 0; i <scores.length; i++){

    if(scores[i] === 0){
        continue;
    }

    console.log('your score: ', scores[i]);

    if(scores[i] === 100){
        console.log('congrats! top score!');
        break;
    }
}