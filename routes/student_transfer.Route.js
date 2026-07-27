const express = require('express');
const router = express.Router();
const student_transferController = require('../controllers/student_transfer.Controller');

/**
 * @swagger
 * tags:
 *   name: Student_transfer
 *   description: Student_transfer management
 */


/**
 * @swagger
 * /api/student_transfer:
 *   post:
 *     tags: [Student_transfer]
 *     summary: Create a new student_transfer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: number
 *               old_teacher:
 *                 type: number
 *               new_teacher:
 *                 type: number
 *               reason:
 *                 type: string
 *               created_at:    
 *                 type: string
 *     responses:
 *       '201':
 *         description: Student_transfer created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/student_transfer', student_transferController.createStudentTransfer);




/**
 * @swagger
 * /api/student_transfer/search:
 *   get:
 *     tags: [Student_transfer]
 *     summary: Search student_transfer
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for student_transfer
 *     responses:
 *       '200':
 *         description: List of student_transfer matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */ 
router.get('/student_transfer/search', student_transferController.searchStudentTransfer);


/**
 * @swagger
 * /api/student_transfer:
 *   get: 
 *     tags: [Student_transfer]
 *     summary: Get all student_transfer
 *     responses:
 *       '200':
 *         description: List of student_transfer
 *       '500':
 *         description: Server error
 */
router.get('/student_transfer', student_transferController.getStudentTransfer);



/**
 * @swagger
 * /api/student_transfer/{id}:
 *   get:
 *     tags: [Student_transfer]
 *     summary: Get a student_transfer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Student_transfer ID
 *     responses:
 *       '200': 
 *         description: Student_transfer details
 *       '404':
 *         description: Student_transfer not found
 *       '500':
 *         description: Server error
 */
router.get('/student_transfer/:id', student_transferController.getStudentTransferById);



/**
 * @swagger
 * /api/student_transfer/{id}:
 *   put:
 *     tags: [Student_transfer]
 *     summary: Update a student_transfer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Student_transfer ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: number
 *               old_teacher:
 *                 type: number
 *               new_teacher:
 *                 type: number
 *               reason:
 *                 type: string
 *               created_at:    
 *                 type: string
 *     responses:
 *       '200': 
 *         description: Student_transfer updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Student_transfer not found
 *       '500': 
 *         description: Server error
 */
router.put('/student_transfer/:id', student_transferController.updateStudentTransfer);



/**
 * @swagger
 * /api/student_transfer/{id}:
 *   delete:
 *     tags: [Student_transfer]
 *     summary: Delete a student_transfer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Student_transfer ID
 *     responses:
 *       '200':
 *         description: Student_transfer deleted
 *       '404':
 *         description: Student_transfer not found
 *       '500':
 *         description: Server error
 */
router.delete('/student_transfer/:id', student_transferController.deleteStudentTransfer);


module.exports = router;