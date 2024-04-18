// ============================================== //
//Exercício 16
/*
Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
 */

// atribuindo as variáveis de contador e do valor inicial
let valor = 100;
let quantidadePrimos = 0;

// loop while verificando se a quantidade é igual ao número total de primos
while (quantidadePrimos <= 50) {
    let divisor = 1;
    let quantidadeDivisor = 0;

    // loop while verificando se o divisor é menor ou igual o valor do número,caso seja , entrará no loop
    while (divisor <= valor) {
      // verificando se o resultado da divisão é 0
      if (valor % divisor === 0) {
        quantidadeDivisor++;
      }
      divisor++;
    }
    // verificando se a quantidade de divisores é igual a 2, pois números primos possuem dois divisores [1,ele mesmo]
    if (quantidadeDivisor === 2) {
      console.log(valor);
      quantidadePrimos++;
    }
    valor++;
}