import { Request, Response } from 'express';
import validator from 'validator';

interface userRegistration {
    username: string,
    password: string,
    confirmedPassword: string
}

interface Errors {
    [key: string]: any
}

const validate_registration = (data: userRegistration) => {
    let errors: Errors = {};
    if (validator.isEmpty(data.username) || !validator.isAlphanumeric(data.username)) {
        errors.username = 'Username must only contains letters and numbers';
    }
    if (validator.isEmpty(data.password) || !validator.isStrongPassword(data.password)) {
        errors.password = 'Password must be at least 8 characters and contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 symbol.';
    }
    if (validator.isEmpty(data.confirmedPassword) || !validator.isStrongPassword(data.confirmedPassword)) {
        errors.confirmedPassword = 'Password must be at least 8 characters and contain at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 symbol.';
    }
    if (!validator.equals(data.password, data.confirmedPassword)) {
        errors.mismatched = 'Passwords must match';
    }
    return {
        errors,
        isValid: Object.keys(errors).length > 1 ? false : true
    }
}

const register_user = async (req: Request, res: Response) => {
    try {
        const { errors, isValid } = validate_registration(req.body);
        if (!isValid) {
            res.status(400).send(errors);
            return;
        }
        const { username, password, confirmedPassword } = req.body;
        res.status(200).send();
    } catch (e) {
        console.log(e);
        res.status(500).send('There was an error registering. Please try again later.');
    }
}

const login_user = async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const { username, password } = req.body;
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
