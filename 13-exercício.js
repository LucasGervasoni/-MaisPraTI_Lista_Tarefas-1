// ============================================== //
//Exercício 13
/*
Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
calcule e mostre a tabuada de 1 até N. 
 */

// Habilitando a função prompt
const prompt = require('prompt-sync')()

// atribuindo a variável que receberá o valor do número 
let valorNumero = parseInt(prompt("Insira um número: "));

// atribuindo a variável que receberá o valor da multiplicação entre o contador e o número dado pelo usuário
let valorMultiplicacao;

// loop for utilizado para fazer a tabuada com nenhuma repetição de código
for (let i = 1; i <= valorNumero; i++){
    // variável recebendo o valor da multiplicação
    valorMultiplicacao = i * valorNumero;
    console.log(`${i} x ${valorNumero} = ${valorMultiplicacao}`);
}