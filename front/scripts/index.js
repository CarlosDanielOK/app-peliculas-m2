const axios = require("axios");

const path = window.location.pathname;

if (path.includes("crearPelicula")) {
    require("./crearPelicula");
} else {
    const generarTarjetasPeliculas = require("./generarTarjetasPeliculas");

    async function obtenerDatos() {
        try {
            const respuesta = await axios.get("http://localhost:3000/movies");
            generarTarjetasPeliculas(respuesta.data);
        } catch (error) {
            console.log(error);
        }
    }

    obtenerDatos();
}