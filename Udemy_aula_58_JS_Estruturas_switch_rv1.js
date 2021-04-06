console.log('\n*************************\n1ªRevisão - aula 58 - switch\n*************************\n')

const resultado = function(nota){

    switch(Math.floor(nota)){

        default:
            console.log('Nota Invalida!!!')
                break
        case 10: case 9:
            console.log('Quadro de honra!!! Nosta: ',nota)
            break
        case 7: case 8:
            console.log('Aprovado!!! Nota: ',nota)
            break
        case 4: case 5: case 6:
            console.log('Recuperação!! Nota:',nota)
            break 
        case 0: case 1: case 2: case 3:
            console.log('Reprovado! Nota:', nota)
    }/**Fima da switch */
}/**Fim da fuction resultado */

resultado(1)
resultado(11)
resultado(4)
resultado(7)