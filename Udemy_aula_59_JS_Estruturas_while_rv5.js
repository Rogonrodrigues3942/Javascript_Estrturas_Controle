console.log('\n***********\nEstrutura de repeticao - 5ª revisão - 30/05/2020\n***********\n')

function aleatorio(min, max){
    const numero = Math.random() * (max - min) + min
    return Math.floor(numero)
}

let gerador
let controle = 0

while(gerador != -1){
    gerador = aleatorio(-1, 5)
    console.log(`Número aletorio é = ${gerador}.`)
    controle++
}

if(controle != 1)
    console.log('\nO programa foi executado',controle,'vezes.')
else
    console.log('\nO programa foi executado',controle,'vez!')