// 1. Gestion de la barre de navigation au scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 2. Animation d'apparition des éléments (Fade in)
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// On cible les cartes, titres et sections
const animatedElements = document.querySelectorAll('.card, .review-card, .section-title, .contact-info');

animatedElements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});

// 3. Simulation d'envoi de formulaire
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    
    const btn = document.querySelector('.btn-submit');
    const originalText = btn.innerText;
    
    btn.innerText = "Envoi en cours...";
    
    setTimeout(() => {
        btn.style.backgroundColor = "#cfaa7d"; // Devient doré
        btn.innerText = "Message envoyé avec succès !";
        form.reset();
        
        // Remet le bouton normal après 3 secondes
        setTimeout(() => {
            btn.style.backgroundColor = "";
            btn.innerText = originalText;
        }, 3000);
    }, 1500);
});