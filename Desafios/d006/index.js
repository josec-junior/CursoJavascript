function converter() {
    var celsius = window.prompt("Digite uma temperatura em °C (Celsius)")
    celsius = Number(celsius)
    var res = window.document.querySelector("div#res")
    kelvin = celsius + 273.15
    fahrenheit = celsius * 1.8 + 32
    res.innerHTML = `<strong> A temperatura de ${celsius}°C, corresponde a...</strong> <br> <br>`
    res.innerHTML += `${kelvin.toFixed(2)}°K (Kelvin) <br> <br> ${fahrenheit.toFixed(2)}°F (Fahrenheit)`
}