document.addEventListener('DOMContentLoaded', () => {
  // Cargar la configuración desde el archivo settings.json
  fetch('./src/settings.json') // Supongamos que el archivo settings.json está en la misma ubicación que el HTML
    .then(response => response.json())
    .then(config => {
      const serverUrl = config.serverUrl;

      // Hacer una solicitud a la URL del servidor
      fetch(serverUrl)
        .then(response => response.json())
        .then(data => {
          // Función para convertir de MB a GB o mantener en MB si es menor a 1 GB
          function convertirMBaGBOenMB(megabytes) {
            if (megabytes >= 1024) {
              return (megabytes / 1024).toFixed(3) + ' GB'; // Convertir a GB y redondear a 2 decimales
            } else {
              return megabytes.toFixed(0) + ' MB'; // Mantener en MB y redondear a 2 decimales
            }
          }

          // Ordenar los datos por consumo en GB de mayor a menor
          data.forEach(item => {
            item.trafficD = item.trafficD / 1024; // Convertir a GB
          });

          data.sort((a, b) => b.trafficD - a.trafficD);

          // Tomar los primeros 10 usuarios con mayor consumo
          const top10Users = data.slice(0, 10);

          const tablaBody = document.getElementById('tabla-body');

          // Limpiar cualquier contenido previo en la tabla
          tablaBody.innerHTML = '';

          // Definir una paleta de colores con colores más intensos
          const colores = [
            'rgba(0, 128, 128, 0.8)',
            'rgba(255, 0, 0, 0.8)',
            'rgba(0, 255, 0, 0.8)',
            'rgba(128, 0, 128, 0.8)',
            'rgba(0, 0, 255, 0.8)',
            'rgba(255, 128, 0, 0.8)',
            'rgba(128, 128, 0, 0.8)',
            'rgba(128, 0, 0, 0.8)',
            'rgba(0, 128, 0, 0.8)',
            'rgba(0, 0, 128, 0.8)'
            // Puedes ajustar los colores según tus preferencias
          ];

          // Iterar sobre los 10 usuarios con mayor consumo y crear filas de tabla
          top10Users.forEach((item, index) => {
            const fila = document.createElement('tr');

            const nombre = document.createElement('td');
            nombre.textContent = item.name;

            const trafficD = document.createElement('td');
            const consumo = convertirMBaGBOenMB(item.trafficD * 1024); // Convertir GB a MB si es menor a 1 GB
            trafficD.textContent = consumo;

            fila.appendChild(nombre);
            fila.appendChild(trafficD);

            tablaBody.appendChild(fila);

            // Agregar un color único a la paleta de colores para este usuario
            if (index < colores.length) {
              colores.push(colores.shift()); // Mover el primer color al final de la paleta
            }
          });

          // Crear los datos para la gráfica utilizando los 10 usuarios con mayor consumo
          const nombres = top10Users.map(item => item.name);
          const datosConsumo = top10Users.map(item => item.trafficD.toFixed(2)); // Mantener los datos en GB o MB según corresponda

          // Código JavaScript para configurar y mostrar la gráfica
          let ctx = document.getElementById('myChart').getContext('2d');
          let myChart = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: nombres, // Nombres de los usuarios
              datasets: [{
                label: '',
                data: datosConsumo, // Consumo en GB o MB según corresponda
                backgroundColor: colores, // Colores más intensos y únicos para cada usuario
                borderColor: colores, // Colores de borde correspondientes
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                  title: {
                    display: true,
                    text: 'Consumo (GB/MB)'
                  }
                },
                x: {
                  title: {
                    display: false,
                    text: 'USUARIOS'
                  }
                }
              },
              plugins: {
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      let label = context.dataset.label || '';
                      if (label) {
                        label += ' ';
                      }
                      label += context.parsed.y + (context.parsed.y >= 1 ? ' GB' : ' MB');
                      return label;
                    }
                  }
                }
              }
            }
          });
        })
        .catch(error => console.error('Error al cargar los datos desde la URL:', error));
    })
    .catch(error => console.error('Error al cargar la configuración:', error));
});
