"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Here we are defining the Schema for our Todo model.
// We are using the Schema constructor from Mongoose and passing in a configuration object.
// We import our type interface and use it as the type for our model.
const todoSchema = new mongoose_1.Schema({
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
}, { timestamps: true });
exports.default = (0, mongoose_1.model)("Todo", todoSchema);
