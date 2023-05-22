function contar(){
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    

    if(inicio == '' || fim == '' || passo == '' || Number(passo) > Number(inicio)){
        document.getElementById('resultado').innerText = 'Verifique o preenchimento de todos os campos'

    }else if(Number(inicio)>Number(fim) || Number(passo) < 0){
        document.getElementById('resultado').innerText = 'Contando:'

        if(Number(passo) < 0){
            p = -(Number(passo))
        }
        for(c = Number(inicio); c >= Number(fim); c-=p){
            if(c-p<Number(fim)){
                document.getElementById('contagem').innerHTML += `${c} \u{1F3C1}`
            }else{
                document.getElementById('contagem').innerHTML += `${c} \u{1F449}`
            }
        }
    
    }else{
        document.getElementById('resultado').innerText = 'Contando:'

        for(c = Number(inicio); c <= Number(fim); c+=Number(passo)){
            
            if(c+Number(passo)>Number(fim)){
                document.getElementById('contagem').innerHTML += `${c} \u{1F3C1}`
            }else{
                document.getElementById('contagem').innerHTML += `${c} \u{1F449}`
            }
        }
    }
}