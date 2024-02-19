import dbconnect from "@/config/dbconnect"
import Products from "@/Models/Products"



export default async function handler(req,res){
    
    dbconnect()


    switch(req.method){

        case"POST":
        try {
    
            var product = await Products.create(req.body)
        
           res.json({
            success:true,
            message:product
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
    
             await Products.findByIdAndDelete(req.query.id)
        
           res.json({
            success:true,
            message:"Product Deleted Succesfully"
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
            var founditem = await Products.find(match)
            res.json({
                success:true,
                message:founditem
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
                await Products.findByIdAndUpdate(req.body._id,{$set:req.body})
                res.json({
                    success:true,
                    message:"Product Updated Successfyl!"
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