const navToggle = document.getElementById('nav-toggle');
 navToggle.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('#main-nav a').forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

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

  const form = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const payload = {
      nome: form.nome.value,
      email: form.email.value,
      mensagem: form.mensagem.value
    };
    console.log('Payload pronto para envio:', payload);
    formStatus.textContent = 'Mensagem pronta para envio — conecte aqui sua integração.';
  });

  document.getElementById('whatsapp-link').addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Substitua este handler pelo link real do WhatsApp.');
  });