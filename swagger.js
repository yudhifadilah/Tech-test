const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const path = require('path');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Travel Booking API',
      version: '1.0.0',
      description: 'API for travel booking system',
    },
    servers: [
      {
        url: 'http://localhost:3000/api', // URL base API
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: [path.resolve(__dirname, './docs/*.js')], // Path ke file-file rute API
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };
