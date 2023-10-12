let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

function changeSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    updateSlide();
}

function updateSlide() {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(${100 * (index - currentIndex)}%)`;
    });
}

updateSlide(); // Mostrar la primera imagen

// Autoplay (opcional)
setInterval(() => {
    changeSlide(1); // Cambiar a la siguiente imagen cada cierto tiempo (por ejemplo, cada 3 segundos)
}, 3000);



// Función para mostrar u ocultar el botón según el desplazamiento de la página
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// Función para hacer scroll suave hacia arriba al hacer clic en el botón
function scrollToTop() {
    document.body.scrollTop = 0; // Para navegadores antiguos
    document.documentElement.scrollTop = 0; // Para navegadores modernos
}