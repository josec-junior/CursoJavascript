function verificarSituacao() {
    let res = window.document.querySelector("div#res")
    let nome = window.prompt("Qual é o nome do aluno?")
    let nota1 = Number(window.prompt(`Primeira nota de ${nome}:`))
    let nota2 = Number(window.prompt(`Segunda nota de ${nome}:`))
    let media = (nota1 + nota2) / 2
    res.innerHTML = `
        <h2> Analisando a situação de ${nome} </h2>
        <p>
            Com as notas ${nota1} e ${nota2}, a <strong>média é ${media}</strong>.
        </p>
    `
    if (media < 3) {
        res.innerHTML += `
        <p>
            Com média abaixo de 3.0, o aluno está <span id = 'reprovado'>REPROVADO</span>.
        </p>
        `
    } else if (media <= 6) {
        res.innerHTML += `
        <p>
            Com média entre 3.0 e 6.0, o aluno está em <span id = 'recuperacao'>RECUPERAÇÃO</span>.
        </p>
        `
    } else {
        res.innerHTML += `
        <p>
            Com média acima de 6.0, o aluno está <span id = 'aprovado'>APROVADO</span>.
        </p>
        `
    }
}