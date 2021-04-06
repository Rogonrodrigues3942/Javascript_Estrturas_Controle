console.log()

function soBoaNoticia(nota)
{
    if (nota >= 7)
        console.log('Aprovado ...' + nota)
}

soBoaNoticia(9)
soBoaNoticia(8.2)

function seForVerdadeEuFalo(valor)
{
    if(valor)
        console.log('É verdade ...' + valor)
}

seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(true)
seForVerdadeEuFalo(' ')



