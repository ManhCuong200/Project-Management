import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Project Management API",
      version: "1.0.0",
      description: "CRUD API for Users & Projects",
    },
    servers: [
      {
        url: process.env.API_URL,
        description: "Project Management API",
      },
    ],
    components: {
      schemas: {
        User: {
          type: "object",
          required: ["name", "email"],
          properties: {
            _id: { type: "string" },
            name: { type: "string" },
            email: { type: "string" },
            phone: { type: "string" },
          },
        },
        Project: {
          type: "object",
          required: ["name", "owner"],
          properties: {
            _id: { type: "string" },
            name: { type: "string" },
            description: { type: "string" },
            startDate: { type: "string", format: "date" },
            status: { type: "string" },
            owner: { 
              type: "string",
              description: "User ID",
            },
          },
        },
        ErrorResponse: {
          type: "object",
          properties: {
            success: { type: "boolean" },
            message: { type: "string" },
            errorCode: { type: "string" },
          },
        },
      },
    },
  },
  apis: ["./src/routes/*.js"],
};

export const swaggerSpec = swaggerJsdoc(options);
export const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("📘 Swagger ready at http://localhost:3001/api-docs");
};
