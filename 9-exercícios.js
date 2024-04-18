// ============================================== //
//Exercício 9

// Habilitando a função prompt
const prompt = require('prompt-sync')()

// atribuindo a variável que irá possuir o código
let codigoProduto = parseInt(prompt("Digite o código do produto: "));

// estrutura de controle para facilitar o acesso às informações sem precisar utlizar muitos ifs aninhados
switch(codigoProduto){
    case 1:
        console.log("É a região Sul");
        break
    case 2:
        console.log("É a região Norte");
        break
    case 3:
        console.log("É a região Leste");
        break
    case 4:
        console.log("É a região Oeste");
        break
    case 5: case 6:
        console.log("É a região Nordeste");
        break
    case 7: case 8: case 9:
        console.log("É a região Sudeste");
        break
    default:
        if(codigoProduto >= 25 && codigoProduto <= 50){
            console.log("É a região Nordeste");
        }else if(codigoProduto >= 10 && codigoProduto <= 20){
            console.log("É a região Centro-Oeste");
        }else{
            console.log("O produto é importado");
        }
        break
}