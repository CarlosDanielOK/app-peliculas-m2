const Movie = require("../models/Movie.js");
const axios = require("axios");

const movieService = {
    getAllMovies: async () => {
        try {
            const movies = await Movie.find();
            return movies;
        } catch (error) {
            console.log("Error al obtener las películas de la base de datos");
        }
    },

    createMovie: async (movieData) => {
        try {
            const newMovie = new Movie(movieData);
            await newMovie.save();
            return newMovie;
        } catch (error) {
            console.log("Error al crear la película");
        }
    }
};

module.exports = movieService;


// const movieService = {
//     getAllMovies: async () => {
//         try {
//             const response = await axios.get("https://students-api.up.railway.app/movies");
//             const moviesData = response.data;

//             const movies = moviesData.map(movieData => new Movie(movieData));

//             return movies;
//         } catch (error) {
//             console.log("Error al obtener las películas de la API");
//         }
//     }
// };