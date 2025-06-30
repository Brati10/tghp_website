document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.querySelector(".nav-toggle");

  if (!navMenu || !navToggle) return;

  // Safari-Erkennung
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || 
                   navigator.userAgent.includes('Mac') && navigator.userAgent.includes('Safari') ||
                   navigator.userAgent.includes('iPhone') || 
                   navigator.userAgent.includes('iPad');
  
  // Event-Handler für verschiedene Browser
  const toggleMenu = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    navMenu.classList.toggle("active");
    navToggle.classList.toggle("open");
    
    // Safari-spezifische Verbesserung: Force reflow
    if (isSafari) {
      navMenu.offsetHeight; // Force reflow
    }
  };

  // Click-Event für alle Browser
  navToggle.addEventListener("click", toggleMenu);
  
  // Safari-spezifische Touch-Events
  if (isSafari) {
    navToggle.addEventListener("touchstart", (e) => {
      e.preventDefault();
      toggleMenu(e);
    }, { passive: false });
    
    // Zusätzlicher Touch-Event für bessere Safari-Kompatibilität
    navToggle.addEventListener("touchend", (e) => {
      e.preventDefault();
    }, { passive: false });
  }

  // Schließt das Menü beim Klick außerhalb
  const closeMenu = (e) => {
    const clickedInside = navMenu.contains(e.target) || navToggle.contains(e.target);
    if (!clickedInside && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      navToggle.classList.remove("open");
    }
  };

  document.addEventListener("click", closeMenu);
  
  // Safari-spezifische Touch-Events für das Schließen
  if (isSafari) {
    document.addEventListener("touchstart", closeMenu, { passive: true });
  }
  
  // Zusätzliche Safari-Verbesserung: Menü-Status beim Laden prüfen
  if (isSafari) {
    // Force Safari to recognize the button
    navToggle.style.display = 'flex';
    navToggle.offsetHeight; // Force reflow
  }
});
