document.addEventListener('DOMContentLoaded',() => {

const todoForm = window.document.getElementById('todo-form');
const todoInput = window.document.getElementById('todo-input');
const filtreToutes = window.document.getElementById('filtre-toutes');
const filtreActive = window.document.getElementById('filtre-active');
const filtreCompleted = window.document.getElementById('filtre-completed');
const todoList = window.document.getElementById('todo-list');
const cookieBanner = window.document.getElementById('cookie');
const btnCookie = window.document.getElementById('btn-cookie-accept');
//reprise de tous les ID de la page HTML 

let taches = JSON.parse(window.localStorage.getItem('taches')) || [];
let filtreActuel = 'toutes'; 
//utilisation du "window.localStorage" pour récupérer les tâches déjà existantes

// FONCTIONS POUR LES COOKIES 

function lireCookie(nom) { //fonction qui lit et vérifie si le cookie existe déjà
    const cookies= document.cookie.split(";");

    for(let cookie of cookies) {
        cookie = cookie.trim();
        if (cookie.startsWith(nom+"=")) {
            return cookie.substring(nom.length+1)
        }
    }
    return null; //retourne null si le cookie n'existe pas
}

if (lireCookie('rgpd_consent') === 'true') { 
    cookieBanner.classList.add('hidden'); //si le cookie existe et vaut "true", on cache le bandeau
} else {
    cookieBanner.classList.remove('hidden');
}

btnCookie.addEventListener('click',() => { //évenement quand on clique sur Accepter
    document.cookie ="rgpd_consent=true; max-age=" + (60*60*24*30) + "; path=/"; //création du cookie pour 30 jours
    cookieBanner.classList.add('hidden');
});

function sauvegarderTaches() {
    window.localStorage.setItem('taches', JSON.stringify(taches));
}
//fonction pour sauvegarder le tableau dans le localStorage

function afficherTaches() {
    todoList.innerHTML=''; //on vide la liste HTML pour éviter les doublons

    const tachesFiltrees = taches.filter(tache=> {
        if (filtreActuel === 'active') return !tache.fait;
        if (filtreActuel === 'completed') return tache.fait;
        return true;
    });

    tachesFiltrees.forEach(tache=> {
        const liste = document.createElement('li');
        liste.className= 'todo-item';
        if (tache.fait) {
            liste.classList.add('completed');
        }

        const checkbox = document.createElement('input');
        checkbox.type='checkbox';
        checkbox.checked=tache.fait; //cochée si la tâche est faite
        //création de la checkbox

        checkbox.addEventListener('change', () => {
            tache.fait = checkbox.checked;
            sauvegarderTaches();
                if (tache.fait) {
                    liste.classList.add('completed')
                } else {
                    liste.classList.remove('completed');
                }
                if (filtreActuel !== 'toutes') {
                    afficherTaches();
                }
        });
        //événement au clic sur la checkbox


        const texteTache = document.createElement('span');
        texteTache.textContent = tache.texte;
        //création du texte

        const btnSupprimer=document.createElement('button');
        btnSupprimer.textContent = 'Supprimer';
        btnSupprimer.className = 'btn-delete';
        //création du bouton supprimer

        btnSupprimer.addEventListener('click', () => {
            taches = taches.filter(t => t.id !== tache.id);
            sauvegarderTaches();
            afficherTaches();
        });

        liste.appendChild(checkbox);
        liste.appendChild(texteTache);
        liste.appendChild(btnSupprimer);
        //assemblage dans le "li"

        todoList.appendChild(liste);
        //ajout du "li" dans le "ul"
    });
}

// GESTION DU FORMULAIRE 

todoForm.addEventListener('submit', (e) => {
    e.preventDefault(); //empêche le rechargement de la page de manière native

    const texte = todoInput.value.trim();
    if (texte==='') return; //sécurité anti chaine vide

    const nouvelleTache = {
        id : Date.now(),
        texte : texte,
        fait: false
    };

    taches.push(nouvelleTache);
    sauvegarderTaches();
    afficherTaches();

    todoInput.value=''; //champ de saisie réinitialisé
});

//GESTION DES BOUTONS DE FILTRE

function gererFiltre (boutonClique, valeurFiltre) {
    [filtreToutes, filtreActive, filtreCompleted].forEach(btn=>btn.classList.remove('active'));
    boutonClique.classList.add('active');
    filtreActuel = valeurFiltre;
    afficherTaches();
}

filtreToutes.addEventListener('click', () => gererFiltre(filtreToutes, 'toutes'));
filtreActive.addEventListener('click', () => gererFiltre(filtreActive, 'active'));
filtreCompleted.addEventListener('click', () => gererFiltre(filtreCompleted, 'completed'));

afficherTaches();
//appel initial

});