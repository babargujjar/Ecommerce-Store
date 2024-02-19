'use client'
import React, { useContext } from 'react'
import Link from 'next/link'
import { GlobalData } from '@/Context/Context'


const page = () => {
    var {cart,addtocart,removeItemFromCart,decreaseQuantity} = useContext(GlobalData)
   
    return (
                <div className='grid max-w-6xl px-2 mx-auto grid-cols-6 py-10 gap-5'>
            {/* detail section */}
            <div className=' col-span-6 md:col-span-4 pb-5'>
                <table className='w-full'>
                    <thead>
                        <tr className='border-b'>
                            <th className='text-start py-4'>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart?.cartitem.map((v,i)=>{
                             return(
                                <tr key={i} className='border'>
                                <td>
                                    <div className='flex'>
                                        <div className='w-20 py-2 mr-3'>
                                            <img  src={v.featuredimage.url} alt="" />
                                        </div>
                                        <div>
                                            <h2 className='pb-2'>{v.title}</h2>
                                            <p>${v.price}</p>
                                        </div>
                                    </div>
    
                                </td>
                                <td className='flex justify-center'>
                                    <div className='my-4'>
                                        <span onClick={()=>decreaseQuantity(v)} className='p-2 text-lg font-semibold border bg-gray-100 cursor-pointer'>-</span>
                                        <span className='px-3'>{v.quantity}</span>
                                        <span onClick={()=>addtocart(v)} className='p-2 text-lg font-semibold border bg-gray-100 cursor-pointer'>+</span>
                                    </div>
                                </td>
                                <td className='text-center' >${v.total}</td>
                                <td><i onClick={()=>removeItemFromCart(v._id)} className="bx bx-x bg-gray-200 p-1 rounded-full cursor-pointer hover:bg-gray-300 transition-all duration-500"></i></td>
                            </tr>
                             )
                            
                            })
                            
                        }
                       
                    </tbody>
                </table>
            </div>
            {/* proceed to check out */}
            <div className='border col-span-6 md:col-span-2 bg-gray-200 font-semibold p-4'>
                <h2 className='text-xl pb-2'>Cart Total</h2>
                <div className='flex items-center justify-between py-3'>
                    <div>Subtotal</div>
                    <div>Rs. {cart?.Total || 0}</div>
                </div>

                <div className='flex items-center justify-between py-3'>
                    <div>Delivery Charges</div>
                    <div>Rs. 0.0</div>
                </div>
                <div className='flex items-center justify-between py-3'>
                    <div>Total</div>
                    <div>Rs. {cart?.Total || 0}</div>
                </div>
                <Link href='/checkout'>
                <button className='bg-black p-2 text-white w-full'>Proceed To Checkout</button>
                </Link>

            </div>
        </div>
               
    )
}

export default page