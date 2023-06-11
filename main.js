document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('showcase');
ScrollReveal().reveal('proyect-cards', {delay: 500});
ScrollReveal().reveal('skills-banner', {delay: 500});
