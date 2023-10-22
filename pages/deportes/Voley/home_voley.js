//Galeria de fotos
const imagenes = document.querySelectorAll(".img-galeria");
const imagenesLight = document.querySelector(".agregar_imagen");
const contenedorLight = document.querySelector(".imagen_light");

imagenes.forEach(imagen =>{
    imagen.addEventListener("click", ()=>{
        aparecerImagen(imagen.getAttribute("src"))
    })
})

contenedorLight.addEventListener("click", (e=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle("show")
        imagenesLight.classList.toggle("showImage")
    }
}))

const aparecerImagen = (imagen) =>{
    imagenesLight.src = imagen;
    contenedorLight.classList.toggle("show")
    imagenesLight.classList.toggle("showImage")
}

//Botón para ir hacia arriba

let lastScrollPosition = window.scrollY; // Variable para rastrear la posición de desplazamiento anterior

window.onscroll = function () {
  const scrollPosition = window.scrollY;

  if (scrollPosition < lastScrollPosition) {
    // El usuario se está desplazando hacia arriba y ha superado 200 píxeles
    document.querySelector('.gotop_container').classList.add('show2');
  } else {
    // El usuario se está desplazando hacia abajo o no ha superado los 200 píxeles
    document.querySelector('.gotop_container').classList.remove('show2');
  }

  lastScrollPosition = scrollPosition; // Actualizar la posición de desplazamiento anterior
};


document.querySelector(".gotop_container")
.addEventListener("click", () =>{
    window.scrollTo({
        top: 0,
        behavior: `smooth`
    });
});