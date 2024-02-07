var cotacao

function converter() {
    let res = window.document.getElementById("res")
    let reais = window.prompt("Quantos R$ você tem na carteira?")
    let resultado = Number(reais) / cotacao
    res.innerHTML = `Você irá conseguir comprar ${resultado.toFixed(2)} US$`
}

function gerarCotacao() {
    cotacao = window.prompt("Antes de mais nada. Quanto está a cotação do dólar agora?")
    cotacao = Number(cotacao)
}