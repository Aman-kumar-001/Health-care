import express from 'express';
import cors from 'cors';
import connectDB from './config/connection.js'; // Import connectDB correctly


const DB_URL = 'mongodb://127.0.0.1:27017/HealthCare';

const server = express();

// Middleware
server.use(cors());
server.use(express.urlencoded({ extended: true })); // Correct way to use urlencoded

// Route
server.get('/home', async (req, res) => {
  res.send("hello aman");
});

// DB connection
// connectDB(process.env.mongodb);
connectDB(DB_URL);

// Start the server
server.listen(3000, () => {
  console.log("server started on port 3000");
});
