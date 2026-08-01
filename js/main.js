document.addEventListener("DOMContentLoaded", () => {

  /* ==========================================================================
     1. SCROLL REVEAL BLINDADO (PC & MOBILE)
     ========================================================================== */
  // Seleciona todos os elementos do site, incluindo os cards de comendas e projetos
  const elementos = document.querySelectorAll(
    ".reveal, .revelar, .linha-projeto, .card-membro, .card-comenda, .bloco-conteudo, .grid-comendas > div"
  );

  // Aplica a classe base .reveal caso não tenha no HTML
  elementos.forEach(el => el.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const observerOptions = {
      root: null,
      rootMargin: "100px 0px 50px 0px", // Detecta ANTES de entrar na tela no mobile
      threshold: 0.01                  // Requer apenas 1% de visibilidade para disparar
    };

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible", "visivel");
          obs.unobserve(entry.target); // Anima e fixa
        }
      });
    }, observerOptions);

    elementos.forEach(el => observer.observe(el));
  } else {
    // Caso o celular seja antigo/sem suporte
    elementos.forEach(el => el.classList.add("is-visible", "visivel"));
  }

  // TRAVA DE SEGURANÇA PARA MOBILE (Garante exibição mesmo com economia de bateria)
  setTimeout(() => {
    elementos.forEach(el => el.classList.add("is-visible", "visivel"));
  }, 1000);


  /* ==========================================================================
     2. MENU MOBILE INTELIGENTE
     ========================================================================== */
  const btnMenu = document.getElementById("botao-menu-mobile");
  const menuNav = document.getElementById("menu-navegacao");
  const linksNav = document.querySelectorAll(".menu-principal a");

  if (btnMenu && menuNav) {
    btnMenu.addEventListener("click", () => {
      menuNav.classList.toggle("ativo");
    });

    linksNav.forEach(link => {
      link.addEventListener("click", () => {
        menuNav.classList.remove("ativo");
      });
    });
  }
});