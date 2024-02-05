function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("txtano")
    var res = window.document.querySelector("div#res")
    if (fano.value <= 0 || fano.value > ano) {
        window.alert("[ERRO!] Verifique os dados e tente novamente.")
    } else {
        var fsexo = window.document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsexo[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "img/homem-bebe.png")
            } else if (idade < 21) {
                img.setAttribute("src", "img/homem-jovem.png")
            } else if (idade < 50) {
                img.setAttribute("src", "img/homem-adulto.png")
            } else {
                img.setAttribute("src", "img/homem-idoso.png")
            }
        } else {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                img.setAttribute("src", "img/mulher-bebe.png")
            } else if (idade < 21) {
                img.setAttribute("src", "img/mulher-jovem.png")
            } else if (idade < 50) {
                img.setAttribute("src", "img/mulher-adulta.png")
            } else {
                img.setAttribute("src", "img/mulher-idosa.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}