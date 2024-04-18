// ============================================== //
//Exercício 11
/*
Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO.
 */

// Habilitando a função prompt
const prompt = require('prompt-sync')()

// atribuindo o valor inteiro
let valorInt;

//loop para verificar indeterminadas vezes os números, caso o valor seja diferente de 0
do{
    // recebendo o valor do usuário
    valorInt = parseInt(prompt("Digite um número: "));

    //estrutura de decisão para verificar se o número é diferente de 0
    if(valorInt !== 0){
        //estrutura de decisão para verificar se o número é PAR ou ÍMPAR
        if(valorInt % 2 === 0){
            console.log(`O número ${valorInt} é PAR`);
        }else{
            console.log(`O número ${valorInt} é ÍMPAR`);
        }
    }else{
        console.log("Error: Você digitou um número nulo")
    }
}while(valorInt !== 0)
