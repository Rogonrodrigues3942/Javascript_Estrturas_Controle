function obterInteiro(min, max)
{
    const valor = Math.random( ) * (max - min) + min

    return Math.floor(valor)
}

let opcao

while(opcao != -1)
{
    opcao = obterInteiro(-1, 20)
    console.log(`O número aleatório é: ${opcao}`)
}

console.log("Até a próxima!!!!")