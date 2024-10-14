function validateForm() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var cpf = document.getElementById('cpf').value;

    if (nome === '' || email === '' || telefone === '' || cpf === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false;
    }

    // Validação de email 
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um endereço de email válido.');
        return false;
    }

    // Validação de CPF
    var cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(cpf)) {
        alert('Por favor, insira um CPF válido (formato: XXX.XXX.XXX-XX).');
        return false;
    }

    return true;
}