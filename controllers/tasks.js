const Task = require('../models/Task');
const asyncWrapper = require('../middleware/asyncWrapper');


const get_all_tasks = asyncWrapper( async (req,res) => {
    
        // const tasks = await Task.findOne('64f9fcc7247f16b6e5f5e90a');
        
        const tasks = await Task.find({});
        res.status(200).json({ tasks })
        // res.status(200).json({ tasks, amount:tasks.length })
        // res.status(200).json({
        //     status: 'success',
        //     data: {tasks, nbHits: tasks.length}
        // })
    
    
        //  catch (error) {
    //     res.status(500).json({ msg: error })
    // }
    // res.send('all items from the mvc ');
})

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
        // res.json({ id:req.params.id})

        if(!task){
            return res.status(404).json({ msg: `no task with id: ${task_id}`  })
        }

        res.status(200).json({ task });


    } catch (error) {
        res.status(500).json({ msg: error }) 
    }
    
}


const delete_task = async (req,res) => {
    const {id:task_id} = req.params;
    const task = await Task.findOneAndDelete({ _id:task_id});
    if(!task){
        return res.status(404).json({ msg: `this task doeesnt exist. id: ${task_id}` })
    }
    res.status(200).json({ task });
}

// update usding patch
const update_task = async (req,res) => {
    // res.send('update_task') 
    try {
        const {id:task_id} = req.params;
        const task = await Task.findOneAndUpdate({ _id:task_id }, req.body, {
            new:true,
            runValidators:true
        });
        if(!task){
            return res.status(404).json({ msg: `this task doesnt exit. id: ${task_id}` });
        }

        res.status(200).json({ task })
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}

// update using put method
// const edit_task = async (req,res) => {
//     // res.send('update_task') 
//     try {
//         const {id:task_id} = req.params;
//         const task = await Task.findOneAndUpdate({ _id:task_id }, req.body, {
//             new:true,
//             runValidators:true
//         });
//         if(!task){
//             return res.status(404).json({ msg: `this task doesnt exit. id: ${task_id}` });
//         }

//         res.status(200).json({ task })
//     } catch (error) {
//         res.status(404).json({ msg: error });
//     }
// }


module.exports = {
    get_all_tasks,
    create_task,
    get_single_task,
    update_task,
    delete_task,
    // edit_task
}