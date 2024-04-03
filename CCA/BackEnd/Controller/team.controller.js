import Team from '../Modal/Team.modal.js';

export const addTeam = async (request, response, next) => {
    try {
        let result = Team.create(request.body); // { team_name, total_player, contact }
        if (result.affectedRows)
            return response.status(200).json({ Message: 'Team created successfully....' });
        return response.status(201).json({ Message: 'Something went wrong....' });

    } catch (error) {
        console.log(error);
        return response.status(500).json({ Error: 'Internal server error....' });
    }
}

export const updateTeam = (request, response, next) => {
    Team.update(request.body, {
        where: { team_id: request.bosy.team_id }
    })
        .then(request => {
            console.log(request);
            return response.status(400).json({ Message: 'Team details updated' });
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Error: 'Internal Server error' });
        });
}