//DECLARANDO VARIÁVEIS
let fome = false
let dinheiro = false
let aberto = ""

fome = prompt("Você está com fome? (S/N)")
dinheiro = prompt("Você tem dinheiro (S/N)")
aberto = prompt("O restaurente está aberto? (S/N")

if(fome === "N" || dinheiro == "N"){
    console.log("Hoje o jantar será em casa")

}else if (dinheiro === "S" && aberto === "S"){
    console.log("Hoje o jantar será no seu restaurente preferido")

}else{
    console.log("Peça um delivery")
}
