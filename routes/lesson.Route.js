const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lesson.Controller');

/**
 * @swagger
 * tags:
 *   name: Lessons
 *   description: Lessons management
 */



/**
 * @swagger
 * /api/lessons:
 *   post:
 *     tags: [Lessons]
 *     summary: Create a new lesson
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               group_id:
 *                 type: number
 *               lesson_date:
 *                 type: string
 *               started_at:
 *                 type: string
 *               ended_at:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Lesson created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/lessons', lessonController.createLessons);



/**
 * @swagger
 * /api/lessons/search:
 *   get:
 *     tags: [Lessons]
 *     summary: Search lessons by name
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for lessons
 *     responses:
 *       '200':
 *         description: List of lessons matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */
router.get('/lessons/search', lessonController.searchLessons);


/**
 * @swagger
 * /api/lessons:
 *   get: 
 *     tags: [Lessons]
 *     summary: Get all lessons
 *     responses:
 *       '200':
 *         description: List of lessons
 *       '500':
 *         description: Server error
 */
router.get('/lessons', lessonController.getLessons);



/**
 * @swagger
 * /api/lessons/{id}:
 *   get:
 *     tags: [Lessons]
 *     summary: Get a lesson by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Lesson ID
 *     responses:
 *       '200': 
 *         description: Lesson details
 *       '404':
 *         description: Lesson not found
 *       '500':
 *         description: Server error
 */
router.get('/lessons/:id', lessonController.getLessonsById);



/**
 * @swagger
 * /api/lessons/{id}:
 *   put:
 *     tags: [Lessons]
 *     summary: Update a lesson by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Lesson ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               group_id:
 *                 type: number
 *               lesson_date:
 *                 type: string
 *               started_at:
 *                 type: string
 *               ended_at:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       '200': 
 *         description: Lesson updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Lesson not found
 *       '500': 
 *         description: Server error
 */
router.put('/lessons/:id', lessonController.updateLessons);



/**
 * @swagger
 * /api/lessons/{id}:
 *   delete:
 *     tags: [Lessons]
 *     summary: Delete a lesson by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Lesson ID
 *     responses:
 *       '200':
 *         description: Lesson deleted
 *       '404':
 *         description: Lesson not found
 *       '500':
 *         description: Server error
 */
router.delete('/lessons/:id', lessonController.deleteLessons);


module.exports = router;