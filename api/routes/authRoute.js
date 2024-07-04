import express from "express";
import { google, signIn, signOut, signUp } from "../controller/authC.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/google",google);
router.get("/signout", signOut);



export default router;