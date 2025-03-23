const {Task,User} = require('../models/index');

module.exports.createTask = async(req,res,next) => {
    try {
        const {body,params: {userId}} = req;

        // 1. Нужно найти того самого юзера которому нужно добавить таски
        const user = await User.findByPk(userId);
        
        // 2. Нужно добавить найденому юзеру таски
        // parent.createChild(body)
        const result = await user.createTask(body);
        
        
        return res.status(201).send(result) ;

    } catch (error) {
        next(error)
    }
};


module.exports.getAllUserTasks = async(req,res,next) => {
    try {
        const {params: {userId}} = req;

        // 1. Нужно найти того самого юзера такски которого нам нужно найти
        const user = await User.findByPk(userId);

        //2.Нужно вытянуть все такси найденого юзера
        // parent.getChildren()

        const tasks = user.getTasks();

        return res.status(200).send(tasks);
    } catch (error) {
        next(error)
    }
}

module.exports.getCountOfTasks = async(req,res,next) =>{
    try {
        
        const {params: {userId}} = req;
        // 1. Нужно найти того самого юзера такски которого нам посчитать
        const user = await User.findByPk(userId);

        // 2. Посчитать количество найденых тасок юзера 
        // parent.countChildren()
        const tasksCount = await user.countTasks();

        return res.status(200).send(`${tasksCount}`)
    } catch (error) {
        next(error)
    }
}