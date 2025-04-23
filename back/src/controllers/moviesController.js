const movieService = require("../services/movieService.js");

const getMovies = async (req, res) => {
    try {
        const allMovies = await movieService.getAllMovies();
        res.json(allMovies);
    } catch (error) {
        res.send("Ocurrió un error al obtener las películas");
    }
};

const createMovie = async (req, res) => {
    try {
        const { title, poster, director, year, duration, genre, rate } = req.body;

        const newMovie = await movieService.createMovie({
            title,
            poster,
            director,
            year,
            duration,
            genre,
            rate
        });

        res.status(201).json({
            message: 'Película creada exitosamente',
            movie: newMovie
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getMovies, createMovie };


// const getMovies = (req, res) => {
//     res.send('Próximamente estarán disponibles los datos de películas.');
// };

// module.exports = { getMovies };