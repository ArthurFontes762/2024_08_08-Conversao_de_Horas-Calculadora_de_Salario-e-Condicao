// Função de Calculadora de Salário Bruto

function calcularSalarioLiquido() {
    // Usuário irá digitar os valores
    var salarioBruto = parseFloat(document.getElementById('salarioBruto').value);
    var valorHoraExtra = parseFloat(document.getElementById('valorHoraExtra').value);
    var numeroHorasExtras = parseFloat(document.getElementById('numeroHorasExtras').value);

    // Verificação de valores se são números válidos
    if (isNaN(salarioBruto) || isNaN(valorHoraExtra) || isNaN(numeroHorasExtras)) {
        alert('Por favor, preencha todos os campos com números válidos.');
        return;
    }

    // Calculando o total de horas extras
    var totalHorasExtras = valorHoraExtra * numeroHorasExtras;

    // Calculando o salário bruto total (salário bruto + total de horas extras)
    var salarioBrutoTotal = salarioBruto + totalHorasExtras;

    // Calculando o valor do INSS (8% do salário bruto total)
    var descontoINSS = salarioBrutoTotal * 0.08;

    // Calculando o salário líquido (salário bruto total - desconto do INSS)
    var salarioLiquido = salarioBrutoTotal - descontoINSS;

    // Exibe o resultado de tudo
    document.getElementById('resultado').textContent = 'Salário Líquido: R$ ' + salarioLiquido.toFixed(2);
}