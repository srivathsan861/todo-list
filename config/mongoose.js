//require The liberary
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/todo_list_db');

//acquire the connection to check it is successfull
const db = mongoose.connection;

//error
db.on('error', console.error.bind(console,'erroe connecting to db'));

//up and running then print the message
db.once('open',function(){
	console.log('successfully connected to the database!');
});