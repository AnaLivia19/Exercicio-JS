function calcularIdade() {
    const anoNascimento = document.getElementById('anoNascimento').value;
    const anoAtual = new Date().getFullYear();
    const idade = anoAtual - anoNascimento;

    const resultado = document.getElementById('resultado');
    resultado.textContent = `Você tem ${idade} anos.`;
}