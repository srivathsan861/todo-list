// Fetching the Todo from the mongoose/DB
const Todo = require('../models/todo.js')

module.exports.home = function(req,res){
	// return res.end('<h1>fihfihfihf </h1>');

    Todo.find({},function(err,todos){
        if(err){
            console.log('error in fetching todos from DB!')
        }
        return res.render('home',{ // or home.ejs
          title : "To-Do App",
          todo_list : todos
	    });
    });

};

//controller function for creating a todo task

module.exports.createTodo = function(req,res){
    Todo.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    },function(err,newTodo){
        if(err){
            console.log('erroe in creating todo in DB!');
        }
        console.log('********',newTodo);
        return res.redirect('back');
    });
}

//controller function for deleting a todo task

module.exports.deleteTodo = function(req,res){

let idCollection = req.body.delete;

//if no checkbox is checked to be deleted

if(idCollection == undefined){
    return res.redirect('back');
}

//if one checkbox is checked to be deleted
  
if(idCollection === "string"){
    Todo.findByIdAndDelete(id,function(err){
        if(err){
                console.log('error in deleting the task');
                return;
            }
    });
    return res.redirect('back');
}

//if multiple checkboxes are checked to get deleted

for(id of idCollection){
    Todo.findByIdAndDelete(idCollection,function(err){
         if(err){
                console.log('error in deleting the task');
                return;
            }
        });
}
 return res.redirect('back');
}


   
