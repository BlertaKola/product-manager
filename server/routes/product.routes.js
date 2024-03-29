const ProductController = require('../controllers/product.controller');
module.exports = (app) => {
    app.get('/api', ProductController.index);
    app.post('/api/products', ProductController.createProduct);     
    app.get('/api/products', ProductController.getProducts);
    app.get('/api/products/:id', ProductController.getOneProduct);
    app.patch('/api/products/:id', ProductController.updateProduct)
    app.delete('/api/products/:id', ProductController.deleteProduct)
}

