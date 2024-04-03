import express from "express";
import { verifyAdmin } from "../Token/verifyToken.js";
import { body } from "express-validator";

import { signUp, signIn, updateDetails } from "../Controller/admin.controller.js";

let router = express.Router();

router.post("/signUp"
    , body(`email`, `Invalid email`).notEmpty().isEmail()
    , body(`password`).notEmpty().isStrongPassword({ minLength: 5 })
    , signUp);

router.post("/signIn"
    , body(`email`, `Invalid email`).notEmpty().isEmail()
    , body(`password`).notEmpty().isStrongPassword({ minLength: 5 })
    , verifyAdmin, signIn);

router.post('/update'
    , verifyAdmin, updateDetails);
// View

export default router;
