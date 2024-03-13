import React from 'react'

const About = () => {
  return (
    <section style={{
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontStyle: 'normal'
        }} className='w-screen h-screen text-center '>
          <div className='flex justify-center w-full relative'>
     <h1 className='w-[250px]  text-4xl rounded-md inset-2  hover:border-b-2  border-gray-600 '>About Me 👋</h1>
     </div>
     <div className=' flex justify-around pt-4 '>
      <div className=''>
        <div>
          <img src="https://imgs.search.brave.com/dxTkWDRFIi8j9I8JyDlnAfJBUtKRjpXulifyUV0CSjE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdDQu/ZGVwb3NpdHBob3Rv/cy5jb20vMTAwMzky/NC8yMjY4MC9pLzQ1/MC9kZXBvc2l0cGhv/dG9zXzIyNjgwODE4/OC1zdG9jay1waG90/by1kZXZlbG9waW5n/LXByb2dyYW1taW5n/LWNvZGluZy10ZWNo/bm9sb2dpZXMtd2Vi/c2l0ZS5qcGc" alt="" width={400} height={400} className='block '/> 
        </div>
           <div>          
           </div>
      </div> 

      <div>
        <p>
          Hey There!, I am Shashwat jain, Currently I am improving my full stack skills 

        </p>
        <p>

        </p>
        </div>     
        
     
      </div>
        
    </section>
  )
}

export default About