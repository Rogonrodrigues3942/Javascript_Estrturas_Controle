
console.log('\n*** Obter número aleatório comandos: do ... while - revisão da aula 60 - 5ª versão ***\n')
function nrAleatorio(min, max){
    const nro = Math.random() * (max -min) + min
    return Math.floor(nro)
}

let cont = 0
let Obter

do{
        console.log('Numero =', obter = nrAleatorio(1,5))
        cont++
}
while(obter != 1)

if(cont == 1)
    console.log('\nO programa foi executado',cont,'vez.')
else
    console.log('\nO programa foi executado',cont,'vezes.')
