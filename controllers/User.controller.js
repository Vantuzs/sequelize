const { User } = require('../models');

module.exports.createUser = async(req, res, next) => {
    try {
        const { body } = req;

        const createdUser = await User.create(body);

        return res.status(201).send(createdUser);
    } catch (error) {
        next(error);
    }
}

module.exports.findAll = async(req, res, next) => {
    try {
        const resultsArray = await User.findAll();

        return res.status(200).send(resultsArray);
    } catch (error) {
        next(error);
    }
}

module.exports.findByPk = async(req, res, next) => {
    try {
        const { params: { id } } = req;

        const foundUser = await User.findByPk(id);

        return res.status(200).send(foundUser);
    } catch (error) {
        next(error);
    }
}

module.exports.deleteByPk = async(req, res, next) => {
    try {
        const { params: { id } } = req;

        const rowsCount = await User.destroy({
            where: {
                id
            }
        });

        if(rowsCount) {
            return res.status(200).send('Successfull delete');
        } else {
            return res.status(204).end();
        }
    } catch (error) {
        next(error);
    }
}

// module.exports.updateUser = async(req, res, next) => {
//     try {
//         const { params: { id }, body } = req;

//         const updatedUsersArray  = await User.update(body, {
//             where: {
//                 id
//             },
//             returning: true
//         });

//         return res.status(200).send(updatedUsersArray);
//     } catch (error) {
//         next(error);
//     }
// }

module.exports.updateUser = async(req,res,next) =>{
    try {
        const { params: { id }, body } = req;

        //1. Находим того конкретного юзера, действия над котоырм нужно сделать
        const foundUser = await User.findByPk(id);
        //2. Сделать над найденым в п.1 юзером те действия, которые нужно
        const result = await foundUser.update(body);

        //3. Закрываем соединение с клиентов и возвращаем результат
        return res.status(200).send(result);
    } catch (error) {
        next(error)
    }
}