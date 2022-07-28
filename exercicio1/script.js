const nome = prompt("Qual o seu nome?")
const comida1 = prompt("Cite uma comida que você mais gosta.") 
const comida2 = prompt("Cite mais uma comida que você mais gosta.") 
const comida3 = prompt("E por fim, mais uma comida que você mais gosta.") 

const fraseConcatenada = `Estas são as comidas favoritas de ${nome}\n${comida1}\n${comida2}\n${comida3}` 

console.log (fraseConcatenada)