/*

let ages = [5,18,25,15,30];
function categoriesAges(listeAges) {
    let ul=document.createElement("ul");
    //création de la liste à puces
    listeAges.forEach(age => {
        //parcours chaque age
        let li=document.createElement("li");
        //création d'un élement "li" pour chaque age.
        if(age < 18) {
            li.textContent = `Âge: ${age} ans - Mineur`;
        } else {
            li.textContent = `Âge: ${age} ans - Majeur`;
        }
        ul.appendChild(li);
        //imbrique le li dans le ul
    });
    document.body.appendChild(ul);
    //injection de la liste dans le body du DOM
}
categoriesAges(ages);
//appel de la fonction

*/