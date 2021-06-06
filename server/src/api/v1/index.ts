import { Router } from 'express';
const router = Router();

const { get_tasks, get_task, add_task, edit_task, delete_task } = require('./controllers/tasks');
const { register_user, login_user } = require('./controllers/users');

router.get('/tasks', get_tasks);
router.get('/tasks/:id', get_task);
router.post('/tasks', add_task);
router.put('/tasks/:id', edit_task);
router.delete('/tasks/:id', delete_task);

router.post('/users/register', register_user);
router.post('/users/login', login_user);

export {
    router
};
