var num = document.getElementById("txtN")
var listaValores = document.getElementById("listaNumeros")
var res = document.querySelector("div#resultado")
var valores = []

function ehNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function estaNaLista(num, valores) {
    if(valores.indexOf(Number(num)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(ehNumero(num.value) && !estaNaLista(num.value, valores)) {
        valores.push(Number(num.value))
        listaValores.innerHTML += `<option> Valor ${num.value} adicionado. </option>`
    } else {
        alert("O valor é inválido ou já está na lista!")
    }
    num.value = ""
    num.focus()
    res.innerHTML = ""
}

function finalizar() {
    if(valores.length == 0) {
        alert("Adicione valores antes de finalizar")
    } else {
        total = valores.length
        res.innerHTML = ""
        res.innerHTML += `<p> Foram cadastrados ${total} números </p>`
        res.innerHTML += `<p> O maior número é ${maiorNumero(valores)} </p>`
        res.innerHTML += `<p> O menor número é ${menorNumero(valores)} </p>`
        res.innerHTML += `<p> A soma dos números é ${somarNumeros(valores)} </p>`
        res.innerHTML += `<p> A média dos números é ${somarNumeros(valores)/total} </p>`
    }
}

function maiorNumero(valores) {
    var maior = valores[0]
    for(var i = 0; i < valores.length; i++) {
        if(valores[i] > maior) {
            maior = valores[i]
        }
    }
    return maior
}

function menorNumero(valores) {
    var menor = valores[0]
    for(var i = 0; i < valores.length; i++) {
        if(valores[i] < menor) {
            menor = valores[i]
        }
    }
    return menor
}

function somarNumeros(valores) {
    var somador = 0
    for(var i = 0; i < valores.length; i++) {
        somador += valores[i]
    }
    return somador
}
