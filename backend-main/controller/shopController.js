const data = require("../config/raw.json")



const getProduct = async (req, res ) =>{
     res.status(200).send(data);
}


module.exports = getProduct;