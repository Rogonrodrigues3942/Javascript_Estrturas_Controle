console.log('\n*******\nEstrtura if - 1ª revisão\n*********')
function soBoaNoticia(nota){
    if (nota >= 7)
        console.log('Aprovado com nota: '+nota)
    else 
         console.log('Reprovado com nota: '+nota)
}

soBoaNoticia(8)
soBoaNoticia(6)

function seForVerdade(valor){
    if(valor)
        console.log('É verdade ...'+valor)
}

seForVerdade(10)
seForVerdade(null)
seForVerdade(0)
seForVerdade(-1)