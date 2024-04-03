// ask the age and send the discout offer

var prompt = require('prompt-sync')();
var age = prompt("What is your age =");
if(age < 18){
    console.log("You get a 20% discount");
}
else if(age >= 18 && age < 65){
    console.log("You get a 10% discount");
}
else{
    console.log("You get a 30% discount");
}

