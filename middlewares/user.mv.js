const {User} = require('../models');

module.exports.getUserItstance = async(req,res,next) =>{
    try {
        const {params: {userId}} = req;

        const user = await User.findByPk(userId);

        if(!user){ // НЕ юзер, если юзера не найдено
            throw new Error('User not found');
        }

        req.userInstance = user;

        next();
    } catch (error) {
        next(error)
    }
}