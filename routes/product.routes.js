const ProductController = require('../controllers/product.controller');
const validator=require('../middlewares/requestValidator');
const AuthValidator = require('../middlewares/authValidator');
const AuthorisationValidator = require('../middlewares/authorizationValidator');

const routes = (app) => {
    app.get('/ecomm/api/v1/products',AuthValidator.isAuthenticated,ProductController.getProducts);
    app.post('/ecomm/api/v1/products', validator.validateCategoryCreationRequest,AuthValidator.isAuthenticated,AuthorisationValidator.canAddProduct,ProductController.createProduct);
}

module.exports = routes;
