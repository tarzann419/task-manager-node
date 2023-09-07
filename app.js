// console.log('Task Manager App')



const express = require('express');
const app = express();

const PORT = 3000;



// routes

app.get('/home', (req, res) => {
    res.send('task manager');
});

app.listen(PORT, console.log(`server is listening on ${PORT}`))