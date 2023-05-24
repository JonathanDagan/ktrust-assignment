import swaggerJsdoc from "swagger-jsdoc";

// Swagger definition
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User Management API",
      version: "1.0.0",
      description: "A simple Express User Management API",
    },
  },
  components: {
    schemas: {
      User: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "The auto-generated id of the user",
          },
          name: { type: "string", description: "The name of the user" },
          email: { type: "string", description: "The email of the user" },
          role: { type: "string", description: "The role of the user" },
        },
      },
    },
  },
  apis: ["src/routes/*.ts"], // files containing annotations as above
};

export const swaggerSpec = swaggerJsdoc(swaggerOptions);
