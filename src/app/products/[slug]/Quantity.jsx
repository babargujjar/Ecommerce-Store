"use client"
import { GlobalData } from '@/Context/Context'
import {useState,useContext} from 'react'

const Quantity = ({product}) => {

    var {addtocart,decreaseQuantity,cart} = useContext(GlobalData)
    
   var quantity = cart?.cartitem.filter(v=>v._id==product._id)[0]?.quantity || 0
    return (
        <div>
            <div>
                <button onClick={()=>decreaseQuantity(product)} disabled={quantity==0} className='border cursor-pointer mr-3 px-2 py-2 text-xl font-semibold bg-gray-200'>-</button>
                <button className='text-lg font-semibold'>{quantity}</button>
                <button onClick={()=>addtocart(product)} className='border cursor-pointer ml-3 px-2 text-xl font-semibold py-2 bg-gray-200'>+</button>
                <button onClick={()=>addtocart(product)} className='ml-5 bg-black text-white px-3 py-2'>Add To Cart</button>

            </div>
        </div>
    )
}

export default Quantity