function Adicionar(){
    var tarefa = document.getElementById('tarefa').value
    var lista = document.getElementById('lista')
    var item = document.createElement('p')
    
    var texto = document.createTextNode(tarefa)
    item.appendChild(texto)

    lista.appendChild(item)
}