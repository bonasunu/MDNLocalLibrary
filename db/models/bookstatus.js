'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookStatus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  BookStatus.init({
    book: DataTypes.STRING,
    status: DataTypes.ARRAY,
    due_back: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'BookStatus',
  });
  return BookStatus;
};