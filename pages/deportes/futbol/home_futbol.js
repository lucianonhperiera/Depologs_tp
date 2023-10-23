//CARROUSEL DE LIBROS

const carousel = document.querySelector(".carousel");

carousel.addEventListener("scroll", () => {
    // Lógica para mostrar solo un libro a la vez en el carrusel.
    const scrollLeft = carousel.scrollLeft;
    const bookWidth = 320; // Ancho de cada libro incluyendo márgenes
    const bookIndex = Math.floor((scrollLeft + bookWidth / 2) / bookWidth);

    // Lógica para resaltar el libro activo.
    const books = document.querySelectorAll(".book");
    books.forEach((book, index) => {
        book.classList.toggle("active", bookIndex === index);
    });
});




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