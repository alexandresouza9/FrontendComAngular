/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1 - Preço do combustível;
2 - gasto médio de combustível do carro po KM;
3 - Distancia em KM da Viagem;
*/


console.log("A viagem vai custar");

const precoCombustivel = 5.89;
const kmPorLitros = 12;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = precoCombustivel * litrosConsumidos;

console.log(litrosConsumidos);
console.log(valorGasto);





