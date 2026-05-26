/*

let fruits = ["pomme", "banane","orange"];
//donnée par l'exo
let liste = document.getElementById("liste-fruits");
//on selectionne la liste HTML via son id. 
for (let fruit of fruits) {
    let puce = document.createElement("li");
    //on crée un nouvel élément de la liste <li>. 
    puce.textContent = fruit; 
    //on ajoute le nom du fruit à la puce 
    liste.appendChild(puce); 
    //insere le <li> dans la liste. 
}

*/