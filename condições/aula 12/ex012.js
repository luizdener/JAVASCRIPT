

var hora = new Date().getHours()
var minutos = new Date().getMinutes()

console.log(`Agora são exatamente ${hora}:${minutos}. ${mensagem(hora)}`)

function mensagem(hora){
    if(hora < 12){
       var mensagem = 'Tenha um bom dia!'
    } else if(hora <= 18){
        var mensagem = 'Tenha uma boa tarde!'
    }else{
        var mensagem = 'Tenha uma boa noite'
    }
    return mensagem
}