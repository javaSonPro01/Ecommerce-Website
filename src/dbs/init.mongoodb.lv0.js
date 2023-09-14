const mongoose = require('mongoose');
const connectString = `mongodb://localhost:27017/shopDev`
mongoose.connect(connectString)
    .then(_ => console.log('Connect success'))
    .catch(err => console.log("Error connecting"))
// dev
if (1 === 1) {
    mongoose.set("debug", true);
    // doi xiu hen
    mongoose.set("debug", { color: true });
}

module.exports = mongoose