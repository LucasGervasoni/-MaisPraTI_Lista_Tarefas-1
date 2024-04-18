// ============================================== //
//Exercício 8
/*
Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
 */

// Habilitando a função prompt
const prompt = require('prompt-sync')()

// atribuindo os valores 
let primeiroValor = parseInt(prompt("Digite o primeiro valor: "));
let segundoValor = parseInt(prompt("Digite o segundo valor: "));

// atribuindo as váriaveis para armazenar o maior e menor valor
let maiorNumero;
let menorNumero;

// estrutura de decisão para verificar se o número é diferente do outro, caso seja igual dará um error
if (primeiroValor != segundoValor){
    // estrutura de decisão para verificar qual número é maior ou menor
    if(primeiroValor > segundoValor){
        // atribuindo os valores do maior número e do menor número para as respectivas variáveis
        maiorNumero = primeiroValor;
        menorNumero = segundoValor;
        console.log(`O valores em ordem crescente: ${menorNumero}, ${maiorNumero}`);
    }else{
        // atribuindo os valores do maior número e do menor número para as respectivas variáveis
        maiorNumero = segundoValor;
        menorNumero = primeiroValor;
        console.log(`O valores em ordem crescente: ${menorNumero}, ${maiorNumero}`);
    }
}else{
    console.log("Error: os valores são iguais.")
}