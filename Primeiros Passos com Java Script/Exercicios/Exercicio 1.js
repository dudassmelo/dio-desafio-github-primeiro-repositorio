// Exercício 1 - Média de Notas

/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

let NotaAV1 = 5;
let NotaAV2 = 6;
let NotaAV3 = 7;

const Media = (NotaAV1 + NotaAV2 + NotaAV3) / 3;

if (Media < 5) {
    statusDoAluno = 'reprovado';
} else if (Media >= 5 && Media <= 7) {
    statusDoAluno = 'em recuperação';
} else {
    statusDoAluno = 'aprovado';
};


console.log('A média final do aluno é ' + Media.toFixed(2) + ' e ele está ' + statusDoAluno + '.');