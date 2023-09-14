const Task = require('../models/Task');


const get_all_tasks = async (req,res) => {
    try {
        // const get_task = await Task.findOne('64f9fcc7247f16b6e5f5e90a');
        const get_task = await Task.find({});
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

// assigns the value of req.params.id to id req.params.id
const get_single_task = async (req,res) => {
    try {
        // matching from the db with what's in the params 
        const {id: task_id} = req.params;
        const task = await Task.findOne({_id:task_id});
        res.status(200).json({ task });
        // res.json({ id:req.params.id})

        if(!task){
            return res.status(404).json({ msg: `no task with id: ${task_id}`  })
        }
    } catch (error) {
        res.status(500).json({ msg: error }) 
    }
    
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