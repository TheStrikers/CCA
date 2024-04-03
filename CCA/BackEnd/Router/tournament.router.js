import express from 'express';
import { viewTournamentByOrganizer, register, addTournament, viewAllTournament, particularTournament } from '../Controller/Tournament.controller.js';
import { verifyOrganizer } from '../Token/verifyToken.js';
import { body } from 'express-validator';

const router = express.Router();

router.post('/addTournament',verifyOrganizer, addTournament);
router.post('/register', verifyOrganizer, register);
router.get('/viewAllTournament', verifyOrganizer, viewAllTournament);
router.post('/viewParticular', verifyOrganizer, particularTournament);
router.get('/viewTournamentByOrganizer/:organizer_id',
    body(`organizer_id`).isEmpty(),
    viewTournamentByOrganizer);
// update

export default router;
