const Product = require('../Models/commerceSchemas');
products = mongoose.model('Products');

exports.listAll = (req, res) => {
    products.find({}, (err, product) => {
        if (err)
            res.send(err);
        res.json(product);
    })
}

exports.createProduct = (req, res) => {
    var newProduct = new products(req.body);
    newProduct.save((err, product) => {
        if(err)
            res.send(err);
        res.json(product);
    })
}

exports.listOne = (req, res) => {
    products.findById(req.params.productId, (err, product) => {
        if (err)
            res.send(err);
        res.json(product);
    })
}

exports.deleteProduct = (req, res) => {
    products.remove({_id: req.params.productId}, (err, product) => {
      if (err)
        res.send(err);
      res.json({ message: 'Produto removido com sucesso' });
    })
}

//e agora?
exports.listByCategory = (req, res) => { 
    products.find({}, (err, product) => {
        if(err)
            res.send(err);
        res.json(product);
    })
}