console.log('\n*** Obter número aleatório comandos: do ... while - revisão da aula 60 - 3ª versão')

function aleatorio(min, max)
{
    const numb = Math.random() * (max-min) +min

    return Math.floor(numb)
}

let opcao = -1  /**A variável opcao deve ser inicializada para iniciar o loop com o comando do{...}while */
let vezes = 0

do{
    vezes++
    opcao = aleatorio(-1,20)
    console.log(vezes,`º elemento, número aleatório: ${opcao}`)
    //vezes++

}
while( opcao != -1)

console.log('\nO loop foi executado: ',vezes,'vezes.\nFim do programa!!')