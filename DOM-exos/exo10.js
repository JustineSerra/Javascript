/*

let produits = [
 { nom: "Stylo", prix: 1.5 },
 { nom: "Cahier", prix: 3 },
 { nom: "Gomme", prix: 0.8 }
];

function listeProduits(tableau) { 
//fonction qui va générer la liste HTML
    let ul= document.createElement("ul");
    //en <ul> pour créer une liste à puces
    tableau
    .filter(produit=>produit.prix>1) 
    //trie le tableau pour ne garder que les produits dont le prix est supérieur à 1.
    .forEach(produit=>{
    //pour chaque produit supérieur à 1
        let li=document.createElement("li");
        li.textContent=`${produit.nom} - ${produit.prix}€`;
        ul.appendChild(li);
    });

    document.body.appendChild(ul);
    //on injecte la liste dans le corps du document.
}
listeProduits(produits);

*/