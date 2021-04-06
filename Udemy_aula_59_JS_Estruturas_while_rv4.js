console.log('\n***********\nEstrutura de repeticao - 4ª revisão - 30/05/2020\n***********\n')
function obterNumero(min, max){

    const numero = Math.random() * (max - min) + min
    return Math.floor(numero)
}

let verificador
let contador = 0;

while(verificador != (-1)){
    verificador = obterNumero(-1, 10)
    console.log(`Numero aleatório é = ${verificador}.`)
    contador++
    
}

if(contador == 1)
    console.log('\nO programa foi executado',contador,'vez')
else
    console.log('\nO programa foi executado',contador,'vezes')