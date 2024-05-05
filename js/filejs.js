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

//control formulario de contacto
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.querySelector('input[type="submit"]');
    const nombreInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const mensajeInput = document.querySelector('#mensaje');
    const checkboxInput = document.querySelector('#checkbox');
    const selectInput = document.querySelector('#select');
    const imagenInput = document.querySelector('#imagen');

    submitButton.addEventListener('click', (e) => {
      e.preventDefault(); 
  
      const nombreValue = nombreInput.value.trim();
      const emailValue = emailInput.value.trim();
      const mensajeValue = mensajeInput.value.trim();
  
      if (!nombreValue ||!emailValue ||!mensajeValue) {
        alert('Completa los campos correctamente');
        return;
      }

      // Agregar validación para el checkbox
      if (!checkboxInput.checked) {
        alert('Debes aceptar los términos y condiciones');
        return;
      }

      // Agregar validación para el select
      const selectValue = selectInput.value.trim();
      if (!selectValue) {
        alert('Debes seleccionar una opción');
        return;
      }

      // Agregar validación para la imagen
      const imagenValue = imagenInput.value.trim();
      if (!imagenValue) {
        alert('Debes subir una imagen');
        return;
      }

      // Validar el tipo de archivo de la imagen
      const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
      if (!allowedExtensions.exec(imagenValue)) {
        alert('Solo se permiten archivos de imagen (jpg, jpeg, png, gif)');
        return;
      }


  
      if (!/^[a-zA-Z\s]+$/.test(nombreValue)) {
        alert('El nombre solo debe contener letras y espacios');
        return;
      }
  
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)) {
        alert('El email debe contener @ y punto');
        return;
      }
  
      if (mensajeValue.length < 1) {
        alert('El mensaje debe contener al menos un caracter');
        return;
      }
  
      setTimeout(() => {
        alert('Datos enviados');
        nombreInput.value = '';
        emailInput.value = '';
        mensajeInput.value = '';
        window.location.href = 'index.html'; // recarga index.html 
      }, 4000); // muestra el alerta por 4 segundos
    });
  });

  // para imagen promo
