var anoAtual = new Date().getFullYear()
var mêsAtual = new Date().getMonth() + 1
var diaAtual = new Date().getDate()

function verificar(){
    var anoNascimento = String(document.getElementById('nascimento').value).slice(0,4)
    var mêsNascimento = String(document.getElementById('nascimento').value).slice(5,7)
    var diaNascimento = String(document.getElementById('nascimento').value).slice(8,12)
    var idadeBruta = Number(anoAtual) - Number(anoNascimento)
    var sexo = document.getElementsByName('sexo')

    if(anoNascimento.length == 0 || Number(anoNascimento) > anoAtual){
        alert('Por favor, preencha corretamente o campo: Ano de Nascimento')
    }else if(mêsNascimento.length == 0){
        alert('Por favor, preencha corretamente o campo: Ano de Nascimento')
    }else if(diaNascimento.length == 0){
        alert('Por favor, preencha corretamente o campo: Ano de Nascimento')
    }else{
    
        if(mêsAtual > Number(mêsNascimento)){
            var idadeFinal = idadeBruta
        }else if(mêsAtual < Number(mêsNascimento)){
            var idadeFinal = idadeBruta - 1
        }else if(mêsAtual == Number(mêsNascimento) && diaAtual < Number(diaNascimento)){
            var idadeFinal = idadeBruta - 1
        }else{
            var idadeFinal = idadeBruta
        }

        if(sexo[0].checked){
            if(idadeFinal >= 0 && idadeFinal < 10){
                sexo = 'um garoto'
                var foto = 'bebe.masc.png'
            }else if(idadeFinal < 21){
                sexo = 'um jovem'
                foto = 'jovem.masc.png'
            }else if(idadeFinal < 50){
                sexo = 'um homem'
                foto = 'adulto.masc.png'
            }else{
                sexo = 'um senhor'
                foto = 'idoso.masc.png'
            }
        }else{
            if(idadeFinal >= 0 && idadeFinal < 10){
                sexo = 'uma garota'
                foto = 'bebe.fem.png'
            }else if(idadeFinal < 21){
                sexo = 'uma jovem'
                foto = 'jovem.fem.png'
            }else if(idadeFinal < 50){
                sexo = 'uma mulher'
                foto = 'adulto.fem.png'
            }else{
                sexo = 'uma senhora'
                foto = 'idoso.fem.png'
            }
        }
    
        document.getElementById('msg').innerText = `Você é ${sexo} de ${idadeFinal} anos`
        document.getElementById('img').src = foto
    }//fim do else para verificação de campos vazios   
}//fim da function