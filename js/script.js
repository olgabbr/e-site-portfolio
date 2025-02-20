// Gestion du clic sur "Bienvenue dans mon Portfolio"
const introLink = document.getElementById('intro-link');
const intro = document.getElementById('intro');
const mainContent = document.getElementById('main-content');

introLink.addEventListener('click', (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du lien
    intro.style.display = 'none'; // Masque l'introduction
    mainContent.classList.remove('hidden'); // Affiche le contenu principal
    mainContent.scrollIntoView({ behavior: 'smooth' }); // Défilement fluide vers le contenu principal
});


// Animation au défilement
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});




const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.classList.add('show');
    } else {
        scrollToTopButton.classList.remove('show');
    }
});

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Empêche l'envoi réel du formulaire pour le test
        alert("Votre message a été envoyé avec succès !");
        form.reset(); // Réinitialise le formulaire après l'envoi
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const intro = document.getElementById('intro'); // Section Bienvenue
    const mainContent = document.getElementById('main-content');

    // Vérifie si l'URL contient "#main-content"
    if (window.location.hash === "#main-content") {
        intro.style.display = 'none'; // Cache la section Bienvenue
        mainContent.classList.remove('hidden'); // Affiche le contenu principal
    }
});


// Initialise EmailJS avec la Public Key
emailjs.init('BbO8FiT4jP5LR7IHt');

// Gestion du formulaire
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Récupère les données du formulaire
    const civilite = document.getElementById('civility').value;
    const nom = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Envoie les données via EmailJS
    emailjs.send('olga_service_ID', 'Olga_USER', {
        civilite: civilite,
        nom: nom,
        email: email,
        message: message
    }).then(function(response) {
        alert('Message envoyé avec succès !');
    }, function(error) {
        alert('Erreur lors de l\'envoi : ' + error.text);
    });
});
