/*
1) Faça um algoritimo que dada as 3 notas tiradas por um aluno em um semestre de faculdade calcule e imprima a sua média e classificação conforme a tabela a baixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7 recuperação;
- Média acima de 7, passou de semestre;
*/

const nota1 = 8;
const nota2 = 6;
const nota3 = 5;

const media = (nota1 + nota2 + nota3) / 3;

if (media < 5){
    console.log('Reprovado');
}else if (media >= 5 && media <= 7){
    console.log('Recuperação');
}else{
    console.log('Passou de semestre');
}


