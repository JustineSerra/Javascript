/*

let livres = [
 { titre: "Livre A", categorie: "Roman" },
 { titre: "Livre B", categorie: "Poésie" },
 { titre: "Livre C", categorie: "Roman" }
];
let livresContainer = {};

livres.forEach(livre => {
    if(!livresContainer[livre.categorie]) {
        livresContainer[livre.categorie] = [];
    }
        livresContainer[livre.categorie].push(livre.titre);
});

let result=document.body;
for (let categorie in livresContainer){

    let categorieElement=document.createElement("h2");
    categorieElement.textContent=categorie;
    result.appendChild(categorieElement);

    let livresList=document.createElement("ul");
    livresContainer[categorie].forEach(titre => {
        let li=document.createElement("li");
        li.textContent=titre;
        livresList.appendChild(li);
    });

    result.appendChild(livresList);
}

*/