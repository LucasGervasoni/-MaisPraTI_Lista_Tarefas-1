// ============================================== //
//Exercício 6
/*
Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
 */

// Habilitando a função prompt
const prompt = require('prompt-sync')()

// atribuindo os valores de cada lado do triângulo
let ladoATriangulo = parseInt(prompt("Digite o primeiro lado:"));
let ladoBTriangulo = parseInt(prompt("Digite o segundo lado:"));
let ladoCTriangulo = parseInt(prompt("Digite o terceiro lado:"));

// estrutura de repetição para verificar se é  possível formar um triângulo 
if(ladoATriangulo + ladoBTriangulo > ladoCTriangulo && ladoATriangulo < ladoBTriangulo + ladoCTriangulo && ladoATriangulo + ladoCTriangulo > ladoBTriangulo ){
    console.log(`Você formou um triângulo perfeito.\nVerificando o tipo...`);
    
    // estrutura de repetição para verificar se cada tipo do triângulo
    if(ladoATriangulo == ladoBTriangulo && ladoBTriangulo == ladoCTriangulo){
        console.log("Você formou um Triângulo equilátero!");
    }else if(ladoATriangulo == ladoBTriangulo || ladoATriangulo == ladoCTriangulo || ladoBTriangulo == ladoCTriangulo ) {
        console.log("Você formou um Triângulo isósceles!");
    }else{
        console.log("Você formou um Triângulo escaleno!");
    }
}else{
    console.log("Error: Não foi possível formar um triângulo. Reveja os valores.")
}