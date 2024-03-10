import React, { useState } from 'react'
import { navLinks } from '../constants'



const Navbar = () => {
  const [nav, setnav] = useState(true)


  

  return (
    <div>
        <header style={{
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontStyle: 'normal'
        }} className='bg-white w-full px-6 shadow-md fixed  border-t-0 border-l-0 border-r-0 border-b-[0.5px] py-6  z-10'>
          <nav className='flex justify-between items-center w-full '>
            <a className={`md:ml-5 ${!nav ? 'hidden': ''} `} href="/">
                <span  className={`md:text-[22px] text-[25px]`}>Shashwat.dev</span>
            </a>
          <div className={`${!nav ? 'flex flex-col-reverse' : ''}`}>
          <ul 
           className={`transition-all ease-in duration-1000   md:text-lg md:mr-12 md:flex md:justify-center md:items-center md:gap-6 max-lg:hidden  ${nav ? 'top-20' : 'gap-y-28 top-[-490px] max-md:flex flex-col text-[20px]  h-screen w-screen justify-start items-start'}`} style={{
           fontFamily: '"Poppins", sans-serif',
           fontWeight: 500,
           fontStyle: 'normal'
}}>

          
                {navLinks.map((item) => (
                  <li className='text-center transition-all ease-in hover:bg-slate-300 cursor-pointer h-[48px] w-[95%] rounded-lg pt-3 items-center' key={item.label}>
                    <a href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}
          </ul>
            <button onClick={() => {setnav(!nav)}} className={`  md:hidden mr-3 text-[32px] hover:text-blue-600 ${!nav ? 'text-[44px] relative' : ""}`}>{

             nav?<i className="ri-menu-line"></i>:<div className='rotate-45 '><i className="ri-add-line"></i></div>
            }
            </button>
          </div>
          </nav>  
          
            
        </header>
    </div>
  )
}

export default Navbar