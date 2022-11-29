function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('Verifique se o ano citado está certo!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) { // verificação do sexo
            genero = "Homem"
            if (idade >= 0 && idade <= 5) {
            // bebe 
            img.setAttribute('src' , 'bebe-homem.png')
            } else if (idade <= 10) {
                // criança
            img.setAttribute('src' , 'crianca-homem.png')
            } else if (idade <= 21){
                // jovem
            img.setAttribute('src' , 'jovem-homem.png')    
            } else if (idade <= 50) {
                // adulto
            img.setAttribute('src' , 'adulto-homem.png')      
            } else if (idade <= 102) {
                // idoso
            img.setAttribute('src' , 'idoso.png')  
            } else {
            img.setAttribute('src' , 'rip.png')
            }
        } else if (fsex[1].checked) { // verificação do sexo
            genero = "Mulher"
            if (idade >= 0 && idade <= 5) {
                // bebe 
                img.setAttribute('src' , 'bebe-mulher.png')
                } else if (idade <= 10) {
                    // criança
                img.setAttribute('src' , 'crianca-mulher.png')
                } else if (idade <= 21){
                    // jovem
                img.setAttribute('src' , 'jovem-mulher.png')    
                } else if (idade <= 50) {
                    // adulto
                img.setAttribute('src' , 'adulto-mulher.png')      
                } else if (idade <= 102) {
                    // idoso
                img.setAttribute('src' , 'idosa.png')  
                } else {
                img.setAttribute('src' , 'rip.png')
                }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}  