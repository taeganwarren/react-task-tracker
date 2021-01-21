const { Task } = require('../models/task');

module.exports.get_tasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json(tasks);
    } catch (e) {
        console.log(e);
        res.status(500).send('There was an error retrieving tasks. Please try again later.');
    }
}

module.exports.add_task = async (req, res) => {
    try {
        const new_task = new Task(req.body);
        const inserted_task = await new_task.save();
        res.status(200).send(inserted_task);
    } catch (e) {
        console.log(e);
        res.status(500).send('There was an error adding the task. Please try again later.');
    }
}