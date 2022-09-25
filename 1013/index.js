var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

const valores = lines[0].split(' ');

let maior;

const A = Number(valores[0]);
const B = Number(valores[1]);
const C = Number(valores[2]);

const valorMaiorEntreAeB = (A + B + Math.abs(A - B)) / 2;

if (valorMaiorEntreAeB > C) {
    maior = valorMaiorEntreAeB
} else if (valorMaiorEntreAeB < C) {
    maior = C
}

console.log(`${maior} eh o maior`);