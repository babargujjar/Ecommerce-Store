import {serialize} from 'cookie';

export default async function handler(req,res){
    try {
        res.setHeader("Set-Cookie",serialize("token","",{httpOnly:true,secure:true,path:"/"}))
        res.json({
            success:true,
            message:"Logout Successfully!",
        })

    } catch (error) {
        console.log(error)
    }  
}