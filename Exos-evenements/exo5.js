const nom = document.getElementById('champNom');
const afficherNom = document.getElementById('afficherNom');
const message = document.getElementById('message');

afficherNom.addEventListener('click', function() {
    const nomUtilisateur = nom.value;
    if(nomUtilisateur.trim() !== '') {
        message.textContent = `Bonjour, ${nomUtilisateur}!`;
    } else {
        message.textContent = 'Veuillez entrer votre nom.';
    }
});