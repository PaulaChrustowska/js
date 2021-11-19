const password = 'p@ss';

if (password.length >= 12 && password.includes('@')){
  console.log("it's OK");
} else if(password.length >= 8 || password.includes('@') && password.length >= 5 ){
    console.log("strong enough");
}else {
    console.log('no');
}
