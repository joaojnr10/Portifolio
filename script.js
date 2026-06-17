function toggleDarkMode() {
  document.body.classList.toggle("dark"); // animação para escurecer a pagina, deixar modo escuro
}

// Animação ao rolar
const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screen = window.innerHeight;

    if (position < screen - 100) {
      el.classList.add('visible');
    }
  });
});

console.log("Portfólio profissional carregado!");