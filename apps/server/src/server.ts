import express from "express";
import cors from "cors";

import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";

import { ENV } from "./config/env";

import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";

const app = express();

app.use(cors({ origin: "*" }));
app.options("*", cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});

export default app;
