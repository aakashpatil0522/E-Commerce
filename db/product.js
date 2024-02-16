const mongoose=require('mongoose');

const productSchema=new mongoose.Schema({
    name:'String',
    price:'String',
    category:'String',
    userId:'string',
    company:'string'
})

module.exports=mongoose.model("products",productSchema);
