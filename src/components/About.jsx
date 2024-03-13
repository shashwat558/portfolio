import React from 'react'

const About = () => {
  return (
    <section style={{
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontStyle: 'normal'
        }} className='w-screen h-screen text-center flex flex-col gap-y-4 '>
          <div className='flex justify-center w-full relative '>
     <h1 className='w-[300px]  text-4xl rounded-md inset-2 hover:tracking-wider 
     transition-all ease-linear delay-75 hover:border-b-2'>About Me 👋</h1>
     </div>
     <div className='flex justify-center pt-4 gap-x-12 max-lg:flex-col flex-wrap max-lg:items-center '>
      <div className=' transition-all delay-75'>
        <div>
          <img src="https://imgs.search.brave.com/dxTkWDRFIi8j9I8JyDlnAfJBUtKRjpXulifyUV0CSjE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdDQu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMzky/NC8yMjY4MC9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzIyNjgwODE4/OC1zdG9jay1waG90/by1kZXZlbG9waW5n/LXByb2dyYW1taW5n/LWNvZGluZy10ZWNo/bm9sb2dpZXMtd2Vi/c2l0ZS5qcGc" alt="" width={400} height={400} className='block '/> 
        </div>
           <div>          
           </div>
      </div> 

      <div className='flex flex-col w-1/2 text-2xl justify-around font-[400] text-[#3a3b3f] gap-10 max-lg:w-96 '>
        <p className='text-wrap'>
        Hey there! I'm Shashwat, your friendly neighborhood Full Stack MERN Developer from India. weaving magic with MongoDB, Express.js, React.js, and Node.js to create web wonders. 

        </p>
        </div>     
        
     
      </div>
        
    </section>
  )
}

export default About