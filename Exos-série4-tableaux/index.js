/*Exercice 1
const nombres = [1,2,3,4,5]; 
    for (const nombre of nombres) {
    console.log(nombre);
}
*/

/*Exercice 2*/
function sommeTableau(tableau) {
    let somme = 0;
    for (let nombre of tableau) {
        somme += nombre;
    }
    return somme;
}
const Nombres=[2,5,10,14];
console.log(sommeTableau(Nombres));