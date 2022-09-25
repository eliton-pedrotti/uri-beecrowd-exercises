var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

const distanciaPercorrida = lines[0];
const totalCombustivelGasto = lines[1];

const consumoMedio = distanciaPercorrida / totalCombustivelGasto

console.log(`${consumoMedio.toFixed(3)} km/l`)