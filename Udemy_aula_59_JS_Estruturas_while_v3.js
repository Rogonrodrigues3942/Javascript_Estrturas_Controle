console.log('\n*** Obter número aleatório comando: while - revisão da aula 59 - 3ª versão')

function aletorio(min, max)
{
    const numb = Math.random( ) * (max- min) + min
    return Math.floor(numb)
}

let cont = 0
let opcao 

while(opcao != -1)
{

    cont++
    opcao = aletorio(-1, 10)
    console.log(cont,`º numero aleatório = ${opcao}`)
}

console.log('\nO loop foi executado: ',cont,'vezes.\nFim do programa!!')