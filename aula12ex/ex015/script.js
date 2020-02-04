function verificar() {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNascimento = document.getElementById("txtAnoNascimento")
    var res = document.querySelector("div#resultado")
    if (anoNascimento.value <= 0 || anoNascimento.value > anoAtual) {
        window.alert("ERRO! Verifique os dados e tente novamente!")
    } else {
        var sexo = document.getElementsByName("radiosex")
        var idade = anoAtual - Number(anoNascimento.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (sexo[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute("src", "foto-bebe-m.png")
            } else if (idade < 21) {
                // Jovem
                img.setAttribute("src", "foto-jovem-m.png")
            } else if (idade < 50) {
                // Adulto
                img.setAttribute("src", "foto-adulto-m.png")
            } else {
                // Idoso
                img.setAttribute("src", "foto-idoso-m.png")
            }
        } else {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute("src", "foto-bebe-f.png")
            } else if (idade < 21) {
                // Jovem
                img.setAttribute("src", "foto-jovem-f.png")
            } else if (idade < 50) {
                // Adulto
                img.setAttribute("src", "foto-adulto-f.png")
            } else {
                // Idoso
                img.setAttribute("src", "foto-idoso-f.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}