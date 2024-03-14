import React, { useEffect, useState } from 'react'

const Projects = () => {
    const [text, settext] = useState("..")
    useEffect(() => {
        const intervalId = setInterval(() => {
            settext("...")
        }, 2000);

        return () => {
            clearInterval(intervalId);
        } },[])
  return (
    <section  style={{
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
        fontStyle: 'normal'}}
         className='h-[64vh]'>
        <div className='w-screen h-full flex justify-center items-center'>
            <h1 className='text-6xl'>Coming Soon{text}</h1>
        </div>        
    </section>
  )
}

export default Projects