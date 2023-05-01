"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = exports.signIn = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const user_1 = __importDefault(require("../../models/user"));
// let's create a function to sign up a user.
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { first_name, last_name, email, password, phone, confirm_password } = req.body;
    try {
        const existingUser = yield user_1.default.findOne({ email });
        if (existingUser)
            return res.status(400).json({ message: "User already exists." });
        if (password !== confirm_password)
            return res.status(400).json({ message: "Password should match." });
        const hashedPassword = yield bcryptjs_1.default.hash(password, 12);
        const result = yield user_1.default.create({
            email,
            password: hashedPassword,
            name: `${first_name} ${last_name}`,
            phone: phone,
        });
        let token;
        const { JWT_SECRET } = process.env;
        token = jsonwebtoken_1.default.sign({ email: result.email, id: result._id }, 'secret', { expiresIn: "5h" });
        res.status(200).json({ result, token });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong!! try again." });
    }
});
exports.signUp = signUp;
// let's create a function to sign in a user.
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const existingUser = yield user_1.default.findOne({ email });
        if (!existingUser)
            return res.status(404).json({ message: "User does not exist!!" });
        const isPasswordCorrect = yield bcryptjs_1.default.compare(password, existingUser.password);
        if (!isPasswordCorrect)
            return res.status(400).json({ message: "Invalid password,try again!!" });
        const token = jsonwebtoken_1.default.sign({ email: existingUser.email, id: existingUser._id }, 'secret', {
            expiresIn: "5h",
        });
        res.status(200).json({ result: existingUser, token });
    }
    catch (error) {
        res.status(500).json({ message: "Something went wrong!! please try again" });
    }
});
exports.signIn = signIn;
// let's create a function to get a list of users from the database.
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.default.find();
        res.status(200).json({ users });
    }
    catch (error) {
        throw error;
    }
});
// a function to delete a user from the database.
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedUser = yield user_1.default.findByIdAndRemove(req.params.id);
        res.status(200).json({ deletedUser });
    }
    catch (error) {
        throw error;
    }
});
// a function to update a user in the database.
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedUser = yield user_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({ updatedUser });
    }
    catch (error) {
        throw error;
    }
});
