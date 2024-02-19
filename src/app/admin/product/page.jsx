"use client"
import axios from 'axios'
import Link from 'next/link'




const page = async () => {
 
 async function fetchdata(){
   var res = await axios.get("http://localhost:3000/api/products")
   return res.data.message
 }
var products = await  fetchdata()

async function deleteproduct(id){
 if(!window.confirm("Are You Sure")){
   return
 }
var res =await axios.delete(`/api/products/?id=${id}`)
if(res.data.success){
 alert(res.data.message)
}
}



 return (
   <div>
     <div className='flex justify-between px-5'>
         <h2 className='text-2xl'>Filters</h2>
         <div>
           <input type="text" placeholder=' search' className='border px-3 py-1 rounded-lg' />
           <Link href={"/admin/product/Addproduct"}>
           <i title='add-product' className="bx bx-plus p-2 border cursor-pointer ml-1 rounded-full text-white bg-indigo-500"></i>
           </Link>
         </div>
       </div>
     <div className='max-w-4xl mx-auto p-4 mt-7'>
       
       <table className='w-full'>
         <thead>
           <tr className='border-b'>
             <th className='text-start'>Product</th>
             <th className='text-start'>Category</th>
             <th className='text-start'>Price</th>
             <th className='text-start'>Stock</th>
             <th className='text-start'>Actions</th>
           </tr>
         </thead>
         <tbody>
           {
             products.map((v,i)=>{
               return(
                 <tr className='border-b'>
             <td className='flex items-center'>
               <img className='w-10 mr-1 mt-3 rounded-lg' src={v.featuredimage.url} alt="" />
               {v.title}</td>
             <td>{v.category}</td>
             <td>{v.price}</td>
             <td>{v.stock}</td>
             <td>
               <Link href={`/admin/product/edit/${v._id}`}>
               <i className="bx mr-4 cursor-pointer text-xl text-indigo-500 bx-edit"></i>
               </Link>
               <i onClick={()=>deleteproduct(v._id)} className="bx cursor-pointer text-xl text-red-500 bx-trash"></i>
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

export default page