"use strict";
// import express, {Express} from "express"
// import mongoose from "mongoose"
// import cors from "cors"
// import todoRoutes from "./routes"
//
// const app: Express = express()
//
// const PORT: string | number = process.env.PORT || 4000
//
// app.use(cors())
// app.use(todoRoutes)
//
// const uri = `mongodb+srv://zshmeta:${process.env.MONGO_PASSWORD}@dotype.iwkvwk1.mongodb.net/?retryWrites=true&w=majority`;
// // const options = {useNewUrlParser: true, useUnifiedTopology: true}
//
// mongoose
//     .connect(uri)
//     .then(() =>
//         app.listen(PORT, () =>
//             console.log(`Server running on http://localhost:${PORT}`)
//         )
//     )
//     .catch(error => {
//         throw error
//     })
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
// export default app;
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
const App = () => {
    const app = (0, express_1.default)();
    const PORT = process.env.PORT || 4000;
    app.use((0, cors_1.default)());
    app.use(routes_1.default);
    const uri = `mongodb+srv://zshmeta:${process.env.MONGO_PASSWORD}@dotype.iwkvwk1.mongodb.net/?retryWrites=true&w=majority`;
    // const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@clustertodo.raz9g.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`
    // const options = {useNewUrlParser: true, useUnifiedTopology: true}
    mongoose_1.default
        .connect(uri)
        .then(() => app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`)))
        .catch(error => {
        throw error;
    });
};
exports.App = App;
