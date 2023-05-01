import {Document} from 'mongoose';

export interface ITodo extends Document {
    name: string;
    description: string;
    status: boolean;
}

// This is our Type interface, this is what defines the structure of each document in the database.
// We are using the Document interface from Mongoose to extend our ITodo interface.