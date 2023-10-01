// themeToggle.js

const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Verifica el tema actual al cargar la página y establece el emoji correspondiente
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = '🌙'; // Cambia a luna
}

// Escucha el evento de clic en el botón
themeToggle.addEventListener('click', () => {
    // Alterna entre los modos claro y oscuro
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light'); // Almacena el tema en el almacenamiento local
        themeToggle.textContent = '🌙'; // Cambia a sol
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark'); // Almacena el tema en el almacenamiento local
        themeToggle.textContent = '☀️'; // Cambia a luna
    }
});

