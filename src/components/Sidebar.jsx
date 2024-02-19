import React from 'react'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className='py-4 px-2'>
      <ul>
        <li >
          <Link className='border block p-1 mb-2 rounded-md bg-gray-200' href="/admin"><i className="bx mr-2 bx-home"></i>Home</Link>
        </li>
        <li>
          <Link className='border block p-1 mb-2 rounded-md bg-gray-200' href="/admin/orders"><i className="bx mr-2 bx-cart"></i>Order</Link>
        </li>
        <li>
          <Link className='border block p-1 mb-2 rounded-md bg-gray-200' href="/admin/product"><i className="bx mr-2 bx-tag"></i>Product</Link>
        </li>
        <li>
          <Link className='border block p-1 mb-2 rounded-md bg-gray-200' href="/admin/Analytics"><i className="bx mr-2 bx-chart"></i>Analytics</Link>
        </li>

      </ul>
    </div>
  )
}

export default Sidebar