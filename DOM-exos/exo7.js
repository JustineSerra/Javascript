/*

let nombres = [3,8,12,5,2];
// tableau fourni par la consigne

let liste=document.getElementById("Liste"); 
//sélection de la liste grâce à son ID. 

for (let i=0; i<nombres.length; i++){
 //boucle for pour parcourir le tableau

    if (nombres[i]%2===0){ 
    //condition pour vérifier si le nombre est pair
        let element=document.createElement("li"); 
        //création d'un élément de liste
        element.textContent=nombres[i]; 
        //ajout du nombre à l'élément de liste
        liste.appendChild(element); 
        //ajout de l'élément de liste à la liste
    }
}

*/