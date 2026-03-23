
// Funcionalidade para o Menu Mobile
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

// Quando clicar no ícone de "hambúrguer", mostra ou esconde os links
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Funcionalidade do botão de matrícula
const btnMatricula = document.getElementById('btn-matricula');

if (btnMatricula) {
    btnMatricula.addEventListener('click', () => {
        alert('Que ótimo! Redirecionando você para o Portal de Matrículas da Escola Saber...');
        // Aqui você poderia colocar um redirecionamento real:
        // window.location.href = "pagina-de-matricula.html";
    });
}
