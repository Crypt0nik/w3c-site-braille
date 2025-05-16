// Simple script to enhance accessibility
document.addEventListener('DOMContentLoaded', function() {
    // Add aria-live for dynamic content
    const main = document.querySelector('main');
    main.setAttribute('aria-live', 'polite');
    
    // Manage focus for modal if needed
    const formInputs = document.querySelectorAll('input, textarea, select, button');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.outline = '3px solid #3b82f6';
            this.style.outlineOffset = '2px';
        });
        
        input.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
    
    // Skip to content link
    const skipLink = document.querySelector('a[href="#main-content"]');
    skipLink.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.setAttribute('tabindex', '-1');
        target.focus();
        setTimeout(() => target.removeAttribute('tabindex'), 1000);
    });
});

// Barre de progression de lecture
window.addEventListener('scroll', function() {
  const bar = document.getElementById('progress-bar');
  if (!bar) return;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  bar.style.width = percent + '%';
});

function changerTaille(taille) {
  document.body.classList.remove('texte-petit', 'texte-moyen', 'texte-grand');
  document.body.classList.add('texte-' + taille);
  localStorage.setItem('tailleTexte', taille);
}
function toggleContraste() {
  const isActive = document.body.classList.toggle('contraste-eleve');
  localStorage.setItem('contrasteEleve', isActive ? '1' : '0');
}
// Appliquer les préférences au chargement
(function() {
  const taille = localStorage.getItem('tailleTexte');
  if (taille) {
    document.body.classList.add('texte-' + taille);
  }
  if (localStorage.getItem('contrasteEleve') === '1') {
    document.body.classList.add('contraste-eleve');
  }
})();

// Multilingue : gestion du sélecteur de langue et affichage
function setLang(lang) {
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.getElementById('lang-select').value = lang;
  document.querySelectorAll('.multilingual').forEach(function(el) {
    if (el.dataset[lang]) {
      el.textContent = el.dataset[lang];
    }
  });
}
document.addEventListener('DOMContentLoaded', function() {
  // Multilingue : initialisation
  const lang = localStorage.getItem('lang') || 'fr';
  setLang(lang);
  document.getElementById('lang-select').addEventListener('change', function(e) {
    setLang(e.target.value);
  });
});
