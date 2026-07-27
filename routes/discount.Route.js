const express = require('express');
const router = express.Router();
const discountController = require('../controllers/discounts.Controller');

/**
 * @swagger
 * tags:
 *   name: Discounts
 *   description: Discounts management
 */



/**
 * @swagger
 * /api/discounts:
 *   post:
 *     tags: [Discounts]
 *     summary: Create a new discount
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
 *               amount:
 *                 type: number
 *               reason:
 *                 type: string
 *               start_date:
 *                 type: string
 *               end_date:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Discount created
 *       '400':
 *         description: Invalid input
 *       '500':
 *         description: Server error
 */
router.post('/discounts', discountController.createDiscounts);


/**
 * @swagger
 * /api/discounts/search:
 *   get:
 *     tags: [Discounts]
 *     summary: Search discounts by name
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query for discounts
 *     responses:
 *       '200':
 *         description: List of discounts matching the search query
 *       '404':
 *         description: Search query is required
 *       '500':
 *         description: Server error
 */
router.get('/discounts/search', discountController.searchDiscounts);



/**
 * @swagger
 * /api/discounts:
 *   get: 
 *     tags: [Discounts]
 *     summary: Get all discounts
 *     responses:
 *       '200':
 *         description: List of discounts
 *       '500':
 *         description: Server error
 */
router.get('/discounts', discountController.getDiscounts);



/**
 * @swagger
 * /api/discounts/{id}:
 *   get:
 *     tags: [Discounts]
 *     summary: Get a discount by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Discount ID
 *     responses:
 *       '200': 
 *         description: Discount details
 *       '404':
 *         description: Discount not found
 *       '500':
 *         description: Server error
 */
router.get('/discounts/:id', discountController.getDiscountsById);




/**
 * @swagger
 * /api/discounts/{id}:
 *   put:
 *     tags: [Discounts]
 *     summary: Update a discount by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Discount ID
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
 *               amount:
 *                 type: number
 *               reason:
 *                 type: string
 *               start_date:
 *                 type: string
 *               end_date:
 *                 type: string
 *     responses:
 *       '200': 
 *         description: Discount updated
 *       '400':
 *         description: Invalid input
 *       '404': 
 *         description: Discount not found
 *       '500': 
 *         description: Server error
 */
router.put('/discounts/:id', discountController.updateDiscounts);


/**
 * @swagger
 * /api/discounts/{id}:
 *   delete:
 *     tags: [Discounts]
 *     summary: Delete a discount by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema: 
 *           type: integer
 *         required: true
 *         description: Discount ID
 *     responses:
 *       '200':
 *         description: Discount deleted
 *       '404':
 *         description: Discount not found
 *       '500':
 *         description: Server error
 */
router.delete('/discounts/:id', discountController.deleteDiscounts);


module.exports = router;