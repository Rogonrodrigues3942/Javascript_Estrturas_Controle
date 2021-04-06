function obterNUmeroAletorio(min, max)
{
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = 0
let vezes = 0

do{
    opcao = obterNUmeroAletorio(-1,10)
    console.log(`O número obtido é: ${opcao}`)
    vezes++
}
while(opcao != -1)
console.log('\nO programa foi executado:', vezes,"vezes")
console.log('Fim do programa!!!')
