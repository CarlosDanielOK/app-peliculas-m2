# 🎬 Carlos Enterprises

**Aplicación web completa** para explorar y gestionar películas. Cuenta con un frontend moderno y un backend con base de datos MongoDB.  
Desarrollado como parte del **Módulo 2** del curso de desarrollo web.

---

## 🧠 Descripción

Carlos Enterprises permite a los usuarios:

- Navegar por estrenos recientes y películas destacadas.
- Crear nuevas películas con formularios dinámicos.
- Almacenar y recuperar información desde una base de datos MongoDB.
- Visualizar el contenido en una interfaz responsive y moderna.

---

## ✨ Características

### 🎨 Frontend

- Carrusel de imágenes en la página principal.
- Tarjetas dinámicas para mostrar películas destacadas.
- Formulario para crear nuevas películas.
- Diseño responsive con **Bootstrap 5**.
- Comunicación con el backend usando **Axios**.

### 🛠️ Backend

- API REST para gestión de películas.
- Conexión a **MongoDB** usando **Mongoose**.
- Endpoints para crear y obtener películas.
- Middleware de logs (**Morgan**) y manejo de CORS.

### 🧪 Pruebas

- Pruebas unitarias con **Jest** para funcionalidades clave (ej. carrito de compras).

---

## 🧰 Tecnologías Utilizadas

### Frontend

- HTML5, CSS3, JavaScript
- Bootstrap 5
- Webpack
- Axios

### Backend

- Node.js + Express.js
- MongoDB + Mongoose
- Morgan y CORS

### Testing

- Jest

---

## 🚀 Instalación

1. Cloná el repositorio:
```bash
git clone https://github.com/CarlosDanielOK/carlos-enterprises.git
Instalá dependencias del frontend:

bash
Copiar
Editar
cd client
npm install
Instalá dependencias del backend:

bash
Copiar
Editar
cd ../server
npm install
Configurá las variables de entorno (por ejemplo, MONGO_URI).
