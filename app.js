// console.log('Task Manager App')



const express = require('express');
const app = express();
const tasks = require('./routes/tasks')

const PORT = 3000;


// middleware

app.use(express.json());


// routes

app.get('/home', (req, res) => {
    res.send('task manager');
});

app.use('/api/v1/tasks', tasks);


app.listen(PORT, console.log(`server is listening on ${PORT}`))