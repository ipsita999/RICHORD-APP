'use strict';
module.exports = (sequelize, DataTypes) => {
  const Note = sequelize.define('Note', {
    pitch: DataTypes.STRING,
    position_id: DataTypes.INTEGER,
    track_id: DataTypes.INTEGER
  }, {});
  Note.associate = function (models) {
    Note.belongsTo(models.Track, {
      foreignKey: 'track_Id',
      onDelete: 'CASCADE'
    })
  };
  return Note;
};