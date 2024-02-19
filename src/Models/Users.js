import mongoose from "mongoose";


var schema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String
    },
    phone:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    
    },
    country:{
        type:String,
        required:true
    },
    postalcode:{
        type:Number,
        required:true
    
    },
    :{
        type:String,
        required:true
    
    },
    city:{
        type:String,
        required:true
    }
})