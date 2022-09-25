var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

const peca1 = lines[0].split(' ');
const peca2 = lines[1].split(' ');

const numeroPecas1 = peca1[1];
const valorUnitarioPeca1 = peca1[2];

const numeroPecas2 = peca2[1];
const valorUnitarioPeca2 = peca2[2];

const valorTotalPeca1 = numeroPecas1 * valorUnitarioPeca1
const valorTotalPeca2 = numeroPecas2 * valorUnitarioPeca2

const valorAPagar = valorTotalPeca1 + valorTotalPeca2

console.log(`VALOR A PAGAR: R$ ${valorAPagar.toFixed(2)}`);