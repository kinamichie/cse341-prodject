const session = require('express-session');
const routes = require('express').Router();
var cookieParser = require('cookie-parser')


routes
    .use('/02', require('./prove02'))
    .get('/', (req, res, next) => {
        res.render('pages/proveActivities/', {
            pageTitle: 'Prove Activities',
            path: '/proveActivities',
            session: session,
            style: style,
            cookie: cookieParser           
        });
    });

module.exports = routes;