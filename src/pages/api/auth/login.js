import { UsersModal } from "@/data";
import {sign} from "jsonwebtoken"
import {serialize} from 'cookie';



export default async function handler(req,res){
    try {


        var {username,password} = req.body
        var user =  UsersModal.find((v)=>{
            return v.username == username && v.password == password
        })
        if(!user){
            res.status(403).json({
                success:false,
                message:"Invalid Username  or Password"
            })
            return
        }

        var token = sign({id:user._id},"ajsdkflja$@$",{expiresIn:"1d"})
        res.setHeader("Set-Cookie",serialize("token",token,{httpOnly:true,secure:true,path:"/"}))

        res.json({
            success:true,
            message:"Login Successfully!",
        })

    } catch (error) {
        console.log(error)
    }  
}