//DECLARANDO VARIAVEIS
let nota = 0;
let sexo = "";
let repetir = "";
let condicao = true;
let soma = 0;
let media = 0;
let cont = 0;
let h = 0;
let m = 0;
let maiornota = 0;


//SOLICITANDO AO USÚARIO QUE INFORME OS DADOS
while(condicao){
    nota = Number(prompt("Por favor, digite sua nota: "))
    sexo = prompt("Qual é o seu sexo (F/M)").toLowerCase();
    repetir = prompt("Deseja inserir uma nova nota? (S/N)").toLowerCase();
    cont++
    soma +=nota

//SAINDO DO LAÇÕ DE REPETIÇÃO
    if(repetir =="n"){
        condicao = false

    }

//CALCULANDO QUANTOS HOMENS ENVIARAS AS NOTAS E A MAIOR ENTRE ELAS
    if(sexo == "m"){
        if(nota > maiornota){
            maiornota = nota

        }
        h++
        
        
    }

//CALCULANDO A MAIOR NOTA ENTRE AS MULHERES
if(sexo =="f" && nota>=7){
    m++
}
    

//SOMANDO A MÉDIA DOS ALUNOS
media = soma / cont

}

//console.log("O total de usuarios são: "+cont)
console.log("A média geral dos alunos é: "+media)
console.log("O total de homens que enviaras às notas foram: "+h)
console.log("Total de mulheres que tiveram nota acima de 7: "+m)
console.log("A maior nota entre os homens é: "+maiornota)
