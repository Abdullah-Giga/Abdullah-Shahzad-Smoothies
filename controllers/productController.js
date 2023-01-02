const { JsonWebTokenError } = require('jsonwebtoken');
const Product = require('../models/smoothies');

// Get my products
const MyProds_get = (req, res) => {
    Product.find().sort({createdAt: -1}).then((result) => res.render('smoothies', {prods : result})).catch((err) => console.log(err));
}

const AllProds_get = (req, res) => {
    Product.find().sort({createdAt: -1}).then((result) => res.render('allProds', {prods : result})).catch((err) => console.log(err));
}

const createNew = (req, res) => {
    res.render('create');
}

const createNew_post = async (req, res) => {
    const product = new Product(req.body);
    product.save().then((result) => res.send({result})).catch((err) => console.log(err));
}


const details = (req, res) => {
    const id = req.params.id;
    Product.findById(id).then((result) => res.render('details', {prod : result})).catch((err) => console.log(err));
}


const edit = (req, res) => {
    const id = req.params.id;
    Product.findById(id).then((result) => res.render('edit', {prod : result})).catch((err) => console.log(err));
}



const editRecipe_post = (req, res) => {
    const id = req.params.id;

         Product.findByIdAndUpdate(id,{
            $set:{
                productName : req.body.productName,
                description: req.body.description,
                body : req.body.body,}
            },{new: true}
        ).then((result) => res.json({redirect : '/smoothies/:id'})).catch((err) => console.log(err));
        }


const deleteRecipe = (req, res) => {
    const id = req.params.id;
    Product.findByIdAndDelete(id).then((result) => res.json({redirect : '/smoothies'})).catch((err) => console.log(err));
}

module.exports = {MyProds_get, AllProds_get, createNew, createNew_post, details, edit, editRecipe_post, deleteRecipe};