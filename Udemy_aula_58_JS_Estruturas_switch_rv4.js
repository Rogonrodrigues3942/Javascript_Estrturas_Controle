console.log('\n*************************\n4ª Revisão - aula 58 - switch\n*************************\n')
 
const resultado = function(nota){
    switch(Math.floor(nota)){
        case 9: case 10:
            console.log('Aprovado com louvor!!!! Nota: '+nota)
            break
        case 7: case 8: 
            console.log('Aprovado!! Continue evoluindo. Nota: '+nota)
            break
        case 4: case 5: case 6:
            console.log('Recuperação! Você tem a chance de avançar. Nota: '+nota)
            break
        case 0: case 1: case 2: case 3:
            console.log('Reprovado! Você não assimilou os conhecimentos!! Nota:'+nota)
            break
        default:
            console.log('Nota invalida!!')
    }
}
resultado(10)
resultado(-1)
resultado(11)
resultado(7)
resultado(5)
resultado(3)