// ============================================== //
//Exercício 14
/*
Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
a média aritmética desses números.
 */

// Habilitando a função prompt
const prompt = require('prompt-sync')()

// atribuindo a variável do valor dado pelo usuário
let valorNaoNulo;
// atribuindo a variável da soma dos números que será dado pelo usuário
let somaValores = 0;
// atribuindo a variável do contador, para saber quantos números foram dados pelo usuário
let i = 0;
// atribuindo a variável da média dos valores dados pelo usuário
let mediaAritmetica = 0;

// loop while usado para funcionar por tempo indeterminado até que o usuário digite 0
while(valorNaoNulo !== 0){
    // recebendo os números do usuário
    valorNaoNulo = parseInt(prompt("Insira um número: "));
    // somando os valores a cada loop
    somaValores += valorNaoNulo;
    // realizando a média dos valores a cada loop
    mediaAritmetica = somaValores / i
    i++
}

console.log(`A média final foi de ${mediaAritmetica}`)
