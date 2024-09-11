//Criando variáveis
let nome;
let idade;
let carta = false
let carro = false

// Pedido informações ao usuário

nome = prompt("Digite seu nome:")
idade = prompt("Digite sua idade:")

let possuiCarta = prompt("Possui carta de motorista? (S/N)")
if (possuiCarta == "S"){
   carta = true

}
    
let possuiCarro = prompt("Possui carro? (S/N)")
    if (possuiCarro == "S") {
        carro = true
    }


//Exibindo mensagem no console

if (idade < 18 || !carta ) {

    console.log(nome+", você não pode dirigir")
    
}else if (idade >= 18 && carta && !carro) {
    console.log(nome+", você pode dirigir, mas não tem um carro")
}else{
    console.log(nome+", você será o motorista")
}