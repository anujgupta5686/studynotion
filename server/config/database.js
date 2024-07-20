const mongoose = require('mongoose');
require('dotenv').config();
const connection = () => {
    mongoose.connect(process.env.DATABASE_URL).then(() => {
        console.log('Database connection established successfully');
    }).catch((error) => {
        console.log("Error connecting to database: " + error);
        process.exit(1);
    })
}
module.exports = connection;