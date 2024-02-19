import { NextResponse } from "next/server"
const {jwtVerify} = require('jose')

export async function middleware(req){
    try {
        var url = req.nextUrl.pathname
        var token = req.cookies.get("token")?.value

        var userID = null

        // verify token
        try {
            var secret = new TextEncoder().encode("ajsdkflja$@$")
            var data = await jwtVerify(token,secret)
            userID = data.payload.id
        } catch (error) {
            if(url.startsWith("/admin")){
                return NextResponse.redirect(new URL("/login",req.url))
            }
        }


        if(userID && url.startsWith("/login")){
            return NextResponse.redirect(new URL("/admin",req.url))
        }


    } catch (error) {
        console.log(error)
    }
}



export const config = {
    matcher: ['/login', '/admin/:path*'],
  }