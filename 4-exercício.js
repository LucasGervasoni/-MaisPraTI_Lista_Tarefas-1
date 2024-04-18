// ============================================== //
//Exercício 4
/*
Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
aprovação).
 */

// Habilitando a função prompt
const prompt = require('prompt-sync')()

// atribuindo as váriaveis para armazenar a nota, a soma e a média.
let notaAluno;
let mediaNota = 0;
let somaNota = 0;

// Atribuindo uma variável para o usuário escolher quantas avaliações ele irá colocar cada nota.
let quantidadeAvaliacao = parseInt(prompt("Quantas avaliações você quer calcular a média?"));
let i = 1

// loop while, pois a quantidade de avaliações do usuário é indeterminada, ela pode por 2 / 4 / 10 / ou até mais, por isso a escolha do while e não do for.
while ( i <= quantidadeAvaliacao){
    // atribuindo o valor de cada nota do aluno
    notaAluno = parseInt(prompt(`Digite a ${i} nota: `));
    // somando cada nota do aluno
    somaNota += notaAluno;
    // realizando a média de cada nota do aluno
    mediaNota = somaNota / quantidadeAvaliacao;
    i++
}

// realizando uma estrutura de decisão para verificar se o aluno foi ou não aprovado
if ( mediaNota >= 6){
    console.log(`PARABÉNS! Você foi aprovado. Sua média final foi de ${mediaNota}.`);
}