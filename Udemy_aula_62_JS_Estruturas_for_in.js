const notas = [1.7, 10.3, 7.5, 8.9, 9.4, 4.4]

for(i in notas)
    console.log(i, notas[i])

const pessoa = {
    nome: 'Ana',
    sobrenome: "Gomes",
    idade: 20,
    peso: 56
}

for (atributo in pessoa)
    console.log(`${atributo} = ${pessoa[atributo]}`)
