import express from "express";
import {
  loginController,
  registerController,
  userDataController,
} from "../controllers/userController.js";
import { requireSignIn } from "../middleware/userMiddleware.js";

const router = express.Router();

// Login
router.post("/login", loginController);

// Register
router.post("/register", registerController);

router.post("/userData", requireSignIn, userDataController);

export default router;
