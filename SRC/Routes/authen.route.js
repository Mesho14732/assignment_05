import { Router } from "express";
import * as authController from "../Controllers/authen.controller.js";
import { generateMiddleWare } from "../middleware/route.middleware.js";
import { loginSchema, registerSchema } from "../validation/authen.validation.js";
import * as authService from "../services/user.service.js"

const authRoute = Router();

authRoute.post("/login", generateMiddleWare(loginSchema), authController.login);
authRoute.post( "/register", generateMiddleWare(registerSchema), authController.register
);
authRoute.post( "/register", generateMiddleWare(registerSchema), authService.register
);


export default authRoute;