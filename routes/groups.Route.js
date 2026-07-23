const express = require('express');
const router = express.Router();
const groupsController = require('../controllers/groups.Controller');

/**
 * @swagger
 * tags:
 *   name: Groups
 *   description: Groups management
 */



/**
 * @swagger
 * /api/groups:
 *   post:
 *     tags: [Groups]
 *     summary: Create a new group
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               course_id:
 *                 type: number
 *               teacher_id:
 *                 type: number
 *               room_id:
 *                 type: number
 *               name:
 *                 type: string
 *               start_date:
 *                 type: string
 *               end_date:
 *                 type: string
 *               lesson_duration:
 *                 type: number
 *               monthly_lessons:
 *                 type: number
 *               status:    
 *                 type: string
 *     responses:
 *       '201':
 *         description: Group created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/groups', groupsController.createGroups);



/**
 * @swagger
 * /api/groups/search:
 *   get:
 *     tags: [Groups]
 *     summary: Search groups by name
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for groups
 *     responses:
 *       '200':
 *         description: List of groups matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */ 
router.get('/groups/search', groupsController.searchGroups);



/**
 * @swagger
 * /api/groups:
 *   get: 
 *     tags: [Groups]
 *     summary: Get all groups
 *     responses:
 *       '200':
 *         description: List of groups
 *       '500':
 *         description: Server error
 */
router.get('/groups', groupsController.getGroups);


/**
 * @swagger
 * /api/groups/{id}:
 *   get:
 *     tags: [Groups]
 *     summary: Get a group by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Group ID
 *     responses:
 *       '200': 
 *         description: Group details
 *       '404':
 *         description: Group not found
 *       '500':
 *         description: Server error
 */
router.get('/groups/:id', groupsController.getGroupsById);


/**
 * @swagger
 * /api/groups/{id}:
 *   put:
 *     tags: [Groups]
 *     summary: Update a group by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Group ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               course_id:
 *                 type: number
 *               teacher_id:
 *                 type: number
 *               room_id:
 *                 type: number
 *               name:
 *                 type: string
 *               start_date:
 *                 type: string
 *               end_date:
 *                 type: string
 *               lesson_duration:
 *                 type: number
 *               monthly_lessons:
 *                 type: number
 *               status:    
 *                 type: string
 *     responses:
 *       '200': 
 *         description: Group updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Group not found
 *       '500': 
 *         description: Server error
 */
router.put('/groups/:id', groupsController.updateGroups);


/**
 * @swagger
 * /api/groups/{id}:
 *   delete:
 *     tags: [Groups]
 *     summary: Delete a group by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Group ID
 *     responses:
 *       '200':
 *         description: Group deleted
 *       '404':
 *         description: Group not found
 *       '500':
 *         description: Server error
 */
router.delete('/groups/:id', groupsController.deleteGroups);


module.exports = router;