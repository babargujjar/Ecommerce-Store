'use client'
import { useState } from "react"





const page = () => {
    const word = [{name:'babar'},{name:'ibrahim'},{name:'a'},{name:'b'}]

    const [activesearch,setactivesearch] = useState([])

    const searchhandle = (e)=>{
        if(e.target.value == ''){
            setactivesearch([])
            return false
        }
        setactivesearch(
            // word.filter(w => w.includes(e.target.value)).slice(0,0)
           word.filter(w => w.name == e.target.value)
           
            )
    }

    // console.log(activesearch)

  return (
    
    <form className="w-[500px] relative">
       
        <div className="relative">
            <input type="search" placeholder="Type Here" className="w-full p-4 rounded-full bg-slate-600" onChange={(e)=>searchhandle(e)} />
        </div>
        {
            activesearch.length > 0 && (
                <div className="absolute top-20 p-4 bg-slate-600 text-white w-full rounded-xl left-1/2 -translate-x-1/2  flex flex-col gap-2">
                       {
                        activesearch.map(v=>{
                            <span>{v}</span>
                        })
                       }
                </div>
            )
        }
       




    </form>
  )
}

export default page