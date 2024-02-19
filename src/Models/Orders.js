import mongoose from "mongoose";



var ordermodel = new mongoose.Schema({
    items:[
        {
            productid:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"products"
            },
            unitprice:{
                type:Number
            },
            quantity:{
                type:Number
            }
        }
    ],
    customerdetail:{
        firstName:String,
        lastName:String,
        email:String,
        phone:String,
        city:String,
        address:String
    }
    ,
    status:{
        type:String,
        default:"Pending",
        required:true,
        enum:["Pending","Shipping","Delivery","Cancelled"]

    }
    ,
    paymentstatus:{
        type:String,
        default:"Pending",
        required:true,
        enum:["Pending","confirmed"]

    }

})



export default mongoose.models?.orders || mongoose.model("orders",ordermodel)