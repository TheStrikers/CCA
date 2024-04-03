import express from "express";

import { removeCategory, addCategory } from '../Controller/category.controller.js';
import { verifyAdmin } from "../Token/verifyToken.js";

let router = express.Router();

router.post('/add', addCategory);
router.delete('/remove', removeCategory);
// update category
// view category

export default router;