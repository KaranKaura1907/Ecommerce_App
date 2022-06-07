const Product = require('../models/index').Product;
const Categories = require('../models/index').Categories;
const { Op } = require("sequelize");

const createFilter = (data) => {
    let filter = {};
    if(data.minPrice && data.maxPrice) {
        Object.assign(filter, {[Op.lte]: data.maxPrice});
        Object.assign(filter, {[Op.gte]: data.minPrice});
        console.log(filter);
    } else if (data.maxPrice) {
        Object.assign(filter, {[Op.lte]: data.maxPrice});
    } else if(data.minPrice) {
        Object.assign(filter, {[Op.gte]: data.minPrice});
    }
    return filter
}

const getProducts = async (data) => {
    let products;
    if(!data.categoryId && !data.minPrice && !data.maxPrice) {
        products = await Product.findAll({include: Categories});
        return products;
    } 
    if(!data.categoryId) {
        let filter = createFilter(data);
        products = await Product.findAll({where: {
            cost: filter
        }});
        return products;
    } 
    let filter = createFilter(data);
    products = await Product.findAll({where: {
        cost: filter,
        categoryId: data.categoryId
    }});
    return products;
}
const createProduct = async (data) => {
    const product = await Product.create({
        Name: data.Name,
        Description: data.Description,
        cost: data.cost,
        CategoryId: data.CategoryId,
        createdAt: new Date(),
        updatedAt: new Date()
    });
    console.log(data)
    return product
}
module.exports = {
    getProducts,
    createProduct
}