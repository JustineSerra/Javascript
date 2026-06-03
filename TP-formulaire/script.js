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

// Etape 5 : Cookie "dernière visite"

document.addEventListener("DOMContentLoaded", function(){

const cookies = document.cookie;
//on récupère les cookies de la page.

let dateDerniereVisite = null;
//variable pour stocker la date de la dernière visite.

if (cookies) {
    const listeCookies = cookies.split("; ");
    //sépare les cookies en un tableau de paires clé-valeur.

    for (let i = 0; i < listeCookies.length; i++) {
        if (listeCookies[i].startsWith("derniereVisite=")) {
            dateDerniereVisite = listeCookies[i].split("=")[1];
            break;
            //si on trouve le cookie "derniereVisite", on extrait sa valeur (la date) et on sort de la boucle.
        }
    }
}

const welcome = document.getElementById("welcome");
//on récupère la div où sera affiché le message de bienvenue.

if (dateDerniereVisite) {
    welcome.textContent = `Votre dernière visite était le ${decodeURIComponent(dateDerniereVisite)}.`;
    //si la date de la dernière visite est trouvée, on affiche un message de bienvenue avec cette date.
} else {
    welcome.textContent="C'est votre première visite, bienvenue !"
    //si le cookie est absent on affiche le texte de première visite
}

const dateActuelle = new Date ().toLocaleString();
//récupération de la date du jour 

const dateExpiration = new Date();
dateExpiration.setDate(dateExpiration.getDate()+7);
//date d'expiration à J+7 

document.cookie = `derniereVisite=${encodeURIComponent(dateActuelle)};expires=${dateExpiration.toUTCString()}; path=/; SameSite=Lax`;
//evite les bugs avec les espaces et accents

//Etape 4 : Chargement automatique 
   
    const profilStocke = localStorage.getItem("profil");
    //récupération des données du profil stockées dans le localStorage.

    if (profilStocke){
        const profil = JSON.parse(profilStocke);
        //conversion du texte JSON en objet JavaScript.

        document.getElementById("nom").value = profil.nom;
        document.getElementById("email").value = profil.email;
        document.getElementById("couleur").value = profil.couleur;
        //remplissage automatique du formulaire avec les données sauvegardées.

        const zoneProfil = document.getElementById("profil");
        //Afficher directement le profil dans la div #profil
        
        zoneProfil.textContent="";
        //on vide la zone de profil par sécurité 

        const pNom = document.createElement("p");
        pNom.textContent = `Bonjour ${profil.nom}`;
        zoneProfil.appendChild(pNom);
        //nouvelle balise de paragraphe créée pour afficher le nom de l'utilisateur, puis ajoutée à la zone de profil.

        const pEmail = document.createElement("p");
        pEmail.textContent = `Votre email est : ${profil.email}`;
        zoneProfil.appendChild(pEmail);
        //nouvelle balise de paragraphe créée pour afficher l'email de l'utilisateur, puis ajoutée à la zone de profil.

        zoneProfil.style.backgroundColor = profil.couleur;
        //réapplication de la couleur choisie par l'utilisateur en background de la zone de profil.
    }
});

// Etape 6 : Reset 

document.getElementById("reset").addEventListener("click", function(){
//écoute de l'événement "click" sur le bouton d'ID "reset"

    localStorage.removeItem("profil");
    //supprime la clé "profil" stockée dans le localStorage
    
    document.cookie="derniereVisite=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax";
    //supprime le cookie "dernière visite" en le forçant à exprier instantanément
    
    document.getElementById("profilForm").reset();
    //on réinitialise tous les champs du formulaire (vide)

    const zoneProfil = document.getElementById("profil"); 
    zoneProfil.textContent = "";
    zoneProfil.style.backgroundColor="transparent";

    document.getElementById("erreur").textContent="";
    //on efface les anciens messages d'erreur 

    location.reload() 
    //recharge la page pour réinitialiser l'affichage complet

});



