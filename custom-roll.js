const prompt = require('prompt-sync')({sigint: true});
let num = Number(prompt('Enter a number: '));
let rand = Math.floor(Math.random() * num) + 1; 
console.log('Rolling a dice with '+num+' sides: '+rand);
