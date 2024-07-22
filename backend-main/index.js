const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connection'); // Import connectDB correctly
const bodyParser = require('body-parser');
const User = require('./model/userModel.js')
const web =require('./routes/web.js')

const DB_URL = 'mongodb://127.0.0.1:27017/';

const server = express();

// Middleware
server.use(cors());
server.use(bodyParser.json());
server.use(express.urlencoded({ extended: true })); // Correct way to use urlencoded

// Route
server.get('/home', async (req, res) => {
  res.send("hello aman");
});

// DB connection
connectDB(DB_URL);


// const createUser = async () => {
//       const stu = new User({
//         name: 'aman sharma',
//         age: 21,  // age should be a Number, not a String
//         phone: 7903814915
//       });
    
//       try {
//         await stu.save();
//         console.log('User saved successfully');
//       } catch (error) {
//         console.error('Error saving user:', error);
//       }
//     };
    
//     // Call the function to create and save the user
//     createUser();



//routes 
server.use('/' , web)



// Start the server
server.listen(3000, () => {
  console.log("server started on port 3000");
});
