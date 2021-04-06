console.log('\n*************************\nRevisão - aula 57 - if/else - 1ª revisão\n*************************\n')
Number.prototype.entre = function(min, max){
    return this >= min && this <= max 
}

const imprimir = function(nota){
    if(nota.entre(9, 10))
        console.log('Quadro de honra - nota: ', nota)
        else if(nota.entre(7, 8.99))
            console.log('Aprovado!! Nota: ', nota)
            else if(nota.entre(4, 6.99))
                console.log('Recuperação. Nota: ', nota)
                else if(nota. entre(0, 3.99))
                    console.log('Reprovado. Nota: ',nota)
                    else
                        console.log('Nota invalida!!!!')
}

imprimir(8)
imprimir(1)
imprimir(6)
imprimir(10)
imprimir(11)