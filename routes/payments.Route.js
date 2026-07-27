const express = require('express');
const router = express.Router();
const paymentsController = require('../controllers/payments.Controller');

/**
 * @swagger
 * tags:
 *   name: Payments
 *   description: Payments management
 */



/**
 * @swagger
 * /api/payments:
 *   post:
 *     tags: [Payments]
 *     summary: Create a new payment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               finance_account_id:
 *                 type: number
 *               amount:
 *                 type: number
 *               payment_type:
 *                 type: string
 *               paid_at:
 *                 type: string
 *               cashier_id:
 *                 type: number
 *     responses:
 *       '201':
 *         description: Payment created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/payments', paymentsController.createPayments);


/**
 * @swagger
 * /api/payments/search:
 *   get:
 *     tags: [Payments]
 *     summary: Search payments
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for payments
 *     responses:
 *       '200':
 *         description: List of payments matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */
router.get('/payments/search', paymentsController.searchPayments);


/**
 * @swagger
 * /api/payments:
 *   get: 
 *     tags: [Payments]
 *     summary: Get all payments
 *     responses:
 *       '200':
 *         description: List of payments
 *       '500':
 *         description: Server error
 */
router.get('/payments', paymentsController.getPayments);



/**
 * @swagger
 * /api/payments/{id}:
 *   get:
 *     tags: [Payments]
 *     summary: Get a payment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payment ID
 *     responses:
 *       '200': 
 *         description: Payment details
 *       '404':
 *         description: Payment not found
 *       '500':
 *         description: Server error
 */
router.get('/payments/:id', paymentsController.getPaymentsById);


/**
 * @swagger
 * /api/payments/{id}:
 *   put:
 *     tags: [Payments]
 *     summary: Update a payment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Payment ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               finance_account_id:
 *                 type: number
 *               amount:
 *                 type: number
 *               payment_type:
 *                 type: string
 *               paid_at:
 *                 type: string
 *               cashier_id:
 *                 type: number
 *     responses:
 *       '200': 
 *         description: Payment updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Payment not found
 *       '500': 
 *         description: Server error
 */
router.put('/payments/:id', paymentsController.updatePayments);



/**
 * @swagger
 * /api/payments/{id}:
 *   delete:
 *     tags: [Payments]
 *     summary: Delete a payment by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Payment ID
 *     responses:
 *       '200':
 *         description: Payment deleted
 *       '404':
 *         description: Payment not found
 *       '500':
 *         description: Server error
 */
router.delete('/payments/:id', paymentsController.deletePayments);


module.exports = router;