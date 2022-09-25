var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

const pontosFlutuantes = lines[0].split(' ');
const pi = 3.14159;
const A = pontosFlutuantes[0];
const B = pontosFlutuantes[1];
const C = pontosFlutuantes[2];

const areaTrianguloRetangulo = (A * C) / 2;
const circulo = pi * Math.pow(C, 2);
const areaTrapezio = ((Number(A) + Number(B)) * Number(C)) / 2;
const areaQuadrado = B * B;
const areaRetangulo = A * B;

console.log(`TRIANGULO: ${areaTrianguloRetangulo.toFixed(3)}`);
console.log(`CIRCULO: ${circulo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);