const { Router } = require('express');
const UserController = require('../controllers/User.controller');
const TaskController = require('../controllers/Task.controller');
const { getUserItstance } = require('../middlewares/user.mv')

const router = Router();

// POST http://localhost:5000/api/user
router.post('/user', UserController.createUser);
// GET http://localhost:5000/api/users
router.get('/users', UserController.findAll);
// GET http://localhost:5000/api/user/25
router.get('/user/:userId', getUserItstance,  UserController.findByPk);
// DELETE http://localhost:5000/api/user/25
router.delete('/user/:userId',UserController.deleteByPk);
// PUT http://localhost:5000/api/user/25
router.put('/user/:userId', getUserItstance,UserController.updateUser);


// POST http://localhost:5000/api/task/5
router.post('/task/:userId', getUserItstance,TaskController.createTask)
// GET http://localhost:5000/api/tasks/5
router.get('/tasks/:userId', getUserItstance,TaskController.getAllUserTasks)
// GET http://localhost:5000/api/tasks-count/5
router.get('/tasks-count/:userId', getUserItstance,TaskController.getCountOfTasks);


module.exports = router;