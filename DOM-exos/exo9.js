/*

let produits = [
    {nom:"Stylo", prix:1.5},
    {nom:"Cahier", prix:3},
    {nom:"Gomme", prix:0.8},
];

let table=document.createElement("table");
//création de l'éléement table principal 
let entete=document.createElement("tr");
//création de la ligne de l'entête

let thNom=document.createElement("th");
thNom.textContent="Nom";
entete.appendChild(thNom);
//création de la première case d'entête

let thPrix=document.createElement("th");
thPrix.textContent="Prix";
entete.appendChild(thPrix);
table.appendChild(entete);
//création de la deuxieme case d'entête

produits.forEach(produit => {
//on parcout le tableau de produits pour créer une ligne par élément
    let ligne=document.createElement("tr");
    //nouvelle ligne (tr) pour le produit actuel
    let tdNom=document.createElement("td");
    //case pour le nom
    tdNom.textContent=produit.nom;
    ligne.appendChild(tdNom); //on l'ajoute à la ligne

    let tdPrix=document.createElement("td");
    //création de la case pour le prix
    tdPrix.textContent=produit.prix;
    ligne.appendChild(tdPrix);


    table.appendChild(ligne);
    //on ajoute la ligne complète au tableau
});
document.body.appendChild(table);
//on injecte tout le tableau dans le body de la page

*/