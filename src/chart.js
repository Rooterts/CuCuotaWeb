import { Chart } from 'chart.js';

// Datos para el gráfico
const datos = {
    labels: ['Etiqueta 1', 'Etiqueta 2', 'Etiqueta 3', 'Etiqueta 4', 'Etiqueta 5'],
    datasets: [
        {
            label: 'Mi conjunto de datos',
            data: [10, 20, 30, 40, 50], // Valores de los datos
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 2,
        },
    ],
};

// Opciones del gráfico
const opciones = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};

// Obtén una referencia al elemento canvas en tu HTML donde deseas mostrar el gráfico
const ctx = document.getElementById('myChart').getContext('2d');

// Crea la instancia del gráfico
const myChart = new Chart(ctx, {
    type: 'bar', // Tipo de gráfico (barras en este caso)
    data: datos, // Datos del gráfico
    options: opciones, // Opciones del gráfico
});
