console.log('\n*************************\n3ªRevisão - aula 58 - switch\n*************************\n')

const resultado = function(nota){
    switch(Math.floor(nota)){
        case 10: case 9:
            console.log('Aprovado com louvor. Nota: '+nota)
            break
        case 7: case 8:
            console.log('Aprovado!! Nota: '+nota)
            break
        case 4: case 5: case 6:
            console.log("Recuperação, cuidado!!! Nota:"+nota)
            break
        case 0: case 1: case 2: case 3:
            console.log('Reprovado. Nota: '+nota)
            break
        default:
            console.log('Nota invalida!!')
    }
}

resultado(11)
resultado(4)
resultado(2)
resultado(9)