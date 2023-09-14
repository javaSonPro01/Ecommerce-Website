'use strict';

const mongoose = require('mongoose');
const connectString = `mongodb://localhost:27017/shopDev`

class Database {
    constructor() {
        this.connect()
    }
    connect(type = "mongodb") {
        // dev
        if (1 === 1) {
            mongoose.set("debug", true);
            // doi xiu hen
            mongoose.set("debug", { color: true });
        }
        mongoose.connect(connectString)
            .then(_ => console.log('Connect success PROOOVipp'))
            .catch(err => console.log("Error connecting"))
    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }
        return Database.instance
    }
}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb