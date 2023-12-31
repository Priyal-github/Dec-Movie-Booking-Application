//use 'npm run dev' to run the backend
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const userRouter = require('./routes/user-routes');
const adminRouter = require('./routes/admin-routes');
const movieRouter = require('./routes/movie-routes');
const bookingRouter = require('./routes/booking-routes');
dotenv.config();

const PORT = process.env.PORT || 4000

const cors = require('cors');
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

// middleware section
app.use(express.json());
app.use("/users", userRouter);
app.use("/admin", adminRouter);
app.use("/movies", movieRouter);
app.use("/booking", bookingRouter);

mongoose.connect("mongodb+srv://priyal:pa190519@november-cluster.9frlvvn.mongodb.net/")

app.listen(3000, () => {
    console.log(`Database connected.`);
})

