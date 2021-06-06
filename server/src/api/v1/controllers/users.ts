import { Request, Response } from 'express';

const register_user = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        // TODO: correct http code
        res.status(200).send();
    } catch (e) {
        console.log(e);
        res.status(500).send('There was an error registering. Please try again later.');
    }
}

const login_user = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        // TODO: correct http code
        res.status(200).send();
    } catch (e) {
        console.log(e);
        res.status(500).send('There was an error logging in. Please try again later.');
    }
}

export {
    register_user,
    login_user
}
