const resultado = function (nota)
{
    switch(Math.floor(nota))
    {
        default:
            console.log('nota invalida!!!')
            break
        case 10: case 9:
            console.log('!!!Quandro de Honra!!')
            break
        case 8: case 7:
            console.log('!!Aprovado!!')
            break
        case 6: case 5: case 4:
            console.log('Recuperação!!')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado!')
    }
}

resultado(11)
resultado(10)
resultado(2)
resultado(7.7)
resultado(-2)

console.log('\nFim da 1ª versão de revisão de switch!!!')