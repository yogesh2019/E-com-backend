const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv && dotenv.config();
const URI = process.env.MONGO_URI
const Dbconnect = async ()=>{
    try{
        await mongoose.connect(URI);
        console.log("db is connected");
    }catch (e){
        console.log("db connection failed",e);
    }
}
module.exports = Dbconnect;