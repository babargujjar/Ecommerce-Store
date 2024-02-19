 "use client"
 import React from 'react'
import { useState } from 'react'

const Images = ({fimage,rimage}) => {

    var [img,setimg] = useState(fimage)
  return (
    <div>
         <div className='grid grid-cols-1 gap-5'>
                    <div className='w-full border'>
                        <img className='cursor-pointer w-full' src={img} alt={img.altText} />
                    </div>
                    <div className='grid gap-5 grid-cols-4'>
                       
                        <div>
                            <img onClick={()=>setimg('https://rukminim1.flixcart.com/image/450/500/xif0q/shoe/7/2/m/6-tm-12-6-trm-white-original-imagjqyzz8z9jrgf.jpeg?q=90&crop=false')} className='cursor-pointer' src="https://rukminim1.flixcart.com/image/450/500/xif0q/shoe/7/2/m/6-tm-12-6-trm-white-original-imagjqyzz8z9jrgf.jpeg?q=90&crop=false" alt="" />
                        </div>
                        <div>
                        <img onClick={()=>setimg('https://cf.shopee.ph/file/d1901a3bf2d745188873e202bb1b05d1')} className='cursor-pointer' src="https://cf.shopee.ph/file/d1901a3bf2d745188873e202bb1b05d1" alt="" />

                        </div>
                        <div>
                            <img onClick={()=>setimg('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmfyuWBcnoWRZ4WsNOz7kjV1CgDPzP229vnqdqioJzZwic8n7wkRjkVYUPVfxZQbg7cHo&usqp=CAU')} className='cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmfyuWBcnoWRZ4WsNOz7kjV1CgDPzP229vnqdqioJzZwic8n7wkRjkVYUPVfxZQbg7cHo&usqp=CAU" alt="" />
                        </div>
                        <div>
                            <img onClick={()=>setimg('https://5.imimg.com/data5/YC/GV/XN/ANDROID-83761084/product-jpeg-500x500.jpg')} className='cursor-pointer' src="https://5.imimg.com/data5/YC/GV/XN/ANDROID-83761084/product-jpeg-500x500.jpg" alt="" />
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Images