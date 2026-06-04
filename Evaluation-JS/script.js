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

}