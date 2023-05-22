var timer = setInterval(relogio, 1000)

function relogio(){

    var hora = new Date().getHours()
    var minutos = new Date().getMinutes()
    var segundos = new Date().getSeconds()

    if(hora < 10){
        hora = '0' + hora
    }
    if(minutos < 10){
        minutos = '0' + minutos
    }
    if(segundos < 10){
        segundos = '0'+segundos
    }
    
    document.getElementById('msg').innerText=`Agora são ${hora}:${minutos}:${segundos}`
    
    if(hora >= 18 || hora <= 4){
        document.body.style.background = 'rgb(45, 38, 38)'
        document.getElementById('img').src = 'noite.png'
        document.getElementById('turno').innerText = 'Tenha uma boa noite!'
    } else if(hora >= 12){
        document.body.style.background = 'rgb(228, 133, 70)'
        document.getElementById('img').src = 'tarde.png'
        document.getElementById('turno').innerText = 'Tenha uma boa tarde!'
    }
}
