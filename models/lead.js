'use strict'
module.exports = (sequelize, DataTypes) => {
  const Lead = sequelize.define(
    'Lead',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      email: { type: DataTypes.STRING, allowNull: false }
    },
    {}
  )
  Lead.associate = function (models) {
    // associations can be defined here
  }
  return Lead
}
