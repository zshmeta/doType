import {Document} from 'mongoose';

export interface IUser extends Document {
    id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    apikey: string;
    role: string;
    createdAt: Date;
    updatedAt: Date;

}

// This is our Type interface, this is what defines the structure of each document in the database.
