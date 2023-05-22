function gerar(){
    var numero = document.getElementById('numero').value
    var seleção = document.getElementById('seleção')

    if(numero == ''){
        alert('Por favor digite um número!')
    }else{
        numero = Number(numero)
        seleção.innerHTML = ''
        for(c=1; c<=10; c++){
            var item = document.createElement('option')
            item.text = `${numero} x ${c} = ${numero*c}`
            item.value = `seleção${c}`
            seleção.appendChild(item)
        }
    }
    
}

const numeroinput = document.getElementById('numero')

numeroinput.addEventListener("keypress", function(e){
    if(!checkChar(e)){
        e.preventDefault()
    }
})
function checkChar(e){
    const char = String.fromCharCode(e.keyCode)
    const pattern = '[0-9]'
    if(char.match(pattern)){
        console.log(char)
        return true
    }
}