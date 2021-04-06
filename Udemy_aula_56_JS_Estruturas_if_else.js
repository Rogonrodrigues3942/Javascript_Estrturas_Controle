console.log('\nEstrtura if ... else\n')

const imprimirResultado = function(nota)
{
    if (nota >= 7)
        console.log("Aprovado! Com a nota: "+nota)
    else
        console.log('Reprovado! Com a nota: '+nota)
}

imprimirResultado(8)
imprimirResultado(3)