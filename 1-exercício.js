// ============================================== //
//Exercício 1
/*
Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
valor correspondente em graus Fahrenheit.
 */

// Habilitando a função prompt
const prompt = require('prompt-sync')()

// criação da variável que receberá o valor Celsius dado pelo usuário
let valorTempCelsius = parseInt(prompt("Digite uma temperatura em Celsius: "));

// variável que receberá o valor da temperatura convertida para fahrenheit
let valorTempFahrenheit =  valorTempCelsius / 5 * 9 + 32;

// Irá imprimir na tela conversão da temperatura
console.log(`A temperatura em Celsius de ${valorTempCelsius} foi convertida para ${valorTempFahrenheit} Fahrenheit.`);