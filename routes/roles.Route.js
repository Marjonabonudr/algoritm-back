const express = require('express');
const router = express.Router();
const rolesController = require('../controllers/roles.Controller');

/**
 * @swagger
 * tags:
 *   name: Roles
 *   description: Roles management
 */


/**
 * @swagger
 * /api/roles:
 *   post:
 *     tags: [Roles]
 *     summary: Create a new role
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               level:
 *                 type: number
 *               created_at:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Role created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/roles', rolesController.createRoles);



/**
 * @swagger
 * /api/roles/search:
 *   get:
 *     tags: [Roles]
 *     summary: Search roles by name or level
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for roles
 *     responses:
 *       '200':
 *         description: List of roles matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */ 
router.get('/roles/search', rolesController.searchRoles);


/**
 * @swagger
 * /api/roles:
 *   get: 
 *     tags: [Roles]
 *     summary: Get all roles
 *     responses:
 *       '200':
 *         description: List of roles
 *       '500':
 *         description: Server error
 */
router.get('/roles', rolesController.getRoles);



/**
 * @swagger
 * /api/roles/{id}:
 *   get:
 *     tags: [Roles]
 *     summary: Get a role by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Role ID
 *     responses:
 *       '200': 
 *         description: Role details
 *       '404':
 *         description: Role not found
 *       '500':
 *         description: Server error
 */
router.get('/roles/:id', rolesController.getRolesById);



/**
 * @swagger
 * /api/roles/{id}:
 *   put:
 *     tags: [Roles]
 *     summary: Update a role by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Role ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               level:
 *                 type: number
 *               created_at:
 *                 type: string
 *     responses:
 *       '200': 
 *         description: Role updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Role not found
 *       '500': 
 *         description: Server error
 */
router.put('/roles/:id', rolesController.updateRoles);



/**
 * @swagger
 * /api/roles/{id}:
 *   delete:
 *     tags: [Roles]
 *     summary: Delete a role by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Role ID
 *     responses:
 *       '200':
 *         description: Role deleted
 *       '404':
 *         description: Role not found
 *       '500':
 *         description: Server error
 */
router.delete('/roles/:id', rolesController.deleteRoles);


module.exports = router;