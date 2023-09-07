const get_all_tasks = (req,res) => {
    res.send('all items from the mvc ');
}

const create_task = (req,res) => {
    res.json(req.body)
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