var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

const tempoGasto = lines[0];
const velocidadeMedia = lines[1];

const litrosNecessario = (tempoGasto * velocidadeMedia) / 12

console.log(litrosNecessario.toFixed(3))