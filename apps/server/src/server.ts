import express from 'express';
import cors from 'cors';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import { ENV } from './config/env';

import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';

// Swagger definition
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User Management API',
      version: '1.0.0',
      description: 'A simple Express User Management API',
    },
    servers: [
      {
        url: `http://localhost:${ENV.PORT}`,
      },
    ],
  },
  apis: ['./routes/*.ts'], // files containing annotations as above
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Routes
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});  

export default app;
