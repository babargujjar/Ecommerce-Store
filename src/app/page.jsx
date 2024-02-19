import axios from "axios"
import Card from "../components/Card"
import Link from "next/link"


async function fetchdata(){
  var res = await axios.get("http://localhost:3000/api/products")
  return res.data.message
}

export default async function Home() {
  var product =await fetchdata()
  return (
    <div className='max-w-6xl px-2 mx-auto my-5'>
      <div className='relative'>
        <img className='h-[100vh] w-full ' src="https://i0.wp.com/www.ear-fidelity.com/wp-content/uploads/2022/10/P1054788s-scaled.jpg?fit=2560%2C1707&ssl=1" alt="" />
        <h1 className='absolute text-center top-[40%] left-[10%] md:top-3 md:left-3 text-orange-300 font-bold  text-4xl '>ALWAYS BE ORIGINAL</h1>
        <p className='absolute top-12 left-5 font-semibold text-xl'>New Arrivals Are Here</p>
      </div>
      {/* cards */}
      <div>
        <h1 className="my-10 text-3xl md:my-12 font-semibold md:text-4xl">1.Exclusive Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            product.map((v,i)=>{
              return(
                <Card key={i} product={v} />
              )
            })
          }
        
      
        </div>
        <div className="flex my-10 justify-center">
        <Link href={"/card"}>
        <button className='text-white bg-black px-7 font-semibold py-2 hover:bg-white border hover:text-black'>Shop All</button>
        </Link>
        </div>
        
      </div>
      {/* second last section */}
      <div className="grid gap-5 grid-cols-5">
        <div className="col-span-2">
<img className="w-96 hover:scale-110 transition-all duration-500" src="https://talhareviews.store/cdn/shop/files/Shadow_6d488f56-d559-4f64-ab64-0964eb29d145.jpg?v=1702624496&width=750" alt="" />
        </div>
        <div className="col-span-3 flex items-center">
<div>
<h1 className="text-4xl mb-3">Airpords Pro</h1>
<p>Elevate Your Audio Experience with Precision Sound and Deep Bass <br /> Brilliance."</p>
<button className="text-white mt-3 bg-black px-7 py-2 hover:bg-white border hover:text-black">Order Now</button>
</div>
        </div>
      </div>
    </div>
  )
}
