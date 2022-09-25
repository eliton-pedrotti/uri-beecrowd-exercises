var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');


let A = lines[0]
let B = lines[1]

let X = Number(A) + Number(B)

console.log(`SOMA = ${X}`)