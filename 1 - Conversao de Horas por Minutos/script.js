// Função de conversão de horas para minutos
function conversaoHorasMinutos() {
    // Obtenção de valor digitado pelo usuário
    var horas = document.getElementById('horas').value;

    // Verificação se o número é válido
    if (isNaN(horas) || horas === '') {
        alert('Por favor, digite um número válido.');
        return;
    }

    // Conversão de horas para minutos
    var minutos = horas * 60;

    // Exibição do resultado
    document.getElementById('resultado').textContent = minutos + 'minutos';
}