const position = document.getElementById("scrollPosition");

window.addEventListener("scroll", () => {
    position.textContent = window.scrollY;
});
//affiche la position verticale du scroll dans la div avec l'id "scrollPosition"