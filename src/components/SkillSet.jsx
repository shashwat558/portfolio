import React from 'react'
import HtmlAndCss from '../skillCards/HtmlAndCss'

const SkillSet = () => {
  return (
    <section style={{
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontStyle: 'normal'
        }}>
        <div className='w-screen h-screen text-center'>
        <span className='text-3xl border-b-4'>Tech Stack</span>
            <div className='md:flex justify-center items-center border-black'>
              
              <HtmlAndCss />
                
                
            </div>

        </div>
    </section>
  )
}

export default SkillSet