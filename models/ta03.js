const product = require('./products');

exports.getProducts = (req, res, next) => {
    product.fetchAll((prod) => {
        res.render('pages/ta03',{
            title: 'Team Activity 03',
            path: '/ta03',
            products: products,
        });
    });
}
