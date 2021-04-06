function getInteiroAleatorioEntre(min, max)
{
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0

do{
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`O número aleatório é: ${opcao}`)
}
while(opcao != -1)

console.log("Fim do programa!!!!!")