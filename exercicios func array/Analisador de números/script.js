var resultado = document.getElementById('resultado')
var array = []
function adicionar(){
    var numero = Number(document.getElementById('numero').value)
    var seleção = document.getElementById('seleção')
    var item = document.createElement('option')
    
    if(array.indexOf(numero)!=-1){
        alert('Valor já encontrado na lista! Tente adicionar um valor diferente!')
    }else if(numero>100 || numero<1){
        alert('Valor fora da faixa indicada! Por favor, insira apenas valores entre 1 e 100')
    }else{
        array.push(numero)
        item.text = `Valor ${numero} adicionado`
        seleção.appendChild(item)
    }
}
function finalizar(){
    if(array.length == 0){
        alert('Por favor adicione valores a lista!')
    }else{
        var total = array.length
        var maior = array[0]
        var menor = array[0]
        var soma = 0

        for(var pos in array){
            soma += array[pos]
            if(array[pos] > maior){
                maior = array[pos]
            }
            if(array[pos] < menor){
                menor = array[pos]
            }
        }

        var media = soma / array.length

        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Total de números cadastrados: ${total}</p>`
        resultado.innerHTML += `<p>Maior valor cadastrado: ${maior}</p>`
        resultado.innerHTML += `<p>Menor valor cadastrado: ${menor}</p>`
        resultado.innerHTML += `<p>Soma de todos os valores cadastrados: ${soma}</p>`
        resultado.innerHTML += `<p>Média dos valores cadastrados: ${media}</p>`
         
    }
}







