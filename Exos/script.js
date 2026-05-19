/*Variables & affichage*/

/*exo 1
const nom = "Martin";
const anneeNaissance = 2000;
const anneeCourante = new Date().getFullYear();
const age = anneeCourante - anneeNaissance;
console.log(`Bonjour Mr ${nom}, vous avez ${age} ans.`)

*/

/*exo 2
const noteMaths = 15;
const noteFrancais = 12;
const noteHG = 9;
const moyenne = ((15+12+9)/3)
console.log(`La moyenne est de ${moyenne}/20.`)

*/

/*exo 3
const prenom = prompt ("Quel est ton prénom?")
const ageSaisi = prompt ("Quel est ton âge?")
const age = Number(ageSaisi);
const ageAnneeProchaine = age+1;
console.log(`Je m'appelle ${prenom} et j'aurais ${ageAnneeProchaine} ans l'année prochaine.`)

*/

/*exo 4
const longueur = Number(prompt("Quelle est la longueur d'un rectangle (en cm) ?"));
const largeur = Number(prompt("Quelle est la largeur d'un rectangle (en cm)?"));
const surface = longueur * largeur;
console.log (`Le rectangle de longueur ${longueur} cm et de largeur ${largeur} cm a pour surface ${surface} cm².`)

*/

/*exo 5
const temperature = Number(prompt('Quelle est la température en Celsius?'));
const kelvin = temperature + 273.15;
console.log(`La température de ${temperature} °C vaut ${kelvin} K.`);

*/

/*Conditions*/

/*exo 6
const x = Number(prompt("Donne un nombre (x):"));
const y = Number(prompt("Donne un nombre différent du premier (y):"));
if (x > y) {
    console.log("x est plus grand que y");
} else {
    console.log("x est plus petit ou égal à y");
}

*/ 

/*exo 7
const age = Number(prompt("Quel est ton âge?")); 
if (age<18) {
    console.log ("Tu es mineur");
} else if (age<=65) {
    console.log ("Tu es adulte");
}
else {
    console.log ("Tu es senior");
}

*/ 

/*exo 8
const heure = Number(prompt("Quelle heure est-il chez toi? (entier)"));
if (heure >=6 && heure<=11) {
    console.log ("C'est le matin");
}
else if (heure >= 12 && heure<=17) {
    console.log ("C'est l'après-midi");
}
else if (heure >=18 && heure<=21) {
    console.log ("C'est le soir")
}

else {
    console.log("C'est la nuit")
}

*/

/*exo 9
let choix = 5;
if (choix===1) {
    console.log("Insérer");
}
else if (choix===2) {
    console.log("Supprimer");
}
else if (choix===3) {
    console.log("Afficher");
}
else {
    console.log("Ce choix n'existe pas");
}

On peut remplacer if par switch (choix) et les propositions par case 1, case 2 et case 3, break après les consoles et default pour le dernier */

/*exo 10
let nombre=15;
if (nombre % 3 === 0 && nombre % 5=== 0) {
    console.log("Multiple de 3 et de 5");
} else {
    console.log("Non");
}

*/

/*Boucles*/

/*Exercice 11
for (let i=1; i<=10; i++) {
    console.log(i);
}

*/

/*Exercice 12
for (let i=44000;i<=44999;i++) {
    console.log(i);
}

*/

/*Exercice 13
let nombre = prompt("Entrez un nombre:");
for (let i=1; i<=10;i++) {
    console.log(nombre+"x"+i+"="+(nombre*i));
}

*/

/*Exercice 14
let somme=0;
for(let i=1; i<=100;i++) {
    somme+=i;
}
console.log("La somme des entiers de 1 à 100 est:",somme);

*/

/*Exercice 15 (modulo)
for (let i=1; i<=50;i++) {
    if (i%2===0) {
    console.log(i);
    }
}

*/

/*Exercice 16
for (let i=10; i>=0;i--) {
    console.log(i);
}
console.log("C'est terminé!");

*/

/*Exercice 17
let i=0;
while (i<20) {
    console.log(i)
if (i===10) {
    console.log(">>>Valeur clé:10<<<");
}
i +=2;
}

*/

/*Exercice 18
const nombreMystere = Math.floor(Math.random()*10)+1;
let tentative;
do {
    tentative = prompt("Devine le nombre entre 1 et 10:")
    tentative=parseInt(tentative);
    if (tentative !==nombreMystere) {
        alert("Essaye encore !")
    }
} while (tentative !== nombreMystere);
alert("Bravo, c'est correct!");
// parseInt converti du texte en nombre entier, la boucle continue tant que le joueur ne trouve pas, une alrte dés que le joueur a trouvé. //

*/

/*Mise en pratique*/

/*Exercice 19
const nombrePremier = Number(prompt("Donne un nombre"));
const nombreDeuxieme = Number(prompt("Donne un deuxième nombre différent"));
const operation = prompt("Donne moi une opération à effectuer (+, *, - ou /)");
let resultat;
switch (operation) {
    case '+':
        resultat=nombrePremier+nombreDeuxieme;
        break;
    case '-':
        resultat=nombrePremier-nombreDeuxieme;
        break;
    case '*':
        resultat=nombrePremier*nombreDeuxieme;
        break;
    case '/':
        if (nombreDeuxieme===0) {
            resultat="Erreur:Impossible de diviser par zéro!";
        } else {
            resultat=nombrePremier/nombreDeuxieme;
        }
        break;
        defaut: 
        resultat="Opération non valide."
}
alert(`Le résultat est:${resultat}`);

*/

/*Exercice 20
const tableau = [12,45,3,22,34];
let plusGrand = tableau[0];
for(let i=1; i<tableau.length; i++) {
    if (tableau[i]>plusGrand){
        plusGrand=tableau[i];
    }
}
console.log("Le plus grand nombre du tableau est :" + plusGrand);

*/

/*Exercice 21
Math.floor(Math.random()*(999-100+1))+100
const cible = 427;
let tirage = 0;
let compteurTirages=0;
while(tirage !==cible){
    tirage=Math.floor(Math.random()*900)+100;
    compteurTirages++;
}
console.log(`[WHILE] Cible ${cible} trouvée !`);
console.log(`Nombre de tirages nécessaires:${compteurTirages}`);

// const cibleFor = 427; let compteurFor=0; for(let i=1;i++){ const tirageFor=Math.floor(Math.random()*900)+100; if (tirageFor===cibleFor){ compteurFor=i;break;}} console.log(`[FOR]Cible ${cibleFor}trouvée!`);console.log(`Nombre de tirages nécessaires:${compteurFor}`);

*/

/*Exercice 22
const maintenant = new Date();
const dateDuJour = maintenant.toLocaleDateString ('fr-FR', { day: '2-digit', month: '2-digit', year: 'numeric' });
const heureDuJour = maintenant.toLocaleTimeString ('fr-FR', { hour: '2-digit', minute: '2-digit' });
console.log(`Aujourd'hui nous sommes le ${dateDuJour} et il est ${heureDuJour}.`);
//toLocaleTimeString() et toLocaleDateString() leur rôle est d'adapter l'affichage de la date et de l'heure en fonction de sa région du monde (locale). 'fr-FR' indique qu'on veut le format français de date.
//

*/