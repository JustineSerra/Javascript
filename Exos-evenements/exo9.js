const champ = document.getElementById('champClavier');
const message = document.getElementById('messageClavier');

champ.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
         message.textContent = `Vous avez appuyé sur la touche Entrée.`;
    }
});