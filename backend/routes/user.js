import express from 'express'
import { handleAuth, handleLogin, handleLogout, handleRegister } from '../controllers/user.js';

const saltRounds = 10;
const router = express.Router()

router.post("/login", handleLogin)

router.get("/auth", handleAuth)

router.post("/logout", handleLogout)

router.post("/register", handleRegister)

export default router