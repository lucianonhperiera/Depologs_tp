document.addEventListener("DOMContentLoaded", function () {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const inner = carousel.querySelector('.carousel-inner');
        const slides = inner.querySelectorAll('div');

        let currentIndex = 0;

        const showSlide = () => {
            currentIndex = (currentIndex + 1) % slides.length;

            slides.forEach((slide, index) => {
                slide.style.transform = `translateX(-${currentIndex * 100}%)`;
                slide.style.opacity = index === currentIndex ? 1 : 0;
            });
        };

        setInterval(showSlide, 5000); // Cambia cada 2 segundos, ajusta según sea necesario
    });
});
