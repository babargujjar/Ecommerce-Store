"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {toast} from 'react-hot-toast'



const Page = () => {
  var [orders, setorders] = useState([])

  async function fetchorder() {
    var res = await axios.get("http://localhost:3000/api/orders")

    setorders(res.data.message)
  }


  async function deleteorder(id) {
    if (!window.confirm("Are You Sure")) {
      return
    }
    var res = await axios.delete(`/api/orders/?id=${id}`)
    if (res.data.success) {
      toast.success(res.data.message)
      fetchorder()
    }
  }
  useEffect(()=>{
    fetchorder()
  },[])

  return (

    <div>
      <div className=' px-5'>
        <h2 className='text-2xl'>Orders</h2>

      </div>
      <div className='max-w-5xl mx-auto p-4 mt-7'>

        <table className='w-full'>
          <thead>
            <tr className='border-b'>
              {/* <th className='text-start'>Date</th> */}
              <th className='text-start'>Customer</th>
              <th className='text-start'>Phone</th>
              <th className='text-start'>Order Total</th>
              <th className='text-start'>Status</th>
              <th className='text-start'>Payment</th>
              <th className='text-start'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              orders?.map((v, i) => {
                return (
                  <tr className='border-b'>
                    {/* <td>{v.createdAt}</td> */}
                    <td className='flex items-center'>
                      {v.customerdetail.firstName + " " + v.customerdetail.lastName}</td>
                    <td>{v.customerdetail.phone}</td>
                    <td>Rs. {v.total}</td>
                    <td>{v.status}</td>
                    <td>{v.paymentstatus}</td>
                    <td>
                      <Link href={`/admin/orders/${v._id}`}>
                        <i className="bx mr-4 cursor-pointer text-xl text-indigo-500 bx-detail"></i>
                      </Link>
                      <i onClick={() => deleteorder(v._id)} className="bx cursor-pointer text-xl text-red-500 bx-trash"></i>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Page