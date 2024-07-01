import React from "react"
import { useState } from "react";
import { TfiArrowCircleUp } from "react-icons/tfi";
import { TfiArrowCircleDown } from "react-icons/tfi";
const Hero5 = () =>{
  const [menu,setMenu]= useState(false)
  const [how,setHow] = useState('')
  const [is,setIs]=useState('')
  const [what,setWhat]=useState('')
  function updown(){
    setMenu(!menu)
  }
  function hownext(){
    setHow(!how)
  }
  function isnext(){
    setIs(!is)
  }
  function whatnext(){
    setWhat(!what)
  }

return(
    <>
    <section className="sm:py-28 py-14">
    <div className="flex flex-col gap-7 items-center">
        <h1 className="font-bold text-3xl text-center">Frequently Asked Questions</h1>
        <p className="text-[#9194a1] sm:w-[33vw] w-[90vw] text-center font-bold" >Here are some of our FAQs. If you have any other questions you’d like 
        answered please feel free to email us.</p>
        <div className="flex flex-col items-center justify-center py-0">
            <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-3">
                <div className="border-2 border-[#9194a1]"></div>
                <div className="flex items-center sm:gap-[40.6vw] gap-[49vw]">
                <h1 className="font-bold text-[#9194a1] sm:text-xl">What is Bookmark?</h1>
                <div onClick={updown} className="text-xl">
               {menu?<TfiArrowCircleUp />:<TfiArrowCircleDown />}
               </div>
                 </div>
                 { menu &&(<p className="sm:w-[40vw] w-[95vw] relative top-0"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                 justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.</p>)}
                <div className="border-2 border-[#9194a1]"></div>
            </div>
            <div className=" flex flex-col gap-3">
               <div className="flex items-center sm:gap-[31vw] gap-[21vw]"   >
                    <h1 className="font-bold text-[#9194a1] sm:text-xl">How can I request a new browser? </h1>
                    <div className="text-xl" onClick={hownext}>
                         {how?<TfiArrowCircleUp />:<TfiArrowCircleDown />}
                    </div>
                </div>
                { how &&(
                  <p className="sm:w-[45vw] w-[95vw]">Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                  Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                  ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                  Mauris augue massa, ultricies non ligula. Suspendisse imperdie</p>
                )}
                 <div className="border-2 border-[#9194a1]"></div>
            </div>
            <div className=" flex flex-col gap-3" >
               <div className="flex items-center sm:gap-[39vw] gap-[44vw]"  >
                    <h1 className="font-bold text-[#9194a1] sm:text-xl">Is there a mobile app?</h1>
                    <div className="text-xl" onClick={isnext}>
                         {is?<TfiArrowCircleUp />:<TfiArrowCircleDown />}
                    </div>
                </div>
                { is &&(
                  <p className="sm:w-[45vw] w-[95vw]">Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
                  urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
                  sollicitudin ex et ultricies bibendum.</p>
                )}
                 <div className="border-2 border-[#9194a1]"></div>
            </div>
            <div className=" flex flex-col gap-3">
               <div className="flex items-center sm:gap-[27.4vw] gap-10"  >
                    <h1 className="font-bold text-[#9194a1] sm:text-xl">What about other Chromium browsers? </h1>
                    <div className="text-xl" onClick={whatnext}>
                         {what?<TfiArrowCircleUp />:<TfiArrowCircleDown />}
                    </div>
                </div>
                { what &&(
                  <p className="sm:w-[45vw] w-[95vw]">Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
                                vitae neque eget nisl gravida pellentesque non ut velit.</p>
                )}
                 <div className="border-2 border-[#9194a1]"></div>
            </div>
            </div>

        </div>
        <button className="bg-[#5976E3]  px-5 py-2 text-center rounded text-white font-bold">More Info</button>
    </div>
</section>
    </>
)
}
export default Hero5