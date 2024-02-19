"use client"
import axios from 'axios';
import React, { useState,useEffect } from 'react';




const page = ({params}) => {



  const [formData, setFormData] = useState({
    title: '',
    featuredimage:{
      url:'',
      altText:''
    },
    relatedimages: [
      {
        url: '',
        altText: ''
      }
    ],
    price: 0,
    description: '',
    stock: 0,
    category: ''
  });
  const [tempimg,settempimg] = useState(null)
 
  async function uploadimgtocloud (){
   try {
    var data = new FormData()
    data.append("file",tempimg)
    data.append("upload_preset","mc79qcam")
   var res = await fetch("https://api.cloudinary.com/v1_1/dwy21v8tm/image/upload",{
    method:"POST",
    body:data
   })
   var res =await res.json()
   
   return res.url
   } catch (error) {
    res.json({
        success:false,
        message:error.message
    })
    console.log(error)
    
   }
  }


  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value});
  };

  const uploaddata = async (e) => {
    
   e.preventDefault()
   var curl = tempimg ? await uploadimgtocloud() : formData.featuredimage.url
   var res = await axios.put("/api/products",{...formData,featuredimage:{url:curl}}) 
   if(res.data.success){
    alert(res.data.message)
   }


  }
  async function getsingalproduct(){
    var res = await axios.get(`/api/products?id=${params.id}`)
   
    setFormData(res.data.message[0])
  }
  useEffect(()=>{
    getsingalproduct()
  },[])


  return (
    <div className='border p-5 max-w-4xl mx-auto'>
        <h2 className='text-2xl pt-3 pb-5'>Edit Product</h2>
      <form onSubmit={uploaddata}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            onChange={changeHandler}
            className='block border w-full py-2 px-4 mb-4'
            name='title'
            placeholder='Product Title'
            type="text"
            value={formData.title}
          />
        </div>

       {
        tempimg || formData.featuredimage ? (
            <div className='relative'>
            <img className='mb-4' src={tempimg? URL.createObjectURL(tempimg) : formData.featuredimage?.url } alt="" />
            <div className='absolute top-4 right-4  bg-red-600 text-white rounded-full text-3xl'>
            <i onClick={()=>settempimg(null)} className="bx p-1 cursor-pointer bx-x"></i>
            </div>
           </div>
        )
      
       :
      (
        <div>
        <label htmlFor="featuredimage.url">Featured Image URL</label>
        <input
          onChange={(e)=>settempimg(e.target.files[0])}
          className='block border w-full py-2 px-4 mb-4'
          name='featuredimage.url'
          placeholder='Featured Image URL'
          type="file"
         />
      </div>
      )
       }

        {/* <div>
          <label htmlFor="fetchuredimage.altText">Featured Image Alt Text</label>
          <input
            onChange={changeHandler}
            className='block border w-full py-2 px-4 mb-4'
            name='fetchuredimage.altText'
            placeholder='Featured Image Alt Text'
            type="text"
            value={formData.fetchuredimage.altText}
          />
        </div> */}

        {/* <div>
        <label htmlFor="relatedimages[0].url">Related Image URL</label>
        <input
          onChange={changeHandler}
          className='block border w-full py-2 px-4 mb-4'
          name='relatedimages[0].url'
          placeholder='Related Image URL'
          type="text"
          value={formData.relatedimages[0].url}
        />
      </div>

      <div>
        <label htmlFor="relatedimages[0].altText">Related Image Alt Text</label>
        <input
          onChange={changeHandler}
          className='block border w-full py-2 px-4 mb-4'
          name='relatedimages[0].altText'
          placeholder='Related Image Alt Text'
          type="text"
          value={formData.relatedimages[0].altText}
        />
      </div> */}

       

        <div>
          <label htmlFor="description">Description</label>
          <textarea
            onChange={changeHandler}
            className='block border w-full py-2 px-4 mb-4'
            name='description'
            placeholder='Product Description'
            type="text"
            value={formData.description}
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <input
            onChange={changeHandler}
            className='block border w-full py-2 px-4 mb-4'
            name='category'
            placeholder='Product Category'
            type="text"
            value={formData.category}
          />
        </div>

        <div>
          <label htmlFor="stock">Stock</label>
          <input
            onChange={changeHandler}
            className='block border w-full py-2 px-4 mb-4'
            name='stock'
            placeholder='Product Stock'
            type="number"
            value={formData.stock}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            onChange={changeHandler}
            className='block border w-full py-2 px-4 mb-4'
            name='price'
            placeholder='Product Price'
            type="number"
            value={formData.price}
          />
        </div>

       
        <button className='border text-white bg-indigo-500 px-4 py-2'>Submit</button>
      </form>


    </div>
  );
};




export default page