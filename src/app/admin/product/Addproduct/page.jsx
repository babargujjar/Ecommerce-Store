"use client"
import axios from 'axios'
import React, { useState } from 'react'




const page = () => {

    var [formdata, setformdata] = useState({
        title: "",
        featuredimage: {
            url: "",
            altText: ""
        },
        relatedimages: [
            {
                url: "",
                altText: ""
            }
        ],
        price: 0,
        stock: 0,
        description: "",
        category: ""
    })

    var [tempimg, settempimg] = useState(null)

    var changeHandler = (e) => {

        setformdata({ ...formdata, [e.target.name]: e.target.value })

    }

    const submitdata = async (e) => {
        e.preventDefault()
        alert("Product Uploading")
        var curl = tempimg ? await uploadimgtocloud() : formdata.featuredimage.url
        console.log(curl)
        var res = await axios.post("/api/products", { ...formdata, featuredimage: { url: curl } })
    }

    async function uploadimgtocloud() {

        try {
            var data = new FormData()
            data.append("file", tempimg)
            data.append("upload_preset", "mc79qcam")
            var res = await fetch("https://api.cloudinary.com/v1_1/dwy21v8tm/image/upload", {
                method: "POST",
                body: data
            })
            var res = await res.json()
            return res.url
        } catch (error) {
            res.json({
                success: false,
                message: error.message
            })
            alert("failed")

        }
    }

    return (
        <div>
            <div className='border p-5 max-w-4xl mx-auto'>
                <h2 className='text-2xl pt-3 pb-5'>Upload Product</h2>
                <form onSubmit={submitdata}>
                    <div>
                        <label htmlFor="title">Title</label>
                        <input
                            onChange={changeHandler}
                            className='block border w-full py-2 px-4 mb-4'
                            name='title'
                            placeholder='Product Title'
                            type="text"
                            value={formdata.title}
                        />
                    </div>
                    {/* <div>
    <label htmlFor="featuredimage">Featured Image URL</label>
    <input
        onChange={changeHandler}
        className='block border w-full py-2 px-4 mb-4'
        name='featuredimage'
        placeholder='Featured Image URL'
        type="file"
        value={formdata.featuredimage.url}
    />
</div> */}
                    {
                        tempimg ? (
                            <div className='relative'>
                                <img className='mb-4' src={tempimg ? URL.createObjectURL(tempimg) : formdata.featuredimage.url} alt="" />
                                <div className='absolute top-4 right-4  bg-red-600 text-white rounded-full text-3xl'>
                                    <i onClick={() => settempimg(null)} className="bx p-1 cursor-pointer bx-x"></i>
                                </div>
                            </div>
                        )

                            :
                            (
                                <div>
                                    <label htmlFor="featuredimage.url">Featured Image URL</label>
                                    <input
                                        onChange={(e) => settempimg(e.target.files[0])}
                                        className='block border w-full py-2 px-4 mb-4'
                                        name='featuredimage.url'
                                        placeholder='Featured Image URL'
                                        type="file"
                                    />
                                </div>
                            )
                    }

                    {/* <div>
    <label htmlFor="featuredImageAltText">Featured Image Alt Text</label>
    <input
        onChange={changeHandler}
        className='block border w-full py-2 px-4 mb-4'
        name='featuredImageAltText'
        placeholder='Featured Image Alt Text'
        type="text"
        value={formdata.featuredimage.altText}
    />
</div> */}
                    {/* {formdata.relatedimages.map((relatedImage, index) => (
    <div key={index}>
        <label htmlFor={`relatedImageURL${index}`}>Related Image URL {index + 1}</label>
        <input
            onChange={(e) => handleRelatedImageChange(e, index)}
            className='block border w-full py-2 px-4 mb-4'
            name={`relatedImageURL${index}`}
            placeholder={`Related Image URL ${index + 1}`}
            type="file"
            value={relatedImage.url}
        />

        <label htmlFor={`relatedImageAltText${index}`}>Related Image Alt Text {index + 1}</label>
        <input
            onChange={(e) => handleRelatedImageAltTextChange(e, index)}
            className='block border w-full py-2 px-4 mb-4'
            name={`relatedImageAltText${index}`}
            placeholder={`Related Image Alt Text ${index + 1}`}
            type="text"
            value={relatedImage.altText}
        />
    </div>
))} */}
                    <div>
                        <label htmlFor="price">Price</label>
                        <input
                            onChange={changeHandler}
                            className='block border w-full py-2 px-4 mb-4'
                            name='price'
                            placeholder='Product Price'
                            type="number"
                            value={formdata.price}
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
                            value={formdata.stock}
                        />
                    </div>

                    <div>
                        <label htmlFor="description">Description</label>
                        <textarea
                            onChange={changeHandler}
                            className='block border w-full py-2 px-4 mb-4'
                            name='description'
                            placeholder='Product Description'
                            value={formdata.description}
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
                            value={formdata.category}
                        />
                    </div>
                    <button className='border text-white bg-indigo-500 px-4 py-2'>Submit</button>

                </form>
            </div>
        </div>
    )
}

export default page