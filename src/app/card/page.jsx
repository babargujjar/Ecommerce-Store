import React from 'react'
import axios from 'axios'
import Card from '@/components/Card'




async function fetchdata(){
    var res = await axios.get("http://localhost:3000/api/products")
    return res.data.message
  }
const page =async () => {
    var product = await fetchdata()
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
        {
            product.map(v=>{
              return(
                <Card product={v} />
              )
            })
          }
    </div>
  )
}

export default page