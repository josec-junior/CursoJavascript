function gerarTabuada() {
    var num = document.getElementById("txtNum")
    var res = document.getElementById("resultado")
    if(num.value.length == 0) {
        alert("ERRO! insira um número!")
    } else {
        res.innerHTML = ""
        var n = Number(num.value)
        for(var i = 1; i <= 10; i++) {
            var multiplica = n * i
            res.innerHTML += `${n} x ${i} = ${multiplica} <br>`
        }
    }
}