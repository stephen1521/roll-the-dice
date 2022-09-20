const prompt = require('prompt-sync')({sigint: true});
let rig = Number(prompt('Enter rigged number(1-6): '));
let rand = Math.random();
let roll = 0;
let prob = 7;
if(rand < 1/prob){
    roll = 1;
} else if(rand < 2/prob){
    roll = 2;
} else if(rand < 3/prob){
    roll = 3;   
} else if(rand < 4/prob){
    roll = 4;
} else if(rand < 5/prob){
    roll = 5;
} else if(rand < 6/prob){
    roll = 6;
} else {
    roll = rig;
}
console.log(roll); 
