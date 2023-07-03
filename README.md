# Generador de Código HTML/CSS con OpenAI

Este proyecto es una aplicación web que utiliza la inteligencia artificial de OpenAI para generar código HTML y CSS basado en las instrucciones del usuario. La aplicación permite a los usuarios ingresar sus requisitos en un campo de texto, y luego utiliza la API de OpenAI para generar el código correspondiente.

## Características

- Generación de código HTML y CSS basado en las instrucciones del usuario.
- Visualización y edición en tiempo real del código generado.
- Integración con una lista de imágenes para su uso en el código generado.
- Diseño de interfaz de usuario intuitivo y fácil de usar.

## Tecnologías Utilizadas

- OpenAI GPT-3.5-turbo: Para la generación de código HTML y CSS.
- React: Para la construcción de la interfaz de usuario de la aplicación.
- AceEditor: Para la visualización y edición del código generado.
- Axios: Para manejar las solicitudes HTTP a la API de OpenAI.

## Cómo Empezar

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias del proyecto con `npm install`.
3. Crea un archivo `.env` en la raíz del proyecto y añade tu clave de API de OpenAI como `OPENAI_API_KEY`.
4. Inicia la aplicación con `npm start`. La aplicación estará disponible en `http://localhost:3000`.

## Uso

1. En la página principal de la aplicación, encontrarás un campo de texto para ingresar tus requisitos. Por ejemplo, puedes escribir "Generar una interfaz de registro de usuario".
2. Haz clic en el botón "Generar" para enviar tu solicitud a la API de OpenAI.
3. La aplicación generará el código HTML y CSS correspondiente y lo mostrará en los editores de código en la página.
4. Puedes editar el código generado directamente en los editores de código, y los cambios se reflejarán en tiempo real en la vista previa.

## Contribuciones

Las contribuciones a este proyecto son bienvenidas. Por favor, abre un issue para discutir lo que te gustaría cambiar o añadir.

## Licencia

Este proyecto está licenciado bajo los términos de la licencia MIT.