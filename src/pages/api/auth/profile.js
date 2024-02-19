import { UsersModal } from "@/data";
const {jwtVerify} = require('jose')

export default async function handler(req,res){
    try {

        // verify again token
        var token = req.cookies.token

        var userID = null
        // verify token
        try {
            var secret = new TextEncoder().encode("ajsdkflja$@$")
            var data = await jwtVerify(token,secret)
            userID = data.payload.id
        } catch (error) {
            res.status(403).json({
                success:false,
                message:"Invalid Access Token!"
            })
            return
        }

        var profile = UsersModal.find(v=>{
            return v._id==userID
        })

        delete profile.password


        res.json({
            success:true,
            message:profile
        })

    } catch (error) {
        console.log(error)
    }  
}