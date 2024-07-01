import Pro from  "./Pro"
import Chrome from '../images/logo-chrome.svg'
import Firefox from '../images/logo-firefox.svg'
import Opera from '../images/logo-opera.svg'
export default function Hero4(){
    return(
      <>
      <div className="flex sm:flex-row flex-col justify-center gap-10 sm:py-10  py-4 items-center"> 
        <div>
        <Pro
      h1='Add to Chromes'
      p='Minimum version 62'
      pic={Chrome}
      minimump={'text-[#9194a1] font-normal'}
      addh1={'font-bold capitalize text-xl'}
      chromediv ="bg-white max-w-[250px] py-4 rounded shadow-md shadow-black flex flex-col gap-4"
      imgh1p='flex flex-col items-center gap-5 text-center'
      addbutton ='flex flex-col items-center gap-4 mt-3'
      dashedline =' outline-dashed outline-[#9194a1] w-[240px]'
      buttonstyle ='bg-[#5976E3] px-5 py-2 rounded font-bold text-white text-center'
      />
      </div>
       <div className="mt-6">
        <Pro
      pic={Firefox}
      h1='Add to Firefox'
      p='Minimum version 55'
      minimump={'text-[#9194a1] font-normal'}
      addh1={'font-bold capitalize text-xl'}
      chromediv ="bg-white max-w-[250px] py-4 rounded shadow-md shadow-black flex flex-col gap-4"
      imgh1p='flex flex-col items-center gap-5 text-center'
      addbutton ='flex flex-col items-center gap-4 mt-3'
      dashedline =' outline-dashed outline-[#9194a1] w-[240px]'
      buttonstyle ='bg-[#5976E3] px-5 py-2 rounded font-bold text-white text-center'
      /></div>
      <div className="mt-16">
      <Pro
       h1='Add to Opera'
       p='Minimum version 46'
      pic={Opera}
      minimump={'text-[#9194a1] font-normal'}
      addh1={'font-bold capitalize text-xl'}
      chromediv ="bg-white max-w-[250px] py-4 rounded shadow-md shadow-black flex flex-col gap-4"
      imgh1p='flex flex-col items-center gap-5 text-center'
      addbutton ='flex flex-col items-center gap-4 mt-3'
      dashedline =' outline-dashed outline-[#9194a1] w-[240px]'
      buttonstyle ='bg-[#5976E3] px-5 py-2 rounded font-bold text-white text-center'
      />
      </div>
     
      </div>
     
      </>
    )
};