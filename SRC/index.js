import dotenv from "dotenv";
import express from "express";
import authRoute from "./Routes/authen.route.js";
import userRoute from "./Routes/users.route.js";
import { authMiddleware } from "./middleware/authen.middleware.js";

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/auth", authRoute);
app.use(authMiddleware);
app.use("/users", userRoute);

// catch all route
app.all("*", (req, res) => {
  res.status(404);
  res.json({
    message: "Not found",
  });
});

export default app;