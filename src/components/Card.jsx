"use client"
import React from 'react'
import Link from 'next/link'
import { useContext } from 'react'
import { GlobalData } from '@/Context/Context'

const Card = ({product}) => {
   
    var {addtocart} = useContext(GlobalData)
    
    return (
        <div className='group overflow-hidden'>
            <div className='h-80'>
                <Link href={`/products/${product._id}`}>
                <img className='w-full relative hover:opacity-45 hover:scale-110 transition-all duration-500 h-full' src={product.featuredimage?.url} alt="" />
                </Link>
               
            </div>
            <div className='mt-2 text-center p-2'>
                <h2 className='text-xl line-clamp-1 w-full '>{product.title}</h2>
                <strike className="text-gray-400">Rs {product.price*2}</strike> <br />
                <p>Rs {product.price}</p>
                <button onClick={()=>addtocart(product)} className='bg-black text-white px-3 py-2 opacity-0 group-hover:transition-all duration-700 group-hover:opacity-100 mt-1 hover:bg-white border hover:text-black'>Add To Cart</button>
            </div>
            
        </div>
    )
}

export default Card