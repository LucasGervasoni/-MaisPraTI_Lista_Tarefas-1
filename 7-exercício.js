// ============================================== //
//Exercício 7
/*
As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
 */

// Habilitando a função prompt
const prompt = require('prompt-sync')()

// atribuindo as variáveis que irão armazenar a quantidade de maçãs e o total da compra
let quatidadeMacas = parseInt(prompt("Quantas maçãs você comprou? "));
let valorTotalCompra;

// estrutura de decisão para verificar se a quantidade de maçãs é maior ou igual uma dúzia, caso não seja o valor total será diferente.
if (quatidadeMacas >= 12){
    valorTotalCompra = quatidadeMacas * 0.25;
    console.log(`O valor total da sua compra foi de R$ ${valorTotalCompra} reais`);
}else{
    valorTotalCompra = quatidadeMacas * 0.30;
    console.log(`O valor total da sua compra foi de R$ ${valorTotalCompra} reais`);
}