document.addEventListener("DOMContentLoaded", () => {
  /* ==========================================================================
     1. SCROLL REVEAL (INTERSECTION OBSERVER)
     ========================================================================== */
  const elementosReveal = document.querySelectorAll(".reveal, .revelar");

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -50px 0px", // Dispara um pouco antes de entrar na tela
    threshold: 0.15                  // Ativa quando 15% do elemento está visível
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible", "visivel");
        observer.unobserve(entry.target); // Anima apenas uma vez
      }
    });
  }, observerOptions);

  elementosReveal.forEach(el => observer.observe(el));


  /* ==========================================================================
     2. MENU MOBILE
     ========================================================================== */
  const btnMenu = document.getElementById("botao-menu-mobile");
  
  if (btnMenu) {
    btnMenu.addEventListener("click", () => {
      document.body.classList.toggle("menu-aberto");
    });

    // Fecha o menu ao clicar em um link
    const linksNav = document.querySelectorAll("nav.menu-principal a");
    linksNav.forEach(link => {
      link.addEventListener("click", () => {
        document.body.classList.remove("menu-aberto");
      });
    });
  }


  /* ==========================================================================
     3. FORMULÁRIO DE CONTATO (EFEITO SUCESSO)
     ========================================================================== */
  const formulario = document.querySelector(".formulario-container form");
  const containerForm = document.querySelector(".formulario-container");

  if (formulario) {
    formulario.addEventListener("submit", (e) => {
      e.preventDefault(); // Impede o recarregamento padrão da página

      // Substitui o formulário pela caixa de sucesso definida no CSS
      containerForm.innerHTML = `
        <div class="mensagem-sucesso">
          <span class="icone-sucesso">✨</span>
          <p>Sua mensagem foi enviada com sucesso!</p>
          <small style="color: var(--pergaminho-suave); display: block; margin-top: 8px;">
            Entraremos em contato em breve.
          </small>
        </div>
      `;
    });
  }
});