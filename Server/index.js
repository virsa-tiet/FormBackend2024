require('dotenv').config();
const express = require("express");

const router = require("./routes/register");
const connectDB = require("./utils/db");
const errHandler = require("./middleware/error_handler");
const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/register", router);

app.use(errHandler);

connectDB().then(()=> {
    app.listen(process.env.PORT || port, () => {
        console.log(`Server is running at port ${port}`);
    });
})

