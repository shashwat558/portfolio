"use client"
import React, { useState } from 'react'

import {motion} from "framer-motion";
import Projects from './Projects';
import { Playfair_Display, Press_Start_2P } from 'next/font/google';
import SendMessageComponent from './SendMessageComponent';
import Experience from './Experience';

const playShortClick = () => {
  const audio = new Audio("/click.mp3");

  audio.play();

  
  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0; 
  }, 1000);
};

const retroFont = Press_Start_2P({
  weight: "400",
  subsets: ["latin"]
})

const playFair = Playfair_Display({
  weight: "400",
  subsets: ["latin"]
})



const options = [
    {
        name: "Experience",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Interface-Essential-Waiting-Hourglass-Loading--Streamline-Pixel" height="50" width="50"><title>My Experience</title><g><path d="m14.857499999999998 20.0025 0 1.1400000000000001 2.2800000000000002 0 0 1.1475 -10.2825 0 0 -1.1475 2.2874999999999996 0 0 -1.1400000000000001 -2.2874999999999996 0 0 -2.2874999999999996 -1.1400000000000001 0 0 4.574999999999999 -2.2874999999999996 0 0 1.1400000000000001 17.145 0 0 -1.1400000000000001 -2.2874999999999996 0 0 -4.574999999999999 -1.1475 0 0 2.2874999999999996 -2.2800000000000002 0z" fill="#000000" strokeWidth="0.75"></path><path d="M15.997499999999999 15.4275h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M15.997499999999999 6.285h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M14.857499999999998 14.287500000000001h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M13.71 13.1475h1.1475v1.1400000000000001h-1.1475Z" fill="#000000" strokeWidth="0.75"></path><path d="M12.57 18.855h2.2874999999999996v1.1475h-2.2874999999999996Z" fill="#000000" strokeWidth="0.75"></path><path d="m14.857499999999998 10.86 0 -1.1475 1.1400000000000001 0 0 -1.1400000000000001 -8.0025 0 0 1.1400000000000001 1.1475 0 0 1.1475 1.1400000000000001 0 0 2.2874999999999996 1.1475 0 0 5.7075000000000005 1.1400000000000001 0 0 -5.7075000000000005 1.1400000000000001 0 0 -2.2874999999999996 1.1475 0z" fill="#000000" strokeWidth="0.75"></path><path d="M9.1425 18.855h2.2874999999999996v1.1475h-2.2874999999999996Z" fill="#000000" strokeWidth="0.75"></path><path d="M9.1425 13.1475h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M7.995 14.287500000000001h1.1475v1.1400000000000001h-1.1475Z" fill="#000000" strokeWidth="0.75"></path><path d="M6.855 15.4275h1.1400000000000001v2.2874999999999996H6.855Z" fill="#000000" strokeWidth="0.75"></path><path d="M6.855 6.285h1.1400000000000001v2.2874999999999996H6.855Z" fill="#000000" strokeWidth="0.75"></path><path d="m6.855 1.7175 10.2825 0 0 4.5675 1.1475 0 0 -4.5675 2.2874999999999996 0 0 -1.1475 -17.145 0 0 1.1475 2.2874999999999996 0 0 4.5675 1.1400000000000001 0 0 -4.5675z" fill="#000000" strokeWidth="0.75"></path></g></svg> ,
        component: <Experience />
    },
    {
        name: "Projects",
        icon: <svg className="terminal-svg" width="50" height="50" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><title>My projects</title><rect width="40" height="40" fill="white" fillOpacity="0"></rect><rect x="3.875" y="4.875" width="34.625" height="34.625" className="fill-current stroke-current"></rect><rect x="1.5" y="2.5" width="34.625" height="34.625" fill="white" className="stroke-current"></rect><rect x="35.4375" y="2" width="1.1875" height="1.1875" fill="white"></rect><rect x="34.4941" y="35.5" width="1.1875" height="1.1875" fill="fill-current"></rect><rect x="1" y="2" width="1.1875" height="1.1875" fill="white"></rect><rect x="1" y="36.4375" width="1.1875" height="1.1875" fill="white"></rect><rect x="3.375" y="38.8125" width="1.1875" height="1.1875" fill="white"></rect><rect x="37.8125" y="38.8125" width="1.1875" height="1.1875" fill="white"></rect><rect x="37.8125" y="4.375" width="1.1875" height="1.1875" fill="white"></rect><rect x="15.8213" y="26.2188" width="12.3845" height="1.25" className="fill-current"></rect><rect x="19.415" y="17.5156" width="1.25" height="1.8911" transform="rotate(90 19.415 17.5156)" className="fill-current"></rect><rect x="18.0645" y="16.6211" width="1.25" height="1.8911" transform="rotate(90 18.0645 16.6211)" className="fill-current"></rect><rect x="16.7129" y="15.7266" width="1.25" height="1.8911" transform="rotate(90 16.7129 15.7266)" className="fill-current"></rect><rect x="15.3623" y="14.8359" width="1.25" height="1.8911" transform="rotate(90 15.3623 14.8359)" className="fill-current"></rect><rect x="15.3623" y="20.1953" width="1.25" height="1.8911" transform="rotate(90 15.3623 20.1953)" className="fill-current"></rect><rect x="14.0107" y="21.0859" width="1.25" height="1.8911" transform="rotate(90 14.0107 21.0859)" className="fill-current"></rect><rect x="12.6602" y="21.9805" width="1.25" height="1.8911" transform="rotate(90 12.6602 21.9805)" className="fill-current"></rect><rect x="14.0107" y="13.9414" width="1.25" height="1.8911" transform="rotate(90 14.0107 13.9414)" className="fill-current"></rect><rect x="12.6602" y="13.0508" width="1.25" height="1.8911" transform="rotate(90 12.6602 13.0508)" className="fill-current"></rect><rect x="11.3086" y="12.1562" width="1.25" height="1.8911" transform="rotate(90 11.3086 12.1562)" className="fill-current"></rect><rect x="11.3086" y="22.8711" width="1.25" height="1.8911" transform="rotate(90 11.3086 22.8711)" className="fill-current"></rect><rect x="16.7129" y="19.3008" width="1.25" height="1.8911" transform="rotate(90 16.7129 19.3008)" className="fill-current"></rect><rect x="18.0645" y="18.4062" width="1.25" height="1.8911" transform="rotate(90 18.0645 18.4062)" className="fill-current"></rect></svg>,
        component: <Projects />
    },
    {
        name: "blogs",
        icon:<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Interface-Essential-Edit-Fill--Streamline-Pixel" height="50" width="50"><title>Read my blogs!</title><g><path d="M22.86 9.1425H24v12.57h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M22.86 2.2874999999999996H24v3.4275h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M21.7125 21.7125h1.1475v1.1475h-1.1475Z" fill="#000000" strokeWidth="0.75"></path><path d="M21.7125 5.715h1.1475v1.1400000000000001h-1.1475Z" fill="#000000" strokeWidth="0.75"></path><path d="M21.7125 1.1400000000000001h1.1475v1.1475h-1.1475Z" fill="#000000" strokeWidth="0.75"></path><path d="M20.572499999999998 6.855h1.1400000000000001v1.1475h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M20.572499999999998 4.574999999999999h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M2.2874999999999996 22.86h19.424999999999997V24H2.2874999999999996Z" fill="#000000" strokeWidth="0.75"></path><path d="M19.4325 8.0025h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M19.4325 3.4275h1.1400000000000001V4.574999999999999h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M18.285 0h3.4275v1.1400000000000001h-3.4275Z" fill="#000000" strokeWidth="0.75"></path><path d="M18.285 9.1425h1.1475v1.1400000000000001h-1.1475Z" fill="#000000" strokeWidth="0.75"></path><path d="M18.285 4.574999999999999h1.1475v1.1400000000000001h-1.1475Z" fill="#000000" strokeWidth="0.75"></path><path d="M18.285 2.2874999999999996h1.1475v1.1400000000000001h-1.1475Z" fill="#000000" strokeWidth="0.75"></path><path d="M17.145 10.2825h1.1400000000000001v1.1475h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M17.145 5.715h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M17.145 1.1400000000000001h1.1400000000000001v1.1475h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M15.997499999999999 11.43h1.1475v1.1400000000000001h-1.1475Z" fill="#000000" strokeWidth="0.75"></path><path d="M15.997499999999999 6.855h1.1475v1.1475h-1.1475Z" fill="#000000" strokeWidth="0.75"></path><path d="M15.997499999999999 2.2874999999999996h1.1475v1.1400000000000001h-1.1475Z" fill="#000000" strokeWidth="0.75"></path><path d="M14.857499999999998 12.57h1.1400000000000001v1.1475h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M14.857499999999998 8.0025h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M14.857499999999998 3.4275h1.1400000000000001V4.574999999999999h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M13.7175 11.43h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M13.7175 9.1425h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M13.7175 4.574999999999999h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="m12.57 12.57 -1.1400000000000001 0 0 -1.1400000000000001 -1.1475 0 0 -2.2874999999999996 -1.1400000000000001 0 0 5.715 5.715 0 0 -1.1400000000000001 -2.2874999999999996 0 0 -1.1475z" fill="#000000" strokeWidth="0.75"></path><path d="M12.57 10.2825h1.1475v1.1475h-1.1475Z" fill="#000000" strokeWidth="0.75"></path><path d="M12.57 5.715h1.1475v1.1400000000000001h-1.1475Z" fill="#000000" strokeWidth="0.75"></path><path d="M11.43 9.1425h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M11.43 6.855h1.1400000000000001v1.1475h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M10.2825 8.0025h1.1475v1.1400000000000001h-1.1475Z" fill="#000000" strokeWidth="0.75"></path><path d="M2.2874999999999996 1.1400000000000001h11.43v1.1475H2.2874999999999996Z" fill="#000000" strokeWidth="0.75"></path><path d="M1.1400000000000001 21.7125h1.1475v1.1475H1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M1.1400000000000001 2.2874999999999996h1.1475v1.1400000000000001H1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M0 3.4275h1.1400000000000001v18.285H0Z" fill="#000000" strokeWidth="0.75"></path></g></svg>,
        component: <div className='w-full h-[50vh] flex justify-center items-center'>
          <h1 className={`text-4xl ${playFair.className}`}>Some great blogs are coming....</h1>
        </div>

    },
    {
        name: "Chat with me",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Interface-Essential-Message--Streamline-Pixel" height="50" width="50"><title>Message me!</title><g><path d="M22.28625 6.285h1.1400000000000001v9.1425h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M21.146250000000002 15.4275h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M21.146250000000002 5.1450000000000005h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M19.99875 16.5675h1.1475v1.1475h-1.1475Z" fill="#000000" strokeWidth="0.75"></path><path d="M19.99875 3.9975h1.1475v1.1475h-1.1475Z" fill="#000000" strokeWidth="0.75"></path><path d="M18.85875 17.715h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M18.85875 2.8575h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M17.71125 18.855h1.1475v1.1400000000000001h-1.1475Z" fill="#000000" strokeWidth="0.75"></path><path d="M16.57125 9.712499999999999h2.2874999999999996V12h-2.2874999999999996Z" fill="#000000" strokeWidth="0.75"></path><path d="M16.57125 1.71h2.2874999999999996v1.1475h-2.2874999999999996Z" fill="#000000" strokeWidth="0.75"></path><path d="M15.431249999999999 19.995h2.2800000000000002v1.1475h-2.2800000000000002Z" fill="#000000" strokeWidth="0.75"></path><path d="M13.143749999999999 21.142500000000002h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z" fill="#000000" strokeWidth="0.75"></path><path d="m5.14125 22.2825 0 -1.1400000000000001 -1.1400000000000001 0 0 1.1400000000000001 -1.1400000000000001 0 0 1.1475 10.2825 0 0 -1.1475 -8.0025 0z" fill="#000000" strokeWidth="0.75"></path><path d="M10.85625 9.712499999999999h2.2874999999999996V12h-2.2874999999999996Z" fill="#000000" strokeWidth="0.75"></path><path d="M8.568750000000001 0.5700000000000001h8.0025v1.1400000000000001h-8.0025Z" fill="#000000" strokeWidth="0.75"></path><path d="M6.28875 1.71h2.2800000000000002v1.1475h-2.2800000000000002Z" fill="#000000" strokeWidth="0.75"></path><path d="m6.28875 19.995 1.1400000000000001 0 0 -1.1400000000000001 -2.2874999999999996 0 0 2.2874999999999996 1.1475 0 0 -1.1475z" fill="#000000" strokeWidth="0.75"></path><path d="M5.14125 9.712499999999999h2.2874999999999996V12h-2.2874999999999996Z" fill="#000000" strokeWidth="0.75"></path><path d="M4.00125 2.8575h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z" fill="#000000" strokeWidth="0.75"></path><path d="M4.00125 17.715h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M2.86125 16.5675h1.1400000000000001v1.1475h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M2.86125 3.9975h1.1400000000000001v1.1475h-1.1400000000000001Z" fill="#000000" strokeWidth="0.75"></path><path d="M1.71375 15.4275h1.1475v1.1400000000000001h-1.1475Z" fill="#000000" strokeWidth="0.75"></path><path d="M1.71375 5.1450000000000005h1.1475v1.1400000000000001h-1.1475Z" fill="#000000" strokeWidth="0.75"></path><path d="M0.57375 6.285h1.1400000000000001v9.1425H0.57375Z" fill="#000000" strokeWidth="0.75"></path></g></svg>,
        component: <SendMessageComponent />
    
    }
]



const OtherNav = () => {
    const [selected, setSelected] = useState<number | null>(1);

    return (
        <motion.div 
            className="w-full flex justify-center items-start py-6"
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: 50 }} 
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <motion.div
                className="w-full max-w-screen-lg flex flex-col items-center gap-6 px-4"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                {/* Icon List */}
                <ul className="flex flex-wrap w-full justify-around gap-6">
                    {options.map((option, index) => (
                        <motion.li
                            key={index}
                            onClick={() => {
                                setSelected(index);
                                playShortClick();
                            }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: index * 0.1, 
                                type: 'spring', 
                                stiffness: 200,
                                damping: 20
                            }}
                            className={`cursor-pointer text-gray-800 dark:text-gray-200 transition duration-200 hover:scale-z-50 flex flex-col items-center justify-center gap-2 p-3  ${retroFont.className} ${selected !== null && selected === index ? 'scale-125' : ''}`}
                        >
                            {option.icon}
                            <span className="text-[8px]">{option.name}</span>
                        </motion.li>
                    ))}
                </ul>

                <div className="w-full flex justify-center items-center rounded-2xl p-4 sm:p-6">
                    {selected !== null && options[selected].component}
                </div>
            </motion.div>
        </motion.div>
    );
};

export default OtherNav;
