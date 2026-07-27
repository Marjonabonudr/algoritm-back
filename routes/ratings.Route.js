const express = require('express');
const router = express.Router();
const ratingsController = require('../controllers/ratings.Controller');

/**
 * @swagger
 * tags:
 *   name: Ratings
 *   description: Ratings management
 */



/**
 * @swagger
 * /api/ratings:
 *   post:
 *     tags: [Ratings]
 *     summary: Create a new ratings
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lesson_id:
 *                 type: number
 *               student_id:
 *                 type: number
 *               teacher_id:
 *                 type: number
 *               score:
 *                 type: number
 *               comment:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Ratings created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/ratings', ratingsController.createRatings);


/**
 * @swagger
 * /api/ratings/search:
 *   get:
 *     tags: [Ratings]
 *     summary: Search ratings
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for ratings
 *     responses:
 *       '200':
 *         description: List of ratings matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */ 
router.get('/ratings/search', ratingsController.searchRatings);


/**
 * @swagger
 * /api/ratings:
 *   get: 
 *     tags: [Ratings]
 *     summary: Get all ratings
 *     responses:
 *       '200':
 *         description: List of ratings
 *       '500':
 *         description: Server error
 */
router.get('/ratings', ratingsController.getRatings);



/**
 * @swagger
 * /api/ratings/{id}:
 *   get:
 *     tags: [Ratings]
 *     summary: Get a ratings by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ratings ID
 *     responses:
 *       '200': 
 *         description: Ratings details
 *       '404':
 *         description: Ratings not found
 *       '500':
 *         description: Server error
 */
router.get('/ratings/:id', ratingsController.getRatingsById);


/**
 * @swagger
 * /api/ratings/{id}:
 *   put:
 *     tags: [Ratings]
 *     summary: Update a ratings by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ratings ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               lesson_id:
 *                 type: number
 *               student_id:
 *                 type: number
 *               teacher_id:
 *                 type: number
 *               score:
 *                 type: number
 *               comment:
 *                 type: string
 *     responses:
 *       '200': 
 *         description: Ratings updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Ratings not found
 *       '500': 
 *         description: Server error
 */
router.put('/ratings/:id', ratingsController.updateRatings);



/**
 * @swagger
 * /api/ratings/{id}:
 *   delete:
 *     tags: [Ratings]
 *     summary: Delete a ratings by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Ratings ID
 *     responses:
 *       '200':
 *         description: Ratings deleted
 *       '404':
 *         description: Ratings not found
 *       '500':
 *         description: Server error
 */
router.delete('/ratings/:id', ratingsController.deleteRatings); 


module.exports = router;