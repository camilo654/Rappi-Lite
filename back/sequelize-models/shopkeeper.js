const Sequelize = require('sequelize');

('use strict');
module.exports = (sequelize, DataTypes) => {
  const Shopkeeper = sequelize.define(
    'Shopkeeper',
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
      },
      position: Sequelize.GEOMETRY('POINT', 4326)
    },
    {}
  );
  Shopkeeper.associate = function(models) {
    Shopkeeper.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    });
    Shopkeeper.hasMany(models.Order, {
      foreignKey: 'shopkeeper_id',
      as: 'orders'
    });
  };
  return Shopkeeper;
};
