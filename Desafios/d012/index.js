function analisarPreco() {
    let res = window.document.getElementById("res")
    let precoAnterior = Number(window.prompt("Qual era o preço anterior do produto?"))
    let precoAtual = Number(window.prompt("Qual é o preço atual do produto?"))
    let variacao = 0
    let percentual = 0
    res.innerHTML = `
        <h2> Analisando os valores informados </h2>
        <p>
            O produto custava ${precoAnterior.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} e agora custa ${precoAtual.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}.
        </p>
    `
    if (precoAtual > precoAnterior) {
        variacao = precoAtual - precoAnterior
        percentual = (variacao / precoAnterior) * 100
        res.innerHTML += `
            <p>
                Hoje o produto está mais caro.
            </p>
            <p>
                O preço subiu ${variacao.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} em relação ao preço anterior.
            </p>
            <p>
                Uma variação de ${percentual.toFixed(1)}% pra cima.
            </p>
        `
    } else if (precoAtual < precoAnterior) {
        variacao = precoAnterior - precoAtual
        percentual = (variacao / precoAtual) * 100
        res.innerHTML += `
            <p>
                Hoje o produto está mais barato.
            </p>
            <p>
                O preço caiu ${variacao.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} em relação ao preço anterior.
            </p>
            <p>
                Uma variação de ${percentual.toFixed(1)}% pra baixo.
            </p>
        `
    } else {
        res.innerHTML += `
            <p>
                Não houve variação no preço do produto.
            </p>
        `
    }
}