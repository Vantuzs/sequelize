'use strict';
const isAfter = require('date-fns/isAfter')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    fritsName: {
      field: 'first_name',
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    lastName: {
      field: 'last_name',
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notNull: true,
        notEmpty: true
      }
    },
    password: {
      type:DataTypes.TEXT,
      allowNull: false
    },
    birthday: {
      type:DataTypes.DATEONLY,
      validate: {
        isDate: true,
        // дата рождения не была позже сегодняшней даты
        isValidDate(value) {
          if(isAfter(new Date(value), new Date())) { // дата, которую мы заносим в таблицу ПОСЛЕ текущей
            throw new Error('Your birthday mus be earlier than today');
          }
        } 
      }
    },
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
    underscored: true // created_at, updated_at
  });
  return User;
};