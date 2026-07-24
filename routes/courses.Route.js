const express = require('express');
const router = express.Router();
const coursesController = require('../controllers/courses.Controller');
 
/**
 * @swagger
 * tags:
 *   name: Courses
 *   description: Courses management
 */



/**
 * @swagger
 * /api/courses:
 *   post:
 *     tags: [Courses]
 *     summary: Create a new course
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               duration_month:
 *                 type: number
 *               created_at:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Course created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/courses', coursesController.createCourses);


/**
 * @swagger
 * /api/courses/search:
 *   get:
 *     tags: [Courses]
 *     summary: Search courses by name
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for courses
 *     responses:
 *       '200':
 *         description: List of courses matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */ 
router.get('/courses/search', coursesController.searchCourses);



/**
 * @swagger
 * /api/courses:
 *   get: 
 *     tags: [Courses]
 *     summary: Get all courses
 *     responses:
 *       '200':
 *         description: List of courses
 *       '500':
 *         description: Server error
 */
router.get('/courses', coursesController.getCourses);



/**
 * @swagger
 * /api/courses/{id}:
 *   get:
 *     tags: [Courses]
 *     summary: Get a course by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Course ID
 *     responses:
 *       '200': 
 *         description: Course details
 *       '404':
 *         description: Course not found
 *       '500':
 *         description: Server error
 */
router.get('/courses/:id', coursesController.getCoursesById);


/**
 * @swagger
 * /api/courses/{id}:
 *   put:
 *     tags: [Courses]
 *     summary: Update a course by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Course ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               duration_month:
 *                 type: number
 *               created_at:
 *                 type: string
 *     responses:
 *       '200': 
 *         description: Course updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Course not found
 *       '500': 
 *         description: Server error
 */
router.put('/courses/:id', coursesController.updateCourses);



/**
 * @swagger
 * /api/courses/{id}:
 *   delete:
 *     tags: [Courses]
 *     summary: Delete a course by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Course ID
 *     responses:
 *       '200':
 *         description: Course deleted
 *       '404':
 *         description: Course not found
 *       '500':
 *         description: Server error
 */
router.delete('/courses/:id', coursesController.deleteCourses);


module.exports = router;