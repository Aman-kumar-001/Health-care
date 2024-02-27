const express = require('express');
const cors = require('cors');
const  mongoose =require('mongoose'); 
const bodyParser = require('body-parser');
const data = require('./{}.json');


const server = express();
server.use(cors());
server.use(bodyParser.json())


server.get('/api' , async(req,res) =>{
    res.send(data);
    // res.send('aagya nnn')
})

server.listen(8080 , () => {
    console.log("server started");
})