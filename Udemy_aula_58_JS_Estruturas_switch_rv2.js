console.log('\n*************************\n2ªRevisão - 30/05/2020 - aula 58 - switch\n*************************\n')
function avaliacao(nota){
    switch(Math.floor(nota)){
        case 10: case 9:
            console.log('Aprovado com Louvor!!!! - Nota:', nota)
            break
        case 7: case 8:
            console.group('Aprovado!!! - Nota:', nota)
            break
        case 4: case 5: case 6:
            console.log('Recuperação!! - Nota:',nota)
            break
        case 0: case 1: case 2: case 3:
            console.log('Reprovado! - Nota:',nota)
            break
        default:
            console.log('Nota invalida!! Fora do range, não existe a nota: ', nota)
    }
}/**Fim da função avaliacao */

avaliacao(10)
avaliacao(7)
avaliacao(0)
avaliacao(11)
avaliacao(-1)