const mongoose = require('mongoose');

// dont forget to configure it as a construictor with 'new'
//  i forgot to 'new'
const TaskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'MUST BE PROVIDED'],
        trim: true,
        maxlength: [20, 'MAX LENTH IS 20']
    },
    completed: {
        type: Boolean,
        default: false
    },
}, {timestamps: true})


module.exports = mongoose.model('Task', TaskSchema); 