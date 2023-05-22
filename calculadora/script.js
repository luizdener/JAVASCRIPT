function digitar(número){
    var número = número
    var tela = document.getElementById('tela').innerHTML
    if(tela == 0){
        document.getElementById('tela').innerHTML = número
    }else{
        document.getElementById('tela').innerHTML += número
    }
}
function apagar(){
    var tela = String(document.getElementById('tela').innerHTML)
    if(tela.length == 1){
        document.getElementById('tela').innerHTML = 0
    }else if(tela.length){
        document.getElementById('tela').innerHTML = tela.substring(0, tela.length -1)
    }
}
function deletar(){
    document.getElementById('tela').innerHTML = '0'
}
function deleteAll(){
    document.getElementById('tela').innerHTML = '0'
    document.getElementById('tela2').innerHTML = '<p></p>'
}
function operar(operador){
    var tela = document.getElementById('tela').innerHTML

    número1 = Number(tela)
    var calculo = 0
    document.getElementById('tela2').innerHTML = calculo + `${operador}`

    
}