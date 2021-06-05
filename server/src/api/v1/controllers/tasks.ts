import { Request, Response } from 'express';
import { task } from '../models/task';

module.exports.get_tasks = async (req: Request, res: Response) => {
    try {
        const tasks = await task.find({});
        res.status(200).json(tasks);
    } catch (e) {
        console.log(e);
        res.status(500).send('There was an error retrieving tasks. Please try again later.');
    }
}

module.exports.get_task = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const found_task = await task.find({ _id: id });
        res.status(200).send(found_task[0]);
    } catch (e) {
        console.log(e);
        res.status(500).send('There was an error retrieving that task. Please try again later.');
    }
}

module.exports.add_task = async (req: Request, res: Response) => {
    try {
        const new_task = new task(req.body);
        const inserted_task = await new_task.save();
        res.status(200).send(inserted_task);
    } catch (e) {
        console.log(e);
        res.status(500).send('There was an error adding the task. Please try again later.');
    }
}

module.exports.edit_task = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const updated_task = await task.findByIdAndUpdate(id, { reminder: req.body.reminder }, { useFindAndModify: false, new: true });
        res.status(200).send(updated_task);
    } catch (e) {
        console.log(e);
        res.status(500).send('There was an error editing the task. Please try again later.');
    }
}

module.exports.delete_task = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        await task.findByIdAndDelete({ _id: id });
        res.status(200).send();
    } catch (e) {
        console.log(e);
        res.status(500).send('There was an error deleting that task. Please try again later.');
    }
}
