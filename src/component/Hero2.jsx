import React from "react";
import Features from '../images/illustration-features-tab-1.svg'
export default function Hero2(){
    return(
       <>
       <section className="flex flex-col gap-0 sm:py-32 py-10  items-center">
        <div className="flex flex-col gap-10 justify-center items-center">
            <h1 className="font-bold text-3xl" >Features</h1>
            <p className="sm:w-[30vw] w-[85vw] text-center font-bold text-[#9194a1] sm:text-sm text-base ">Our aim is to make it quick and easy for you to access your favourite websites. 
              Your bookmarks sync between your devices so you can access them on the go.</p>
            
                <div className="sm:flex sm:flex-row text-[#9194a1]  justify-center sm:gap-20 font-bold flex flex-col gap-9 text-center items-center ">
                    <div className="flex flex-col sm:gap-3 gap-4  ">
                    <h4>Simple Bookmarking</h4>
                    <div className="border-b-4 border-red-500"></div>
                    </div>
                    <div className="flex flex-col sm:gap-3 gap-4 ">
                    <h4>Speedy Searching</h4>
                    <div className="border-b-4 border-white"></div>
                    </div>
                    <div className="flex flex-col sm:gap-3 gap-4 ">
                    <h4>Easy Sharing</h4>
                    <div className="border-b-4 border-white"></div>
                    </div>
                </div>
        </div>
        <div className="sm:flex sm:flex-row items-center sm:py-7 sm:px-0 sm:gap-32 flex flex-col gap-7 py-14">
            <img className="sm:w-[35vw] w-[85vw]" src={Features} alt="fear" />
            
            <div className="flex flex-col gap-4 sm:items-start items-center">
                <h1 className="font-bold text-2xl">Bookmark in one click</h1>
                <p className=" font-bold text-base sm:text-sm sm:w-[25vw] w-[88vw] text-center sm:text-left text-[#9194a1]  ">Organize your bookmarks however you like. Our simple drag-and-drop interface 
                gives you complete control over how you manage your favourite sites.</p>
                <button className="bg-[#5976E3] text-white px-4 py-1 rounded">More Info</button>
            </div>
        </div>
       </section>
       </>
    )
}