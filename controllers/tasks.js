const Task = require('../models/Task');


const get_all_tasks = async (req,res) => {
    try {
        const get_task = await Task.findOne('64f9fcc7247f16b6e5f5e90a');
        res.status(201).json({ get_task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
    // res.send('all items from the mvc ');
}

const create_task = async (req,res) => {

    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
    
}


const get_single_task = (req,res) => {
    res.json({ id:req.params.id})
}


const update_task = (req,res) => {
    res.send('update_task')
}


const delete_task = (req,res) => {
    res.send('delete task')
}


module.exports = {
    get_all_tasks,
    create_task,
    get_single_task,
    update_task,
    delete_task,
}