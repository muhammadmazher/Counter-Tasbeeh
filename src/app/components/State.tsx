
"use client"
import {useState} from "react"

function State(){
    const [count , setCount] = useState(0)
    return(
        <div className="border sm:rounded-lg  w-12/12 py-20  bg-emerald-200 text-center">
            <div>
                <p className="sm:text-center text-4xl"> {count} </p>
                <button onClick={() => setCount(count + 1) } className="bg-slate-400 shadow-md border-slate-500 py-6 px-6 rounded-full mx-4 mt-32">  </button><br/>
                <p className="text-gray-800 text-sm">Count</p>
            </div>

            <div className=" pb">
                <button onClick={() => setCount(0)} className="bg-slate-500 rounded-full ml py-2 px-2 shadow-sm mt-20"></button>
                <p className="text-gray-800 text-xs ">Reset</p>
            </div>

        </div>
    )
}
export default State