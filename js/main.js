document.addEventListener('DOMContentLoaded', () => {

  // 1. Alternar Menu Mobile
  const navToggle = document.getElementById('botao-menu-mobile');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = document.body.classList.toggle('menu-aberto');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Fechar menu ao clicar num link
    document.querySelectorAll('#menu-navegacao a').forEach(link => {
      link.addEventListener('click', () => {
        document.body.classList.remove('menu-aberto');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 2. Animação de Surgimento ao Rolar a Página (Scroll Reveal)
  const revealItems = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealItems.forEach(item => revealObserver.observe(item));

  // 3. Envio do Formulário de Contato
  const form = document.getElementById('form-contato');
  const mensagemSucesso = document.getElementById('mensagem-sucesso');

  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const payload = {
        nome: form.nome.value,
        email: form.email.value,
        mensagem: form.mensagem.value
      };

      console.log('Mensagem capturada com sucesso:', payload);

      // Oculta o formulário e exibe o aviso de sucesso
      form.style.display = 'none';
      if (mensagemSucesso) {
        mensagemSucesso.style.display = 'block';
      }
    });
  }

});