let Restaurant = require('../models').Restaurant;
let Product = require('../models').Product;
let Offer = require('../models').Offer;

let list = (req, res, next) => {
    return Restaurant
      // .findAll({
      //   // where: {restaurant_id: req.body.restaurant_id}
      //   where: {
      //     id: 1
      //   }
      // })
      findByPk(1)
      .then(
        // (offers) => {
        //   let products = [];
        //   offers.forEach(offer => {
        //     console.log(offer.dataValues);
        //     // products.push(
        //     //   Product.findByPk(offer.dataValues.product_id)
        //     //   .then((product) => res.status(201).send(product))
        //     //   .catch((error) => res.status(400).send(error));
        //     // );
        //   });
        (restaurant) => {
          console.log(restaurant.products);
          res.status(200).send({});
        })
    // }
    //
    //
    // (offer) => res.status(201).send(offer)

  // )
  // .then( offer => {
  //   return offer;
  // })
  .catch((error) => {
    res.status(400).send(error);
  });
}

module.exports = {
  list: list
};
