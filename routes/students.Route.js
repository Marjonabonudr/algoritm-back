const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/students.Controller');

/**
 * @swagger
 * tags:
 *   name: Students
 *   description: Students management
 */



/**
 * @swagger
 * /api/students:
 *   post:
 *     tags: [Students]
 *     summary: Create a new student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullname:
 *                 type: string
 *               birthday:
 *                 type: string
 *               gender:
 *                 type: string
 *               phone:
 *                 type: string
 *               parent_id:
 *                 type: number
 *               created_at:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Student created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/students', studentsController.createStudents);


/**
 * @swagger
 * /api/students/search:
 *   get:
 *     tags: [Students]
 *     summary: Search students by name, birthday or phone
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for students
 *     responses:
 *       '200':
 *         description: List of students matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */ 
router.get('/students/search', studentsController.searchStudents);



/**
 * @swagger
 * /api/students:
 *   get: 
 *     tags: [Students]
 *     summary: Get all students
 *     responses:
 *       '200':
 *         description: List of students
 *       '500':
 *         description: Server error
 */
router.get('/students', studentsController.getStudents);


/**
 * @swagger
 * /api/students/{id}:
 *   get:
 *     tags: [Students]
 *     summary: Get a student by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Student ID
 *     responses:
 *       '200': 
 *         description: Student details
 *       '404':
 *         description: Student not found
 *       '500':
 *         description: Server error
 */
router.get('/students/:id', studentsController.getStudentsById);


/**
 * @swagger
 * /api/students/{id}:
 *   put:
 *     tags: [Students]
 *     summary: Update a student by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Student ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullname:
 *                 type: string
 *               birthday:
 *                 type: string
 *               gender:
 *                 type: string
 *               phone:
 *                 type: string
 *               parent_id:
 *                 type: number
 *               created_at:
 *                 type: string
 *     responses:
 *       '200': 
 *         description: Student updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Student not found
 *       '500': 
 *         description: Server error
 */
router.put('/students/:id', studentsController.updateStudents);



/**
 * @swagger
 * /api/students/{id}:
 *   delete:
 *     tags: [Students]
 *     summary: Delete a student by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Student ID
 *     responses:
 *       '200':
 *         description: Student deleted
 *       '404':
 *         description: Student not found
 *       '500':
 *         description: Server error
 */
router.delete('/students/:id', studentsController.deleteStudents);


module.exports = router;