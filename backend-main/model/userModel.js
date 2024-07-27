const mongoose = require('mongoose');

// Define the schema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email : {type : String , required : true},
  password : {type : String , required :true},
  phone: { type: Number, required: true },
  address : {type : String , required :true}
}, { timestamps: true });

// Create the model
const User = mongoose.model('User', UserSchema);


// Export the model
module.exports = User;
