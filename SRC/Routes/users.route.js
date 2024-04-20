import { Router } from "express";
import * as userController from "../Controllers/user.controller.js";
import { adminMiddleware } from "../middleware/admin.middleware.js";
import { authMiddleware } from "../middleware/authen.middleware.js";

const userRoute = Router();

// userRoute.use(authMiddleware);
userRoute.get("/", adminMiddleware, authMiddleware, userController.getAllUsers);

export default userRoute;