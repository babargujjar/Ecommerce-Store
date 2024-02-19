'use client'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'

const page = ({params}) => {
  

var [order,setorder] = useState({})

const fetchorders =async ()=>{
  var res = await axios.get(`/api/orders?id=${params.id}`)
  setorder(res.data.message[0])
//   console.log(res.data.message)
}

useEffect(()=>{
  fetchorders()
},[])


    return (
        <div>
            <div className='grid gap-5 grid-cols-5 my-10 '>

               <div className='col-span-5 lg:col-span-3'>
               <div className=' grid gap-3 grid-cols-2 border p-4'>
                    <h1 className='text-xl col-span-2 font-semibold py-2'>Billing Detail</h1>
                    <div>
                        <label className=' border-b block' htmlFor="">First Name</label>
                        <div>
                          {order?.customerdetail?.firstName}
                        </div>
                    </div>

                    <div>
                        <label className=' border-b block' htmlFor="">Last Name</label>
                        <div>
                          {order?.customerdetail?.lastName}
                        </div>
                    </div>

                    <div>
                        <label className=' border-b block' htmlFor="">Phone Number</label>
                        <div>
                          {order?.customerdetail?.phone}
                        </div>
                    </div>

                    <div>
                        <label className=' border-b block' htmlFor="">E-mail</label>
                        <div>
                          {order?.customerdetail?.email}
                        </div>
                    </div>

                    <div className=' col-span-2'>
                        <label className=' border-b block' htmlFor="">Town / City</label>
                        <div>
                          {order?.customerdetail?.city}
                        </div>
                    </div>
                    <div className='  col-span-2'>
                        <label className=' border-b ' htmlFor="">Street address</label>
                        <div>
                          {order?.customerdetail?.address}
                        </div>
                    </div>

                </div>
               </div>

                <div className='  col-span-5 lg:col-span-2 border bg-gray-200 p-4'>
                    <h1 className='  text-xl col-span-2 font-semibold py-2 text-center'>Ordered Products</h1>
                    <div className='  bg-white p-4'>
                        <div className=' flex justify-between border-b pb-2'>
                            <p className='  font-semibold'>Product</p>
                            <p className='  font-semibold'>Subtotal</p>
                        </div>
                        {
                            order?.items?.map((v, i) => {
                                return (
                                    <div key={i} className='  flex justify-between items-center'>
                                        <div className=' flex my-3 items-center'>
                                            <img className='  w-10 mx-[4px]' src={v.productid?.featuredimage?.url} alt="" />
                                            <div>
                                                <p className='  line-clamp-1 font-semibold'>{v.productid?.title}</p>

                                                <p>{v.quantity} item X {v.unitprice}</p>
                                            </div>
                                        </div>

                                        <div>
                                            <p className=' whitespace-nowrap '>Rs {v.quantity * v.unitprice}</p>
                                        </div>

                                    </div>
                                )
                            })
                        }

                        <div className='  flex justify-between mt-3 pt-2 border-t '>
                            <p className='  font-semibold'>Total</p>
                            <p>Rs {order.total}</p>
                        </div>

                    </div>
                    <div className='flex gap-1 items-center justify-center '>
                     <button className='  bg-red-600 text-white text-center py-2 flex-1 my-4'>Pending Order</button>
                     <div className='border cursor-pointer border-red-600'>
                     <i className="bx p-[6px] text-red-600 text-2xl bx-edit"></i>
                     </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default page