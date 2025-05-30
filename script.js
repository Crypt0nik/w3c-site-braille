// Carrousel accessible pour la page d'accueil
document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.getElementById('carousel-livre');
    if (!carousel) return;
    const images = [
        document.getElementById('carousel-image'),
        document.getElementById('carousel-image-audio')
    ];
    const dots = carousel.querySelectorAll('.carousel-dot');
    let current = 0;
    function show(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.classList.remove('hidden');
                dots[i].classList.remove('bg-green-200');
                dots[i].classList.add('bg-green-700');
                dots[i].setAttribute('aria-current', 'true');
            } else {
                img.classList.add('hidden');
                dots[i].classList.remove('bg-green-700');
                dots[i].classList.add('bg-green-200');
                dots[i].removeAttribute('aria-current');
            }
        });
        current = index;
    }
    carousel.querySelector('#carousel-prev').addEventListener('click', function() {
        show((current - 1 + images.length) % images.length);
    });
    carousel.querySelector('#carousel-next').addEventListener('click', function() {
        show((current + 1) % images.length);
    });
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => show(i));
    });
    carousel.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            show((current - 1 + images.length) % images.length);
        } else if (e.key === 'ArrowRight') {
            show((current + 1) % images.length);
        }
    });
    show(0);
});

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

// Validation du formulaire de contact
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const fields = form.querySelectorAll('input, textarea');

    // Fonction pour activer/désactiver le bouton de soumission
    function toggleSubmit() {
        if (form.checkValidity()) {
            submitBtn.disabled = false;
            submitBtn.classList.remove('bg-opacity-50', 'cursor-not-allowed');
            submitBtn.classList.add('bg-opacity-100');
            submitBtn.removeAttribute('aria-disabled');
        } else {
            submitBtn.disabled = true;
            submitBtn.classList.add('bg-opacity-50', 'cursor-not-allowed');
            submitBtn.classList.remove('bg-opacity-100');
            submitBtn.setAttribute('aria-disabled', 'true');
        }
    }

    // Fonction pour valider un champ et afficher les erreurs
    function validateField(field) {
        const errorSpan = document.getElementById(`${field.id}-error`);
        if (!field.checkValidity()) {
            errorSpan.classList.remove('hidden');
            errorSpan.textContent = field.validationMessage;
        } else {
            errorSpan.classList.add('hidden');
            errorSpan.textContent = '';
        }
    }

    // Ajouter des écouteurs sur chaque champ pour validation dynamique
    fields.forEach(field => {
        field.addEventListener('input', () => {
            validateField(field);
            toggleSubmit();
        });
        field.addEventListener('blur', () => validateField(field));
    });

    // Initialiser l'état du bouton
    toggleSubmit();
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

// Contact form validation and accessible popup
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form[action^="https://formspree.io"]');
    if (!form) return;
    const popup = document.getElementById('confirm-popup');
    const btnOk = document.getElementById('confirm-ok');
    const btnCancel = document.getElementById('confirm-cancel');
    let lastFocused;

    // Validation regex et messages d'erreur accessibles
    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const phoneInput = form.querySelector('#phone');
    const messageInput = form.querySelector('#message');

    // Création des conteneurs d'erreur
    function createErrorEl(id) {
        let el = document.getElementById(id);
        if (!el) {
            el = document.createElement('div');
            el.id = id;
            el.className = 'text-red-600 text-sm mt-1';
            el.setAttribute('role', 'alert');
            el.setAttribute('aria-live', 'assertive');
            el.setAttribute('tabindex', '-1');
            el.style.display = 'none';
            return el;
        }
        return el;
    }
    nameInput.insertAdjacentElement('afterend', createErrorEl('name-error'));
    emailInput.insertAdjacentElement('afterend', createErrorEl('email-error'));
    phoneInput.insertAdjacentElement('afterend', createErrorEl('phone-error'));
    messageInput.insertAdjacentElement('afterend', createErrorEl('message-error'));

    function showError(input, errorId, message) {
        const el = document.getElementById(errorId);
        el.textContent = message;
        el.style.display = '';
        input.setAttribute('aria-invalid', 'true');
        el.focus();
    }
    function hideError(input, errorId) {
        const el = document.getElementById(errorId);
        el.textContent = '';
        el.style.display = 'none';
        input.removeAttribute('aria-invalid');
    }

    function validateName() {
        const value = nameInput.value.trim();
        // Lettres, espaces, tirets, apostrophes, min 2 caractères
        const regex = /^[A-Za-zÀ-ÿ' -]{2,}$/;
        if (!regex.test(value)) {
            showError(nameInput, 'name-error', 'Veuillez entrer un nom valide (lettres, espaces, tirets, apostrophes, au moins 2 caractères).');
            return false;
        }
        hideError(nameInput, 'name-error');
        return true;
    }
    function validateEmail() {
        const value = emailInput.value.trim();
        // Email classique
        const regex = /^[\w.-]+@[\w.-]+\.[A-Za-z]{2,}$/;
        if (!regex.test(value)) {
            showError(emailInput, 'email-error', 'Veuillez entrer une adresse email valide.');
            return false;
        }
        hideError(emailInput, 'email-error');
        return true;
    }
    function validatePhone() {
        const value = phoneInput.value.trim();
        if (value === '') {
            hideError(phoneInput, 'phone-error');
            return true;
        }
        // Format français : 0X XX XX XX XX ou +33 X XX XX XX XX
        const regex = /^(0|\+33 ?)[1-9](?: ?\d{2}){4}$/;
        if (!regex.test(value)) {
            showError(phoneInput, 'phone-error', 'Veuillez entrer un numéro de téléphone français valide.');
            return false;
        }
        hideError(phoneInput, 'phone-error');
        return true;
    }
    function validateMessage() {
        const value = messageInput.value.trim();
        if (value.length < 2) {
            showError(messageInput, 'message-error', 'Veuillez entrer un message.');
            return false;
        }
        hideError(messageInput, 'message-error');
        return true;
    }

    // Validation au blur
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    phoneInput.addEventListener('blur', validatePhone);
    messageInput.addEventListener('blur', validateMessage);

    // Validation au submit (avant popup)
    form.addEventListener('submit', function (e) {
        let valid = true;
        if (!validateName()) valid = false;
        if (!validateEmail()) valid = false;
        if (!validatePhone()) valid = false;
        if (!validateMessage()) valid = false;
        if (!valid) {
            e.preventDefault();
            // Focus sur le premier champ en erreur
            const firstError = form.querySelector('[aria-invalid="true"]');
            if (firstError) firstError.focus();
            return;
        }
        // Empêche l'envoi immédiat (popup)
        e.preventDefault();
        lastFocused = document.activeElement;
        popup.classList.remove('hidden');
        popup.focus();
        trapFocus(popup);
    }, true);

    btnOk.addEventListener('click', function () {
        closePopup();
        form.submit();
    });
    btnCancel.addEventListener('click', function () {
        closePopup();
    });
    // Gestion clavier
    popup.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            e.preventDefault();
            closePopup();
        } else if (e.key === 'Enter') {
            e.preventDefault();
            closePopup();
            form.submit();
        }
    });
    function closePopup() {
        popup.classList.add('hidden');
        if (lastFocused) lastFocused.focus();
    }
    // Focus trap simple
    function trapFocus(element) {
        const focusable = element.querySelectorAll('button, [tabindex]:not([tabindex="-1"])');
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === first) {
                        e.preventDefault();
                        last.focus();
                    }
                } else {
                    if (document.activeElement === last) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            }
        });
        setTimeout(() => first.focus(), 10);
    }
});
