var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

const salarioFixo = lines[1];
const totalDeVendas = lines[2];

const comissao = 15 / 100
const comissaoAReceber = totalDeVendas * comissao

const totalAReceber = +salarioFixo + comissaoAReceber

console.log(`TOTAL = R$ ${totalAReceber.toFixed(2)}`);