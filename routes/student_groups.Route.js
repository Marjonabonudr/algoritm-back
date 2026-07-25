const express = require('express');
const router = express.Router();
const student_groupsController = require('../controllers/student_groups.Controller');

/**
 * @swagger
 * tags:
 *   name: StudentGroups
 *   description: StudentGroups management
 */


/**
 * @swagger
 * /api/student_groups:
 *   post:
 *     tags: [StudentGroups]
 *     summary: Create a new student_groups
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: number
 *               group_id:
 *                 type: number
 *               joined_at:
 *                 type: string
 *               left_at:
 *                 type: string
 *               status:    
 *                 type: string
 *     responses:
 *       '201':
 *         description: StudentGroups created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/student_groups', student_groupsController.createStudentGroups);



/**
 * @swagger
 * /api/student_groups/search:
 *   get:
 *     tags: [StudentGroups]
 *     summary: Search student_groups
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for student_groups
 *     responses:
 *       '200':
 *         description: List of student_groups matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */ 
router.get('/student_groups/search', student_groupsController.searchStudentGroups);



/**
 * @swagger
 * /api/student_groups:
 *   get: 
 *     tags: [StudentGroups]
 *     summary: Get all student_groups
 *     responses:
 *       '200':
 *         description: List of student_groups
 *       '500':
 *         description: Server error
 */
router.get('/student_groups', student_groupsController.getStudentGroups);


/**
 * @swagger
 * /api/student_groups/{id}:
 *   get:
 *     tags: [StudentGroups]
 *     summary: Get a student_groups by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: StudentGroups ID
 *     responses:
 *       '200': 
 *         description: StudentGroups details
 *       '404':
 *         description: StudentGroups not found
 *       '500':
 *         description: Server error
 */
router.get('/student_groups/:id', student_groupsController.getStudentGroupsById);



/**
 * @swagger
 * /api/student_groups/{id}:
 *   put:
 *     tags: [StudentGroups]
 *     summary: Update a student_groups by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: StudentGroups ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: number
 *               group_id:
 *                 type: number
 *               joined_at:
 *                 type: string
 *               left_at:
 *                 type: string
 *               status:
 *                 type: string
 *     responses:
 *       '200': 
 *         description: StudentGroups updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: StudentGroups not found
 *       '500': 
 *         description: Server error
 */
router.put('/student_groups/:id', student_groupsController.updateStudentGroups);


/**
 * @swagger
 * /api/student_groups/{id}:
 *   delete:
 *     tags: [StudentGroups]
 *     summary: Delete a student_groups by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: StudentGroups ID
 *     responses:
 *       '200':
 *         description: StudentGroups deleted
 *       '404':
 *         description: StudentGroups not found
 *       '500':
 *         description: Server error
 */
router.delete('/student_groups/:id', student_groupsController.deleteStudentGroups);


module.exports = router;