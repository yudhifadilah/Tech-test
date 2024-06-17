/**
 * @swagger
 * tags:
 *   name: Drivers
 *   description: API endpoints for managing drivers
 */

/**
 * @swagger
 * /drivers/register:
 *   post:
 *     summary: Register as a new driver
 *     tags: [Drivers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Driver registered successfully
 *       '500':
 *         description: Error registering driver
 */

/**
 * @swagger
 * /drivers/login:
 *   post:
 *     summary: Login driver and get JWT token
 *     tags: [Drivers]
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
 *         description: Authentication successful
 *       '401':
 *         description: Authentication failed
 *       '500':
 *         description: Error logging in
 */

/**
 * @swagger
 * /drivers/orders:
 *   get:
 *     summary: Get available travel orders for drivers
 *     tags: [Drivers]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: List of available orders
 *       '401':
 *         description: Unauthorized access
 *       '500':
 *         description: Error fetching orders
 */

/**
 * @swagger
 * /drivers/accept-order:
 *   post:
 *     summary: Accept a travel order
 *     tags: [Drivers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: integer
 *     responses:
 *       '200':
 *         description: Order accepted successfully
 *       '400':
 *         description: Order has already been accepted or not found
 *       '500':
 *         description: Error accepting order
 */

// Tambahkan rute lainnya untuk driver di sini
