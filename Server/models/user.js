const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    rollNo: {
        type: Number,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    branch: {
        type: String,
        require: true
    }
});

const User = new mongoose.model("User", userSchema);

module.exports = User;