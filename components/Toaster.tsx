"use client"

import Toast from './Toast'
import { AnimatePresence } from 'framer-motion'

import useToastStore from '@/lib/toastStore'



const Toaster = () => {
   const {toasts} = useToastStore()
    
    


   
  return (
    <div className='absolute top-[10%] left-[80%] z-10'>
        
     <AnimatePresence>
        {toasts.map((toast) => (
            <Toast key={toast.id} message={toast.message} toastType={toast.type}/>
        ))}
    </AnimatePresence>
    </div>

  )
}

export default Toaster