var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

const carroY = 90
const carroX = 60

const distancia = lines[0];
const hora = 60
const diferencaCarroXparaCarroY = carroY - carroX

const qtdMinutos = (hora * distancia) / diferencaCarroXparaCarroY;

console.log(`${qtdMinutos} minutos`);