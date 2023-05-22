var entrada = [7,6,9,5,4,2,3]
var pares = []
var impares = []

for(i=0; i <= entrada.length-1; i++){
    if(entrada[i]%2==0){
        pares.push(entrada[i])
    }else{
        impares.push(entrada[i])
    }
}
console.log(`Pares: ${pares} | Impares ${impares}`)
