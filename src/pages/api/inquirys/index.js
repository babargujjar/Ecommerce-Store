// import dbconnect from "../../../config/dbconnect";
import Contactiquiry from "@/Models/Contactiquiry";



export default async function handler(req,res){
    
    // dbconnect()


    switch(req.method){

        case"POST":
        try {
    
            var inquiry = await Contactiquiry.create(req.body)
        
           res.json({
            success:true,
            message:inquiry
           }) 
        } catch (error) {
            console.log(error)
            res.json({
                success:false,
                message:error.message
               }) 
        }
        break
    } 
}