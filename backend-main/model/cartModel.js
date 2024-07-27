const mongoose = require('mongoose');


//define the schema

const CartSchema = new mongoose.Schema({
   userId: {type:String , required : true},
   price :{type : Number , required : true},
   quantity:{type : Number , required : true , default:1 , min :1},
   img:{type : String}
}, { timestamps: true })

//create the model

const Cart = mongoose.model('Cart' , CartSchema);

//export 
module.exports = Cart;