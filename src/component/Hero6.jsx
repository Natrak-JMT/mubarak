import React from "react"
import Book from '../images/logo-bookmark.svg'
import Face from '../images/icon-facebook.svg'
import Twi from '../images/icon-twitter.svg'
const Hero6=()=>{
    return(
        <>
        <section >
            <div className="flex flex-col gap-[30px] text-white  bg-[#5976E3] items-center py-[50px]">
                <h3 className="font-bold uppercase tracking-widest">  35,000+ already joined </h3>
                <h1 className="font-bold sm:text-3xl text-2xl tracking-widest sm:w-[35vw] w-[95vw] text-center"> Stay up-to-date with what we’re doing</h1>
                <form className="flex gap-3 sm:flex-row flex-col">
                    <input className="py-3 rounded sm:w-[30vw] w-[85vw] px-5 text-black" type="email" required placeholder="Enter your email address" />
                    <button className="bg-[#F2002A] px-4 rounded py-3 text-white font-bold"> Contact Us</button>
                </form>
            </div>
            <div>
                <nav className="bg-[#252B46] text-white flex justify-between gap-8 items-center sm:flex-row flex-col sm:py-3 py-10 px-32">
                    <div className="flex sm:gap-14 gap-6 sm:flex-row flex-col">
                    <img className="bg-white px-4 rounded h-7" src={Book} alt="boo" />
                    <ul className="flex sm:gap-10 gap-5  uppercase sm:flex-row flex-col text-center">
                        <li> Features</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                    </ul>
                    </div>
                    <div className="flex gap-6">
                        <img src={Face} alt="fac" />
                        <img src={Twi} alt="twi" />
                        
                    </div>
                </nav>

            </div>
        </section>
        </>
    )
}
export default Hero6