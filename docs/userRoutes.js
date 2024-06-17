/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API endpoints for managing users
 */

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
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
 *         description: User registered successfully
 *       '500':
 *         description: Error registering user
 */

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Login user and get JWT token
 *     tags: [Users]
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
 * /users/orders:
 *   get:
 *     summary: Get current user's orders
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       '200':
 *         description: List of user's orders
 *       '401':
 *         description: Unauthorized access
 *       '500':
 *         description: Error fetching orders
 */

/**
 * @swagger
 * /users/create:
 *   post:
 *     summary: Create a new travel order
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pickup_location:
 *                 type: string
 *               destination:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Order created successfully
 *       '500':
 *         description: Error creating order
 */

// Tambahkan rute lainnya untuk pengguna di sini
