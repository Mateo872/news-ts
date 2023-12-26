# Aplicación de Noticias con React, TypeScript y Tailwind CSS

Este proyecto es una aplicación simple de noticias en React construida con TypeScript y estilizada con Tailwind CSS. Obtiene noticias de una API, permite a los usuarios buscar noticias y muestra los resultados en una interfaz de usuario limpia y receptiva.

## Estructura del Proyecto

El proyecto está organizado en varios archivos:

- **App.tsx**: El componente principal de React que sirve como punto de entrada de la aplicación. Obtiene noticias al montar el componente y proporciona funcionalidad de búsqueda.

- **New.tsx**: Un componente de React reutilizable para mostrar artículos de noticias individuales. Toma props como autor, descripción, título, URL, y más para renderizar una tarjeta de noticias consistente.

- **types.ts**: Contiene interfaces y tipos TypeScript utilizados en todo el proyecto. Define la estructura de los artículos de noticias y la respuesta de la API.

- **newsApi.ts**: Una función auxiliar responsable de obtener datos de noticias de una API externa. Utiliza variables de entorno para la URL y la clave de la API.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone [URL-del-repositorio]
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Crea un archivo `.env` en la raíz del proyecto y establece tu URL de API y clave de API:

   ```env
   VITE_API_URL=tu-url-de-api
   VITE_API_KEY=tu-clave-de-api
   ```

## Ejecutar la Aplicación

Ejecuta el servidor de desarrollo:

```bash
npm run dev
```

Visita [http://localhost:5173](http://localhost:5173) en tu navegador para ver la aplicación de noticias de React en acción.

## Características

- Obtiene artículos de noticias de una API externa.
- Permite a los usuarios buscar noticias en tiempo real.
- Muestra tarjetas de noticias individuales con detalles como autor, título, descripción y más.
- Diseño receptivo utilizando Tailwind CSS.

## Objetivos de Aprendizaje

Este proyecto fue creado como parte de un proceso de aprendizaje para entender y practicar TypeScript y Tailwind CSS dentro de una aplicación React.
