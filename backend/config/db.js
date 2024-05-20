require('dotenv').config();

const mongoose = require('mongoose');
mongoose.set('strictQuery',true);
const connectDb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        }).then(() => {console.log("Connected to Mongo")});
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDb;