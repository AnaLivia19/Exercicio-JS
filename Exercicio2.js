function verificarParImpar() {
    const numero = document.getElementById('numero').value;

    if (isNaN(numero)) {
        alert("Por favor, digite um número válido.");
        return;
    }

    if (numero % 2 === 0) {
        document.getElementById('resultado').textContent = `O número ${numero} é par.`;
    } else {
        document.getElementById('resultado').textContent = `O número ${numero} é ímpar.`;
    }
}