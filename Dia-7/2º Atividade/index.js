// Inicializando o saldo com um valor inicial
let saldo = 1000;
let maiorValor = 0;
let totalValores = 0;
let quantidadeValores = 0;

let nome = prompt("Por favor, insira seu nome:");
let cpf = prompt("Por favor, insira seu CPF:");

let continuar;

do {
    // Perguntar o valor
    let valor = parseFloat(prompt("Digite o valor da transação:"));

    // Verificar se o valor é válido
    if (valor <= 0) {
        alert("Valor inválido! Insira um valor maior que zero.");
        continue;
    }

    // Perguntar se o usuário deseja sacar ou depositar
    let operacao = prompt("Escolha a operação: \n1 - Saque \n2 - Depósito");

    if (operacao == '1') { // Saque
        if (valor > saldo) {
            alert("Saldo insuficiente para saque!\n \nAtenção: Seu Saldo Atual é: R$"+saldo)
            
        } else {
            saldo -= valor;
            alert("Saque R$ " + valor +", realizado com sucesso!");
        }
    } else if (operacao == '2') { // Depósito
        saldo += valor;
        alert("Depósito R$ " + valor +", realizado com sucesso!");
    } else {
        alert("Operação inválida. Escolha \n1 - Saque \n2 - Depósito");
        continue;
    }

    // Atualizar a maior transação
    if (valor > maiorValor) {
        maiorValor = valor;
    }

    // Atualizar o total e quantidade de transações
    totalValores += valor;
    quantidadeValores++;

    // Mostrar o saldo atual, maior valor e média dos valores
    let mediaValores = totalValores / quantidadeValores;
    alert(`
        Nome: ${nome}
        CPF: ${cpf}
        Saldo atual: R$${saldo.toFixed(2)}
        Maior valor inserido: R$${maiorValor.toFixed(2)}
        Média dos valores inseridos: R$${mediaValores.toFixed(2)}
    `);

    // Perguntar se o usuário deseja continuar
    continuar = prompt("Deseja continuar? \n1 - Sim \n2 - Não");

} while (continuar == '1'); // O loop continua enquanto o usuário escolher "1"

alert("Obrigado pela Preferência!");

