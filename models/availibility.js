'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Availibility extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Availibility.hasOne(models.Availibility_Slot,{
        foreignKey:'availbilty_id',
        onDelete:'CASCADE'
      })
    }
  }
  Availibility.init({
    date: DataTypes.STRING,
    slot_time_to: DataTypes.STRING,
    slot_time_from: DataTypes.STRING,
    session_length: DataTypes.STRING,
    break_bw_session: DataTypes.STRING,
    slots: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Availibility',
  });
  return Availibility;
};