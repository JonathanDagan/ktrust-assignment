import express from "express";
import cors from "cors";

import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";

import { ENV } from "./config/env";

import apiRouter from "./routes";
import generalErrorHandler from "./middleware/errorHandeling/generalErrorHandler";
import {
  authErrorHandler,
  prismaErrorHandler,
} from "./middleware/errorHandeling";


const app = express();

app.use(cors({ origin: "*" }));
app.options("*", cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Routes
app.use("/api", apiRouter);

app.use(authErrorHandler, prismaErrorHandler, generalErrorHandler);

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});

export default app;
