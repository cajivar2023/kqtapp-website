document.addEventListener("DOMContentLoaded", function () {
  // Menú móvil
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  }

  // Manejo de submenús en móvil
  const hasSubmenuLinks = document.querySelectorAll(".has-submenu > a");
  
  if (window.innerWidth <= 768) {
    hasSubmenuLinks.forEach(link => {
      link.addEventListener("click", function(e) {
        e.preventDefault();
        this.parentNode.classList.toggle("active");
      });
    });
  }

  // Cierra el menú al hacer clic en un enlace
  const navItems = document.querySelectorAll(".nav-links a:not(.has-submenu > a)");
  navItems.forEach((item) => {
    item.addEventListener("click", function () {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
      }
    });
  });

  // Efecto de scroll suave para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
      }
    });
  });

  // Ajusta tamaño del iframe del chat si existe
  const chatIframe = document.querySelector('.chat-container iframe');
  if (chatIframe) {
    // Ajusta el tamaño inicial
    adjustIframeHeight();
    
    // Vuelve a ajustar si cambia el tamaño de la ventana
    window.addEventListener('resize', adjustIframeHeight);
  }
  
  function adjustIframeHeight() {
    const containerWidth = document.querySelector('.chat-container').offsetWidth;
    // Proporción aproximada para el chat (16:9 o similar)
    const height = Math.min(600, Math.max(400, containerWidth * 0.7));
    chatIframe.style.height = `${height}px`;
  }

  console.log("KQT App - JavaScript cargado correctamente");
});