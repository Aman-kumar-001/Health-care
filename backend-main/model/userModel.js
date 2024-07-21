const mongoose = require('mongoose');

// Define the schema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 62 },
  phone: { type: Number, required: true }
});

// Create the model
const User = mongoose.model('User', UserSchema);

// Function to create and save a new user
// const createUser = async () => {
//   const stu = new User({
//     name: 'aman sharma',
//     age: 21,  // age should be a Number, not a String
//     phone: 7903814915
//   });

//   try {
//     await stu.save();
//     console.log('User saved successfully');
//   } catch (error) {
//     console.error('Error saving user:', error);
//   }
// };

// // Call the function to create and save the user
// createUser();

// Export the model
module.exports = User;
