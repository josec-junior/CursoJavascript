function reajustarSalario() {
    let nome = window.prompt("Qual é o nome do funcionário?")
    let salario = Number(window.prompt(`Qual é o salário de ${nome}?`))
    let porcentagem = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    let aumento = salario * (porcentagem / 100)
    let salarioReajustado = salario + aumento
    let resultado = window.document.querySelector("div#res")
    resultado.innerHTML = `
        <h2> ${nome} recebeu um aumento salarial! </h2>
        <p>
            O salário atual era ${salario.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}.
        </p>
        <p>
            Com um aumento de ${porcentagem}%, o salário vai aumentar ${aumento.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})} no próximo mês.
        </p>
        <p>
            E a partir daí, ${nome} vai passar a ganhar ${salarioReajustado.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}.
        </p>
    `
}