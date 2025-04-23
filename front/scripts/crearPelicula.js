const axios = require("axios");

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formulario-pelicula");
    const resetBtn = document.getElementById("resetBtn");

    resetBtn.addEventListener("click", () => {
        form.reset();
    });

    async function enviarFormulario(event) {
        event.preventDefault();

        const title = document.getElementById("title").value;
        const poster = document.getElementById("poster").value;
        const director = document.getElementById("director").value;
        const year = document.getElementById("year").value;
        const duration = document.getElementById("duration").value;
        const genre = document.getElementById("genre").value;
        const rate = document.getElementById("rate").value;

        const movieData = {
            title,
            poster,
            director,
            year,
            duration,
            genre: genre.split(','),
            rate
        };

        try {
            const response = await axios.post("http://localhost:3000/movies", movieData);

            if (response.status === 201) {
                alert("Película creada exitosamente");
                form.reset();
            }
        } catch (error) {
            console.log("Error al crear la película:", error);
            alert("Hubo un error al crear la película. Intenta nuevamente.");
        }
    }

    form.addEventListener("submit", enviarFormulario);
});