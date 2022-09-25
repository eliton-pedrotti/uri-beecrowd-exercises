var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');


const numeroFuncionario = lines[0];
const horasTrabalhadas = lines[1];
const valorHora = lines[2];

const salario = horasTrabalhadas * valorHora

console.log(`NUMBER = ${numeroFuncionario}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);