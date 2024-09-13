//Declarando variável
    let num = 0
    let num2 = 0
    let resu = 0
    let total = 0
    

//Solicitando que o usúario informe um número
    num = parseInt(prompt ("Por favor insira o primeiro número: "))
    num2 = parseInt(prompt ("Por favor insira o segundo  número: "))

//Solicitando ao usúario qual operação mátematica realizar
    resu = prompt ("Qual tipo de operação matemática deseja realizar: \n 1: Somar \n" +
        " 2: Subtrair \n 3: Multiplicar \n 4: Dividir")

//Criando o algoritimo para realizar a operação
        switch(resu){
            case "1":
                total = num + num2
                console.log("A operação escolhida foi de soma, o resultado é: "+total) 
                break;
            case "2":
                total = num - num2
                console.log("A operação escolhida foi de subtração, o resultado é: "+total) 
            break

            case "3":
                total = num * num2
                console.log("A operação escolhida foi de multiplicação, o resultado é: "+total) 
            break

            case "4":
                total = num / num2
                console.log("A operação escolhida foi de divisão, o resultado é: "+total) 
            break
       }