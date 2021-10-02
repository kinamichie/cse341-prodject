const product = require('../models/products');

exports.getProducts = (req, res, next) => {
    product.fetchAll((products) => {
        res.render('pages/ta03', {
            title: 'Team Activity 03', 
            path: '/ta03',
            products: products,

            });
    });
};
//search
exports.searchProducts = (req, res, next) => {
    const search = req.query.search.toLowerCase();
    product.search(search, (filteredProducts) => {
        res.render('pages/ta03' , {
            title: 'Team Activity 03',
            path: '/ta03',
            products: filteredProducts,
        })
    })
}