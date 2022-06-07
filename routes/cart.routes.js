const CartController = require('../controllers/cart.controller');
const routes = (app) => { // the app parameter is the express app only
    // route -> controller function
    app.post('/ecomm/api/v1/addProduct', CartController.addProductToCart);
    app.post('/ecomm/api/v1/removeProduct', CartController.removeProductFromCart);
    app.post('/ecomm/api/v1/updateCart', CartController.updateCartStatus);
}

module.exports = routes; 