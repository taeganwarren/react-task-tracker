const { Router } = require('express');
const router = Router();

const { get_tasks, add_task } = require('./controllers/tasks');

router.get('/tasks', get_tasks);
router.post('/tasks', add_task);

module.exports.api_router = router;
