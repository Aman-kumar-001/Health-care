const Cart = require('../model/cartModel.js');


const addCart =  async (req,res) => {
    try {
        const { userId, price, quantity, img } = req.body;

        const newCartItem = new Cart({
            userId,
            price,
            quantity,
            img
        });

        const savedCartItem = await newCartItem.save();
        res.status(201).send(savedCartItem);
    } catch (err) {
        res.status(400).send(err.message);
    }

}

//update cart
const updateCart = async (req,res) =>{
  try {
    let update = await Cart.findByIdAndUpdate(  req.params.id , {
        $set: req.body
    },{new : true});
    if (!update) {
        return res.status(404).json({ message: 'Cart not found' });
      }
    res.status(200).json({cart : update})
  } catch (error) {
    res.status(500).json(error)
  }
}



//delete cart 

const deleteCart = async (req,res) =>{
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json({message : "Cart deleted"})
    } catch (error) {
        res.status(500).json({message : "Can not find the Cart"})
    }
}

//get all doc

const getAll = async (req,res) =>{
    try {
        let allDoc = await Cart.find()
        res.status(200).json({ doc : allDoc})
    } catch (error) {
        res.status(500).json({message : error})
    }
}




module.exports =  {addCart , updateCart , deleteCart , getAll}; 
