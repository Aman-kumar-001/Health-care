const User = require('../model/userModel.js')


const getRegister = async (req, res) => {
  const { username, email ,password, repassword, phone , address } = req.body;

  // Basic validation
  if (!username || !email || !password || !repassword || !phone || !address) {
    return res.status(400).json({ message: 'Please enter all fields' });
  }

  if (password !==  repassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    // Check if user already exists
    let user = await User.findOne({ email : email});
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }else{
            // Create new user
      user = new User({
        name : req.body.username,
        email: req.body.email,
        password : req.body.password,
        phone: req.body.phone,
        address: req.body.address
      });
  
      await user.save();
      res.status(201).json({ message: 'User registered successfully' });
    }  
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }

};



const getLogin = async (req, res) => {
  const { email, password } = req.body;

  // Validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Please enter all fields' });
  }

  //user check
  let userLogin = await User.findOne({email : email})
  if(!userLogin){
    return res.status(400).json({message : 'User not found'});
  }

  //checking the password
  if(userLogin){
    if (userLogin.password !== password) {
      return res.status(400).send('Incorrect password');
  }else{
    return res.status(200).json({message : 'Login Successfull', User : userLogin});
  }
  }
  
};

module.exports = { getRegister , getLogin};





