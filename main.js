
document.querySelector('.menu-btn').addEventListener('click', () =>{
    var boton2 = document.getElementById('menu-btn2');
    boton2.style.display = 'block';
    document.querySelector('.nav-menu').classList.toggle('show')
});

document.querySelector('.menu-btn2').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('showcase');
ScrollReveal().reveal('proyect-cards', {delay: 500});
ScrollReveal().reveal('skills-banner', {delay: 500});
