const express = require('express');
const router = express.Router();
const teachersController = require('../controllers/teachers.Controller');

/**
 * @swagger
 * tags:
 *   name: Teachers
 *   description: Teachers management
 */


/**
 * @swagger
 * /api/teachers:
 *   post:
 *     tags: [Teachers]
 *     summary: Create a new teacher
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: number
 *               branch_id:
 *                 type: number
 *               salary_per_student:
 *                 type: number
 *               is_active:
 *                 type: boolean
 *               created_at:    
 *                 type: string
 *     responses:
 *       '201':
 *         description: Teacher created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/teachers', teachersController.createTeachers);


/**
 * @swagger
 * /api/teachers/search:
 *   get:
 *     tags: [Teachers]
 *     summary: Search teachers by name, branch or salary
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for teachers
 *     responses:
 *       '200':
 *         description: List of teachers matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */ 
router.get('/teachers/search', teachersController.searchTeachers);


/**
 * @swagger
 * /api/teachers:
 *   get: 
 *     tags: [Teachers]
 *     summary: Get all teachers
 *     responses:
 *       '200':
 *         description: List of teachers
 *       '500':
 *         description: Server error
 */
router.get('/teachers', teachersController.getTeachers);



/**
 * @swagger
 * /api/teachers/{id}:
 *   get:
 *     tags: [Teachers]
 *     summary: Get a teacher by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Teacher ID
 *     responses:
 *       '200': 
 *         description: Teacher details
 *       '404':
 *         description: Teacher not found
 *       '500':
 *         description: Server error
 */
router.get('/teachers/:id', teachersController.getTeachersById);



/**
 * @swagger
 * /api/teachers/{id}:
 *   put:
 *     tags: [Teachers]
 *     summary: Update a teacher by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Teacher ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: number
 *               branch_id:
 *                 type: number
 *               salary_per_student:
 *                 type: number
 *               is_active:
 *                 type: boolean
 *               created_at:    
 *                 type: string
 *     responses:
 *       '200': 
 *         description: Teacher updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Teacher not found
 *       '500': 
 *         description: Server error
 */
router.put('/teachers/:id', teachersController.updateTeachers);




/**
 * @swagger
 * /api/teachers/{id}:
 *   delete:
 *     tags: [Teachers]
 *     summary: Delete a teacher by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Teacher ID
 *     responses:
 *       '200':
 *         description: Teacher deleted
 *       '404':
 *         description: Teacher not found
 *       '500':
 *         description: Server error
 */
router.delete('/teachers/:id', teachersController.deleteTeachers);


module.exports = router;