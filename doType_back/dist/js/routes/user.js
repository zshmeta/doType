"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
const user_1 = require("../controllers/user");
//We import our methods from the controller and use them as the callback functions for the routes.
exports.router = (0, express_1.Router)();
exports.router.get('/user', todos_1.getTodos);
exports.router.post('/add-user', user_1.signUp);
exports.router.put('/edit-user/:id', todos_1.updateTodo);
exports.router.delete('/delete-user/:id', todos_1.deleteTodo);
//writing our methods separately allows us to keep our code clean and organized.
