import React from 'react'

const Intro = () => {
  return (
    <section style={{
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontStyle: 'normal'
        }} className='bg-[#f3f3f3] w-screen max-lg:h-[750px] h-[650px] relative flex justify-center items-center max-lg:pt-28 max-lg:sticky '>
 
      <div className='mt-2 w-full h-screen flex items-center justify-center gap-x-24
       max-lg:flex-col-reverse max-lg:justify-center max-lg:gap-y-10'>
        <div className='max-lg:text-center max-lg:flex max-lg:flex-col items-center '>
          <h1 className='text-7xl text-[#2d2e32] max-lg:text-3xl '>Full-Stack MERN <br /> Developer 🌐</h1>
          <p  className=' mt-5 text-lg max-lg:text-sm font-[400] tracking-[0.04rem] text-[#2d2e32]'>Hi there! I'm Shashwat Jain,<br /> an enthusiastic Full stack Developer <br /> hailing from the beautiful city of Bhopal, India</p>
          <a href="https://github.com/shashwat558" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-brand-github max-lg:mt-[8px] mt-8 sticky  hover:text-blue-500">
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
          </svg></a>

        </div>
        <div className='border-4 border-gray-950 h-[300px] w-[300px] max-lg:w-[270px] max-lg:h-[270px] rounded-full overflow-hidden relative '>
          

          <img className='bg-cover'  src="src/assets/WhatsApp Image 2023-12-23 at 10.43.27 PM.jpg" alt="fsd" 
            width={400}
            height={400}/>
          <div className="item" style={{}}>1</div>
        </div>
      </div> 
        
    </section>
  )
}

export default Intro