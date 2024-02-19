import mongoose from "mongoose";




var Schema = new mongoose.Schema({
    title:{
        type:String,
        // required:true
    },
    featuredimage:{
        url:String,
        // required:true,
        altText:String
    },
    relatedimages:[
        {
            url:String,
            altText:String
        }
    ],
    price:{
        type:Number,
        // required:true
    },
    stock:{
        type:Number,
        // required:true,
        default:0
    },
    description:{
        type:String,
        // required:true
    },
    category:{
        type:String,
        // required:true
    }
},)



export default mongoose.models.products || mongoose.model("products",Schema)