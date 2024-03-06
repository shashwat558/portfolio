import React from 'react'
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <div>
        <header style={{
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontStyle: 'normal'
        }} className='w-full px-6 shadow-sm min	 border-[2px] py-6 fixed z-10'>
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