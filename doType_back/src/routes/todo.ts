import {Router} from 'express';
import {addTodo, deleteTodo, getTodos, updateTodo} from '../controllers/todos';

//We import our methods from the controller and use them as the callback functions for the routes.

export const router: Router = Router();

router.get('/todos', getTodos);
router.post('/add-todo', addTodo);
router.put('/edit-todo/:id', updateTodo);
router.delete('/delete-todo/:id', deleteTodo);


