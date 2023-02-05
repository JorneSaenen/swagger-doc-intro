import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import {
  Movies,
  Movie,
  MovieInput,
  DeleteResponse,
  Unauthorized,
  Error,
} from './schemas/moviesSchema.js';

// Swagger definition - https://swagger.io/specification/
// Swagger UI - https://swagger.io/tools/swagger-ui/
// Swagger reference - https://swagger.io/docs/specification/components/
// Swagger authentication - https://swagger.io/docs/specification/authentication/
// Swagger Editor - https://editor.swagger.io/
// Swagger UI Express - https://www.npmjs.com/package/swagger-ui-express
// Swagger JSDoc - https://www.npmjs.com/package/swagger-jsdoc

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Our movie API',
      version: '1.0.0',
      description:
        'This is a movie API build with the best class in the world!',
      contact: {
        name: 'Syntra AB - NodeJS team!',
        url: 'https://www.syntra-ab.be/',
      },
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
        },
      },
      schemas: {
        Movies,
        Movie,
        MovieInput,
        DeleteResponse,
      },
      responses: {
        Error,
        Unauthorized,
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local server',
      },
    ],
  },
  apis: ['./routes/*.js', './models/*.js'],
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const specs = swaggerJSDoc(options);

// Swagger middleware and serve swagger-ui
const swagger = (app) => {
  // Swagger page
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

  // Swagger json
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(specs);
  });
  console.log(`Swagger docs: ${process.env.BASE_URL}/api-docs`);
};

export default swagger;