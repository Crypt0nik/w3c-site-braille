
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
