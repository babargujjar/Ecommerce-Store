import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black mt-10 py-20 text-white'>
        <div className='grid grid-cols-4 gap-5 max-w-4xl px-2 mx-auto'>
            <div className=' col-span-2 md:col-span-1'>
                <button className='py-1'>Shop</button><br />
                <button className='py-1'>Stockits</button><br />
                <button className='py-1'>Blogs</button><br />
                <button className='py-1'>Sbout Us</button><br />
                <button>Contact</button><br />
            </div>
            <div className=' col-span-2 md:col-span-1'>
                <button className='py-1'>FAQ</button><br />
                <button className='py-1'>Shipping & Returns</button><br />
                <button className='py-1'>Store Policy</button><br />
                <button>Payment Method</button><br />
            </div>
            <div className=' col-span-4 md:col-span-2'>
                <h2>Enter your email here<span className='text-red-600'>*</span></h2><br />
                <input type="email" className='border-b-red-600 border-b py-2 pl-3 bg-black' /><button className='px-4 rounded-md hover:bg-white hover:text-black ml-2 py-2 text-white border'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Footer