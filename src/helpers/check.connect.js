'use strict';
const mongoose = require('mongoose');
const os = require('os');
const _SECONDS = 5000


//count connect
const countConnect = () => {
    const numConnections = mongoose.connections.length
    console.log("Num of connections: " + numConnections)
}
//check overload connect
const checkOverload = () => {
    setInterval(() => {
        const numConnections = mongoose.connections.length
        const numCores = os.cpus().length
        const memoryUsage = process.memoryUsage().rss
        //Vi du
        const maxConnections = numCores * 5
        console.log(`Active connections: ${numConnections}`)
        console.log(`Memory usage: ${memoryUsage / 1024 / 1024}MB`)
        if (numConnections > maxConnections) {
            console.log("Connections overload detected!")
        }
    }, _SECONDS)
}
module.exports = {
    countConnect,
    checkOverload
}