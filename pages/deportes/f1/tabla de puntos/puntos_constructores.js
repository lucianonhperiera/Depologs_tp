// Lista de URLs de las imágenes que quieres mostrar
const imagenes = [
    "alonso reposera.jpg",
    "charlessusto.jpg",
    "stroll y checo.jpg",
    "verstappen-y-checo_862x485_wmk.jpg",
    "alonso alien.jpg",
    // Agrega más URLs de imágenes aquí
  ];
  
  const tiempoIntervalo = 10000; // 10 segundos en milisegundos
  
  let indiceImagenActual = 0;
  const imagenCambiante = document.getElementById("imagenCambiante");
  
  function cambiarImagen() {
    // Cambia la fuente de la imagen para mostrar la siguiente imagen
    imagenCambiante.src = imagenes[indiceImagenActual];
  
    // Incrementa el índice de la imagen actual, volviendo al principio si se alcanza el final
    indiceImagenActual = (indiceImagenActual + 1) % imagenes.length;
  }
  
  // Llama a la función cambiarImagen() cada 10 segundos
  setInterval(cambiarImagen, tiempoIntervalo);
  