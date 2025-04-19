// "use client"
// import React, { useState } from 'react'


// const StepOne = ({onNext}) => {
//     return (
//         <div>
//             <h1>Step 1</h1>
//             <input placeholder='name'/>
//             <button onClick={onNext}>Next</button>
//         </div>
//     )
    
// }


// const StepTwo = ({onPrevious, onNext}) => {
//     return (
//         <div>
//             <h1>Step 2</h1>
//             <input type="text" placeholder='email' />
//             <button onClick={onPrevious}>Previous</button>
//             <button onClick={onNext}>Next</button>
//         </div>
//     )
// }

// const StepThree = ({onPrevious}) => {
//     return (
//         <div>
//             <h1>Step 3</h1>
//             <input type="password" placeholder='password' />
//             <button onClick={onPrevious}>Previous</button>
//             <button>Submit</button>
//         </div>
//     )
// }
// const StepCounter = () => {
//     const [steps, setSteps] = useState(1);




    
//   return (
//     <div className='w-full flex justify-center items-center'>
//         <h1>Welcome to this form</h1>
//         {steps === 1 && <StepOne onNext={() => setSteps(2)}/>}
//         {steps === 2 && <StepTwo onNext={() => setSteps(3)} onPrevious={() => setSteps(1)}/>}
//         {steps === 3 && <StepThree onPrevious={() => setSteps(2)} />}

//         {(<div className='w-[100px] h-2 border-gray-200 border-1'>
//             <div className={` h-full bg-blue-500  transition-all ease-in-out duration-1000`} style={{
//                 width: `${(steps/3) * 100}%`
//             }}></div>

//         </div>)}
//     </div>
//   )
// }

// export default StepCounter

import React from 'react'

const StepCounter = () => {
  return (
    <div>StepCounter</div>
  )
}

export default StepCounter