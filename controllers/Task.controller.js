const {Task,User} = require('../models/index');

module.exports.createTask = async(req,res,next) => {
    try {
        const {body,userInstance} = req;
        
        // 2. Нужно добавить найденому юзеру таски
        // parent.createChild(body)
        const result = await userInstance.createTask(body);
        
        
        return res.status(201).send(result) ;

    } catch (error) {
        next(error)
    }
};


module.exports.getAllUserTasks = async(req,res,next) => {
    try {
        const { userInstance } = req;

        //2.Нужно вытянуть все такси найденого юзера
        // parent.getChildren()

        const tasks = userInstance.getTasks();

        return res.status(200).send(tasks);
    } catch (error) {
        next(error)
    }
}

module.exports.getCountOfTasks = async(req,res,next) =>{
    try {
        
        const { userInstance } = req;

        // 2. Посчитать количество найденых тасок юзера 
        // parent.countChildren()
        const tasksCount = await userInstance.countTasks();

        return res.status(200).send(`${tasksCount}`)
    } catch (error) {
        next(error)
    }
}