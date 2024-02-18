const Product = require('../models/product.model');   
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
module.exports.createProduct = (request, response) => {

    Product.create(request.body) 
        .then(person => console.log(person))
        .then(person => response.json(person))
        .catch(err => response.json(err));
}

module.exports.getProducts = (request, response) => {
    Product.find({})
        .then(prods => response.json(prods))
        .catch(err => response.json(err))
}

module.exports.getOneProduct = (request, response) => {
    Product.findOne({_id:request.params.id})
        .then(prod => response.json(prod))
        .catch(err => response.json(err))
}