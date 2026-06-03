// Etape 2 : Validation du formulaire

document.getElementById("profilForm").addEventListener("submit", function(event){
    event.preventDefault();
    //bloque le rechargement automatique de la page lors de la soumission du formulaire

const nom=document.getElementById("nom").value;
const email=document.getElementById("email").value;
const couleur=document.getElementById("couleur").value;
const erreur=document.getElementById("erreur");
//on reprend les ID de la page HTML pour les utiliser dans le script JS

let message="";
//on part toujours d'une chaîne de caractères vide pour construire le message d'erreur.

if (nom.length<2){
    message += "Le nom doit contenir au moins 2 caractères.";
}
//vérifie s'il y a au moins 2 caractères dans le champ nom.

if (!email.includes("@") || !email.includes(".")){
    message += "L'email doit contenir un @ et un point.";
}
//vérifie que l'email contient un "@" et un "."

if (!couleur){
    message += "Veuillez choisir une couleur.";
}
//vérifie que l'utilisateur a sélectionné une couleur mais normalement par défaut c'est #000000.

if (message !== "") {
    erreur.style.color = "red";
    erreur.textContent = message;
    //s'il y a une erreur, le texte passe en rouge et affiche le message d'erreur.
} else {
    erreur.textContent="";
    //si tout est correct, on vide le message d'erreur. 

// Etape 3 : Sauvegarde dans localStorage

const profil = {
    nom: nom,
    email: email,
    couleur: couleur
};
//création de l'objet regroupant les informations du profil. 

localStorage.setItem("profil", JSON.stringify(profil));
//conversion de l'objet en texte (JSON) pour le stocker sous la clé "profil" 

const zoneProfil = document.getElementById("profil");
//on récupère la div où seront affichées les informations du profil.

zoneProfil.textContent="";
//on vide la zone de profil pour afficher les nouvelles informations.

const pNom = document.createElement("p");
pNom.textContent = `Bonjour ${nom}`;
zoneProfil.appendChild(pNom);
//nouvelle balise de paragraphe créée pour afficher le nom de l'utilisateur, puis ajoutée à la zone de profil.

const pEmail = document.createElement("p");
pEmail.textContent = `Votre email est : ${email}`;
zoneProfil.appendChild(pEmail);
//nouvelle balise de paragraphe créée pour afficher l'email de l'utilisateur, puis ajoutée à la zone de profil.

zoneProfil.style.backgroundColor = couleur;
//application de la couleur choisie par l'utilisateur en background de la zone de profil.
}
});

// Etape 4 : Chargement automatique 

