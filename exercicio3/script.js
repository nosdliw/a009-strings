//Crie a const para a frase aqui
const Jorge = ("Jorge tem uma casa verde e com portão azul, com os dizeres:")
 
const boasVindas = (" BOAS VINDAS, mas não deixe o gato sair")

const fraseConcatenada = `${Jorge+boasVindas}`

console.log (fraseConcatenada)
const caixaAlta = boasVindas.toUpperCase()


const fraseConcatenada2 = `${Jorge.replace("verde", "rosa").replace("azul", "laranja")}${caixaAlta}`
console.log (fraseConcatenada2)