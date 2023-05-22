var entrada = [1, 1, 6, 8, 9, 6, 7, 8, 1]

function limpar(entrada){
    let saida = []

    for(let i=0; i <= entrada.length -1; i++){
        if(saida.indexOf(entrada[i]) == -1){
            saida.push(entrada[i])
        }
    }
    return console.log(saida)
}

limpar(entrada)