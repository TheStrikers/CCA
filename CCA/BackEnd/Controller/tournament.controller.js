import { response } from 'express';
import Tournament from '../Modal/Tournament.modal.js';

export const addTournament = (request, response, next) => {
    Tournament.create(request.body)
        .then(result => {
            console.log(result);
            if (result)
                return response.status(200).json({ Message: 'Tournament registered successfully' });
            return response.status(201).json({ Message: 'Somthing wrong' });
        })
        .catch(error => {
            console.log(error);
            return response.status(500).json({ Error: 'Internal server error....' });
        })
} // ✔️

export const viewAllTournament = async (request, response, next) => {
    try {
        let result = await Tournament.findAll();

        if (result)
            return response.status(200).json({ Message: 'All Tournament List', Tournaments: result });
        return response.status(201).json({ Message: 'No Tournament found' });

    } catch (error) {
        console.log(error);
        return response.status(500).json({ Error: "Internal server error..." });
    }
} // ✔️

export const particularTournament = (request, response, next) => {
    Tournament.findOne({ where: request.body })
        .then(Data => {
            if (Data)
                return response.status(200).json({ Message: 'Tournament details', Data });
            return response.status(201).json({ Message: 'No record found' });
        })
        .catch(error => {
            console.log(error);
            return response.status(500).json({ Error: 'Interal server error' });
        })
} // ✔️

export const viewTournamentByOrganizer = () => {
    Tournament.findAll({ where: request.params })
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
            return response.status(500).json({ Error: 'Internal Server Error' });
        });
} // ✔️

export const register = ()=>{

}