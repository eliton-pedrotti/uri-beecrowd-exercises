var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

let value = parseInt(lines[0]);

const notas = [100, 50, 20, 10, 5, 2, 1];

console.log(value)
for(let nota of notas){
    let qtdNotas = parseInt(value / nota);
    console.log(`${qtdNotas} nota(s) de R$ ${nota},00`)
    value = value % nota;
}