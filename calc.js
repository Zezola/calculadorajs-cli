const promptSync = require('prompt-sync');
const prompt = promptSync();

console.log(`
    Escolha a operacao desejada: 
    1 - Adicao
    2 - Subtracao
    3 - Multiplicacao
    4 - Divisao
`)
let op = prompt();

let n1,n2, result; 

n1 = parseFloat(prompt("Entre com n1: "))
n2 = parseFloat(prompt("Entre com n2: "))

if (op == 1) {
    result = n1 + n2;
    console.log(`${n1} + ${n2} = ${result}`)
} else if (op == 2) {
    result = n1 - n2
    console.log(`${n1} - ${n2} = ${result}`)
} else if (op == 3) {
    result = n1 / n2
    console.log(`${n1} / ${n2} = ${result}`)
} else if (op == 4) {
    result = n1 * n2
    console.log(`${n1} * ${n2} = ${result}`)
}
else {
    console.log("Operacao invalida")
}