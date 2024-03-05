import React from 'react'


const Intro = () => {
  return (
    <div className='flex items-center justify-center w-full h-96 bg-cover bg-no-repeat' style={{ backgroundImage: "url('/home/shashwat/portfolio/src/assets/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjg4Mi1zYXNpLTM5XzEuanBn.png')" }}>
      <section className='w-[70%] h-full flex justify-center items-center'>
         <h1 className='font-sans font-extrabold  sm:text-6xl '>I'm Shashwat</h1>  
         <svg className='w-[30rem]' id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
        <stop id="stop1" stopColor="rgba(0, 0, 0, 1)" offset="0%"></stop>
        <stop id="stop2" stopColor="rgba(0, 0, 0, 1)" offset="100%"></stop>
      </linearGradient>
    </defs>
    <path
      fill="none"
      d="M25.2,2.4C25.2,13.4,12.6,26.8,1.6,26.8C-9.3,26.8,-18.6,13.4,-18.6,2.4C-18.6,-8.5,-9.3,-17,1.6,-17C12.6,-17,25.2,-8.5,25.2,2.4Z"
      width="100%"
      height="100%"
      transform="translate(50 50)"
      strokeWidth="1"
      style={{ transition: "all 0.3s ease 0s" }}
      stroke="url(#sw-gradient)"
    ></path>
  </svg>
      </section>      
    </div>
  )
}

export default Intro

//