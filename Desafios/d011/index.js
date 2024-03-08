function verificarAnoBissexto() {
    let ano = window.prompt("Qual é o ano que você quer verificar?")
    let res = window.document.querySelector("div#res")
    res.innerHTML = `<h2> Analisando o ano de ${ano}... </h2>`
    if ((ano % 4 == 0 && ano % 100 != 0) || (ano % 400 == 0)) {
        res.innerHTML += `
            <p>
                O ano de ${ano} <span id = 'true'>É BISSEXTO</span> &#x2705;.
            </p>
        `
    } else {
        res.innerHTML += `
            <p>
                O ano de ${ano} <span id = 'false'>NÃO É BISSEXTO</span> &#x274C;.
            </p>
        `
    }
}