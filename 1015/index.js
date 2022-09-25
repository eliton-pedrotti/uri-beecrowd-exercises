var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

const X1 = lines[0].split(' ')[0];
const Y1 = lines[0].split(' ')[1];

const X2 = lines[1].split(' ')[0];
const Y2 = lines[1].split(' ')[1];

const valor = ((X2 - X1) ** 2) + ((Y2 - Y1) ** 2);
const distancia = Math.sqrt(valor, 2);

console.log(distancia.toFixed(4));


