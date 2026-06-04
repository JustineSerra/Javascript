document.addEventListener('DOMContentLoaded',() => {

const todoForm = window.document.getElementById('todo-form');
const todoInput = window.document.getElementById('todo-input');
const filtreToutes = window.document.getElementById('filtre-toutes');
const filtreActive = window.document.getElementById('filtre-active');
const filtreCompleted = window.document.getElementById('filtre-completed');
const todoList = window.document.getElementById('todo-list');
const cookie = window.document.getElementById('cookie');
const btnCookie = window.document.getElementById('btn-cookie-accept');
//reprise de tous les ID de la page HTML 

let taches = JSON.parse(window.localStorage.getItem('taches')) || [];
let filtreActuel = 'toutes'; 
//utilisation du "window.localStorage" pour récupérer les tâches déjà existantes

// FONCTIONS POUR LES COOKIES 

function creerCookie(nom, valeur, jours) {
    const date = new Date();
    date.setTime(date.getTime() + (jours*24*60*60*1000));
    //conversion des jours en millisecondes pour l'expiration
    window.document.cookie = nom+ "=" + valeur + "; expires=" + date.toUTCString() + "; path=/; SameSite=Strict";
    //injection de la chaîne du cookie dans l'objet "window.document"
}
function lireCookie(nom) { //fonction qui lit et vérifie si le cookie existe déjà
    const nomCree= nom+"="
    const listeCookies = window.document.cookie.split(';');

    for(let i=0; i< listeCookies.length; i++) {
        let c = listeCookies[i].trim();
        if (c.indexOf(nomCree) ===0) {
            return c.substring(nomCree.length, c.length);
        }
    }
    return null; //retourne null si le cookie n'existe pas
}

if (lireCookie('rgpd_consent')=== 'true') { 
    cookie.classList.add('hidden'); //si le cookie existe et vaut "true", on cache le bandeau
} else {
    cookie.classList.remove('hidden'); //dans le cas contraire, on s'assure qu'il est visible
}

btnCookie.addEventListener('click',() => { //évenement quand on clique sur Accepter
    creerCookie('rgpd_consent', 'true', 30); //création du cookie pour 30 jours
    cookie.classList.add('hidden');
});