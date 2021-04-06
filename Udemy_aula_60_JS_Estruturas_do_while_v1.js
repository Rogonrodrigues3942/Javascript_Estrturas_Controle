function getInteiroAleatorioEntre(min, max)
{
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
let vezes = 0
console.log()

do{
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`O número aleatório é: ${opcao}`)
    ++vezes
}
while(opcao != -1)

console.log('\nQtas vezes executou:', vezes)
console.log("Fim do programa!!!!!")