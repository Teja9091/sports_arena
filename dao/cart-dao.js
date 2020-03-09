const userModel = require('../models/user');

exports.getUser = (email) => {
    return userModel.findUser('email', email).select('-__v');
}
exports.getAllCartItems = (id) => {
    return userModel.find(id).populate('cart.productId');
}

exports.findByCondition = (fieldName,value) => {
    return userModel.findOne(fieldName,value);
}

exports.addToCart = (condition,updateFields) => {
    return userModel.updateOne(condition,updateFields);
}

exports.getCartItems = (condition) => {
    return userModel.findOne(condition);
}
