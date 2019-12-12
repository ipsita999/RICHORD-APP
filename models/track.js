'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    title: DataTypes.STRING,
    0: DataTypes.ARRAY(DataTypes.STRING),
    100:DataTypes.ARRAY(DataTypes.STRING),
    200:DataTypes.ARRAY(DataTypes.STRING),
    300:DataTypes.ARRAY(DataTypes.STRING),
    400:DataTypes.ARRAY(DataTypes.STRING),
    500:DataTypes.ARRAY(DataTypes.STRING),
    600:DataTypes.ARRAY(DataTypes.STRING),
    700:DataTypes.ARRAY(DataTypes.STRING),
    800:DataTypes.ARRAY(DataTypes.STRING),
    900:DataTypes.ARRAY(DataTypes.STRING),
    1000:DataTypes.ARRAY(DataTypes.STRING),
    1100:DataTypes.ARRAY(DataTypes.STRING),
    1200:DataTypes.ARRAY(DataTypes.STRING),
    1300:DataTypes.ARRAY(DataTypes.STRING),
    1400:DataTypes.ARRAY(DataTypes.STRING),
    1500:DataTypes.ARRAY(DataTypes.STRING),
    1600:DataTypes.ARRAY(DataTypes.STRING),
    1700:DataTypes.ARRAY(DataTypes.STRING),
    1800:DataTypes.ARRAY(DataTypes.STRING),
    1900:DataTypes.ARRAY(DataTypes.STRING),
    2000:DataTypes.ARRAY(DataTypes.STRING)
  }, {});
  Track.associate = function(models) {
    Track.belongsTo(models.User, {
      foreignKey: 'user_id',
      onDelete: 'CASCADE'
    })
    
  };
  return Track;
};