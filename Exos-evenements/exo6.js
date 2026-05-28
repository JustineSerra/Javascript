const champTexte = document.getElementById('champTexte');
const bouton = document.getElementById('toggleChamp');

bouton.addEventListener('click', function() {
    champTexte.disabled = !champTexte.disabled;
    if (champTexte.disabled) {
        bouton.textContent = 'Afficher';
    } else {
        bouton.textContent = 'Masquer';
    }
});