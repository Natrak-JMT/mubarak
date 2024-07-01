import React from "react"
import Feature from '../images/illustration-features-tab-1.svg'
export default function Hero(){
    return(
        <>
       <section className="sm:flex  sm:flex-row px-40 items-center sm:gap-28 gap-14 sm:mt-20 flex flex-col-reverse">
        <div className="flex flex-col gap-7 items-center sm:items-start">
            <h1 className="font-bold text-4xl sm:w-[30vw] w-[90vw] text-center sm:text-left"> A Simple Bookmark Manager</h1>
            <p className="font-bold sm:w-[31vw] w-[80vw] text-center text-[#9194a1] text-base sm:text-left">A clean and simple interface to organize your favourite websites. Open a new 
            browser tab and see your sites load instantly. Try it for free.</p>
            <div className="flex gap-3">
                <button className="bg-[#5976E3] text-white px-6 py-2 rounded font-bold text-xs">Get it on Chrome</button>
                <button className=" bg-slate-200 border px-6 py-2 rounded font-bold text-[#242C49]  ">Get it on Firefox</button>
            </div>
        </div>
        <div className="w-[85vw] sm:w-[90vw]">
        <img src={Feature} alt="fea" />
        </div>
        
        
       </section>
        
        </>
   

)}
