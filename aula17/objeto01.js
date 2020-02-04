var amigo = {
    nome: "José",
    sexo: "M",
    peso: "63",

    engordar(peso) {
        console.log("Engordou")
        this.peso += peso
    }
}

console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)