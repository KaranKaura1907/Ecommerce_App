const validateCategoryCreationRequest = (req, res, next) => {
    if(!req.body.Name) {
        return res.json({
            success: false,
            code: 400,
            message: 'Name of the category is not present'
        });
    }
    next();
}

module.exports = {
    validateCategoryCreationRequest
}