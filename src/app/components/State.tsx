
"use client"
import {useState} from "react"

function State(){
    const [count , setCount] = useState(0)
    return(
        <div className="border sm:rounded-lg  w-full h-full py-20  bg-emerald-300 text-center">
            <div className="border-2 border-yellow-200 mx-10 py-10">
            <div>
                <p className="sm:text-center text-5xl pt-4"> {count} </p>
                <button onClick={() => setCount(count + 1) } className="bg-slate-400 shadow-md border border-slate-500 py-6 px-6 rounded-full mx-4 mt-40 hover:bg-slate-500 ">  </button><br/>
                <p className="text-gray-800 text-sm">Count</p>
            </div>

            <div className=" pb">
                <button onClick={() => setCount(0)} className="bg-slate-600 hover:bg-slate-700 rounded-full ml py-2 px-2 shadow-sm mt-32"></button>
                <p className="text-gray-800 text-xs ">Reset</p>
            </div>
            </div>

        </div>
    )
}
export default State