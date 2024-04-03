import jwt from 'jsonwebtoken';

export const verifyAdmin = async (request, response, next) => {
    try {
        let token = request.headers.authorization;
        token = token.split(' ')[1];

        jwt.verify(token, 'adminToken');
        next();

    } catch (error) {
        console.log(error);
        return response.status(500).json({ Error: "Invalid authentication...." });
    }
}

export const verifyUser = async (request, response, next) => {
    try {
        let token = request.headers.authorization;
        token = token.split(' ')[1];

        jwt.verify(token, 'userToken');
        next();

    } catch (error) {
        console.log(error);
        return response.status(500).json({ Error: "Invalid authentication...." });
    }
}

export const verifyOrganizer = async (request, response, next) => {
    try {
        let token = request.headers.authorization;
        // console.log(token);
        token = token.split(' ')[1];

        jwt.verify(token, 'organizerToken');
        next();

    } catch (error) {
        console.log(error);
        return response.status(500).json({ Error: "Invalid authentication...." });
    }
}
