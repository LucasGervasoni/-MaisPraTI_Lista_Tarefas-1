// ============================================== //
//Exercício 10
/*
Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
 */

// Habilitando a função prompt
const prompt = require('prompt-sync')()

// atribuindo o valor do inteiro 
let numeroInt = parseInt(prompt("Digite um número: "));

// estrutura for para mostrar o número na tela em um certa quantidade sem precisar repetir código
for(let i = 1; i <= 10 ; i++){
    console.log(numeroInt);
}