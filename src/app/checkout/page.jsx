'use client'
import { GlobalData } from "@/Context/Context"
import axios from 'axios'
import React, { useContext, useState } from 'react'
import InputMask from 'react-input-mask'
import { useRouter } from "next/navigation"

const page = () => {

    const router = useRouter()

    var [loading,setLoading] = useState(false)

    var { cart,setcart, removeItemFromCart } = useContext(GlobalData)

    var [formdata, setformdata] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        city: "",
        address: ""
    })
    // console.log(formdata)

    var changehandler = (e) => {
        e.preventDefault()
        setformdata({ ...formdata, [e.target.name]: e.target.value })
    }


    var placeorder = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            var res = await axios.post("api/orders", {
                items: cart.cartitem?.map((v) => {
                    var object =
                    {
                        unitprice: v.price,
                        quantity: v.quantity,
                        productid: v._id
                    }

                    return object
                }),
                customerdetail: formdata
            })
            if (res.data.success) {
                router.push("/order-success")
            }

        } catch (error) {
            alert(error.message)
        }finally{
            setLoading(false)
        }
    }


    return (
        <div className="max-w-6xl mx-auto">
            <form onSubmit={placeorder} className=' grid gap-5 grid-cols-5 my-10 '>

                <div className='col-span-5 lg:col-span-3 grid gap-3 grid-cols-2 border p-4'>
                    <h1 className='text-xl col-span-2 font-semibold py-2'>Billing Detail</h1>
                    <div>
                        <label className='block' htmlFor="">First Name</label>
                        <input required name='firstName' value={formdata.firstName} onChange={changehandler} className='border rounded-md py-1 px-2 w-full' type="text" placeholder='First Name' />
                    </div>

                    <div>
                        <label className='block' htmlFor="">Last Name</label>
                        <input required name='lastName' value={formdata.lastName} onChange={changehandler} className='border rounded-md py-1 px-2 w-full' type="text" placeholder='Last Name' />
                    </div>

                    <div>
                        <label className='block' htmlFor="">Phone Number</label>
                        <InputMask required name='phone' value={formdata.phone} onChange={changehandler} className='border rounded-md py-1 px-2 w-full' mask="03999999999" placeholder='Phone Number' />
                    </div>

                    <div>
                        <label className='block' htmlFor="">E-mail</label>
                        <input name='email' value={formdata.email} onChange={changehandler} className='border rounded-md py-1 px-2 w-full' type="email" placeholder='Email' />
                    </div>

                    <div className='col-span-2'>
                        <label className='block' htmlFor="">Town / City</label>
                        <input required name='city' value={formdata.city} onChange={changehandler} className='border rounded-md py-1 px-2  w-full' type="text" placeholder='City' />
                    </div>
                    <div className='col-span-2'>
                        <label className='' htmlFor="">Street address</label>
                        <input required name='address' value={formdata.address} onChange={changehandler} className='border rounded-md py-1 px-2 w-full' type="text" placeholder='Street' />
                    </div>

                </div>

                <div className='col-span-5 lg:col-span-2 border bg-gray-200 p-4'>
                    <h1 className='text-xl col-span-2 font-semibold py-2 text-center'>Order Detail</h1>
                    <div className='bg-white p-4'>
                        <div className=' flex justify-between border-b pb-2'>
                            <p className='font-semibold'>Product</p>
                            <p className='font-semibold'>Subtotal</p>
                        </div>
                        {
                            cart?.cartitem.map((v, i) => {
                                return (
                                    <div key={i} className='flex justify-between items-center'>
                                        <div className='flex my-3 items-center'>
                                            <i onClick={() => removeItemFromCart(v._id)} className="bx text-xl  bx-x hover:bg-gray-400 p-1 rounded-full cursor-pointer"></i>
                                            <img className='w-10 mx-[4px]' src={v.featuredimage?.url} alt="" />
                                            <div>
                                                <p className='line-clamp-1 font-semibold'>{v.title}</p>

                                                <p>{v.quantity} item X {v.price}</p>
                                            </div>
                                        </div>

                                        <div>
                                            <p className='whitespace-nowrap '>Rs {v.total}</p>
                                        </div>

                                    </div>
                                )
                            })
                        }

                        <div className='flex justify-between mt-3 pt-2 border-t '>
                            <p className='font-semibold'>Total</p>
                            <p>Rs {cart?.Total || 0}</p>
                        </div>

                    </div>
                    <button className='bg-black text-white text-center py-2 w-full my-4'>Place Order</button>

                </div>
            </form>

           {
            loading ? 
            <div className="fixed top-0 z-[9999999] left-0 w-screen h-screen flex-col bg-black/70 flex justify-center items-center">
                <h1 className="text-3xl text-white">Please Wait...</h1>
                <img className="w-10 h-10" src="https://i.gifer.com/ZKZg.gif" alt="" />
            </div>
            :
            null
           }

        </div>
    )
}

export default page