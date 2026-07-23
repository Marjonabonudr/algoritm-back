const express = require('express');
const router = express.Router();
const roomsController = require('../controllers/rooms.Controller');

/**
 * @swagger
 * tags:
 *   name: Rooms
 *   description: Rooms management
 */



/**
 * @swagger
 * /api/rooms:
 *   post:
 *     tags: [Rooms]
 *     summary: Create a new room
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               branch_id:
 *                 type: number
 *               name:
 *                 type: string
 *               capacity:
 *                 type: number
 *     responses:
 *       '201':
 *         description: Room created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/rooms', roomsController.createRooms);



/**
 * @swagger
 * /api/rooms/search:
 *   get:
 *     tags: [Rooms]
 *     summary: Search rooms by name or capacity
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for rooms
 *     responses:
 *       '200':
 *         description: List of rooms matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */ 
router.get('/rooms/search', roomsController.searchRooms);


/**
 * @swagger
 * /api/rooms:
 *   get: 
 *     tags: [Rooms]
 *     summary: Get all rooms
 *     responses:
 *       '200':
 *         description: List of rooms
 *       '500':
 *         description: Server error
 */
router.get('/rooms', roomsController.getRooms);


/**
 * @swagger
 * /api/rooms/{id}:
 *   get:
 *     tags: [Rooms]
 *     summary: Get a room by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Room ID
 *     responses:
 *       '200': 
 *         description: Room details
 *       '404':
 *         description: Room not found
 *       '500':
 *         description: Server error
 */
router.get('/rooms/:id', roomsController.getRoomsById);



/**
 * @swagger
 * /api/rooms/{id}:
 *   put:
 *     tags: [Rooms]
 *     summary: Update a room by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Room ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               branch_id:
 *                 type: number
 *               name:
 *                 type: string
 *               capacity:
 *                 type: number
 *     responses:
 *       '200': 
 *         description: Room updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Room not found
 *       '500': 
 *         description: Server error
 */
router.put('/rooms/:id', roomsController.updateRooms);



/**
 * @swagger
 * /api/rooms/{id}:
 *   delete:
 *     tags: [Rooms]
 *     summary: Delete a room by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Room ID
 *     responses:
 *       '200':
 *         description: Room deleted
 *       '404':
 *         description: Room not found
 *       '500':
 *         description: Server error
 */
router.delete('/rooms/:id', roomsController.deleteRooms)


module.exports = router