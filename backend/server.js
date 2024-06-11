const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const data = require('./{}.json');

// database connect
main().catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/HEALTHcare');
    console.log('db connected');
}

// User Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phone: Number,
    address: String,
});

const User = mongoose.model("User", userSchema);

// Order Schema
const orderSchema = new mongoose.Schema({
    userId: String,
    items: [
        {
            itemId: String,
            name: String,
            quantity: Number,
            price: Number
        }
    ],
    totalAmount: Number,
    orderDate: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", orderSchema);

const server = express();
server.use(cors());
server.use(bodyParser.json());

server.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const alreadyUser = await User.findOne({ email: req.body.email });
    if (alreadyUser) {
        if (password === req.body.password) {
            res.send({ status: "success", message: 'login successful', user: alreadyUser });
        } else {
            res.send("password not matched");
        }
    } else {
        res.send("User not found");
    }
});

server.post('/register', async (req, res) => {
    const alreadyUser = await User.findOne({ email: req.body.email });
    if (alreadyUser) {
        res.send('user already exists');
    } else {
        let user = new User({
            name: req.body.username,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            address: req.body.address
        });
        const doc = await user.save();
        console.log(doc);
        res.send('user added');
    }
});

server.get('/item', async (req, res) => {
    res.send(data);
});

server.post('/tocart', async (req, res) => {
    res.send(req.body);
    console.log(req.body);
});

// Endpoint to place an order
server.post('/placeorder', async (req, res) => {
    const { userId, items, totalAmount } = req.body;

    let order = new Order({
        userId: userId,
        items: items,
        totalAmount: totalAmount
    });

    const doc = await order.save();
    console.log(doc);
    res.send('order placed');
});

server.listen(8080, () => {
    console.log("server started");
});
