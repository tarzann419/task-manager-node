const mongoose =require('mongoose');



// IF YOU HAVENT CREATED DB, IT WILL BE CREATED FOR YOU

const connect_db = ((url) => {
    return mongoose
    .connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: true,
        useUnifiedTopology: true
    }) //to avoid deprecation warning, pass this object variables
})


module.exports = connect_db;
    // .then((result) => console.log("DB IS CONNECTED..."))
    // .catch((err) => console.log(err));