/*Exercice 1
const nombres = [1,2,3,4,5]; 
    for (const nombre of nombres) {
    console.log(nombre);
}

*/

/*Exercice 2
function sommeTableau(tableau) {
    let somme = 0;
    for (let nombre of tableau) {
        somme += nombre;
    }
    return somme;
}
const Nombres=[2,5,10,14];
console.log(sommeTableau(Nombres));

*/

/*Exercice 3
function motPlusLong(tableauMots) { //fonction de l'exo
    let plusLongMot="";//nouvelle variable qui a une longueur de 0
    for (const mot of tableauMots) { //boucle
        if (mot.length > plusLongMot.length) { //si la longueur du mot est plus grande que le plusLongMot
            plusLongMot=mot; //la boucle prend le premier mot, puis recommence avec le deuxieme et le troisieme
        }
    }
    return plusLongMot; //c'est le résultat trouvé par la boucle
}
const tableau = ["Bonjour", "Adieu", "Magnifique"]; //tableau
console.log(motPlusLong(tableau)); //affiche le résultat

*/

/*Exercice 4
function inverserChaine(chaine) { //fonction de l'exo
    let chaineInversee = ""; //nouvelle variable qui vaut 0
    for (const lettre of chaine) { //boucle
        chaineInversee=lettre+chaineInversee; //la boucle va attraper chaque lettre du mot et les met l'une après l'autre, jusqu'à la fin du mot
    }
    return chaineInversee //résultat de la boucle
}
const texte = "Bonjour";
console.log(inverserChaine(texte));

*/

/*Exercice 5
function compterVoyelles(chaine) {
    let nbVoyelles=0;
    const listeVoyelles = "aeiouyAEIOUY" //obliger de lister toutes les voyelles pour que la fonction les trouve
    for (const lettre of chaine) {
        if(listeVoyelles.includes(lettre)) {  //vérifie la lettre
            nbVoyelles=nbVoyelles+1;//on augmente le compteur de 1
        }
    }
    return nbVoyelles;
}
const texte="Magnifique";
console.log(compterVoyelles(texte));

*/

/*Exercice 6
function nombresPairs(tableau) { //fonction de l'exo
    let resultat=[]; //tableau vide
    for (let i=0;i<tableau.length;i++){ //boucle
        if (tableau[i]%2===0){
            resultat.push(tableau[i]);
        }
    }
    return resultat;
}
const tab=[22,51,35,44];
const paires=nombresPairs(tab)
console.log(paires);

*/

/*Exercice 7
function compterProprietes(objet) { //fonction de l'exo 
    let compteur = 0; //à partir de 0
    for (let cle in objet){ //boucle
        compteur++; //ajoute 1 à chaque propriété trouvée
    }
    return compteur; //résultat de la boucle
}
const utilisateur = { //listing de mes propriétés
    nom:"Serra",
    prenom:"Justine",
    age:27
};
console.log(compterProprietes(utilisateur)); //affiche 3 en résultat

*/

/*Exercice 8

let produits = [ //tableau de l'exo
    {nom:"Stylo", prix:2},
    {nom:"Cahier", prix:5},
    {nom:"Gomme", prix:1}
];

function extraireNoms(produits) { //fonction de l'exo
return produits.map(produit=>produit.nom) //.map parcours un tableau du début à la fin, en fabrique un nouveau avec des valeurs transformées (ne modifie pas celui d'origine). La flèche permet de prendre le produit et de retourner uniquement la propriété nom. 
}

console.log(extraireNoms(produits)); //resultat

*/

/*Exercice 9*/
function factorielle(n) {

}
console.log(factorielle)