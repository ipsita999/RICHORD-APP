'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    user_id: DataTypes.INTEGER,
    title: DataTypes.STRING
  }, {});
  Track.associate = function(models) {
    Track.belongsTo(models.User, {
      foreignKey: 'user_Id',
      onDelete: 'CASCADE'
    }),
    Track.hasMany(models.Note, {
      foreignKey: 'track_id'
    })
  };
  return Track;
};