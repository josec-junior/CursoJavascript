function gerarTabuada() {
    let txtnum = window.document.getElementById("txtnum")
    let tab = window.document.querySelector("select#seltab")
    if (txtnum.value.length == 0) {
        window.alert("Erro! Por favor, digite um número")
    } else {
        let num = Number(txtnum.value)
        tab.innerHTML = ""
        for (let i = 1; i <= 10; i++) {
            let item = document.createElement("option")
            item.text = `${num} x ${i} = ${num * i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}