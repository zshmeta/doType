"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const todos_1 = require("../controllers/todos");
//We import our methods from the controller and use them as the callback functions for the routes.
exports.router = (0, express_1.Router)();
exports.router.get('/todos', todos_1.getTodos);
exports.router.post('/add-todo', todos_1.addTodo);
exports.router.put('/edit-todo/:id', todos_1.updateTodo);
exports.router.delete('/delete-todo/:id', todos_1.deleteTodo);
