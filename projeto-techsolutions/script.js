const form = document.getElementById('contactForm');
const telInput = document.getElementById('telefone');

// 1. Máscara de Telefone
telInput.addEventListener('input', (e) => {
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});

// 2. Validação em Tempo Real
const validateField = (input, condition) => {
    if (condition) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
};

form.addEventListener('input', (e) => {
    const target = e.target;

    if (target.id === 'nome') validateField(target, target.value.length >= 3);
    if (target.id === 'email') validateField(target, target.value.includes('@') && target.value.length > 5);
    if (target.id === 'mensagem') validateField(target, target.value.length >= 10);
});

// 3. Envio e Modal
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulação de envio
    document.getElementById('modal').style.display = 'flex';
    form.reset();
    
    // Remove as classes de validação após reset
    document.querySelectorAll('input, textarea').forEach(el => el.classList.remove('valid'));
});

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}