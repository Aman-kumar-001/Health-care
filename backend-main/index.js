const express = require('express');
const cors = require('cors');
const connectDB = require('./config/connection'); // Import connectDB correctly
const bodyParser = require('body-parser');
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

//routes 
server.use('/' , web)


// Start the server
server.listen(8080, () => {
  console.log("server started on port 3000");
});
