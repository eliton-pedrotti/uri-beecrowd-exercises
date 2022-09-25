var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

let A = Number(lines[0]);
let B = Number(lines[1]);
let C = Number(lines[2]);


const MEDIA = (A * 2 + B * 3 + C * 5) / 10;

console.log(`MEDIA = ${MEDIA.toFixed(1)}`);