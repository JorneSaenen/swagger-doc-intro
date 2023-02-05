import express from 'express';
const router = express.Router();
import {
  getAllMovies,
  getMovieById,
  postMovie,
  updateMovie,
  deleteMovie,
} from '../controllers/movieController.js';

/**
 * @swagger
 * /api/v1/movies:
 *  get:
 *   tags:
 *   - Movies
 *   summary: Get all movies
 *   responses:
 *    200:
 *     description: Returns an array of all movies
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Movies'
 *    401:
 *     $ref: '#/components/responses/Unauthorized'
 *    500:
 *     $ref: '#/components/responses/Error'
 */
router.get('/', getAllMovies);

/**
 * @swagger
 * /api/v1/movies/{id}:
 *  get:
 *   tags:
 *   - Movies
 *   summary: Get movie by id
 *   parameters:
 *    - in: path
 *      required: true
 *      description: The id of the movie
 *      name: id
 *      schema:
 *       type: string
 *   responses:
 *    200:
 *     description: Returns an object of a movie
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Movie'
 *    401:
 *     $ref: '#/components/responses/Unauthorized'
 *    500:
 *     $ref: '#/components/responses/Error'
 */
router.get(`/:id`, getMovieById);

/**
 * @swagger
 * /api/v1/movies:
 *  post:
 *   tags:
 *   - Movies
 *   summary: Create a new movie
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/MovieInput'
 *   responses:
 *    201:
 *     description: Returns an object of the created movie
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Movie'
 *    401:
 *     $ref: '#/components/responses/Unauthorized'
 *    500:
 *     $ref: '#/components/responses/Error'
 */
router.post('/', postMovie);

/**
 * @swagger
 * /api/v1/movies/{id}:
 *  put:
 *   tags:
 *   - Movies
 *   summary: Update a new movie
 *   parameters:
 *    - in: path
 *      required: true
 *      description: The id of the movie
 *      name: id
 *      schema:
 *       type: string
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       $ref: '#/components/schemas/MovieInput'
 *   responses:
 *    200:
 *     description: Returns an object of the updated movie
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/Movie'
 *    401:
 *     $ref: '#/components/responses/Unauthorized'
 *    500:
 *     $ref: '#/components/responses/Error'
 */
router.put(`/:id`, updateMovie);

/**
 * @swagger
 * /api/v1/movies/{id}:
 *  delete:
 *   tags:
 *   - Movies
 *   summary: Delete a movie
 *   parameters:
 *    - in: path
 *      required: true
 *      description: The id of the movie
 *      name: id
 *      schema:
 *       type: string
 *   responses:
 *    200:
 *     description: Returns an object of the deleted movie
 *     content:
 *      application/json:
 *       schema:
 *        $ref: '#/components/schemas/DeleteResponse'
 *    401:
 *     $ref: '#/components/responses/Unauthorized'
 *    500:
 *     $ref: '#/components/responses/Error'
 */
router.delete(`/:id`, deleteMovie);

export default router;
