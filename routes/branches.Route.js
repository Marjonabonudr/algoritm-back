const express = require('express');
const router = express.Router();
const branchesController = require('../controllers/branches.Controller');

/**
 * @swagger
 * tags:
 *   name: Branches
 *   description: Branches management
 */


/**
 * @swagger
 * /api/branches:
 *   post:
 *     tags: [Branches]
 *     summary: Create a new branch
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               created_at:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Branch created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/branches', branchesController.createBranches);


/**
 * @swagger
 * /api/branches/search:
 *   get:
 *     tags: [Branches]
 *     summary: Search branches by name or address
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for branches
 *     responses:
 *       '200':
 *         description: List of branches matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */ 
router.get('/branches/search', branchesController.searchBranches);


/**
 * @swagger
 * /api/branches:
 *   get: 
 *     tags: [Branches]
 *     summary: Get all branches
 *     responses:
 *       '200':
 *         description: List of branches
 *       '500':
 *         description: Server error
 */
router.get('/branches', branchesController.getBranches);


/**
 * @swagger
 * /api/branches/{id}:
 *   get:
 *     tags: [Branches]
 *     summary: Get a branch by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Branch ID
 *     responses:
 *       '200': 
 *         description: Branch details
 *       '404':
 *         description: Branch not found
 *       '500':
 *         description: Server error
 */
router.get('/branches/:id', branchesController.getBranchesById);



/**
 * @swagger
 * /api/branches/{id}:
 *   put:
 *     tags: [Branches]
 *     summary: Update a branch by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Branch ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               created_at:
 *                 type: string
 *     responses:
 *       '200': 
 *         description: Branch updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Branch not found
 *       '500': 
 *         description: Server error
 */
router.put('/branches/:id', branchesController.updateBranches);



/**
 * @swagger
 * /api/branches/{id}:
 *   delete:
 *     tags: [Branches]
 *     summary: Delete a branch by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Branch ID
 *     responses:
 *       '200':
 *         description: Branch deleted
 *       '404':
 *         description: Branch not found
 *       '500':
 *         description: Server error
 */
router.delete('/branches/:id', branchesController.deleteBranches);

module.exports = router;