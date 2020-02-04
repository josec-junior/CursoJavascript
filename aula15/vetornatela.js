var valores = [8, 1, 7, 4, 2, 9]
/* Imprimindo um vetor usando o for
for(var pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

/* Imprimindo um vetor usando o for in*/
for(var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}