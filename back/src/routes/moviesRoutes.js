const express = require("express");
const { getMovies, createMovie } = require("../controllers/moviesController.js");

const router = express.Router();

router.get("/movies", getMovies);
router.post('/movies', createMovie);

module.exports = router;