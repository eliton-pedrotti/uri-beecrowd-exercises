var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

let segundos = lines[0]

// 1 minuto == 60 segundos
// 1 hora == 3600 segundos

let teste = (segundos * 60) / 3600
// let horas = 
// let minutos = 
// let segundos = 

console.log(teste)
