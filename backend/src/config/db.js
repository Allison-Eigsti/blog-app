const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const dns = require('dns');

dns.setServers(["8.8.8.8", "8.8.4.4"]);

// Defining database connection 
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/blog-app'

// Start up database connection (async function w a try-catch block)
const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log('Connected to MongoDB'); 
    } catch (error) {
        console.error(`Error connecting to MongoDB`, error.message);
        process.exit(1)
    }
}

module.exports = connectDB;