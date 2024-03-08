function calcularBhaskara() {
    let res = window.document.querySelector("div#res")
    let a = window.prompt("Qual é o valor de a?")
    let b = window.prompt("Qual é o valor de b?")
    let c = window.prompt("Qual é o valor de c?")
    let delta = b * b - 4 * a * c
    res.innerHTML = `
        <h2> Resolvendo Bhaskara </h2>
        <p>
            A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong>.
        </p>
        <p>
            O cálculo realizado será <strong>&Delta; = ${b}² - 4 * ${a} * ${c}</strong>.
        </p>
        <p>
            O valor calculado foi <strong>&Delta; = ${delta}</strong>.
        </p>
    `
}