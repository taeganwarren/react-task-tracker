import { Schema, Document, model } from 'mongoose';

export interface IUser extends Document {
    username: string,
    password: string
}

const user_schema: Schema = new Schema({
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

export default model<IUser>('users', user_schema);