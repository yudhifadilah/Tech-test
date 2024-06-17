/**
 * @swagger
 * tags:
 *   name: Orders
 *   description: API endpoints for managing travel orders
 */

/**
 * @swagger
 * /orders/status:
 *   get:
 *     summary: Get current status of the travel order
 *     tags: [Orders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: Current status of the order
 *       '401':
 *         description: Unauthorized access
 *       '500':
 *         description: Error fetching order status
 */

// Tambahkan rute lainnya untuk pesanan di sini
