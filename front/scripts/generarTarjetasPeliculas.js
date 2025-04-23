const contenedorPeliculas = document.getElementById("contenedor-peliculas");

function generarTarjetasPeliculas(data) {
    data.forEach((element) => {
        const divTarjetaPelicula = document.createElement("div");
        divTarjetaPelicula.classList.add("tarjeta-pelicula");

        const tituloh3 = document.createElement("h3");
        tituloh3.textContent = element.title;
        divTarjetaPelicula.appendChild(tituloh3);

        const imgPoster = document.createElement("img");
        imgPoster.src = element.poster;
        divTarjetaPelicula.appendChild(imgPoster);

        const divInfoPelicula = document.createElement("div");
        divInfoPelicula.classList.add("info-pelicula");
        divTarjetaPelicula.appendChild(divInfoPelicula);

        const titulop = document.createElement("p");
        titulop.textContent = `Título: ${element.title}`;
        divInfoPelicula.appendChild(titulop);

        const anio = document.createElement("p");
        anio.textContent = `Año: ${element.year}`;
        divInfoPelicula.appendChild(anio);

        const director = document.createElement("p");
        director.textContent = `Director: ${element.director}`;
        divInfoPelicula.appendChild(director);

        const duracion = document.createElement("p");
        duracion.textContent = `Duración: ${element.duration}`;
        divInfoPelicula.appendChild(duracion);

        const genero = document.createElement("p");
        genero.textContent = `Género: ${element.genre.join(", ")}`;
        divInfoPelicula.appendChild(genero);

        const calificacion = document.createElement("p");
        calificacion.textContent = `Calificación: ${element.rate}`;
        divInfoPelicula.appendChild(calificacion);

        contenedorPeliculas.appendChild(divTarjetaPelicula);
    });
}

module.exports = generarTarjetasPeliculas;