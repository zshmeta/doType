import {Router} from 'express';
import {deleteTodo, getTodos, updateTodo} from '../controllers/todos';
import {signUp} from "../controllers/user";

//We import our methods from the controller and use them as the callback functions for the routes.

export const router: Router = Router();

router.get('/user', getTodos);
router.post('/add-user', signUp);
router.put('/edit-user/:id', updateTodo);
router.delete('/delete-user/:id', deleteTodo);

//writing our methods separately allows us to keep our code clean and organized.
