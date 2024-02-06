function converter() {
    var metros = window.prompt("Digite uma distância em metros (m)")
    console.log(metros)
    var res = window.document.getElementById("res")
    metros = Number(metros)
    quilometros = metros / 1000
    hectometros = metros / 100
    decametros = metros / 10
    decimetros = metros * 10
    centimetros = metros * 100
    milimetros = metros * 1000
    res.innerHTML = `<strong> A distância de ${metros} metros, corresponde a...</strong> <br>`
    res.innerHTML += `${quilometros} quilômetros (Km) <br> ${hectometros} hectômetros (Hm) <br> ${decametros} decâmetros (Dam) <br> ${decimetros} decímetros (dm) <br> ${centimetros} centímetros (cm) <br> ${milimetros} milímetros (mm)`
}