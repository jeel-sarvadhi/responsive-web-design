const toggleButton = document.getElementById('nav-top');
const navMenu = document.getElementById('nav-menu');

toggleButton.addEventListener('click',()=>{
    navMenu.classList.toggle('active');
})