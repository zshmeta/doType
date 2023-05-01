import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import user from "../../models/user";
import {Request, Response} from "express";


// let's create a function to sign up a user.
const signUp = async (req: Request, res: Response) => {
    const {first_name, last_name, email, password, phone, confirm_password} = req.body;
    try {
        const existingUser = await user.findOne({email});
        if (existingUser) return res.status(400).json({message: "User already exists."});

        if (password !== confirm_password) return res.status(400).json({message: "Password should match."});
        const hashedPassword = await bcrypt.hash(password, 12);
        const result = await user.create({
            email,
            password: hashedPassword,
            name: `${first_name} ${last_name}`,
            phone: phone,
        });
        let token: string;
        const {JWT_SECRET} = process.env;
        token = jwt.sign({email: result.email, id: result._id}, 'secret', {expiresIn: "5h"});
        res.status(200).json({result, token});
    } catch (error) {
        res.status(500).json({message: "Something went wrong!! try again."});
    }
};

// let's create a function to sign in a user.
const signIn = async (req: Request, res: Response) => {
    const {email, password} = req.body;
    try {
        const existingUser = await user.findOne({email});
        if (!existingUser) return res.status(404).json({message: "User does not exist!!"});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) return res.status(400).json({message: "Invalid password,try again!!"});

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, 'secret', {
            expiresIn: "5h",
        });

        res.status(200).json({result: existingUser, token});
    } catch (error) {
        res.status(500).json({message: "Something went wrong!! please try again"});
    }
};

// let's create a function to get a list of users from the database.

const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await user.find();
        res.status(200).json({users});
    } catch (error) {
        throw error;
    }
}

// a function to delete a user from the database.

const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const deletedUser = await user.findByIdAndRemove(req.params.id);
        res.status(200).json({deletedUser});
    } catch (error) {
        throw error;
    }
}

// a function to update a user in the database.

const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const updatedUser = await user.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json({updatedUser});
    } catch (error) {
        throw error;
    }

}


// a function to get a single user from the database.


export {signIn, signUp};
