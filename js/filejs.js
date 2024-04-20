document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('ul');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show-menu');
        menuToggle.classList.toggle('active');
    });

    // Cierra el menu al elegir
    const menuItems = document.querySelectorAll('ul li a');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menu.classList.remove('show-menu');
            menuToggle.classList.remove('active');
        });
    });

    // Cierra el menu al desplazar
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('wheel', function() {
            menu.classList.remove('show-menu');
            menuToggle.classList.remove('active');
        });
    });
});



