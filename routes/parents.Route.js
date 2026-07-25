const express = require('express');
const router = express.Router();
const parentsController = require('../controllers/parents.Controller');

/**
 * @swagger
 * tags:
 *   name: Parents
 *   description: Parents management
 */


/**
 * @swagger
 * /api/parents:
 *   post:
 *     tags: [Parents]
 *     summary: Create a new parent
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullname:  
 *                 type: string  
 *               phone:  
 *                 type: string  
 *               phone2:    
 *                 type: string  
 *               relation:  
 *                 type: string  
 *               telegram:  
 *                 type: string 
 *               created_at:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Parent created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/parents', parentsController.createParents);


/**
 * @swagger
 * /api/parents/search:
 *   get:
 *     tags: [Parents]
 *     summary: Search parents by fullname, phone 
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for parents
 *     responses:
 *       '200':
 *         description: List of parents matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */
router.get('/parents/search', parentsController.searchParents);



/**
 * @swagger
 * /api/parents:
 *   get: 
 *     tags: [Parents]
 *     summary: Get all parents
 *     responses:
 *       '200':
 *         description: List of parents
 *       '500':
 *         description: Server error
 */
router.get('/parents', parentsController.getParents);


/**
 * @swagger
 * /api/parents/{id}:
 *   get:
 *     tags: [Parents]
 *     summary: Get a parent by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Parent ID
 *     responses:
 *       '200': 
 *         description: Parent details
 *       '404':
 *         description: Parent not found
 *       '500':
 *         description: Server error
 */
router.get('/parents/:id', parentsController.getParentsById);



/**
 * @swagger
 * /api/parents/{id}:
 *   put:
 *     tags: [Parents]
 *     summary: Update a parent by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullname:  
 *                 type: string  
 *               phone:  
 *                 type: string  
 *               phone2:    
 *                 type: string  
 *               relation:  
 *                 type: string  
 *               telegram:  
 *                 type: string 
 *               created_at:
 *                 type: string
 *     responses:
 *       '200': 
 *         description: Parent updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Parent not found
 *       '500': 
 *         description: Server error
 */
router.put('/parents/:id', parentsController.updateParents);



/**
 * @swagger
 * /api/parents/{id}:
 *   delete:
 *     tags: [Parents]
 *     summary: Delete a parent by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Parent ID
 *     responses:
 *       '200':
 *         description: Parent deleted
 *       '404':
 *         description: Parent not found
 *       '500':
 *         description: Server error
 */
router.delete('/parents/:id', parentsController.deleteParents); 


module.exports = router;