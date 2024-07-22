const getRegister = (req, res) => {
    // const {id} = req.params;
    // if(id){
    //     res.send(`${id}`);
    // }else{
    //     res.send('param not found');
    // }

    const { name, age } = req.body;
    if (name || age) {
      res.send(`Name: ${name}`);
    } else {
      res.status(400).send('Missing parameters');
    }
    console.log(`${name}`);
    // console.log(`${age}`);

};

module.exports = { getRegister };





