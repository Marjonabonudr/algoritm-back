const express = require('express');
const router = express.Router();
const grantsController = require('../controllers/grants.Controller');


/**
 * @swagger
 * tags:
 *   name: Grants
 *   description: Grants management
 */


/**
 * @swagger
 * /api/grants:
 *   post:
 *     tags: [Grants]
 *     summary: Create a new grant
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: number
 *               type:
 *                 type: string
 *               percent:
 *                 type: number
 *               sponsor:
 *                 type: string
 *               start_date:
 *                 type: string
 *               end_date:
 *                 type: string 
 *     responses:
 *       '201':
 *         description: Grant created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/grants', grantsController.createGrants);



/**
 * @swagger
 * /api/grants/search:
 *   get:
 *     tags: [Grants]
 *     summary: Search grants by name
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for grants
 *     responses:
 *       '200':
 *         description: List of grants matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */
router.get('/grants/search', grantsController.searchGrants);


/**
 * @swagger
 * /api/grants:
 *   get: 
 *     tags: [Grants]
 *     summary: Get all grants
 *     responses:
 *       '200':
 *         description: List of grants
 *       '500':
 *         description: Server error
 */
router.get('/grants', grantsController.getGrants);


/**
 * @swagger
 * /api/grants/{id}:
 *   get:
 *     tags: [Grants]
 *     summary: Get a grant by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Grant ID    
 *     responses:
 *       '200': 
 *         description: Grant details
 *       '404':
 *         description: Grant not found
 *       '500':
 *         description: Server error
 */
router.get('/grants/:id', grantsController.getGrantsById);


/**
 * @swagger
 * /api/grants/{id}:
 *   put:
 *     tags: [Grants]
 *     summary: Update a grant by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Grant ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: number
 *               type:
 *                 type: string
 *               percent:
 *                 type: number
 *               sponsor:
 *                 type: string
 *               start_date:
 *                 type: string
 *               end_date:
 *                 type: string 
 *     responses:
 *       '200': 
 *         description: Grant updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Grant not found
 *       '500': 
 *         description: Server error
 */
router.put('/grants/:id', grantsController.updateGrants);


/**
 * @swagger
 * /api/grants/{id}:
 *   delete:
 *     tags: [Grants]
 *     summary: Delete a grant by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Grant ID
 *     responses:
 *       '200':
 *         description: Grant deleted
 *       '404':
 *         description: Grant not found
 *       '500':
 *         description: Server error
 */
router.delete('/grants/:id', grantsController.deleteGrants);


module.exports = router;