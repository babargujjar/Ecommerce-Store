"use client"
import React, { useState } from 'react'
import axios from 'axios'

const page = () => {
    var [cinquiry, setcinquiry] = useState({
        customername: "",
        customeremail: "",
        customermsg: ""
    })
    var submitinquiry =async (e)=>{
        e.preventDefault()
        var res = await axios.post("/api/inquirys",cinquiry)
        alert("message submitted will contact you soon")
    }
    var changehandler = (e)=>{
   
   e.preventDefault()
     setcinquiry({...cinquiry,[e.target.name]:e.target.value})
    }
    console.log(cinquiry)
    return (
        <div className='grid px-3 grid-cols-5 gap-5 max-w-6xl mx-auto'>
            <div className=' flex justify-center items-center col-span-5 md:col-span-2 '>
                <div>
                <h2 className='text-2xl font-bold my-4'>Customer Service</h2>
                <p>Tel:+923256604973</p>
                <p>email:babargujjar@gmail.com</p>
                </div>
            </div>
            <div className='col-span-5 md:col-span-3 p-3 '>
                <div className='text-center my-5'>
                <h1 className='text-2xl font-bold'>Contact us <br /><p className='font-semibold text-gray-500'>with any inquiry</p></h1>
                </div>
                <form onSubmit={submitinquiry} className='grid mt-2 grid-cols-2 gap-5'>
                    <div className='col-span-1 border-b'>
                        <input required onChange={changehandler} className='px-3 py-2 w-full' type="text" placeholder='Name' name='customername' value={cinquiry.customername} />
                    </div>

                    <div className='col-span-1 border-b'>
                        <input required  onChange={changehandler} className='px-3 py-2 w-full' type="email" placeholder='Email' name='customeremail' value={cinquiry.customeremail} />
                    </div>

                    <div className='col-span-2 border-b mb-3'>
                        <input required onChange={changehandler} className='pb-20 w-full' type="textarea" placeholder='Type a message here.....' name='customermsg' value={cinquiry.customermsg} />
                    </div>
                    <button className='text-white col-span-2 bg-black w-full font-semibold py-2 hover:bg-white border hover:text-black'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default page