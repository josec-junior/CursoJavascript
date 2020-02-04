function parimpar(n) {
    if(n % 2 == 0) {
        return "Par"
    } else {
        return "Ímpar"
    }
}

var n = 3
var res = parimpar(n)
console.log(`O número ${n} é ${res}`)