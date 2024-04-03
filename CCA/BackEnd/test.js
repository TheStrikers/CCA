import './Modal/Admin.modal.js';
import './Modal/Category.modal.js';
// import './Modal/TournamentRequest.modal.js';
import './Modal/Association.modal.js';
import './Modal/Organizer.modal.js';
import './Modal/Player.modal.js';
import './Modal/Team.modal.js';
import './Modal/TournamentTeam.modal.js';
import './Modal/SubCategory.modal.js';
import './Modal/TeamDetail.modal.js';
import './Modal/TeamRequest.modal.js';
import './Modal/Tournament.modal.js';
// import './Modal/'
import express from 'express';

let app = express();

app.listen(3000, () => {
    console.log("Server started....");
});

