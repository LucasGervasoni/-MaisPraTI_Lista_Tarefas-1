// ============================================== //
//Exercício 2
/*
Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores.
 */

// Habilitando a função prompt
const prompt = require('prompt-sync')()

// Variável recebendo o valor do total de eleitores
let totalEleitores = parseInt(prompt("Digite o número total de eleitores do município:"));

// // Variável recebendo os valores dos votos
let valorBranco = parseInt(prompt("Votos em Branco:"));
let valorNulo = parseInt(prompt("Votos Nulos:"));
let valorValido = parseInt(prompt("Votos Válidos:"));

// Variável para receber a soma dos votos para comparar com o total de eleitores
let somaValores = valorNulo + valorBranco + valorValido;

// Verificando se o total de eleitores é igual ou maior a quantidade de votos
if (totalEleitores >= somaValores){
    // atribuindo às váriaveis o cálculo do percentual de cada voto
    percentBranco = (valorBranco * 100) / totalEleitores;
    console.log(`O percentual de votos em branco é de ${percentBranco}`);
    percentNulo = (valorNulo * 100) / totalEleitores;
    console.log(`O percentual de votos nulos é de ${percentNulo}`);
    percentValido = (valorValido * 100) / totalEleitores;
    console.log(`O percentual de votos válidos é de ${percentValido}`);
}else{
    // Mostrando uma mensagem caso o total de votos seja maior que o número de eleitores
    console.log("Error: o total dos votos é maior que o total de eleitores.");
}

