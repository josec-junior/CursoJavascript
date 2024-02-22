var numeros = []

function adicionar() {
    let num = window.document.getElementById("txtnum")
    let res = window.document.getElementById("res")
    let valores = window.document.querySelector("select#selnum")
    num = Number(num.value)
    naLista = numeros.indexOf(num)
    if (num < 1 || num > 100 || num.length == 0 || naLista != -1) {
        window.alert("Valor inválido ou já encontrado na lista.")
    } else {
        res.innerHTML = ""
        numeros.push(num)
        let item = document.createElement("option")
        item.text = `Valor ${num} adicionado.`
        item.value = `n${num}`
        valores.appendChild(item)
    }
}

function somarValores() {
    let soma = 0
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i]
    }
    return soma
}

function maiorNumero() {
    let maior = 0
    for (let i = 0; i < numeros.length; i++) {
        if (i == 0) {
            maior = numeros[i]
        } else {
            if (maior < numeros[i]) {
                maior = numeros[i]
            }
        }
    }
    return maior
}

function menorNumero() {
    let menor = 0
    for (let i = 0; i < numeros.length; i++) {
        if (i == 0) {
            menor = numeros[i]
        } else {
            if (menor > numeros[i]) {
                menor = numeros[i]
            }
        }
    }
    return menor
}

function calcularMedia(soma) {
    let quantidade = numeros.length
    let media = soma / quantidade
    return media
}

function finalizar() {
    if (numeros.length == 0) {
        window.alert("Adicione valores antes de finalizar!")
    } else {
        let quantidade = numeros.length
        let menor = menorNumero()
        let maior = maiorNumero()
        let soma = somarValores()
        let media = calcularMedia(soma)
        let res = window.document.getElementById("res")
        res.innerHTML = `<p> Ao todo, temos ${quantidade} números cadastrados. </p>
        <p>
            O maior valor informado foi ${maior}.
        </p>
        <p>
            O menor valor informado foi ${menor}.
        </p>
        <p>
            Somando todos os valores, temos ${soma}.
        </p>
        <p>
            A média dos valores digitados é ${media}. 
        </p>`
    }
}