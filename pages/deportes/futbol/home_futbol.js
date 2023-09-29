<<<<<<< HEAD
=======
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

>>>>>>> 753139ec6756275273f3569b909643e3d7d3c388
