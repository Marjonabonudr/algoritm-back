const express = require('express');
const router = express.Router();
const call_logsController = require('../controllers/call_logs.Controller');

/**
 * @swagger
 * tags:
 *   name: Call_logs
 *   description: Call_logs management
 */



/**
 * @swagger
 * /api/call_logs:
 *   post:
 *     tags: [Call_logs]
 *     summary: Create a new call_logs
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: number
 *               attendance_id:
 *                 type: number
 *               operator:
 *                 type: number
 *               result:
 *                 type: string
 *               reason:
 *                 type: string
 *               called_at:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Call_logs created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/call_logs', call_logsController.createCall_logs);


/**
 * @swagger
 * /api/call_logs/search:
 *   get:
 *     tags: [Call_logs]
 *     summary: Search call_logs
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for call_logs
 *     responses:
 *       '200':
 *         description: List of call_logs matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */
router.get('/call_logs/search', call_logsController.searchCall_logs);


/**
 * @swagger
 * /api/call_logs:
 *   get: 
 *     tags: [Call_logs]
 *     summary: Get all call_logs
 *     responses:
 *       '200':
 *         description: List of call_logs
 *       '500':
 *         description: Server error
 */
router.get('/call_logs', call_logsController.getCall_logs);



/**
 * @swagger
 * /api/call_logs/{id}:
 *   get:
 *     tags: [Call_logs]
 *     summary: Get a call_logs by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Call_logs ID
 *     responses:
 *       '200': 
 *         description: Call_logs details
 *       '404':
 *         description: Call_logs not found
 *       '500':
 *         description: Server error
 */
router.get('/call_logs/:id', call_logsController.getCall_logsById);



/**
 * @swagger
 * /api/call_logs/{id}:
 *   put:
 *     tags: [Call_logs]
 *     summary: Update a call_logs by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Call_logs ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: number
 *               attendance_id:
 *                 type: number
 *               operator:
 *                 type: number
 *               result:
 *                 type: string
 *               reason:
 *                 type: string
 *               called_at:
 *                 type: string
 *     responses:
 *       '200': 
 *         description: Call_logs updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Call_logs not found
 *       '500': 
 *         description: Server error
 */
router.put('/call_logs/:id', call_logsController.updateCall_logs);


/**
 * @swagger
 * /api/call_logs/{id}:
 *   delete:
 *     tags: [Call_logs]
 *     summary: Delete a call_logs by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Call_logs ID
 *     responses:
 *       '200':
 *         description: Call_logs deleted
 *       '404':
 *         description: Call_logs not found
 *       '500':
 *         description: Server error
 */
router.delete('/call_logs/:id', call_logsController.deleteCall_logs);


module.exports = router;