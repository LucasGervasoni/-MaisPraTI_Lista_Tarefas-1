// ============================================== //
//Exercício 5
/*
Acrescente ao exercício acima a mensagem ‘Você foi REPROVADO! Estude mais’ caso a
média calculada seja menor que 6,0
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
}else{
    console.log(`Você foi REPROVADO! Estude mais. Sua média final foi de ${mediaNota}.`);
}