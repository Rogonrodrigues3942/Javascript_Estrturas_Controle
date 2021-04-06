console.log('\n*************************\nRevisão - aula 57 - if/else - 4ª revisão\n*************************\n')

Number.prototype.resultado = function(min, max){
    return this >= min && this <= max
}

const mostrar = function(nota){

    if(nota.resultado(9,10))
        console.log('Aprovado com louvor!!! Nota:',nota)
        else if(nota.resultado(7, 8.99))
            console.log('Aprovado! Nota:', nota)
            else  if(nota.resultado(4, 6.99))
                console.log('Recuperação!! Nota:',nota)
                else if(nota.resultado(0, 3.99))
                    console.log('Reprovado! Nota:',nota)
                        else
                            console.log("Nota invalida!")
}

mostrar(5)
mostrar(10)
mostrar(3)
mostrar(11)