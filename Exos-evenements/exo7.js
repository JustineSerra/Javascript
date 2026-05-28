const bouton= document.getElementById("ajouter");
const liste = document.getElementById("listeElements");

bouton.addEventListener("click", function() {
    const nouvelElement = document.createElement("li");
    nouvelElement.textContent = "Nouvel élément ajouté";
    liste.appendChild(nouvelElement);
});