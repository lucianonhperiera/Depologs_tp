const carousel = document.querySelector(".carousel");

carousel.addEventListener("scroll", () => {
    // Lógica para mostrar solo una imagen a la vez en el carrusel.
    const scrollLeft = carousel.scrollLeft;
    const bookWidth = 320; // Ancho de cada imagen incluyendo márgenes
    const bookIndex = Math.floor((scrollLeft + bookWidth / 2) / bookWidth);

    // Lógica para resaltar la imagen activa.
    const books = document.querySelectorAll(".book");
    books.forEach((book, index) => {
        book.classList.toggle("active", bookIndex === index);
    });
});