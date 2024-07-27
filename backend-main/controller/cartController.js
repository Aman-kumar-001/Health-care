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

module.exports =  {addCart};