const bouton= document.getElementById("compter");
const paragraphe = document.getElementById("resultat");
let compteur=0;
bouton.addEventListener("click", function() {
    compteur++;
    paragraphe.textContent = "Nombre de clics : " + compteur;
});