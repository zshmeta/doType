import {IUser} from "../types/user";
import {model, Schema} from "mongoose";


const userSchema: Schema = new Schema(
    {

        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,

        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        apikey: {
            type: String,
            required: true,
        },
    },
    {timestamps: true}
);

export default model<IUser>("User", userSchema);

