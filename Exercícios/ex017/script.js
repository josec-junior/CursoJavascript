function contar() {
    let txtini = window.document.getElementById("txtini")
    let txtfim = window.document.getElementById("txtfim")
    let txtpasso = window.document.getElementById("txtpasso")
    let res = window.document.querySelector("div#res")
    
    if (txtini.value.length == 0 || txtfim.value.length == 0 || txtpasso.value.length == 0) {
        res.innerHTML = "Impossível contar! Faltam dados!"
    } else {
        let ini = Number(txtini.value)
        let fim = Number(txtfim.value)
        let passo = Number(txtpasso.value)

        if (passo == 0) {
            window.alert("Passo inválido! Considerando PASSO 1")
            passo = 1
        }
        res.innerHTML = "Contando: <br>"

        if (ini < fim) {
            for (let c = ini; c <= fim; c += passo) {
                res.innerHTML += `${c} &#x1F449;`
            }
        } else {
            for (let c = ini; fim <= c; c -= passo) {
                res.innerHTML += `${c} &#x1F449;`
            }
        }
        res.innerHTML += "&#x1F3C1;"
    }
}