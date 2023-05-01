import {ITodo} from "../types/todo";
import {model, Schema} from "mongoose";
// Here we are defining the Schema for our Todo model.
// We are using the Schema constructor from Mongoose and passing in a configuration object.
// We import our type interface and use it as the type for our model.

const todoSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            required: true,
        }
    },
    {timestamps: true}
);


export default model<ITodo>("Todo", todoSchema);