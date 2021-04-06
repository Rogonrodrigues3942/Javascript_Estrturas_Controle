function numeroAleatorio(min, max)
{
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao
let vezes = 0

while(opcao != -1)
{
    opcao = numeroAleatorio(-1, 10)
    console.log(`Número Aleatório é: ${opcao}`)
    vezes++
}

console.log('O loop foi executado', vezes,'vezes')
console.log('Fim do programa - 2ª versão!!!')