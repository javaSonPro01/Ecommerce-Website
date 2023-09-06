const express = require('express');
const morgan = require('morgan');
const { default: helmet } = require('helmet');
const compression = require('compression');
const app = express();

//init middleware
app.use(morgan("dev")) // in ra logger
app.use(helmet()) // bao ve server, khong cho ben thu ba tan cong...
app.use(compression())
//init db

//handling errors

//init routes

app.get('/', (req, res, next) => {
    const strCompress = "The Son"
    return res.status(200).json({
        message: "Welcome to The Son",
        metaData: strCompress.repeat(1000)
    })
})
module.exports = app