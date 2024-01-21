// scroll.js

// Función para mostrar u ocultar el botón según la posición de desplazamiento
function toggleScrollButton() {
    console.log("Scrolling...");
    const scrollButton = document.querySelector(".volver");
    if (window.scrollY > 200) {
        scrollButton.style.opacity = 1;
        scrollButton.style.pointerEvents = "auto";
    } else {
        scrollButton.style.opacity = 0;
        scrollButton.style.pointerEvents = "none";
    }
}

// Asigna la función al evento de desplazamiento de la ventana
window.addEventListener("scroll", toggleScrollButton);