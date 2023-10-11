# CuCuotaWeb - Documentación 📊

## Descripción 📋
CuCuotaWeb es un cliente web para el proyecto backend de [Cucuota](https://github.com/kaelthasmanu/cucuota)

![Ejemplo](https://github.com/kaelthasmanu/cucuota/blob/main/cucuota/img/example.jpg)
## Requisitos 🛠️

Para desplegar CuCuota en producción, necesitarás:
- [Git](https://git-scm.com/) instalado en tu servidor.
- [Node.js](https://nodejs.org/es) instalado en tu servidor.
- [Vite](https://vitejs.dev/) para compilar y desplegar la aplicación.
- Acceso a un servidor o alojamiento web donde puedas desplegar la aplicación.

## Pasos para Desplegar CuCuota en Producción 🌐

1. Clona el repositorio de CuCuota desde GitHub:

   ```bash
   git clone https://github.com/Rooterts/CuCuotaWeb
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd CuCuotaWeb
   ```

3. Instala las dependencias utilizando npm:

   ```bash
   npm install
   ```

4. Compila la aplicación con Vite:

   ```bash
   npm run build
   ```

   La aplicación se compilará en el directorio `dist`. Puedes copiar el contenido de este directorio a tu servidor o alojamiento web.

5. Configura tu servidor o alojamiento web para servir los archivos de CuCuota desde la carpeta `dist`.

6. Asegúrate de que el archivo de configuración `settings.json` esté correctamente configurado con la URL del servidor que proporciona los datos de consumo de usuarios.

7. Accede al sitio web desplegado en tu servidor y ¡disfruta de CuCuota!

##Configuración del servidor 🗄️

`./src/settings.json`
```bash 
{
 "serverUrl": "http://localhost:5173/api/data"
}
 ```
Por defecto buscara el localhost en el puerto 5173 bajo la ruta `/api/data`
## Personalización 🎨

Si deseas personalizar la apariencia o el comportamiento del sitio, puedes hacerlo modificando los estilos en la sección `<style>` del archivo HTML.

## Contacto 📞

Si tienes alguna pregunta, problema o sugerencia, no dudes en contactar a [@Rooterts](https://t.me/Rooterts) en Telegram.

## Licencia 📜

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para obtener más detalles.

¡Gracias por utilizar CuCuota! 👍
