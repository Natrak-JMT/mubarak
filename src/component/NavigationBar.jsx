import React, { useState } from 'react'
import Logo from '../images/logo-bookmark.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'

const NavigationBar = () => {
    const [menu, setMenu] = useState(false)
    const Drop = ()=>{
        setMenu(!menu)
    }
  return (
    <>
    <nav className='flex justify-between px-4 sm:px-32 py-8 items-center  '>
        <img src={Logo} alt="" />
        <ul className=' hidden sm:flex gap-10 items-center uppercase font-bold text-xs text-[#242C49]'>
            <li>Features</li>
            <li> Pricing</li>
            <li>Contact</li>
            <button className='bg-[#FA5757] px-6 py-1 rounded uppercase font-bold text-white'>Login</button>
        </ul>
        <div className='sm:hidden text-3xl' onClick={Drop} >
             {menu?<IoMdClose />:<GiHamburgerMenu /> } 
         </div>
    </nav>
    <div className={` flex flex-col items-center gap-52 py-14 text-2xl absolute ${menu?'top-16':'-top-full'} bg-[#252B46] transition-all ease-in-out duration-1000 h-full w-full text-center`}>
        <ul className=' text-white flex flex-col gap-11 tracking-widest font-semibold'>
            <li>FEATURES</li>
            <li>PRICING</li>
            <li>CONTACT</li>
            <button className='font-bold border-4 border-white px-32 rounded py-2'>LOGIN</button>
        </ul>
        <div className='flex gap-8'>
                <img src={facebook} alt="face" />
                <img src={twitter} alt="twi " />
        </div>
    </div>
    </>
    )
}
  export default NavigationBar