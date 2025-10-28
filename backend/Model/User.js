const mongooose = require("mongoose");


const userSchema = new mongooose.Schema({
    FirstName:{
        type:String,
        required:true   
    },
    LastName:{
        type:String,
        required:true   
    },
    Email:{
        type:String,
        required:true,
    },
    Password:{
        type:String,
        required:true,
    },
    Gender:{
        type:String,
        required:true,
    },
    DOB:{
        type:Date,
        required:true,
    },
    Occupation:{
        type:String,
        required:true,
    },
    Country:{
        type:String,
        required:true,
    },
    Description:{
        type:String,
        required:true,
    }
})

module.exports = mongooose.model("User",userSchema)