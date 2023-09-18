 // console.log('Task Manager App')

// for db conn and exec 

const express = require('express');
const app = express();
const tasks = require('./routes/tasks')
const connect_db = require('./db/connect')
require('dotenv').config() 

const notFound = require('./middleware/not-found');

const PORT = 3000;


// middleware

app.use(express.static('./public'));
app.use(express.json());


// routes

app.get('/home', (req, res) => {
    res.send('task manager');
});

app.use('/api/v1/tasks', tasks);
app.use(notFound)

const start = async () => {
    try {
        await connect_db(process.env.MONGO_URI)
        app.listen(PORT, console.log(`server is listening on ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}


start() 