const product = require('./products');

exports.getProducts = (req, res, next) => {
    product.fetchAll((prod) => {
        res.render('pages/ta03',{
            title: 'Team Activity 03',
            path: '/tao3',
            products: products,
        });
    });
}
