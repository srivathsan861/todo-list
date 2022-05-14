
const express = require('express'); 
const port = 9000;

// mongoose to db connection
const db = require('./config/mongoose.js');

// express is fired
const app = express();

// set up the view engine
app.set('view engine','ejs');
app.set('views','./views');

// Express parser to parse the form data into js object
app.use(express.urlencoded());

// Accessing the static files like css, js 
app.use(express.static('assets'));

// use express router
app.use('/',require('./routes/index.js'));

app.listen(port,function(err){
	  if(err){
    	console.log('Error in running the server!');
    }
    console.log('Server is up and running on port:',port);
});


