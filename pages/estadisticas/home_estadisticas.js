const estadisticasElement = document.getElementById('estadisticas');

function actualizarEstadisticas() {
    // Aquí obtén los datos en tiempo real (puedes usar una API, WebSocket, etc.)
    const datosEnTiempoReal = Math.random() * 100; // Ejemplo: datos aleatorios

    // Actualiza el elemento en la página con los nuevos datos
    estadisticasElement.textContent = `Estadísticas en tiempo real: ${datosEnTiempoReal}`;
}

// Actualiza los datos cada segundo
setInterval(actualizarEstadisticas, 1000);

const ctx = document.getElementById('grafico-de-barras').getContext('2d');

// Configuración inicial del gráfico de barras
const chart = new Chart(ctx, {
    type: 'bar', // Tipo de gráfico (barras en este caso)
    data: {
        labels: [], // Etiquetas de las barras (pueden ser categorías)
        datasets: [{
            label: 'Estadísticas en Tiempo Real',
            data: [], // Datos de las barras
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Color de las barras
            borderColor: 'rgba(75, 192, 192, 1)', // Borde de las barras
            borderWidth: 1 // Ancho del borde
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Función para actualizar el gráfico con datos en tiempo real
function actualizarGrafico(datosEnTiempoReal) {
    const etiquetas = datosEnTiempoReal.map((dato, index) => `Categoría ${index}`);
    const datos = datosEnTiempoReal;

    chart.data.labels = etiquetas;
    chart.data.datasets[0].data = datos;

    chart.update(); // Actualizar el gráfico
}

// Simulación de datos en tiempo real (reemplaza esto con tus datos reales)
setInterval(() => {
    const datosEnTiempoReal = Array.from({ length: 5 }, () => Math.random() * 100); // Ejemplo: 5 categorías con datos aleatorios
    actualizarGrafico(datosEnTiempoReal);
}, 2000); // Actualizar cada 2 segundos (ajusta esto según tus necesidades)
