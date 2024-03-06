import React from 'react'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <div>
        <header style={{
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontStyle: 'normal'
        }} className='bg-white w-full px-6 shadow-md absolute border-t-0 border-l-0 border-r-0 border-b-[0.5px] py-6  z-10'>
          <nav className='flex justify-between items-center'>
            <a className='ml-5' href="/">
                <span  className='text-[22px]'>Shashwat.dev</span>
            </a>

            <ul className=' text-lg mr-12 flex justify-center items-center gap-6 max-lg:hidden 'style={{
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 500,
      fontStyle: 'normal'
        }}>
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a href={item.href}>
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
          </nav>  
            
        </header>
    </div>
  )
}

export default Navbar