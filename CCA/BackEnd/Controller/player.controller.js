import { validationResult } from "express-validator";
import User from "../Modal/Player.modal.js";
import jwt from "jsonwebtoken";

export const signUp = (request, response) => {

    let errors = validationResult(request);
    if (!errors.isEmpty())
        return response.status(401).json({ Error: errors.array() });

    const { email, password, first_name, last_name, age, height, is_active, address, no_of_matches, category_id, description } = request.body;
    let filename = request.file.filename;

    User.create({
        email, password, first_name, last_name, age, height, is_active, address,
        no_of_matches, category_id, filename, description

    }).then(result => {
        const token = jwt.sign(request.body, 'userToken');
        return response.status(200).json({ Message: "SignUp successfully", data: result, token });

    }).catch(err => {
        console.log(err);
        return response.status(500).json({ Error: 'Internal server error...' });
    });

} // ✔️

export const signIn = async (request, response, next) => {
    try {
        const data = await User.findOne({ where: { email: request.body.email }, raw: true });

        if (!data)
            return response.status(201).json({ Message: 'Invalid email' });

        if (User.checkPassword(request.body.password, data.password)) {
            const token = jwt.sign(request.body, 'userToken');
            return response.status(200).json({ Message: 'SignIn successfully...', data, token });
        }

        return response.status(201).json({ Message: 'Invalid password' });
    } catch (error) {
        return response.status(500).json({ Error: 'Internal server error' });
    }

};// ✔️

export const viewAllUser = async (request, response, next) => {
    User.findAll()
        .then(result => {
            if (result)
                return response.status(200).json({ Message: 'All users', data: result });
            return response.status(201).json({ Message: 'No Data Found' });
        })
        .catch(error => {
            console.log("INternal server error", error);
        })
}; // ✔️

export const viewUser = async (request, response, next) => {
    User.findOne({ where: { email: request.body.email } })
        .then(Data => {
            if (Data)
                return response.status(200).json({ Message: 'User details', Data });
            return response.status(201).json({ Message: 'No user found' });
        })
        .catch(error => {
            console.log(error);
            return response.status(500).json({ Error: 'Internal server error' });
        })
}; // ✔️

export const removeUser = async (request, response, next) => {
    User.destroy({ where: { email: request.body.email } })
        .then(result => {
            console.log(result);
            if (result)
                return response.status(200).json({ Message: 'User removed successfully' });
            return response.status(201).json({ Message: 'Invalid email' });
        })
        .catch(error => {
            console.log(error);
            return response.status(500).json({ Error: 'Internal server error' });
        });
}; // ✔️

export const update = (request, response, next) => {
    let errors = validationResult(request);
    if (!errors.isEmpty())
        return response.status(401).json({ Error: errors.array() });

    User.update(request.body, { where: { user_id } })
        .then(result => {
            console.log(result);
            return response.status(200).json({ Message: 'Data updated successfully....', data: result });
        })
        .catch(err => {
            console.log(err);
            return response.send().json({ Error: 'Internal server error' })
        })
}; // ✔️