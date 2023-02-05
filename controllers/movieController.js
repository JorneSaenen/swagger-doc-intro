import Movie from '../models/MovieSchema.js';

const getAllMovies = async (req, res) => {
  try {
    //console.log(req.headers);
    if (req.headers.authorization !== 'Bearer ' + process.env.TOKEN) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const { title } = req.query;
    const movies = await Movie.find();

    if (title?.toLowerCase()) {
      const filteredMovies = result.filter((movie) =>
        movie.title?.toLowerCase().includes(title?.toLowerCase())
      );
      return res.status(200).json(filteredMovies);
    }
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMovieById = async (req, res) => {
  try {
    if (req.headers.authorization !== 'Bearer ' + process.env.TOKEN) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const { id } = req.params;
    const movies = await Movie.findById(id);
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postMovie = async (req, res) => {
  try {
    if (req.headers.authorization !== 'Bearer ' + process.env.TOKEN) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const { title, releaseYear, actors, poster } = req.body;
    const result = await Movie.create({
      title,
      releaseYear,
      actors,
      poster,
    });
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateMovie = async (req, res) => {
  try {
    if (req.headers.authorization !== 'Bearer ' + process.env.TOKEN) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const { id } = req.params;
    const { title, releaseYear, actors, poster } = req.body;
    const updatedMovie = {
      title,
      releaseYear,
      actors,
      poster,
    };
    await Movie.replaceOne({ _id: id }, updatedMovie);
    res.status(200).json({ _id: id, ...updatedMovie });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteMovie = async (req, res) => {
  try {
    if (req.headers.authorization !== 'Bearer ' + process.env.TOKEN) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    const { id } = req.params;
    const result = await Movie.deleteOne({ _id: id });
    res.json(result);
  } catch (error) {
    console.error(error);
  }
};

export { getAllMovies, getMovieById, postMovie, updateMovie, deleteMovie };
