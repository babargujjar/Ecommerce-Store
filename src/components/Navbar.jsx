"use client"
// import {  } from 'next/font/google'
import axios from 'axios'
import Nav from './Nav'
import React, { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import { GlobalData } from '@/Context/Context'
import { usePathname } from 'next/navigation'



const Navbar =() => {
  
  async function fetchdata(){
    var res = await axios.get("http://localhost:3000/api/products")
    return res.data.message
  }
  var product = fetchdata()
  // console.log(product)
 

  var pathname = usePathname()

  var { cart } = useContext(GlobalData)
  const [nav, setnav] = useState(false)
  const [activesearch,setactivesearch] = useState([])

  useEffect(()=>{
    setnav(false)
  },[pathname])
 

  const searchhandle = (e)=>{
      if(e.target.value == ''){
          setactivesearch([])
          return false
      }
      // console.log(e)
      
      setactivesearch(
          // word.filter(w => w.includes(e.target.value)).slice(0,0)
         product.filter(v => v.title == e.target.value)
         
          )
  }


  return (
    <div className='sticky top-0 z-10'>
      <Nav />

      <div className='max-w-6xl z-10 bg-white px-3 mx-auto flex justify-between h-24 items-center'>


        <div className='w-28'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO3EZFkbOOO3-lwYGxHH4CgrYdG8kWBJ12nDMNdxPHrA&s" alt="" />
        </div>

        <div>
          <div className='flex items-center'>
            <div className=' hidden md:block hover:border-b-2  relative'>
              <i className='bx absolute top-[20%] right-1 text-xl bx-search'></i>
              <input className='  py-1 px-2 ' onChange={searchhandle} type="search" placeholder='Search' />
              {
            activesearch.length > 0 && (
                <div className="absolute top-20 p-4 bg-slate-600 text-white w-full rounded-xl left-1/2 -translate-x-1/2  flex flex-col gap-2">
                       {
                        activesearch.map(v=>{
                            <span>{v}</span>
                        })
                       }
                </div>
            )
        }
            </div>

            <Link href={"/cart"}>
              <div className=' mx-2 cursor-pointer flex'>
                <h2>CART</h2>
                <button className='w-6 ml-1 text-white rounded-full bg-black'>{cart?.totalitem || 0}</button>
              </div>
            </Link>
            <div className=' ml-2 hidden md:block  cursor-pointer gap-1'>
             <Link href={"/login"}>
             <div className='flex hover:scale-105 duration-200 justify-center gap-1 items-center'>
                <img className='w-6 h-6' src="https://w7.pngwing.com/pngs/58/482/png-transparent-computer-icons-user-login-icon-miscellaneous-monochrome-black-thumbnail.png" alt="" />
                <button className='text-xl'>Log In</button>
              </div>
             </Link>

            </div>
            <i onClick={() => setnav(true)} className={`bx text-4xl cursor-pointer mx-3 font-semibold bx-${nav ? "x" : "menu"}`}></i>

          </div>

        </div>
        {/* slider links */}
        <div className={`bg-white text-black md:bg-black md:text-white w-[50%] md:w-[40%] lg:w-[30%] ${!nav ? "-translate-x-[-100%]" : ""} transition-all duration-1000 h-screen absolute top-0 right-0`}>
          <div className='w-full relative'>
            <i onClick={() => setnav(false)} className="bx cursor-pointer text-5xl absolute top-1 right-1 md:top-3 md:right-3 lg:top-6 lg:right-6 p-5 bx-x"></i>
            <div className='p-5 sm:p-10 md:p-14 lg:p-24 text-xl'>

              <div className=' ml-2 border-b-2 mb-4 block mt-14  md:hidden  cursor-pointer '>
              <Link href={"/login"}>
                <div className='flex gap-2 justify-center'>
                  <img className='w-7' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOWXwl_HONi9kFuA9BtSCTEQqW-Bi_b7RKaQ&usqp=CAU" alt="" />
                  <button className='text-2xl font-bold'>Log In</button>
                </div>
                </Link>
              </div>

              <ul>
                <li className='p-1'>
                  <Link href="/">Home</Link>
                </li>
                <li className='p-1'>
                  <Link href="/card">shop</Link>
                </li>
                <li className='p-1'>
                  <Link href="/">About Us</Link>
                </li>
                <li className='p-1'>
                  <Link href="/contactus">Contact</Link>
                </li>
                <li className='p-1'>
                  <Link href="/card">Blogs</Link>
                </li>
                <li className='p-1'>
                  <Link href="/">Gift Card</Link>
                </li>

              </ul>
            </div>
          </div>



        </div>

      </div>
    </div>


  )
}

export default Navbar