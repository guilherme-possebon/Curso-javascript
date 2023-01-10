    let num = document.querySelector('#fnum')
    let lista = document.querySelector('#flista')
    let res = document.querySelector('#res')
    let valores = []
    let lip = document.querySelector('#clear')

    function IsNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) { // aqui vai verificar se vai estar entre os numeros selecionados
        return true
    } else {
        return false
    }
    }

    function Inlista(n, l) {
    if(l.indexOf(Number(n)) != -1) { // aqui vai verificar se o l, que é o valores vai estar vazio, por isso do -1
        return true
    } else {
        return false
    }
    }
    function adicionar() {
    if(IsNumero(num.value) && !Inlista(num.value, valores)) { // essa "!" que tem, quer dizer Não
        valores.push(Number(num.value)) // aqui vai adicionar o numero para a array
        let item = document.createElement('option') // aqui vai criar uma option
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item) 
        res.innerHTML = '' // aqui vai limpar oq ta escrito para poder adicionar mais
    } else {
        alert('Valor invalido ou já colocado na lista!')
    }
    num.value = ''
    num.focus()
    }

function finalizar() {
    if(valores.length == 0) {
        alert("Adicione valores antes de usar")
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) { // na posição em valores, eu vou verificar
            soma += valores[pos]
            if (valores[pos] > maior)  // se valores na posição "pos" for maior que o maior
                maior = valores[pos] // o maior valor passa a ser valores[pos]
            if (valores[pos] < menor)  // se valores na posição "pos" for menor que o menor
            menor = valores[pos] // o menor valor passa a ser valores[pos]
        }
        media = soma / tot
        res.innerHTML = '' // aqui vai limpar
        res.innerHTML += `<p>Ao todo, temos ${tot} numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média dentre todos os numeros é ${media}</p>`
    }
}