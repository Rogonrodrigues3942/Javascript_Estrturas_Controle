let cont = 1

while(cont <= 10)
{
    console.log(cont)
    cont++
}

console.log('Fim do while!!\n')

for( cont = 1; cont <= 10; cont++)
    console.log('Valor = ', cont)

console.log("Fim da malha for!!\n")

const notas = [10.0, 6.7, 5.5, 3,7, 9.1]
for(cont = 0; cont < notas.length; cont++)
    console.log(`notas = ${notas[cont]}`)