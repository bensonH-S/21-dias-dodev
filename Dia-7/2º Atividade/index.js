//DECLARANDO VÁRIAVEIS
let nome = ""
let cpf = 0
let valor = 0
let saldo = 100
let trasancao = ""
let operacao = true
let saldomaior = 0
let media = 0
let soma = 0
let cont = 0

//SOLICITANDO QUE O USUARIO INSIRAR OS DADOS

    nome = prompt("Qual é o seu nome: ")
    cpf = parseInt(prompt("Qual é seu CPF: "))
    alert(nome+" o saldo da sua conta é: "+saldo)
    while(operacao){
    valor = parseInt(prompt("Por favor, digite um valor: "))
    cont++
    soma += valor
    trasancao = prompt("Essa operação é saque ou depósito (S/D)").toLowerCase();

// EXIBINDO O MAIOR VALOR INSERIDO

    if(valor > saldomaior){
        saldomaior = valor
    
    }

//CALCULADO A MEDIA DOS VALORES INSERIDOS

    media = soma / cont
   
/*CRIANDO REGRAS DE SAQUE, COMO NÃO SACAR VALOR NEGATIVO E NÃO SACAR VALORES INDISPONÍVEL
VERIFICANDO QUE TIPO DE TRANSAÇÃO É E REALIZANDO OPERAÇÃO MATEMATICA
INFORMANDO UM ALERTA COM O NOME DO CLIENTE E A INFORMAÇÃO DO SALDO
INFORMANDO A INFORMAÇÃO COM O MAIOR VALOR INSERIDO.
INFORMANDO QUAL É A MEDIA DOS VALORES INSERIDOS */

if(valor > saldo){
    alert("Não é possível sacar esse valor R$"+valor+", você não possui saldo o suficente")
    trasancao = false

    }

    if(valor <= saldo && valor <= 0){
        switch(trasancao){
            case "s":
                saldo = saldo - valor
                break;
        
            case "d":
                saldo = saldo + valor
                break;
        }
        alert("Olá "+nome+ " o seu saldo total é: "+saldo)
        alert("O maior valor inserido foi: "+saldomaior)
        alert("A media dos valores inseridos são: "+media)
    }
   
//VERIFICANDO SE O USUARIO QUER CONTINUAR A OPERAÇÃO

    trasancao = parseInt(prompt("Você desej continuar? \n 1: Continuar \n 2: Sair"))
    
//FINALIZANDO O LAÇO DE REPETIÇÃO

    if(trasancao == 2){
        operacao = false
    }else{
        operacao = true
     }
        

}

