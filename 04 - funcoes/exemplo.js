// Exemplos de funções
function incrementarJuros(valor, percentualJuros){
    const valorDeAcrecimos = (percentualJuros / 100) * valor;
    return valor * valorDeAcrecimos;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));