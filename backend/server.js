const express = require('express');
const cors = require('cors');
const  mongoose =require('mongoose'); 
const bodyParser = require('body-parser');
const data = require('./{}.json');



//database connect
main().catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/HEALTHcare');
    console.log('db connected')
}

const userSchema = new mongoose.Schema({
    name : String ,
    email : String,
    password : String,
    phone : Number,
    address : String,
})

const User = mongoose.model("User" , userSchema);


const server = express();
server.use(cors());
server.use(bodyParser.json())


server.post('/login' , async(req,res) =>{
    let user = new User();
    user.name =req.body.username
    user.email =req.body.email
    user.password =req.body.password
    user.phone =req.body.phone
    user.address =req.body.address
    const doc = await user.save();
    
    console.log(doc);
    res.send('user added');
    
})

server.listen(8080 , () => {
    console.log("server started");
})