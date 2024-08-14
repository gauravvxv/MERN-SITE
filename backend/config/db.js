const mongoose = require("mongoose");

require("dotenv").config();

const mongoDB = async() => {
try {
    
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB is connected to the server")
} catch (error) {
    console.log(error)    
}
}

module.exports = mongoDB