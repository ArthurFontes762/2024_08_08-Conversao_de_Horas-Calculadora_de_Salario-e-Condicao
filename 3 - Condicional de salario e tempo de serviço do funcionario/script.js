function calcularSalarioReajustado() {
    // Obtém os valores digitados pelo usuário
    var salario = parseFloat(document.getElementById('salario').value);
    var tempoServico = parseFloat(document.getElementById('tempoServico').value);

    // Verifica se os valores são números válidos
    if (isNaN(salario) || isNaN(tempoServico)) {
        alert('Por favor, preencha todos os campos com números válidos.');
        return;
    }

    // Definição de porcentagem de aumento com base no tempo de serviço
    var aumento;
    if (tempoServico <= 1) {
        aumento = 0.10; // 10% de aumento
    } else {
        aumento = 0.20; // 20% de aumento
    }

    // Calcula o salário reajustado
    var salarioReajustado = salario * (1 + aumento);

    // Exibe o resultado
    document.getElementById('resultado').textContent = 'Salário Reajustado: R$ ' + salarioReajustado.toFixed(2);
}