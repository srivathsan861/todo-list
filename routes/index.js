
const express = require('express');

const router = express.Router();

const homeController = require('../controller/home_controller.js');

//routes for different controllers

router.get('/',homeController.home);
router.post('/create-todo',homeController.createTodo);
router.post('/delete-todo',homeController.deleteTodo);

module.exports = router;