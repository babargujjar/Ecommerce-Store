'use client'
import { GlobalData } from '@/Context/Context'
import React, { useContext } from 'react'

const page = () => {
  var {user,logoutUser} = useContext(GlobalData)

  return (
    <div className='px-3 flex justify-between items-center'>
                  <img className='w-12 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp9mv20Li3rs0cjXPD4rfC1RR1dx7o-xWQp5pDWYTu3656IpTQLoAmW0Acr0wThzq9GEk&usqp=CAU" alt="" />
        <div className='flex items-center gap-2'>
            <img className='w-9 h-9 rounded-full' src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D" alt="" />
            <div>
              <h2>{user?.fullName}</h2>
              <p onClick={logoutUser} className='text-xs text-red-600 cursor-pointer' >logout</p>
            </div>
        </div>
    </div>
  )
}

export default page