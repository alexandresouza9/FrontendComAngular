/* 1) Escreva uma função que mostre o seu nome no terminal
   2) Escreva uma função que verifica a idade
*/

function escreveMeuNome(nome){
console.log('Meu nome é: ' + nome);

}
escreveMeuNome('Alexandre Souza');

function verificarIdade(idade){
    if (idade >= 18){
        console.log('Maior de iade');
    } else {
        console.log('Menor de idade');
    }
}
verificarIdade(18);


