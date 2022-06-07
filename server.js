const express = require('express');
const bodyParser = require('body-parser'); // npm i body-parser
const configs = require('./config/serverconfig');
const categoryRoutes = require('./routes/category.routes');
const productRoutes = require('./routes/product.routes');
const authRoutes = require('./routes/auth.routes');
const cartRoutes = require('./routes/cart.routes');
const app = express();
const db = require('./models/index');

const Product = require('./models/index').Product;
const Categories = require('./models/index').Categories;
const User = require('./models/index').User;
const Role = require('./models/index').Roles;

/*
    We need to add a middleware that will help
    express to read all query and body params
    The below code is more or less like a configuration
*/
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


categoryRoutes(app);
productRoutes(app);
authRoutes(app);
cartRoutes(app);

app.get('/home', async function (req, res) {
    const getCategories = await Categories.findAll({ include: Product });
    res.json(getCategories);
})
if(process.env.SYNC) {
    await db.sequelize.sync({ force: true });
}

app.listen(configs.PORT, async () => {
    console.log('Server started on PORT', configs.PORT);
    
 
});