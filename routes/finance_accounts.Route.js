const express = require('express');
const router = express.Router();
const finance_accountsController = require('../controllers/finance_accounts.Controller');

/**
 * @swagger
 * tags:
 *   name: Finance_accounts
 *   description: Finance_accounts management
 */



/**
 * @swagger
 * /api/finance_accounts:
 *   post:
 *     tags: [Finance_accounts]
 *     summary: Create a new finance_accounts
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: number
 *               balance:
 *                 type: number
 *               debt:
 *                 type: number
 *               advanced_payment:
 *                 type: number
 *               due_day:
 *                 type: number
 *               status:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Finance_accounts created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/finance_accounts', finance_accountsController.createFinance_accounts);



/**
 * @swagger
 * /api/finance_accounts/search:
 *   get:
 *     tags: [Finance_accounts]
 *     summary: Search finance_accounts
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for finance_accounts
 *     responses:
 *       '200':
 *         description: List of finance_accounts matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */
router.get('/finance_accounts/search', finance_accountsController.searchFinance_accounts);



/**
 * @swagger
 * /api/finance_accounts:
 *   get: 
 *     tags: [Finance_accounts]
 *     summary: Get all finance_accounts
 *     responses:
 *       '200':
 *         description: List of finance_accounts
 *       '500':
 *         description: Server error
 */
router.get('/finance_accounts', finance_accountsController.getFinance_accounts);



/**
 * @swagger
 * /api/finance_accounts/{id}:
 *   get:
 *     tags: [Finance_accounts]
 *     summary: Get a finance_accounts by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Finance_accounts ID
 *     responses:
 *       '200': 
 *         description: Finance_accounts details
 *       '404':
 *         description: Finance_accounts not found
 *       '500':
 *         description: Server error
 */
router.get('/finance_accounts/:id', finance_accountsController.getFinance_accountsById);



/**
 * @swagger
 * /api/finance_accounts/{id}:
 *   put:
 *     tags: [Finance_accounts]
 *     summary: Update a finance_accounts by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Finance_accounts ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               student_id:
 *                 type: number
 *               balance:
 *                 type: number
 *               debt:
 *                 type: number
 *               advanced_payment:
 *                 type: number
 *               due_day:
 *                 type: number
 *               status:
 *                 type: string
 *     responses:
 *       '200': 
 *         description: Finance_accounts updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Finance_accounts not found
 *       '500': 
 *         description: Server error
 */
router.put('/finance_accounts/:id', finance_accountsController.updateFinance_accounts);


/**
 * @swagger
 * /api/finance_accounts/{id}:
 *   delete:
 *     tags: [Finance_accounts]
 *     summary: Delete a finance_accounts by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Finance_accounts ID
 *     responses:
 *       '200':
 *         description: Finance_accounts deleted
 *       '404':
 *         description: Finance_accounts not found
 *       '500':
 *         description: Server error
 */
router.delete('/finance_accounts/:id', finance_accountsController.deleteFinance_accounts);


module.exports = router;