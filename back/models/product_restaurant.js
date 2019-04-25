'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductRestaurant = sequelize.define('product_restaurant', {
    restaurant_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    url_img: DataTypes.STRING
  }, {});
  ProductRestaurant.associate = function(models) {

  };
  return ProductRestaurant;
};
