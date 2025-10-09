import express from "express"
import { login, logout, signup, updateProfile, checkAuth } from "../controllers/auth.controller.js"
import { protectRoute } from "../middleware/auth.middleware.js"
const router = express.Router()

router.post("/signup",signup)    // signup route
router.post("/login",login)         // login route
router.post("/logout",logout)               // logout route

router.put("/update-profile", protectRoute ,updateProfile) // update profile route

router.get("/check", protectRoute, checkAuth) // check auth route

export default router
