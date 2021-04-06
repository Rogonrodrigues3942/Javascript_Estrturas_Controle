console.log('\n*************************\nRevisão - aula 57 - if/else - 2ª revisão\n*************************\n')
Number.prototype.entre = function(min, max){
    return this >= min && this <= max 
}

const resultado = function(nota)
{
    if(nota.entre(9, 10))
        console.log('Quandro de honra!!!! Nota: ', nota)
        else if(nota.entre(7, 8.99))
            console.log('Aprovado!!! Nota: ',nota)
            else if(nota.entre(4, 6.99))
                console.log('Recuperação!! Nota: ',nota)
                else if(nota.entre(0, 3.99))
                    console.log("Reprovado! Nota: ",nota)
                    else
                    console.log('Nota invalida!!')

}

resultado(10)
resultado(0)
resultado(11)

