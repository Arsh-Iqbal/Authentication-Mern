import express, { Router } from "express";
import { updateUser , deleteUser} from "../controller/userC.js";
import { isAuthenticatedUser } from "../utils/verifyToken.js";


const router = express.Router();

router.put("/update/:id", isAuthenticatedUser ,updateUser);
router.delete("/delete/:id", isAuthenticatedUser ,deleteUser);
export default router;