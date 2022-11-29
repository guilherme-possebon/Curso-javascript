function gerartabuada() {
    let recebenumero = document.getElementById('tabu')
    let recebenumero2 = document.getElementById('tabu2')
    let tab = document.getElementById('seltab')   
    if (recebenumero.value.length == 0) {
        alert ('Por favor, digite um numero')
    } else { 
        let n = Number(recebenumero.value)    
        let c = 1
        let c2 = Number(recebenumero2.value)
        tab.innerHTML = ''
        while (c <= c2) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}