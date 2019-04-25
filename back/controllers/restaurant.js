let Restaurant = require('../models').Restaurant;
let ProductRestaurant = require('../models').Product_restaurant;

let list = (req, res, next) => {
//   return sequelize.query(`select p.id as id, r.id as restaurant_id, p.name, p.description, p.url_img from public."Offers" as o
// inner join public."Restaurants" r
// on r.id = o.restaurant_id
// inner join public."Products" p
// on p.id = o.product_id`, {model: ProductRestaurant,
//     mapToModel: true}).then((data)=>{
//     res.status(200).send(data);
//   }).catch(err=>console.log(err));
  // return Product_restaurant.findAll()
  // .then((product_restaurant) => )
  // .catch((error) => {
  //   res.status(400).send(error);
  // });;
  // return Restaurant
  //   .findAll({
  //     order: [
  //       ['createdAt', 'DESC'],
  //       // [{ model: Address }, 'createdAt', 'DESC'],
  //     ],
  //   })
  //   .then((restaurants) => res.status(200).send(restaurants))
  //   .catch((error) => {
  //     res.status(400).send(error);
  //   });
}

module.exports = {
  list: list
};
