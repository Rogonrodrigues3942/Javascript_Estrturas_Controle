console.log('\n*** Obter número aleatório comandos: do ... while - revisão da aula 60 - 4ª versão ***\n')

function nrAleatorio(min, max){
    const nro = Math.random() * (max-min) + min
    return Math.floor(nro)
}

var obter = 0
let contador = 0

do{
    obter = nrAleatorio(1, 5)
    console.log(`Numero aleatório é = ${obter}.`)
    contador++
}
while(obter!= 1)
if(obter != 1)
    console.log('\nO progragra foi executado',contador,'vezes.')
else
    console.log('\nO progragra foi executado',contador,'vez.')