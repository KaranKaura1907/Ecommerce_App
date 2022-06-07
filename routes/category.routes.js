const CategoryController = require('../controllers/category.controller');
const routes = (app) => { // the app parameter is the express app only
    // route -> controller function
    app.get('/ecomm/api/v1/categories', CategoryController.getAllCategory);
    app.post('/ecomm/api/v1/categories',CategoryController.createCategory);
    app.delete('/ecomm/api/v1/categories/:id',CategoryController.deleteCategory);
    app.get('/ecomm/api/v1/categories/:id', CategoryController.getCategory);
    app.get('/ecomm/api/v1/categoriesByName', CategoryController.getCategoryByName);
    app.put('/ecomm/api/v1/categories/:id', CategoryController.updateCategory);

}

module.exports = routes; 