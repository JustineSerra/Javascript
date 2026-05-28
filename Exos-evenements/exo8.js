const elements=document.querySelectorAll('.cliquable');

elements.forEach(element=>{
    element.addEventListener('click',()=>{
        element.remove();
    });
});