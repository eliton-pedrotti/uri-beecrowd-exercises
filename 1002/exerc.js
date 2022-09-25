var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');

let raio = lines[0];
let n = 3.14159;

console.log(raio);

let area = Math.pow(raio, 2) * n

console.log(`A=${area.toFixed(4)}`)