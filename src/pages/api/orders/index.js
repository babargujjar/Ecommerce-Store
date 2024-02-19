// import dbconnect from "../../../config/dbconnect";
import Orders from "@/Models/Orders";
import products from "@/Models/Products"



export default async function handler(req,res){
    
    // dbconnect()


    switch(req.method){

        case"POST":
        try {
    
            var order = await Orders.create(req.body)
        
           res.json({
            success:true,
            message:order
           }) 
        } catch (error) {
            res.json({
                success:false,
                message:error.message
               }) 
        }
        break
        case"DELETE":
        try {
    
             await Orders.findByIdAndDelete(req.query.id)
        
           res.json({
            success:true,
            message:"Order Deleted Succesfully"
           }) 
        } catch (error) {
            res.json({
                success:false,
                message:error.message
               }) 
        }
        break
        case"GET":
        var match = {}
        if(req.query.id){
            match._id = req.query.id
        }

        try {
            var foundorders = await Orders.find(match).populate({
                path:"items.productid",
                modal:products
            })

            foundorders = foundorders.map(order=>{
                var total =0
                order.items.map(v=>{
                total = total + v.quantity * v.unitprice
                })
                var obj = {...order._doc,total}
                return obj
            })



            res.json({
                success:true,
                message:foundorders
            })
        } catch (error) {
            res.json({
                success:false,
                message:error.message
               }) 
   }
       break
        case "PUT":
            try {
                await Orders.findByIdAndUpdate(req.body._id,{$set:req.body})
                res.json({
                    success:true,
                    message:"Order Updated Successfyl!"
                })
            } catch (error) {
                res.json({
                    success:false,
                    message:error.message
                })
            }
            break
    }

}