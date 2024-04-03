import express from 'express';
import { addTeam, updateTeam } from '../Controller/team.controller.js';

const router = express.Router();

router.post('/add', addTeam);
router.post('/update', updateTeam);
// veiwAll
// viewParticular

export default router;
