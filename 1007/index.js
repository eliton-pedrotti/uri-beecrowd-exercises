var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

let A = Number(lines[0]);
let B = Number(lines[1]);
let C = Number(lines[2]);
let D = Number(lines[3]);

const DIFERENCA = (A * B - C * D);

console.log(`DIFERENCA = ${DIFERENCA}`)