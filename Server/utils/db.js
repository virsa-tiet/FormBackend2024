const mongoose = require("mongoose");
const URI = process.env.DB_URI;

const connectDB = async() => {
    try {
        await mongoose.connect(URI);
    } catch (err) {
        console.log(err);
    }
}

module.exports = connectDB;