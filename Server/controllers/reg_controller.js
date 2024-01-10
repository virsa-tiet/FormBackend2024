const User = require("../models/user");
const path = require("path");

const home = async (req, res) => {
    try {
        res
            .status(200)
            res.sendFile(path.join(__dirname, '../public/index.html'));
    }   catch (err) {
        next(err);
    }
};

const register = async (req, res) => {
    try {
        const { username, rollNo, phone, branch } = req.body;

        const userExist = await User.findOne({ rollNo: rollNo });

        if(userExist) {
            return res.status(400).json({ msg: "Roll Number already enrolled" })
        }

        const userCreated = await User.create({ username, rollNo, phone, branch });

        res.status(200).json(userCreated);
    }   catch (err) {
        next(err);
    }
};

module.exports = { home, register };