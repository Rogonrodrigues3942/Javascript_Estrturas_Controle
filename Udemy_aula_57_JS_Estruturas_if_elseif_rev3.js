console.log('\n*************************\nRevisão - aula 57 - if/else - 3ª revisão\n*************************\n')
Number.prototype.manipular = function(min, max){
    return this >= min && this <= max
}

const imprimir = function(nota){
    if(nota.manipular(9, 10))
        console.log('Aprovado com Louvor!!! Nota: ',nota)
        else if(nota.manipular(7, 8.99))
            console.log('Aprovado!! Nota: ',nota)
            else if(nota.manipular(4, 6.99))
                console.log('Recuperação, cuidado! Nota: ', nota)
                else if(nota.manipular(0, 3.99))
                console.log('Reprovado! Nota: ', nota)
                    else
                        console.log('Nota invalida!!!')
}

imprimir(10)
imprimir(11)
imprimir(7)
imprimir(3)
imprimir(5)