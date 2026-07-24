const express = require('express');
const router = express.Router();
const schedulesController = require('../controllers/schedules.Controller');

/**
 * @swagger
 * tags:
 *   name: Schedules
 *   description: Schedules management
 */


/**
 * @swagger
 * /api/schedules:
 *   post:
 *     tags: [Schedules]
 *     summary: Create a new schedule
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               group_id:
 *                 type: number
 *               weekday:
 *                 type: number
 *               start_time:
 *                 type: string
 *               end_time:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Schedule created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/schedules', schedulesController.createSchedules);



/**
 * @swagger
 * /api/schedules/search:
 *   get:
 *     tags: [Schedules]
 *     summary: Search schedules by name
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for schedules
 *     responses:
 *       '200':
 *         description: List of schedules matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */ 
router.get('/schedules/search', schedulesController.searchSchedules);



/**
 * @swagger
 * /api/schedules:
 *   get: 
 *     tags: [Schedules]
 *     summary: Get all schedules
 *     responses:
 *       '200':
 *         description: List of schedules
 *       '500':
 *         description: Server error
 */
router.get('/schedules', schedulesController.getSchedules);


/**
 * @swagger
 * /api/schedules/{id}:
 *   get:
 *     tags: [Schedules]
 *     summary: Get a schedule by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Schedule ID
 *     responses:
 *       '200': 
 *         description: Schedule details
 *       '404':
 *         description: Schedule not found
 *       '500':
 *         description: Server error
 */
router.get('/schedules/:id', schedulesController.getSchedulesById);



/**
 * @swagger
 * /api/schedules/{id}:
 *   put:
 *     tags: [Schedules]
 *     summary: Update a schedule by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Schedule ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               group_id:
 *                 type: number
 *               weekday:
 *                 type: number
 *               start_time:
 *                 type: string
 *               end_time:
 *                 type: string
 *     responses:
 *       '200': 
 *         description: Schedule updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Schedule not found
 *       '500': 
 *         description: Server error
 */
router.put('/schedules/:id', schedulesController.updateSchedules);



/**
 * @swagger
 * /api/schedules/{id}:
 *   delete:
 *     tags: [Schedules]
 *     summary: Delete a schedule by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Schedule ID
 *     responses:
 *       '200':
 *         description: Schedule deleted
 *       '404':
 *         description: Schedule not found
 *       '500':
 *         description: Server error
 */
router.delete('/schedules/:id', schedulesController.deleteSchedules);


module.exports = router;