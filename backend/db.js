const mongoose = require("mongoose");
const mongoURL = "mongodb://127.0.0.1:27017/user-management?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectToMongo = () => {
    mongoose.connect(mongoURL,{},
        (err) => {
            if(err){
                console.error("Error connecting to Mongo.",err)
            }
            else{
                console.log("Connected to Mongo Successfully");
            }
        });
}

module.exports = connectToMongo;