'use strict';

module.exports = function(app) {
    const commerceProducts = require('../controllers/productController');

    app.route('/products')
        .get(commerceProducts.listAll)
        .post(commerceProducts.createProduct);

    app.route('/products/:productId')
        .get(commerceProducts.listOne)
        .delete(commerceProducts.deleteProduct);
}; // parece ok