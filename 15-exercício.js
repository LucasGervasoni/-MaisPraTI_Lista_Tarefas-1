// ============================================== //
//Exercício 15
/*
Fazer um algoritmos para receber um número decimal e o peso de cada número até
que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
respectivos.
 */

// Habilitando a função prompt
const prompt = require('prompt-sync')()

// atribuindo a variável do valor dado pelo usuário
let numeroNaoNulo;
// atribuindo a variável do peso de cada valor dado pelo usuário
let pesoValor;
// atribuindo a variável da soma dos números que será dado pelo usuário
let somaNumero = 0;
// atribuindo a variável da soma dos pesos que será dado pelo usuário
let somaPeso = 0;
// atribuindo a variável da média dos valores dados pelo usuário
let mediaPonderada = 0;

// loop while usado para funcionar por tempo indeterminado até que o usuário digite 0
while(numeroNaoNulo !== 0){
    // recebendo os números do usuário
    numeroNaoNulo = parseFloat(prompt("Insira um número: "));
    // recebendo o peso dos números do usuário
    pesoValor = parseFloat(prompt("Insira o peso: "));
    // somando os valores a cada loop
    somaNumero += (pesoValor * numeroNaoNulo);
    // somando dos pesos a cada loop
    somaPeso += pesoValor;
    // realizando a média dos valores a cada loop
    mediaPonderada = somaNumero / somaPeso;
    console.log("Error: Número Nulo digitado.")
}

console.log(`A média final foi de ${mediaPonderada}`)
