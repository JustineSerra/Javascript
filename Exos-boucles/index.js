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

/*Exercice 2
const notes = [15,-3,12,0,19,22,8]; //donné par l'exo
const valides = []; //donné par l'exo
let i =0; //on part de 0
while (i<notes.length) { //boucle
    const noteActuelle=notes[i];
    if (noteActuelle>0 && noteActuelle<20) { //si les deux conditions sont vraies alors le .push ajoute la note dans le tableau valides.
        valides.push(noteActuelle);
    }
    i++; //on passe à la note suivante
}
console.log("Tableau des notes valides:", valides);

const elementEcartes=notes.length-valides.length; //soustraction pour trouver les notes écartées
console.log("Nombre d'éléments écartés:", elementEcartes);

*/

/*Exercice 3
const users = { //donné par l'exo
    alice:18,
    bob:25,
    charlie:17,
    dave:30
};
let Compteur =0; //on commence à 0
for (const name in users) { //début de la boucle
    const age = users[name]; //récupère l'age associé au prénom

    if (age>=18 && age!==25) { //condition donné par l'exo
        console.log(name);
        Compteur++; //ajoute +1 à la variable Compteur 
    }
    else { //si la condition n'est pas respectée alors 
    console.log("Accès refusé:"+name); //Accès refusé + prénom en question
    }
}
console.log("Nombre total d'accès accordés:"+Compteur); //Total accès accordés:2

*/

/*Exercice 4
const nombres=[2,7,10,21,14,3]; //donné par l'exo
const resultats=[]; //donné par l'exo
let somme=0; //on commence à 0
for (const n of nombres) { //donné par l'exo
    if ((n%2===0 && n>5) || (n%2!==0 && n<10)) { //condition de l'exo
        somme+=n; //somme=somme+n
        resultats.push(n); //ajoute le nombre valide au tableau resultats
    }
}
console.log("Somme:",somme);
console.log("Tableau résultats:", resultats);

*/

/*Exercice 5
const stock={ pommes:4, bananes:0, poires:3, mangues:1};
const rupture=[];
for (const fruit in stock) {
        while (stock[fruit]>0) {
        stock[fruit]--; //on enlève 1
        console.log(`${fruit}:${stock[fruit]}`); //affiche le stock mis à jour
    }
        if (stock[fruit]===0 && !rupture.includes(fruit)) { 
            rupture.push(fruit); //ajoute le fruit au tableau
        }
}
console.log("Fruits en rupture:", rupture); 

*/

/*Exercice 6
const nums = []; //donné par l'exo
for (let i=0; i<20; i++){ //rempli le tableau de 20 nombres aléatoires entiers
    const nombreAleatoire=Math.floor(Math.random()*30)+1; //de 1 à 30
    nums.push(nombreAleatoire);
}
console.log("Tableau initial:",[...nums]); //on voit les chiffres tirés au hasard
for (let i =0;i<nums.length;i++) {
    if (nums[i]%4===0 || nums[i]%6===0) { //si le nombre est multiple de 4 ou de 6
        nums[i]*=2; //alors multiplie le par 2
    }
    else if (!(nums[i]%2===0)) { //sinon si le nombre n'est pas pair
        nums[i]=1; //remplace le par 1
    }
}
console.log("Tableau final:",nums); 

*/ 

/*Exercice 7
const o1={a:1, b:2, c:3}; //donné par l'exo 
const o2={b:4, c:3, d:5};
const fusion={};

for (const cle in o1) { //copie les paires clés de o1 dans fusion
    fusion[cle]=o1[cle];
}
for (const cle in o2) {
    if (!(cle in fusion)||fusion[cle]!==o2[cle]) {
        fusion [cle]=o2[cle];
    }
}

console.log(fusion);

*/

/*Exercice 8
const produits=[ //donné par l'exo
    {nom: "stylo", prix:1.2, dispo:true},
    {nom:"cahier", prix:2.5, dispo:false},
    {nom: "crayon", prix:0.8, dispo:true},
    {nom: "gomme", prix:0.5, dispo:true}
];
const achats=[]; //initialisation des tableaux pour mettre les noms 
const ignores=[];

for (const produit of produits) { //la boucle demandée
    if (produit.dispo===true && produit.prix<2) { 
        achats.push(produit.nom); //si les 2 conditions sont respectées alors ça le pousse dans achats
    }
    else if (!produit.dispo||produit.prix>=2) {
        ignores.push(produit.nom); //sinon dans ignore
    }
}
console.log("Achats:", achats);
console.log("Ignorés:",ignores);

*/

/*Exercice 9*/
const mot="kayak"; //donné par l'exo

const chars=[]; //également
for (let i=0; i<mot.length; i++) { //boucle 
    chars.push(mot[i]);
}
const inverse= [];
for (let i=chars.length-1; i>=0;i--) {
    inverse.push(chars[i]);
}
let palindrome=true; //on dit qu'elle est vraie
for (let i=0;i<chars.length;i++) {
    if (chars[i] !== inverse[i] || !chars[i]) {
        palindrome=false;
        break; //la boucle s'arrête si c'est faux
    }
}
if (palindrome) {
    console.log(`Le mot "${mot}" est un palindrome!`);
} else {
    console.log(`Le mot "${mot}" n'est pas un palindrome.`);
}



/*Exercice 10
const grilles =[[1,2,3], [4,5,6], [7,8,9]]; //donné par l'exo
let somme=0; //également
for (const tableau of grilles) { //parcours chaque sous tableau puis chaque nombre
    for (const nombre of tableau) {
        if ((nombre%2 ===0 && nombre>=4)||(nombre%2 !==0 && nombre<=5)) {
            somme +=nombre; //somme=somme+   nombre
        }
    }
}
console.log("Somme:",somme);

*/