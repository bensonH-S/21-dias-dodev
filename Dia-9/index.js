/* Escreva um algoritmo onde seu usuário deve informar nome, idade, altura e profissão a parti disso você
deve exibir um texto com todas essas informações. Ex: Usuário inseriu nome: Giovanni, idade: 21, peso 74kg,
profissão: Programador, altura: 1.83, você exibe: Olá Giovanni, você tem 21 anos, é programador, tem 1.83M
de altura e pesa 74kg.
*/

//DECLARANDO VARIAVÍES E SOLICITANDO QUE O USUÁRIO INSIRA OS DADOS

let nome = prompt("Por favor, digite seu nome:")
let idade = prompt("Por favor, digite sua idade:")
let peso = prompt("informe quantos kg, você tem: ")
let altura = prompt("informe sua altura por gentileza")
let profissao = prompt ("Qual é sua profissão: ")

//EXIBINDO COM UM ALERT AS INFORMAÇÕES QUE O USUÁRIO INSERIU

console.log("Olá "+nome+ ", você tem "+idade+ " anos, é "+profissao+", tem "+altura+" de altura"
   + " e pesa " + peso +"Kg")

//VERIFICANDO SE O USUÁRIO E MAIOR DE IDADE OU MENOR DE IDADE, CASO SEJA MAIOR ELE PODE BEBER

    if(idade >= 18){
        console.log(nome+", Você está liberabdo para entrar no bar, pois é maior de idade")
    }else{
        console.log(nome+ " Você não está liberado para entrar no bar, pois é menor de idade")
    }
    console.log("----------------------------------------------------------------------------")
    console.log("----------------------------------------------------------------------------")
//EXIBINDO A IDADE DO USUÁRIO 
let meses = idade * 12    
let semanas = idade * 52
let dias  = idade * 365


console.log(nome+" Você possui "+meses +" meses de vida")
console.log(nome+" Você possui "+semanas +" semanas de vida")
console.log(nome+" Você possui "+dias +" dias de vida")