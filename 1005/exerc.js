var input = require('fs').readFileSync('input.txt', 'utf8');
var lines = input.split('\n');

let A = Number(lines[0])
let B = Number(lines[1])

let media = (A + B) / 2

console.log(`MEDIA = ${media}`);