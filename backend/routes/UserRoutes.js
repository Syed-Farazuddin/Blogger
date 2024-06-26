import express from "express";
import {
  registerUser,
  loginUser,
  userProfile,
  updateProfile,
  updateProfilePicture,
} from "../controllers/UserControllers.js";
import { authGuard } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authGuard, userProfile);
router.put("/updateProfilePicture", authGuard, updateProfilePicture);
router.put("/updateProfile", authGuard, updateProfile);

export default router;
