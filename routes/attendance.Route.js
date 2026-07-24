const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendance.Controller');

/**
 * @swagger
 * tags:
 *   name: Attendance
 *   description: Attendance management
 */


/**
 * @swagger
 * /api/attendance:
 *   post:
 *     tags: [Attendance]
 *     summary: Create a new attendance
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
 *               status:
 *                 type: string
 *               late_minutes:
 *                 type: number
 *               penalty:
 *                 type: boolean
 *               reason:
 *                 type: string 
 *     responses:
 *       '201':
 *         description: Attendance created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/attendance', attendanceController.createAttendance);


/**
 * @swagger
 * /api/attendance/search:
 *   get:
 *     tags: [Attendance]
 *     summary: Search attendance by lesson or student
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for attendance
 *     responses:
 *       '200':
 *         description: List of attendance matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */ 
router.get('/attendance/search', attendanceController.searchAttendance);


/**
 * @swagger
 * /api/attendance:
 *   get: 
 *     tags: [Attendance]
 *     summary: Get all attendance
 *     responses:
 *       '200':
 *         description: List of attendance
 *       '500':
 *         description: Server error
 */
router.get('/attendance', attendanceController.getAttendance);


/**
 * @swagger
 * /api/attendance/{id}:
 *   get:
 *     tags: [Attendance]
 *     summary: Get a attendance by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Attendance ID
 *     responses:
 *       '200': 
 *         description: Attendance details
 *       '404':
 *         description: Attendance not found
 *       '500':
 *         description: Server error
 */
router.get('/attendance/:id', attendanceController.getAttendanceById);


/**
 * @swagger
 * /api/attendance/{id}:
 *   put:
 *     tags: [Attendance]
 *     summary: Update a attendance by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Attendance ID
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
 *               status:
 *                 type: string
 *               late_minutes:
 *                 type: number
 *               penalty:
 *                 type: boolean
 *               reason:
 *                 type: string 
 *     responses:
 *       '200': 
 *         description: Attendance updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Attendance not found
 *       '500': 
 *         description: Server error
 */
router.put('/attendance/:id', attendanceController.updateAttendance);



/**
 * @swagger
 * /api/attendance/{id}:
 *   delete:
 *     tags: [Attendance]
 *     summary: Delete attendance by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Attendance ID
 *     responses:
 *       '200':
 *         description: Attendance deleted
 *       '404':
 *         description: Attendance not found
 *       '500':
 *         description: Server error
 */
router.delete('/attendance/:id', attendanceController.deleteAttendance);


module.exports = router;