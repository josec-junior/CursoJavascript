function calcularDesconto() {
    let res = window.document.querySelector("div#res")
    let produto = window.prompt("Qual é o produto que você está comprando?")
    let preco = window.prompt(`Qual é o preço de ${produto}?`)
    preco = Number(preco)
    let desconto = preco * 0.1
    let precoDescontado = preco - desconto
    res.innerHTML = `<strong> Calculando desconto de 10% para ${produto}</strong>
    <p>
        O preço original era ${preco.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}.
    </p>
    <p>
        Você acaba de ganhar ${desconto.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} de desconto (-10%).
    </p>
    <p>
        No fim, você vai pagar ${precoDescontado.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} no produto ${produto}.
    `
}