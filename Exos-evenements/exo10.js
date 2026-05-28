const filtre = document.getElementById('filtreAnimaux');
const animaux = document.querySelectorAll('.animal');

filtre.addEventListener('input', () => {
    const valeurFiltre = filtre.value.toLowerCase();
    animaux.forEach(animal => {
        const texteAnimal = animal.textContent.toLowerCase();
        if (texteAnimal.includes(valeurFiltre)) {
            animal.style.display = '';
        } else {
            animal.style.display = 'none';
        }
    });
});