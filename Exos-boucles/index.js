/*Exercice 1
const multiples = []; //création du tableau vide
for (let nombre=1; nombre<=100; nombre++) { //boucle qui parcourt les nombres de 1 à 100
if (nombre%3===0||nombre%5===0){ // vrai si l'une des conditions est vraie
    multiples.push(nombre); //ajoute le nombre si c'est un multiple
} else { //ou sinon
    multiples.push("!"+nombre); //ajoute un !
    }
}
console.log(multiples);

*/

/*Exercice 2*/
const notes = [15,-3,12,0,19,22,8];
const valides = [];
let i =0;
while (i<notes.length) {
    const noteActuelle=notes[i];
    if (noteActuelle>0 && noteActuelle<20) {
        valides.push(noteActuelle);
    }
    i++;
}
console.log("Tableau des notes valides:", valides);

const elementEcartes=notes.length-valides.length;
console.log("Nombre d'éléments écartés:", elementEcartes);