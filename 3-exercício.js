// ============================================== //
//Exercício 3
/*
Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
● Some 25 ao primeiro inteiro;
● Triplique o valor do segundo inteiro;
● Modifique o valor do terceiro inteiro para 12% do valor original;
● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
dos primeiros três inteiros.
 */

// Habilitando a função prompt
const prompt = require('prompt-sync')()

// atribuindo as váriaveis que serão utilizadas para armazenar os inteiros
let numeroUsuario;
let primeiroNumero;
let segundoNumero;
let terceiroNumero;
let quartoNumero;
let soma = 0;

// loop for usado para não repetir uma quatidade excessiva de código
for (let cont = 1; cont <= 4; cont++){
    //recebendo os inteiros dado pelo usuário
    numeroUsuario = parseInt(prompt("Insira um número:"));
    if (cont === 1){
        //armazenando o valor do primeiro inteiro
        primeiroNumero = numeroUsuario + 25;
    }else if(cont === 2){
        //armazenando o valor do segundo inteiro
        segundoNumero = numeroUsuario * 3;
    }else if(cont === 3){
        //armazenando o valor do terceiro inteiro
        terceiroNumero = (numeroUsuario * 12) / 100;
    }else if(cont === 4){
        //atribuindo a variável soma ao quarto inteiro
        quartoNumero = soma;
    }
    //somando os valores dos três primeiros inteiros e armazendo na variável soma
    soma += numeroUsuario;
}


// mostrando para o usuário os valores de cada inteiro após o código
console.log
(`O valor do primeiro número foi de: ${primeiroNumero}
\nO valor do segundo número foi de: ${segundoNumero}
\nO valor do terceiro número foi de: ${terceiroNumero}
\nO valor do quarto número foi de: ${quartoNumero}`);



