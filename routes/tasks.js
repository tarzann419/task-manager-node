const express = require('express');
const Router = express.Router();
const {
    get_all_tasks,
    create_task,
    get_single_task,
    update_task,
    delete_task,
} = require('../controllers/tasks');


Router.route('/').get(get_all_tasks);

Router.route('/').get(get_all_tasks).post(create_task);

// for all the routes that have to do with 'id'
Router.route('/:id').get(get_single_task).patch(update_task).delete(delete_task);
module.exports = Router;