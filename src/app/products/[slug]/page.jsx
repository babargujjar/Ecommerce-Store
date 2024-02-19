import React from 'react'
import Images from './Images'
import Quantity from './Quantity'
import axios from 'axios'

async function findproductbyid(id){
  var res = await axios.get(`http://localhost:3000/api/products?id=${id}`)
  return res.data.message[0]
}

const page = async (prop) => {

    var product = await findproductbyid(prop.params.slug) 
    
 
    
    return (
        <div>
          
             <div className='grid max-w-6xl mx-auto grid-cols-1 gap-5 md:grid-cols-2 py-5'>

                {/* images */}
               <Images fimage={product.featuredimage.url} rimage={product.relatedimages} />

                {/* description */}

                <div className='border p-2'>
                    <h2 className='text-xl mb-4 line-clamp-2 md:line-clamp-3'>{product.description}</h2>
                    <p className='text-lg font-semibold mb-5'><strike className='text-gray-500 mr-1 '>$179</strike>${product.price}</p>
                
                {/* quantity */}
                  <Quantity product={product} />
                </div>


            </div> 

        </div>
    )
}

export default page