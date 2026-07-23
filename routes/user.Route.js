const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.Controller');

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Users management
 */



/**
 * @swagger
 * /api/users:
 *   post:
 *     tags: [Users]
 *     summary: Create a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               role_id:
 *                 type: number
 *               fullname:
 *                 type: string
 *               phone:
 *                 type: string
 *               email:
 *                 type: string
 *               password_hash:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               created_at:
 *                 type: string
 *               updated_at:    
 *                 type: string
 *     responses:
 *       '201':
 *         description: User created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/users', userController.createUser);


/**
 * @swagger
 * /api/users/login:
 *   post:
 *     tags: [Users]
 *     summary: Login a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Login successful, returns user data and JWT token
 *       '400':
 *         description: Invalid input
 *       '404':
 *         description: Email yoki parol notogri
 *       '500':
 *         description: Server error
 */
router.post('/users/login', userController.loginUser);


/**
 * @swagger
 * /api/users/search:
 *   get:
 *     tags: [Users]
 *     summary: Search users by fullname, phone or email
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for users
 *     responses:
 *       '200':
 *         description: List of users matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */ 
router.get('/users/search', userController.searchUsers);


/**
 * @swagger
 * /api/users:
 *   get: 
 *     tags: [Users]
 *     summary: Get all users
 *     responses:
 *       '200':
 *         description: List of users
 *       '500':
 *         description: Server error
 */
router.get('/users', userController.getUsers);


/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     tags: [Users]
 *     summary: Get a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *     responses:
 *       '200': 
 *         description: User details
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Server error
 */
router.get('/users/:id', userController.gerUsersById);



/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     tags: [Users]
 *     summary: Update a user by ID
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
 *               role_id:
 *                 type: number
 *               fullname:
 *                 type: string
 *               phone:
 *                 type: string
 *               email:
 *                 type: string
 *               password_hash:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               created_at:
 *                 type: string
 *               updated_at:
 *                 type: string
 *     responses:
 *       '200': 
 *         description: User updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: User not found
 *       '500': 
 *         description: Server error
 */
router.put('/users/:id', userController.updateUsers);



/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     tags: [Users]
 *     summary: Delete a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: User ID
 *     responses:
 *       '200':
 *         description: User deleted
 *       '404':
 *         description: User not found
 *       '500':
 *         description: Server error
 */
router.delete('/users/:id', userController.deleteUsers);


module.exports = router;