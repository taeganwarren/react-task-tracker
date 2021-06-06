import { Schema, model } from 'mongoose';

const user_schema = new Schema({
    username: {
        type: 'String',
        required: true,
        maxlength: 100
    },
    password: {
        type: 'String',
        required: true
    }
});

const user = model('users', user_schema);

export {
    user
};
