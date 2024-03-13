import React from 'react'
import HtmlAndCss from '../skillCards/HtmlAndCss'
import TailwindCard from '../skillCards/TailwindCard'
import MongoCard from '../skillCards/MongoCard'
import Express from '../skillCards/Express'
import ReactCard from '../skillCards/ReactCard'
import NodeCard from '../skillCards/NodeCard'
import JavascriptCard from '../skillCards/JavascriptCard'

const SkillSet = () => {
  return (
    <section style={{
      fontFamily: '"Poppins", sans-serif',
      fontWeight: 700,
      fontStyle: 'normal'
        }} className='bg-[#fcfbfb] mt-3  max-lg:h-[56vh]'>
        <div className='w-full h-screen text-center'>
        <span className='text-4xl border-b-4'>Tech Stack</span>
            <div className='md:flex flex-col gap-10 justify-center items-center gap-x-4 border-black mt-4'>
              <div className='flex max-sm:p-8   cursor-pointer  justify-center items-center gap-x-3'>
              <HtmlAndCss />
              <JavascriptCard />
              <TailwindCard />
              </div>
              <div className='flex cursor-pointer  justify-center items-center gap-x-3 mr-7'>
              <MongoCard />
              <Express />
              <ReactCard />
              <NodeCard />
              </div>
                
                
            </div>

        </div>
    </section>
  )
}

export default SkillSet