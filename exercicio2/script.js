const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
const resposta = `${minhaString}\n${minhaString+minhaString.length}\n${minhaString.trim()+minhaString.length}\n${minhaString.replace("________", "sticioso")}`
console.log (resposta)
