document.addEventListener('DOMContentLoaded', () => {
    // Cargar la configuración desde config.json
    fetch('settings.json') // Asegúrate de que config.json esté en la misma carpeta que tu script principal.
        .then(response => response.json())
        .then(config => {
            const serverUrl = config.serverUrl;

            // Hacer una solicitud a la URL del servidor
            fetch(serverUrl)
                .then(response => response.json())
                .then(data => {
                    // Función para convertir de MB a GB, MB o KB
                    function convertirMBaGBOenMB(megabytes) {
                        if (megabytes >= 1024) {
                            return { valor: (megabytes / 1024).toFixed(1), unidad: 'GB' };
                        } else if (megabytes >= 1) {
                            return { valor: megabytes.toFixed(1), unidad: 'MB' };
                        } else {
                            return { valor: (megabytes * 1024).toFixed(2), unidad: 'KB' };
                        }
                    }

                    // Ordenar los datos por consumo en MB de mayor a menor
                    data.sort((a, b) => b.trafficD - a.trafficD);

                    const tablaBody = document.getElementById('tabla-body');

                    // Limpiar cualquier contenido previo en la tabla
                    tablaBody.innerHTML = '';

                    // Iterar sobre los datos ordenados y agregar filas a la tabla
                    data.forEach(user => {
                        const fila = document.createElement('tr');

                        const nombre = document.createElement('td');
                        nombre.textContent = user.name;

                        const consumo = convertirMBaGBOenMB(user.trafficD);

                        // Crear celdas para GB, MB y KB
                        const gb = document.createElement('td');
                        gb.textContent = consumo.valor + ' ' + consumo.unidad;

                        fila.appendChild(nombre);
                        fila.appendChild(gb);

                        tablaBody.appendChild(fila);
                    });
                })
                .catch(error => {
                    console.error('Error al cargar los datos desde la URL del servidor:', error);
                });
        })
        .catch(error => {
            console.error('Error al cargar la configuración desde config.json:', error);
        });
});
