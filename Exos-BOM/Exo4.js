let nouvelleFenetre = null;
//stock la référence de la fenêtre ouverte

document.getElementById('btnOuvrir').addEventListener('click', function() {
    nouvelleFenetre = window.open("about:blank", "_blank", "width=300,height=300");
});
//about:blank permet d'ouvrir une fenêtre vide pour la fermer facilement ensuite
//si j'avais mis "google.com" je n'aurais pas pu la fermer à cause de la politique de sécurité du navigateur

document.getElementById('btnFermer').addEventListener('click', function() {
    if (nouvelleFenetre) {
        nouvelleFenetre.close();
    }
});