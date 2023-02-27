function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var horas = data.toLocaleTimeString();
    
    if (horas > 0 && horas < 12) {
        msg.innerHTML = `Agora são ${horas} horas. Bom dia!`
        img.src = 'fotomanha.png'
        document.body.style.background = "#ffcca1"
    } else if (horas >= 12 && horas < 18) {
        msg.innerHTML = `Agora são ${horas} horas. Boa tarde!`
        img.src = 'fototarde.png'
        document.body.style.background = "#b93e19"
    } else {
        msg.innerHTML = `Agora são ${horas} horas. Boa noite!`
        img.src = 'fotonoite.png'
        document.body.style.background = "#131720"
    }
} 