const mongoose = require('mongoose');

//creating schema

const todoSchema  = new mongoose.Schema({
    description: {
    	type: String,
    	required: true
    },
    category: {
        type: String
    },
    date: {
    	type: Date,
    	required: true
    }
});

const Todo = mongoose.model('Todo',todoSchema);

module.exports = Todo;